<template>
    <div class="head-block">
        <section
            class="
                head-inner
                align-middle
                h-100
                d-flex
                align-items-center
                justify-content-center
                py-4
            "
        >
            <h1 class="display-5 fw-bold">socials</h1>
        </section>
    </div>

    <div class="container h-100 px-5 pt-5">
        <p>
            Classes and competitions can be intense so it's important we allow
            ourselves time to relax in good company. Our Social Secretaries
            ensure social events are a regular occurrence, with emphasis on
            meeting new people and building a second family for everyone
            involved.
        </p>

        <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade socials-carousel pb-2"
            data-bs-ride="carousel"
        >
            <div class="carousel-inner">
                <div
                    v-for="(image, i) in images"
                    :key="image.fields.title + '-i'"
                    class="carousel-item"
                    :class="i === 0 ? 'active' : ''"
                >
                    <img
                        :src="image.fields.file.url"
                        class="d-block w-100"
                        :alt="image.fields.title"
                    />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <p>
            The most popular social event at Warwick is called 'Circling' and is
            usually followed by POP! in the Copper Rooms (the SU's night out
            event). We attend a couple of these events per term, usually with a
            fun dress-up theme to follow. The nature of these events have come
            into question recently, however, we assure you that the safety and
            well-being of participants is our highest priority. We DO NOT and
            WILL NOT pressure, coerce or guilt anyone into drinking behaviours
            they are uncomfortable with, and a sober Exec member is always
            present.
        </p>
        <p>
            We also have plenty of fun sober socials throughout the year which
            offer students a space to relax and do something fun together. Our
            favourites have included a trip to Birmingham Christmas Market, a
            Murder Mystery written by a member of our Exec and a brunch at the
            beginning of Term 1.
        </p>
    </div>
</template>

<script lang="ts">
import * as contentful from "contentful";
import { defineComponent } from "vue";

export default defineComponent({
    name: "SocialsView",
    data() {
        return {
            images: [],
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
            .getAssets({
                "metadata.tags.sys.id[in]": "images-socials",
            })
            // @ts-ignore
            .then((response) => (this.images = response.items))
            .catch(console.error);
    },
});
</script>
