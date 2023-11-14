<template>
  <div class="container">
    <!-- <serviceProviderProfile></serviceProviderProfile> -->
    <heroImg class="bookService" ref="heroImg"></heroImg>
    <h1 class="count" v-if="this.bookServiceSearchState">
      {{ this.listOfServiceProvidersToRender.length }} Salon/s found for your
      Search!
    </h1>
    <div class="bookServiceContent">
      <div class="serviceProviders">
        <v-card
          v-for="(item, index) in this.listOfServiceProvidersToRender"
          :key="index"
          max-width="580px"
          class="overflow-visible"
          variant="outlined"
          color="#1fa0ef"
          @mouseover="
            this.hover
              ? null
              : hoverFeature(
                  item.id,
                  item.location[1],
                  item.location[0],
                  item.name
                )
          "
          @mouseout="leaveHoverFeature(item.id)"
        >
          <v-container class="pa-0">
            <v-row class="ma-0">
              <v-col
                cols="12"
                md="5"
                class="pa-0 px-2 offset"
                :class="{ 'px-8': !this.tabScreen() }"
              >
                <v-row class="ma-0" justify="center">
                  <v-col
                    cols="11"
                    class="pa-0 d-flex flex-column justify-center align-center"
                    align-self="center"
                  >
                    <v-img
                      aspect-ratio="1"
                      height="150"
                      width="150"
                      class="rounded-circle elevation-15 mb-4"
                      :src="item.image"
                      :cover="true"
                    ></v-img>
                  </v-col>
                </v-row>
                <v-row align="center" class="ma-0 mb-4" justify="center">
                  <v-col
                    :cols="this.mobileScreen() ? 2 : 'auto'"
                    md="2"
                    class="pa-0"
                  >
                    <v-icon
                      icon="mdi-map-marker-outline"
                      color="#1fa0ef"
                      size="x-large"
                    ></v-icon>
                  </v-col>
                  <v-col
                    :cols="this.mobileScreen() ? 7 : 'auto'"
                    md="10"
                    class="pa-0"
                  >
                    <div class="mx-1 address">
                      {{ item.address.street }}, {{ item.address.city }},
                      {{ item.address.state }}, {{ item.address.zip }},
                      {{ item.address.country }}.
                    </div>
                  </v-col>
                </v-row>
                <v-row align="center" class="ma-0 mb-4" justify="center">
                  <v-col
                    :cols="this.mobileScreen() ? 2 : 'auto'"
                    md="2"
                    class="pa-0"
                  >
                    <v-icon
                      icon="mdi-phone-outline"
                      color="#1fa0ef"
                      size="x-large"
                    ></v-icon>
                  </v-col>
                  <v-col
                    :cols="this.mobileScreen() ? 7 : 'auto'"
                    md="9"
                    class="pa-0"
                  >
                    <div class="mx-1 mobile">{{ item.contact }}</div>
                  </v-col>
                </v-row>
                <v-row align="center" class="ma-0 my-2" justify="center">
                  <v-col class="pa-0" cols="6" sm="4" md="12">
                    <v-btn
                      color="info"
                      class="rounded-pill py-4"
                      width="100%"
                      height="100%"
                      >Schedule</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
                md="7"
                class="pa-0 py-4"
                :class="{
                  offset: !this.deskScreen(),
                  'px-4': !this.deskScreen(),
                }"
              >
                <h1 class="ma-0 mb-4" :class="{ style: !this.deskScreen() }">
                  {{ item.name }}
                </h1>
                <h3 class="ma-0 mb-4">Featured Services:</h3>
                <v-row class="ma-0 mb-4">
                  <v-chip
                    v-for="(service, index) in item.featured"
                    :key="index"
                    variant="outlined"
                    color="#1fa0ef"
                    class="font-weight-bold ma-1"
                    :size="this.$vuetify.display.xs ? 'small' : 'default'"
                    >{{ service }}</v-chip
                  >
                </v-row>
                <h3 class="ma-0 mb-4">All Services:</h3>
                <v-row class="ma-0 mb-4">
                  <v-chip
                    v-for="(service, index) in item.allService"
                    :key="index"
                    variant="outlined"
                    color="#1fa0ef"
                    class="font-weight-bold ma-1"
                    size="small"
                    >{{ service }}</v-chip
                  >
                </v-row>
                <v-btn
                  color="info"
                  class="rounded-pill text-capitalize"
                  @click="
                    this.newView({
                      lat: item.location[0],
                      long: item.location[1],
                      zoom: 15,
                    }),
                      (this.hoverState = item.id)
                  "
                  v-if="this.hoverState != item.id"
                >
                  <v-icon icon="mdi-directions"></v-icon>
                  &nbsp;Get Detailed Location
                </v-btn>
                <v-btn
                  color="primary"
                  class="rounded-pill text-capitalize"
                  @click="
                    (this.hoverState = null),
                      this.newView({
                        long: item.location[1],
                        lat: item.location[0],
                        zoom: 6,
                      })
                  "
                  v-if="this.hoverState == item.id"
                >
                  <v-icon icon="mdi-arrow-left-circle"></v-icon>
                  &nbsp;Go Back to Full View
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
      <div class="mapContainer">
        <mapComponent ref="mapComponent"></mapComponent>
      </div>
    </div>
  </div>
