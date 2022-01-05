<template>
    <div class="w-25">
        <input v-model="name" type="email" class="form-control" placeholder="Name">
        <input v-model="email" type="email" class="form-control" placeholder="Email">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <input v-model="password_confirmation" type="password" class="form-control" placeholder="Confirm password">
        <input @click.prevent="store" type="submit" class="btn btn-primary" value="Регистрация">

        <div v-if="error" class="text-danger">
            {{this.error}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data: () => ({
            name: null,
            password: null,
            email: null,
            password_confirmation: null,
            error: null
        }),
        methods: {
            store(){
                axios.post('/api/users', {name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation}).then(res => {
                    localStorage.setItem("token", res.data.token);
                    this.$router.push({name: "user.personal"})
                }).catch(err => {
                    this.error = err.response.data.message
                })
            }
        }
    }
</script>

<style scoped>

</style>
