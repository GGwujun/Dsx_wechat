<script>
	import {
		mapState
	} from 'vuex'

	export default {
		methods: {
			onKeyup(e) {
				this.$store.dispatch('search', e.target.value);
			},
			lpMenushow(){
				this.$store.dispatch('lpMenu',!this.lpmune);
			},
			switchmenu(data){
				this.$store.dispatch('switchs',data);
			}
		},
		computed: mapState({
			user: (state) => {
				return state.user
			},
			lpmune:(state) => {
				return state.lpmune
			}
		})
	};
</script>

<template>
	<div class="card">
		<header>
			<div class="avatars">
				<img class="avatar" width="40" height="40" :alt="user.name" :src="user.img">
			</div>
			<div class="info">
				<h3 class="nickname">
                	<span class="display_name ng-binding">{{user.name}}</span>
                	<a class="opt" href="javascript:;" v-on:click='lpMenushow'><i class="web_wechat_add"></i></a>
            	</h3>
			</div>

		</header>
		<footer>
			<div class="search_bar">
				<i class="web_wechat_search"></i>
				<input class="search frm_search" type="text" placeholder="搜索" @keyup="onKeyup">
			</div>
		</footer>

		<div class="tab">
			<div class="tab_item" @click="switchmenu('list')">
				<a class="chat"  title="聊天" href="javascript:;">
					<i class="web_wechat_tab_chat web_wechat_tab_chat_hl"></i>
				</a>
			</div>
			<!-- ngIf: isShowReader -->
			<div class="tab_item ng-scope" >
				<a class="chat" title="阅读" href="javascript:;">
					<i class="web_wechat_tab_public"></i>
				</a>
			</div>
			<!-- end ngIf: isShowReader -->
			<div class="tab_item no_extra" @click="switchmenu('friendlist')">
				<a class="chat"  title="通讯录" href="javascript:;">
					<i class="web_wechat_tab_friends"></i>
				</a>
			</div>
		</div>

	</div>
</template>

<style scoped>
	.card {
		border-bottom: solid 1px #24272C;
	}
	
	.card header {
		padding: 18px;
		position: relative;
	}
	
	.card header .avatars {
		display: table-cell;
		vertical-align: middle;
		word-wrap: break-word;
		word-break: break-all;
		white-space: nowrap;
		padding-right: 10.625px;
	}
	
	.card header .avatars img {
		width: 40px;
		height: 40px;
		border-radius: 2px;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		display: block;
		cursor: pointer;
	}
	
	.card header .info {
		display: table-cell;
		vertical-align: middle;
		word-wrap: break-word;
		word-break: break-all;
		width: 2000px;
	}
	
	.card header .info .nickname .display_name {
		display: inline-block;
		font-weight: 400;
		width: 147px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal;
		color: #fff;
		font-size: 18px;
		vertical-align: top;
		line-height: 31px;
		text-decoration: none;
	}
	
	.card header .info .nickname .opt {
		display: inline-block;
		vertical-align: top;
	}
	
	.web_wechat_add,
	.web_wechat_addfriend {
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		height: 30px;
	}
	
	.web_wechat_add {
		background: url(../../static/icons.png) no-repeat;
		background-position: -434px -398px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.card footer {
		margin-top: 0px;
	}
	
	.card .avatar,
	.card .name {
		vertical-align: middle;
	}
	
	.card .avatar {
		border-radius: 2px;
	}
	
	.card .name {
		display: inline-block;
		margin: 0 0 0 15px;
		font-size: 16px;
	}
	
	.card .search {
		padding: 0 10px;
		width: 100%;
		font-size: 12px;
		color: #fff;
		height: 30px;
		line-height: 30px;
		border: solid 1px #3a3a3a;
		border-radius: 4px;
		outline: none;
		background-color: #26292E;
	}
	
	.card .search_bar {
		position: relative;
		width: 244px;
		margin: 0 auto 6px;
	}
	
	.search_bar .web_wechat_search {
		position: absolute;
		z-index: 101;
		top: 1px;
	}
	
	.web_wechat_search {
		background: url(../../static/icon.jpg) no-repeat;
		background-position: -60px -432px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.web_wechat_screencut,
	.web_wechat_search {
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		height: 30px;
	}
	
	.web_wechat_search {
		background: url(../../static/1OvE4o2.png) 0 -1946px;
	}
	
	.search_bar .frm_search {
		width: 200px;
		height: 32px;
		line-height: 32px;
		border: 0;
		border-radius: 2px;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		background-color: #26292e;
		color: #fff;
		padding-left: 30px;
		font-size: 12px;
	}
	
	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		margin: 0;
	}
	
	.tab {
    overflow: hidden;
    position: relative;
    padding-bottom: 4px;
}
.tab .tab_item {
    float: left;
    width: 33.33333333%;
    position: relative;
}
.tab .tab_item a {
    display: block;
    text-align: center;
}
.web_wechat_tab_chat_hl {
    background: url(../../static/icons.png) no-repeat;
    background-position: -185px -96px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.web_wechat_tab_chat, .web_wechat_tab_chat_hl {
    display: inline-block;
    vertical-align: middle;
    width: 35px;
    height: 35px;
}

.web_wechat_tab_chat {
    background: url(../../static/icons.png) no-repeat;
    background-position: -150px -96px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.web_wechat_tab_chat_hl {
    background: url(../../static/1OvE4o2.png) 0 -2083px;
}

.web_wechat_tab_chat, .web_wechat_tab_chat_hl {
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
}

.web_wechat_tab_chat {
    background: url(../../static/1OvE4o2.png) 0 -2048px;
}
a, button, input, textarea {
    outline: 0;
}

.tab .tab_item:after {
    content: '';
    position: absolute;
    top: 7px;
    right: 0;
    width: 0;
    height: 20px;
    border-right: 1px solid #24272c;
}
.tab .tab_item {
    float: left;
    width: 33.33333333%;
    position: relative;
}

.web_wechat_tab_public, .web_wechat_tab_public_hl {
    display: inline-block;
    vertical-align: middle;
    width: 35px;
    height: 35px;
}

.web_wechat_tab_public {
    background: url(../../static/icons.png) no-repeat;
    background-position: -376px -322px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.web_wechat_tab_public, .web_wechat_tab_public_hl {
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
}

.web_wechat_tab_public {
    background: url(../../static/1OvE4o2.png) 0 -2232px;
}

.web_wechat_tab_friends, .web_wechat_tab_friends_hl {
    display: inline-block;
    vertical-align: middle;
    width: 35px;
    height: 35px;
}

.web_wechat_tab_friends {
    background: url(../../static/icons.png) no-repeat;
    background-position: -220px -96px;
    -webkit-background-size: 487px 462px;
    background-size: 487px 462px;
}

.web_wechat_tab_friends, .web_wechat_tab_friends_hl {
    width: 35px;
    height: 35px;
    vertical-align: middle;
    display: inline-block;
}

.web_wechat_tab_friends {
    background: url(../../static/1OvE4o2.png) 0 -2140px;
}
</style>