<template>

    <header class="fixed top-0 w-full z-50 bg-white shadow-md">
        <NavBArUsr />
    </header>

    <body class="bg-[#1e1e1e]">
        <div class=" min-h-screen px-10 ">
            <div class="grid grid-cols-4 gap-8 ">

                <!-- กล่องเเรก -->
                <div class="h-[200px] bg-white rounded-xl mt-32">
                    <div class="grid grid-cols-2 h-full w-full">
                        <div class="flex justify-end items-center rounded-xl bg-white">
                            <div class="flex justify-center items-center bg-[#29BF12] w-9/12 h-4/6 rounded-xl">
                                <i class="fa-solid fa-warehouse fa-2xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-2xl gap-2 p-4 text-[#6f6f6f] ">
                            <div class="flex justify-end items-end  ">
                                คำขอลงประกาศ
                            </div>
                            <div>
                                <div class="flex justify-end text-6xl text-black">
                                    100
                                </div>
                                <div class="flex justify-end mt-3">
                                    โกดัง
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- กล่องสอง -->
                <div class="h-[200px] bg-white rounded-xl mt-32">
                    <div class="grid grid-cols-2 h-full w-full">
                        <div class="flex justify-end items-center rounded-xl bg-white">
                            <div class="flex justify-center items-center bg-[#FF9800] w-9/12 h-4/6 rounded-xl">
                                <i class="fa-solid fa-clipboard fa-2xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-2xl gap-2 p-4 text-[#6f6f6f] ">
                            <div class="flex justify-end items-end  ">
                                คำขอสร้าง
                            </div>
                            <div>
                                <div class="flex justify-end text-6xl text-black">
                                    100
                                </div>
                                <div class="flex justify-end mt-3">
                                    แปลง
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- กล่องสาม -->
                <div class="h-[200px] bg-white rounded-xl mt-32">
                    <div class="grid grid-cols-2 h-full w-full">
                        <div class="flex justify-end items-center rounded-xl bg-white">
                            <div class="flex justify-center items-center bg-[#08BDBD] w-9/12 h-4/6 rounded-xl">
                                <i class="fa-solid fa-user-group fa-2xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-2xl gap-2 p-4 text-[#6f6f6f] ">
                            <div class="flex justify-end items-end  ">
                                ลูกค้า
                            </div>
                            <div>
                                <div class="flex justify-end text-6xl text-black">
                                    100
                                </div>
                                <div class="flex justify-end mt-3">
                                    คน
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- กล่องสี่ -->
                <div class="h-[200px] bg-white rounded-xl mt-32">
                    <div class="grid grid-cols-2 h-full w-full">
                        <div class="flex justify-end items-center rounded-xl bg-white">
                            <div class="flex justify-center items-center bg-[#29BF12] w-9/12 h-4/6 rounded-xl">
                                <i class="fa-solid fa-chart-column fa-2xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-2xl gap-2 p-4 text-[#6f6f6f] ">
                            <div class="flex justify-end items-end  ">
                                เยี่ยมชม
                            </div>
                            <div>
                                <div class="flex justify-end text-6xl text-black">
                                    100
                                </div>
                                <div class="flex justify-end mt-3">
                                    คน
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-8 mt-12 pb-10">
                <div class="bg-white rounded-lg w-full ">
                    <div class="flex justify-center relative bg-white  ">
                        <div
                            class="flex justify-center items-center text-white absolute bg-[#29BF12] w-3/4 h-[80px] -top-5 rounded-lg">
                            คำขอใหม่
                        </div>
                    </div>

                    <div class="mt-16  px-16">
                        <div >
                            <!-- table -->
                            <table class="table text-black w-full">
                                <!-- head -->
                                <thead class="text-black">
                                    <tr>
                                        <th>คำขอ</th>
                                        <th>ชื่อ-นามสกุล</th>
                                        <th>รูปภาพ</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- row 1 -->
                                    <tr>
                                        <td>คำขอลงประกาศ</td>
                                        <td>test</td>
                                        <td><img class="w-2/4 h-16" src="../public/home/Bg_home_full_edit.png" alt=""></td>
                                        <td>
                                            <div class="flex justify-center items-center text-[#FF9800] bg-[#fff7e1] w-4/4 h-[30px]">
                                                รอดำเนินการ
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- row 2 -->
                                    <tr>
                                        <td>คำขอลงประกาศ</td>
                                        <td>test</td>
                                        <td><img class="w-2/4 h-16" src="../public/home/Bg_home_full_edit.png" alt=""></td>
                                        <td>
                                            <div class="flex justify-center items-center text-[#FF9800] bg-[#fff7e1] w-4/4 h-[30px]">
                                                รอดำเนินการ
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- row 3 -->
                                    <tr>
                                        <td>คำขอลงประกาศ</td>
                                        <td>test test</td>
                                        <td><img class="w-2/4 h-16" src="../public/home/Bg_home_full_edit.png" alt=""></td>
                                        <td>
                                            <div class="flex justify-center items-center text-[#FF9800] bg-[#fff7e1] w-4/4 h-[30px]">
                                                รอดำเนินการ
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>คำขอลงประกาศ</td>
                                        <td>test</td>
                                        <td><img class="w-2/4 h-16" src="../public/home/Bg_home_full_edit.png" alt=""></td>
                                        <td>
                                            <div class="flex justify-center items-center text-[#FF9800] bg-[#fff7e1] w-4/4 h-[30px]">
                                                รอดำเนินการ
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                            <div class="flex justify-center gap-2 mt-4 text-black">
                                <button class="btn btn-outline text-black border-none" @click="prevPage"
                                    :disabled="currentPage === 1">
                                    &lt;
                                </button>
                                <button class="btn btn-outline text-black border-none">{{ currentPage }}</button>
                                <button class="btn btn-outline text-black border-none" @click="nextPage"
                                    :disabled="!hasNextPage">
                                    &gt;
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-lg w-full pb-10">
                    <div class="flex justify-center relative bg-white  ">
                        <div
                            class="flex justify-center items-center text-white absolute bg-[#FF9800] w-3/4 h-[80px] -top-5 rounded-lg">
                            รายการติดต่อ
                        </div>
                    </div>

                    <div class="mt-16  px-16">
                        <div >
                            <!-- table -->
                            <table class="table text-black w-full">
                                <!-- head -->
                                <thead class="text-black">
                                    <tr>
                                        <th>คำขอ</th>
                                        <th>ชื่อ-นามสกุล</th>
                                        <th>รูปภาพ</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            ไม่มีข้อมูล
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                            <div class="flex justify-center gap-2 mt-4 text-black">
                                <button class="btn btn-outline text-black border-none" @click="prevPage"
                                    :disabled="currentPage === 1">
                                    &lt;
                                </button>
                                <button class="btn btn-outline text-black border-none">{{ currentPage }}</button>
                                <button class="btn btn-outline text-black border-none" @click="nextPage"
                                    :disabled="!hasNextPage">
                                    &gt;
                                </button>
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

<script setup>
import { ref, computed } from 'vue'
const currentPage = ref(1)


const hasNextPage = ref(10)


const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (hasNextPage.value) {
        currentPage.value++
    }
}
</script>