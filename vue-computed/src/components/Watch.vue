<template>
    <div>
        <hr>
        <h1 @click="changeMessage">{{msg}}</h1>
        <h1>{{ reversedMessage }}</h1>
    </div>
</template>

<script>
import Fruits from '~/components/Fruits'
export default {
    components:{
        Fruits
    },
    data(){
        return{
            msg:'Hello?'
        }
    },
    computed:{  
        reversedMessage(){
            return this.msg.split('').reverse().join('')
        }
    },
    watch:{ //값이 변경되는지 감시.
        msg(){
            console.log('msg:',this.msg)
        },
        reversedMessage(value){
            console.log('reversedMessage:',value)
        }
    },
    methods:{
        changeMessage(){
            this.msg = 'Good!'
        }
    }
}
</script>