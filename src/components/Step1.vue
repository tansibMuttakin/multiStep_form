<template>
  <div>
    <Card style="width: 50%; margin: auto">
      <template #content>
        <div class="form-container">
          <form action="#">
            <div class="title my-2">
              <p class="label-text">Title</p>
              <InputText @input="titleRequired=false" type="text" v-model="title" placeholder="blog title" class="p-inputtext-sm"/>
              <small v-if="titleRequired" class="text-danger d-flex">Title is required</small>
            </div>
            <div class="description my-2">
              <p class="label-text">Description</p>
              <br>
              <Textarea @input="descriptionRequired=false,minDescRequired=false" v-model="description" rows="10" cols="30"/>
              <small v-if="descriptionRequired" class="text-danger d-flex">Description is required</small>
              <small v-if="minDescRequired" class="text-danger d-flex">Description must be greater than 100 characters</small>
            </div>
          </form>
        </div>
        <div class="button d-flex justify-content-end">
          <button type="button" class="btn btn-primary" @click="saveData()">Next</button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
export default {
  components: {
    InputText,
    Card,
    Textarea,
  },
  data() {
    return {
      title: '',
      description: '',
      titleRequired: false,
      descriptionRequired: false,
      minDescRequired: false,
      count:0,
    };
  },
  methods:{
    saveData(){
      if (!this.title || !this.title.trim()) {
        this.titleRequired = true;
      }
      if (!this.description || !this.description.trim()) {
        this.descriptionRequired = true;
      }
      else if(this.description.trim() && this.count<100){
        this.minDescRequired = true;
      }
      else{
        let payload ={};
        payload.title = this.title;
        payload.description = this.description;
        this.$store.commit('storeTextToState',payload);
        this.$emit('step',2);
      }
    },
  },
  created(){
    this.title = this.$store.state.title ? this.$store.state.title : '';
    this.description = this.$store.state.description ? this.$store.state.description : '';
  },
  watch:{
    description(){
      let characterCount = this.description.trim().replace(/ /g,"");
      this.count = characterCount.length;
      console.log(this.count);
    },
  },
};
</script>


<style lang="scss" scoped>
.p-inputtext-sm{
  width:100%;
}
.p-inputtextarea{
  width:100%;
}
.label-text{
  margin-bottom: 2px;
  font-weight: 500;
  float: left;
}
</style>