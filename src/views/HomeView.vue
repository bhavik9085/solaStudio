<template>
  <div class="container">
    <heroImg></heroImg>
    <section class="hero2">
      <div class="image">
        <div class="inback"></div>
        <img class="img1" :src="imageLoad(staticResources.hero2img1)" alt="" />
        <div class="bigdots"></div>
        <div class="smalldots"></div>
        <img class="img2" :src="imageLoad(staticResources.hero2img2)" alt="" />
        <div class="rectangle"></div>
      </div>
      <div class="hero2Description">
        <h3>What is Sola?</h3>
        <h2>Who We Are</h2>
        <p>
          We provide beauty professionals with high-end, fully-equipped salon
          studios alongside the support and tools they need to launch their
          salon business in no time.
        </p>
        <p>
          We take pride in being the largest, fastest-growing salon studio
          business in the country. At our core, we believe in the beauty
          professional and have one goal in mind:
        </p>
        <button>Learn More</button>
      </div>
    </section>
    <serviceSlider></serviceSlider>
    <section class="hero3">
      <div class="hero3Description">
        <h2>OUR BELIEFS</h2>
        <h3>Our Mission</h3>
        <p>
          To inspire and support beauty professionals to chase their dreams,
          elevate their careers, and experience the freedom of salon ownership.
        </p>
        <h3>Our Values</h3>
        <p>
          Everything we do is designed to take care of our customers and to
          ensure that they have the best salon studio experience possible. We
          are passionate about everything that goes into making a beauty
          professional a successful business owner. We offer turnkey,
          move-in-ready studios alongside support, educational resources, and
          cutting-edge technology solutions that are designed exclusively for
          our community of independents. We empower independent stylists to live
          their best lives.
        </p>
      </div>
      <div class="image">
        <img class="img1" :src="imageLoad(staticResources.hero3img1)" alt="" />
      </div>
    </section>
    <imageSlider></imageSlider>
  </div>
</template>

<script>
import heroImg from "@/components/heroImg.vue";
import serviceSlider from "@/components/serviceSlider.vue";
import imageSlider from "@/components/imageSlider.vue";
import main from "@/main";

export default {
  name: "HomeView",
  components: {
    heroImg,
    serviceSlider,
    imageSlider,
  },
  data() {
    return {
      staticResources: this.$store.state.staticResources,
    };
  },
  methods: {},

  created() {
    this.imageLoad = main.imageLoad;
  },

  mounted() {
    this.$store.dispatch("loaderActive", false);
  },

  beforeUnmount() {
    this.$store.dispatch("loaderActive", true);
  },

  computed: {},
};
</script>

