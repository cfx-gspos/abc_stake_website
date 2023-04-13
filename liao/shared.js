
// global object patch ////////////////////////////////////////////////////////////////////////////

if (!window.console) {
    window.console = {
        log: function (s) {
        }
    };
}

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

if (!Number.prototype.toDateTime) {
    var replaces = {
        'yyyy': function (dt) {
            return dt.getFullYear().toString();
        },
        'yy': function (dt) {
            return (dt.getFullYear() % 100).toString();
        },
        'MM': function (dt) {
            var m = dt.getMonth() + 1;
            return m < 10 ? '0' + m : m.toString();
        },
        'M': function (dt) {
            var m = dt.getMonth() + 1;
            return m.toString();
        },
        'dd': function (dt) {
            var d = dt.getDate();
            return d < 10 ? '0' + d : d.toString();
        },
        'd': function (dt) {
            var d = dt.getDate();
            return d.toString();
        },
        'hh': function (dt) {
            var h = dt.getHours();
            return h < 10 ? '0' + h : h.toString();
        },
        'h': function (dt) {
            var h = dt.getHours();
            return h.toString();
        },
        'mm': function (dt) {
            var m = dt.getMinutes();
            return m < 10 ? '0' + m : m.toString();
        },
        'm': function (dt) {
            var m = dt.getMinutes();
            return m.toString();
        },
        'ss': function (dt) {
            var s = dt.getSeconds();
            return s < 10 ? '0' + s : s.toString();
        },
        's': function (dt) {
            var s = dt.getSeconds();
            return s.toString();
        },
        'a': function (dt) {
            var h = dt.getHours();
            return h < 12 ? 'AM' : 'PM';
        }
    };
    var token = /([a-zA-Z]+)/;
    Number.prototype.toDateTime = function (format) {
        var fmt = format || 'yyyy-MM-dd hh:mm:ss'
        var dt = new Date(this);
        var arr = fmt.split(token);
        for (var i = 0; i < arr.length; i++) {
            var s = arr[i];
            if (s && s in replaces) {
                arr[i] = replaces[s](dt);
            }
        }
        return arr.join('');
    };
    Number.prototype.toDate = function (format) {
        var fmt = format || 'yyyy-MM-dd'
        var dt = new Date(this);
        var arr = fmt.split(token);
        for (var i = 0; i < arr.length; i++) {
            var s = arr[i];
            if (s && s in replaces) {
                arr[i] = replaces[s](dt);
            }
        }
        return arr.join('');
    };
    Number.prototype.toTime = function (format) {
        var fmt = format || 'hh:mm'
        var dt = new Date(this);
        var arr = fmt.split(token);
        for (var i = 0; i < arr.length; i++) {
            var s = arr[i];
            if (s && s in replaces) {
                arr[i] = replaces[s](dt);
            }
        }
        return arr.join('');
    };
}

if (!Number.prototype.toSmartDate) {
    Number.prototype.toSmartDate = function () {
        var
            ts = this,
            m = moment(ts);
        if (Date.now() - ts < 259200000) {
            return m.fromNow();
        }
        return m.format('LLL');
    };
}

if (!Number.prototype.toFileSize) {
    Number.prototype.toFileSize = function () {
        var size = this;
        if (size < 1024)
            return size + ' bytes';
        size = size / 1024.0;
        if (size < 1024)
            return size.toFixed(2) + ' KB';
        size = size / 1024.0;
        if (size < 1024)
            return size.toFixed(2) + ' MB';
        size = size / 1024.0;
        return size.toFixed(2) + ' GB';
    };
}

// functions //////////////////////////////////////////////////////////////////////////////////////

function nextId() {
    if (!window.__nextId__) {
        window.__nextId__ = 0;
    }
    window.__nextId__++;
    return window.__nextId__;
}

// JS Template:

