<template>
    <div class="flex flex-col my-32 justify-center">
        <div class="text-5xl font-inter font-bold">
            About UMN Programming Club
        </div>
        <div class="font-inter text-gray-500 text-lg mt-4">
            Learn more about our mission, history, and the community we've built.
        </div>

        <div class="flex flex-row mx-56 mt-12">
            <div class="flex flex-col gap-8 w-1/2 mx-12">
                <div class="text-3xl font-inter font-bold">
                    Our Story
                </div>
                <div class="text-gray-500 font-inter text-justify text-lg mt-4">
                    Founded in 2012 by three students passionate about competitive programming, the UMN Programming Club began as a small initiative under the  Faculty of informatics at Universitas Multimedia Nusantara. Initially formed by those who actively joined programming competitions, the club started as an informal group of like-minded individuals eager to grow their skills beyond the classroom.
                    <br />
                    <br />
                    Today, UMNPC stands as one of the active student organizations on campus, fostering a culture of continuous learning, innovation, and collaboration. We remain committed to empowering all members on their journey to grow and excel in the world of technology.
                </div>
            </div>
            <!-- timeline -->
            <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg></a>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </div>
        <!-- Card Bottom -->
        <div class="max-w-7xl mx-auto my-24">
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Our Mission Card -->
                <div class="bg-zinc-950 rounded-lg shadow-sm flex-1 p-6 outline outline-1 outline-offset-[-1px] outline-zinc-800">
                    <div class="flex items-start">
                        <div class="w-9 h-9 bg-sky-500/10 rounded-full flex items-center justify-center mr-4">
                            <div class="w-5 h-5 relative">
                                <div class="w-[5px] h-2.5 absolute right-[1.67px] top-[5px] outline outline-[1.67px] outline-offset-[-0.83px] outline-blue-500"></div>
                                <div class="w-[5px] h-2.5 absolute left-[1.67px] top-[5px] outline outline-[1.67px] outline-offset-[-0.83px] outline-blue-500"></div>
                            </div>
                        </div>
                        <h2 class="text-2xl font-semibold font-inter leading-normal">Our Mission</h2>
                    </div>        
                    <div class="mt-5 space-y-6">
                        <div class="flex items-start">
                            <div class="w-5 h-5 bg-sky-500/5 rounded-full flex items-center justify-center mr-6 mt-1">
                                <div class="w-3 h-3 relative">
                                    <div class="w-1.5 h-0 absolute left-[2.5px] top-[6px] outline outline-1 outline-offset-[-0.5px] outline-blue-500"></div>
                                    <div class="w-1 h-1.5 absolute left-[6px] top-[2.5px] outline outline-1 outline-offset-[-0.5px] outline-blue-500"></div>
                                </div>
                            </div>
                            <p class="text-sm font-normal text-justify font-inter leading-normal">
                                To create a collaborative environment that encourages learning, innovation,<br/>
                                and growth in the field of programming.
                            </p>
                        </div>      
                            <div class="flex items-start">
                                <div class="w-5 h-5 bg-sky-500/5 rounded-full flex items-center justify-center mr-6 mt-1">
                                    <div class="w-3 h-3 relative">
                                        <div class="w-1.5 h-0 absolute left-[2.5px] top-[6px] outline outline-1 outline-offset-[-0.5px] outline-blue-500"></div>
                                        <div class="w-1 h-1.5 absolute left-[6px] top-[2.5px] outline outline-1 outline-offset-[-0.5px] outline-blue-500"></div>
                                    </div>
                                </div>
                                <p class="text-sm font-normal text-justify font-inter leading-normal">
                                    To provide a supportive environment for learning and growth through collaboration with experienced individuals.
                                </p>
                            </div>
                        </div>
                    </div>      
                <!-- Our Vision Card -->
                <div class="bg-zinc-950 rounded-lg shadow-sm flex-1 p-6 outline outline-1 outline-offset-[-1px] outline-zinc-800">
                    <div class="flex items-start">
                        <div class="w-9 h-9 bg-sky-500/10 rounded-full flex items-center justify-center mr-4">
                            <div class="w-5 h-5 relative">
                                <div class="w-4 h-2 absolute left-[1.67px] top-[4.17px] outline outline-[1.67px] outline-offset-[-0.83px] outline-blue-500"></div>
                                    <div class="w-0 h-[5px] absolute left-[18.33px] top-[8.33px] outline outline-[1.67px] outline-offset-[-0.83px] outline-blue-500"></div>
                                    <div class="w-2.5 h-1.5 absolute left-[5px] top-[10.42px] outline outline-[1.67px] outline-offset-[-0.83px] outline-blue-500"></div>
                                </div>
                            </div>
                        <h2 class="text-2xl font-semibold font-inter leading-normal">Our Vision</h2>
                    </div>        
                        <div class="mt-5">
                            <p class="text-neutral-50 text-base text-justify font-normal font-inter leading-normal">
                                To encourage every member to actively participate in at least one competitive programming contest or other programming-related competition.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>