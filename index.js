Vue.component('list-item', {
    props: ['item'],
    template: '<li>{{item.text}}</li>'
})

var data = {
    title: 'Hello World',
    loadTime: '網頁啟動於:' + new Date().toLocaleString(),
    showHint: true,
    dataList: [
        { text: 'A項目' },
        { text: 'B項目' },
        { text: 'C項目' }
    ],
    rawHtml: '<span style="color:blue">Hi, how are you ?</span>'
}

var crated = function () {
    console.log('this', this);
}

var app = new Vue({
    el: '#app',
    data: data,
    created: crated,
    methods: {
        switchShowHint: function () {
            this.showHint = !this.showHint
        }
    },
    computed: {
        reverseTitle: function () {
            return this.title.split('').reverse().join('')
        }
    },
})