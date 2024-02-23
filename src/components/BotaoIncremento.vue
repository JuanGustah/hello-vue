<template>
    <button @click="increment">
        {{ count }}
    </button>
</template>

<script>
    import { ref } from 'vue';
    
    export default {
        name: 'BotaoIncremento',
        setup(){
            const count = ref(0)
            function increment(){
                count.value++
            }
            return {
                count,
                increment
            };
        }
    }
</script>
