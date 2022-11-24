<template>
    <h1> Database Display!</h1>
    <p>{{ response }}</p><br>

    <template v-for="(datum, index) in data" :key="index">
        <span v-if="index > 0"><br></span>
        Name: {{ datum.data.name }}, Time: {{ datum.data.time }}
    </template>
    <span v-if="!data.length">Database is empty.</span>
</template>

<script>
import DBService from '@/services/DBService';

export default {
    data() {
        return {
            data: [],
            response: "",
        }
    },

    mounted() {
        this.load();
    },

    methods: {
        async load() {
            const response = await DBService.fetch();
            this.response = response.data.message;

            this.data = response.data.data;
        },
    }
}
</script>

<style scoped>

</style>
