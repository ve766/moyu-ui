/**
 * An object of the form {field: 'foo', param: 'bar', default: 'yes'}.
 * This would mean that the Vue Component gets a computed prop "this.foo" and it is synced as a query parameter 'bar'
 * So for example if this.foo = 'yes', then ?bar=yes in the URL.
 *
 * @typedef {Array} QueryField
 * @property {String} field - The property on the Vue component, which can be used in the template and other computed
 * @property {String} param - The corresponding query parameter
 * @property {String} default - The default value
 */

/**
 * Creates internal values for the QueryField
 *
 * @param fields {Array[QueryField]}
 * @returns {Object}
 */
export const mapQueryFieldsToData = (fields) =>
  fields.reduce((acc, { field, param }) => {
    acc[`$${field}_${param}`] = null;
    return acc;
  }, {});

/**
 * This is where the magic happens. This syncs an internal value with a query parameter.
 *
 * Imagine the config [{field: 'foo', param: 'bar', default: 'yes'}], this would utilize an internal field:
 * `$foo_bar` to store the state. The value can be accessed via `this.foo` and it is synced to the URL under `bar`.
 * Initially the state of the internal value is null, so we fall back on the parameter `bar`, if that is also falsey,
 * we fall back on the default value.
 *
 * ## Updating the Query Params
 *
 * We are not using Vue Routers `.push/.replace`, because if we do the input fields loose focus.
 * Therefore the URL is updated with `window.history.pushState`. If the value matches the default
 * value, the query paraemeter isn't set
 *
 * @param fields {Array[QueryField]}
 * @returns {Object}
 */
export const mapQueryFieldsToComputed = (fields) =>
  // eslint-disable-next-line max-params
  fields.reduce((acc, { field, param, default: defaultValue }, idx, array) => {
    acc[field] = {
      get() {
        return this.$data[`$${field}_${param}`] ?? (this.$route?.query?.[param] || defaultValue);
      },
      set(val) {
        this.$data[`$${field}_${param}`] = val;

        const query = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const queryField of array) {
          if (this[queryField.field] !== queryField.default) {
            query[queryField.param] = this[queryField.field];
          }
        }

        const url = new URL(this.$route.path, window.location);
        url.search = new URLSearchParams(query).toString();
        window.history.pushState({}, '', url);
      },
    };
    return acc;
  }, {});
