Vue.component('my-header', {
    props: ['title'],
    template: `<div>
    <h1>{{title}}</h1>
    <button v-on:click="$emit('event-emit-test',2)">event emit</button>
</div>
    `
})