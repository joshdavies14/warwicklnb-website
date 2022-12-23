<template>
    <div v-if="isLoading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else class="head-block">
        <section
            class="
                head-inner
                h-100
                d-flex
                flex-column
                align-items-center
                justify-content-center
                py-4
            "
        >
            <h1 class="display-5 fw-bold d-block">
                {{ post.fields.title }}
            </h1>
            <p class="mb-1 d-block">
                {{ post.fields.author }} / {{ formatDate(post.fields.date) }}
            </p>
        </section>
    </div>

    <div class="container h-100 px-5 pt-5">
        <div id="post-content" v-html="postContent"></div>
    </div>
</template>

<script lang="ts">
import * as contentful from "contentful";
import { DateTime } from "luxon";
import { documentToHtmlString } from "../utils/contentfulUtils";
import { defineComponent } from "vue";

export default defineComponent({
    name: "BlogPostView",
    data() {
        return {
            post: null,
            postContent: "",
            isLoading: true,
        };
    },
    watch: {
        post() {
            if (this.post !== null) {
                this.postContent = documentToHtmlString({
                    // @ts-ignore
                    nodeType: "document",
                    content: JSON.parse(
                        // @ts-ignore
                        JSON.stringify(this.post.fields.content.content)
                    ),
                });
                this.isLoading = false;
            }
        },
    },
    mounted() {
        const client = contentful.createClient({
            // @ts-ignore
            space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
            // @ts-ignore
            environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT_ID,
            // @ts-ignore
            accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
        });
        client
            .getEntries({
                content_type: "blog",
                include: 5,
                limit: 1,
                "fields.slug": this.$route.params.slug,
            })
            // @ts-ignore
            .then((response) => (this.post = response.items[0]))
            .catch(console.error);
    },
    methods: {
        formatDate(date: string) {
            return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
        },
    },
});
</script>
