<template>
    <div id="table" class="col-md-8 col-md-offset-2">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Image</th>
                    <th>DOB</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for='(employee,i) in employees' :key='employee.id'>
                    <td>{{i+=1}}</td>
                    <td>{{employee.fname+" "+employee.lname}}</td>
                    <td>{{employee.email}}</td>
                    <td>{{employee.phone}}</td>
                    <td>{{employee.age}}</td>
                    <td>{{employee.gender=='1'?'Male':'Female'}}</td>
                    <td><img style="height:5%" :src="`http://localhost:8080/uploads/`+employee.image" alt=""></td>
                    <td>{{employee.dob}}</td>
                    <td v-if='employee.type==1'>General</td>
                    <td v-else-if='employee.type==2'>Regular</td>
                    <td v-else-if='employee.type==3'>Temporary</td>
                    <td v-else>-</td>
                    <td>
                        <router-link class="btn btn-info btn-xs" :to="{name:'EmployeeDetails',params:{id:employee.id}}"><i class="fa fa-eye"></i></router-link>
                        &nbsp;
                        <router-link :to="{name:'Edit',params:{id:employee.id}}" title="Edit" class="btn btn-primary btn-xs"><i class="fa fa-edit"></i></router-link>
                        &nbsp;
                        <a @click="onDelete(employee.id)" title="Delete" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios,axios)

    export default {
        name:'Table',
        props:{},
        data(){
            return{
                employees:null
            }
        },
        created()
        {
            Vue.axios.get('http://localhost:8080/api/employee').then((response) => {
                this.employees=response.data.employees
            })
        },
        methods:{
            onDelete(id){
                Vue.axios.post('http://localhost:8080/api/employee',
                {id:id,'del':1},
                {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }
                ).then((response)=>console.log(response))
            }
        }
    }
</script>