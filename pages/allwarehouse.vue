<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import warehouselogo from "../public/logo/logo-warehouse.jpg"
import atlas from "../public/logo/atlas.png"
// Sample location data - Replace with actual data




const searchQuery = ref('');
const selectedProvince = ref('');
const selectedDistrict = ref('');
const selectedSubdistrict = ref('');
const sortState = ref({
    price: null,
    size: null,
    sortOrder: []
});



// Load sort state from localStorage on component mount
onMounted(() => {
    const savedState = localStorage.getItem('warehouseSortState');
    if (savedState) {
        sortState.value = JSON.parse(savedState);
    }
});

// Save sort state to localStorage whenever it changes
const saveSortState = () => {
    localStorage.setItem('warehouseSortState', JSON.stringify(sortState.value));
};

const toggleSort = (field) => {
    const currentOrder = sortState.value[field];

    // Remove field from sort order if it exists
    sortState.value.sortOrder = sortState.value.sortOrder.filter(f => f !== field);

    if (currentOrder === null) {
        // First click: desc
        sortState.value[field] = 'desc';
        sortState.value.sortOrder.push(field);
    } else if (currentOrder === 'desc') {
        // Second click: asc
        sortState.value[field] = 'asc';
        sortState.value.sortOrder.push(field);
    } else {
        // Third click: clear
        sortState.value[field] = null;
    }

    saveSortState();
    GetWarehouse();
};

// Handlers for selection changes




const selectedWarehouse = ref(null);
const isModalOpen = ref(false);

// Function to open the modal and pass the selected warehouse data
const openModal = (warehouse) => {
    console.log(warehouse)
    selectedWarehouse.value = warehouse;

    const dialog = document.getElementById('my_modal_3');
    dialog.showModal();
};

// Function to close the modal
const closeModal = () => {
    const dialog = document.getElementById('my_modal_3');
    dialog.close();
};


const openModalcontract = (Id) => {
    formData.value.notice_id = Id; // อัปเดตค่า ID
    const dialog = document.getElementById('my_modal_4');
    dialog.showModal();
};

// Function to close the modal
const closeModalcontract = () => {
    const dialog = document.getElementById('my_modal_4');
    dialog.close();
};

const formData = ref({
    full_name: "",
    phone_number: "",
    email: "",
    detail: "",
    notice_id: null,
});
const openModalSuccess = () => {
    console.log("ส่งข้อมูล:", {
        full_name: formData.value.full_name,
        phone_number: formData.value.phone_number,
        email: formData.value.email,
        detail: formData.value.detail,
        notice_id: formData.value.notice_id,
    });
    submitForm();

};

const closeModalSuccess = () => {
    const dialog = document.getElementById('my_modal_5');
    dialog.close();
};

import axios from 'axios';

