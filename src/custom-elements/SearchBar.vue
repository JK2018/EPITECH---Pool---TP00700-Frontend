<template>
<div id="cover">
    <form method="get" action="">
        <div class="tb">
            <div class="td"><input type="text" placeholder=" Search" required></div>
            <div class="td" id="s-cover">
                <button type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                </button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$font:grey;
$background:#fff0d9;
$shadow1:#fdfdfd;
$shadow2:#cbc19d;

* {
    outline: none;
}

.tb {
    display: table;
    width: 100%;
}

.td {
    display: table-cell;
    vertical-align: middle;
}

input,
button {
    color: $font;
    font-family: Nunito;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
}

#cover {
    position: relative;
    /* top: 10px; */
    left: 0;
    right: 0;
    width: 100%;

    margin-top: 10px;
    margin: auto;
    background-color: $background;
    // border-radius: 10px;
    border-bottom: solid grey 5px;
    // box-shadow: 0 10px 40px $shadow1, 0 0 0 10px $shadow2;
    transform: scale(0.6);
}

form {
    height: 60px;
}

input[type="text"] {
    width: 100%;
    height: 60px;
    font-size: 50px;
    line-height: 1;
}

input[type="text"]::placeholder {
    color: $font;
}

#s-cover {
    width: 1px;
    padding-left: 35px;
}

button {
    position: relative;
    display: block;
    width: 84px;
    height: 60px;
    cursor: pointer;
}

#s-circle {
    position: relative;
    top: -9px;
    left: 2px;
    width: 25px;
    height: 25px;
    margin-top: 0;
    border-width: 15px;
    border: 8px solid $font;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
}

button span {
    position: absolute;
    top: 40px;
    left: 20px;
    display: block;
    width: 35px;
    height: 15px;
    background-color: transparent;
    border-radius: 10px;
    transform: rotateZ(52deg);
    transition: 0.5s ease all;
}

button span:before,
button span:after {
    content: '';
    position: absolute;
    bottom: 5;
    right: 0;
    width: 35px;
    height: 10px;
    background-color: $font;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
    top: 2px;
    left: 15px;
    width: 57px;
    height: 10px;
    border-width: 0;
    background-color: $font;
    border-radius: 20px;
}

#s-cover:hover span {
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -8px;
    transform: rotateZ(0);
}

#s-cover:hover button span:before {
    bottom: 11px;
    transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
    bottom: -11px;
    transform: rotateZ(-52deg);
}

#s-cover:hover button span:before,
#s-cover:hover button span:after {
    right: 6px;
    width: 30px;
    background-color: $font;
}

#ytd-url {
    display: block;
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 10px 14px;
    margin: 20px;
    color: #fff;
    font-family: Nunito;
    font-size: 14px;
    text-decoration: none;
    background-color: #ff7575;
    border-radius: 4px;
    box-shadow: 0 10px 20px -5px rgba(255, 117, 117, 0.86);
    z-index: 125;
}
</style>
