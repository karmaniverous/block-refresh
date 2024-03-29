# block-refresh

Use as the equalityFn argument to Redux
[useSelector](https://react-redux.js.org/api/hooks#useselector) when the
selected value is an Object.

To install:

```bash
npm install @karmaniverous/block-refresh
```

To import:

```js
import { blockRefresh } from '@karmaniverous/block-refresh`;
```

See
[tests](https://github.com/karmaniverous/block-refresh/blob/main/lib/blockRefresh/blockRefresh.test.js)
for examples of usage!

# API Documentation

## Functions

<dl>
<dt><a href="#blockRefresh">blockRefresh([a], [b], [options])</a> ⇒ <code>boolean</code></dt>
<dd><p>Use as the equalityFn argument to Redux useSelector() when the selected
value is an Object. <a href="https://react-redux.js.org/api/hooks#useselector">https://react-redux.js.org/api/hooks#useselector</a></p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EqalityFn">EqalityFn</a> ⇒ <code>boolean</code></dt>
<dd><p>Return true if the two inputs should be considered equal.</p>
</dd>
</dl>

<a name="blockRefresh"></a>

## blockRefresh([a], [b], [options]) ⇒ <code>boolean</code>
Use as the equalityFn argument to Redux useSelector() when the selectedvalue is an Object. https://react-redux.js.org/api/hooks#useselector

**Kind**: global function  
**Returns**: <code>boolean</code> - If true, component will not refresh.  

| Param | Type | Description |
| --- | --- | --- |
| [a] | <code>any</code> | Current useSelector result. |
| [b] | <code>any</code> | Last useSelector result. |
| [options] | <code>Object</code> | Options object. |
| [options.log] | <code>string</code> | If defined, function will console log a & b values with log   value as label when refresh is blocked. |
| [options.path] | <code>string</code> | A Lodash-style path into the selected object. If defined,   the equality test will be restricted to that path. Useful when an object   has an update timestamp. |
| [options.predicate] | [<code>EqalityFn</code>](#EqalityFn) | Returns   true if refresh should be blocked. If predicate is populated, path &   refreshUndefined are ignored. |
| [options.refreshUndefined] | <code>boolean</code> | If true, component will refresh when both   comparison values are undefined. |

**Example**  
```js
// Passed as a function, it will block component refresh if the current &// previous values are defined & pass _.isEqual.const obj = useSelector((state) => state.slice.obj, blockRefresh);
```
**Example**  
```js
// Deploy as an anonymous function to set options.const obj = useSelector(  (state) => state.slice.obj,  (a, b) => blockRefresh(a, b, options));
```
<a name="EqalityFn"></a>

## EqalityFn ⇒ <code>boolean</code>
Return true if the two inputs should be considered equal.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| [a] | <code>any</code> | 
| [b] | <code>any</code> | 


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
