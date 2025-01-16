<template>
    <footer class="bg-white border-t border-gray-300 py-6 h-[150px]">
        <div class="container mx-auto px-5 md:px-20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <!-- Left Section -->
            <div class="text-center md:text-left">
                <p class="text-gray-800 font-bold text-sm md:text-base">
                    BEYOURSPACES COMPANY LIMITED
                </p>
                <p class="text-gray-600 text-sm md:text-base max-w-md">
                    1 TP&T Tower 19th Floor Soi Vibhavadirangsit 19, Vibhavadirangsit Road, Chatuchak, Bangkok 10900
                </p>
            </div>

            <!-- Center Section -->
            <div class="text-center md:text-left space-y-2">
                <p class="text-gray-600 text-sm md:text-base">CONTACT@BEYOURSPACES.COM</p>
                <p class="text-gray-600 text-sm md:text-base">02-096-6496</p>
            </div>

            <!-- Social Icons -->
            <div class="flex space-x-8">
                <img src="../public/home/icon_Facebook.png" alt="Facebook" class="w-6 h-6 md:w-8 md:h-8">
                <img src="../public/home/icon_Line.png" alt="Line" class="w-6 h-6 md:w-8 md:h-8">
                <img src="../public/home/icon_Instagram.png" alt="Instagram" class="w-6 h-6 md:w-8 md:h-8">
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'FootBar',
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap');

.font-kanit {
    font-family: 'Kanit', sans-serif;
}
</style>