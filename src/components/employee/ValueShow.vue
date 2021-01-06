<template>
    <div class="show ">
        <span class="label label-success">Value is {{this.$store.getters.getInputvalue}}</span>
    </div>
</template>
<script>
export default {
    name:"ValueShow",
    data()
    {
        return{
            input_value:null
        }
    },
}
</script>