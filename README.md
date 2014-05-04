# TiPropChangeHandler

Detect changed `Ti.App.Properties` for Android.

## Usage

See `example/app.js`

## Example

```javascript
var propchange = require('net.imthinker.ti.propchangehandler');
propchange.addEventListener('propchange', function (e) {
    var key = e.changekey,
        value = Ti.App.Properties.getString(key, 'Default Value');

    console.debug('Changed key => ', key);
    console.debug('Changed val => ', value);
});
```

## License

See `LICENSE`