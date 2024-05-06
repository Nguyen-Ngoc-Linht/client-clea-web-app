<template>
  <div class="lesson" @click="onClick">
    <!-- Images lesson -->
    <div class="img">
      <img class="img-assets" :src="image" />
    </div>
    <!-- Lesson decription -->
    <div class="lesson-description">
      <!-- Lesson Name -->
      <div class="lecture-name mt-2 ms-2">
        <div class="icon">
          <!-- <img class="icon-img" src="~/assets/images/logoelcom.jpg" /> -->
          <!-- <img class="icon-img" :src="image" /> -->
        </div>
        <p class="text ms-2">
          {{ name }}
        </p>
      </div>

      <!-- Lesson decription -->
      <div class="div-decription">
        <span class="access">{{ 2 + 4 }} lượt truy cập</span>
        <span class="video">{{ 1 }} video</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    order: {
      type: Number,
      require: false,
    },
    image: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      require: false,
    },
    content: {
      type: String,
      require: false,
    },
  },
  methods: {
    onClick() {
      //console.log(this.id);
      this.$emit("lessonClicked", this.id, this.type, this.content);
    },
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/components/feature/lesson/lessonBox.scss"
></style>
