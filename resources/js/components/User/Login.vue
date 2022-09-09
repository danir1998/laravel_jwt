<template>
    <div class="content flex align-items-center h-100 justify-content-center">
        <form class="w-25 gap-1 bg-white p-5 m-1 shadow-lg border border-gray-200 rounded-2" >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>

            <button @click.prevent="login" type="submit" class="btn btn-primary">Войти</button>

            <div v-if="error" class="text-danger">
                <p>{{this.error}}</p>
            </div>
        </form>
    </div>



<!--    <div class="container-fluid">-->
<!--        <div class="w-100">-->
<!--            <input v-model="email" type="email" class="form-control" placeholder="Email">-->
<!--            <input v-model="password" type="password" class="form-control" placeholder="Password">-->
<!--            <input @click.prevent="login" type="submit" class="btn btn-primary" value="Войти">-->
<!--            <div v-if="error" class="text-danger">-->
<!--                {{this.error}}-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

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
