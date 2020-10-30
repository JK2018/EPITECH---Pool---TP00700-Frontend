<template>

    <div id="clock">
        <div class="circle">
            <p class="day">{{ day }}</p>
            <p class="time">{{ time }}</p>
            <p class="date">{{ date }}</p>
        </div>
        <button class="button2">Clock</button>
    </div>

</template>

<script>
export default {
    name: 'clock',
    data() {
        return {
            time: '',
            date: '',
            day: '',
            week : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            month : ['JAN','FEB','MAR','APR','MAY','JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
            timerID: 0
        }
    },
    created(){
        
        this.timerID = setInterval(this.updateTime, 1000);
        this.updateTime();
    },
    methods: {
        zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        updateTime() {
            var cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) ;
            this.date =  this.zeroPadding(this.month[cd.getMonth()], 3) + ' ' + this.zeroPadding(cd.getDate(), 2) ;
            this.day = this.week[cd.getDay()];
        }
    }
}
</script>










<style scoped>

.circle{
    margin: 1em auto;
    height: 60%;
    width: 85%;
    -webkit-appearance: none;
    border: 6px solid rgba(255,255,255,0.45);
    border-radius: 50%;
    background-color:#f0f0f0;
    position: relative;
    color: #f0f0f0;
    box-shadow:4px 3px 20px gray,
    -3px -4px 6px white;
    letter-spacing: 0.05em;
    font-size: 30px;
    font-weight: bold;
    text-shadow:2px 2px 2px gray,
    -1px -1px 2px white;
}

p {
    margin: 0;
    padding: 0;
}
#clock {
    font-family: 'Share Tech Mono', monospace;
    width: 200px;
    height: 300px;
    text-align: center;
    border-radius: 5px;
    padding-top: 1px;
    padding-bottom: 3%;
    color:#f0f0f0;
    background-color:#f0f0f0;
    box-shadow:2px 2px 2px gray,
    -1px -1px 2px white;
}
.time {
    letter-spacing: 0.05em;
    font-size: 35px;
    font-weight: bold;
    text-shadow:2px 2px 2px gray,
    -1px -1px 2px white;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
}
.date {
    letter-spacing: 0.1em;
    font-size: 20px;
    text-shadow:2px 2px 2px gray,
    -1px -1px 2px white;
    margin: 0;
    font-weight: bold;
}
.day {
    letter-spacing: 0.1em;
    font-size: 20px;
    text-shadow:2px 2px 2px gray,
    -1px -1px 2px white;
    margin: 0;
    padding-top: 22%;;
    font-weight: bold;
}
button {
    height: 15%;
    width: 90%;
    margin:  auto;
    -webkit-appearance: none;
    border: 6px solid rgba(255,255,255,0.45);
    border-radius: 50px;
    background-color:#f0f0f0;
    position: relative;
    color: #f0f0f0;
    box-shadow:4px 3px 20px gray,
    -3px -4px 6px white;
    letter-spacing: 0.05em;
    font-size: 22px;
    font-weight: bold;
    text-shadow:2px 2px 2px gray,
    -1px -1px 2px white;    
}


</style>