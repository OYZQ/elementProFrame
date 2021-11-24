import Notice from '@/views/original/notice/notice.vue';
import Vue from "vue";
 
// 给Notice 添加一个创建组建实例的方法，可以动态编译自身模版并挂载
Notice.getInstance = props =>{
    // 创建一个Vue实例
    const instance = new Vue({
        render(h){ //渲染函数，用户渲染置顶模版为虚拟DOM
            // 
            return h(Notice,{ props })
        }
    }).$mount(); //执行挂载 ，若不置顶选择器，则模版将被渲染为文档之外的 元素
    // 必须使用原生的DOM操作 插入到文档中
    document.body.appendChild(instance.$el);
 
    //获取Notice实例
    const notice = instance.$children[0];
    return notice;
     
}
// 设计一个单例模式，全局范围唯一创建一个Notice实例
let msgInstance = null;
function getInstance() {
    msgInstance = msgInstance || Notice.getInstance();
    return msgInstance;
}
// 暴露接口
export default{
    info({duration=2,content= ''}){
        getInstance().add({
            content,
            duration
        });
    }
}

// 第二种方式
// import Vue from 'vue';

 
// 给Notice 添加一个创建组建实例的方法，可以动态编译自身模版并挂载
// function create(Component,props) {
//     // 创建一个Vue实例
//     const instance = new Vue({
//         render(h){ //渲染函数，用户渲染置顶模版为虚拟DOM
//             // 例 <BallAnim :el="el">
//             return h(Component,{ props })
//         }
//     }).$mount(); //执行挂载 ，若不置顶选择器，则模版将被渲染为文档之外的 元素
//     // 必须使用原生的DOM操作 插入到文档中
//     document.body.appendChild(instance.$el);
 
//     //获取Notice实例
//     const comp = instance.$children[0];
//     comp.remove = () => {
//         instance.$destory(); //销毁实例，释放内存
//     }
//     return comp;
     
// }
// 暴露接口
//export default create;
// 另外一种的调用方法

// 在你需要的组件中 引入 notice.js

// import create from '@/services/create';

// import BallAnim from '@/components/ballAnim.vue';  //
//创建实例，并调用
// const anim = create(BallAnim,{el});
// //组件内自己的方法
//     anim.start();
//     anim.$on('transtioned', ()=>{
//       anim.remove()
//     })
