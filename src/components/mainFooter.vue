<template>
  <section class="mainFooter">
    <div class="ulSection">
      <div class="tables">
        <ul>
          <li class="head">Sola</li>
        </ul>
        <hr />
        <div class="parts">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">In the News</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <ul>
            <li><a href="#">Virtual Webinars</a></li>
            <li><a href="#">Podcasts</a></li>
            <li><a href="#">Sola Sessions</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Contacts Us</a></li>
          </ul>
        </div>
      </div>
      <div class="tables">
        <ul>
          <li class="head">Beauty Proffetionals</li>
        </ul>
        <hr />
        <div class="parts">
          <ul>
            <li><a href="#">Why Sola</a></li>
            <li><a href="#">Sola Pro</a></li>
          </ul>
          <ul>
            <li><a href="#">Sola Genius</a></li>
            <li><a href="#">Beauty Hive</a></li>
          </ul>
        </div>
      </div>
      <div class="tables">
        <ul>
          <li class="head">Apps</li>
        </ul>
        <hr />
        <div class="parts">
          <ul>
            <li><a href="#">Sola Pro</a></li>
          </ul>
          <ul>
            <li><a href="#">Sola Genius</a></li>
          </ul>
        </div>
      </div>
      <div class="tables">
        <ul>
          <li class="head">Franchising</li>
        </ul>
        <div class="parts">
          <ul>
            <li><a href="#">solafranchising.com</a></li>
          </ul>
        </div>
      </div>
      <div class="tables">
        <ul>
          <li class="head">Subscribe to our newsletter</li>
        </ul>
        <div class="partsCentered">
          <ul>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor…
              </p>
            </li>
            <li>
              <div class="inputField">
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email Address"
                /><span>
                  <img src="@/img/sendButton.svg" alt="" />
                </span>
              </div>
            </li>
            <li>
              <a href="#">
                <div class="links">
                  <img src="@/img/instaBlue.svg" alt="" />
                  <img src="@/img/fbBlue.svg" alt="" />
                  <img src="@/img/twitterBlue.svg" alt="" />
                  <img src="@/img/linkedinBlue.svg" alt="" />
                  <img src="@/img/youtubeBlue.svg" alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="copyRight">
      <p class="policy"><a href="#">Accessibility | Privacy Policy</a></p>
      <p class="rights"><a href="#">©2022 Sola Salons</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainFooter",
  data() {
    return {};
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
};
</script>
<style lang="scss">
.mainFooter {
  margin-top: 56px;
  background-color: #303941;
  .ulSection {
    max-width: 1300px;
    margin: auto;
    padding: 100px 90px 40px 90px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1180px) {
      padding: 100px 50px 40px 50px;
    }

    @media only screen and (max-width: 890px) {
      padding: 35px 30px 40px 30px;
    }

    @media only screen and (max-width: 850px) {
      flex-direction: column;
      padding: 35px 80px 40px 80px;
    }

    @media only screen and (max-width: 600px) {
      padding: 35px 50px 40px 50px;
    }

    @media only screen and (max-width: 360px) {
      padding: 35px 30px 40px 30px;
    }

    .tables {
      margin-left: 30px;

      &:first-of-type {
        margin-left: 0;
      }

      @media only screen and (max-width: 850px) {
        margin-left: 0px;
        margin-top: 20px;
      }

      &:last-of-type > ul > li.head {
        @media only screen and (max-width: 500px) {
          text-align: center;
          margin: auto;
          margin-bottom: 15px;
        }
      }

      .parts {
        @media only screen and (max-width: 850px) {
          display: flex;
          justify-content: space-around;

          li {
            min-width: 110px;
          }
        }

        @media only screen and (max-width: 500px) {
          justify-content: space-between;
        }
      }
      .partsCentered {
        @media only screen and (max-width: 850px) {
          display: flex;
          justify-content: space-around;
        }
      }

      hr {
        display: none;

        @media only screen and (max-width: 850px) {
          display: block;
        }
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li.head {
        color: #1fa0ef;
        font-family: sofia-pro-bold;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 15px;

        @media only screen and (max-width: 850px) {
          margin: auto;
          margin-bottom: 15px;
          text-align: center;
        }

        @media only screen and (max-width: 500px) {
          margin: 0 0 15px 0;
          text-align: left;
        }
      }
      li {
        max-width: 400px;
        box-sizing: border-box;
        padding: 0;

        @media only screen and (max-width: 1180px) {
          max-width: 300px;
        }

        @media only screen and (max-width: 960px) {
          max-width: 250px;
        }

        a {
          text-decoration: none;
          font-family: sofia-pro-light;
          font-size: 16px;
          line-height: 35px;
          letter-spacing: 0.3px;
          color: #ffffff;
          transition-duration: 0.3s;

          &:hover {
            color: #73787e;
          }

          @media only screen and (max-width: 1180px) {
            font-size: 14px;
          }
        }

        p {
          font-family: sofia-pro-light;
          font-size: 16px;
          letter-spacing: 0.3px;
          color: #ffffff;
          line-height: 22px;
          margin: 0;
          margin-bottom: 15px;

          @media only screen and (max-width: 1180px) {
            font-size: 14px;
          }
        }

        .inputField {
          display: flex;
          justify-content: center;
          align-items: center;

          input[type="email"] {
            padding: 15px 12px;
            box-sizing: border-box;
            height: 40px;
            width: 340px;
            border: none;
            border-radius: 5px 0 0 5px;
            color: #b9b9b9;
            font-family: sofia-pro-light;
            font-size: 16px;
            line-height: 19px;
            background-color: #ffffff;
          }

          span {
            height: 40px;
            box-sizing: border-box;
            border: 2px solid #ffffff;
            border-radius: 0 5px 5px 0;
            background-color: #1fa0ef;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover {
              opacity: 0.8;
            }
            img {
              width: 55px;
              height: 25px;
            }
          }
        }
        .links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 300px;
          margin-top: 35px;

          img {
            height: 35px;
            width: 35px;
            &:hover {
              opacity: 0.8;
            }

            &:last-of-type,
            &:first-of-type {
              height: 30px;
              width: 30px;
            }
          }
        }
      }
    }
  }
  hr {
    max-width: 1300px;
    margin: auto;
    border: none;
    border-top: 1px solid #6f6f6f;

    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
  .copyRight {
    max-width: 1300px;
    margin: auto;
    display: flex;
    position: relative;

    @media only screen and (max-width: 500px) {
      flex-direction: column;
    }

    p.rights {
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 50px;
      a {
        text-decoration: none;
        color: #92989f;
        font-family: sofia-pro-light;
        font-size: 12px;
        line-height: 16px;
      }
    }

    p.policy {
      position: absolute;
      right: 0;
      top: 30px;
      margin: 0;
      margin-right: 10px;

      @media only screen and (max-width: 500px) {
        position: static;
        margin: auto;
      }
      a {
        text-decoration: none;
        font-size: 14px;
        line-height: 20px;
        font-family: sofia-pro-light;
        color: #ffffff;
      }
    }
  }
}
</style>
