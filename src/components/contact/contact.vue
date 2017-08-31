<template lang="pug">
    .contact
        //- search
        tab-group
            tab-cell(:img="icons[0]", :title="title[0]")
            tab-cell(:img="icons[1]", :title="title[1]")
            tab-cell(:img="icons[2]", :title="title[2]")
            tab-cell.gzh(:img="icons[3]", :title="title[3]")

        <div style="text-align:left;padding-left:16px;height:23px;line-height:17px;color:#939393;">企业号</div>
        

        tab-group
            tab-cell(:img="icons[0]", :title="'大师兄'")
            tab-cell(:img="icons[1]", :title="'企业号助手'")
            tab-cell(:img="icons[2]", :title="title[2]")


        <div style="text-align:left;padding-left:16px;height:23px;line-height:17px;color:#939393;">星标朋友</div>

        tab-group.group
            tab-cell(v-for="title, index in titles",
            :img="icons[1]", :title="title", contact,
            @click.native.stop="tabSelect(index)")


        tab-group.group(v-for="group in friendList")
            tab-cell(v-for="friend in group",
            :img="icons[0]", :title="friend", contact,
            @click.native.stop="detail(friend)")
</template>

<script>
import TabGroup from '@/components/common/tab-group'
import TabCell from '@/components/common/tab-cell'
import Search from '@/components/common/search'

import newfriend from '@/assets/contact/w-contact-newfriend.svg'
import groupchat from '@/assets/contact/w-contact-groupchat.svg'
import gzh from '@/assets/contact/w-contact-gzh.svg'
import sign from '@/assets/contact/w-contact-sign.svg'
export default {
    data() {
        return {
            // 固定组件
            titles: ['聊天室', '在线用户'],
            // 好友列表
            friends: [],
            icons: [newfriend, groupchat, sign, gzh],
            title: ['新的朋友', '群聊', '标签', '公众号']
        }
    },
    computed: {
        friendList() {
            // 排序 分组
            if (this.friends.length === 0) return []

            const list = this.friends.sort()
            let toList = []
            let group = []
            let last = list[0].substr(0, 1)
            for (let i = 0; i < list.length; i++) {

                const current = list[i].substr(0, 1)
                if (current === last) {
                    group.push(list[i])
                }
                else {
                    toList.push(group)
                    group = []
                    group.push(list[i])
                }

                if (i === list.length - 1) {
                    toList.push(group)
                }
                else {
                    last = current
                }

            }

            return toList
        }
    },
    methods: {
        tabSelect(index) {
            switch (index) {
                case 0:
                    this.$router.replace({
                        name: 'chat',
                        query: {
                            mode: 'push',
                            title: '聊天室'
                        }
                    })
                    break
                case 1:
                    this.$router.replace({
                        name: 'online',
                        query: {
                            mode: 'push'
                        }
                    })
                    break
                default:
            }

        },

        detail(username) {
            this.$router.replace({
                name: 'detail',
                query: {
                    mode: 'push',
                    username
                }
            })
        }
    },
    mounted() {
        // 获取通讯录列表
        this.$getFriends((err, friends) => {
            if (err) {
                console.log(err)
                return
            }

            this.friends = friends
        })
    },
    components: {
        TabGroup,
        TabCell,
        Search
    }
}
</script>

<style lang="scss" scoped>
.contact {
    .group {
        border: none;
        margin-top: 1px;
        .title {
            font-size: 18px;
        }

        .tab-cell {
            height: 56px;
        }
    }
    .group:nth-child(2) {
        margin-top: auto;
    }

    .companygroup {
        margin-top: 30px;
    }
}
</style>
