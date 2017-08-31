<template lang="html">
    <div class="splash">
        <div class="info">
            <div class="info-content">
                <h3 class="project-name" >Dsx-Wechat</h3>
                <div class="project-desc">
                    <p>你总是在追赶前面的人</p>
                    <p>总是抱怨自己为什么不能再努力一点</p>
                    <p>累了你可以停下来</p>
                    <p>看看原来的自己</p>
                    <p>其实你已经很了不起了</p>
                    <p>学习是没有终点的赛跑</p>
					<p>天道终会酬勤</p>
                    <p>感谢帮助过我的人</p>
                </div>
                <div class="logining " :class="loginState?'show': ''">
                    <pixel-spinner :size="'45px'" :color="'#007AFF'"></pixel-spinner>
                </div>
                <button class="login" v-on:click="oauth">开始微信之旅</button>
            </div>
            <div class="info-footer">
                <div class="header">
                    <img class="avatar"   src="../assets/icon3.png">
                </div>
                <div class="wanbo">
                    <h2 class="name" >dsx</h2>
                    <span class="desc">向右看右边架子上就有啊</span>
                </div>
                <div class="follower">
                    <img v-on:click="goMyGithub" class="avatar"   src="../assets/github.png">
                    <img v-on:click="goMyWeibo"  class="avatar"   src="../assets/weibo.png">
                </div>
            </div>
        </div>
        <div id="particles-js"></div>
    </div>
      
</template>
 
<script>
require('particles.js');
import 'vue-material/dist/vue-material.css'
export default {
    data() {
        return {
            loginState: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initParticleJS();
        });
    },
    methods: {
        oauth() {
            var vue = this;
            this.loginState = true;
            setTimeout(function () {
                vue.$login(null, (err, ws_key) => {
                    if (err) {
                        vue.loginState = false;
                        // 不存在  转到登录界面
                        vue.$router.replace({
                            name: 'login',
                            query: {
                                mode: 'dismiss'
                            }
                        })

                        return
                    } else {
                        vue.loginState = false;
                        vue.goMain()
                    }

                    // 连接socket
                    vue.$connect(ws_key, (err) => {
                        if (err) {
                            // 连接失败
                            console.log('连接失败')
                        }
                        else {
                            // 连接成功
                            console.log('连接成功')
                        }
                    })
                })
            }, 3000);
        },
        goMain() {
            let vue = this
            setTimeout(function () {
                vue.$router.push({ name: 'message' });
            }, 2000)
        },
        goMyWeibo() {
            window.open('http://weibo.com/2408808111', "", true);
        },
        goMyGithub() {
            window.open('https://github.com/GGwujun/Dsx_wechat', "", true);
        },
        initParticleJS() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#E4E4E4"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 10,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#D1D1D1",
                        "opacity": 0.4,
                        "width": 1
                    },

                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 100,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },

                "retina_detect": true
            });
        }

    }
}
</script>
 
<style lang="css">
.splash {
    width: 100%;
    height: 100%;
    background: #ffffff;
    opacity: .9;
    position: relative;
    letter-spacing: .01em;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-family: Roboto, Noto Sans, Noto, sans-serif;
    box-sizing: border-box;
}

.splash .info {
    width: 100%;
    height: 100%;
}

.splash .info .info-content {
    width: 100%;
    position: absolute;
    top: 3rem;
}

.splash .info .info-content .project-name {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 1.5rem;
}

.splash .info .info-content .project-desc {
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 1.5rem;
}

.splash .info .info-content .project-desc p {
    margin: 12px auto;
}

.splash .info .info-content .logining {
    margin-top: 2.5rem;
    opacity: .9rem;
    opacity: 0;
}

.splash .info .info-content .logining.show {
    opacity: 1;
}

.splash .info .info-content .login {
    width: 60vw;
    height: 2rem;
    background-color: #000000;
    color: #ffffff;
    margin-left: 20vw;
    border-radius: 25px;
    border-style: none;
    margin-top: 0.5rem;
}

.splash .info .info-footer {
    width: 100%;
    height: 4rem;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    border-top: 1px solid #eeeeee;
    display: flex;
    flex-flow: row;
}

.splash .info .info-footer .header {
    width: 2.5rem;
    height: 3rem;
    margin: .8rem;
}

.splash .info .info-footer .avatar {
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .05);
}

.splash .info .info-footer .wanbo {
    display: flex;
    flex-flow: column;
}

.splash .info .info-footer .wanbo .name {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    margin-top: .5rem;
    font-weight: 500;
}

.splash .info .info-footer .wanbo .desc {
    margin: 0;
    padding: 0;
    flex: 1;
    font-size: .9rem;
    font-weight: 500;
    line-height: 35px;
}

.splash .info .info-footer .follower {
    width: 5rem;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    flex-flow: row;
}

.splash .info .info-footer .follower .avatar {
    width: 1.75rem;
    height: 1.75rem;
    margin-top: 1.3rem;
    margin-left: .5rem;
    border-radius: 50%;
}

#particles-js {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>