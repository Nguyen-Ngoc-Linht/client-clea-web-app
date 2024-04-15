<template>
  <div class="page-wrapper-pc">
    <div class="container">
      <div class="div-position-absolute-header">
        <div class="row text-center p-0 m-0">
          <div class="col-12 text-center p-0 m-0">
            <NuxtLink to="/games" class="out-game">Đóng</NuxtLink>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="body-content">
        <iframe
          :src="url"
          frameborder="0"
          allowfullscreen
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      url: "https://mazaplabs.com/games/game05-feed_the_snake/",
      listLink: [
        {
          id: "1",
          name: "Feed the Snake",
          link: "https://mazaplabs.com/games/game05-feed_the_snake/",
        },
        {
          id: "2",
          name: "Slice Fruit",
          link: "//loja.polargames.com.br//slicefruit-preview/index.html",
        },
        {
          id: "3",
          name: "Liquid Soft",
          link: "https://demonisblack.com/code/2022/liquidsort/game/",
        },
        {
          id: "4",
          name: "Halloween Knife",
          link: "https://game.myloto.vn/app/halloween/index.html?token=eyJhbGciOiJIUzUxMiJ9.eyJwaG9uZSI6IjE5MWFlNjc2LTU5ZGQtNGUzYS1hMjJlLWQxZTg2MjA1MTFiZCIsImxvZ2luVHlwZSI6Nywic3RhdHVzIjowLCJzdWIiOiIxOTFhZTY3Ni01OWRkLTRlM2EtYTIyZS1kMWU4NjIwNTExYmQiLCJpYXQiOjE3MTI3MjQxNjcsImV4cCI6MTcxMjgxMDU2N30.gp9UiEHV7K4M3dIkanm0tkkY90PPBba_TQu_oO2P7PhZf5IegNKW5ZGXQ15mAKdsi0OJt1zQs4Fye42D-SHJ_Q",
        },
        {
          id: "5",
          name: "Neon Bricks",
          link: "https://previews.customer.envatousercontent.com/files/285683658/index.html",
        },
        {
          id: "6",
          name: "Drop Number",
          link: "https://samplegames.link/construct/drop_the_number/",
        },
        {
          id: "7",
          name: "Tile Master",
          link: "https://previews.customer.envatousercontent.com/files/371698623/index.html",
        },
        {
          id: "8",
          name: "Block Puzzle",
          link: "https://previews.customer.envatousercontent.com/files/371698623/index.html",
        },
        {
          id: "9",
          name: "Farm Factory",
          link: "https://demonisblack.com/code/2022/farmfactory/game/",
        },
        {
          id: "10",
          name: "Supermarket",
          link: "https://demonisblack.com/code/2020/tapsupermarket/game/",
        },
      ],
    };
  },
  created() {
    const idGame = parseInt(this.$route.params.iframe, 10);
    this.url = this.listLink[idGame - 1].link;
    // console.log("Linh ", this.listLink[idGame - 1].link);
  },
};
</script>

<style scoped lang="scss">
.page-wrapper-pc {
  .container {
    .div-position-absolute-header {
      align-items: center;
      background: rgba(51, 170, 51, 0);
      display: flex;
      height: 50px;
      justify-content: center;
      position: fixed;
      right: 0;
      top: 0;
      width: 50px;
      z-index: 99999;

      .out-game {
        color: blue;
        font-weight: 800;
        cursor: pointer;
      }
    }
    .body-content {
      height: 100vh;
      overflow: hidden;
      user-select: none;
      width: 100%;
      z-index: 1000;
    }
  }
}

@media (max-width: 576px) {
  .page-wrapper-pc {
    .container {
      padding: 0;
    }
  }
}
</style>