function Template(tpl) {
    var
        fn,
        match,
        code = ['var r=[];\nvar _html = function (str) { return str.replace(/&/g, \'&amp;\').replace(/"/g, \'&quot;\').replace(/\'/g, \'&#39;\').replace(/</g, \'&lt;\').replace(/>/g, \'&gt;\'); };'],
        re = /\{\s*([a-zA-Z\.\_0-9()]+)(\s*\|\s*raw)?\s*\}/m,
        addLine = function (text) {
            code.push('r.push(\'' + text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\');');
        };
    while (match = re.exec(tpl)) {
        if (match.index > 0) {
            addLine(tpl.slice(0, match.index));
        }
        if (match[2]) {
            code.push('r.push(String(this.' + match[1] + '));');
        }
        else {
            code.push('r.push(_html(String(this.' + match[1] + ')));');
        }
        tpl = tpl.substring(match.index + match[0].length);
    }
    addLine(tpl);
    code.push('return r.join(\'\');');
    fn = new Function(code.join('\n'));
    this.render = function (model) {
        return fn.apply(model);
    };
}

// global functions:

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function setCookie(key, value, maxAgeInSec) {
    var d = new Date(new Date().getTime() + maxAgeInSec * 1000);
    document.cookie = key + '=' + value + ';path=/;expires=' + d.toGMTString() + (location.protocol === 'https' ? ';secure' : '');
}

function deleteCookie(key) {
    var d = new Date(0);
    document.cookie = key + '=deleted;path=/;expires=' + d.toGMTString() + (location.protocol === 'https' ? ';secure' : '');
}

function getObjectURL(file) {
    var url = '';
    if (window.createObjectURL != undefined) // basic
        url = window.createObjectURL(file);
    else if (window.URL != undefined) // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    else if (window.webkitURL != undefined) // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    return url;
}

function encodeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// to human readable size:

function size2string(value) {
    if (value < 1024) {
        return value + ' bytes';
    }
    value = value / 1024;
    if (value < 1024) {
        return value.toFixed(2) + ' KB';
    }
    value = value / 1024;
    if (value < 1024) {
        return value.toFixed(2) + ' MB';
    }
    value = value / 1024;
    return value.toFixed(2) + ' GB';
}

var parseDateTime = (function () {
    var replaces = {
        'yyyy': {
            re: '(19[0-9][0-9]|20[0-9][0-9])',
            fn: function (dt, value) {
                dt.setFullYear(value);
            }
        },
        'MM': {
            re: '(0[1-9]|1[0-2]|[0-9])',
            fn: function (dt, value) {
                dt.setMonth(value - 1);
            }
        },
        'dd': {
            re: '(0[1-9]|1[0-9]|2[0-9]|3[0-1]|[0-9])',
            fn: function (dt, value) {
                dt.setDate(value);
            }
        },
        'hh': {
            re: '(0[0-9]|1[0-9]|2[0-3]|[0-9])',
            fn: function (dt, value) {
                dt.setHours(value);
            }
        },
        'mm': {
            re: '(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])',
            fn: function (dt, value) {
                dt.setMinutes(value);
            }
        },
        'ss': {
            re: '(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])',
            fn: function (dt, value) {
                dt.setSeconds(value);
            }
        }
    };
    var token = /([a-zA-Z]+)/;
    var normalChars = /[a-zA-Z0-9]/;
    var filter = function (arr, fn) {
        var r = [];
        for (var i = 0; i < arr.length; i++) {
            var x = arr[i];
            if (fn(x)) {
                r.push(x);
            }
        }
        return r;
    };
    return function (s, format) {
        if (!s) {
            return NaN;
        }
        var fmt = format || 'yyyy-MM-dd hh:mm:ss';
        var arr = filter(fmt.split(token), function (s) { return s !== ''; });
        var pp = '^';
        for (var i = 0; i < arr.length; i++) {
            var p = arr[i];
            if (p in replaces) {
                pp = pp + replaces[p].re;
            }
            else {
                for (var n = 0; n < p.length; n++) {
                    var ch = p.charAt(n);
                    pp = pp + '(' + (normalChars.test(ch) ? '' : '\\') + ch + ')';
                }
            }
        }
        pp = pp + '$';
        var m = new RegExp(pp).exec(s);
        if (m) {
            m.shift();
            var dt = new Date(0);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (p in replaces) {
                    replaces[p].fn(dt, parseInt(m[i]));
                }
            }
            return dt.getTime();
        }
        return NaN;
    };
})();

// parse query string as object:

function parseQueryString() {
    var
        q = location.search,
        r = {},
        i, pos, s, qs;
    if (q && q.charAt(0) === '?') {
        qs = q.substring(1).split('&');
        for (i = 0; i < qs.length; i++) {
            s = qs[i];
            pos = s.indexOf('=');
            if (pos <= 0) {
                continue;
            }
            r[s.substring(0, pos)] = decodeURIComponent(s.substring(pos + 1)).replace(/\+/g, ' ');
        }
    }
    return r;
}

