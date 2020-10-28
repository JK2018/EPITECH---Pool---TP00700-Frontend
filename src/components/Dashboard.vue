<template>
  <div class="dsh-col">
      <div class="dsh-row">
        <div class="timer-contain">
          <div class="img-container">
            <img class="img-full" src="../assets/clock.png" alt="">
          </div>
          <div>
            <BtnClock
                @click.native="startTimer()"
                bck-grn-color="rgb(207 214 206 / 91%)"
                txt-color="#0d3312"
                icon-name="las la-play-circle" text-name="Start"/>
            <BtnClock
                @click.native="endTimer()"
                bck-grn-color="rgb(228 51 51 / 98%)"
                icon-name="las la-power-off" text-name="Stop"/>
          </div>
        </div>
        <div class="graph-card">
          <img style="width: 100%; height: 100%" src="../assets/graph.png" alt="">
        </div>
      </div>
      <div class="dsh-row">
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
      </div>
  </div>
</template>

<script>
import CardCustom from "@/custom-elements/CardCustom";
import BtnClock from "@/custom-elements/BtnClock";

export default {
  name: "Dashboard",
  components: {
    BtnClock,
    CardCustom,
  },
  methods:{
    startTimer(){
      alert("Michel débute le travail");
    },
    endTimer(){
      alert("Michel rentre chez lui")
    }
  }
}
</script>

<style scoped>
  .dsh-col{
    display: flex;
    flex-direction: column;
  }
  .dsh-row{
    display: flex;
    flex-direction: row;
  }
  .img-container{
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
  .img-full{
    height: 100%;
    width: 100%;
  }
  .timer-contain {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .graph-card {
    display: flex;
    flex: 2;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    /*margin: 10px;*/
    padding: 8px;
    /*width: 150px;*/
    border-radius: 5px;
  }
</style>