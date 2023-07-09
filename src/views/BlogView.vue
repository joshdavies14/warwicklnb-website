<template>
    <div class="head-block">
        <section
            class="head-inner align-middle h-100 d-flex align-items-center justify-content-center py-4"
        >
            <h1 class="display-5 fw-bold">blog</h1>
        </section>
    </div>

    <div class="container h-100 px-5 pt-5">
        <section v-for="post in posts" :key="post.sys.id">
            <div
                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
                <div class="col p-4 d-flex flex-column position-static">
                    <h3 class="mb-0">{{ post.fields.title }}</h3>
                    <div class="mb-1 text-muted">
                        {{ post.fields.author }} /
                        {{ formatDate(post.fields.date) }}
                    </div>
                    <a
                        :href="`/blog/${post.fields.slug}`"
                        class="stretched-link"
                    >Continue reading</a
                    >
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import * as contentful from 'contentful';
import { DateTime } from 'luxon';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BlogView',
    data() {
        return {
            posts: [],
        };
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
                content_type: 'blog',
                include: 2,
                order: '-fields.date',
            })
            // @ts-ignore
            .then((response) => (this.posts = response.items))
            .catch(console.error);
    },
    methods: {
        formatDate(date: string) {
            return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
        },
    },
});
</script>
