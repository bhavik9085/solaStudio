<template>
  <div
    id="map"
    style="width: 100%; height: 100%"
    @mouseover="mapHover()"
    @click="mapClick()"
  ></div>
</template>

<script>
import View from "ol/View.js";
import Map from "ol/Map.js";
import VectorSource from "ol/source/Vector.js";
import OSM from "ol/source/OSM";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import Point from "ol/geom/Point.js";
import { Icon, Text, Fill, Style } from "ol/style.js";
import Feature from "ol/Feature.js";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import main from "@/main";

export default {
  name: "mapComponent",
  components: {},
  data() {
    return {
      path: "location.png",
      layers: [],
      allfeatures: [],
      defaultView: undefined,
      defaultStyle: undefined,
      hoverStyle: undefined,
    };
  },
  props: {},
  methods: {
    setMainLayer() {
      var mainLayer = new TileLayer({
        id: 0,
        source: new OSM(),
      });

      this.layers.push(mainLayer);
    },

    addVectorLayer() {
      var locations = this.locations;
      var pointSource, pointLayer;

      if (locations.length > 0) {
        for (let i = 0; i < locations.length; i++) {
          this.allfeatures.push(
            createFeatures(
              locations[i].long,
              locations[i].lat,
              locations[i].id,
              locations[i].name
            )
          );
        }
      }

      function createFeatures(long, lat, id, name) {
        return new Feature({
          geometry: new Point(fromLonLat([long, lat])),
          id: id,
          name: name,
        });
      }

      pointSource = new VectorSource({
        features: this.allfeatures,
      });

      pointLayer = new VectorLayer({
        id: 1,
        source: pointSource,
        style: this.defaultStyle,
      });

      this.layers.push(pointLayer);
    },

    createView() {
      var map = new Map({
        layers: this.layers,
        target: document.getElementById("map"),
        view: this.defaultView,
      });

      this.$store.dispatch("mapUpdate", map);
    },

    mapHover() {
      var self = this;
      let selected = null;
      self.map.on("pointermove", function (e) {
        if (selected !== null) {
          selected.setStyle(undefined);
          selected = null;
        }

        self.map.forEachFeatureAtPixel(e.pixel, function (f) {
          selected = f;
          f.setStyle(self.stylePicker(f.get("name")));
          return true;
        });
      });
    },

    mapClick() {
      var self = this;
      let selected = null;

      self.map.on("click", function (e) {
        if (selected !== null) {
          selected = null;
        }

        self.map.forEachFeatureAtPixel(e.pixel, function (f) {
          selected = f;

          var newView = new View({
            center: f.getGeometry().getCoordinates(),
            zoom: 15,
          });
          self.map.set("view", newView);

          return true;
        });
      });
    },

    hoverFeature(id, long, lat, name) {
      var self = this;

      self.map.once("postrender", function () {
        self.allfeatures.forEach((feature) => {
          if (feature.get("id") == id) {
            feature.setStyle(self.stylePicker(name));
          }
        });
      });

      this.defaultView = new View({
        center: fromLonLat([long, lat]),
        zoom: self.map.getView().getZoom(),
      });

      self.map.set("view", this.defaultView);

      self.map.renderSync();
    },

    stylePicker(name) {
      var hoverStyle = new Style({
        image: new Icon({
          anchor: [5, 21],
          anchorXUnits: "pixels",
          anchorYUnits: "pixels",
          src: this.imageLoad(this.path),
          size: [32, 32],
          scale: 1.5,
        }),

        text: new Text({
          font: "16px sofia-pro-bold,sans-serif",
          fill: new Fill({ color: "#FAFAD2" }),
          backgroundFill: new Fill({ color: "#000" }),
          text: name,
          offsetY: -45,
          padding: [0, 5, 0, 5],
        }),
      });

      return hoverStyle;
    },

    leaveHoverFeature(id) {
      var self = this;
      self.map.once("postrender", function () {
        self.allfeatures.forEach((feature) => {
          if (feature.get("id") == id) {
            feature.setStyle(self.defaultStyle);
          }
        });
      });

      self.map.renderSync();
    },
  },

  created() {
    this.imageLoad = main.imageLoad;
  },

  mounted() {
    this.defaultStyle = new Style({
      image: new Icon({
        anchor: [0, 16],
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        src: this.imageLoad(this.path),
        size: [32, 32],
        scale: 1,
      }),
    });

    this.defaultView = new View({
      center: fromLonLat([-98.0, 38.5]),
      zoom: 6,
    });

    this.hoverStyle = new Style({
      image: new Icon({
        anchor: [5, 21],
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        src: this.imageLoad(this.path),
        size: [32, 32],
        scale: 1.5,
      }),

      text: new Text({
        font: "12px Calibri,sans-serif",
        fill: new Fill({ color: "#FAFAD2" }),
        backgroundFill: new Fill({ color: "#000" }),
      }),
    });

    this.setMainLayer();
    this.addVectorLayer();
    this.createView();
  },

  computed: {
    locations() {
      var locations = [];
      var listOfServiceProvidersToRender =
        this.$store.state.listOfServiceProvidersToRender;

      for (let i = 0; i < listOfServiceProvidersToRender.length; i++) {
        locations.push({
          long: listOfServiceProvidersToRender[i].location[1],
          lat: listOfServiceProvidersToRender[i].location[0],
          id: listOfServiceProvidersToRender[i].id,
          name: listOfServiceProvidersToRender[i].name,
        });
      }
      return locations;
    },

    map() {
      return this.$store.state.map;
    },
  },
};
</script>
