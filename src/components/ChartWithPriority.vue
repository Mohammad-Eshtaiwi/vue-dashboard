<template>

  <loading v-if="delayed" /> 
  <Chart v-else :type="type" :name="name" :data="data" :options="options" />
</template>

<script>
import Loading from "./Loading";
import Chart from "./Chart";
export default {
    
    data(){
        return {
            delayed : true
        }
    },
    created(){
        setTimeout( ()=>this.delayed = false , this.priority * 1000)
    },
    components: { Loading , Chart },
    props: {priority : Number , name:String ,type:String , data:Object,options:Object}
}
</script>