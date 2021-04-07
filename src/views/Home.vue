<template>
  <div class="container">
    <router-link to="/create-blog">
      <button type="button" class="btn btn-dark">Create New</button>
    </router-link>
    <div class="container post-container my-4">
      <Card v-for="(blog,index) in blogs" :key="index" class="my-4">
        <template #header>
          <img alt="user header" :src="blog.images[0].objectURL" />
        </template>
        <template #title> {{blog.title}} </template>
        <template #content>
          <p class="text-left">
            {{blog.description}}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "primevue/card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      blogs: [],
    };
  },
  mounted(){
    let blogsData = JSON.parse(window.localStorage.getItem('blog'));
    this.blogs = blogsData;
    console.log(blogsData);
  }
};
</script>
<style lang="scss" scoped>
.p-card-content {
  p {
    text-align: left;
  }
}
.p-card-header{
  img{
    width:300px;
    height:300px;
  }
}
.post-container{
  width:70%;
}
</style>