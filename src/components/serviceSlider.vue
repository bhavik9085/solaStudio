<template>
  <section class="services">
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren
    </p>
    <div
      class="serviceContainer"
      :class="{ lessthan2: this.servicesToDisplay.length < 3 }"
    >
      <div
        class="individualService"
        v-for="(service, index) in this.servicesToDisplay"
        :key="index"
      >
        <img :src="imageLoad(staticResources.scissorImg)" alt="" />
        <div class="serviceDesc">
          <h3>{{ service.head }}</h3>
          <p>{{ service.desc }}</p>
        </div>
      </div>
      <div class="nextPrevServices">
        <img
          :src="imageLoad(staticResources.nextIcon)"
          class="prevServices"
          @click="this.servicesSelectorClick(this.selectedServicesIndex - 1)"
        />
        <img
          :src="imageLoad(staticResources.nextIcon)"
          class="nextServices"
          @click="this.servicesSelectorClick(this.selectedServicesIndex + 1)"
        />
      </div>
    </div>
    <div class="slideSelector">
      <template v-if="this.windowSize > 660">
        <template
          v-for="index in Math.ceil(this.homeServices.length / 6)"
          :key="index"
        >
          <div
            class="selector"
            :class="{ selected: this.selectedServicesIndex == index }"
            @click="this.servicesSelectorClick(index, $event)"
          ></div>
        </template>
      </template>
      <template v-if="this.windowSize <= 660">
        <template
          v-for="index in Math.ceil(this.homeServices.length / 4)"
          :key="index"
        >
          <div
            class="selector"
            :class="{ selected: this.selectedServicesIndex == index }"
            @click="this.servicesSelectorClick(index, $event)"
          ></div>
        </template>
      </template>
    </div>
  </section>
</template>

<script>
import main from "@/main";
export default {
  name: "serviceSlider",
  data() {
    return {
      staticResources: this.$store.state.staticResources,
      servicesToDisplay: [],
      selectedServicesIndex: 1,
      runSlider: undefined,
      timerFromLastClick: undefined,
      buttonclickedbefore: false,
      timeSinceLastClick: 0,
      windowSize: undefined,
    };
  },

  methods: {
    startSlider() {
      this.runSlider = setInterval(() => {
        this.servicesToDisplaySelector(this.autoServicesSelector());
      }, 3000);
    },

    autoServicesSelector() {
      if (
        this.selectedServicesIndex < Math.ceil(this.homeServices.length / 6)
      ) {
        this.selectedServicesIndex++;
      } else {
        this.selectedServicesIndex = 1;
      }
      return this.selectedServicesIndex;
    },

    servicesToDisplaySelector(index) {
      var from, to;
      this.windowSize = window.innerWidth;
      if (window.innerWidth <= 660) {
        from = index * 4 - 4;
        to = index * 4;
        this.servicesToDisplay = this.homeServices.slice(from, to);
        this.selectedServicesIndex = index;
      } else {
        from = index * 6 - 6;
        to = index * 6;
        this.servicesToDisplay = this.homeServices.slice(from, to);
        this.selectedServicesIndex = index;
      }
    },

    servicesSelectorClick(index) {
      this.servicesToDisplaySelector(index);
      clearInterval(this.runSlider);
      clearInterval(this.timerFromLastClick);
      this.timerFromLastClick = setInterval(() => {
        this.below();
      }, 100);
    },

    below() {
      this.timeSinceLastClick = this.timeSinceLastClick + 1;
      if (this.timeSinceLastClick == 60) {
        clearInterval(this.timerFromLastClick);
        this.startSlider();
        this.timeSinceLastClick = 0;
      }
    },
  },

  created() {
    if (window.innerWidth <= 660) {
      this.servicesToDisplay = this.homeServices.slice(0, 4);
    } else {
      this.servicesToDisplay = this.homeServices.slice(0, 6);
    }

    this.imageLoad = main.imageLoad;
  },

  mounted() {
    this.startSlider();
    const nextServices = document.getElementsByClassName("nextServices");
    const prevServices = document.getElementsByClassName("prevServices");
    nextServices[0].onmouseover = function () {
      nextServices[0].style.opacity = "1";
    };
    prevServices[0].onmouseover = function () {
      prevServices[0].style.opacity = "1";
    };
    nextServices[0].onmouseleave = function () {
      nextServices[0].style.opacity = "0";
    };
    prevServices[0].onmouseleave = function () {
      prevServices[0].style.opacity = "0";
    };
  },

  computed: {
    homeServices() {
      var homeServices = this.$store.state.homeServices;
      return homeServices;
    },
  },
};
</script>

