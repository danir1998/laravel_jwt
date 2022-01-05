<template>
    <div class="w-25">
        <input v-model="email" type="email" class="form-control" placeholder="Email">
        <input v-model="password" type="password" class="form-control" placeholder="Password">
        <input @click.prevent="login" type="submit" class="btn btn-primary" value="Войти">
        <div v-if="error" class="text-danger">
            {{this.error}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            email: null,
            password: null,
            error: null,
        }),
        methods: {
            login(){
                axios.post('/api/auth/login', {email: this.email, password: this.password}).then(res => {

                    localStorage.setItem("token", res.data.access_token)
                    this.$router.push({name: "user.personal"})
                }).catch(err => {
                    this.error = err.response.data.error;
                    // console.log();
                })
            }
        }
    }
</script>

<style scoped>

</style>
