<template>
    <div class="wrap">
        <div class="header">
            <header class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Геомаршрут</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link :to="{name: 'fruit.index'}" class="nav-link">Карта</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link v-if="!token" :to="{name: 'user.registration'}" class="nav-link">Регистрация
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link v-if="token" :to="{name: 'user.personal'}" class="nav-link">Профиль
                                </router-link>
                            </li>
                            <li class="nav-item">
                            </li>
                        </ul>
                        <span class="navbar-text">
                        <router-link v-if="!token" :to="{name: 'user.login'}" class="nav-link">Авторизация</router-link>
                        <a v-if="token" class="text-decoration-none" @click.prevent="logout" href="#">Выйти</a>
                    </span>
                    </div>
                </div>
            </header>
        </div>
        <router-view v-slot="{ Component }">
            <transition>
                <component :is="Component" />
            </transition>
        </router-view>

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
            logout() {
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
    .header {
        height: 100%;
    }
</style>
