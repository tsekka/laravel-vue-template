import { AnyObject } from '@/types'
import axios from 'axios'
import VueAxios from 'vue-axios'

const Axios: AnyObject = {
  init(app: AnyObject) {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        this.reportError(error)
        throw error
      }
    )

    /**
     * ! Not required with laravel-sanctum
     * if (csrfToken) {
     *     axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
     * }
     * axios.defaults.headers.common["Authorization"] = 'Bearer 1|QBwDJIi8uUHhhA7IwWMK6LY2LlkTTWs4vT6viwmL';
     */

    axios.defaults.withCredentials = true
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    // @ts-ignore
    const language: string | null = document
      .querySelector('html')
      .getAttribute('lang')

    if (language) axios.defaults.headers.common['Accept-Language'] = language
    axios.defaults.baseURL = '/api'
    app.use(VueAxios, axios)
  },

  /**
   * ReportError
   */
  reportError(error: AnyObject) {
    if (
      (error.response && error.response.status === 499) ||
      (error.response.status + '').charAt(0) === '5'
    ) {
      if (error.response.data.message === 'Server Error') return

      //   store.commit("SET", {
      //     errorSnackbarVisible: true,
      //     errorSnackbarContent: error.response.data.message,
      //   });
    }
  },
}

export default Axios
