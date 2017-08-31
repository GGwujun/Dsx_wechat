<template lang="pug">
    .page
        slot(name="nav-bar")
        section.main(:class="inset")
            slot(name="main")
        slot(name="tab-bar")
</template>

<script>
export default {
    props: ['marginBottom'],
    data() {
        return {
            inset: {
                'margin-bottom': this.marginBottom
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixin';

.page {
    @include abs(0, 0, 0, 0);
    width: 100%;
    height: 100%;

    .main {
        position: absolute;
        top: 55px;
        bottom: 0px;
        box-sizing: border-box;
        background: $bgColor;
        left: 0;
        right: 0;
        overflow-y: scroll;
        padding-bottom: 53px;
    }
}
</style>
