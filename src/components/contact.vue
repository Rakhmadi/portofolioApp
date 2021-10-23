<template>
<div class="lg:px-10 mx-10">
    <div class=" pt-20">
        <h1 class="text-white sm:text-4xl text-4xl" id="contact">Contact</h1>
        <div class="mt-4 flex flex-col">
            <h2 class="text-white text-2xl" id="a">facebook</h2>
            <a href="https://web.facebook.com/rahmadi.nasa" id="q" target="_blank" class="text-blue-500 underline break-words">https://web.facebook.com/rahmadi.nasa</a>
             <h2 class="text-white text-2xl" id="s">Github</h2>
            <a href="https://web.facebook.com/rahmadi.nasa" id="w" target="_blank" class="text-blue-500 underline break-words">https://github.com/Rakhmadi</a>
             <h2 class="text-white text-2xl" id="d">Gmail</h2>
            <a href="https://web.facebook.com/rahmadi.nasa" id="e" target="_blank" class="text-blue-500 underline break-words">rakhmadiwalker@gmail.com</a>
        </div>

    </div>
</div>
</template>
<script>
import decrypterTextEffect from '../dectext/index'
export default {
    mounted() {
        decrypterTextEffect('contact',20,35)
        decrypterTextEffect('q',35,35)
        decrypterTextEffect('w',25,35)
        decrypterTextEffect('e',40,35)
        decrypterTextEffect('a',30,35)
        decrypterTextEffect('s',36,30)
        decrypterTextEffect('d',28,35)
    },
}
</script>