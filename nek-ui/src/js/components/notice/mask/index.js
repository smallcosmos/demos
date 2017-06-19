/**
 * ------------------------------------------------------------
 * Mask     遮罩
 * @author  Cody
 * ------------------------------------------------------------
 */

const Component = require('../../../ui-base/component');
const template = require('./index.html');
const _ = require('../../../ui-base/_');

/**
 * @class Mask
 * @extend Component
 * @param {object}            [options.data]                      = 绑定属性
 * @param {string}            [options.data.content]              => 内容模板
 * @param {boolean}           [options.data.closable=true]       => 点击空白区域关闭
 * @param {string}            [options.data.class]                => 补充class
 */
const Mask = Component.extend({
    name: 'mask',
    template: template,
    /**
     * @protected
     */
    config: function() {
        _.extend(this.data, {
            closable: true
        });
        this.supr();
    },
    /**
     * @protected
     */
    init: function() {
        this.supr();

        // 如果不是内嵌组件，则嵌入到document.body中
        if(this.$root === this)
            this.$inject(document.body);
    },
    /**
     * @protected
     */
    _handleClick: function(e) {
        if (/m-mask/.test(e.target.className)) {
            if (this.data.closable) this.close();
        }
    },
    /**
     * @method close(data) 关闭遮罩
     * @public
     * @param  {object} data 额外数据
     * @return {void}
     */
    close: function(data) {
        /**
         * @event close 关闭遮罩时触发
         * @property {object} data 额外数据
         */
        this.$emit('close', {
            sender: this,
            data: data
        });
        this.destroy();
    }
});

module.exports = Mask;