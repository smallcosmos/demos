/**
 * 表单字段生成组件
 * author yuqijun(yuqijun@corp.netease.com)
 */

NEJ.define([
    'base/util'
], function(_u, _p) {
    // common filter
    _p.format = function(date, format) {
        if (!date || date/1 < 0) {
            return ''; 
        }
        return _u._$format(date, format || 'yyyy-MM-dd');
    };

    _p.escape = _u._$escape;
    _p.unescape = _u._$unescape;

    /**
     * by hzwuyuedong
     * 字符串截取， 中英文都算一个len
     */
    _p.formatTime = {
        set: function(value){
            return (value && value > 0)?new Date(value).getTime():'';
        },
        get: function(value){
            return value? _u._$format(value, 'yyyy-MM-dd HH:mm:ss'):null;
        }
    };

    _p.formatDate = {
        set: function(value) {
            return (value && value>0) ? new Date(value).getTime() : '';
        },
        get: function(value) {
            return value ? _u._$format(value, 'yyyy-MM-dd'):null;
        }
    };
    _p.cutstr = function(str, len) {
        var temp,
            icount = 0,
            patrn = /[^\x00-\xff]/,
            strre = '';
        for (var i = 0; i < str.length; i++) {
            if (icount < len - 1) {
                temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                    icount = icount + 1;
                } else {
                    icount = icount + 2;
                }
                strre += temp;
            } else {
                break;
            }
        }
        return strre + '...';
    };


    _p.concatObjValue = function(_object, _str) {
        var _join = [];
        _u._$forIn(_object, function(_item) {
            _join.push(_item);
        });
        return _join.join(_str);
    };

    /**
     * by hzwuyuedong
     * 浮点数值保留指定位数小数点
     */
    _p.fixed = function(_data, _len) {
        // _data == null 判断_data是undefined 或者 null
        if (_data == null) {
            return ''; 
        }
        return _u._$fixed(_data, _len);
    };
    _p.formatFloat = function(_data) {
        if (_data == null) {
            return ''; 
        }
        return parseFloat(_data.toFixed(4));
    };
    _p.percent = function(_data) {
        return parseFloat(_data) * 100 + '%';
    };

    _p.importType = function(_type) {
        var map = {0: '直邮', 1: '保税', 2: '海淘', 3: '一般贸易'};
        return map[_type];
    };

    // 格式化数字， 加入千分位，保留小数后1/2位
    _p.number = _p.currencyFormat = function(_val, _keep) {
        if (isNaN(_val) || _val == null || _val == undefined) {
            return ''; 
        }

        if (isNaN(_keep)) {
            _keep = 2;
        }

        _val = _val/1;
        _val = _val.toFixed(_keep) + ''; // 保留两位小数

        _val = _val.replace(/^(\d+)((\.\d+)?)$/, function(v1, v2, v3) {
            return v2.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + (v3 || '.00');
        });
        return _val;
    };

    _p.integer = function(_val) {
        if (isNaN(_val) || _val == null || _val == undefined) {
            return ''; 
        }
        return parseInt(_val);
    };

    if(window.NEKUI){
        NEKUI.KLTable.filter(_p);
    }

    return _p;
});