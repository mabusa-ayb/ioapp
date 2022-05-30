<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-3">
                        <p class="text-left text-muted">You are logged in as {{currentUser.name}}.</p>
                        <button class="btn btn-danger" @click="logout">Logout</button>
                    </div>
                    <div class="col-9">
                        <h4 class="text-center">Welcome to the IO App.</h4>
                        <p class="text-center">You are logged in as {{currentUser.name}}.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        
        data() {
            return {
                currentUser: {},
                token: localStorage.getItem('token')
            }
        },
        methods: {
            logout(){
                axios.post('api/logout').then((response) => {
                    localStorage.removeItem('token')
                    this.$router.push('/login')
                    this.$toaster.success('Success! You are now logged out.')
                }).catch((errors) => {
                    console.log(errors)
                })
            },
        },
        mounted() {
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            
            axios.get('api/user').then((response) => {
                this.currentUser = response.data
            }).catch((errors) => {
                console.log(errors)
            })
        }
    }
</script>
