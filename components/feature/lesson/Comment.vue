<template>
  <div class="component-comment">
    <div class="input-comment">
      <input
        type="text"
        class="input-text"
        placeholder="Nhập bình luận của bạn"
      />
    </div>
    <div class="list-comment"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listcomment: [],
    };
  },
};
</script>

<style scoped lang="scss">
.component-comment {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .input-comment {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;

    .input-text {
      width: 80%;
      height: 40px;
      border-radius: 32px;
      border: 0.5px solid black;
      padding: 0 12px;
    }
  }

  .list-comment {
    flex: 1;
  }
}
</style>
