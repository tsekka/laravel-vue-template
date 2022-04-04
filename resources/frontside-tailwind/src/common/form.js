import Errors from "./errors";
import axios from "axios";
import get from 'lodash/get'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'

/***
 * Debounde kasutamine:
        <v-textarea
          v-model="form.notes"
          @input="form.debounce()"
        />
 */

const defaultConfig = {
    emptyValues: {},
    fillables: null,
    //   notify: null,
    resetFromSubmitRequest: true,
    timeout: 2000,
    method: "post",
    url: null,
    callback: null,
};

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} config
     * @param {object} config.emptyValues Clear() and reset() first get empty values from here and then from data.
     * @param {object} config.fillables Specify which fields to include in form. If null then all data values are fillable.
  //    * @param {bool} config.notify Explicitly disable notification. Requires context to use notify..
     * @param {number} config.timeout Set timeout for throttle or debounce.
     * @param {object} config.resetFromSubmitRequest Use this to reflect server side formattings back to frontent form.
     * @param {function} config.callback Will run after data submitted. Will receive response as prop.
  //    * @param {object} context Vue instance. Neccessary to notify.
     */
    constructor(allData, config/* , context = null */) {
        this.timeout = 2000;

        this.loading = false;
        this.config = { ...defaultConfig, ...config };
        let data = {};

        for (let field in allData) {
            if (!Array.isArray(this.config.fillables) || this.config.fillables.includes(field)) {
                this[field] = allData[field];
                data[field] = allData[field];
            }
        }

        this.originalData = data;

        this.errors = new Errors();

        // if (context) {
        //   this.notify = config.notify === false ? false : true;
        //   this.context = context;
        // }

        this.debounce = debounce(this.sendRequest, this.config.timeout);
        this.throttle = throttle(this.sendRequest, this.config.timeout);

        /**
         * Response will be filled when posted
         */
        this.response = null
        this.success = null
        this.successMessage = null
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    /**
     * Reset the errors.
     */
    clearErrors() {
        this.errors.clear();
    }

    resetFromSubmitResponse(response) {
        if (!this.config.resetFromSubmitRequest) return;

        const responseItem = get(response, ["data", "item"], null);
        if (!responseItem) return;

        for (let [key, value] of Object.entries(responseItem)) {
            this[key] = value;
        }
    }

    /**
     * Reset the form fields.
     */
    reset() {
        Object.keys(this.originalData).forEach(field => {
            this[field] = get(this.config.emptyValues, field, get(this.orginalData, field, ""));
        });

        this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
    post(url = null, baseUrl = null, extras = null) {
        return this.submit("post", url, baseUrl, extras);
    }

    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
    put(url = null, baseUrl = null) {
        return this.submit("put", url, baseUrl);
    }

    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
    delete(url = null, baseUrl = null) {
        return this.submit("delete", url, baseUrl);
    }

    /**
     * Submit the form.
     *
     * @param {string} method
     * @param {string} url
     */
    submit(method = null, url = null, baseUrl = null, extras = null) {
        if (this.throttle) this.throttle.cancel();
        if (this.debounce) this.debounce.cancel();
        return this.sendRequest(method, url, baseUrl, extras);
    }

    sendRequest(method = null, url = null, baseUrl = null, extras = null) {
        this.resetOldSubmitResults()
        this.loading = true;
        return new Promise((resolve, reject) => {
            let request = {
                method: method ? method : this.config.method,
                url: url ? url : this.config.url,
                data: this.data(),
            };

            if (baseUrl) {
                request.baseURL = baseUrl;
            }

            if (extras) {
                request = { ...extras, ...request };
            }

            axios(request)
                .then(response => {
                    this.handleRequestSuccess(response);
                    resolve(response);
                })
                .catch(error => {
                    this.handleRequestError(error);
                    reject(error);
                })
                .then(() => {
                    this.loading = false;
                });
        });
    }

    resetOldSubmitResults() {
        this.response = null;
        this.success = null
        this.successMessage = null;
        this.errors.clear();
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    handleRequestSuccess(response) {
        // this.errors.clear();
        // if (this.notify) {
        //   new Notify(this.context, response);
        // }


        this.resetFromSubmitResponse(response);

        this.success = true;
        this.response = response;
        this.successMessage = get(response, "data.message", false);

        if (this.config.callback) {
            this.config.callback(response);
        }
    }

    handleRequestError(error) {
        let validationErrors = get(error, "response.data.errors", false);
        if (validationErrors) {
            this.onValidationErrors(validationErrors);
            console.warn("Form submission errors: ", validationErrors);
        }

        let errorMessage = get(error, "response.data.message", false);

        if (errorMessage) {
            this.onErrorMessage(errorMessage);
            console.warn("Error message: ", errorMessage);
        }

        this.success = false;

        // if (!validationErrors && this.context) {
        //   this.context.$catchApiErrors(error);
        // }
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onValidationErrors(errors) {
        this.errors.recordValidationErrors(errors);
    }

    /**
     * Handle error message..
     *
     * @param {object} errors
     */
    onErrorMessage(message) {
        this.errors.recordErrorMessage(message);
    }

    /**
     * Helper to get error text with less code.
     * @param {string} field
     */
    error(field) {
        return this.errors.get(field);
    }

    /**
     * Helper to get error state with less code.
     * @param {string} field
     */
    state(field) {
        return this.errors.state(field);
    }
}
export default Form;
