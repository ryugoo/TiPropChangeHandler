/* jshint node:true, devel:true */
/* global Ti */
(function () {
    'use strict';

    var propchange, win, btn;

    // Add Ti.App.Properties change listener module
    propchange = require('net.imthinker.ti.propchangehandler');
    propchange.addEventListener('propchange', function (e) {
        var key = e.changekey,
            value = Ti.App.Properties.getString(key, 'Default Value');

        console.debug('Changed key => ', key);
        console.debug('Changed val => ', value);
    });

    // Compose UI
    win = Ti.UI.createWindow({
        title: 'Sample'
    });

    btn = Ti.UI.createButton({
        title: 'Debug'
    });

    // Event handler
    btn.addEventListener('click', function () {
        Ti.App.Properties.setString('MY_KEY', Date.now() + '');
    });

    win.add(btn);
    win.open();
}());
