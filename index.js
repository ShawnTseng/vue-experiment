Vue.component('my-header', {
    props: ['title'],
    template: `<div>
    <h1>{{title}}</h1>
    <button v-on:click="$emit('event-emit-test',2)">event emit</button>
</div>
    `
})

Vue.component('my-input', {
    props: ['value'],
    template: `
    <div>
    Hi~~~my input
    <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
    />
    </div>
    `
})

Vue.component('my-block', {
    template: `
    <div class="block">
        <slot></slot>
    </div>
    `
})

Vue.component('counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('function1', {
    template: `
    <div>        
        <counter></counter>
        <counter></counter>
    </div>`
})

Vue.component('function2', {
    template: `
    <my-block>
        <div :class=" ['name-block' , {'dark-theme' : isDark}]">
            <my-input v-model="fullName"></my-input>
            <div>First Name: {{firstName}}</div>
            <div>Last Name: {{lastName}}</div>
            <button @click="changeColor">Change background color</button>
        </div>
    </my-block>`,
    data: function () {
        return {
            firstName: 'Shawn',
            lastName: 'Tseng',
            isDark: false
        }
    },
    methods: {
        changeColor: function (e) {
            console.log(e);
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
        }
    },
})

Vue.component('function3', {
    template: `
    <div class="block age-block" :class="classObject">
        你幾歲?
        <div>Reply: {{reply}}</div>
        <input type="text" v-model="age">
    </div>
    `,
    data() {
        return {
            age: '',
            reply: ''
        }
    },
    computed: {
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
    rawHtml: '<span style="color:blue">Hi, how are you ?</span>',
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
    something: '',
    userName: '',
    remark: '',
    checked: false,
    checkedMemo: [],
    picked: '',
    selected: '',
    selected2: [],
    optionList: [
        { text: '請選擇', value: '' },
        { text: 'AAA', value: 'AAA' },
        { text: 'BBB', value: 'BBB' },
        { text: 'CCC', value: 'CCC' }
    ],
    selected3: '',
    catchClickCount: 0,
    myInputValue: 'Shawn Test',
    tabs: ['function1', 'function2', 'function3'],
    currentTab: 'function1'
}

var created = function () {
    console.log('this', this);
}

var app = new Vue({
    el: '#app',
    data: data,
    created: created,
    methods: {
        switchShowHint: function () {
            this.showHint = !this.showHint
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
        },
        test: function (e) {
            console.log(e);
        },
        onCatchCount: function (count) {
            this.catchClickCount += count
        }
    },
    computed: {
        reverseTitle: function () {
            return this.title.split('').reverse().join('')
        },
        currentTabComponent: function () {
            return this.currentTab.toLowerCase()
        }
    }
})