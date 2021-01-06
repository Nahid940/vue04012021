<template>
    <div class="login">
        <div class="col-md-6 col-md-offset-3">
            <form v-on:submit.prevent='loginForm' class="form-horizontal" method="post" action="">
                <div class="form-group">
                    <label class="control-label col-sm-3" for="fname">Username *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='username' class="form-control" value="" id="fname" placeholder="Username" name="fname">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="fname">Password *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='password' class="form-control" value="" id="fname" placeholder="Password" name="password">
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
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
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
            Vue.axios.post('localhost:8080').then((response)=>{console.log(response)})
        }
    }
}
</script>