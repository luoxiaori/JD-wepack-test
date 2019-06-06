<template>
    <div :class="$style.home">
        <h1>home momomomo
        <div :class="$style.title">title</div></h1>
        <span :class="$style.last">last line</span>
        <span class="test">hhh</span>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss" module>
    @import "../../css/reset.scss";
    .home{
        color:orange;
        font-size: 160px;
        test-align:center;
        background-color: red;
        .last{
            color:pink;
        }
        
    }

</style>