</template>

<script>
import heroImg from "@/components/heroImg.vue";
import main from "@/main";
import mapComponent from "@/components/mapComponent.vue";
// import serviceProviderProfile from "@/components/serviceProviderProfile.vue";
import { useDisplay } from "vuetify";

export default {
  name: "bookService",
  components: {
    heroImg,
    mapComponent,
    // serviceProviderProfile,
  },
  data() {
    return {
      cardImage: "service-provider.jpg",
      hoverState: null,
    };
  },

  methods: {
    deskScreen() {
      return this.$vuetify.display.mdAndUp;
    },
    tabScreen() {
      return this.$vuetify.display.mdAndDown;
    },
    mobileScreen() {
      if (window.innerWidth < 360) {
        return true;
      }
    },
    hoverFeature(id, long, lat, name) {
      this.$refs.mapComponent.hoverFeature(id, long, lat, name);
    },
    leaveHoverFeature(id) {
      this.$refs.mapComponent.leaveHoverFeature(id);
    },
  },

  created() {
    this.imageLoad = main.imageLoad;
    this.newView = main.newView;
  },

  mounted() {
    this.$store.dispatch("loaderActive", false);
  },

  setup() {
    const { mdAndUp, mdAndDown, xs } = useDisplay();
    return mdAndUp, mdAndDown, xs;
  },

  computed: {
    listOfServiceProviders() {
      return this.$store.state.listOfServiceProviders;
    },

    listOfServiceProvidersToRender() {
      return this.$store.state.listOfServiceProvidersToRender;
    },

    bookServiceSearchState() {
      return this.$store.state.bookServiceSearchState;
    },
  },

  beforeUnmount() {
    this.$store.dispatch("loaderActive", true);
  },
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

  .count {
    margin: 20px 0 20px;
    color: red;
    text-align: center;
    font-family: sofia-pro-bold;
    font-weight: 20px;
  }

  .bookServiceContent {
    display: flex;

    @media only screen and (max-width: 1000px) {
      flex-wrap: wrap-reverse;
    }

    @media only screen and (max-width: 700px) {
      justify-content: center;
    }

    .serviceProviders {
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 1220px;
      margin: 50px 0;
      padding-left: 70px;
      padding-right: 40px;
      overflow-y: scroll;
      position: relative;

      @media only screen and (max-width: 1160px) {
        padding-left: 40px;
      }

      @media only screen and (max-width: 1000px) {
        width: 80%;
        margin: 50px auto;
      }

      @media only screen and (max-width: 700px) {
        padding: 0 30px;
        margin: 50px 0px;
      }

      @media only screen and (max-width: 550px) {
        width: 100%;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: #ffffff;
      }
      &::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 10px;
      }

      .v-card {
        margin: 80px 0;

        @media only screen and (max-width: 1000px) {
          margin: 50px 0;
        }

        .offset {
          translate: 0 -50px !important;
        }

        .address,
        .mobile {
          font-family: sofia-pro-light;
          font-size: 16px;
          color: #1fa0ef;
        }

        h1 {
          font-family: sofia-pro-bold;
          color: #1fa0ef;
          font-size: 30px;
          line-height: 30px;

          &.style {
            text-align: center;
          }
        }

        h3 {
          font-family: sofia-pro-bold;
          font-size: 18px;
          line-height: 18px;
          color: black;
        }

        .tabScreen {
          flex-direction: column;
          align-items: center;
        }
      }
    }

    .mapContainer {
      margin-top: 50px;
      margin-left: 40px;
      width: 45%;
      height: 1220px;
      border: 1px solid #1fa0ef;

      @media only screen and (max-width: 1000px) {
        width: 80%;
        height: 500px;
        margin: 50px auto;
      }

      @media only screen and (max-width: 800px) {
        width: 100%;
        height: 500px;
        margin: 50px 30px;
      }

      @media only screen and (max-width: 450px) {
        height: 300px;
      }
    }
  }
}

.v-btn {
  font-family: sofia-pro-bold;
  letter-spacing: 0;
}
</style>
