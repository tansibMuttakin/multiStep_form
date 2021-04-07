<template>
  <Step1 v-if="activeStep==1" @step="setActiveStep($event)"></Step1>
  <Step2 v-if="activeStep==2" @step="setActiveStep($event)"></Step2>
  <Step3 v-if="activeStep==3" @step="setActiveStep($event)"></Step3>
</template>

<script>
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
export default {
  components:{
    Step1,Step2,Step3
  },
  data(){
    return{
      activeStep :1,
    }
  },
  methods:{
    setActiveStep($event){
      this.activeStep = $event;
    }
  },
  // mounted(){
  //   let data = JSON.parse(window.localStorage.getItem('blog'));
  //   console.log(data);
  //   data.push('hghvh');
  // }

}
</script>

<style>

</style>