<template>
  <div class="container">
    <section class="heroImg">
      <div class="linearGradient"></div>
      <div class="content">
        <div
          class="heroContent"
          v-if="!this.showBookService && !this.showLeaseStudio"
        >
          <div>
            <h1>HERE TO HELP YOU LOOK YOUR <span>BEST.</span></h1>
            <p>
              Our diverse community of professionals are ready to make you look
              your best and feel good doing it.
            </p>
          </div>
        </div>
        <div class="bookServiceHeroContent" v-if="this.showBookService">
          <div class="back">
            <i
              class="fa fa-arrow-up"
              aria-hidden="true"
              @click="(this.showBookService = false), setBackgroundImage()"
            ></i
            ><a
              href="#"
              @click="(this.showBookService = false), setBackgroundImage()"
              >Back</a
            >
          </div>
          <h4>For customers</h4>
          <h1>FIND YOUR NEXT <span>Beauty pro.</span></h1>
          <p>
            20,000+ beauty professionals offering a wider variety of services to
            fit your needs
          </p>
          <v-container class="pa-0 my-2 px-8">
            <v-row class="ma-0 pa-0" justify="space-between">
              <v-col cols="12" sm="12" md="12" lg="5" class="ma-0 pa-0">
                <v-combobox
                  label="Find Service"
                  v-model="this.slectedItems"
                  :items="['Weaves3', 'Eyebrows1', 'Haircut2']"
                  variant="solo"
                  focused
                  placeholder="Service1,Service2"
                  theme="light"
                  class="my-2"
                  hide-details
                >
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-content-cut" id="icon" />
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="12" md="12" lg="3" class="ma-0 pa-0">
                <v-combobox
                  label="City or Zip"
                  :items="['Overland Park', '75204', 'Taos']"
                  v-model="this.city"
                  variant="solo"
                  focused
                  placeholder="City or Zip"
                  theme="light"
                  class="my-2"
                  hide-details
                >
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-map-marker" />
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="12" md="12" lg="3" class="ma-0 pa-0">
                <v-combobox
                  label="Radius"
                  v-model="this.radius"
                  :items="['20 miles', '40 miles', '60 miles']"
                  variant="solo"
                  focused
                  placeholder="20 miles"
                  theme="light"
                  class="my-2 pa-0"
                  hide-details
                >
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-target" />
                  </template>
                </v-combobox>
              </v-col>
            </v-row>
          </v-container>
          <div class="button">
            <v-row justify="center">
              <v-col cols="6" sm="6" md="6" lg="4">
                <v-btn
                  class="my-2 pa-2 rounded-pill type1 text-uppercase text-subtitle-1 font-weight-bold"
                  height="100%"
                  width="100%"
                  color="info"
                  @click="this.redirectToBookService()"
                >
                  BOOK A SERVICE
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>

        <div class="leaseStudioContent" v-if="this.showLeaseStudio">
          <div class="back">
            <i
              class="fa fa-arrow-up"
              aria-hidden="true"
              @click="(this.showLeaseStudio = false), setBackgroundImage()"
            ></i
            ><a
              href="#"
              @click="(this.showLeaseStudio = false), setBackgroundImage()"
              >Back</a
            >
          </div>
          <h4>For Beauty Professionals</h4>
          <h1>BE YOUR OWN <span>BOSS.</span></h1>
          <v-container class="pa-0 my-2 px-4">
            <v-row class="ma-0 pa-0" justify="space-between">
              <v-col cols="12" sm="12" md="12" lg="5" class="ma-0 pa-0">
                <v-text-field
                  hide-details
                  variant="solo"
                  focused
                  placeholder="Type Here"
                  theme="light"
                  type="text"
                  class="my-2"
                >
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-account-outline" id="icon" />
                  </template>
                  <template v-slot:label>Your Name</template>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12" lg="3" class="ma-0 pa-0">
                <v-combobox
                  label="Find Location"
                  :items="['Ahmedabad', 'Jamnagar', 'Rajkot']"
                  variant="solo"
                  focused
                  placeholder="City or Zip"
                  theme="light"
                  class="my-2"
                  hide-details
                >
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-map-marker" />
                  </template>
                </v-combobox>
              </v-col>
              <v-col cols="12" sm="12" md="12" lg="3" class="ma-0 pa-0">
                <v-text-field
                  hide-details
                  variant="solo"
                  focused
                  theme="light"
                  type="date"
                  class="my-2"
                >
                  <template v-slot:prepend-inner>
                    <v-icon icon="mdi-calendar-blank" />
                  </template>
                  <template v-slot:label>Move Date</template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <div class="button">
            <v-row justify="center">
              <v-col cols="6" sm="6" md="6" lg="4">
                <v-btn
                  class="my-2 pa-2 rounded-pill type2 text-uppercase text-subtitle-1 font-weight-bold"
                  height="100%"
                  width="100%"
                  @click="this.filterList()"
                >
                  Lease a Studio
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </div>
        <div
          class="heroButton"
          v-if="!this.showLeaseStudio && !this.showBookService"
        >
          <button
            @click="(this.showBookService = true), setBackgroundImage()"
            class="my-1"
          >
            Book a Service</button
          ><button
            @click="(this.showLeaseStudio = true), setBackgroundImage()"
            class="my-1"
          >
            Lease a Studio
          </button>
        </div>
        <div class="bookServiceContent">
          <h4>In Your Area</h4>
          <h1>Find Your Next <span>Beauty Pro.</span></h1>
        </div>
      </div>
    </section>
    <div class="bookServiceFields">
      <div class="individualField">
        <v-text-field
          label="Select Service"
          id="activator"
          variant="solo"
          placeholder="Service1, Service2"
          focused
          ref="vTextField"
          theme="light"
          class="my-2 pa-0"
          hide-details
          :value="this.slectedItems"
        >
          <template v-slot:prepend-inner>
            <v-icon icon="mdi-content-cut" />
          </template>
        </v-text-field>
        <v-menu
          v-model="selectServiceMenu"
          activator="#activator"
          :close-on-content-click="false"
          content-class="listOfServices"
          v-click-outside="this.clickOutside()"
        >
          <div class="menuDropdown">
            <div class="listOfServices pa-0">
              <div class="listHeaders py-1">
                <ul>
                  <template
                    v-for="(service, index) in this.listOfServices"
                    :key="index"
                  >
                    <v-btn
                      class="rounded-0"
                      variant="text"
                      @click="selectNewService(service)"
                      :class="{
                        selected: this.selectedService.header == service.header,
                      }"
                      >{{ service.header }}</v-btn
                    >
                  </template>
                </ul>
              </div>
              <div class="listItems py-1">
                <v-checkbox
                  :true-icon="'mdi-record-circle'"
                  :false-icon="'mdi-radiobox-blank'"
                  v-for="(item, index) in this.selectedService.items"
                  :key="index"
                  :label="item"
                  :value="item"
                  v-model="tempArray"
                  hide-details=""
                  color="#1fa0ef"
                ></v-checkbox>
              </div>
            </div>
            <div class="button">
              <v-btn
                variant="text"
                class="px-10 my-4 rounded-pill"
                @click="this.fairSelection(), (selectServiceMenu = false)"
                >Apply</v-btn
              >
            </div>
          </div>
        </v-menu>
      </div>
      <div class="individualField">
        <v-combobox
          label="City or Zip"
          v-model="this.city"
          :items="['Overland Park', '75204', 'Taos']"
          variant="solo"
          focused
          placeholder="City or Zip"
          theme="light"
          class="my-2 pa-0"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon icon="mdi-map-marker" />
          </template>
        </v-combobox>
      </div>
      <div class="individualField">
        <v-combobox
          label="State (Optional)"
          v-model="this.state"
          :items="['Kansas', 'Texas', 'New Mexico']"
          variant="solo"
          focused
          placeholder="State"
          theme="light"
          class="my-2 pa-0"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon icon="mdi-map-marker" />
          </template>
        </v-combobox>
      </div>
      <div class="individualField">
        <v-combobox
          label="Radius"
          v-model="this.radius"
          :items="['20 miles', '40 miles', '60 miles']"
          variant="solo"
          focused
          placeholder="20 miles"
          theme="light"
          class="my-2 pa-0"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon icon="mdi-target" />
          </template>
        </v-combobox>
      </div>
      <div class="individualField">
        <v-btn class="my-2 rounded-pill" @click="this.filterList()"
          >Search</v-btn
        >
      </div>
    </div>
  </div>
  <!--  <router-view /> -->
