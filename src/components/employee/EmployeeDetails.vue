<template>
    <div class="details">
        <div class="col-md-6 col-md-offset-3">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{{employee.fname+" "+employee.lname}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{employee.email}}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{{employee.phone}}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td><span v-if="employee.gender==1">Male</span><span v-else-if="employee.gender==2">Female</span></td>
                    </tr>
                </tbody>
            </table>
            <!-- <p>
                This is store data
                {{store_data}}
            </p> -->
            <input type="text" v-on:keyup="storeInputValue" class="form-control" v-model="input_value">
            <ValueShow></ValueShow>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import Vueaxios from 'vue-axios'
import ValueShow from './ValueShow'
Vue.use(Vueaxios,axios)

export default {
    name:'EmployeeDetails',
    data(){
        return{
            employee:{
                id:this.$route.params.id,
                fname:'',
                lname:'',
                email:'',
                phone:'',
                age:'',
                gender:'',
                type:'',
                dob:'',
                options:'',
                image:'',
            },
            value:0,
            store_data:{},
            input_value:null,
        }
    },
    methods:{
        getData(id)
        {
            alert(id)
        },
        storeInputValue()
        {
            this.$store.dispatch('updateInputValue',this.input_value)
        }
    },
    created()
    {
        Vue.axios.get('http://localhost:8080/api/employee/'+this.$route.params.id).then((response) => {
            this.employee=response.data.employee,
            this.$store.dispatch('storeEmployeeDate',this.employee)
            // this.$store.commit('addEmployee',this.employee)
            // this.store_data=this.$store.state.employee
        })
    },
    computed:
    {
    
    },
    components:{
        ValueShow
    }
}
</script>