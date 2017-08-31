/**
 * 动态设置缩放比例
 * @type {HTMLDocument}
 */
var doc = window.document;
var docEl = doc.documentElement;
var metaEl = doc.querySelector('meta[name="viewport"]');

var designWidth = 720;
var clientWidth = window.screen.width;
var scale = clientWidth/designWidth;

if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'width=' + designWidth + ',initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no');
    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl);
    } else {
        var wrap = doc.createElement('div');
        wrap.appendChild(metaEl);
        doc.write(wrap.innerHTML);
    }
}
