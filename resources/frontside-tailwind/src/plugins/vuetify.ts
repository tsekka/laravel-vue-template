/*

This file is just for example, this project does not include vuetify. See
@see https://github.com/peshanghiwa/Vue3-Vite-Vuetify3-Typescript-Template

To enable vuetify:

1) Add vuetify to package.json
    dependencies:
        "vuetify": "^3.0.0-beta.0",
    devDependencies:
        "vue-cli-plugin-vuetify": "~2.4.8",


2) add 'vuetify' to compileOptions.types array in main.ts:
    eg. "types": ["vuetify", "@intlify/vite-plugin-vue-i18n/client", "node"],


3) Import vuetify in main.ts
    import { vuetify } from "./plugins/vuetify";
    const app = createApp(App);
    app.use(vuetify);

4) Uncomment everything below:
*/

/*
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#41b883',
          background: '#35495e',
          error: '#d63031',
          info: '#0984e3',
          secondary: '#fdcb6e',
          success: '#00cec9',
          surface: '#6c5ce7',
          warning: '#2d3436',
        },
        dark: false,
        variables: {},
      },
    },
  },
})
*/
