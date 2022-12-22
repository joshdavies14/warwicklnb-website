<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav
      class="nav-container navbar navbar-expand-lg bg-light sticky-top nav-content"
    >
      <div class="container-fluid d-flex">
        <div
          class="d-flex flex-row flex-grow-1 align-items-center justify-content-center px-3 py-3"
          id="navbarSupportedContent"
        >
          <ul
            class="nav navbar-nav nav-flush mb-0 justify-content-start align-items-center"
          >
            <li class="nav-item align-middle">
              <RouterLink to="/" class="nav-link align-middle px-3"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item align-middle">
              <RouterLink to="/calendar" class="nav-link align-middle px-3"
                >What's On</RouterLink
              >
            </li>
            <li class="nav-item align-middle">
              <RouterLink to="/get-involved" class="nav-link align-middle px-3"
                >Let's Dance</RouterLink
              >
            </li>
            <li class="nav-item align-middle">
              <RouterLink to="/about" class="nav-link align-middle px-3"
                >About</RouterLink
              >
            </li>
            <li class="nav-item align-middle">
              <RouterLink to="/documents" class="nav-link align-middle px-3"
                >Documents</RouterLink
              >
            </li>
            <li class="nav-item align-middle">
              <RouterLink to="/contact" class="nav-link align-middle px-3"
                >Contact Us</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="pb-4">
    <RouterView />
  </main>

  <div class="container">
    <footer class="pt-5">
      <div
        class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
      >
        <p>&copy; 2022 Warwick Latin & Ballroom</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a href="https://www.facebook.com/warwicklnb">
              <font-awesome-icon
                icon="fa-brands fa-facebook"
              ></font-awesome-icon>
            </a>
          </li>
          <li class="ms-3">
            <a href="https://www.instagram.com/warwicklnb/">
              <font-awesome-icon
                icon="fa-brands fa-instagram"
              ></font-awesome-icon>
            </a>
          </li>
          <li class="ms-3">
            <a href="https://www.youtube.com/@warwicklatinballroomoffici2412">
              <font-awesome-icon
                icon="fa-brands fa-youtube"
              ></font-awesome-icon>
            </a>
          </li>
          <li class="ms-3">
            <a href="https://www.tiktok.com/@officialwarwicklnb">
              <font-awesome-icon icon="fa-brands fa-tiktok"></font-awesome-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
