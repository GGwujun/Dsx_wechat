import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apart from  '@/components/Apart' // 新创建的组件
import Bpart from  '@/components/Bpart' // 新创建的组件



Vue.use(Router)

/* 创建一个组件 并指定组件的template属性，类似穿件一个 const为ES6语法，标识声明一个不可改变的变量 */
const Error = {template: '<p style="color: red">is Error!!</p>'}

export default new Router({
  routes: [
    {
        path: '/',
        name:Apart,
        component: Apart //将组件Apart作为路由‘/’下显示的组件
    },
    {
        path: '/bb',
        name:Bpart,
        component: Bpart 
    },
    {
        path: '*', // ‘*’代表在上面的路由中查找不到就默认显示‘*’路由的内容，必须放在最后，不然在‘*’之后的路由都不起作用
        component: Error
    }
  ]
})
