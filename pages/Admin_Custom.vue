<template>
    <header>
        <NavBArUsr />
    </header>

    <body class="bg-[#1e1e1e] ">
        <div class="flex justify-center items-center min-h-screen divide-x divide-white">
            <div class="flex flex-col items-center justify-center px-32 text-center min-h-screen">
                <nuxt-link to="/">
                    <i class="fa-solid fa-user-pen text-9xl" style="color: #ffffff;"></i>
                    <div class="text-4xl text-white font-bold mt-4">
                        บริการของเรา
                    </div>
                </nuxt-link>
            </div>


            <div class="flex flex-col items-center px-32">
                <nuxt-link to="/">
                    <i class="fa-solid fa-warehouse text-9xl" style="color: #ffffff;"></i>
                    <div class="text-4xl text-white font-bold mt-6">
                        ผลงานของเรา
                    </div>
                </nuxt-link>
            </div>

            <div class="flex flex-col items-center px-32">
                <nuxt-link to="/">
                    <i class="fa-solid fa-earth-americas text-9xl" style="color: #ffffff;"></i>
                    <div class="text-4xl text-white font-bold mt-6">
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