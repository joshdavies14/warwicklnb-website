<template>
    <h2 class="d-flex align-items-center justify-content-center pb-3 pt-5">
        our committee
    </h2>

    <div class="container h-100 px-5">
        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center justify-content-center"
        >
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="getExec('president').fields.image.fields.file.url"
                        :alt="getExec('president').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{ getExec("president").fields.name }}</strong>
                        <br />
                        {{ getExec("president").fields.position }}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center justify-content-center"
        >
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('vicepresident').fields.image.fields.file
                                .url
                        "
                        :alt="
                            getExec('vicepresident').fields.image.fields.title
                        "
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("vicepresident").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("vicepresident").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="getExec('treasurer').fields.image.fields.file.url"
                        :alt="getExec('treasurer').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{ getExec("treasurer").fields.name }}</strong>
                        <br />
                        {{ getExec("treasurer").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="getExec('secretary').fields.image.fields.file.url"
                        :alt="getExec('secretary').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{ getExec("secretary").fields.name }}</strong>
                        <br />
                        {{ getExec("secretary").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="getExec('coaching').fields.image.fields.file.url"
                        :alt="getExec('coaching').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{ getExec("coaching").fields.name }}</strong>
                        <br />
                        {{ getExec("coaching").fields.position }}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center justify-content-center"
        >
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('teamCaptain1').fields.image.fields.file.url
                        "
                        :alt="getExec('teamCaptain1').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("teamCaptain1").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("teamCaptain1").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('teamCaptain2').fields.image.fields.file.url
                        "
                        :alt="getExec('teamCaptain2').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("teamCaptain2").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("teamCaptain2").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('performance').fields.image.fields.file.url
                        "
                        :alt="getExec('performance').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("performance").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("performance").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('sponsorship').fields.image.fields.file.url
                        "
                        :alt="getExec('sponsorship').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("sponsorship").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("sponsorship").fields.position }}
                    </p>
                </div>
            </div>
        </div>
        <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center justify-content-center"
        >
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="getExec('events1').fields.image.fields.file.url"
                        :alt="getExec('events1').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{ getExec("events1").fields.name }}</strong>
                        <br />
                        {{ getExec("events1").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="getExec('events2').fields.image.fields.file.url"
                        :alt="getExec('events2').fields.image.fields.title"
                    />
                    <p class="text-center pt-2">
                        <strong>{{ getExec("events2").fields.name }}</strong>
                        <br />
                        {{ getExec("events2").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('socialSecretary1').fields.image.fields.file
                                .url
                        "
                        :alt="
                            getExec('socialSecretary1').fields.image.fields
                                .title
                        "
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("socialSecretary1").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("socialSecretary1").fields.position }}
                    </p>
                </div>
            </div>
            <div class="col col-md-3">
                <div class="committee-image">
                    <img
                        :src="
                            getExec('socialSecretary2').fields.image.fields.file
                                .url
                        "
                        :alt="
                            getExec('socialSecretary2').fields.image.fields
                                .title
                        "
                    />
                    <p class="text-center pt-2">
                        <strong>{{
                            getExec("socialSecretary2").fields.name
                        }}</strong>
                        <br />
                        {{ getExec("socialSecretary2").fields.position }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import * as contentful from "contentful";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Committee",
    data() {
        return {
            exec: [],
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
                content_type: "exec",
                include: 2,
            })
            // @ts-ignore
            .then((response) => (this.exec = response.items))
            .catch(console.error);
    },
    methods: {
        getExec(id: string) {
            return this.exec.find((entry) => entry.fields.positionId === id);
        },
    },
});
</script>
