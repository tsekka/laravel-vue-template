/* eslint-disable no-prototype-builtins */
class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {};
        this.message = "";
        // this.state = null
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     * @return null / boolean
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    /**
     * Return state of error.
     *
     * @param {string} field
     * @return null / boolean
     */
    state(field) {
        return this.has(field) ? false : null;
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
    get(field) {
        let errors = this.errors[field];
        if (errors) {
            let message = "";
            errors.forEach((element, i) => {
                if (i > 0) message += " ";
                message += this.capitalize(element);
            });
            return message;
        }
    }

    /**
     * Retrieve the error message.
     *
     * @param {string} field
     */
    getMessage() {
        if (this.message) {
            return this.capitalize(this.message);
        }
        return null;
    }

    /**
     * Capitalize the message.
     *
     * @param {sting} message
     */
    capitalize(message) {
        if (typeof message !== "string") return "";
        return message.charAt(0).toUpperCase() + message.slice(1);
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    recordValidationErrors(errors) {
        this.errors = errors;
    }

    /**
     * Record the new error message.
     *
     * @param {object} message
     */
    recordErrorMessage(message) {
        this.message = message;
    }

    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        this.message = null

        if (field) {
            delete this.errors[field];
            return;
        }

        this.errors = {};
    }
}
export default Errors;
