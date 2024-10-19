/**
 * Created by Muhammad Anas on 10.19.2024
 * App's entry point
 */
import '../src/scss/style.scss'
import {useData} from "../src/composables/data.js"
import {useLanguage} from "../src/composables/language.js"
import {useNavigation} from "../src/composables/navigation.js"
import {createAppRouter} from "../src/router/router.js"
import {createApp} from "vue"
import App from '../src/vue/core/App.vue'

const data = useData()

data.fetchEssentials().then(r => {
    const language = useLanguage()
    language.init(data.getSettings()['supportedLanguages'])

    const navigation = useNavigation()
    navigation.init(data.getSections(), data.getCategories())

    const router = createAppRouter()
    createApp(App).use(router).mount('#app')
})