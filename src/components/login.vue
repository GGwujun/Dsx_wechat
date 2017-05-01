<script>
	import {
		mapState
	} from 'vuex'
	import CHAT from '../api/client'
	import {
		randomColor,
		genUid
	} from '../util/index'

	export default {
		data() {
				return {
					username: '',
					password: '',
					color: '',
					weichat: ''
				}
			},
			methods: {
				onKeyup(e) {
					this.$store.dispatch('search', e.target.value);
				},
				send(msg) {
					CHAT.submit(msg)
					this.msg = ''
					console.log(CHAT)
				},
				login() {
					let self = this;
					if(!this.username) {
						alert("昵称不能为空！");
						this.$store.dispatch('err', '请输入用户名！');
						return
					}
					if(!this.password) {
						this.$store.dispatch('err', '请输入密码！');
					}
					let loginData = {
						LoginID: this.username,
						PassWord: this.password
					}
					CHAT.init(loginData, function(data) {
						console.log(data)
						if(!data.login) {
							alert('用户名或者密码错误')
						} else {
							self.$store.dispatch('login', data);
							self.$router.push('/main');
						}
					});
				}
			},
			computed: mapState({
				user: (state) => {
					return state.user
				},
				err: (state) => {
					return state.err
				},
				errMession: (state) => {
					return state.errMession
				}
			})
	};
</script>

