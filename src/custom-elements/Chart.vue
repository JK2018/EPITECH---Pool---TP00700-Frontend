<template>
<div>

    <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
</div>
</template>

<script>
import {
    Plotly
} from 'vue-plotly'
//import axios from 'axios'
//import moment from 'moment'

export default {
    name: "Chart",
    props: ["weekDatasetX", "weekDatasetY", "apiData"],
    data() {
        return {

            data: [{
                    x: [],
                    y: [],
                    name: "",
                    marker: {
                        opacity: 0.6
                    },
                    type: "bar"
                },

                // EXAMPLE TO ADD OTHER TEAM MEMBERS
                // {
                //   x: ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
                //   y: [7,15,11,7,3,0,0],
                //   marker: {opacity: 0.6},
                //   name: "Bambi",
                //   type:"bar"
                // },
                // {
                //   x: ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
                //   y: [9,5,9,9,9,0,0],
                //   marker: {opacity: 0.6},
                //   name: "Max",
                //   type:"bar"
                // }
            ],
            layout: {
                bargap: 0.2,
                paper_bgcolor: '#fff0d9',
                plot_bgcolor: '#fff0d9',
                title: "Weekly Work Time",
                xaxis: {
                    nticks: 0,
                    tickfont: {
                        size: 12,
                        color: 'grey'
                    }
                },
                yaxis: {
                    showgrid: false,
                    nticks: 12,
                    title: 'Work Time (hours)',
                    titlefont: {
                        size: 12,
                        color: 'grey',

                    },
                    tickfont: {
                        size: 12,
                        color: 'grey'
                    }
                },
                legend: {
                    x: 1,
                    y: 0,
                    bgcolor: '#fff0d9',
                    bordercolor: '#fff0d9'
                },
            },

        }

    },
    components: {
        Plotly
    },
    methods: {

    },
    mounted() {
        this.data[0].x = this.weekDatasetX;
        this.data[0].y = this.weekDatasetY;
        this.data[0].name = this.apiData.name;
        this.layout.xaxis.nticks = this.weekDatasetX.length + 1
    },

}
</script>

<style lang="scss" scoped>

</style>
