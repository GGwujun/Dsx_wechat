<script>
import {mapState} from 'vuex'
export default {

	filters: {//将日期过滤为 hour:minutes
          time (date) {
              if (typeof date === 'string') {
                  date = new Date(date);
              }
              return date.getHours() + ':' + date.getMinutes();
         }
     },
     
//  directives: {
//      // 发送消息后滚动到底部
//      'scroll-bottom' () {
//          this.vm.$nextTick(() => {
//              this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
//          });
//      }
//  },
    computed: mapState({
    		user: (state) => {
    			return state.user
    		},
			session: (state) => {
				debugger;
				return state.sessions.find(session => session.id === state.currentSessionId)
			}
		})
};

</script>

<template>
<div class="message" v-scroll-bottom="session.messages">
    <ul v-if="session">
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

<style  scoped>
.message {
    padding: 10px 15px;
    overflow-y: scroll;
}
.message li {
    margin-bottom: 15px;
    list-style: none;
}
.message .time {
    margin: 7px 0;
    text-align: center;
}
.message .time > span {
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
    max-width: ~'calc(100% - 40px)';
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
       

</style>