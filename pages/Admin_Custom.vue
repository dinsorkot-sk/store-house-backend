<template>
    <header>
        <NavBArUsr />
    </header>

    <body class="bg-[#1e1e1e]">
        <div
            class="flex flex-col lg:flex-row justify-center items-center min-h-screen divide-y lg:divide-y-0 lg:divide-x divide-white">
            <!-- Section: บริการของเรา -->
            <div class="flex flex-col items-center justify-center px-8 py-8 text-center lg:px-16">
                <nuxt-link to="/">
                    <i class="fa-solid fa-user-pen text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                        style="color: #ffffff;"></i>
                    <div class="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-4">
                        บริการของเรา
                    </div>
                </nuxt-link>
            </div>

            <!-- Section: ผลงานของเรา -->
            <div class="flex flex-col items-center justify-center px-8 py-8 text-center lg:px-16">
                <nuxt-link to="/">
                    <i class="fa-solid fa-warehouse text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                        style="color: #ffffff;"></i>
                    <div class="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-4">
                        ผลงานของเรา
                    </div>
                </nuxt-link>
            </div>

            <!-- Section: Social Media -->
            <div class="flex flex-col items-center justify-center px-8 py-8 text-center lg:px-16">
                <nuxt-link to="/">
                    <i class="fa-solid fa-earth-americas text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                        style="color: #ffffff;"></i>
                    <div class="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-4">
                        Social media
                    </div>
                </nuxt-link>
            </div>
        </div>
    </body>


    <footer>
        <FootBar />
    </footer>


</template>