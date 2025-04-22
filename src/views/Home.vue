<template>
    <div class="flex flex-col mt-24 justify-center">
        <img src="/public/assets/img/Group 1.png" alt="Home Image" class="w-1/2 justify-center mx-auto" />
        <div class="text-center mt-8 text-home-font font-inter text-lg leading-relaxed">
            A community of passionate programmers at the<br />
            University Multimedia Nusantara
        </div>
        <div class="text-center mt-8 font-inter text-2xl font-semibold text-home-blue">
            #WeCodeForTheFuture
        </div>
        <div class="flex flex-row mt-8 justify-center gap-4">
            <!-- Tombol "Learn More About Us" -->
            <button type="button" @click="$router.push('/about')" class="px-6 py-2 text-sm font-medium text-white font-inter rounded-lg bg-[#5A00FF] shadow-lg shadow-[#5A00FF]/50 hover:bg-[#4a00d1] transition-all duration-300">
                Learn More About Us
            </button>
            <!-- Tombol "Contact" -->
            <button type="button" @click="$router.push('/contact')" class="px-6 py-2 text-sm font-medium text-white font-inter rounded-lg border border-white bg-transparent hover:bg-[#222] transition-all duration-300">
                Contact
            </button>
        </div>
        
        <!-- Gen12 -->
        <div class="flex justify-center w-full text-white bg-base-light mt-20">
            <div class="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h2 class="text-3xl font-semibold text-home-blue font-inter">70+</h2>
                    <p class="text-sm text-gray-400 mt-1 font-inter">Active Members</p>
                </div>
                <div>
                    <h2 class="text-3xl font-semibold text-home-blue font-inter">Gen 12</h2>
                    <p class="text-sm text-gray-400 mt-1 font-inter">Current Generation</p>
                </div>
                <div>
                    <h2 class="text-3xl font-semibold text-home-blue font-inter">2021</h2>
                    <p class="text-sm text-gray-400 mt-1 font-inter">Year Established</p>
                </div>
            </div>
        </div>

        <!-- UMN Programing & Our Vision -->
        <div class="flex justify-center text-white mt-20">
            <div class="flex flex-col">
                <div class="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-10">
                    <!-- Left Section -->
                    <div class="w-1/2">
                        <h2 class="text-2xl font-bold mb-4">UMN Programming Club</h2>
                        <p class="mb-4">
                            Founded in 2012, the UMN Programming Club is committed to building a supportive
                            community for students at Universitas Multimedia Nusantara who are passionate
                            about coding and interested in competitive programming. We aim to provide
                            resources, mentorship, and various opportunities for students to enhance their
                            programming skills.
                        </p>
                        <p class="mb-6">
                            Our club welcomes students of all experience levels, from beginners to advanced
                            programmers. Join us to collaborate on projects, participate in coding competitions,
                            and network with like-minded individuals.
                        </p>
                        
                    </div>            
                    <!-- Right Section -->
                    <div class="w-1/2 bg-zinc-900 p-6 rounded border border-zinc-800">
                        <h3 class="text-xl font-semibold mb-2">Our Mission</h3>
                        <p class="mb-4 text-sm">
                            To create a collaborative environment that encourages learning, innovation, and
                            growth in the field of programming.
                        </p>
                        <p class="mb-6 text-sm">
                            To provide a supportive environment for learning and growth through collaboration
                            with experienced individuals.
                        </p>
                        <h3 class="text-xl font-semibold mb-2">Our Vision</h3>
                        <p class="text-sm">
                            To encourage every member to actively participate in at least one competitive
                            programming contest or other programming-related competition.
                        </p>
                    </div>
                </div>
                <div>
                    <button class="flex items-center gap-2 bg-tarnsparent text-white font-inter border border-white px-4 py-2 rounded hover:bg-gray-200 transition">
                        Read More
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Achivment Carousel -->
        <div class="text-white bg-base-light mt-20 px-6">
            <div class="text-center mb-10">
                <h2 class="text-2xl font-bold">Our Achievements</h2>
                <p class="text-sm text-gray-400">Celebrating our accomplishments and milestones.</p>
            </div>
            <div class="flex items-center justify-center gap-4">
                <!-- Left Arrow -->
                <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-white hover:bg-gray-700">
                    &lt;
                </button>
                <!-- Achievement Cards -->
                <div class="flex gap-4 overflow-x-auto scrollbar-hide">
                    <!-- Card 1 -->
                    <div class="bg-zinc-900 border border-zinc-800 rounded p-6 w-72 shrink-0">
                        <div class="text-blue-500 text-2xl mb-2">🏅</div>
                        <h3 class="text-lg font-semibold">Compfest Winner</h3>
                        <p class="text-sm text-gray-400 mb-2">2012 UMN Alpha</p>
                        <p class="text-sm text-gray-300">First Place in the Competitive Programming Competition at COMPFEST, organized by Universitas Indonesia.</p>
                    </div>
                    <!-- Card 2 -->
                    <div class="bg-zinc-900 border border-zinc-800 rounded p-6 w-72 shrink-0">
                        <div class="text-blue-500 text-2xl mb-2">🏅</div>
                        <h3 class="text-lg font-semibold">Regional Champions Jakarta</h3>
                        <p class="text-sm text-gray-400 mb-2">2014 UMN Alpha</p>
                        <p class="text-sm text-gray-300">Placed in the Top 13 at the ACM-ICPC Asia Jakarta Regional Contest.</p>
                    </div>
                    <!-- Card 3 -->
                    <div class="bg-zinc-900 border border-zinc-800 rounded p-6 w-72 shrink-0">
                        <div class="text-blue-500 text-2xl mb-2">🏅</div>
                        <h3 class="text-lg font-semibold">Regional Champions Bangkok</h3>
                        <p class="text-sm text-gray-400 mb-2">2014 UMN Alpha</p>
                        <p class="text-sm text-gray-300">16th Place in the Competitive Programming Contest at the ACM-ICPC Asia Regional 2014 in Bangkok.</p>
                    </div>
                </div>
        
                <!-- Right Arrow -->
                <button class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-white hover:bg-gray-700">
                    &gt;
                </button>
            </div>
        </div>

        <!-- Programs -->
        <div class="text-white mt-20 px-6">
            <div class="text-center mb-10">
                <h2 class="text-2xl font-bold">Our Programs</h2>
                <p class="text-sm text-gray-400">Explore the various programs and activities offered by our club.</p>
            </div>
        
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <!-- Card 1 -->
                <div class="bg-zinc-900 border border-zinc-800 rounded p-6 hover:border-white transition">
                    <h3 class="text-lg font-semibold mb-2">Weekly Schedule</h3>
                    <p class="text-sm text-gray-400">Desc…</p>
                </div>
        
                <!-- Card 2 -->
                <div class="bg-zinc-900 border border-zinc-800 rounded p-6 hover:border-white transition">
                    <h3 class="text-lg font-semibold mb-2">Internal Contest</h3>
                    <p class="text-sm text-gray-400">Desc…</p>
                </div>
        
                <!-- Card 3 -->
                <div class="bg-zinc-900 border border-zinc-800 rounded p-6 hover:border-white transition">
                    <h3 class="text-lg font-semibold mb-2">Benchmarking</h3>
                    <p class="text-sm text-gray-400">Desc…</p>
                </div>
            </div>
        </div>

        <!-- Join Blue -->
        <div class="bg-gradient-to-b from-black via-purple-900 to-black py-20 text-center text-white">
            <h2 class="text-2xl font-bold mb-4">Join Our Community</h2>
            <p class="text-sm text-gray-300 max-w-xl mx-auto mb-6">
                Want to be part of an exciting programming community or collaborate on projects with us? Join the UMN Programming Club today!
            </p>
            <div class="flex justify-center gap-4">
                <a href="#" class="bg-violet-600 hover:bg-violet-700 text-white text-sm px-6 py-2 rounded transition">Join the Club</a>
                <a href="#" class="bg-black hover:bg-gray-800 text-white text-sm px-6 py-2 rounded transition border border-gray-700">Contact Us</a>
            </div>
        </div>
    </div>
</template>
