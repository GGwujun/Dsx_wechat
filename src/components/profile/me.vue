<template lang="pug">
    page.me(margin-top)
        nav-bar.erji(slot="nav-bar")
            nav-back(slot="left", title="",
             @click.native="$router.replace({name: 'profile', query: {mode: 'pop'}})")
            span.span(slot="title") 个人信息
        template(slot="main")
            tab-group
                tab-cell(title="头像", more, disclosure, large)
                tab-cell(title="名字", detail="大师兄", disclosure)
                tab-cell(title="微信号", detail="gaowujun9", disclosure)
                tab-cell(title="我的二维码", more, disclosure)
                tab-cell(title="我的地址", disclosure)
            tab-group
                tab-cell(title="性别", detail="男", disclosure)
                tab-cell(title="地区", detail="湖南 长沙", disclosure)
                tab-cell(title="个性签名", detai="我没有个性签名", disclosure)
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

export default {
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>

</style>
