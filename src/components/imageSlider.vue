<template>
  <div class="imageSlider">
    <template v-for="(image, index) in this.homeImageSlider" :key="index">
      <div
        :class="'i' + this.classes[index]"
        class="image"
        @click="this.clickMidLeft()"
      >
        <img :src="require(`@/img/${image.url}`)" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "imageSlider",
  data() {
    return {
      classes: [],
    };
  },

  methods: {
    clickMidLeft() {
      var self = this;
      var imageSlider = document.getElementsByClassName("imageSlider");

      imageSlider[0].addEventListener("click", belowfunction);

      function belowfunction(e) {
        if (e.target.className == "i1 image") {
          self.increaseIndex();
          if (window.innerWidth > 500) {
            setTimeout(() => {
              self.slightRight();
            }, 200);
          }
        }

        if (e.target.className == "i3 image") {
          self.decreaseIndex();
          if (window.innerWidth > 500) {
            setTimeout(() => {
              self.slightLeft();
            }, 200);
          }
        }

        if (e.target.className == "i4 image") {
          self.decreaseIndex();
          setTimeout(() => {
            self.decreaseIndex();
          }, 300);
          if (window.innerWidth > 500) {
            setTimeout(() => {
              self.slightLeft();
            }, 500);
          }
        }

        if (e.target.className == "i0 image") {
          self.increaseIndex();
          setTimeout(() => {
            self.increaseIndex();
          }, 300);
          if (window.innerWidth > 500) {
            setTimeout(() => {
              self.slightRight();
            }, 500);
          }
        }
      }

      setTimeout(() => {
        imageSlider[0].removeEventListener("click", belowfunction);
      }, 10);
    },

    increaseIndex() {
      var classesLength = this.classes.length;
      var classes = this.classes;

      for (let a = 0; a < classesLength; a++) {
        if (classes[a] == classesLength - 1) {
          classes[a] = 0;
        } else {
          classes[a]++;
        }
      }
    },

    decreaseIndex() {
      var classesLength = this.classes.length;
      var classes = this.classes;

      for (let a = 0; a < classesLength; a++) {
        if (classes[a] == 0) {
          classes[a] = classesLength - 1;
        } else {
          classes[a]--;
        }
      }
    },

    slightLeft() {
      var i0 = document.getElementsByClassName("i0");
      i0[0].style["animation-name"] = "slightLefti0";
      i0[0].style["animation-duration"] = "0.4s";

      var i1 = document.getElementsByClassName("i1");
      i1[0].style["animation-name"] = "slightLefti1";
      i1[0].style["animation-duration"] = "0.4s";

      var i2 = document.getElementsByClassName("i2");
      i2[0].style["animation-name"] = "slightLefti2";
      i2[0].style["animation-duration"] = "0.4s";

      var i3 = document.getElementsByClassName("i3");
      i3[0].style["animation-name"] = "slightLefti3";
      i3[0].style["animation-duration"] = "0.4s";

      var i4 = document.getElementsByClassName("i4");
      i4[0].style["animation-name"] = "slightLefti4";
      i4[0].style["animation-duration"] = "0.4s";
    },

    slightRight() {
      var i0 = document.getElementsByClassName("i0");
      i0[0].style["animation-name"] = "slightRighti0";
      i0[0].style["animation-duration"] = "0.4s";

      var i1 = document.getElementsByClassName("i1");
      i1[0].style["animation-name"] = "slightRighti1";
      i1[0].style["animation-duration"] = "0.4s";

      var i2 = document.getElementsByClassName("i2");
      i2[0].style["animation-name"] = "slightRighti2";
      i2[0].style["animation-duration"] = "0.4s";

      var i3 = document.getElementsByClassName("i3");
      i3[0].style["animation-name"] = "slightRighti3";
      i3[0].style["animation-duration"] = "0.4s";

      var i4 = document.getElementsByClassName("i4");
      i4[0].style["animation-name"] = "slightRighti4";
      i4[0].style["animation-duration"] = "0.4s";
    },
  },

  created() {},

  mounted() {
    for (let a = 0; a < this.homeImageSlider.length; a++) {
      this.classes.push(a);
    }
  },

  computed: {
    homeImageSlider() {
      return this.$store.state.homeImageSlider;
    },
  },
};
</script>

<style lang="scss">
.imageSlider {
  min-height: 600px;
  position: relative;

  @media only screen and (max-width: 1180px) {
    min-height: 500px;
  }

  @media only screen and (max-width: 960px) {
    min-height: 400px;
  }

  @media only screen and (max-width: 860px) {
    min-height: 350px;
  }

  @media only screen and (max-width: 610px) {
    min-height: 300px;
  }
  .image {
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition-duration: 0.3s;
    box-shadow: 0px 5px 10px #000000;
    border: 2px solid #05bed5;
    border-radius: 15px;
    overflow: hidden;

    @media only screen and (max-width: 1180px) {
      width: 400px;
      height: 400px;
    }

    @media only screen and (max-width: 960px) {
      width: 300px;
      height: 300px;
    }

    @media only screen and (max-width: 860px) {
      width: 250px;
      height: 250px;
    }

    @media only screen and (max-width: 610px) {
      width: 200px;
      height: 200px;
    }

    img {
      height: 100%;
      width: 100%;
    }

    &.i0 {
      transform: translate(-140%, -50%) scale(0.5);
      opacity: 1;
      z-index: 1;
      &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.75);
        height: 100%;
        width: 100%;
        position: absolute;
      }
      @media only screen and (max-width: 500px) {
        transform: translate(-110%, -50%) scale(0.5);
      }
      @media only screen and (max-width: 380px) {
        transform: translate(-100%, -50%) scale(0.5);
      }
    }

    &.i1 {
      transform: translate(-100%, -50%) scale(0.75);
      z-index: 2;
      &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.6);
        height: 100%;
        width: 100%;
        position: absolute;
      }

      @media only screen and (max-width: 500px) {
        transform: translate(-80%, -50%) scale(0.75);
      }
      @media only screen and (max-width: 380px) {
        transform: translate(-75%, -50%) scale(0.75);
      }
    }

    &.i2 {
      z-index: 3;
    }

    &.i3 {
      transform: translate(0%, -50%) scale(0.75) rotateY(180deg);
      z-index: 2;
      &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.6);
        height: 100%;
        width: 100%;
        position: absolute;
      }
      @media only screen and (max-width: 500px) {
        transform: translate(-20%, -50%) scale(0.75) rotateY(180deg);
      }
      @media only screen and (max-width: 380px) {
        transform: translate(-25%, -50%) scale(0.75) rotateY(180deg);
      }
    }

    &.i4 {
      transform: translate(40%, -50%) scale(0.5) rotateY(180deg);
      z-index: 1;
      &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.75);
        height: 100%;
        width: 100%;
        position: absolute;
      }
      @media only screen and (max-width: 500px) {
        transform: translate(10%, -50%) scale(0.5) rotateY(180deg);
      }
      @media only screen and (max-width: 380px) {
        transform: translate(0%, -50%) scale(0.5) rotateY(180deg);
      }
    }
  }
}

