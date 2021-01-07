<template>
    <div class="login">
        <div class="col-md-6 col-md-offset-3">
            <form v-on:submit.prevent='doLogin' class="form-horizontal" method="post" action="">
                <div class="form-group">
                    <label class="control-label col-sm-3" for="fname">Username *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='username' class="form-control" value="" id="username" placeholder="Username" name="fname">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="fname">Password *</label>
                    <div class="col-sm-9">
                        <input type="password" v-model='password' class="form-control" value="" id="password" placeholder="Password" name="password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary pull-right">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'vue-axios'
Vue.use(axios)
export default {
    name:'Login',
    data()
    {
        return{
            username:'',
            password:''
        }
    },
    methods:{
        doLogin()
        {
            var bodyFormData = new FormData();
            bodyFormData.append('username',this.username)
            bodyFormData.append('password',this.password)
            // Vue.axios.post('http://localhost:8080/api/employee/login',
            // bodyFormData,
            // {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // }).then((response)=>{
                this.$store.dispatch('storeCredentials',bodyFormData)
                // this.$store.dispatch('userLoggedIn',true)
            // })
        }
    }
}
</script>