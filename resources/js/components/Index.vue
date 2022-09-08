<template>
    <div>
        <router-link :to="{name: 'fruit.index'}">List</router-link>
        <router-link :to="{name: 'map'}">Map</router-link>
        <router-link v-if="!token" :to="{name: 'user.login'}">Login</router-link>
        <router-link v-if="!token" :to="{name: 'user.registration'}">Registration</router-link>
        <router-link v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
        <a v-if="token" @click.prevent="logout" href="#">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
    import api from "../api";

    export default {
        name: "Index",
        data: () => ({
            token: null
        }),
        methods: {
            logout(){
                api.post('/api/auth/logout').then(res => {
                    localStorage.removeItem('token');
                    this.$router.push({name: 'user.login'})
                })
            }
        },
        updated() {
            this.token = localStorage.getItem("token");
        },
        mounted() {
            this.token = localStorage.getItem("token");
        }
    }
</script>

<style scoped>

</style>
