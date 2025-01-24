<template>

    <header class="fixed top-0 w-full z-50 bg-white shadow-md">
        <NavBArUsr />
    </header>

    <body class="bg-[#1e1e1e]">
        <div class="min-h-screen px-4 lg:px-8 ">
            <!-- กล่องหลัก -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:p-4 md:gap-4 lg:grid-cols-4 lg:gap-6 ">
                <div class="h-[180px] bg-white rounded-xl mt-24 md:h-[180px] lg:mt-32 lg:h-[200px]">
                    <div class="grid grid-cols-2 h-full w-full gap-4">
                        <!-- กล่องสีเขียว -->
                        <div class="flex justify-end items-center rounded-xl bg-white mr-7">
                            <div class="flex justify-center items-center bg-[#29BF12] w-8/12 h-3/6 rounded-lg">
                                <i class="fa-solid fa-warehouse fa-2xl sm:fa-3xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <!-- กล่องข้อความ -->
                        <div class="grid grid-cols-1 text-lg sm:text-2xl md:text-xl gap-3 px-4 text-[#6f6f6f] mr-4 truncate">
                            <div class="flex justify-end items-end">คำขอลงประกาศ</div>
                            <div>
                                <div class="flex justify-end text-5xl sm:text-7xl md:text-5xl text-black">100</div>
                                <div class="flex justify-end mt-2">โกดัง</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- กล่องสอง -->
                <div class="h-[180px] bg-white rounded-xl mt-10 sm:mt-16 md:mt-24 lg:mt-32 lg:h-[200px]">
                    <div class="grid grid-cols-2 h-full w-full gap-4">
                        <div class="flex justify-end items-center rounded-xl bg-white mr-7">
                            <div class="flex justify-center items-center bg-[#FF9800] w-8/12 h-3/6 rounded-lg">
                                <i class="fa-solid fa-clipboard fa-2xl sm:fa-3xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-lg sm:text-2xl md:text-xl gap-3 px-4 text-[#6f6f6f] mr-4 truncate">
                            <div class="flex justify-end items-end">คำขอสร้าง</div>
                            <div>
                                <div class="flex justify-end text-5xl sm:text-7xl md:text-5xl text-black">100</div>
                                <div class="flex justify-end mt-2">แปลง</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- กล่องสาม -->
                <div class="h-[180px] bg-white rounded-xl mt-10 sm:mt-16 md:mt-2 lg:mt-32 lg:h-[200px]">
                    <div class="grid grid-cols-2 h-full w-full gap-4">
                        <div class="flex justify-end items-center rounded-xl bg-white mr-7">
                            <div class="flex justify-center items-center bg-[#08BDBD] w-8/12 h-3/6 rounded-lg">
                                <i class="fa-solid fa-user-group fa-2xl sm:fa-3xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-lg sm:text-2xl md:text-xl gap-3 px-4 text-[#6f6f6f] mr-4 truncate">
                            <div class="flex justify-end items-end">ลูกค้า</div>
                            <div>
                                <div class="flex justify-end text-5xl sm:text-7xl md:text-5xl text-black">100</div>
                                <div class="flex justify-end mt-2">คน</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- กล่องสี่ -->
                <div class="h-[180px] bg-white rounded-xl mt-10 sm:mt-16 md:mt-2 lg:mt-32 lg:h-[200px]">
                    <div class="grid grid-cols-2 h-full w-full gap-4">
                        <div class="flex justify-end items-center rounded-xl bg-white mr-7">
                            <div class="flex justify-center items-center bg-[#29BF12] w-8/12 h-3/6 rounded-lg">
                                <i class="fa-solid fa-chart-column fa-2xl sm:fa-3xl" style="color: #ffffff;"></i>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 text-lg sm:text-2xl md:text-xl gap-3 px-4 text-[#6f6f6f] mr-4 truncate">
                            <div class="flex justify-end items-end">เยี่ยมชม</div>
                            <div>
                                <div class="flex justify-end text-5xl sm:text-7xl md:text-5xl text-black">100</div>
                                <div class="flex justify-end mt-2">คน</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <!-- ส่วนตาราง -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 pb-10">
                    <!-- คำขอใหม่ -->
                    <div class="bg-white rounded-lg w-full pb-10">
                        <div class="flex justify-center relative bg-white">
                            <div
                                class="flex justify-center items-center text-white absolute bg-[#29BF12] w-3/4 h-[80px] -top-5 rounded-lg text-lg sm:text-xl md:text-2xl md:font-bold lg:text-2xl">
                                คำขอใหม่
                            </div>
                        </div>

                        <div class="mt-16 px-6 sm:px-10">
                            <!-- ตาราง -->
                            <table class="table text-black w-full text-sm sm:text-base ">
                                <thead>
                                    <tr>
                                        <th class="">คำขอ</th>
                                        <!-- ซ่อนชื่อ-นามสกุลในหน้าจอขนาด sm -->
                                        <th class="hidden sm:table-cell">ชื่อ-นามสกุล</th>
                                        <th class="text-center">รูปภาพ</th>
                                        <th class="text-center">สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <!-- ตัวอย่างแถวข้อมูล -->
                                    <tr>
                                        <td>คำขอลงประกาศ</td>
                                        <!-- ซ่อนชื่อ-นามสกุลในหน้าจอขนาด sm -->
                                        <td class="hidden sm:table-cell">นายสมชาย ใจดี</td>
                                        <td>
                                            <div class="flex justify-center">
                                                <img class="w-full h-full max-w-[200px] object-cover"
                                                    src="../public/home/Bg_home_full_edit.png" alt="รูปภาพ">
                                            </div>
                                        </td>
                                        <td>
                                            <!-- จัดสถานะให้อยู่ช่องเดียว -->
                                            <div
                                                class="flex justify-center items-center text-center text-[#FF9800] bg-[#fff7e1] w-full h-[30px] sm:block hidden ">
                                                รอดำเนินการ
                                            </div>

                                            <div
                                                class="flex justify-center items-center text-center text-[#FF9800] bg-[#fff7e1] w-full h-[30px] sm:hidden block truncate ">
                                                รอดำเนินการ
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- ตัวอย่างแถวข้อมูลเพิ่มเติม -->
                                    <tr>
                                        <td>คำขอลงประกาศ</td>
                                        <td class="hidden sm:table-cell">นางสาวใจดี สมชาย</td>
                                        <td>
                                            <div class="flex justify-center">
                                                <img class="w-full h-full max-w-[200px] object-cover"
                                                    src="../public/home/Bg_home_full_edit.png" alt="รูปภาพ">
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="flex justify-center items-center text-[#29BF12] bg-[#e6f9e6] w-full h-[30px]">
                                                เสร็จสิ้น
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <!-- รายการติดต่อ -->
                    <div class="bg-white rounded-lg w-full pb-10 mt-6 sm:mt-0 md:mt-6 lg:mt-0">
                        <div class="flex justify-center relative bg-white">
                            <div
                                class="flex justify-center items-center text-white absolute bg-[#FF9800] w-3/4 h-[80px] -top-5 rounded-lg text-lg sm:text-xl sm:font-bold md:text-2xl md:font-bold lg:text-2xl lg:font-bold">
                                รายการติดต่อ
                            </div>
                        </div>

                        <div class="mt-16 px-6 sm:px-10">
                            <!-- ตาราง -->
                            <table class="table text-black w-full text-sm sm:text-base">
                                <thead>
                                    <tr>
                                        <th class="">คำขอ</th>
                                        <!-- ซ่อนชื่อ-นามสกุลในหน้าจอขนาด sm -->
                                        <th class="hidden sm:table-cell">ชื่อ-นามสกุล</th>
                                        <th class="text-center">รูปภาพ</th>
                                        <th class="text-center">สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="4" class="text-center">ไม่มีข้อมูล</td>
                                    </tr>
                                </tbody>
                            </table>



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