<style lang="scss">
.container {
  margin-top: 151px;

  @media only screen and (max-width: 960px) {
    margin-top: 120px;
  }

  @media only screen and (max-width: 860px) {
    margin-top: 0px;
  }

  .hero2 {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 58px auto;
    padding: 0 30px;

    @media only screen and (max-width: 1330px) {
      justify-content: center;
    }

    .image {
      margin-left: 70px;
      position: relative;
      width: 625px;
      height: 600px;
      display: inline-block;

      @media only screen and (max-width: 960px) {
        margin-left: 35px;
        width: 430px;
        height: 500px;
      }

      @media only screen and (max-width: 860px) {
        width: 300px;
        height: 280px;
      }

      @media only screen and (max-width: 420px) {
        width: 240px;
        height: 230px;
      }

      .inback {
        z-index: 0;
        position: absolute;
        top: 30%;
        left: 5%;
        background-color: #89dbe7;
        height: 350px;
        width: 250px;
        rotate: 330deg;

        @media only screen and (max-width: 960px) {
          width: 200px;
          height: 280px;
          top: 30%;
          left: 3%;
        }

        @media only screen and (max-width: 860px) {
          width: 100px;
          height: 180px;
          top: 30%;
          left: 3%;
        }

        @media only screen and (max-width: 420px) {
          width: 80px;
          height: 144px;
          top: 30%;
          left: 3%;
        }
      }
      .img1 {
        z-index: 1;
        max-width: 376px;
        height: 518px;
        border-radius: 10px;
        margin-bottom: 80px;
        position: absolute;
        top: 0;

        @media only screen and (max-width: 960px) {
          width: 276px;
          height: 418px;
        }

        @media only screen and (max-width: 860px) {
          width: 180px;
          height: 248px;
        }

        @media only screen and (max-width: 420px) {
          width: 144px;
          height: 198px;
        }
      }
      .bigdots {
        z-index: 1;
        background-size: 50px 50px;
        background-image: radial-gradient(#1fa0ef 20%, transparent 20%);
        background-position: 0 0;
        height: 250px;
        width: 200px;
        position: absolute;
        top: 15%;
        right: 17%;
        background-repeat: repeat;

        @media only screen and (max-width: 960px) {
          background-size: 40px 40px;
          height: 200px;
          width: 160px;
          top: 12%;
          right: 10%;
        }

        @media only screen and (max-width: 860px) {
          background-size: 30px 30px;
          height: 150px;
          width: 120px;
          top: 9%;
          right: 12%;
        }

        @media only screen and (max-width: 420px) {
          width: 90px;
          height: 120px;
          top: 6%;
          right: 14%;
        }
      }
      .smalldots {
        z-index: 1;
        background-size: 25px 25px;
        background-image: radial-gradient(#1fa0ef 20%, transparent 20%);
        background-position: 0 0;
        height: 100px;
        width: 250px;
        position: absolute;
        top: 5%;
        left: -11%;
        background-repeat: repeat;

        @media only screen and (max-width: 960px) {
          top: 3%;
          left: -18%;
        }

        @media only screen and (max-width: 860px) {
          background-size: 15px 15px;
          width: 150px;
          height: 60px;
          left: -15%;
        }

        @media only screen and (max-width: 420px) {
          width: 120px;
          left: -17%;
        }
      }
      .img2 {
        z-index: 1;
        max-width: 280px;
        border-radius: 10px;
        position: absolute;
        bottom: 0;
        right: 10%;

        @media only screen and (max-width: 960px) {
          max-width: 210px;
        }

        @media only screen and (max-width: 860px) {
          width: 140px;
        }

        @media only screen and (max-width: 420px) {
          width: 112px;
        }
      }
      .rectangle {
        z-index: 1;
        width: 120px;
        height: 90px;
        border: 3px solid #1fa0ef;
        position: absolute;
        bottom: 10%;
        right: 0;

        @media only screen and (max-width: 960px) {
          width: 80px;
          height: 60px;
        }

        @media only screen and (max-width: 860px) {
          width: 50px;
          height: 45px;
        }

        @media only screen and (max-width: 420px) {
          width: 40px;
          height: 36px;
        }
      }
    }

    .hero2Description {
      font-family: sofia-pro-bold;
      display: inline-block;

      @media only screen and (max-width: 1330px) {
        margin-top: 40px;
      }

      @media only screen and (max-width: 860px) {
        display: flex;
        flex-direction: column;
      }
      h3 {
        font-size: 30px;
        line-height: 37px;
        margin: 0;

        @media only screen and (max-width: 860px) {
          font-size: 16px;
          line-height: 19px;
        }
      }
      h2 {
        font-size: 55px;
        line-height: 66px;
        color: #1fa0ef;
        margin: 15px 0 32px 0;

        @media only screen and (max-width: 860px) {
          font-size: 38px;
          line-height: 47px;
        }
      }
      p {
        font-family: sofia-pro-light;
        font-size: 22px;
        line-height: 35px;
        margin: 0;
        max-width: 567px;

        @media only screen and (max-width: 1330px) {
          max-width: 900px;
        }

        @media only screen and (max-width: 1180px) {
          max-width: 700px;
        }

        @media only screen and (max-width: 960px) {
          font-size: 18px;
          line-height: 32px;
        }

        @media only screen and (max-width: 860px) {
          font-size: 16px;
          line-height: 25px;
        }

        &:first-of-type {
          margin-bottom: 19px;
        }
        &:last-of-type {
          margin-bottom: 45px;
        }
      }
      button {
        background-color: #ffffff;
        border: 2px solid #1fa0ef;
        border-radius: 25px;
        font-family: sofia-pro-bold;
        font-size: 20px;
        line-height: 24px;
        color: #1fa0ef;
        padding: 12px 46px;
        cursor: pointer;

        &:hover {
          color: #ffffff;
          background-color: #1fa0ef;
          border: 2px solid #ffffff;
        }

        @media only screen and (max-width: 860px) {
          margin: auto;
        }
      }
    }
  }
  .hero3 {
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    align-items: center;
    margin: 58px auto;
    padding: 0 30px;

    @media only screen and (max-width: 1330px) {
      justify-content: center;
    }

    @media only screen and (max-width: 860px) {
      margin: 40px auto 0px;
    }
    .hero3Description {
      font-family: sofia-pro-bold;
      display: inline-block;
      h2 {
        font-family: Gill-Sans-Nova-Inline;
        font-weight: normal;
        font-size: 55px;
        line-height: 66px;
        color: #1fa0ef;
        margin: 0 0 45px 0;

        @media only screen and (max-width: 860px) {
          font-size: 28px;
          line-height: 30px;
          margin: 0 0 45px 0;
        }
      }
      h3 {
        font-size: 30px;
        line-height: 37px;
        margin: 0 0 25px 0;
        @media only screen and (max-width: 960px) {
          font-size: 25px;
          line-height: 32px;
        }
        @media only screen and (max-width: 860px) {
          font-size: 16px;
          line-height: 19px;
          margin: 0 0 20px 0;
        }
      }
      p {
        font-family: sofia-pro-light;
        font-size: 22px;
        line-height: 35px;
        margin: 0 0 30px 0;
        max-width: 567px;

        @media only screen and (max-width: 1330px) {
          max-width: 900px;
        }

        @media only screen and (max-width: 1180px) {
          max-width: 700px;
        }

        @media only screen and (max-width: 960px) {
          font-size: 18px;
          line-height: 32px;
        }

        @media only screen and (max-width: 860px) {
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
    .image {
      img {
        @media only screen and (max-width: 1330px) {
          max-width: 600px;
          margin-bottom: 40px;
        }

        @media only screen and (max-width: 1180px) {
          max-width: 550px;
          margin-bottom: 40px;
        }

        @media only screen and (max-width: 960px) {
          max-height: 500px;
          max-width: 430px;
        }

        @media only screen and (max-width: 860px) {
          max-width: 315px;
        }
      }
    }
  }
}
</style>
