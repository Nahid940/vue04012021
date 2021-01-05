<template>
  <div class="">
      <Table/>
      {{number}}
  </div>
</template>

<script>
    import store from '../store/inex.js'
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
        mounted(){
            this.number=store.getters.getCurrentNumber
        }
    }
</script>