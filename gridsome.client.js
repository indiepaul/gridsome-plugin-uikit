import 'uikit/dist/css/uikit.min.css'

export default function (Vue, context) {
    if (process.isClient) {
        let UIkit = require('uikit/dist/js/uikit-core');
        let Icons = require('uikit/dist/js/uikit-icons');
        UIkit.use(Icons)
        UIkit.container = '#app'
        Vue.prototype.$uikit = UIkit
    }
}
