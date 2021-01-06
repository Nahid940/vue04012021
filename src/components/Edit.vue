<template>
    <div class="edit">
        <div class="col-md-6 col-md-offset-3">
            <form v-on:submit.prevent='updateForm' class="form-horizontal" method="post" action="">
                <div class="form-group">
                    <label class="control-label col-sm-3" for="fname">First Name: *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='employee.fname' class="form-control" value="" id="fname" placeholder="First Name" name="fname">
                    </div>
                </div>
                <div class="form-group">
                <label class="control-label col-sm-3" for="lname">Last Name:</label>
                <div class="col-sm-9">
                    <input type="text" v-model='employee.lname' class="form-control" value="" id="lname" placeholder="Last Name" name="lname">
                </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="email">Email: *</label>
                    <div class="col-sm-9">
                        <input type="email" v-model='employee.email' class="form-control" id="email" value="" placeholder="Email" name="email">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="phone">Phone:</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='employee.phone' class="form-control" id="phone" placeholder="Phone" name="phone">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="age">Age:</label>
                    <div class="col-sm-9">
                        <input type="number" v-model='employee.age' class="form-control" id="age" value="" placeholder="Age" name="age">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="gender">Gender:</label>
                    <div class="col-sm-9">
                        <div class="radio">
                            <label><input type="radio" :checked="employee.gender==1"  v-model="employee.gender" value="1" name="gender">Male</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" :checked="employee.gender==2" v-model='employee.gender' value="2" name="gender">Female</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="type">Type:</label>
                    <div class="col-sm-9">
                        <select name="type" v-model="employee.type" id="type" class="form-control">
                            <option value="">Select Type</option>
                            <option value="1">General</option>
                            <option value="2">Regular</option>
                            <option value="3">Temporary</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="dob">DOB:</label>
                    <div class="col-sm-9">
                        <input type="date" v-model="employee.dob" class="form-control" value="<?php echo set_value('dob'); ?>" id="dob" name="dob">
                    </div>
                </div>
                <div class="form-group hidden">
                    <label class="control-label col-sm-3" for="image">Select Options:</label>
                    <div class="col-sm-9">
                        <div class="checkbox">
                            <label><input name="options[]" v-model="employee.options" type="checkbox" value="1">Option 1</label>
                        </div>
                        <div class="checkbox">
                            <label><input  name="options[]" v-model="employee.options" type="checkbox" value="2">Option 2</label>
                        </div>
                        <div class="checkbox">
                            <label><input name="options[]" v-model="employee.options" type="checkbox" value="3">Option 3</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="image">Image:</label>
                    <div class="col-sm-9">
                        <input type="file" class="form-control" id="image" name="image">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary pull-right">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

export default {
    name:'Edit',
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
            id:this.$route.params.id
        } 
    },
    created()
    {
        Vue.axios.get('http://localhost:8080/api/employee/'+this.id).then((response) => {
            this.employee=response.data.employee
        })
    },
    methods:{
        updateForm()
        {
            var bodyFormData = new FormData();
            bodyFormData.append('id',this.id);
            bodyFormData.append('fname',this.employee.fname);
            bodyFormData.append('lname',this.employee.lname);
            bodyFormData.append('email',this.employee.email);
            bodyFormData.append('age',this.employee.age);
            bodyFormData.append('gender',this.employee.gender);
            bodyFormData.append('type',this.employee.type);
            bodyFormData.append('dob',this.employee.dob);
            bodyFormData.append('phone',this.employee.phone);
            bodyFormData.append('options',this.employee.options);
            bodyFormData.append('image',this.employee.image);
            bodyFormData.append('update',true);

            Vue.axios.post('http://localhost:8080/api/employee',
            bodyFormData,
            {
                headers: {
                    //'Content-Type': 'multipart/form-data'
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                if(response.status==200)
                {
                    alert("Data updated successfully!")
                    setTimeout(function(){
                        // window.location.href = "http://localhost:8081/"
                    },2000)
                }
            })
        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.employee.image=files[0];
        },
    }
}
</script>