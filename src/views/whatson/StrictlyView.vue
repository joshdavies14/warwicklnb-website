<template>
    <div class="head-block">
        <section
            class="head-inner align-middle h-100 d-flex align-items-center justify-content-center py-4"
        >
            <h1 class="display-5 fw-bold">warwick does strictly</h1>
        </section>
    </div>

    <div class="container h-100 px-5 pt-5">
        <p class="d-flex align-items-center justify-content-center text-center">
            Our biggest and best fundraising event of the year is Warwick does
            Strictly Come Dancing!
        </p>
        <p class="d-flex align-items-center justify-content-center text-center">
            Join us for an unforgettable night of glitz and glamour as Warwick
            Sport and Societies Execs take to the stage with talented partners
            from Latin & Ballroom, Salsa, Argentine Tango and Classical & Modern
            Dance to compete for the coveted Glitterball Trophy! Expect rockin'
            routines, sizzling sambas and tantalising tangos, and special guest
            performances from Warwick Tap.
        </p>

        <!-- Carousel here -->
        <div
            id="strictlyCarousel"
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
                data-bs-target="#strictlyCarousel"
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
                data-bs-target="#strictlyCarousel"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="row">
            <div class="col">
                <p
                    class="text-center"
                >
                    In 2021, Warwick does Strictly Come Dancing was a
                    live-streamed event with couples performing either within
                    their household or socially-distanced. Warwick Latin &
                    Ballroom raised money for YoungMindsUK, an incredible mental
                    health charity that supports young people in the UK. You can
                    learn more about YoungMindsUK by visiting their website
                    <a href="https://www.youngminds.org.uk">here</a>.
                </p>
                <p
                    class="text-center"
                >
                    Warwick Strictly 2022 was on Friday 4th February 2022 and
                    once again it was a fabulous evening of glitz, glam and many
                    sparkles. It was an amazing night for fundraising, with a
                    massive £4748.79 for Coventry Foodbank, a charity helping
                    those in crisis.
                </p>
                <p
                    class="text-center"
                >
                    In 2023, Warwick Does Strictly was held raising money for
                    icandance, a community who celebrate children and young
                    people with disabilities, empowering them through dance and
                    performance. An amazing £4500 was raised for icandance and
                    we are so thankful for everyone who attended in person or
                    watched online - it was once again a fabulous night.
                </p>
                <p
                    class="d-flex align-items-center justify-content-center text-center"
                >
                    Missed out on Strictly 2023 and want to catch up? We've got
                    you covered - checkout the live stream below along with the
                    playlist of the individual dances.
                </p>
                <div class="d-flex align-items-center justify-content-center py-2">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube-nocookie.com/embed/H3LGylLOCz4"
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="d-flex align-items-center justify-content-center py-2">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube-nocookie.com/embed/videoseries?list=PLfUtDteqnUG37fQ8_sCxB70fLbewjExs6"
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as contentful from "contentful";

export default defineComponent({
    name: "StrictlyView",
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
                "metadata.tags.sys.id[in]": "images-strictly",
            })
            // @ts-ignore
            .then((response) => (this.images = response.items))
            .catch(console.error);
    },
});
</script>
