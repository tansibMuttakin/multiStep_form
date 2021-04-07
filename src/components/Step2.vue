<template>
  <div>
    <Card style="width: 50%; margin: auto">
      <template #title>Choose Images</template>
      <template #subtitle
        >First select image. Then click upload</template
      >
      <template #content>
        <FileUpload
          mode="advanced"
          name="demo[]"
          accept="image/*"
          :multiple="true"
          :maxFileSize="1000000"
          :customUpload="true"
          @uploader="myUploader"
          chooseLabel="Select"
        />
        <div>
          <p v-if="imageFull" class="text-danger float-start">
            You can not upload more that five images
          </p>
          <p v-if="warning" class="text-danger float-start">
            You must select and upload at least one image
          </p>
        </div>
        <div class="button my-2 d-flex justify-content-between w-100">
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('step', 1)"
          >
            Previous
          </button>
          <button type="button" class="btn btn-primary" @click="saveImages()">
            Next
          </button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import FileUpload from "primevue/fileupload";
export default {
  components: {
    Card,
    FileUpload,
  },
  data() {
    return {
      images: [],
      imageFull: false,
      warning: false,
    };
  },
  methods: {
    myUploader(event) {
      let data = event.files;
      if (data.length <= 5 && this.images.length < 5) {
        data.forEach((element) => {
          this.images.push(element);
        });

        this.imageFull = false;
        this.warning = false;

      } else {

        this.imageFull = true;
        this.warning = false;
      }
      console.log(this.images);
      this.flag = false;
    },
    saveImages() {
      if (this.images.length == 0) {
        this.imageFull = false;
        return (this.warning = true);
      }
      this.$store.commit("storeImagesToState", this.images);
      this.images = [];
      this.$emit("step", 3);
    },
  },
};
</script>
<style lang="scss" scoped>
.p-inputtext-sm {
  width: 100%;
}
.p-inputtextarea {
  width: 100%;
}
.label-text {
  margin-bottom: 2px;
  font-weight: 500;
  float: left;
}
</style>