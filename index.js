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
    isDark: false,
    fontSize: 30,
    styleObject: { fontSize: '30px' },
    items: [
        {
            id: 1,
            message: 'message 1'
        },
        {
            id: 2,
            message: 'message 2'
        }
    ],
    object: {
        name: 'Shawn',
        sex: 'male',
        phone: '0912345678'
    },
    total: 0,
    something: ''
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
        changeColor: function (e) {
            console.log(e);
            this.isDark = !this.isDark
        },
        printEvent: function (e) {
            console.log(e);
            alert(e);
        },
        doSomething: function (message) {
            alert(message);
        },
        doSomething2: function (message, e) {
            alert(message + e);
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