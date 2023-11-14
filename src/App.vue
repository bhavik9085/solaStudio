<template>
  <nav>
    <div class="mobileMenu">
      <router-link to="/">
        <img :src="imageLoad(staticResources.mobileLogo)" alt="" />
      </router-link>
      <img
        :src="imageLoad(staticResources.mobileMenu)"
        alt=""
        @click="this.showMenu = true"
      />
      <div class="background" v-if="showMenu"></div>
      <Transition name="menuEnter">
        <div class="menu" v-if="showMenu">
          <div class="greetings">
            <h1>Hello,</h1>
            <h4>We&#39;re happy you&#39;re here.</h4>
            <i
              class="fa fa-times"
              aria-hidden="true"
              @click="this.showMenu = false"
            ></i>
          </div>
          <div class="mainMenu">
            <ul>
              <li>
                <a href="#" @click="this.showMenu = false">Find a Location</a>
              </li>
              <li>
                <Transition name="delay">
                  <div class="sideLine" v-if="this.open.length"></div>
                </Transition>
                <v-list v-model:opened="open" class="pa-0">
                  <v-list-group value="beautyPro">
                    <template v-slot:activator="{ props }">
                      <v-list-item class="pa-0" v-bind="props">
                        <a href="#">Beauty Professionals</a>
                      </v-list-item>
                    </template>
                    <v-list-item
                      @click="(this.showMenu = false), close()"
                      class="my-2"
                    >
                      <a href="#">Sola Pro</a>
                    </v-list-item>
                    <v-list-item
                      @click="(this.showMenu = false), close()"
                      class="my-2"
                    >
                      <a href="#">Sola Genius</a>
                    </v-list-item>
                  </v-list-group>
                </v-list>
              </li>
              <li><a href="#" @click="this.showMenu = false">About</a></li>
              <li><a href="#" @click="this.showMenu = false">Education</a></li>
              <li>
                <a href="#" @click="this.showMenu = false">Franchising</a>
              </li>
              <li><a href="#" @click="this.showMenu = false">Contact Us</a></li>
            </ul>
          </div>
          <div class="buttons">
            <router-link to="/bookService">
              <button @click="this.showMenu = false">Book a Service</button>
            </router-link>
            <button>Leasee a Studio</button>
          </div>
          <div class="links">
            <ul>
              <template
                v-for="(image, index) in this.navSocialMediaBlue"
                :key="index"
              >
                <li>
                  <a href="#" @click="this.showMenu = false"
                    ><img :src="imageLoad(image.img)"
                  /></a>
                </li>
              </template>
            </ul>
          </div>
          <v-btn
            id="countrySelectorMobile"
            color="#e8eaf3"
            class="ma-4"
            variant="flat"
            width="220px"
          >
            <img :src="this.selectedCountry.img" />
            {{ this.selectedCountry.country }}
            <i
              class="fa fa-sort-down"
              :class="{ clicked: this.countryMobileMenuState }"
            ></i>
          </v-btn>
          <v-menu
            v-model="countryMobileMenuState"
            content-class="dropdownContent"
            activator="#countrySelectorMobile"
            close-on-content-click
          >
            <v-list>
              <v-list-item
                v-for="(country, index) in navCountry"
                :key="index"
                :value="index"
              >
                <v-list-item-title @click="this.selectedCountry = country">
                  <img :src="country.img" /><!-- <a href="#"> -->{{
                    country.country
                  }}<!-- </a> -->
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </Transition>
    </div>

    <section class="top">
      <ul class="socialMedia">
        <template v-for="(image, index) in this.navSocialMedia" :key="index">
          <li>
            <a href="#"><img :src="imageLoad(image.img)" /></a>
          </li>
        </template>
      </ul>
      <ul class="navigation">
        <li><a href="#">Franchising</a></li>
        <li><a href="#">Contact us</a></li>
        <li>
          <v-btn
            id="contrySelector"
            color="#e8eaf3"
            class="ma-0 rounded-0"
            variant="flat"
          >
            <img :src="this.selectedCountry.img" />
            {{ this.selectedCountry.country }}
            <i
              class="fa fa-sort-down"
              :class="{ clicked: this.contryMenuState }"
            ></i>
          </v-btn>
          <v-menu
            v-model="contryMenuState"
            content-class="dropdownContent"
            activator="#contrySelector"
          >
            <v-list>
              <v-list-item
                v-for="(country, index) in navCountry"
                :key="index"
                :value="index"
              >
                <v-list-item-title @click="this.selectedCountry = country">
                  <img :src="country.img" /><!-- <a href="#"> -->{{
                    country.country
                  }}<!-- </a> -->
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
      </ul>
    </section>

    <section class="main">
      <router-link to="/" class="nav-link">
        <div class="logo">
          <img :src="imageLoad(staticResources.deskLogo)" alt="" />
        </div>
      </router-link>
      <ul>
        <li><a href="#">Find a Location</a></li>
        <li><a href="#">Beauty Professionals</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Education</a></li>
        <li>
          <router-link to="/bookService">
            <button class="service">Book a Service</button>
          </router-link>
          <!-- <button class="lease">Lease a Studio</button> -->
        </li>
      </ul>
    </section>
  </nav>
  <div class="loaderContainer" v-if="this.loaderState">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <router-view />
  <mainFooter></mainFooter>
