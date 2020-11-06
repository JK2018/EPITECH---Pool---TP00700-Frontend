<template>
  <div>
    <div v-if="this.dataReady">
      <vue-frappe
        id="test"
        :labels="['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']"
        title=""
        type="axis-mixed"
        :height="300"
        :colors="['purple', '#ffa3ef', 'light-blue']"
        :dataSets="this.toto.datasets"
        :tooltipOptions="this.toto.tooltipOptions"
      >
      </vue-frappe>
    </div>
    <div v-else style="height: 300px">LOADING . . .</div>
  </div>
</template>

<script>
import { VueFrappe } from "vue2-frappe";
import moment from "moment";
import axios from "axios";

export default {
  name: "Chart",
  props: ["arrayProps"],
  components: {
    VueFrappe,
  },
  mounted: async function () {
    this.getNewData();
  },
  watch: {
    // eslint-disable-next-line
    arrayProps: function (newVal, oldVal) {
      this.arrayProps = newVal;
      this.dataReady = false;
      this.getNewData();
    },
  },
  data() {
    return {
      dataReady: false,
      toto: {
        datasets: [],
        tooltipOptions: {
          formatTooltipY: (d) => d + " Heures",
        },
      },
    };
  },
  methods: {
    getMomentWeekDates() {
      var weekDates = [];

      for (var i = 1; i <= 5; i++) {
        weekDates.push({
          day: i,
          start: moment().isoWeekday(i).startOf("day").toISOString(),
          end: moment().isoWeekday(i).endOf("day").toISOString(),
        });
      }

      return weekDates;
    },
    getNewData() {
      let data = [];
      this.arrayProps.forEach(async (user) => {
        var days = this.getMomentWeekDates();

        console.log("user:", user);

        for (const day of days) {
          let response = await axios.get(
            `http://localhost:4000/api/workingtimes/${localStorage.getItem(
              "id"
            )}/?start=${day.start}&end=${day.end}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          console.log(response);

          var workedSeconds = -0;
          response.data.result.forEach((wt) => {
            var a = moment(wt.start);
            var b = moment(wt.end);
            workedSeconds += a.diff(b);
          });
          data[day.day - 1] = workedSeconds / 3600 / -1000;
        }

        var foundIndex = this.arrayProps.findIndex((x) => x.id == user.id);
        var item = {
          name: user.username,
          chartType: "bar",
          values: data,
        };
        if (foundIndex === -1) {
          this.toto.datasets.push(item);
        } else {
          this.toto.datasets[foundIndex] = item;
        }

        this.dataReady = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
