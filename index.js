Vue.component('list-item', {
    props:['item'],
    template: '<li>{{item.text}}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        loadTime: '網頁啟動於:' + new Date().toLocaleString(),
        showHint: true,
        dataList: [
            { text: 'A項目' },
            { text: 'B項目' },
            { text: 'C項目' }
        ]
    },
    methods: {
        switchShowHint: function () {
            this.showHint = !this.showHint
        }
    },
})