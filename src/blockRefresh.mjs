import _ from 'lodash';

/**
 * Use as the equalityFn argument to Redux useSelector() when the selected
 * value is an Object. https://react-redux.js.org/api/hooks#useselector
 *
 * Passed as a function, it will block component refresh if the current &
 * previous values are defined & pass _.isEqual, for example:
 *
 * const obj = useSelector((state) => state.slice.obj, blockRefresh);
 *
 * Deploy as an anonymousfunction to set options, for example:
 *
 * const obj = useSelector((state) => state.slice.obj, (a, b) => blockRefresh(a, b, options));
 *
 * @function blockRefresh
 * @param {*} a - Current useSelector result.
 * @param {*} b - Last useSelector result.
 * @param {Object} options - Options object with the following properties, all
 * optional:
 * - path <string>: A Lodash-style path into the selected object. If defined,
 *   the equality test will be restricted to that path. Useful when an object
 *   has an update timestamp.
 * - log <string>: If defined, function will console log a & b values with log
 *   value as label.
 * - refreshUndefined <bool> - If true, component will refresh when both
 *   comparison values are undefined.
 * @returns {boolean} If true, component will not refresh.
 */
const blockRefresh = (a, b, options = {}) => {
  const { path, log, refreshUndefined } = options;

  const aComp = path ? _.get(a, path) : a;
  const bComp = path ? _.get(b, path) : b;

  const result =
    (aComp !== undefined && bComp !== undefined && _.isEqual(aComp, bComp)) ||
    (aComp === undefined && bComp === undefined && !refreshUndefined);

  if (!result && log) console.log(log, { a: aComp, b: bComp });

  return result;
};

export default blockRefresh;
