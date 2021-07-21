import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    render(createElement){
        return createElement(App)
    }
})

/* Faz o mesmo que o código acima (Gerado automaticamente criando aplicação) */
/* new Vue({
    render: h => h(App),
  }).$mount('#app') */