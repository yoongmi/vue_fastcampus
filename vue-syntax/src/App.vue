<template>
    <h1 v-once @click="add">{{ msg }}</h1>
    <h2 v-html="msg2"></h2>
    <h3 v-bind:class="msg3">{{msg3}}</h3>
    <h4 :[attr]="msg3">{{msg3}}</h4>
    <h4 @[event]="add">{{msg}}</h4>
</template>

<script>
export default {
    data(){
        return{
            msg: 'hello world!',
            msg2: '<div style="color:red;">Hello!</div>',
            msg3: 'active',
            attr: 'class',
            event: 'click'
        }
    },
    methods: {
        add(){
            this.msg += '!'
        }
    }
}
</script>

<style scoped>
.active{
    color:royalblue;
    font-size:100px;
}
</style>