function gotoPage(i) {
    var r = parseQueryString();
    r.page = i;
    location.assign('?' + $.param(r));
}

function refresh() {
    var r = parseQueryString();
    r.t = Date.now();
    location.assign('?' + $.param(r));
}

// ajax submit form:

function _httpJSON(method, url, data, callback) {
    var opt = {
        type: method,
        dataType: 'json'
    };
    if (method === 'GET') {
        opt.url = url + (url.indexOf('?') >= 0 ? '&' : '?') + data;
    }
    if (method === 'POST') {
        opt.url = url;
        opt.data = JSON.stringify(data || {});
        opt.contentType = 'application/json';
    }
    $.ajax(opt).done(function (r) {
        if (r && r.error) {
            return callback(r);
        }
        return callback(null, r);
    }).fail(function (jqXHR, textStatus) {
        if (jqXHR.responseJSON && jqXHR.responseJSON.error) {
            return callback(jqXHR.responseJSON);
        }
        var err = { 'error': 'http_bad_response', 'data': '' + jqXHR.status, 'message': '网络好像出问题了 (HTTP ' + jqXHR.status + ')' };
        return callback(err);
    });
}

function getJSON(url, data, callback) {
    if (arguments.length === 2) {
        callback = data;
        data = {};
    }
    if (typeof (data) === 'object') {
        var arr = [];
        $.each(data, function (k, v) {
            arr.push(k + '=' + encodeURIComponent(v));
        });
        data = arr.join('&');
    }
    _httpJSON('GET', url, data, callback);
}

function postJSON(url, data, callback) {
    if (arguments.length === 2) {
        callback = data;
        data = {};
    }
    _httpJSON('POST', url, data, callback);
}

function showError(err) {
    UIkit.notify({
        message: '<i class="uk-icon-exclamation-triangle"></i> ' + (err.message || err.error),
        status: 'danger',
        timeout: 0,
        pos: 'top-center'
    });
}

// jQuery document.onReady ////////////////////////////////////////////////////////////////////////