<style lang="scss">
.services {
  max-width: 1440px;
  margin: auto;
  padding: 32px 90px 30px 90px;

  @media only screen and (max-width: 860px) {
    padding: 0px 30px 30px 30px;
  }

  @media only screen and (max-width: 860px) {
    padding: 0px 20px 30px 20px;
  }
  h1 {
    font-family: Gill-Sans-Nova-Inline;
    font-size: 60px;
    line-height: 70px;
    font-weight: normal;
    margin: 0px;
    margin-bottom: 30px;
    color: #1fa0ef;

    @media only screen and (max-width: 860px) {
      font-size: 28px;
      line-height: 30px;
    }
  }
  & > p {
    font-family: sofia-pro-light;
    font-size: 22px;
    line-height: 35px;
    margin: 0;
    max-width: 825px;

    @media only screen and (max-width: 960px) {
      font-size: 18px;
      line-height: 32px;
    }

    @media only screen and (max-width: 860px) {
      font-size: 16px;
      line-height: 25px;
    }
  }
  .serviceContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 414px;
    position: relative;

    @media only screen and (max-width: 1274px) {
      min-height: 621px;
    }

    @media only screen and (max-width: 860px) {
      min-height: 471px;
    }

    &.lessthan2 {
      justify-content: space-around;
    }
    .individualService {
      margin-top: 80px;
      max-width: 365px;
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 960px) {
        margin-top: 60px;
        max-width: 300px;
      }

      @media only screen and (max-width: 660px) {
        margin-top: 40px;
        flex-direction: column;
        text-align: center;
        justify-content: flex-start;
        max-width: 230px;

        &:nth-of-type(odd) > .serviceDesc {
          margin-left: 0px;
          max-width: 210px;
        }
      }

      @media only screen and (max-width: 520px) {
        margin-top: 30px;
        max-width: 170px;

        &:nth-of-type(odd) > .serviceDesc {
          margin-left: 0px;
          max-width: 150px;
        }
      }

      @media only screen and (max-width: 400px) {
        margin-top: 30px;
        max-width: 140px;

        &:nth-of-type(odd) > .serviceDesc {
          margin-left: 0px;
          max-width: 130px;
        }
      }

      img {
        height: 50px;
        width: 40px;

        @media only screen and (max-width: 660px) {
          margin: 0 auto;
          rotate: 270deg;
        }
      }
      .serviceDesc {
        max-width: 300px;
        margin-left: 25px;

        @media only screen and (max-width: 960px) {
          margin-left: 20px;
        }

        @media only screen and (max-width: 400px) {
          margin-left: 10px;
        }
        h3 {
          margin: 0 0 10px 0;
          font-family: sofia-pro-bold;
          font-size: 22px;
          line-height: 27px;

          @media only screen and (max-width: 960px) {
            font-size: 18px;
          }
        }
        p {
          font-family: sofia-pro-light;
          font-size: 18px;
          line-height: 30px;
          margin: 0;
          @media only screen and (max-width: 960px) {
            font-size: 14px;
            line-height: 20px;
          }
          @media only screen and (max-width: 400px) {
            line-height: 18px;
            max-height: 70px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
          }
        }
      }
    }
  }
  .nextPrevServices {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    .prevServices {
      rotate: 180deg;
      cursor: pointer;
      opacity: 0;
    }
    .nextServices {
      cursor: pointer;
      opacity: 0;
    }
  }
}
.slideSelector {
  margin-top: 55px;
  display: flex;
  justify-content: center;

  .selector {
    display: inline-block;
    width: 40px;
    height: 3px;
    margin-top: 0;
    margin-left: 5px;
    background-color: #c4c4c4;
    cursor: pointer;

    &:first-of-type {
      margin-left: 0px;
    }

    &.selected {
      background-color: #1fa0ef;
    }
  }
}
</style>
