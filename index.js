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