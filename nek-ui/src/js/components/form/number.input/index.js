/**
 * ------------------------------------------------------------
 * NumberInput 输入扩展
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */
var Input = require('../ui.input');
var template = require('./index.html');
var _ = require('../../../ui-base/_');

/**
 * @class NumberInput
 * @extend Input
 * @param {object}        [options.data]                  = 绑定属性
 * @param {string}        [options.data.value=0]          <=> 文本框的值
 * @param {string}        [options.data.state]            <=> 文本框的状态
 * @param {number}        [options.data.min]              => 最小值
 * @param {number}        [options.data.max]              => 最大值
 * @param {boolean}       [options.data.hideTip=false]    => 是否显示校验错误信息
 * @param {boolean}       [options.data.autofocus=false]  => 是否自动获得焦点
 * @param {boolean}       [options.data.readonly=false]   => 是否只读
 * @param {boolean}       [options.data.disabled=false]   => 是否禁用
 * @param {boolean}       [options.data.visible=true]     => 是否显示
 * @param {string}        [options.data.class]            => 补充class
 */
var NumberInput = Input.extend({
    name: 'number.input',
    template: template,
    /**
     * @protected
     */
    config: function() {
        _.extend(this.data, {
            value: 0,
            // @inherited state: '',
            // @inherited placeholder: '',
            hideTip: false,
            min: undefined,
            max: undefined,
            autofocus: false
        });
        this.supr();

        this.$watch('value', function(newValue, oldValue) {
            // 字符类型自动转为数字类型
            if(typeof newValue === 'string')
                return this.data.value = +newValue;

            // 如果超出数值范围，则设置为范围边界的数值
            var isOutOfRange = this.isOutOfRange(newValue);
            if(isOutOfRange !== false)
                return this.data.value = isOutOfRange;

            /**
             * @event change 数值改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} value 改变后的数值
             */
            this.$emit('change', {
                sender: this,
                value: newValue
            });
        });

        this.$watch(['min', 'max'], function(min, max) {
            if(!isNaN(min) && !isNaN(max) && min - max > 0)
                throw new NumberInput.NumberRangeError(min, max);

            // 如果超出数值范围，则设置为范围边界的数值
            var isOutOfRange = this.isOutOfRange(this.data.value);
            if(isOutOfRange !== false)
                return this.data.value = isOutOfRange;
        });
    },
    /**
     * @method add(value) 调整数值
     * @public
     * @param  {number} [value=0] 加/减的值
     * @return {number} value 计算后的值
     */
    add: function(value) {
        if(this.data.readonly || this.data.disabled || !value)
            return;

        if(isNaN(value))
            throw new TypeError(value + ' is not a number!');

        return this.data.value += value;
    },
    /**
     * @method isOutOfRange(value) 是否超出规定的数值范围
     * @public
     * @param {number} value 待测的值
     * @return {boolean|number} number 如果没有超出数值范围，则返回false；如果超出数值范围，则返回范围边界的数值
     */
    isOutOfRange: function(value) {
        var min = +this.data.min;
        var max = +this.data.max;

        // min && value < min && min，先判断是否为空，再判断是否超出数值范围，如果超出则返回范围边界的数值
        if(!isNaN(min) && value < min)
            return min;
        else if(!isNaN(max) && value > max)
            return max;
        else
            return false;
    }
}).filter({
    number: {
        get: function(value) {
            value = '' + (value || 0);
            if(this.data.format)
                return this.data.format.replace(new RegExp('\\d{0,' + value.length + '}$'), value);
            return value;
        },
        set: function(value) {
            // return (value.replace(/[^0-9\-\.]/g, ''));
            return +value;
            // return +(value.replace(/[^\d\.\-]/g, '')) || 0;
        }
    }
});

var NumberRangeError = function(min, max) {
    this.type = 'NumberRangeError';
    this.message = 'Wrong Number Range where `min` is ' + min + ' and `max` is ' + max + '!';
}
NumberRangeError.prototype = Object.create(RangeError.prototype);
NumberInput.NumberRangeError = NumberRangeError.prototype.constructor = NumberRangeError;

module.exports = NumberInput;