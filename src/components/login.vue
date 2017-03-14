<script>
	import {
		mapState
	} from 'vuex'
	
	export default {
		methods: {
			onKeyup(e) {
				this.$store.dispatch('search', e.target.value);
			}
		},
		computed: mapState({
			user: (state) => {
				return state.user
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
			<div class="qrcode">
				<img class="img "  src="../../static/2z6meE1.gif">
				<div>
					<p class="sub_title ">使用手机微信扫码登录</p>
					<p class="sub_desc ">网页版微信需要配合手机使用</p>
				</div>
				<!--<div>
					<div class="refresh_qrcode_mask ">
						<i class="icon-refresh " ></i>
					</div>
					<p class="refresh_tips">二维码失效，点击刷新</p>
				</div>-->
			</div>
			<div class="avatar">
				<img class="img"  alt=" " src="../../static/2KriyDK.png">
				<h4 class="sub_title ">扫描成功</h4>
				<p class="tips ">请在手机上点击确认以登录</p>
				<a href="javascript:; " class="action ">切换帐号</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.login {
		    display: block;
		    height: 100%;
		    min-width: 860px;
		    min-height: 700px;
		    overflow: auto;
		    position: relative;
		}
	.logo {
		    position: absolute;
		    left: 60px;
		}
	.logo {
		    top: 60px;
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
	    margin-top: -270px;
	    border-radius: 4px;
	    -moz-border-radius: 4px;
	    -webkit-border-radius: 4px;
	    background-color: #fff;
	    width: 380px;
	    height: 540px;
	    box-shadow: 0 2px 10px #999;
	    -moz-box-shadow: #999 0 2px 10px;
	    -webkit-box-shadow: #999 0 2px 10px;
	}
	
	.login_box .qrcode {
	    position: relative;
	    text-align: center;
	    display: none;
	}
	
	.login_box .qrcode .img {
	    display: block;
	    width: 270px;
	    height: 270px;
	    margin: 42px auto 12px;
	}
	
	.login_box .qrcode .sub_title {
	    text-align: center;
	    font-size: 20px;
	    color: #353535;
	    margin-bottom: 20px;
	}
	
	.login_box .qrcode .sub_desc {
	    text-align: center;
	    color: #888;
	    font-size: 18px;
	}
	
	.login_box .qrcode .refresh_qrcode_mask {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 270px;
	}
	
	.login_box .qrcode .refresh_qrcode_mask .icon-refresh {
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    margin-left: -48px;
	    margin-top: -48px;
	    cursor: pointer;
	}
	
	.icon-broken-logo, .icon-refresh {
	    display: inline-block;
	    vertical-align: middle;
	    height: 96px;
	}
	
	.icon-refresh {
	    width: 96px;
	    background: url(../../static/icon.jpg) no-repeat;
	    background-position: 0 -150px;
	    -webkit-background-size: 487px 462px;
	    background-size: 487px 462px;
	}
	
	.login_box .qrcode .refresh_tips {
	    color: #353535;
	}
	
	.login_box .avatar {
	    display: block;
	    text-align: center;
	    margin-top: 85px;
	}
	
	.login_box .avatar .img {
	    width: 160px;
	    height: 160px;
	    border-radius: 4px;
	    -moz-border-radius: 4px;
	    -webkit-border-radius: 4px;
	    margin-bottom: 40px;
	    border: 1px solid rgba(0,0,0,.1);
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
	    border: 1px solid rgba(0,0,0,.2);
	}
</style>