<template>
  <div class="course-item">
    <div class="course-img">
      <div class="box-img">
        <img :src="image" alt="" class="img-item" />
      </div>
      <div class="modal-box">
        <div class="box">
          <div class="box-text">
            <span class="modal-text">Xem chi tiết</span>
          </div>
        </div>
      </div>
    </div>

    <div class="course-name mt-2 ms-2">
      <span class="text-name">
        {{ nameCourse }}
      </span>
    </div>

    <!-- NumberMember -->
    <div class="number-member mt-1">
      <img src="" alt="" class="number-icon" />
      <span class="number">{{ numberMembers }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    nameCourse: {
      type: String,
      required: true,
    },
    numberMembers: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style
  lang="scss"
  scoped
  src="@/assets/scss/components/feature/course/courseItem.scss"
></style>