$(function () {
    $('.x-smart-datetime').each(function () {
        var
            t = parseInt($(this).attr('data') || '0'),
            dt = new Date(t),
            s = Math.floor(t / 1000),
            m = Math.floor(s / 60),
            h = Math.floor(m / 60),
            d = Math.floor(h / 24),
            s = 'a minute ago';
        if (d >= 1) {
            s = dt.toLocaleDateString() + ' ' + (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' + (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
        } else {
            s = moment(t).fromNow();
        }
        $(this).removeClass('x-smart-datetime').text(s);
    });
    $('.x-datetime').each(function () {
        var
            t = parseInt($(this).attr('data') || '0'),
            s = moment(t).format('L LTS');
        $(this).removeClass('x-datetime').text(s);
    });
    $('.x-date').each(function () {
        var
            t = parseInt($(this).attr('data') || '0'),
            s = moment(t).format('L');
        $(this).removeClass('x-date').text(s);
    });
    $('.x-time').each(function () {
        var
            t = parseInt($(this).attr('data') || '0'),
            s = moment(t).format('LTS');
        $(this).removeClass('x-time').text(s);
    });
});

// extends jQuery.form:

$(function () {
    $.fn.extend({
        showFormError: function (err) {
            return this.each(function () {
                var
                    $form = $(this),
                    $alert = $form && $form.find('.uk-alert-danger'),
                    fieldName = err && err.data;
                if (!$form.is('form')) {
                    console.error('Cannot call showFormError() on non-form object.');
                    return;
                }
                	$form.find('.uk-alert').removeClass('uk-hidden').hide();
                $form.find('input').removeClass('uk-form-danger');
                $form.find('select').removeClass('uk-form-danger');
                $form.find('textarea').removeClass('uk-form-danger');
                if ($alert.length === 0) {
                    console.warn('Cannot find .uk-alert-danger element.');
                    return;
                }
                if (err) {
                    $alert.text(err.message ? err.message : (err.error ? err.error : err)).removeClass('uk-hidden').show();
                    if (($alert.offset().top - 60) < $(window).scrollTop()) {
                        $('html,body').animate({ scrollTop: $alert.offset().top - 60 });
                    }
                    if (fieldName) {
                        $form.find('[name=' + fieldName + ']').addClass('uk-form-danger');
                    }
                }
                else {
                    $alert.addClass('uk-hidden').hide();
                    $form.find('.uk-form-danger').removeClass('uk-form-danger');
                }
            });
        },
        showFormSuccess: function (msg) {
            return this.each(function () {
                var
                    $form = $(this),
                    $alert = $form && $form.find('.uk-alert-success');
                if (!$form.is('form')) {
                    console.error('Cannot call showFormSuccess() on non-form object.');
                    return;
                }
                	$form.find('.uk-alert').removeClass('uk-hidden').hide();
                $form.find('input').removeClass('uk-form-danger');
                $form.find('select').removeClass('uk-form-danger');
                $form.find('textarea').removeClass('uk-form-danger');
                if ($alert.length === 0) {
                    console.warn('Cannot find .uk-alert-success element.');
                    return;
                }
                if (msg) {
                    $alert.text(msg).removeClass('uk-hidden').show();
                    if (($alert.offset().top - 60) < $(window).scrollTop()) {
                        $('html,body').animate({ scrollTop: $alert.offset().top - 60 });
                    }
                }
            });
        },
        showFormLoading: function (isLoading) {
            return this.each(function () {
                var
                    $form = $(this),
                    $submit = $form && $form.find('button[type=submit]'),
                    $buttons = $form && $form.find('button');
                $i = $submit && $submit.find('i'),
                    iconClass = $i && $i.attr('class');
                if (!$form.is('form')) {
                    console.error('Cannot call showFormLoading() on non-form object.');
                    return;
                }
                if (!iconClass || iconClass.indexOf('uk-icon') < 0) {
                    console.warn('Icon <i class="uk-icon-*>" not found.');
                    return;
                }
                if (isLoading) {
                    $buttons.attr('disabled', 'disabled');
                    $i && $i.addClass('uk-icon-spinner').addClass('uk-icon-spin');
                }
                else {
                    $buttons.removeAttr('disabled');
                    $i && $i.removeClass('uk-icon-spinner').removeClass('uk-icon-spin');
                }
            });
        },
        postJSON: function (url, data, callback) {
            if (arguments.length === 2) {
                callback = data;
                data = {};
            }
            return this.each(function () {
                var $form = $(this);
                $form.showFormError();
                $form.showFormLoading(true);
                _httpJSON('POST', url, data, function (err, r) {
                    if (err) {
                        $form.showFormError(err);
                        $form.showFormLoading(false);
                    }
                    if (callback) {
                        if (callback(err, r)) {
                            $form.showFormLoading(false);
                        }
                    }
                });
            });
        }
    });
});

// register custom filters for Vue:

if (typeof (Vue) !== 'undefined') {
    var createPageList = function (page) {
        if (page.totalPages <= 1) {
            return [1];
        }
        if (page.totalPages === 2) {
            return [1, 2];
        }
        var
            i,
            list = [1],
            start = Math.max(2, page.pageIndex - 4),
            end = Math.min(page.totalPages - 1, page.pageIndex + 4);
        if (start > 2) {
            list.push('...');
        }
        for (i = start; i <= end; i++) {
            list.push(i);
        }
        if (end < (page.totalPages - 1)) {
            list.push('...');
        }
        list.push(page.totalPages);
        return list;
    };
    Vue.http.options.timeout = 5000;
    Vue.filter('datetime', function (value) {
        var d = value;
        if (typeof (value) === 'number') {
            d = new Date(value);
        }
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
    });
    Vue.filter('size', size2string);
    Vue.component('pagination', {
        props: ['page'],
        data: function () {
            return {
                list: createPageList(this.page)
            }
        },
        template: '<div>' +
            '  <div v-if="page.total===0" class="x-empty-list"><p>No items found.</p></div>' +
            '  <ul v-if="page.totalItems > 0" class="uk-pagination">' +
            '    <li v-for="i in this.list" v-bind:class="{\'uk-active\':i===page.pageIndex}">' +
            '      <a v-if="i!==\'...\' && i!==page.pageIndex" v-bind:href="\'javascript:gotoPage(\' + i + \')\'">{{ i }}</a>' +
            '      <span v-if="i===\'...\' || i===page.pageIndex">{{ i }}</span>' +
            '    </li>' +
            '  </ul>' +
            '</div>'
    });
}
