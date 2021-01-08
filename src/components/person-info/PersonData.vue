<template>
    <div class="data">
        <div class="col-md-6 col-md-offset-3">
            <table class="table">
                <tr>
                    <td>Name</td>
                    <td>{{person.name}}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{{person.phone}}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{{person.age}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name :'PersonData',
    props:['person']
    
}
</script>