import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'

import Card from '@/components/card';
import List from '@/components/list';
import Texts from '@/components/text';
import Message from '@/components/message';



Vue.use(Router)

/* 创建一个组件 并指定组件的template属性，类似穿件一个 const为ES6语法，标识声明一个不可改变的变量 */
const Error = {template: '<p style="color: red">is Error!!</p>'}

export default new Router({
  routes: [
    {
        path: '/',
        name:Login,
        component: Login 
    },
    {
        path: '/main',
        components: {
        	Card:Card,
        	List:List,
        	Texts:Texts,
        	Message,Message
        }
    },
    {
        path: '*', // ‘*’代表在上面的路由中查找不到就默认显示‘*’路由的内容，必须放在最后，不然在‘*’之后的路由都不起作用
        component: Error
    }
  ]
})
