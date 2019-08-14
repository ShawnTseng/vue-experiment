var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        loadTime: '網頁啟動於:' + new Date().toLocaleString()
    }
})