var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World~'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: '現在時間是 ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'w3c javascript全部讀過'},
            {text: 'postman導入'},
            {text: 'IM部門的前端需求'}
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: '測試123'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data:{
        message: '訊息綁定測試'
    }
})

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data:{
        groceryList:[
            {id:0, text: '水果'},
            {id:1, text: '青菜'},
            {id:2, text: '飲料'}
        ]
    }
})