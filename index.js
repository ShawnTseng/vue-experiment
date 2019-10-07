Vue.component('my-tab', {
    data: function () {
        return {
            tab: {
                tabName: 'Default Tab Name',
                tabName2: 'Tab 2'
            }
        }
    },
    template: `
    <div>
    <br>
    <a style="border: 1px solid black;">
        <slot :tab="tab">預設內容</slot>
    </a>
    <br>
    <slot name="content"></slot>
    </div>
    `
})

Vue.component('my-checkbox', {
    inheritAttrs: false,
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        label: String,
        checked: Boolean
    },
    computed: {
        checkboxListener: function () {
            var vm = this;
            return Object.assign({},
                this.$listeners,
                {
                    click: function (event) {
                        vm.$emit('click', event.target.checked)
                    },
                    change: function (event) {
                        vm.$emit('change', event.target.checked)
                    },
                })
        }
    },
    template: `
    <label>
    {{label}}
        <input
            type="checkbox"
            v-bind="$attrs"
            v-bind:checked="checked"            
            v-on="checkboxListener"
        >
    </label>
    `
})

Vue.component('myInput', {
    props: {
        value: [String, Number],
        // value: {
        //     type: [String, Number],
        //     required: true,
        //     default: 'Shawn',
        //     // 自定義驗證
        //     validator: function (value) {
        //         // 這個值必須匹配下列字符串中的一個
        //         return ['success', 'warning', 'danger'].indexOf(value) !== -1
        //     }
        // },
        prefix: String,
        showPrefix: Boolean
    },
    template: `
    <div>
    <span v-if="showPrefix">
    Hi~~~my input
    </span>
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

Vue.component('function1', function (resolve, reject) {
    setTimeout(() => {
        resolve({
            template: `
            <div>        
                <counter></counter>
                <counter></counter>
            </div>`
        })
    }, 3000);
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
    currentTab: 'function1',
    YesOrNo: false,
    tabName: 'My Tab Name'
}

const FooterComponent = {
    template: '<div>copyright @ blabalbala</div>'
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
        },
        onClick: function () {
            alert('My checkbox was checked.');
            console.log('My checkbox was checked.');
        }
    },
    computed: {
        reverseTitle: function () {
            return this.title.split('').reverse().join('')
        },
        currentTabComponent: function () {
            return this.currentTab.toLowerCase()
        }
    },
    components: {
        'my-footer': FooterComponent
    }
})