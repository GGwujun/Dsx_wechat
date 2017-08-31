<template lang="pug">
    header.nav-bar
        .left
            slot(name="left")
        .title
            slot(name="title")
        .right
            slot(name="right")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.nav-bar {
    @include abs(0, 0, auto, 0);
    height: 55px;
    padding: 0;

    color: #fff;
    line-height: 55px;
    background-color: #393A3F;
    z-index: 100;

    .left {
        @include abs(0, auto, 0, 20px)
    }
    .right {
        @include abs(0, 12px, 0, auto)
    }

    .title {
        text-align: left;
        padding-left: 20px;
        font-size: 1.1rem;
    }
}
</style>
