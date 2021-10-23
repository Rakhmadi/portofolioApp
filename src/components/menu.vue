<template>
    <div class="lg:px-10 mx-10">
        <ul class="mt-6 flex lg:hidden md:hidden">
            <li class="float-left mr-7 text-white"><a class=" border-b-2 border-dashed border-white hover:border-red-500 transition-all" href="">Menu</a></li>
        </ul>
        <ul class="mt-6  hidden lg:flex md:flex">
            <li class="float-left mr-7 text-white"><router-link class=" border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/">Home</router-link></li>
            <li class="float-left mr-7 text-white"><router-link class=" border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/skill">Skill</router-link></li>
            <li class="float-left mr-7 text-white"><router-link class=" border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/Project">Project</router-link></li>
            <li class="float-left mr-7 text-white"><router-link class=" border-b-2 border-dashed border-white hover:border-red-500 transition-all"  to="/contact">Contact</router-link></li>
        </ul>
    </div>
</template>
<style lang="css">
</style>