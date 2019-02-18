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