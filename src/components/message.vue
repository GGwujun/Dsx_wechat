<script>
	import {
		mapState
	} from 'vuex'

	import Vue from 'vue';

	export default {

		filters: { //将日期过滤为 hour:minutes
			time(date) {
				if(typeof date === 'string') {
					date = new Date(date);
				}
				return date.getHours() + ':' + date.getMinutes();
			}
		},
		computed: mapState({
			user: (state) => {
				return state.user
			},
			session: (state) => {
				return state.sessions.find(session => session.id === state.currentSessionId)
			}
		})

	}

	Vue.directive('scroll-bottom', function(el) {
		Vue.nextTick(() => {
			el.scrollTop = el.scrollHeight - el.clientHeight;
		});
	})
</script>

<template>
	<div class="message">
		<div class="title_wrap">
			<div class="title poi">
				<a class="title_name ng-binding">{{user.name}}</a>
				<i class="web_wechat_down_icon"></i>
			</div>
		</div>
		<ul v-if="session" v-scroll-bottom="session.messages">
			<li v-for="(item,index) in session.messages">
				<p class="time">
					<span>{{ item.date | time }}</span>
				</p>
				<div class="main" :class="{ self: item.self }">
					<img class="avatar" width="30" height="30" :src="item.self ? session.user.img : user.img" />
					<div class="text">{{ item.content }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	.message {
		padding: 10px 15px;
	}
	
	.message ul {
		overflow-y: scroll;
		height: 100%;
		margin: 0 auto;
	}
	
	.message li {
		margin-bottom: 15px;
		list-style: none;
	}
	
	.message .time {
		margin: 7px 0;
		text-align: center;
	}
	
	.message .time> span {
		display: inline-block;
		padding: 0 18px;
		font-size: 12px;
		color: #fff;
		border-radius: 2px;
		background-color: #dcdcdc;
	}
	
	.message .avatar {
		float: left;
		margin: 0 10px 0 0;
		border-radius: 3px;
	}
	
	.message .text {
		display: inline-block;
		position: relative;
		padding: 0 10px;
		max-width: calc(100% - 40px);
		min-height: 30px;
		line-height: 2.5;
		font-size: 12px;
		text-align: left;
		word-break: break-all;
		background-color: #fafafa;
		border-radius: 4px;
	}
	
	.message .text:before {
		content: " ";
		position: absolute;
		top: 9px;
		right: 100%;
		border: 6px solid transparent;
		border-right-color: #fafafa;
	}
	
	.message .self {
		text-align: right;
	}
	
	.message .self .avatar {
		float: right;
		margin: 0 0 0 10px;
	}
	
	.message .self .text {
		background-color: #b2e281;
	}
	
	.message .self .text:before {
		right: inherit;
		left: 100%;
		border-right-color: transparent;
		border-left-color: #b2e281;
	}
	
	.title_wrap {
		position: relative;
		padding: 10px 0;
		margin: 0 19px;
		border-bottom: 1px solid #d6d6d6;
		background-color: #eee;
		z-index: 1024;
		text-align: center;
	}
	
	.title.poi {
		cursor: pointer;
	}
	
	.title {
		font-weight: 400;
		height: 25px;
		display: inline-block;
		font-size: 14px;
	}
	
	.title .title_name {
		display: inline-block;
		vertical-align: middle;
		max-width: 300px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		word-wrap: normal;
		text-decoration: none;
		color: #000;
		font-weight: 400;
	}
	
	.web_wechat_down_icon {
		display: inline-block;
		vertical-align: middle;
	}
	
	.web_wechat_down_icon {
		width: 10px;
		height: 10px;
		background: url(../../static/icons.png) no-repeat;
		background-position: -477px -65px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.web_wechat_down_icon {
		vertical-align: middle;
		display: inline-block;
	}
	
	.web_wechat_down_icon {
		background: url(../../static/1OvE4o2.png) 0 -795px;
		width: 10px;
		height: 10px;
	}
	
	::-webkit-scrollbar {
		width: 7px;
		height: 10px;
	}
	
	
	/*定义滚动条轨道 内阴影+圆角*/
	
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 7px;
	}
	
	
	/*定义滑块 内阴影+圆角*/
	
	::-webkit-scrollbar-thumb {
		border-radius: 7px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
	}
	
	
</style>