<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="fruit in fruits">
                <th scope="row">{{fruit.id}}</th>
                <td>{{fruit.name}}</td>
                <td>{{fruit.price}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import api from "../../api";

    export default {
        name: "Index",
        data: () => ({
           fruits: null,
           api: null
        }),
        methods: {
            getFruits(){
                api.get('/api/fruits').then(res => {
                    this.fruits = res.data.data;
                })
            },
        },
        mounted() {
            this.getFruits();
        }
    }
</script>

<style scoped>

</style>
