<template>
    <headers>
        <NavBArUsr />
    </headers>

    <body>
        <div class="bg-black px-10 sm:px-16 min-h-screen">
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
                    <div v-for="warehouse in paginatedWarehouses" :key="warehouse.id"
                        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                        <img :src="warehouse.imageUrl" :alt="warehouse.title" class="w-full h-48 object-cover">

                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2">{{ warehouse.title }}</h3>

                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="font-medium">{{ warehouse.specs.warehouse.size.toLocaleString() }} {{
                                        warehouse.specs.warehouse.unit }} warehouse</span>
                                    <span class="font-medium">{{ warehouse.specs.office.size.toLocaleString() }} {{
                                        warehouse.specs.office.unit }} Office</span>
                                </div>

                                <div class="flex justify-between items-center">

                                    <span class="font-medium">{{ warehouse.location }}</span>
                                    <span class="font-semibold text-blue-600">{{ warehouse.price.toLocaleString() }} {{
                                        warehouse.currency
                                    }}</span>
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
                <!-- <div class="flex justify-center items-center space-x-2 mt-8 text-xl">


                    <div class="flex space-x-1">
                        <button v-if="currentPage > 3" @click="currentPage = 1"
                            class="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            1
                        </button>

                       
                        <span v-if="currentPage > 3" class="px-3 py-2">...</span>

                      
                        <button v-for="pageNumber in displayedPages" :key="pageNumber" @click="currentPage = pageNumber"
                            class="px-3 py-2 rounded-lg"
                            :class="currentPage === pageNumber ? 'text-orange-500' : 'text-white hover:bg-gray-300'">
                            {{ pageNumber }}
                        </button>

                       
                        <span v-if="currentPage < totalPages - 2" class="px-3 py-2">...</span>

                      
                        <button v-if="currentPage < totalPages - 2" @click="currentPage = totalPages"
                            class="px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                            {{ totalPages }}
                        </button>
                    </div>


                </div> -->
                <div class="flex justify-center items-center gap-2 mt-8 text-sm text-gray-300">
                    <button @click="currentPage > 1 ? currentPage-- : null"
                        class="text-gray-300 bg-[#252525] p-3 hover:text-white transition-colors" :disabled="currentPage === 1">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>

                    <span class="flex items-center gap-2">
                        Page {{ currentPage }} of {{ totalPages }}
                    </span>

                    <button @click="currentPage < totalPages ? currentPage++ : null"
                        class="text-gray-300 bg-[#252525] p-3 hover:text-white transition-colors" :disabled="currentPage === totalPages">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
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
                        <img :src="selectedWarehouse?.imageUrl" :alt="selectedWarehouse?.title"
                            class="w-full h-auto object-cover mb-4">
                        <div class="grid grid-cols-3 gap-4">
                            <img :src="selectedWarehouse?.imageUrl" :alt="selectedWarehouse?.title"
                                class="w-full h-auto object-cover">
                            <img :src="selectedWarehouse?.imageUrl" :alt="selectedWarehouse?.title"
                                class="w-full h-auto object-cover">
                            <img :src="selectedWarehouse?.imageUrl" :alt="selectedWarehouse?.title"
                                class="w-full h-auto object-cover">
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
                            <p><strong>ขนาด:</strong> {{ selectedWarehouse?.specs.warehouse.size.toLocaleString() }} {{
                                selectedWarehouse?.specs.warehouse.unit }}</p>
                            <p><strong>ออฟฟิต:</strong> {{ selectedWarehouse?.specs.office.size.toLocaleString() }} {{
                                selectedWarehouse?.specs.office.unit }}</p>

                            <p><strong>ราคา:</strong> {{ selectedWarehouse?.price.toLocaleString() }} ฿
                            </p>
                        </div>
                        <div>
                            <p>รายละเอียดเพิ่มเติม : ยูโรราชบัณฑิตยสถาน แคนูสไปเดอร์ชะโนด แป๋ว กิมจิ ไมเกรน สงบสุขแม่ค้า
                                พาวเวอร์แทงกั๊กเลดี้แอคทีฟ บุญคุณ สตูดิโอ วอเตอร์ไลน์ยูวีฮัลโลวีนนายแบบ
                            </p>
                        </div>
                    </div>
                    <p>ติดต่อ</p>
                    <div class="pl-5 max-w-[569px]">
                        <div class="xl:flex  justify-around">
                            <div>เบอร์ : 02-096-6496</div>
                            <div>อีเมล : CONTACT@BEYOURSPACES.COM</div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button @click="openModalcontract()"
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
                    <input type="text" placeholder="ชื่อ - สกุล"
                        class="flex-1 w-full py-2  text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                </div>
                <div class="sm:flex justify-between my-2">
                    <div><input type="text" placeholder="เบอร์โทร"
                            class="flex-1 w-full py-2 text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                    </div>
                    <div><input type="text" placeholder="อีเมล"
                            class="flex-1 w-full py-2 mt-2 sm:mt-0  text-black bg-transparent border-b-2 rounded-sm placeholder-black focus:outline-none placeholder:pb-1 border-black" />
                    </div>

                </div>
                <div>
                    <input type="text" placeholder="รายละเอียด"
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

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import warehouselogo from "../public/logo/logo-warehouse.jpg"
import atlas from "../public/logo/atlas.png"
// Sample location data - Replace with actual data