<template>
	<div class="login">

		<div class="logo">
			<i class="web_wechat_login_logo "></i>
		</div>

		<div class="login_box">
			<div class="avatar">
				<img class="img" alt=" " src="../../static/2KriyDK.png">
				<div class="login_err_panel" v-if="err">
					<i class="icon18_common error"></i>
					<span class="err_tips">{{errMession}}</span>
				</div>

				<form class="login_form" id="loginForm">
					<div class="login_input_panel">
						<div class="login_input"> <i class="icon_login un"> </i>
							<input type="text" placeholder="邮箱/微信号/QQ号" id="account" name="account" v-model="username">
						</div>
						<div class="login_input"> <i class="icon_login pwd"> </i>
							<input type="password" placeholder="密码" id="pwd" name="password" v-model="password">
						</div>
					</div>

					<div class="login_help_panel">
						<label class="frm_checkbox_label selected" for="rememberCheck"> 
							<i class="icon_checkbox"></i>                                    
							<input type="checkbox" class="frm_checkbox" id="rememberCheck">
							记住帐号
						</label>
						<a class="login_forget_pwd" href="javascript:;">忘记密码</a>
					</div>
					<div class="login_btn_panel">
						<a class="btn_login" title="点击登录" href="javascript:" v-on:click="login">登录</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.login {
		display: block;
		height: 100%;
		min-width: 860px;
		min-height: 600px;
		overflow: auto;
		position: relative;
	}
	
	.logo {
		position: absolute;
		left: 60px;
	}
	
	.logo {
		top: 30px;
	}
	
	.web_wechat_login_logo {
		display: inline-block;
		vertical-align: middle;
		width: 36px;
		height: 28px;
		background: url(../../static/icon.jpg) no-repeat;
		background-position: -196px -210px;
		-webkit-background-size: 487px 462px;
		background-size: 487px 462px;
	}
	
	.web_wechat_login_logo {
		background: url(../../static/1OvE4o2.png) 0 -1107px;
		width: 36px;
		height: 28px;
		vertical-align: middle;
		display: inline-block;
	}
	
	.login_box {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -190px;
		margin-top: -240px;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		background-color: #fff;
		width: 340px;
		height: 400px;
		box-shadow: 0 2px 10px #999;
		-moz-box-shadow: #999 0 2px 10px;
		-webkit-box-shadow: #999 0 2px 10px;
		padding: 36px 35px 40px;
	}
	
	.login_box .avatar {
		display: block;
		text-align: center;
		margin-top: 35px;
	}
	
	.login_box .avatar .img {
		width: 120px;
		height: 120px;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		margin-bottom: 40px;
		border: 1px solid rgba(0, 0, 0, .1);
	}
	
	.login_box .avatar .sub_title {
		font-size: 20px;
		color: #353535;
		margin-bottom: 14px;
		font-weight: 400;
	}
	
	.login_box .avatar .action {
		display: block;
		margin: 60px 80px auto;
		text-align: center;
		text-decoration: none;
		font-size: 16px;
		line-height: 2.55555556;
		border-radius: 6px;
		color: #000;
		width: 220px;
		border: 1px solid rgba(0, 0, 0, .2);
	}
	
	.login_input_panel {
		margin-top: 5px;
	}
	
	.login_input {
		position: relative;
		padding: 3px 0 3px 54px;
		border: 1px solid #e7e7eb;
		margin-top: -1px;
	}
	
	.icon_login.un {
		background: url(../../static/page_login_z32f720.png) 0 0 no-repeat;
	}
	
	.icon_login {
		position: absolute;
		left: 15px;
		top: 50%;
		margin-top: -11px;
		width: 16px;
		height: 18px;
		vertical-align: middle;
		display: inline-block;
	}
	
	.login_input input {
		border: 0;
		outline: 0;
		padding: 11px 0;
		vertical-align: middle;
		width: 100%;
	}
	
	textarea,
	input {
		color: #222;
	}
	
	button,
	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		margin: 0;
	}
	
	.login_input {
		position: relative;
		padding: 3px 0 3px 54px;
		border: 1px solid #e7e7eb;
		margin-top: -1px;
	}
	
	.login_input {
		position: relative;
		padding: 3px 0 3px 54px;
		border: 1px solid #e7e7eb;
		margin-top: -1px;
	}
	
	.icon_login {
		position: absolute;
		left: 15px;
		top: 50%;
		margin-top: -11px;
		width: 16px;
		height: 18px;
		vertical-align: middle;
		display: inline-block;
	}
	
	.login_input input {
		border: 0;
		outline: 0;
		padding: 11px 0;
		vertical-align: middle;
		width: 100%;
	}
	
	.login_help_panel {
		overflow: hidden;
		margin-top: 10px;
	}
	
	.login_help_panel label {
		float: left;
	}
	
	.frm_checkbox_label {
		display: inline-block;
		text-align: left;
		cursor: pointer;
		margin-right: 1em;
	}
	
	.selected .icon_checkbox {
		background: url(../../static/page_login_z32f720.png) 0 -64px no-repeat;
	}
	
	.icon_checkbox {
		background: url(../../static/page_login_z32f720.png) 0 -44px no-repeat;
		width: 16px;
		height: 16px;
		vertical-align: middle;
		display: inline-block;
		margin-right: 3px;
		margin-top: -2px;
	}
	/*#rememberCheck[type=checkbox]:checked + i{
		background: url(../../static/page_login_z32f720.png) 0 -64px no-repeat;
	}*/
	
	.icon_login.pwd {
		background: url(../../static/page_login_z32f720.png) 0 -22px no-repeat;
	}
	
	input[type="checkbox"],
	input[type="radio"] {
		box-sizing: border-box;
		padding: 0;
	}
	
	.frm_checkbox {
		position: absolute;
		left: -999em;
	}
	
	.login_forget_pwd {
		float: right;
	}
	
	a {
		color: #459ae9;
		text-decoration: none;
	}
	
	.login_btn_panel {
		margin-top: 20px;
		margin-bottom: 10px;
	}
	
	.btn_login {
		display: inline-block;
		overflow: visible;
		vertical-align: middle;
		text-align: center;
		border-radius: 3px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-width: 1px;
		border-style: solid;
		cursor: pointer;
		background-color: #44b549;
		background-image: -moz-linear-gradient(top, #44b549 0, #44b549 100%);
		background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#44b549), to(#44b549));
		background-image: -webkit-linear-gradient(top, #44b549 0, #44b549 100%);
		background-image: -o-linear-gradient(top, #44b549 0, #44b549 100%);
		background-image: linear-gradient(to bottom, #44b549 0, #44b549 100%);
		border-color: #44b549;
		color: #fff;
		height: 33px;
		line-height: 33px;
		width: 120px;
		padding-left: 0;
		padding-right: 0;
	}
	
	.login_err_panel {
		color: #e15f63;
		font-size: 13px;
		margin-top: 5px;
	}
	
	.err_tips {
		vertical-align: middle;
	}
</style>