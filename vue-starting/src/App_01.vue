<template>
    <h2>{{ count }}</h2>
</template>

<script>
export default {
    data(){
        return{
            count:2
        }
    },
    beforeCreate(){ //컴포넌트가 생성되기 직전에 실행되는 함수
        console.log('Before Create!!', this.count)
    },
    created(){  //컴포넌트가 생성된 직후에 실행되는 함수
        console.log('Created!!', this.count)
        console.log(document.querySelector('h2'))
    },
    beforeMount(){  //html에 연결되기 직전에 실행되는 함수
        console.log('Before Mount!')
        console.log(document.querySelector('h2'))
    },
    mounted(){  //html에 연결된 직후에 실행되는 함수
        console.log('mounted!!')
        console.log(document.querySelector('h2'))
    }
}
</script>