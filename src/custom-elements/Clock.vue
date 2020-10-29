<template>

    <div id="clock">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
    </div>

</template>

<script>
export default {
    name: 'clock',
    el: '#clock',
    data() {
        return {
            time: '',
            date: '',
            week : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
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
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
        }
    }
}
</script>










<style scoped>


p {
    margin: 0;
    padding: 0;
}
#clock {
    font-family: 'Share Tech Mono', monospace;
    width: 200px;
    text-align: center;
    /* position: relative; */
    /* text-shadow: 0 0 6px rgb(0, 0, 0);
    box-shadow: 0 0 20px rgb(5, 5, 5); */
    border-radius: 5px;
    padding: 10px;
    /* transform: translate(-50%, -50%); */
    color: #fff0d9;

    background-color:#cbc19d;
    padding:5px;
    box-shadow:2px 2px 2px gray,
    -1px -1px 2px white;
}
.time {
    letter-spacing: 0.05em;
    font-size: 35px;
}
.date {
    letter-spacing: 0.1em;
    font-size: 20px;
}


</style>