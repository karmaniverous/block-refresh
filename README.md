# blockRefresh

```
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
 * - log <string>: If defined, function will console log a & b values with log
 *   value as label when refresh is blocked.
 * - path <string>: A Lodash-style path into the selected object. If defined,
 *   the equality test will be restricted to that path. Useful when an object
 *   has an update timestamp.
 * - predicate <func>: Predicate function takes (a, b) as arguments & returns
 *   true if refresh should be blocked. If predicate is populated, path &
 *   refreshUndefined are ignored.
 * - refreshUndefined <bool> - If true, component will refresh when both
 *   comparison values are undefined.
 * @returns {boolean} If true, component will not refresh.
 */
```

## Collaborators

### `release-it` Configuration

This project includes [release-it](https://github.com/release-it/release-it)
support that requires these final configurations in your local repo:

1. Create a copy of `.env.development.local.template` and name it
   `.env.development.local`

1. Create a GitHub
   [personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
   and add it as the value of `GITHUB_TOKEN` in `.env.development.local`.

You can now build build project and publish a release to GitHub and NPM with
these commands:

```
npm run build
npm run release
```
