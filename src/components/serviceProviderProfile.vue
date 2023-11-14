<template>
  <div class="container">
    <div
      class="cover"
      :style="{
        backgroundImage:
          'url(' +
          this.imageLoad(this.serviceProviderProfile[0].coverImg) +
          ')',
      }"
    ></div>
    <section class="content">
      <aside class="my-8">
        <v-img
          :cover="true"
          :src="this.serviceProviderProfile[0].image"
          width="260px"
          height="260px"
          class="rounded-pill elevation-16"
        ></v-img>
        <ul>
          <li class="mb-9">
            <h1 class="mb-4">Contact Me</h1>
            <ul>
              <li class="mb-3">
                <v-row justify="space-between" class="ma-0">
                  <v-col cols="1" class="pa-0">
                    <v-icon
                      icon="mdi-phone-outline"
                      size="x-large"
                      color="info"
                    ></v-icon>
                  </v-col>
                  <v-col cols="11" class="pa-0 px-4">
                    <span
                      >(0) {{ this.serviceProviderProfile[0].contact }}
                    </span>
                  </v-col>
                </v-row>
              </li>
              <li class="mb-3">
                <v-row justify="space-between" class="ma-0">
                  <v-col cols="1" class="pa-0">
                    <v-icon
                      icon="mdi-email-outline"
                      color="info"
                      size="x-large"
                    ></v-icon>
                  </v-col>
                  <v-col cols="11" class="pa-0 px-4">
                    <span>
                      {{ this.serviceProviderProfile[0].email }}
                    </span>
                  </v-col>
                </v-row>
              </li>
              <li class="mb-3">
                <v-row justify="space-between" class="ma-0">
                  <v-col cols="1" class="pa-0">
                    <v-icon
                      icon="mdi-map-marker-outline"
                      color="info"
                      size="x-large"
                    ></v-icon>
                  </v-col>
                  <v-col cols="11" class="pa-0 px-4">
                    <span
                      >{{ this.serviceProviderProfile[0].address.street }},
                      {{ this.serviceProviderProfile[0].address.city }},
                      {{ this.serviceProviderProfile[0].address.state }},
                      {{ this.serviceProviderProfile[0].address.zip }},
                      {{ this.serviceProviderProfile[0].address.country }}
                    </span>
                  </v-col>
                </v-row>
              </li>
              <li class="socialLinks">
                <v-img
                  :src="this.imageLoad('instaBlue.svg')"
                  max-width="30px"
                  max-height="30px"
                ></v-img>
                <v-img
                  :src="this.imageLoad('fbBlue.svg')"
                  max-width="35px"
                  max-height="35px"
                ></v-img>
                <v-img
                  :src="this.imageLoad('twitterBlue.svg')"
                  max-width="35px"
                  max-height="35px"
                ></v-img>
              </li>
            </ul>
          </li>
          <li class="mb-9">
            <h1 class="mb-4">Featured Services</h1>
            <div>
              <tempelate
                v-for="(service, index) in this.serviceProviderProfile[0]
                  .featured"
                :key="index"
              >
                <v-chip
                  variant="outlined"
                  color="info"
                  class="ma-1 font-weight-bold px-5"
                  >{{ service }}
                </v-chip>
              </tempelate>
            </div>
          </li>
          <li class="mb-9">
            <h1 class="mb-4">All Services</h1>
            <div>
              <tempelate
                v-for="(service, index) in this.serviceProviderProfile[0]
                  .allService"
                :key="index"
              >
                <v-chip
                  variant="outlined"
                  color="info"
                  class="ma-1 font-weight-bold px-3"
                  >{{ service }}
                </v-chip>
              </tempelate>
            </div>
          </li>
          <li class="mb-9">
            <h1 class="mb-4">My Availability</h1>
            <div class="availability">
              <ul>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
              <ul class="text-end">
                <tempelate
                  v-for="(avl, index) in this.serviceProviderProfile[0]
                    .availability"
                  :key="index"
                >
                  <li class="text-uppercase">{{ avl }}</li>
                </tempelate>
              </ul>
            </div>
          </li>
          <v-row class="ma-0">
            <v-col
              cols="12"
              class="pa-0 d-flex flex-column justify-center align-center"
            >
              <v-btn
                class="rounded-pill px-9 py-3 text-capitalize elevation-16"
                height="100%"
                >Book a Service</v-btn
              >
            </v-col>
          </v-row>
        </ul>
      </aside>
      <section class="mainContent py-8">
        <p>
          {{ this.serviceProviderProfile[0].address.country }} /
          {{ this.serviceProviderProfile[0].address.state }} /
          {{ this.serviceProviderProfile[0].address.city }} / Name
        </p>
        <v-row class="ma-0">
          <v-col cols="9" class="pa-0">
            <span>{{ this.serviceProviderProfile[0].name }}</span>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-btn class="rounded-pill px-9 text-capitalize elevation-16"
              >Book a Service</v-btn
            >
          </v-col>
        </v-row>
        <p class="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p class="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p class="description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna.
        </p>
      </section>
    </section>
  </div>
</template>

<script>
import main from "@/main";

export default {
  name: "serviceProviderProfile",
  components: {},
  data() {
    return {
      serviceProviderProfile: [
        {
          id: 2,
          name: "Hermione Granger",
          image:
            "data:image/jpeg;base64,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",
          coverImg: "coverServiceProvider.jpg",
          address: {
            street: "221 E Havens Ave",
            city: "Mitchell",
            state: "SD",
            zip: "57301",
            country: "US",
          },
          contact: "123-456-7890",
          featured: ["Twists1", "Barber2", "Haircut4"],
          allService: [
            "Twists1",
            "Barber2",
            "Weaves3",
            "Haircut4",
            "Braids2",
            "Braids5",
            "Braids4",
            "Haircut5",
          ],
          location: [44.09744823260675, -98.02276780408079],
          email: "email@solasalons.com",
          availability: {
            monday: "closed",
            tuesday: "9AM - 8PM",
            wednesday: "9am - 8pm",
            thursday: "9am - 8pm",
            friday: "9am - 8pm",
            saturday: "9am - 8pm",
            sunday: "closed",
          },
        },
      ],
    };
  },
  created() {
    this.imageLoad = main.imageLoad;
  },
};
</script>

<style lang="scss">
.container {
  .cover {
    width: 100%;
    height: 300px;
    background-size: cover;
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px 0 90px;
    max-width: 500px;
    border-left: 1px solid grey;
    & > .v-img {
      transform: translate(0px, -150px);
    }

    & > ul {
      transform: translate(0px, -100px);
    }

    ul {
      list-style-type: none;

      li.socialLinks {
        max-width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      li {
        font-family: sofia-pro-light;

        span {
          font-size: 22px;
        }

        h1 {
          font-size: 30px;
        }
        .availability {
          display: flex;
          justify-content: space-between;
          font-size: 22px;
          ul {
            li {
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
  .v-btn {
    background: transparent linear-gradient(100deg, #05bed5 0%, #1fa0ef 100%) 0%
      0% no-repeat padding-box;
    color: #ffffff;
    font-family: sofia-pro-bold;
    letter-spacing: 0;
    font-size: 18px;
  }
}
</style>
