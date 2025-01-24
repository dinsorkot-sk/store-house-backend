<template>

    <header>
        <NavBArUsr />
    </header>

    <body class="bg-[#1e1e1e]">

        <div class="min-h-screen text-black px-5 sm:px-0 md:px-5">
            <div class="flex justify-end p-5">
                <div
                    class="flex justify-around items-center text-center h-[50px] w-[150px] bg-[#FE7703] hover:bg-[#d96603] rounded-md text-white cursor-pointer transition duration-200 ease-in-out">
                    ย้อนกลับ
                    <i class="fa-solid fa-circle-chevron-left fa-xl" style="color: #ffffff;"></i>
                </div>
            </div>

            <div class="flex justify-center items-center mt-16 ">
                <div class="h-auto w-full sm:w-[600px] md:w-[800px] bg-white rounded-md">
                    <div class="p-8 sm:p-10 md:p-16 font-bold">
                        <i class="fa-solid fa-earth-americas text-5xl text-[#FE7702]"></i>
                        Social Media
                    </div>

                    <!-- Facebook -->
                    <div class="flex justify-center px-4 sm:px-6 md:px-10">
                        <div class="grid grid-cols-4 gap-3 items-center border-b-2 w-full bg-white py-3">
                            <!-- Facebook Icon -->
                            <div class="flex justify-center">
                                <i class="fa-brands fa-facebook text-3xl sm:text-4xl md:text-5xl text-blue-600"></i>
                            </div>

                            <!-- Facebook URL -->
                            <div class="flex justify-center col-span-2">
                                <a href="https://www.facebook.com/" class="text-black hover:underline" target="_blank"
                                    rel="noopener noreferrer" aria-label="Visit Facebook">
                                    https://www.facebook.com/
                                </a>
                            </div>

                            <!-- Edit Icon -->
                            <div class="flex justify-center">
                                <i class="fa-solid fa-pen-to-square cursor-pointer text-gray-500 hover:text-gray-700"
                                    aria-label="Edit Link"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Line -->
                    <div class="flex justify-center px-4 sm:px-6 md:px-10">
                        <div class="grid grid-cols-4 gap-3 items-center border-b-2 w-full bg-white py-3">
                            <!-- Line Icon -->
                            <div class="flex justify-center">
                                <i class="fa-brands fa-line text-3xl sm:text-4xl md:text-5xl"
                                    style="color: #00AE01;"></i>
                            </div>

                            <!-- Line URL -->
                            <div class="flex justify-center col-span-2">
                                <a href="https://www.line.com/" class="text-black hover:underline" target="_blank"
                                    rel="noopener noreferrer" aria-label="Visit Line">
                                    https://www.line.com/
                                </a>
                            </div>

                            <!-- Edit Icon -->
                            <div class="flex justify-center">
                                <i class="fa-solid fa-pen-to-square cursor-pointer text-gray-500 hover:text-gray-700"
                                    aria-label="Edit Link"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Instagram -->
                    <div class="flex justify-center px-4 sm:px-6 md:px-10">
                        <div class="grid grid-cols-4 gap-3 items-center border-b-2 w-full bg-white py-3">
                            <!-- Instagram Icon -->
                            <div class="flex justify-center">
                                <i class="fa-brands fa-square-instagram text-3xl sm:text-4xl md:text-5xl"
                                    style="color: #c01b21;"></i>
                            </div>

                            <!-- Instagram URL -->
                            <div class="flex justify-center col-span-2">
                                <a href="https://www.instagram.com/" class="text-black hover:underline" target="_blank"
                                    rel="noopener noreferrer" aria-label="Visit Instagram">
                                    https://www.instagram.com/
                                </a>
                            </div>

                            <!-- Edit Icon -->
                            <div class="flex justify-center">
                                <i class="fa-solid fa-pen-to-square cursor-pointer text-gray-500 hover:text-gray-700"
                                    aria-label="Edit Link"></i>
                            </div>
                        </div>
                    </div>

                    <!-- TikTok -->
                    <div class="flex justify-center px-4 sm:px-6 md:px-10 mb-10">
                        <div class="grid grid-cols-4 gap-3 items-center border-b-2 w-full bg-white py-3">
                            <!-- TikTok Icon -->
                            <div class="flex justify-center">
                                <i class="fa-brands fa-tiktok text-3xl sm:text-4xl md:text-5xl"
                                    style="color: #000000;"></i>
                            </div>

                            <!-- TikTok URL -->
                            <div class="flex justify-center col-span-2">
                                <a href="https://www.tiktok.com/" class="text-black hover:underline" target="_blank"
                                    rel="noopener noreferrer" aria-label="Visit TikTok">
                                    https://www.tiktok.com/
                                </a>
                            </div>

                            <!-- Edit Icon -->
                            <div class="flex justify-center">
                                <i class="fa-solid fa-pen-to-square cursor-pointer text-gray-500 hover:text-gray-700"
                                    aria-label="Edit Link"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </body>


    <footer>
        <FootBar />
    </footer>

</template>