</template>

<script>
import mainFooter from "@/components/mainFooter.vue";
import main from "./main";
export default {
  components: {
    mainFooter,
  },
  data() {
    return {
      navSocialMedia: this.$store.state.navSocialMedia,
      navSocialMediaBlue: this.$store.state.navSocialMediaBlue,
      navCountry: this.$store.state.navCountry,
      staticResources: this.$store.state.staticResources,
      selectedCountry: {},
      showCountries: false,
      showMenu: false,
      open: [],
      contryMenuState: false,
      countryMobileMenuState: false,
    };
  },

  methods: {
    close() {
      this.open = [];
    },
  },

  created() {
    var self = this;
    var object = [];
    if (self.listOfServiceProviders.length < 15) {
      object = self.listOfServiceProviders;
    } else {
      for (let i = 0; i < 15; i++) {
        object.push(self.listOfServiceProviders[i]);
      }
    }
    this.$store.dispatch("listOfServiceProvidersToRender", object);
    this.imageLoad = main.imageLoad;
  },

  mounted() {
    this.selectedCountry = this.navCountry[0];
  },

  computed: {
    listOfServiceProviders() {
      return this.$store.state.listOfServiceProviders;
    },
    loaderState() {
      return this.$store.state.loaderState;
    },
  },
};
</script>

