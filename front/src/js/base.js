(function () {
    var seg = location.pathname.split('/').filter(Boolean);
    var prefix = (seg[0] && seg[0] !== 'books') ? '/' + seg[0] : '';
    window.__BASE = prefix + '/';
    var el = document.createElement('base');
    el.href = location.origin + window.__BASE;
    document.head.appendChild(el);
})();