const warehouses = [
    {
        "id": 1,
        "title": "โกดังนครปฐม A1",
        "specs": {
            "warehouse": {
                "size": 500,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 200,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "นครปฐม",
        "price": 1000000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["ระบบรักษาความปลอดภัย 24 ชม.", "ที่จอดรถบรรทุก", "ลิฟท์ขนส่งสินค้า"]
    },
    {
        "id": 2,
        "title": "โกดังบางนา Premium",
        "specs": {
            "warehouse": {
                "size": 1200,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 300,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "บางนา",
        "price": 2500000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["ห้องเย็น", "ระบบ Smart Access", "พื้นที่วางตู้คอนเทนเนอร์"]
    },
    {
        "id": 3,
        "title": "Mini Warehouse ลาดกระบัง",
        "specs": {
            "warehouse": {
                "size": 300,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 100,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "ลาดกระบัง",
        "price": 750000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "maintenance",
        "features": ["ใกล้สนามบิน", "ระบบดับเพลิงอัตโนมัติ"]
    },
    {
        "id": 4,
        "title": "Mega Storage วังน้อย",
        "specs": {
            "warehouse": {
                "size": 2000,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 400,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "วังน้อย, อยุธยา",
        "price": 3500000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["โกดังสูง 12 เมตร", "ระบบจัดการสินค้าอัตโนมัติ", "สถานีชาร์จรถไฟฟ้า"]
    },
    {
        "id": 5,
        "title": "Smart Warehouse บางพลี",
        "specs": {
            "warehouse": {
                "size": 800,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 250,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "บางพลี",
        "price": 1800000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "reserved",
        "features": ["ระบบ IoT", "Solar Roof", "ระบบประหยัดพลังงาน"]
    },
    {
        "id": 6,
        "title": "โกดังมหาชัย Port",
        "specs": {
            "warehouse": {
                "size": 1500,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 350,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "มหาชัย, สมุทรสาคร",
        "price": 1800000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["ติดท่าเรือ", "ห้องเย็นอุตสาหกรรม", "ระบบขนถ่ายสินค้าทางน้ำ"]
    },
    {
        "id": 7,
        "title": "Green Warehouse รังสิต",
        "specs": {
            "warehouse": {
                "size": 1000,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 300,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "รังสิต",
        "price": 2200000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["อาคารประหยัดพลังงาน", "ระบบบำบัดน้ำเสีย", "พื้นที่สีเขียว"]
    },
    {
        "id": 8,
        "title": "โกดังแหลมฉบัง Port",
        "specs": {
            "warehouse": {
                "size": 3000,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 500,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "แหลมฉบัง, ชลบุรี",
        "price": 4500000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["ใกล้ท่าเรือแหลมฉบัง", "ศูนย์กระจายสินค้า", "ระบบรักษาความปลอดภัยระดับสูง"]
    },
    {
        "id": 9,
        "title": "โกดังอมตะซิตี้",
        "specs": {
            "warehouse": {
                "size": 3000,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 400,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "อมตะซิตี้, ชลบุรี",
        "price": 3200000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["นิคมอุตสาหกรรม", "ระบบ Smart Factory", "สิทธิประโยชน์ BOI"]
    },
    {
        "id": 10,
        "title": "EEC Warehouse ระยอง",
        "specs": {
            "warehouse": {
                "size": 3000,
                "unit": "sq.m",
                "type": "warehouse"
            },
            "office": {
                "size": 600,
                "unit": "sq.m",
                "type": "office"
            }
        },
        "location": "มาบตาพุด, ระยอง",
        "price": 5500000,
        "currency": "THB",
        "imageUrl": warehouselogo,
        "status": "available",
        "features": ["เขต EEC", "มาตรฐานอุตสาหกรรม", "ระบบขนส่งครบวงจร"]
    }
];


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
};

const locationData = {
    'กรุงเทพมหานคร': {
        'ลาดกระบัง': ['ลาดกระบัง'],
        'บางนา': ['บางนา']
    },
    'นครปฐม': {
        'เมืองนครปฐม': ['ตัวเมือง']
    },
    'พระนครศรีอยุธยา': {
        'วังน้อย': ['วังน้อย']
    },
    'สมุทรปราการ': {
        'บางพลี': ['บางพลี']
    },
    'สมุทรสาคร': {
        'เมืองสมุทรสาคร': ['มหาชัย']
    },
    'ปทุมธานี': {
        'ธัญบุรี': ['รังสิต']
    },
    'ชลบุรี': {
        'ศรีราชา': ['แหลมฉบัง'],
        'เมืองชลบุรี': ['อมตะซิตี้']
    },
    'ระยอง': {
        'เมืองระยอง': ['มาบตาพุด']
    }
};

const provinces = computed(() => Object.keys(locationData));

const districts = computed(() => {
    if (!selectedProvince.value) return [];
    return Object.keys(locationData[selectedProvince.value] || {});
});

const subdistricts = computed(() => {
    if (!selectedProvince.value || !selectedDistrict.value) return [];
    return locationData[selectedProvince.value][selectedDistrict.value] || [];
});

// Handlers for selection changes
const handleProvinceChange = () => {
    selectedDistrict.value = '';
    selectedSubdistrict.value = '';
};

const handleDistrictChange = () => {
    selectedSubdistrict.value = '';
};

const filteredWarehouses = computed(() => {
    let result = warehouses.filter(w => {
        // Text search
        const matchesSearch = w.title.toLowerCase().includes(searchQuery.value.toLowerCase());

        // Location filtering
        let matchesLocation = true;
        if (selectedProvince.value) {
            matchesLocation = w.location.includes(selectedProvince.value);
        }
        if (selectedDistrict.value) {
            matchesLocation = matchesLocation && w.location.includes(selectedDistrict.value);
        }
        if (selectedSubdistrict.value) {
            matchesLocation = matchesLocation && w.location.includes(selectedSubdistrict.value);
        }

        return matchesSearch && matchesLocation;
    });

    // Apply sorting based on sortOrder
    if (sortState.value.sortOrder.length > 0) {
        result = result.sort((a, b) => {
            for (const field of sortState.value.sortOrder) {
                const order = sortState.value[field];
                if (order !== null) {
                    const valueA = field === 'price' ? a.price : a.specs.warehouse.size;
                    const valueB = field === 'price' ? b.price : b.specs.warehouse.size;

                    if (valueA !== valueB) {
                        return order === 'asc' ? valueA - valueB : valueB - valueA;
                    }
                }
            }
            return 0;
        });
    }

    return result;
});

// Pagination
const currentPage = ref(1);
const itemsPerPage = 8;

// Reset to first page when search query changes
watch(searchQuery, () => {
    currentPage.value = 1;
});

// Reset to first page when sort changes
watch(() => sortState.value, () => {
    currentPage.value = 1;
}, { deep: true });
// Pagination computeds
const totalPages = computed(() =>
    Math.ceil(filteredWarehouses.value.length / itemsPerPage)
);

const displayedPages = computed(() => {
    let pages = [];
    let start = Math.max(1, currentPage.value - 1);
    let end = Math.min(totalPages.value, currentPage.value + 1);

    // ปรับช่วงให้แสดงอย่างน้อย 3 หน้า (ถ้ามี)
    while (end - start < 2 && (start > 1 || end < totalPages.value)) {
        if (start > 1) start--;
        else if (end < totalPages.value) end++;
    }

    // สร้าง array ของหมายเลขหน้าที่จะแสดง
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
});

const paginatedWarehouses = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredWarehouses.value.slice(start, end);
});

watch([selectedProvince, selectedDistrict, selectedSubdistrict], () => {
    currentPage.value = 1;
});

const selectedWarehouse = ref(null);
const isModalOpen = ref(false);

// Function to open the modal and pass the selected warehouse data
const openModal = (warehouse) => {
    selectedWarehouse.value = warehouse;

    const dialog = document.getElementById('my_modal_3');
    dialog.showModal();
};

// Function to close the modal
const closeModal = () => {
    const dialog = document.getElementById('my_modal_3');
    dialog.close();
};

const openModalcontract = () => {

    const dialog = document.getElementById('my_modal_4');
    dialog.showModal();
};

// Function to close the modal
const closeModalcontract = () => {
    const dialog = document.getElementById('my_modal_4');
    dialog.close();
};


const openModalSuccess = () => {

    const dialog = document.getElementById('my_modal_5');
    dialog.showModal();
};

const closeModalSuccess = () => {
    const dialog = document.getElementById('my_modal_5');
    dialog.close();
};

</script>