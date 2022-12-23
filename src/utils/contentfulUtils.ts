/**
 * This code is adapted from the contentful rich-text-html-renderer package.
 * Original source: https://github.com/contentful/rich-text/tree/master/packages/rich-text-html-renderer
 */

import escape from 'escape-html';
import {
  Document,
  Mark,
  Text,
  BLOCKS,
  MARKS,
  INLINES,
  Block,
  Inline,
  helpers,
} from '@contentful/rich-text-types';

const attributeValue = (value: string) => `"${value.replace(/"/g, '&quot;')}"`;

const downloadIcon = '<svg class="svg-inline--fa fa-download" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"></path></svg>';

const defaultNodeRenderers: RenderNode = {
  [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
  [BLOCKS.HEADING_1]: (node, next) => `<h1>${next(node.content)}</h1>`,
  [BLOCKS.HEADING_2]: (node, next) => `<h2>${next(node.content)}</h2>`,
  [BLOCKS.HEADING_3]: (node, next) => `<h3>${next(node.content)}</h3>`,
  [BLOCKS.HEADING_4]: (node, next) => `<h4>${next(node.content)}</h4>`,
  [BLOCKS.HEADING_5]: (node, next) => `<h5>${next(node.content)}</h5>`,
  [BLOCKS.HEADING_6]: (node, next) => `<h6>${next(node.content)}</h6>`,
  [BLOCKS.EMBEDDED_ENTRY]: (node, next) => `<div>${next(node.content)}</div>`,
  [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
    // return different if an image
    const href = typeof node.data.target.fields.file.url === 'string' ? node.data.target.fields.file.url : '';
    return `<a href=${attributeValue(href)}>${node.data.target.fields.title} ${downloadIcon}</a>`;
  },
  [BLOCKS.UL_LIST]: (node, next) => `<ul>${next(node.content)}</ul>`,
  [BLOCKS.OL_LIST]: (node, next) => `<ol>${next(node.content)}</ol>`,
  [BLOCKS.LIST_ITEM]: (node, next) => `<li>${next(node.content)}</li>`,
  [BLOCKS.QUOTE]: (node, next) => `<blockquote>${next(node.content)}</blockquote>`,
  [BLOCKS.HR]: () => '<hr/>',
  [BLOCKS.TABLE]: (node, next) => `<table>${next(node.content)}</table>`,
  [BLOCKS.TABLE_ROW]: (node, next) => `<tr>${next(node.content)}</tr>`,
  [BLOCKS.TABLE_HEADER_CELL]: (node, next) => `<th>${next(node.content)}</th>`,
  [BLOCKS.TABLE_CELL]: (node, next) => `<td>${next(node.content)}</td>`,
  [INLINES.ASSET_HYPERLINK]: (node) => defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
  [INLINES.ENTRY_HYPERLINK]: (node) => defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
  [INLINES.EMBEDDED_ENTRY]: (node) => defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
  [INLINES.HYPERLINK]: (node, next) => {
    const href = typeof node.data.uri === 'string' ? node.data.uri : '';
    return `<a href=${attributeValue(href)}>${next(node.content)}</a>`;
  },
};

const defaultMarkRenderers: RenderMark = {
  [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
  [MARKS.ITALIC]: (text) => `<em>${text}</em>`,
  [MARKS.UNDERLINE]: (text) => `<u>${text}</u>`,
  [MARKS.CODE]: (text) => `<code>${text}</code>`,
  [MARKS.SUPERSCRIPT]: (text) => `<sup>${text}</sup>`,
  [MARKS.SUBSCRIPT]: (text) => `<sub>${text}</sub>`,
};

const defaultInline = (type: string, node: Inline) =>
  `<span>type: ${escape(type)} id: ${escape(node.data.target.sys.id)}</span>`;

export type CommonNode = Text | Block | Inline;

export interface Next {
  (nodes: CommonNode[]): string;
}

export interface NodeRenderer {
  (node: Block | Inline, next: Next): string;
}

export interface RenderNode {
  [k: string]: NodeRenderer;
}

export interface RenderMark {
  [k: string]: (text: string) => string;
}

export interface Options {
  /**
   * Node renderers
   */
  renderNode?: RenderNode;
  /**
   * Mark renderers
   */
  renderMark?: RenderMark;
}

/**
 * Serialize a Contentful Rich Text `document` to an html string.
 */
export function documentToHtmlString(
  richTextDocument: Document,
  options: Partial<Options> = {},
): string {
  if (!richTextDocument || !richTextDocument.content) {
    return '';
  }

  return nodeListToHtmlString(richTextDocument.content, {
    renderNode: {
      ...defaultNodeRenderers,
      ...options.renderNode,
    },
    renderMark: {
      ...defaultMarkRenderers,
      ...options.renderMark,
    },
  });
}

function nodeListToHtmlString(nodes: CommonNode[], { renderNode, renderMark }: Options): string {
  return nodes.map<string>((node) => nodeToHtmlString(node, { renderNode, renderMark })).join('');
}

function nodeToHtmlString(node: CommonNode, { renderNode, renderMark }: Options): string {
  if (helpers.isText(node)) {
    const nodeValue = escape(node.value);
    if (node.marks.length > 0) {
      return node.marks.reduce((value: string, mark: Mark) => {
        if (!renderMark[mark.type]) {
          return value;
        }
        return renderMark[mark.type](value);
      }, nodeValue);
    }

    return nodeValue;
  } else {
    const nextNode: Next = (nodes) => nodeListToHtmlString(nodes, { renderMark, renderNode });
    if (!node.nodeType || !renderNode[node.nodeType]) {
      // TODO: Figure what to return when passed an unrecognized node.
      console.log(node);
      return '';
    }
    return renderNode[node.nodeType](node, nextNode);
  }
}