@keyframes slightLefti0 {
  0% {
    transform: translate(-140%, -50%) scale(0.5);
  }
  25% {
    transform: translate(-142%, -50%) scale(0.49);
  }
  50% {
    transform: translate(-144%, -50%) scale(0.48);
  }
  75% {
    transform: translate(-141%, -50%) scale(0.49);
  }
  100% {
    transform: translate(-140%, -50%) scale(0.5);
  }
}

@keyframes slightLefti1 {
  0% {
    transform: translate(-100%, -50%) scale(0.75);
  }
  25% {
    transform: translate(-102%, -50%) scale(0.74);
  }
  50% {
    transform: translate(-104%, -50%) scale(0.73);
  }
  75% {
    transform: translate(-102%, -50%) scale(0.74);
  }
  100% {
    transform: translate(-100%, -50%) scale(0.75);
  }
}

@keyframes slightLefti2 {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-52%, -50%) scale(1.01);
  }
  50% {
    transform: translate(-54%, -50%) scale(1.02);
  }
  75% {
    transform: translate(-52%, -50%) scale(1.01);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes slightLefti3 {
  0% {
    transform: translate(0%, -50%) scale(0.75) rotateY(180deg);
  }
  25% {
    transform: translate(-2%, -50%) scale(0.76) rotateY(180deg);
  }
  50% {
    transform: translate(-4%, -50%) scale(0.77) rotateY(180deg);
  }
  75% {
    transform: translate(-2%, -50%) scale(0.76) rotateY(180deg);
  }
  100% {
    transform: translate(0%, -50%) scale(0.75) rotateY(180deg);
  }
}

@keyframes slightLefti4 {
  0% {
    transform: translate(40%, -50%) scale(0.5) rotateY(180deg);
  }
  25% {
    transform: translate(38%, -50%) scale(0.51) rotateY(180deg);
  }
  50% {
    transform: translate(36%, -50%) scale(0.52) rotateY(180deg);
  }
  75% {
    transform: translate(38%, -50%) scale(0.51) rotateY(180deg);
  }
  100% {
    transform: translate(40%, -50%) scale(0.5) rotateY(180deg);
  }
}

@keyframes slightRighti0 {
  0% {
    transform: translate(-140%, -50%) scale(0.5);
  }
  25% {
    transform: translate(-138%, -50%) scale(0.51);
  }
  50% {
    transform: translate(-136%, -50%) scale(0.52);
  }
  75% {
    transform: translate(-138%, -50%) scale(0.51);
  }
  100% {
    transform: translate(-140%, -50%) scale(0.5);
  }
}

@keyframes slightRighti1 {
  0% {
    transform: translate(-100%, -50%) scale(0.75);
  }
  25% {
    transform: translate(-98%, -50%) scale(0.76);
  }
  50% {
    transform: translate(-96%, -50%) scale(0.77);
  }
  75% {
    transform: translate(-98%, -50%) scale(0.76);
  }
  100% {
    transform: translate(-100%, -50%) scale(0.75);
  }
}

@keyframes slightRighti2 {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-48%, -50%) scale(1.01);
  }
  50% {
    transform: translate(-46%, -50%) scale(1.02);
  }
  75% {
    transform: translate(-48%, -50%) scale(1.01);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes slightRighti3 {
  0% {
    transform: translate(0%, -50%) scale(0.75) rotateY(180deg);
  }
  25% {
    transform: translate(2%, -50%) scale(0.74) rotateY(180deg);
  }
  50% {
    transform: translate(4%, -50%) scale(0.73) rotateY(180deg);
  }
  75% {
    transform: translate(2%, -50%) scale(0.74) rotateY(180deg);
  }
  100% {
    transform: translate(0%, -50%) scale(0.75) rotateY(180deg);
  }
}

@keyframes slightRighti4 {
  0% {
    transform: translate(40%, -50%) scale(0.5) rotateY(180deg);
  }
  25% {
    transform: translate(42%, -50%) scale(0.49) rotateY(180deg);
  }
  50% {
    transform: translate(44%, -50%) scale(0.48) rotateY(180deg);
  }
  75% {
    transform: translate(42%, -50%) scale(0.49) rotateY(180deg);
  }
  100% {
    transform: translate(40%, -50%) scale(0.5) rotateY(180deg);
  }
}
</style>
