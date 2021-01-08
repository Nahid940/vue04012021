<template>
    <div class="info">
        <div class="col-md-6 col-md-offset-3">
            <form v-on:submit.prevent="saveDataInStote" class="form-horizontal">
                
                <div class="form-group">
                    <label class="control-label col-sm-3" for="name">Name *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='person.name' class="form-control" value="" id="name" placeholder="Name" name="name">
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-3" for="name">Age *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='person.age' class="form-control" value="" id="age" placeholder="Age" name="age">
                    </div>
                </div>
            
                <div class="form-group">
                    <label class="control-label col-sm-3" for="name">Phone *</label>
                    <div class="col-sm-9">
                        <input type="text" v-model='person.phone' class="form-control" value="" id="phone" placeholder="Phone" name="phone">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-primary pull-right">Submit</button>
                    </div>
                </div>
            </form>
        </div>

        <PersonData v-bind="{person:this.$store.getters.get_person}"></PersonData>
    </div>
</template>

<script>

import PersonData from './PersonData'

export default {
    name:"NewInfo",
    data(){
        return{
            person:{
                name:null,
                age:null,
                phone:null
            }
        }
    },

    methods:
    {
        saveDataInStote()
        {
            // let formData=new FormData()
            // formData.append('name',this.person.name)
            // formData.append('age',this.person.age)
            // formData.append('phone',this.person.phone)
            this.$store.dispatch('savePerson',this.person)
        }
    },
    components:{
        PersonData
    }
}
</script>