<template>
  <div class="games-page">
    <div class="header-game">
      <div class="back-page">
        <button class="btn btn-back" @click="backHome">
          Quay lại trang chủ
        </button>
      </div>
    </div>

    <!-- body -->
    <div class="container-xl">
      <div class="row">
        <div
          v-for="item in listGame"
          class="col-2"
          @click="nativeIframe(item.id)"
        >
          <div class="item-box">
            <div class="item-img">
              <img
                :src="require(`~/assets/images/pages/giaitri/${item.image}`)"
                alt="game1"
                class="img-item"
              />
            </div>

            <div class="item-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footers">
      <Footter />
    </div>
  </div>
</template>

<script>
import Footter from "@/components/common/Footter.vue";
export default {
  layout: "empty",
  components: {
    Footter,
  },
  data() {
    return {
      listGame: [
        {
          id: "1",
          name: "Feed The Snake",
          image: "the-snake.png",
        },
        {
          id: "2",
          name: "Slice Fruit",
          image: "slice-fruit.png",
        },
        {
          id: "3",
          name: "Liquid Soft",
          image: "Liquid-Soft.png",
        },
        {
          id: "4",
          name: "Halloween Knife",
          image: "Halloween-Knife.png",
        },
        {
          id: "5",
          name: "Neon Bricks",
          image: "Neon-Bricks.png",
        },
        {
          id: "6",
          name: "Drop Number",
          image: "Drop-Number.png",
        },
        {
          id: "7",
          name: "Tile Master",
          image: "Master-Match.png",
        },
        {
          id: "8",
          name: "Block Puzzle",
          image: "block-puzzle.png",
        },
        {
          id: "9",
          name: "Farm Factory",
          image: "farm-factory.png",
        },
        {
          id: "10",
          name: "Supermarket",
          image: "supermaket.png",
        },
      ],
    };
  },
  methods: {
    nativeIframe(id) {
      this.$router.push(`/games/${id}`);
    },
    backHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/scss/pages/games/index.scss"></style>
