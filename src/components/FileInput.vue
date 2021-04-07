<template>
  <div class="form-group" ref="file-input-container">
    <div>
      <input
        ref="fileInput"
        type="file"
        class="form-control my-3"
        name="img[]"
        @change="myUploader1"
        :disabled="imageFull"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>