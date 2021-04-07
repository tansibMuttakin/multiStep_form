<template>
  <div class="container w-50">
    <div class="form-group my-2">
      <label for="title" class="float-start label-text">Title</label>
      <input
        v-model="title"
        type="text"
        class="form-control"
        name="title"
        id="title"
        aria-describedby="helpId"
        placeholder=""
        disabled
      />
    </div>
    <div class="form-group my-2">
      <label for="description" class="float-start label-text">Description</label>
      <textarea
        v-model="description"
        class="form-control"
        name="description"
        id="description"
        rows="10"
        disabled
      ></textarea>
    </div>
    <div class="d-flex flex-wrap my-3 image-container">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="images[index].objectURL"
        class="img-fluid"
        width="200"
        alt=""
      />
    </div>
    <router-link to="/">
      <button
        type="button"
        class="btn btn-success my-3 float-end"
        @click="storeTolocal()"
      >
        Save
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      images: [],
    };
  },
  methods: {
    storeTolocal() {
      this.$store.commit("saveToLoal");
      this.$store.commit("clearState");
    },
  },
  mounted() {
    this.title = this.$store.state.title;
    this.description = this.$store.state.description;
    this.images = this.$store.state.images;
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  gap: 10px;
}
.label-text{
  margin-bottom: 2px;
  font-weight: bold;
}
</style>