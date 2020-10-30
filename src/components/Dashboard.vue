<template>
  <div class="main">
    
    <div class="clkdiv">
      <Clock></Clock>
    </div>
    <div class="chtdiv">
      <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
    </div>
    
    
    






  </div>
</template>

<script>
//import Visualisation from './Visualisation.vue';
import { Plotly } from 'vue-plotly'
import Clock from '../custom-elements/Clock.vue'

export default {
  name: "Dashboard",
  data() {
        return {
            data:[{
              x: ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
              y: [10,5,1,7,8,4,0],
              name: "John zedzedzed",
              marker: {opacity: 0.6},
              type:"bar"
            },
            {
              x: ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
              y: [7,15,11,7,3,0,0],
              marker: {opacity: 0.6},
              name: "Bambi",
              type:"bar"
            },
            {
              x: ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],
              y: [9,5,9,9,9,0,0],
              marker: {opacity: 0.6},
              name: "Max",
              type:"bar"
            }
            ],
          layout:{
            bargap: 0.2,
            paper_bgcolor: '#fff0d9',
            plot_bgcolor: '#fff0d9',
            title: "Weekly Work Time",
            xaxis: {tickfont: {
              size: 12,
              color: 'grey'
            }},
            yaxis: {
              showgrid: false,
              nticks: 20,
              title: 'Work Time (hours)',
              titlefont: {
                size: 14,
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
    Clock,
    Plotly
  },

  
}
</script>

<style scoped>

.main{
  width: 90%;
  display: flex;
}
.clkdiv{
  width: 30%;
  position: fixed;
}
.chtdiv{
  width: 70%;
  margin-left: 30%;
  position: relative;
}
 
</style>