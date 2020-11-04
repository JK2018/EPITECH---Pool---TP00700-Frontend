<template>
  <div class="head-clock">
    <div style="font-size: 14px; margin-right: 20px">
      Click on your timer ->
    </div>

    <!-- <b-icon icon="bell-fill" class="border rounded p-2"></b-icon> -->
    <div class="clock-number">
      {{ formattedElapsedTime }}
    </div>

    <b-button :disabled="started" style="margin-right: 10px" @click="start"
      >Record</b-button
    >
    <b-button :disabled="!started" @click="reset">Stop</b-button>
  </div>
</template>
<style scoped>
.head-clock {
  margin-top: auto;
  margin-bottom: auto;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  background-color: white;
  box-shadow: 0 3px 4px -2px grey;
}

.clock-number {
  font-size: 22px;
  margin-right: 20px;
  font-weight: 600;
}

p {
  text-align: center;
  font-size: 24px;
}
</style>

<script>
import axios from "axios";
import { BButton } from "bootstrap-vue";

export default {
  name: "clock",
  components: { BButton },
  data() {
    return {
      elapsedTime: 0,
      timer: undefined,
      started: false,
    };
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
  },
  mounted: function () {
    axios
      .post(
        "http://localhost:4000/api/clock/" + localStorage.getItem("id"),
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log("Res= " + JSON.stringify(res.data, null, 4));
        this.started = true;
      })
      .catch((err) => {
        console.log("err=" + err);
      });
  },
  methods: {
    start() {
      if (this.started === false) {
        this.timer = setInterval(() => {
          this.elapsedTime += 1000;
        }, 1000);
        axios
          .post(
            "http://localhost:4000/api/clock/" + localStorage.getItem("id"),
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            console.log("Res= " + JSON.stringify(res.data, null, 4));
            this.started = true;
          })
          .catch((err) => {
            console.log("err=" + err);
          });
      }
    },
    reset() {
      clearInterval(this.timer);
      this.elapsedTime = 0;

      axios
        .post("http://localhost:4000/api/clock/" + localStorage.getItem("id"), {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log("Res= " + JSON.stringify(res.data, null, 4));
          this.started = false;
        })
        .catch((err) => {
          console.log("err=" + err);
        });
    },
  },
};
</script>