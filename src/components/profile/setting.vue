<template lang="pug">
    page.setting(margin-top)
        nav-bar.erji(slot="nav-bar")
            span.span(slot="title") 设置
            nav-back(slot="left", title="",
             @click.native="$router.replace({name: 'profile', query: {mode: 'pop'}})")
        template(slot="main")
            tab-group
                tab-cell(title="账号与安全", disclosure)
            tab-group
                tab-cell(title="新消息通知", disclosure)
                tab-cell(title="隐私", disclosure)
                tab-cell(title="通用", disclosure)
            tab-group
                tab-cell(title="帮助与反馈", disclosure)
                tab-cell(title="关于微信", disclosure)
            tab-group
                tab-cell(title="退出登录", center,
                @click.native="logout")
</template>

<script>
import Page from '@/components/common/page'
import NavBar from '@/components/common/nav-bar'
import NavBack from '@/components/common/nav-back'
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'

export default {
    methods: {
        logout() {

            this.$loading('注销中...')

            this.$logout(err => {
                this.$close()
                if (err) {
                    console.log(err)
                    return
                }

                console.log('注销成功')
                this.$router.replace({
                    name: 'login',
                    query: {
                        mode: 'dismiss'
                    }
                })

                // 关闭连接
                this.$disconnect()
            })

        }
    },
    components: {
        Page,
        NavBar,
        NavBack,
        TabGroup,
        TabCell
    }
}
</script>

<style lang="scss" scoped>

</style>
