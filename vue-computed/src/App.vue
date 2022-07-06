<template>
    <Fruits></Fruits>
    <button @click="add">ADD</button>
    <h1>{{ reversedMessage }}</h1>
    <h1>{{ reversedMessage }}</h1>
    <Watch></Watch>
</template>

<script>
import Fruits from '~/components/Fruits'
import Watch from '~/components/Watch'
export default {
    components:{
        Fruits,Watch
    },
    data(){
        return{
            // Getter, Setter
            msg:'Hello Computed!!'
        }
    },
    computed:{  
        //읽기전용. Getter
        //캐싱이 되어있어 같은연산을 여러번 반복하지 않음. 
        //연산은 한번만 하고 결과를 여러번 보냄.
        //method는 연산을 여러번 반복한다.
        // reversedMessage(){
        //     return this.msg.split('').reverse().join('')
        // }
        //Getter, Setter
        reversedMessage:{
            get(){
                return this.msg.split('').reverse().join('')
            },
            set(value){
                this.msg = value
            }
        }
    },
    methods:{
        add(){
            this.reversedMessage += '!?'
        }
    }
}
</script>