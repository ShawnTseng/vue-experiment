Vue.component('list-item', {
    template: '<li>第N個項目</li>'
})

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
    },
    methods: {
        switchShowHint: function () {
            this.showHint = !this.showHint
        }
    },
})