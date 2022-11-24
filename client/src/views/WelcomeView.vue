<template>
    <h1> Welcome page!</h1>

    <input type="text" name="name" v-model="name" placeholder="Insert your name here..."><br>
    <button @click="submit">Submit</button>
    <p>{{ response }}</p>
</template>

<script>
import WelcomeService from '@/services/WelcomeService';

export default {
    data() {
        return {
            name: "",
            response: ""
        }
    },

    methods: {
        async submit() {
            const response = await WelcomeService.welcomeMsg({
                    name: this.name
                });
            this.response = response.data;
        },
    }
}
</script>

<style scoped>

</style>
