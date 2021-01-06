<template>
  <div class="">
      <Table/>
  </div>
</template>

<script>
    import Table from '../components/table/Table.vue'
    export default {
        name: 'Home',
        data(){
            return{
                number:''
            }
        },
        components:{
            Table
        },
        props: {},
        created(){
            this.number=this.$store.getters.getCurrentNumber
            console.log(this.$store.state.employee)
        }
    }
</script>