<style lang="scss">
#app {
  nav {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    .mobileMenu {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 0 10px;

      img {
        cursor: pointer;
      }

      @media only screen and (min-width: 861px) {
        display: none;
      }

      .background {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: end;
      }

      .menuEnter-enter-active {
        animation: right 0.4s ease;
      }

      .menuEnter-leave-active {
        animation: right 0.4s ease reverse;
      }

      @keyframes right {
        from {
          transform: translateX(260px);
        }
        to {
          transform: translateX(0);
        }
      }

      .menu {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #ffffff;
        font-family: sofia-pro-bold;
        border-radius: 10px 0px 0px 10px;
        box-shadow: 0px 3px 20px #00000029;
        border: 1px solid #1fa0ef;
        width: 260px;
        height: 100vh;
        overflow: auto;

        .v-btn {
          i {
            &.clicked {
              transform: rotate(180deg);
              transition-duration: 0.3s;
            }
          }
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .greetings {
          height: 135px;
          padding-left: 15px;
          padding-top: 40px;
          box-sizing: border-box;
          background-color: #1fa0ef;
          color: #ffffff;
          border-radius: 9px 0px 0px 40px;
          position: relative;

          i {
            position: absolute;
            font-size: 25px;
            top: 10px;
            right: 15px;
            cursor: pointer;
          }

          h1 {
            margin: 0;
            font-size: 45px;
            line-height: 54px;
          }

          h4 {
            font-family: sofia-pro-light;
            font-weight: normal;
            margin: 0;
            font-size: 16px;
            line-height: 19px;
          }
        }

        .mainMenu {
          ul {
            margin: 35px 0 0 0;
            box-sizing: border-box;

            li {
              margin-bottom: 40px;
              padding-left: 30px;

              &:first-of-type {
                margin: 0 0 28px;
              }

              &:nth-of-type(2) {
                position: relative;
                margin: 0 0 28px;

                .delay-enter-active {
                  transition: opacity 1ms;
                }

                .delay-leave-active {
                  transition: opacity 0.6s ease;
                }

                .delay-enter-from,
                .delay-leave-to {
                  opacity: 0;
                }

                .sideLine {
                  position: absolute;
                  left: 0;
                  background-color: #4c5bed;
                  height: 100%;
                  width: 5px;
                  background: transparent
                    linear-gradient(
                      180deg,
                      #4c5bed 0%,
                      #43aae5 50%,
                      #6ae5f0 100%
                    )
                    0% 0% no-repeat padding-box;
                }
              }
              a {
                font-size: 16px;
                line-height: 19px;
                text-decoration: none;
                color: #1fa0ef;
              }
            }
          }
        }

        .buttons {
          display: flex;
          justify-content: center;
          button {
            font-family: sofia-pro-bold;
            font-size: 11px;
            line-height: 13px;
            color: #1fa0ef;
            background-color: #ffffff;
            border: 2px solid #1fa0ef;
            border-radius: 15px;
            padding: 9px 16px;
            margin-right: 9px;

            &:last-of-type {
              margin-right: 0;
            }

            &:hover {
              color: #ffffff;
              background-color: #1fa0ef;
            }
          }
        }

        .links {
          ul {
            margin-top: 20px;
            display: flex;
            justify-content: center;

            li {
              height: 15px;
              width: 15px;
              margin-right: 15px;

              &:last-of-type {
                margin-right: 0;
              }

              img {
                max-height: 100%;
              }
            }
          }
        }

        .country {
          padding: 0 12px;
          color: black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #d1d2d4;
          border-radius: 5px;
          margin: 20px;
          padding: 0 12px;
          box-sizing: border-box;
          height: 40px;

          img {
            width: 25px;
            height: 15px;
            margin-right: 5px;
          }
        }

        #countrySelectorMobile {
          img {
            height: 16px;
            width: 23px;
            margin-right: 5px;
          }
        }
      }
    }

    section.top {
      font-size: 16px;
      background-color: #1fa0ef;
      font-family: sofia-pro-bold;
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 1180px) {
        font-size: 14px;
      }

      @media only screen and (max-width: 960px) {
        font-size: 12px;
      }

      @media only screen and (max-width: 860px) {
        display: none;
      }

      ul {
        list-style-type: none;
        display: flex;
        padding: 0;
        margin: 0;
        font-family: sofia-pro-bold;
      }

      a {
        color: #ffffff;
      }

      ul.socialMedia {
        max-width: 170px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 90px;

        @media only screen and (max-width: 960px) {
          margin-left: 50px;
        }

        li {
          margin-left: 40px;

          &:first-of-type {
            margin-left: 0;
          }

          img {
            width: 13px;
            height: 13px;
          }
        }
      }

      ul.navigation {
        li {
          margin-left: 45px;
          padding: 15px 0;
        }

        li:last-of-type {
          background-color: #e8eaf3;
          min-width: 190px;
          cursor: pointer;
          padding: 0;

          img {
            height: 16px;
            width: 23px;
            margin-right: 5px;
          }

          i {
            margin-left: 5px;
            &.clicked {
              transform: rotate(180deg);
              transition-duration: 0.3s;
            }
          }

          button {
            text-align: center;
            height: 100%;
            width: 100%;
          }
        }
      }

      a {
        text-decoration: none;
      }

      a.router-link-exact-active {
      }
    }

    section.main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ffffff;

      @media only screen and (max-width: 860px) {
        display: none;
      }
      .logo {
        max-width: 130px;
        max-height: 60px;
        margin-left: 100px;
        display: inline-block;

        @media only screen and (max-width: 1180px) {
          margin-left: 35px;
        }

        @media only screen and (max-width: 960px) {
          max-width: 100px;
          max-height: 50px;
        }

        img {
          max-width: 100%;
        }
      }
      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        max-height: 100px;

        li {
          padding: 39px 0;
          margin-left: 45px;

          @media only screen and (max-width: 1180px) {
            margin-left: 25px;
          }

          @media only screen and (max-width: 960px) {
            padding: 25px 0;
          }

          &:last-of-type {
            padding: 31px 0;

            @media only screen and (max-width: 960px) {
              padding: 11px 0;
            }
          }

          &:first-of-type {
            margin-left: 0px;
          }

          button {
            margin-right: 10px;
            padding: 10px 13px;
            border: 2px solid #1fa0ef;
            color: #1fa0ef;
            background-color: #ffffff;
            border-radius: 23px;
            font-family: sofia-pro-bold;
            font-size: 18px;
            line-height: 23px;
            cursor: pointer;

            @media only screen and (max-width: 1180px) {
              font-size: 14px;
              padding: 8px 10px;
            }

            &:hover {
              background-color: #1fa0ef;
              color: #ffffff;
            }
          }

          a {
            font-family: sofia-pro-bold;
            color: #1fa0ef;
            text-decoration: none;
            font-weight: bold;
            font-size: 18px;

            @media only screen and (max-width: 1180px) {
              font-size: 16px;
            }

            @media only screen and (max-width: 960px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .loaderContainer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-gap: 0px;
      width: 100px;
      height: 100px;

      > div {
        position: relative;
        width: 100%;
        height: 100%;
        background: #1fa0ef;
        transform: scale(0);
        transform-origin: center center;
        animation: loader 1s infinite linear;

        &:nth-of-type(7) {
        }

        &:nth-of-type(1),
        &:nth-of-type(5),
        &:nth-of-type(9) {
          animation-delay: 0.2s;
        }

        &:nth-of-type(4),
        &:nth-of-type(8) {
          animation-delay: 0.1s;
        }

        &:nth-of-type(2),
        &:nth-of-type(6) {
          animation-delay: 0.3s;
        }

        &:nth-of-type(3) {
          animation-delay: 0.4s;
        }
      }
    }

    @keyframes loader {
      0% {
        transform: scale(0);
      }
      40% {
        transform: scale(1);
      }
      80% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  }
}

.dropdownContent {
  a {
    font-family: sofia-pro-light;
    text-transform: uppercase;
    text-decoration: none;
    color: #000000;
  }
  img {
    height: 16px;
    width: 23px;
    margin-right: 5px;
  }
}
</style>
