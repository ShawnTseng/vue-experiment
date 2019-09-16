Vue.component('list-item', {
    props: ['item'],
    template: '<li>{{item.text}}</li>'
})

var data = {
    firstName: 'Shawn',
    lastName: 'Tseng',
    age: '',
    reply: '',
    title: 'Hello World',
    loadTime: '網頁啟動於:' + new Date().toLocaleString(),
    showHint: true,
    dataList: [
        { text: 'A項目' },
        { text: 'B項目' },
        { text: 'C項目' }
    ],
    rawHtml: '<span style="color:blue">Hi, how are you ?</span>',
    isDark: false
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
        },
        reverseTitle: function () {
            return this.title.split('').reverse().join('')
        },
        changeColor: function () {
            this.isDark = !this.isDark
        }
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            set: function (newValue) {
                var name = newValue.split(' ');
                this.firstName = name[0];
                this.lastName = name[name.length - 1];
            }
        },
        reverseTitle: function () {
            return this.title.split('').reverse().join('')
        },
        classObject: function () {
            return { 'dark-theme': this.isDark }
        }
    },
    watch: {
        age: function (oldValue) {
            this.reply = '你的年紀:' + oldValue;
        }
    }
})