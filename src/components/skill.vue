<template>
<div class="lg:px-10 mx-10">
<div class=" pt-20 w-100">
    <div class="w-100">
        <h1 class="text-white sm:text-4xl text-4xl" id="skill">Skill</h1>
        <div class="mt-4 flex">
            <div class="flex flex-wrap  w-100">
                <div class="p-3 cardbg rounded-lg flex justify-start items-stretch mt-2 mr-0 md:mr-2 w-full md:w-auto" v-for="item in skilllist" :key="item">
                    <div>
                        <img  :src="item.logo" style="width:50px" alt="">
                    </div>
                    <div class="flex flex-col p-1 ml-1">
                        <h3 class="text-white text-xl ">{{item.skilname}}</h3>
                        <font class="text-white text-xs">{{item.experience}} exp</font>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<style lang="css">

</style>
<script>
import decrypterTextEffect from '../dectext/index'
export default {
    mounted() {
        decrypterTextEffect('skill',20,35)
    },
    data(){
        return{
            skilllist:[
            {
               skilname:'Laravel',
               experience:'3 Years',
               logo:'/assets/icon/Laravel.png'
            },
            {
               skilname:'Vue',
               experience:'2 Years',
               logo:'/assets/icon/vues.png'
            },
            {
               skilname:'php',
               experience:'4 Years',
               logo:'/assets/icon/php.png'
            },
            {
               skilname:'Typescript',
               experience:'1 Year',
               logo:'/assets/icon/typescript.svg'
            },{
               skilname:'Javascript',
               experience:'3 Years',
               logo:'/assets/icon/logo-javascript.svg'
            },{
               skilname:'CSS',
               experience:'3 Years',
               logo:'/assets/icon/css.png'
            },{
               skilname:'MYSQL',
               experience:'3 Year',
               logo:'/assets/icon/mysql.png'
            },{
               skilname:'Express.js',
               experience:'1 Month',
               logo:'/assets/icon/ex.png'
            },{
               skilname:'Deno',
               experience:'9 Month',
               logo:'/assets/icon/deno-circle-thunder.gif'
            },{
               skilname:'Noded.js',
               experience:'2 Month',
               logo:'/assets/icon/node.png'
            },{
               skilname:'Deno oak',
               experience:'3 Month',
               logo:'/assets/icon/47053330.png'
            },{
               skilname:'Bootstrap',
               experience:'3 Years',
               logo:'/assets/icon/2918581.png'
            },{
               skilname:'Vuetify UI',
               experience:'6 Months',
               logo:'/assets/icon/vuetify.svg'
            },{
               skilname:'Cordova',
               experience:'4 Months',
               logo:'/assets/icon/cordova_256.png'
            },{
               skilname:'Adobe Ai',
               experience:'1 Year',
               logo:'/assets/icon/492px-Illustrator_CC_icon.png'
            },{
               skilname:'Adobe Ps',
               experience:'2 Months',
               logo:'/assets/icon/Adobe-Photoshop-for-Windowstan.png'
            },{
               skilname:'Arduino',
               experience:'2 Months',
               logo:'/assets/icon/arduino-logo-1.png'
            },{
               skilname:'Mikrotik',
               experience:'1 Year',
               logo:'/assets/icon/mikrotik.png'
            },{
               skilname:'Corel',
               experience:'1 Year',
               logo:'/assets/icon/cr.png'
            },{
               skilname:'C++',
               experience:'6 months',
               logo:'/assets/icon/306px-ISO_C++_Logo.svg.png'
            },{
               skilname:'MonggoDB',
               experience:'1 month',
               logo:'/assets/icon/mongodb-icon-1.svg'
            }
         ]
        }
    }
}
</script>