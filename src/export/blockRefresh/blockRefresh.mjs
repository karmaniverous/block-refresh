import _ from 'lodash';

/**
 * @callback EqalityFn
 * @param {any} [a]
 * @param {any} [b]
 * @returns {boolean}
 */

/**
 * Use as the equalityFn argument to Redux useSelector() when the selected
 * value is an Object. https://react-redux.js.org/api/hooks#useselector
 *
 * @function blockRefresh
 *
 * @param {any} [a] - Current useSelector result.
 * @param {any} [b] - Last useSelector result.
 * @param {Object} [options] - Options object.
 * @param {string} [options.log] - If defined, function will console log a & b values with log
 *   value as label when refresh is blocked.
 * @param {string} [options.path] - A Lodash-style path into the selected object. If defined,
 *   the equality test will be restricted to that path. Useful when an object
 *   has an update timestamp.
 * @param {EqalityFn} [options.predicate] - Returns
 *   true if refresh should be blocked. If predicate is populated, path &
 *   refreshUndefined are ignored.
 * @param {boolean} [options.refreshUndefined] - If true, component will refresh when both
 *   comparison values are undefined.
 *
 * @returns {boolean} If true, component will not refresh.
 *
 * @example
 * // Passed as a function, it will block component refresh if the current &
 * // previous values are defined & pass _.isEqual, for example:
 * const obj = useSelector((state) => state.slice.obj, blockRefresh);
 *
 * @example
 * // Deploy as an anonymousfunction to set options, for example:
 * const obj = useSelector((state) => state.slice.obj, (a, b) => blockRefresh(a, b, options));
 */
const blockRefresh = (a, b, options = {}) => {
  const { log, path, predicate, refreshUndefined } = options;

  let result;
  if (predicate) result = predicate(a, b);
  else {
    const aComp = path ? _.get(a, path) : a;
    const bComp = path ? _.get(b, path) : b;

    result =
      (aComp !== undefined && bComp !== undefined && _.isEqual(aComp, bComp)) ||
      (aComp === undefined && bComp === undefined && !refreshUndefined);
  }

  if (!result && log) console.log(log, { a, b });

  return result;
};

export default blockRefresh;