const paginatedWarehouses = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const limit = 12;  // จำนวนรายการต่อหน้า
let skip = ref(0); // ค่า skip ใช้สำหรับบอกตำแหน่งของข้อมูล
const GetWarehouse = async () => {
    try {
        let url = `http://127.0.0.1:8000/api/notices/?skip=${skip.value}&limit=${limit}`;

        // ถ้ามีคำค้นหาให้เพิ่มคำค้นหาลงใน URL
        if (searchQuery.value) {
            url += `&keyword=${searchQuery.value}`;
        }
        // เพิ่มการจัดเรียง order_price ไปใน URL
        if (sortState.value.price) {
            url += `&order_price=${sortState.value.price}`;
        }
        // เพิ่มค่าการจัดเรียงสำหรับขนาด
        if (sortState.value.size) {
            url += `&order_size=${sortState.value.size}`;
        }
        const response = await axios.get(url);


        console.log('Success:', response.data);
        paginatedWarehouses.value = response.data.notices; // รองรับทั้งสองกรณี
        totalPages.value = response.data.total_pages; // Set the total number of pages
        currentPage.value = response.data.current_page; // Set the current page
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

// ดึงข้อมูลเมื่อคอมโพเนนต์โหลด
onMounted(async () => {
    await GetWarehouse();
    console.log('wwwww:', paginatedWarehouses.value);
});

const displayedPages = computed(() => {
    const range = 2; // แสดงหน้าก่อนและหลังหน้าปัจจุบัน 2 หน้า
    const pages = [];

    // เพิ่มหมายเลขหน้ารอบๆ หน้าปัจจุบัน
    for (let i = Math.max(1, currentPage.value - range); i <= Math.min(totalPages.value, currentPage.value + range); i++) {
        pages.push(i);
    }

    return pages;
});


// ฟังก์ชันไปยังหน้าที่เลือก
const goToPage = (pageNumber) => {
    currentPage.value = pageNumber;
    console.log(pageNumber)
    skip.value = (pageNumber - 1) * limit;  // คำนวณค่า skip

    GetWarehouse();
};
let debounceTimeout;

// ฟังก์ชัน debounce ที่ทำงานโดยใช้ setTimeout
const debouncedGetWarehouse = () => {
    // เคลียร์ timeout เก่าก่อนจะตั้งใหม่
    clearTimeout(debounceTimeout);

    // ตั้ง timeout ใหม่ให้ทำงานหลังจาก 500ms
    debounceTimeout = setTimeout(() => {
        GetWarehouse();  // เรียกฟังก์ชัน GetWarehouse
    }, 300);
};
// ใช้ watch เพื่อติดตามการเปลี่ยนแปลงของ searchQuery
watch(searchQuery, () => {
    skip.value = 0;  // รีเซ็ต skip เมื่อคำค้นหาถูกเปลี่ยน
    debouncedGetWarehouse();  // เรียกฟังก์ชัน debounce
});


const submitForm = async () => {
    try {


        // 🔹 ส่งข้อมูลไปยัง API
        const response = await axios.post("http://127.0.0.1:8000/api/", formData.value, {
            headers: {
                'Content-Type': "application/json"
            },
        });
        if (response.status === 200 && response.data.success) { // ถ้าสถานะเป็น 200 และ success == true
            // แสดง modal ถ้าส่งข้อมูลสำเร็จ
            const dialog = document.getElementById('my_modal_5');
            if (dialog) {
                dialog.showModal();
            }
        }
        // else {
        //   // ถ้า API ไม่สำเร็จ (เช่น success === false หรือไม่ใช่ status 200)
        //   console.error("การอัปโหลดล้มเหลว:", response.data.message || "ไม่ทราบสาเหตุ");
        //   const errorDialog = document.getElementById('error_modal');
        //   if (errorDialog) {
        //     errorDialog.showModal();
        //   }
        // }
        console.log("อัปโหลดสำเร็จ:", response.data);

    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
    }
};
</script>
<template>
    <headers>
        <NavBArUsr />
    </headers>

    <body>
        <div class="bg-black px-10 sm:px-16">
            <!-- <div class="container mx-auto p-4 mb-4">
    <div>
      <p class="text-2xl font-bold mb-4 text-white">เช่าโกดัง</p>
      <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="ค้นหาโกดัง" 
       class="w-full p-2 text-white bg-[#222222] border-none rounded-sm placeholder-gray-400 focus:outline-none text-white"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      
  
      <select 
        v-model="selectedProvince"
        @change="handleProvinceChange"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      >
        <option value="">เลือกจังหวัด</option>
        <option v-for="province in provinces" :key="province" :value="province">
          {{ province }}
        </option>
      </select>

 
      <select 
        v-model="selectedDistrict"
        @change="handleDistrictChange"
        :disabled="!selectedProvince"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      >
        <option value="">เลือกอำเภอ</option>
        <option v-for="district in districts" :key="district" :value="district">
          {{ district }}
        </option>
      </select>

 
      <select 
        v-model="selectedSubdistrict"
        :disabled="!selectedDistrict"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      >
        <option value="">เลือกตำบล</option>
        <option v-for="subdistrict in subdistricts" :key="subdistrict" :value="subdistrict">
          {{ subdistrict }}
        </option>
      </select>
    </div>
  </div>

  <div class="container mx-auto p-4 ">
    <div class="flex justify-between mb-4 gap-4">
      <button 
        @click="toggleSort('price')" 
        class="flex-1 py-2 px-4 rounded transition-all"
        :class="{
          'bg-blue-500 hover:bg-blue-600': sortState.price !== null,
          'bg-gray-500 hover:bg-gray-600': sortState.price === null,
        }"
      >
        <span class="text-white flex items-center justify-center gap-2">
          ราคา
          <span v-if="sortState.price !== null">
            {{ sortState.price === 'asc' ? '↑' : '↓' }}
          </span>
        </span>
      </button>

      <button 
        @click="toggleSort('size')" 
        class="flex-1 py-2 px-4 rounded transition-all"
        :class="{
          'bg-blue-500 hover:bg-blue-600': sortState.size !== null,
          'bg-gray-500 hover:bg-gray-600': sortState.size === null,
        }"
      >
        <span class="text-white flex items-center justify-center gap-2">
          ขนาด
          <span v-if="sortState.size !== null">
            {{ sortState.size === 'asc' ? '↑' : '↓' }}
          </span>
        </span>
      </button>
    </div>
  </div>
    </div> -->
            <div class="container mx-auto p-4 ">
                <div class=" items-center grid grid-cols-1 md:grid-cols-6">
                    <div class="col-span-1 text-center sm:text-left p-2">
                        <p class="text-2xl font-bold text-white">เช่าโกดัง</p>
                    </div>
                    <div class="col-span-4 grid grid-cols-1 lg:grid-cols-2 ">
                        <div class="my-2 lg:my-0 mx-0 lg:mx-2 relative">
                            <!-- Search Input -->
                            <input type="text" v-model="searchQuery" placeholder="ค้นหา"
                                class="flex-1 w-full  text-white bg-transparent border-b-2 rounded-sm placeholder-white focus:outline-none placeholder:pb-1" />
                            <i
                                class="fa-solid fa-magnifying-glass text-white absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        </div>
                        <div class="grid grid-cols-1  sm:grid-cols-3">
                            <!-- Province Dropdown -->
                            <select v-model="selectedProvince" @change="handleProvinceChange"
                                class=" rounded-sm bg-transparent border-b-2  focus:outline-none text-white">
                                <option value="" class="text-black">จังหวัด</option>
                                <option v-for="province in provinces" :key="province" :value="province"
                                    class="text-black">
                                    {{ province }}
                                </option>
                            </select>

                            <!-- District Dropdown -->
                            <select v-model="selectedDistrict" @change="handleDistrictChange"
                                :disabled="!selectedProvince"
                                class=" my-1 sm:my-0   rounded-sm bg-transparent border-b-2  focus:outline-none md:mx-2 text-white">
                                <option value="" class="text-black">อำเภอ</option>
                                <option v-for="district in districts" :key="district" :value="district"
                                    class="text-black">
                                    {{ district }}
                                </option>
                            </select>

                            <!-- Subdistrict Dropdown -->
                            <select v-model="selectedSubdistrict" :disabled="!selectedDistrict"
                                class="   rounded-sm bg-transparent border-b-2  focus:outline-none text-white">
                                <option value="" class="text-black">ตำบล</option>
                                <option v-for="subdistrict in subdistricts" :key="subdistrict" :value="subdistrict"
                                    class="text-black">
                                    {{ subdistrict }}
                                </option>
                            </select>
                        </div>
                    </div>


                    <!-- Sort Buttons -->
                    <!-- <button 
        @click="toggleSort('price')" 
        class="px-4 py-2 rounded transition-all"
        :class="{
          'bg-blue-500 hover:bg-blue-600': sortState.price !== null,
          'bg-gray-500 hover:bg-gray-600': sortState.price === null
        }"
      >
        <span class="text-white flex items-center gap-2">
        <div class="flex"> 
        <div>
          ราคา 
          </div>
          <div>
            <i class="fa-solid fa-play fa-rotate-270 fa-xs"></i>
            <i class="fa-solid fa-play fa-rotate-90 fa-xs"></i>
          </div>
        </div>
          <span v-if="sortState.price !== null">
            {{ sortState.price === 'asc' ? '↑' : '↓' }}
            
          </span>
        </span>
      </button> -->
                    <div class="col-span-1 flex justify-center sm:justify-end lg:flex-row md:flex-col">
                        <button @click="toggleSort('price')" class="px-2 py-2 rounded transition-all flex justify-end"
                            :class="{
                                'bg-none': sortState.price !== null,
                                'bg-none': sortState.price === null
                            }">
                            <span class="text-white flex items-center gap-2 ">
                                <div class="flex ">
                                    <div class="mx-2">ราคา</div>
                                    <div class="flex flex-col items-center gap-3  justify-center">
                                        <!-- ไอคอนแรก -->
                                        <i class="fa-solid fa-play fa-rotate-270 fa-2xs"
                                            :class="sortState.price === 'desc' ? 'text-blue-500' : 'text-white border-none'"></i>
                                        <!-- ไอคอนที่สอง -->
                                        <i class="fa-solid fa-play fa-rotate-90 fa-2xs"
                                            :class="sortState.price === 'asc' ? 'text-blue-500' : 'text-white'"></i>
                                    </div>
                                </div>
                                <!-- แสดงลูกศรขึ้น/ลง -->
                            </span>
                        </button>
                        <button @click="toggleSort('size')" class="px-2 py-2 rounded transition-all flex justify-end"
                            :class="{
                                'bg-none': sortState.size !== null,
                                'bg-none': sortState.size === null
                            }">

                            <span class="text-white flex items-center gap-2 ">
                                <div class="flex ">
                                    <div class="mx-2">ขนาด</div>
                                    <div class="flex flex-col items-center gap-3  justify-center">
                                        <!-- ไอคอนแรก -->
                                        <i class="fa-solid fa-play fa-rotate-270 fa-2xs"
                                            :class="sortState.size === 'desc' ? 'text-blue-500' : 'text-white'"></i>
                                        <!-- ไอคอนที่สอง -->
                                        <i class="fa-solid fa-play fa-rotate-90 fa-2xs"
                                            :class="sortState.size === 'asc' ? 'text-blue-500' : 'text-white'"></i>
                                    </div>
                                </div>
                                <!-- แสดงลูกศรขึ้น/ลง -->
                            </span>

                        </button>
                    </div>

                </div>
            </div>


            <div class="container mx-auto p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div v-for="warehouse in paginatedWarehouses"
                        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">

                        <img :src="warehouselogo" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2">{{ warehouse.title }}</h3>

                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="font-medium">{{ warehouse.size.toLocaleString() }} warehouse</span>
                                    <span class="font-medium">{{ warehouse.office_size.toLocaleString() }} Office</span>
                                </div>

                                <div class="flex justify-between items-center">

                                    <span class="font-medium">{{ warehouse.location }}</span>
                                    <span class="font-semibold text-black">{{ warehouse.price.toLocaleString() }}
                                        ฿</span>
                                </div>
                            </div>
                        </div>

                        <button @click="openModal(warehouse)"
                            class="w-full bg-orange-500 text-white py-3 px-4 hover:bg-orange-600 transition-colors font-medium">
                            ดูรายละเอียด
                        </button>
                    </div>

                </div>
                <!-- Pagination -->
                <div class="flex justify-center items-center space-x-2 mt-8 text-xl">
                    <div class="flex space-x-1">
                        <!-- ปุ่มหน้าที่ 1 -->
                        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                            class="p-2 rounded-lg transition-colors"
                            :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200 text-gray-700'">
                            < </button>

                                <!-- Page indicator -->
                                <span class="text-white">
                                    Page {{ currentPage }} of {{ totalPages }}
                                </span>

                                <!-- Right arrow -->
                                <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                                    class="p-2 rounded-lg transition-colors"
                                    :class="currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-200 text-gray-700'">
                                    >
                                </button>
                    </div>
                </div>
            </div>



        </div>
    </body>
    <footer>
        <FootBar />
    </footer>


    <dialog id="my_modal_3" class="modal">
        <div class="modal-box min-w-[80vw] ">
            <form method="dialog">
                <button @click="closeModal" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 class="text-lg font-bold">{{ selectedWarehouse?.title }}</h3>
            <div class="grid md:grid-cols-2">
                <div>
                    <div class="w-full max-w-[523px]">
                        <img :src="warehouselogo" class="w-full h-auto object-cover mb-4">
                        <div class="grid grid-cols-3 gap-4">
                            <img :src="warehouselogo" class="w-full h-auto object-cover">
                            <img :src="warehouselogo" class="w-full h-auto object-cover">
                            <img :src="warehouselogo" class="w-full h-auto object-cover">
                        </div>
                    </div>

                </div>
                <div class="sm:mx-5">
                    <p>แผนที่</p>
                    <img :src="atlas" :alt="selectedWarehouse?.title"
                        class="w-full h-auto object-cover max-w-[569px] max-h-[199px]">
                    <p><strong>Location:</strong> {{ selectedWarehouse?.location }}</p>
                    <p>รายละเอียด</p>
                    <div class="pl-5 max-w-[569px]">
                        <div class="xl:flex justify-between">
                            <p><strong>ขนาด:</strong> {{ selectedWarehouse?.size.toLocaleString() }} </p>
                            <p><strong>ออฟฟิต:</strong> {{ selectedWarehouse?.office_size.toLocaleString() }} </p>

                            <p><strong>ราคา:</strong> {{ selectedWarehouse?.price.toLocaleString() }} ฿
                            </p>
                        </div>
                        <div>
                            <p>รายละเอียดเพิ่มเติม : {{ selectedWarehouse?.details }}
                            </p>
                        </div>
                    </div>
                    <p>ติดต่อ</p>
                    <div class="pl-5 max-w-[569px]">
                        <div class="xl:flex  justify-around">
                            <div>เบอร์ : {{ selectedWarehouse?.phone }}</div>
                            <div>อีเมล : {{ selectedWarehouse?.email }}</div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button @click="openModalcontract(selectedWarehouse?.id)"
                            class="bg-red-500 text-white py-2 px-10 rounded-md mt-4 bg-orange-600">ติดต่อเรา</button>
                    </div>
                </div>

            </div>
        </div>
    </dialog>


    <dialog id="my_modal_4" class="modal">
        <div class="modal-box p-4">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="p-5">
                <h3 class="text-lg font-bold">ติดต่อเรา</h3>
                <p class="py-4">กรุณาใส่ข้อมูล เราจะทำการติดต่อกลับไปให้เร็วที่สุด</p>
                <div>
                    <input type="text" v-model="formData.full_name" placeholder="ชื่อ - สกุล"
                        class="flex-1 w-full py-2  text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                </div>
                <div class="sm:flex justify-between my-2">
                    <div><input v-model="formData.phone_number" type="text" placeholder="เบอร์โทร"
                            class="flex-1 w-full py-2 text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                    </div>
                    <div><input type="text" v-model="formData.email" placeholder="อีเมล"
                            class="flex-1 w-full py-2 mt-2 sm:mt-0  text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                    </div>

                </div>
                <div>
                    <input type="text" v-model="formData.detail" placeholder="รายละเอียด"
                        class="flex-1 w-full py-2  text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                </div>
                <div class="flex mt-5">
                    <p>ต้องการให้เราติดต่อผ่าน</p>
                    <div class="flex items-center mx-2 ">
                        <input type="checkbox" id="phone" class="mr-2">
                        <label for="phone">เบอร์โทร</label>
                    </div>

                    <div class="flex items-center mx-2 ">
                        <input type="checkbox" id="email" class="mr-2">
                        <label for="email">อีเมล</label>
                    </div>
                </div>
                <div>
                    <div class="flex justify-evenly">
                        <button @click="closeModalcontract()"
                            class="bg-red-500 text-white py-2 px-10 rounded-md mt-4 bg-[#4D4D4D]">กลับ</button>
                        <button @click="openModalSuccess()"
                            class="bg-red-500 text-white py-2 px-10 rounded-md mt-4 bg-orange-600">ส่งข้อมูล</button>
                    </div>
                </div>
            </div>
        </div>
    </dialog>

    <dialog id="my_modal_5" class="modal">
        <div class="modal-box p-4">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="flex justify-center">
                <i class="fa-solid fa-house-circle-check" style="color: #80B673; font-size: 137px;"></i>
            </div>

            <div class="p-5">
                <div class="text-4xl text-center">
                    เราได้รับข้อมูลเรียบร้อยแล้ว
                </div>
                <div class="text-lg text-center my-2">
                    ขอบคุณที่ใช้บริการ เราจะทำการติดต่อกลับไปให้เร็วที่สุด
                </div>
                <div>
                    <div class="flex justify-center mt-5">
                        <button @click="closeModalSuccess()"
                            class="bg-red-500 text-white py-2 px-16 rounded-md mt-4 bg-orange-600">ตกลง</button>
                    </div>
                </div>
            </div>
        </div>
    </dialog>
</template>
