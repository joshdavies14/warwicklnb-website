<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav-container navbar navbar-expand-lg bg-light sticky-top nav-content">
        <div class="container-fluid d-flex">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex flex-row flex-grow-1 align-items-center justify-content-center px-3 py-3" id="navbarSupportedContent">
                <ul class="nav navbar-nav nav-flush mb-0 justify-content-start align-items-center">
                    <li class="nav-item align-middle">
                        <RouterLink to="/" class="nav-link align-middle px-3">Home</RouterLink>
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink to="/about" class="nav-link align-middle px-3">What's On</RouterLink>
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink to="/about" class="nav-link align-middle px-3">Let's Dance</RouterLink>
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink to="/about" class="nav-link align-middle px-3">About</RouterLink>
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink to="/about" class="nav-link align-middle px-3">Documents</RouterLink>
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink to="/about" class="nav-link align-middle px-3">Contact Us</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container py-4">
      <RouterView />
    </div>
  </header>
</template>
