<template>
  <div class="main">
    
    <div class="top">
      <div class="infodiv">
        
          <div class="title">
            <h1> Dashboard </h1>
          </div>
          
          <div class="elems">
            <div class="elm">
              <p class="e1">Time worked this Month : <span> 140 hours </span></p>
              <p class="e1">Time worked this Week : <span> 40 hours</span></p>
              <p class="e1">Days to recuperate : <span> 3 days</span></p>
              <p class="e2">Your Manager : <span> James Bond</span></p>
            </div>
          
            <div class="elm">
              <p class="e2">Clocked in today at : <span> 7h22</span></p>
              <p class="e2">Clocked out today at : <span> pending</span></p>
              <p class="e1">Team N° : <span> 134</span></p>
            </div>
          </div>
          
      </div>
      <div class="clkdiv">
        <Clock></Clock>
      </div>
    </div>


    <div class="bottom">
      <div class="chtdiv">
        <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
      </div>
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
            // title: "Weekly Work Time",
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

<style lang="scss" scoped>

$fontCol1: grey;
$fontCol2: rgb(197, 138, 138);

span{
  color:$fontCol2;
}
.top{
  height: 40%;
  width: 100%;
  display: flex;
}
.bottom{
  height: 55%;
  width: 98%;
  display: flex;
  justify-content: space-around;
}
.elm{
  width: 100%;
}
.main{
  width: 100%;
  height: 100%;
  position: relative;
}
.clkdiv{
  width: 22%;
  position: relative;
  margin-top: 0px;
  
}
.chtdiv{
  width: 70%;
  margin-left: 30%;
  position: relative;
  margin: auto;
}
.infodiv{
  width: 77%;
}
.title{
  margin-top: 0px;
  height: 25%;
  width: 100%;
  color: $fontCol1;
}
.elems{
  font-weight: bold;
  color: $fontCol1;
  display: flex;
  width: 100%;
}
.elem{
  width: 50%;
}
.e1{
  text-align: start;
  padding-left: 20%;
}
.e2{
  text-align: start;
  padding-left: 20%;
}
 
</style>