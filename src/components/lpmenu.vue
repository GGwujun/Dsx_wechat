<template>
	<div id="mmpop_system_menu" class="mmpop ng-scope system_menu" v-if='lpmune' style="top: 60px; left: 85px;">
		<ul class="dropdown_menu">
			<li>
				<a tabindex="-1" href="javascript:;" ng-click="createChatroom()" title="发起聊天">
					<i class="menuicon_chat"></i>添加好友 </a>
			</li>
			<li>
				<a tabindex="-1" href="javascript:;" ng-click="feedback()" title="意见反馈">
					<i class="menuicon_feedback"></i>意见反馈 </a>
			</li>
			<li class="last_child">
				<a tabindex="-1" href="javascript:;" ng-click="loginout()" title="退出">
					<i class="menuicon_quit"></i>退出 </a>
			</li>
		</ul>

	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		methods: {
			onKeyup(e) {
				// this.$store.dispatch('search', e.target.value);
                this.$store.commit('SET_FILTER_KEY', e.target.value);
			}
		},
		computed: mapState({
			user: (state) => {
				return state.user
			},
			lpmune:(state)=>{
			return state.lpmune
			}
		})
	};
</script>

<style scoped>
	.mmpop {
    position: absolute;
    background-color: #fff;
    z-index: 99;
    top: 0;
    left: 0;
    outline: none;
}

.system_menu {
    background: transparent!important;
    z-index: 102!important;
}

.system_menu {
    width: 180px;
}

.dropdown_menu {
    background-color: #fff;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    overflow: hidden;
    border: 1px solid #d6d6d6;
    box-shadow: 2px 3px 10px rgba(0,0,0,.1);
    -moz-box-shadow: rgba(0,0,0,.1) 2px 3px 10px;
    -webkit-box-shadow: rgba(0,0,0,.1) 2px 3px 10px;
    min-width: 125px;
}

ol, ul {
    padding-left: 0;
    list-style-type: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.dropdown_menu li a {
    display: block;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid #f1f1f1;
    text-align: left;
}

.dropdown_menu li i {
    margin-right: 8px;
}

.menuicon_chat, .menuicon_copylink {
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    height: 34px;
}

.menuicon_chat {
    background: url(../../static/icons.png) no-repeat;
    background-position: -238px -398px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.menuicon_chat, .menuicon_copylink {
    width: 34px;
    height: 34px;
    vertical-align: middle;
    display: inline-block;
}

.menuicon_chat {
    background: url(../../static/1OvE4o2.png) 0 -66px;
}

.menuicon_quit, .menuicon_volume_mute {
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    height: 34px;
}

.menuicon_quit {
    background: url(../../static/icons.png) no-repeat;
    background-position: -102px -398px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.menuicon_quit, .menuicon_volume_mute {
    width: 34px;
    height: 34px;
    vertical-align: middle;
    display: inline-block;
}

.menuicon_quit {
    background: url(../../static/1OvE4o2.png) 0 -270px;
}

.menuicon_feedback, .menuicon_newtab {
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    height: 34px;
}

.menuicon_feedback {
    background: url(../../static/icons.png) no-repeat;
    background-position: -306px -398px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.menuicon_feedback, .menuicon_newtab {
    width: 34px;
    height: 34px;
    vertical-align: middle;
    display: inline-block;
}

.menuicon_feedback {
    background: url(../../static/1OvE4o2.png) 0 -134px;
}
</style>