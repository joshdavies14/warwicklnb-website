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
            <h1 class="display-5 fw-bold">classes</h1>
        </section>
    </div>

    <div class="container h-100 px-5 pt-5">
        <p>
            We welcome people of all dance abilities, from complete beginners to
            those who have danced for years. Per week, we run three classes
            consisting of Beginner, Novice and Intermediate/Advanced. 
        </p>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button
                        class="accordion-button fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        beginners
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <p>
                            A Beginner is classed as "a present student who has
                            neither received professional tuition (individually
                            or in groups) in Latin American and/or Modern
                            Ballroom, nor competed in any university or open
                            circuit competitions in dancesport, prior to the
                            IVDC of the previous academic year" (IVDA
                            Constitution).
                        </p>

                        <p>
                            Our Beginner classes are tailor-made for students
                            who have never danced the style before. The classes
                            progress gradually throughout the year, initially
                            focussing on the routine, and then introducing
                            performance and technique as dancers become
                            confident in the steps.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                        class="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        novice
                    </button>
                </h2>
                <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <p>
                            A Novice is classed as someone who has previously
                            danced Latin and Ballroom for a moderate amount of
                            time, or potentially another dance style for a
                            significant period of time from which they feel
                            comfortable and able to start at a non-beginner
                            level.
                        </p>
                        <p>
                            Our Novice classes are focused on providing a fun
                            but structured teaching environment to ensure dancer
                            progression. The classes concentrate more heavily on
                            technique than beginner lessons and will introduce
                            dancers to competitive dances outside the
                            traditional four allowing them to develop their
                            understanding and performance skills.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button
                        class="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                    >
                        intermediate/advanced
                    </button>
                </h2>
                <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        <p>
                            An Intermediate/Advanced dancer is classed as
                            someone who has danced Latin and Ballroom for a
                            considerable period of time and maintains a high
                            standard of technique.
                        </p>
                        <p>
                            Our Intermediate/Advanced classes are focused on
                            pushing the outstanding standard of technique and
                            showmanship that constitutes a top-level dancer. The
                            classes aim to drive creativity into our dancers so
                            they are immediately recognisable and able to
                            seamlessly dance more complicated steps. These
                            classes are also perfect for top-level novices
                            wishing to progress to the next level.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="text-center pt-5">class timetable</h3>

        <div class="card-group pt-3">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">monday</h5>
                    <p class="card-text">
                        6.25 - 7.55pm - novice (cryfield pavillion)
                    </p>
                    <p class="card-text">
                        8.05 - 9.35pm - inter/adv (cryfield pavillion)
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">tuesday</h5>
                    <p class="card-text">
                        7.30 - 9.00pm - beginners (westwood games hall)
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">wednesday</h5>
                    <p class="card-text">
                        11.30am - 1.30pm - practice space (studio 2)
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">thursday</h5>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">friday</h5>
                    <p class="card-text">
                        7.00 - 9.00pm - social class (studios 1, 3 & 4)
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">saturday</h5>
                    <p class="card-text">
                        3.30 - 6.00pm - practice space (studios 1, 3 & 4)
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">sunday</h5>
                    <p class="card-text">
                        5.30 - 8.00pm - practice space (studios 1, 3 & 4)
                    </p>
                </div>
            </div>
        </div>

        <h3 class="text-center pt-5">pricing</h3>

        <p class="pt-3">
            There are two ways to pay for our classes: pay as you go and pay for
            a term up front with a class pass. The first two weeks of each term
            are free for everyone, then from week 3 onwards you need to pay each
            week, unless you have a class pass then you get two additional weeks
            free. If you pay as you go, you can either pay in cash or via bank
            transfer to our treasurer.
        </p>

        <div class="card-group pt-3">
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">beginner</h5>
                    <p class="card-text">
                        <strong>£2.50</strong> - member <br />
                        <strong>£3.50</strong> - non-member <br />
                        <strong>£15</strong> - class pass
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">novice</h5>
                    <p class="card-text">
                        <strong>£3</strong> - member <br />
                        <strong>£4</strong> - non-member <br />
                        <strong>£18</strong> - class pass
                    </p>
                </div>
            </div>
            <div class="card text-center">
                <div class="card-body">
                    <h5 class="card-title">inter/adv</h5>
                    <p class="card-text">
                        <strong>£4</strong> - member <br />
                        <strong>£5</strong> - non-member <br />
                        <strong>£24</strong> - class pass
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>