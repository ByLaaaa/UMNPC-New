<template>
    <div class="flex flex-col mt-32 justify-center">
        <div class="text-5xl mt-12 font-inter font-bold">
            About UMN Programming Club
        </div>
        <div class="font-inter text-gray-500 text-lg mt-4">
            Learn more about our mission, history, and the community we've built.
        </div>

        <div class="flex flex-row mx-5 md:mx-40 mt-12">
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
                <div class="text-3xl font-inter font-bold mb-10">
                    Timeline
                </div>
                <li class="mb-8 ms-4 text-start">
                    <div class="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2012</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Club founded by 3 Computer Science students</p>
                </li>
                <li class="mb-8 ms-4 text-start">
                    <div class="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2014</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Started participating in the ICPC Regional Contest</p>
                </li>
                <li class="mb-8 ms-4 text-start">
                    <div class="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2017</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Started organizing a national competitive programming contest</p>
                </li>
                <li class="mb-8 ms-4 text-start">
                    <div class="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">2018</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">A significant increase in membership and partnerships were achieved</p>
                </li>
                <li class="mb-8 ms-4 text-start">
                    <div class="absolute w-3 h-3 bg-sky-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-sky-500"></div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Today</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">60+ active members and we are recognized as a premier tech club in UMN</p>
                </li>
            </ol>
        </div>
        <!-- Card Bottom -->
        <div class="max-w-7xl mx-auto my-24">
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Our Mission Card -->
                <div class="bg-zinc-950 rounded-lg shadow-sm flex-1 p-6 outline outline-1 outline-offset-[-1px] outline-zinc-800">
                    <div class="flex items-start">
                        <div class="w-9 h-9 bg-[#090e26] rounded-full flex items-center justify-center mr-4">
                            <div class="w-5 h-5 relative">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16" stroke="#4299e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </div>
                        <h2 class="text-2xl font-semibold font-inter leading-normal">Our Mission</h2>
                    </div>
                    <div class="mt-5 space-y-6">
                        <div class="flex items-start">
                            <div class="w-5 h-5 bg-[#090e26] rounded-full flex items-center justify-center mr-6 mt-1">
                                <div class="w-3 h-3 relative">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#4299e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </div>
                            </div>
                            <p class="text-sm font-normal text-justify font-inter leading-normal">
                                To create a collaborative environment that encourages learning, innovation,<br/>
                                and growth in the field of programming.
                            </p>
                        </div>      
                            <div class="flex items-start">
                                <div class="w-5 h-5 bg-[#090e26] rounded-full flex items-center justify-center mr-6 mt-1">
                                    <div class="w-3 h-3 relative">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#4299e1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
                        <div class="w-9 h-9 bg-[#090e26] rounded-full flex items-center justify-center mr-4">
                            <div class="w-5 h-5 relative">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4493 3.07772C12.1667 2.93543 11.8333 2.93535 11.5505 3.07751L0.550856 8.60778C-0.182453 8.97646 -0.18386 10.0228 0.548455 10.3934L5 12.6465V17C5 19.2091 6.79086 21 9 21H15C17.2091 21 19 19.2091 19 17V12.6352L22 11.124V14C22 14.5523 22.4477 15 23 15C23.5523 15 24 14.5523 24 14V9.62991C24 9.20695 23.8394 8.81077 23.4424 8.61095C19.7781 6.76658 16.1137 4.92212 12.4493 3.07772ZM11.9995 5.09035L3.22034 9.5042L11.9742 13.9349L20.7693 9.50453L11.9995 5.09035ZM7 17V13.6588L11.5216 15.9474C11.8049 16.0908 12.1394 16.0911 12.423 15.9482L17 13.6427V17C17 18.1046 16.1046 19 15 19H9C7.89543 19 7 18.1046 7 17Z" fill="#4299e1"></path> </g></svg>
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
                <!-- Logo Section -->
                <div class="mt-12">
                    <div class="text-3xl text-left font-inter font-bold">
                        Our Logo
                    </div>
                    <div class="flex flex-col">
                        <img src="/public/images/logo-111.svg" class="w-48" alt="">
                    </div>
                </div>
                <!-- Join Us Section -->
                <div class="max-w-7xl mt-12 bg-zinc-950 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-800 py-8 px-4">
                    <div class="flex flex-col items-center justify-center">
                        <!-- Heading -->
                        <h2 class="text-2xl font-bold font-inter leading-loose text-center mb-6">
                        Ready to Join Us?
                    </h2>
                    
                    <!-- Description -->
                    <div class="max-w-2xl mx-auto mb-10">
                        <p class="text-center text-gray-300 text-base font-normal font-inter leading-normal">
                            Whether you're just starting your programming journey or you're an experienced<br/>
                            developer, there's a place for you in our community.
                        </p>
                    </div>
                    
                    <!-- Buttons -->
                    <div class="flex flex-row gap-4">
                        <button class="bg-blue-700 rounded-md shadow-[0px_0px_20px_0px_rgba(30,174,219,0.30)] shadow-[0px_0px_10px_0px_rgba(7,54,255,0.50)] px-4 py-2">
                            <span class=" text-sm font-medium font-inter leading-tight">Join Our Club</span>
                        </button>
                        <button class="bg-zinc-950 rounded-md outline outline-1 outline-offset-[-1px] outline-zinc-800 px-4 py-2">
                            <span class="text-sm font-medium font-inter leading-tight">Contact Us</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>