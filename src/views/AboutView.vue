<template>
    <div class="head-block">
        <section
            class="head-inner align-middle h-100 d-flex align-items-center justify-content-center py-4"
        >
            <h1 class="display-5 fw-bold">about us</h1>
        </section>
    </div>

    <div class="container h-100 px-5 pt-5">
        <h2 class="d-flex align-items-center justify-content-center pb-3">
            our mission
        </h2>
        <p class="d-flex align-items-center justify-content-center text-center">
            Warwick Latin and Ballroom Dancesport are dedicated to providing
            training in Latin and Ballroom dancing across all abilities, from
            beginners to advanced. Our classes are taught by nationally renowned
            coaches and cover all 10 of the Latin and Ballroom dances (Waltz,
            Tango, Foxtrot, Viennese Waltz, Quickstep, Cha Cha, Samba, Rumba,
            Paso Doble and Jive).
        </p>

        <p class="d-flex align-items-center justify-content-center text-center">
            Community, competition and charity are just a few of the things that
            Warwick Latin and Ballroom stand for. This club is not only a place
            for aspiring dancers, students and non-students alike, but for
            anyone who looks to enjoy themselves in the company of fun, generous
            and ambitious individuals. We are proud that all members view this
            club as a second family, driven by our wide range of classes,
            socials and competitions that contribute to this atmosphere. This
            positivity and ambition inside the club is not only recognised by
            our wonderful members but across the dancing community as we
            continue to gain numerous titles and establish a strong presence for
            our skill, charity and personality.
        </p>
    </div>

    <Fundraising />
</template>

<script setup lang="ts">
import Fundraising from "./about/Fundraising.vue";
</script>
