<template>
    <nav
        class="
            nav-container
            navbar navbar-expand-lg
            bg-light
            sticky-top
            nav-content
        "
    >
        <div class="container-fluid d-flex">
            <div
                class="
                    d-flex
                    flex-row flex-grow-1
                    align-items-center
                    justify-content-center
                    px-3
                    py-3
                "
                id="navbarSupportedContent"
            >
                <ul
                    class="
                        nav
                        navbar-nav
                        nav-flush
                        mb-0
                        justify-content-start
                        align-items-center
                    "
                >
                    <li class="nav-item align-middle">
                        <RouterLink to="/" class="nav-link align-middle px-3"
                            >Home</RouterLink
                        >
                    </li>
                    <li class="nav-item align-middle dropdown">
                        <div class="btn-group">
                            <RouterLink
                                to="/calendar"
                                class="nav-link align-middle px-3"
                                >What's On</RouterLink
                            >
                            <button
                                type="button"
                                class="btn dropdown-toggle dropdown-toggle-split ps-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-reference="parent"
                            >
                                <span class="visually-hidden"
                                    >Toggle Dropdown</span
                                >
                            </button>

                            <ul class="dropdown-menu">
                                <li>
                                    <RouterLink
                                        to="/socials"
                                        class="dropdown-item"
                                        >Socials</RouterLink
                                    >
                                </li>
                                <li>
                                    <RouterLink
                                        to="/varsity"
                                        class="dropdown-item"
                                        >Wariwck Varsity</RouterLink
                                    >
                                </li>
                                <li>
                                    <RouterLink
                                        to="/strictly"
                                        class="dropdown-item"
                                        >Warwick Does Strictly</RouterLink
                                    >
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink
                            to="/get-involved"
                            class="nav-link align-middle px-3"
                            >Let's Dance</RouterLink
                        >
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink
                            to="/about"
                            class="nav-link align-middle px-3"
                            >About</RouterLink
                        >
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink
                            to="/documents"
                            class="nav-link align-middle px-3"
                            >Documents</RouterLink
                        >
                    </li>
                    <li class="nav-item align-middle">
                        <RouterLink
                            to="/contact"
                            class="nav-link align-middle px-3"
                            >Contact Us</RouterLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>