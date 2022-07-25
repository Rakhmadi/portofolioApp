<template>
<div class="lg:px-10 mx-10">
    <div class=" pt-20 w-100">
        <h1 class="text-white sm:text-4xl text-4xl" id="project">Project</h1>
        <div class="mt-4 flex">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="cardbg rounded-lg overflow-hidden" v-for="item in projectList" :key="item">
                    <img class="w-full" :src="item.image" alt="">
                    <div class="p-4">
                        <h1 class="text-white text-xl">{{item.jud}}</h1>
                        <div class=" flex flex-wrap w-100 mt-2 overflow-hidden ">
                            <span class="bg-red-500 rounded cardcolor p-1 text-xs font-bold mt-1 mr-1" v-for="x in item.tools" :key="x">{{x}}</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</template>
<script>
import decrypterTextEffect from '../dectext/index'
export default {
    mounted() {
        decrypterTextEffect('project',20,35)
    },
    data(){
        return {
            projectList:[
                {
                    jud:'Dashboard Absensi Raspbery fingerprint',
                    image:'/assets/image/d.35775456.png',
                    tools:['Vue','Laravel','Raspberry pi','R307 module','Python']
                },{
                    jud:'Web App Simple POS (SPA)',
                    image:'/assets/image/pos.8fe81c2f.png',
                    tools:['Laravel', 'vuejs', 'mysql', 'Vuetify UI']
                },{
                    jud:'WEB PPDB (PWA,SPA)',
                    image:'/assets/image/ncop.9fa69b3c.png',
                    tools:["Laravel", "vuejs", "mysql", "Vuetify UI"]
                },{
                    jud:'List Network Interface and Wifi',
                    image:'/assets/image/node-.png',
                    tools:['Node js','Express','vue cdn']
                },{
                    jud:'System Peminjaman barang',
                    image:'/assets/image/s.cbcc6e89.png',
                    tools:["Laravel", "Boostrap", "mysql"]
                },{
                    jud:'App Invoice',
                    image:'/assets/image/ssa.png',
                    tools:["Laravel", "Vue", "mysql","Vuetify Ui"]
                },{
                    jud:'IoT android Aplication (control iot device for Esp8266 & smart living)',
                    image:'/assets/image/iotnat.5fbb82ba.png',
                    tools:["Vue", "Cordova","Vuetify Ui"]
                },{
                    jud:'IoT device control relay & smart living',
                    image:'/assets/image/ff.7f1148cd.png',
                    tools:['C++', 'Esp8266 controller,' ,'relay module', 'DHT11']
                },{
                    jud:'Aplication Submision dicoding',
                    image:'/assets/image/sdf.8082081c.png',
                    tools:['android studio', 'Kotlin']
                },{
                    jud:'Sticker Design',
                    image:'/assets/image/JJ.843028c9.png',
                    tools:['CorelDraw']
                },{
                    jud:'Mikrotik dhcp & Routingn',
                    image:'/assets/image/jarringan.10a9b035.png',
                    tools:['GNS3 Simulator','Virtualbox']
                },{
                    jud:'Debian Dhcp server',
                    image:'/assets/image/P.96e5cf53.png',
                    tools:['GNS3 Simulator','Virtualbox']
                },{
                    jud:'CPU Usage Aplication Dekstop',
                    image:'/assets/image/hhhh.11704d9a.png',
                    tools:['Pascal','Lazarus IDE']
                },{
                    jud:'Landing Page WEB Bem',
                    image:'/assets/image/BEM.png',
                    tools:['Bootstrap']
                },{
                    jud:'MVC Deno Web framework like Laravel using oak and denodb',
                    image:'/assets/image/Lavoca.png',
                    tools:['Deno','Oak Server','DenoDB','Typescript']
                },{
                    jud:'Volca Deno framework',
                    image:'/assets/image/volca.png',
                    tools:['Deno','DenoDB','Typescript']
                },{
                    jud:'App Roll Dice',
                    image:'/assets/image/dice.png',
                    tools:['Vuejs']
                },{
                    jud:'Search text youtube video',
                    image:'/assets/image/submisiontextvideo.png',
                    tools:['Vuejs','vuetify UI']
                },{
                    jud:'Search anime app',
                    image:'/assets/image/anime-search.PNG',
                    tools:['VueJs','Bootstarp']
                },{
                    jud:'Simple Quiz app',
                    image:'/assets/image/quizz-app.png',
                    tools:['Vuejs','Firestore','Tailwind']
                },{
                    jud:'Wireframe Quiz app',
                    image:'/assets/image/wireframe-quizz.png',
                    tools:['Figma']
                },{
                    jud:'Simple Scheduling System',
                    image:'/assets/image/scheduling.png',
                    tools:['Laravel','Vuejs']
                },{
                    jud:'Dashboard Design 1',
                    image:'/assets/image/dashboard-design.PNG',
                    tools:['Boostrap']
                },{
                    jud:'Dashboard Design 2',
                    image:'/assets/image/daahboard-design-2.PNG',
                    tools:['Boostrap']
                }
            ]
        }
    }
}
</script>