var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        loadTime: '網頁啟動於:' + new Date().toLocaleString(),
        showHint: true,
        dataList: [
            { text: '第一個項目' },
            { text: '第二個項目' },
            { text: '第三個項目' }
        ]
    }
})