</template>

<script>
import main from "@/main";
import axios from "axios";
export default {
  name: "heroImg",
  data() {
    return {
      staticResources: this.$store.state.staticResources,
      showBookService: false,
      showLeaseStudio: false,
      selectServiceMenu: false,
      listOfServices: this.$store.state.listOfServices,
      selectedService: [],
      tempArray: [],
      slectedItems: [],
      state: [],
      city: [],
      radius: [],
    };
  },
  methods: {
    setBackgroundImage() {
      let img;
      var heroImg = document.getElementsByClassName("heroImg");
      var bookService = document.getElementsByClassName("bookService");
      if (this.showBookService) {
        img = this.staticResources.heroImg2;
      } else if (this.showLeaseStudio) {
        img = this.staticResources.heroImg3;
      } else {
        img = this.staticResources.heroImg;
      }
      if (bookService[0]) {
        img = this.staticResources.heroImgBookService;
      }
      heroImg[0].style["background-image"] = "url(" + this.imageLoad(img) + ")";
    },

    fairSelection() {
      this.slectedItems = this.tempArray;
    },

    clickOutside() {
      this.tempArray = this.slectedItems;
    },

    selectNewService(service) {
      this.selectedService = service;
    },

    async redirectToBookService() {
      if (this.slectedItems.length && this.city.length && this.radius.length) {
        this.$router.push("/bookService");
      }
      this.filterList();
    },

    async filterList() {
      var self = this;

      if (self.slectedItems.length && self.city.length && self.radius.length) {
        var loader = setInterval(function () {
          self.$store.dispatch("loaderActive", true);
        }, 200);
        let type = typeof this.slectedItems;
        let selectedItems;
        if (type == "string") {
          selectedItems = this.slectedItems.split(",");
        } else {
          selectedItems = this.slectedItems;
        }
        var tempArr = [];
        var tempArr2 = [];
        var dataToRender = [];
        var zipToSearchFrom = await self.zipToSearchFrom();

        for (let i = 0; i < self.listOfServiceProviders.length; i++) {
          for (
            let a = 0;
            a < self.listOfServiceProviders[i].allService.length;
            a++
          ) {
            for (let b = 0; b < selectedItems.length; b++) {
              if (
                selectedItems[b] == self.listOfServiceProviders[i].allService[a]
              ) {
                tempArr.push(self.listOfServiceProviders[i]);
              }
            }
          }
        }

        for (let i = 0; i < tempArr.length; i++) {
          for (let a = 0; a < zipToSearchFrom.length; a++) {
            if (zipToSearchFrom[a] == tempArr[i].address.zip) {
              tempArr2.push(tempArr[i]);
            }
          }
        }

        if (tempArr2.length) {
          dataToRender.push(tempArr2[0]);
        }

        for (let i = 0; i < tempArr2.length; i++) {
          for (let a = 0; a < dataToRender.length; a++) {
            if (tempArr2[i].id == dataToRender[a].id) {
              //do Nothing
            } else {
              dataToRender.push(tempArr[i]);
            }
          }
        }

        self.slectedItems = [];
        self.state = [];
        self.city = [];
        self.radius = [];

        clearInterval(loader);

        if (dataToRender.length) {
          self.$store.dispatch("listOfServiceProvidersToRender", dataToRender);
          self.newView({
            long: dataToRender[0].location[1],
            lat: dataToRender[0].location[0],
            zoom: 8,
          });
          this.$store.dispatch("updateBookServiceSearchSate", true);
          this.$store.dispatch("loaderActive", false);
          return true;
        } else {
          var object = [];
          for (let i = 0; i < 20; i++) {
            object.push(self.listOfServiceProviders[i]);
          }
          this.$store.dispatch("listOfServiceProvidersToRender", object);
          this.$store.dispatch("updateBookServiceSearchSate", false);
          self.newView({
            long: -98.0,
            lat: 38.5,
            zoom: 6,
          });
          alert(
            "We're Sorry!! We are currently not offering the service in the area you are looking for."
          );
          this.$store.dispatch("loaderActive", false);
          return false;
        }
      } else {
        alert(
          "Please fill-in all three fields (Service, City And Radius) for better search results!!"
        );
      }
    },

    async zipToSearchFrom() {
      let self = this;
      var radius = this.radius.replace(/\D/g, "");
      var city = this.city.replace(/\D/g, "");

      if (city.length == 5) {
        let zipToSearch = await self.secondAPI(city, radius);
        return zipToSearch;
      } else {
        let zip = await self.firstAPI();
        let tempArr = [];
        let zipToSearch = [];
        for (let i = 0; i < zip.length; i++) {
          let arr = await self.secondAPI(zip[i], radius);
          tempArr.push(arr);
        }
        console.log("tempArr:", tempArr);

        for (let i = 0; i < tempArr.length; i++) {
          for (let a = 0; a < tempArr[i].length; a++) {
            zipToSearch.push(tempArr[i][a]);
          }
        }

        console.log("zipToSearch:", zipToSearch);

        return zipToSearch;
      }
    },

    async firstAPI() {
      let zip = await axios.get(
        "https://app.zipcodebase.com/api/v1/code/city?apikey=7de9cf60-af81-11ed-a396-25ab29708241&city=" +
          this.city +
          "&state_name=" +
          this.state +
          "&country=us"
      );
      return zip.data.results;
    },

    // async secondAPI(zip, radius) {
    //   const options = {
    //     method: "GET",
    //     url: "https://usa-zip-codes-inside-radius.p.rapidapi.com/",
    //     params: { zip: zip, radius: radius },
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "0479346f25msh734fcb98ab80603p116839jsnd64008c46a36",
    //       "X-RapidAPI-Host": "usa-zip-codes-inside-radius.p.rapidapi.com",
    //     },
    //   };

    //   let zipToSearch = await axios.request(options);

    //   return zipToSearch.data.output;
    // },

    async secondAPI(code, radius) {
      let zip = await axios.get(
        "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=" +
          code +
          "&minimumradius=0&maximumradius=" +
          radius +
          "&country=US&key=WL9KH6XISXQ72OC48PT1"
      );

      let data = zip.data.DataList;
      let tempArr = [];
      if (data.length) {
        for (let i = 0; i < data.length; i++) {
          tempArr.push(data[i].Code);
        }
      }

      return tempArr;
    },
  },

  created() {
    this.imageLoad = main.imageLoad;
    this.newView = main.newView;
  },

  mounted() {
    this.setBackgroundImage();
    this.selectedService = this.listOfServices[0];
  },

  computed: {
    listOfServiceProviders() {
      return this.$store.state.listOfServiceProviders;
    },

    listOfServiceProvidersToRender() {
      return this.$store.state.listOfServiceProvidersToRender;
    },
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  .heroImg {
    position: relative;
    height: 650px;
    border-radius: 0px 0px 40px 40px;
    overflow: hidden;
    background-position: 30% 30%;
    background-repeat: no-repeat;
    background-size: cover;

    .linearGradient {
      background: transparent
        linear-gradient(#1fa0ef1c 0%, #1fa0ef 56%, #3039419a 100%) 0% 0%
        no-repeat padding-box;
      mix-blend-mode: multiply;
      width: 100%;
      height: 100%;
    }

    .content {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      min-width: 700px;

      @media only screen and (max-width: 760px) {
        min-width: 500px;
      }

      @media only screen and (max-width: 560px) {
        min-width: 350px;
      }

      @media only screen and (max-width: 390px) {
        min-width: 300px;
      }

      h1 {
        font-family: sofia-pro-bold;
        font-size: 55px;
        line-height: 60px;
        text-transform: uppercase;
        margin: 0;

        @media only screen and (max-width: 1180px) {
          font-size: 50px;
        }

        @media only screen and (max-width: 860px) {
          font-size: 35px;
          line-height: 35px;
          margin-bottom: 15px;
        }

        span {
          font-family: Gill-Sans-Nova-Inline;
          font-weight: normal;
          text-decoration: underline;
        }
      }
      p {
        font-family: sofia-pro-light;
        font-size: 22px;
        line-height: 35px;
        padding: 0 20px;
        margin: 0;
        font-weight: normal;

        @media only screen and (max-width: 1180px) {
          font-size: 19px;
        }

        @media only screen and (max-width: 860px) {
          font-size: 16px;
          line-height: 24px;
        }
      }

      h4 {
        text-align: left;
        text-transform: uppercase;
        font-family: sofia-pro-light;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        padding: 0 20px;

        @media only screen and (max-width: 1180px) {
          font-size: 18px;
        }

        @media only screen and (max-width: 860px) {
          font-size: 14px;
          line-height: 24px;
        }
      }

      .heroContent {
        max-width: 650px;
      }

      .bookServiceHeroContent {
        #icon {
          rotate: 58deg;
        }
      }

      .bookServiceHeroContent,
      .leaseStudioContent {
        .back {
          text-align: right;

          a {
            font-family: sofia-pro-bold;
            font-size: 16px;
            line-height: 25px;
            color: #ffffff;
          }

          i {
            transform: rotate(-45deg);
            margin-right: 5px;
            font-size: 20px;
          }
        }

        h1 {
          padding: 0 20px;
          max-width: 100%;
          text-align: left;
        }

        p {
          font-weight: 900;
          max-width: 600px;
          margin: auto;
        }
      }

      .heroButton {
        margin-top: 20px;

        button {
          background-color: #ffffff;
          border: 2px solid #1fa0ef;
          border-radius: 25px;
          font-family: sofia-pro-bold;
          font-size: 20px;
          line-height: 24px;
          color: #1fa0ef;
          padding: 15px 31px;
          cursor: pointer;
          text-transform: uppercase;

          @media only screen and (max-width: 1180px) {
            font-size: 18px;
          }

          @media only screen and (max-width: 860px) {
            font-size: 16px;
            line-height: 19px;
            padding: 12px 18px;
          }

          &:first-of-type {
            margin-right: 15px;

            @media only screen and (max-width: 420px) {
              margin-right: 5px;
            }
          }

          @media only screen and (max-width: 420px) {
            padding: 10px 10px;
          }

          &:hover {
            color: #ffffff;
            background-color: #1fa0ef;
            border: 2px solid #ffffff;
          }
        }
      }

      .bookServiceContent {
        display: none;
      }
    }
  }
  .bookServiceFields {
    display: none;
  }
  &.bookService {
    .bookServiceFields {
      display: block;
    }
    .heroImg {
      height: 400px;
      background-position-y: 50%;

      .content {
        text-align: left;
        left: 80px;
        top: 30%;
        transform: translate(0, 0);

        @media only screen and (max-width: 760px) {
          left: 60px;
        }

        @media only screen and (max-width: 560px) {
          left: 30px;
        }

        h1 {
          font-size: 35px;
          line-height: 42px;
        }

        h4 {
          font-size: 20px;
          line-height: 24px;
          padding: 0;
        }

        .heroContent,
        .bookServiceHeroContent,
        .leaseStudioContent,
        .heroButton {
          display: none;
        }

        .bookServiceContent {
          display: block;
        }
      }
    }

    .bookServiceFields {
      position: absolute;
      top: 50%;
      left: 80px;
      display: flex;
      justify-content: space-between;
      width: 850px;

      @media only screen and (max-width: 1000px) {
        position: static;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin: 50px auto 0;
        /* width: 650px; */
      }

      @media only screen and (max-width: 850px) {
        width: 650px;
      }

      @media only screen and (max-width: 650px) {
        display: block;
        width: 80%;
      }

      .individualField {
        width: 18%;

        @media only screen and (max-width: 1000px) {
          width: 35%;
        }

        @media only screen and (max-width: 650px) {
          width: 100%;
        }

        .v-btn {
          background-color: #1fa0ef;
          border: 2px solid #ffffff;
          color: #ffffff;
          width: 100%;
          height: 58px;
          font-family: sofia-pro-bold;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0px;
          text-transform: capitalize;
        }

        &:first-of-type {
          width: 24%;

          @media only screen and (max-width: 1000px) {
            width: 35%;
          }

          @media only screen and (max-width: 650px) {
            width: 100%;
          }
        }

        &:last-of-type {
          @media only screen and (max-width: 650px) {
            margin: 0 auto;
            width: 50%;
          }
        }
      }
    }
  }
}

.v-menu {
  .menuDropdown {
    .listOfServices {
      display: flex;

      .listHeaders {
        width: 150px;
        background-color: #ffffff;
        border-top: 1px solid #1fa0ef;
        border-left: 1px solid #1fa0ef;

        .v-btn {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          font-family: sofia-pro-light;
          font-size: 18px;
          line-height: 35px;
          letter-spacing: 0px;
          text-transform: capitalize;

          &.selected {
            position: relative;
            font-family: sofia-pro-bold;
            color: #1fa0ef;
            &::before {
              content: "";
              background: transparent
                linear-gradient(180deg, #4c5bed 0%, #43aae5 50%, #6ae5f0 100%)
                0% 0% no-repeat padding-box;
              height: 100%;
              width: 5px;
              position: absolute;
              left: 0;
            }
          }
        }
      }

      .listItems {
        width: 160px;
        background-color: #ffffff;
        border-top: 1px solid #1fa0ef;
        border-right: 1px solid #1fa0ef;

        .v-label {
          color: #000000;
          font-family: sofia-pro-light;
          font-size: 16px;
          line-height: 35px;
          letter-spacing: 0px;
          text-transform: capitalize;
        }

        .v-input--density-default {
          --v-input-control-height: 0;
          --v-input-padding-top: 0;
        }
      }
    }

    .button {
      border-left: 1px solid #1fa0ef;
      border-right: 1px solid #1fa0ef;
      border-bottom: 1px solid #1fa0ef;
      width: 310px;
      background-color: #ffffff;
      display: flex;
      justify-content: center;

      .v-btn {
        border: 2px solid #1fa0ef;
        color: #1fa0ef;
        font-family: sofia-pro-bold;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0px;

        &:hover {
          color: #ffffff;
          background-color: #1fa0ef;
        }
      }
    }
  }
}

/* ***********************Input bookServiceFields********************** */

.v-combobox__selection {
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}

.v-field .v-label {
  visibility: hidden !important;
}
.v-input .v-label.v-field-label--floating {
  visibility: visible !important;
}
.v-text-field input {
  opacity: 1 !important;
}

.v-input .v-field--appended {
  -webkit-padding-end: 0px;
  padding-inline-end: 0px;
}

.v-input .v-field--prepended {
  -webkit-padding-end: 0px;
  padding-inline-end: 0px;
}

.v-input .v-field.v-field--prepended {
  --v-field-padding-start: 4px;
}

.v-input .v-field--prepended {
  -webkit-padding-start: 4px;
  padding-inline-start: 4px;
}

.v-input .v-field__input {
  -webkit-padding-end: 5px;
  padding-inline-end: 5px;
  max-height: 56px;
  overflow: hidden;
}

.v-btn {
  font-family: sofia-pro-bold;
}

.v-btn.type1 {
  border: 2px solid white;
}

.v-btn.type2 {
  border: 2px solid #1fa0ef;
  color: #1fa0ef;
}
</style>
