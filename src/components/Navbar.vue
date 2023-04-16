<template>
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
                    <li class="nav-item align-middle dropdown">
                        <a
                            href="#"
                            class="nav-link dropdown-toggle align-middle px-3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-reference="parent"
                        >
                            What's On
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink
                                    to="/calendar"
                                    class="dropdown-item"
                                >
                                    Calendar
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/socials" class="dropdown-item">
                                    Socials
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/varsity" class="dropdown-item">
                                    Warwick Varsity
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/strictly"
                                    class="dropdown-item"
                                >
                                    Warwick Does Strictly
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item align-middle dropdown">
                        <a
                            href="/#"
                            class="nav-link dropdown-toggle align-middle px-3"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-reference="parent"
                        >
                            Let's Dance
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink to="/classes" class="dropdown-item">
                                    Classes
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink
                                    to="/competitions"
                                    class="dropdown-item"
                                >
                                    Competitions
                                </RouterLink>
                            </li>
                        </ul>
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
                            to="/blog"
                            class="nav-link align-middle px-3"
                            >Blog</RouterLink
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
