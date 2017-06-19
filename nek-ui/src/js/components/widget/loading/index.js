/**
 * ------------------------------------------------------------
 * Loading   加载中
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */

'use strict';

var Component = require('../../../ui-base/component');
var template = require('./index.html');
var _ = require('../../../ui-base/_');

/**
 * @class Loading
 * @param {object}        [options.data]                    = 绑定属性
 * @param {boolean}       [options.data.static=false]       => 是否嵌入文档流
 * @param {boolean}       [options.data.disabled=false]     => 是否禁用
 * @param {boolean}       [options.data.visible=true]       => 是否显示
 * @param {string}        [options.data.class]              => 补充class
 */
var Loading = Component.extend({
    name: 'loading',
    template: template,
    /**
     * @protected
     */
    config: function() {
        _.extend(this.data, {
            'static': false,
            visible: false
        });
        this.supr();
    },
    /**
     * @protected
     */
    init: function() {
        this.supr();
        // 证明不是内嵌组件
        if(this.$root === this)
            this.$inject(document.body);
    },
    /**
     * @method show() 显示组件
     * @public
     * @return {void}
     */
    show: function() {
        if(this.data.disabled)
            return;

        this.data.visible = true;
        this.$update();
    },
    /**
     * @method show() 隐藏组件
     * @public
     * @return {void}
     */
    hide: function() {
        if(this.data.disabled)
            return;

        this.data.visible = false;
        this.$update();
    }
});

/**
 * 直接初始化一个实例
 * @type {Loading}
 */
var loading = new Loading();
Loading.loading = loading;

/**
 * @method show() 显示加载中
 * @static
 * @public
 * @return {void}
 */
Loading.show = function() {
    loading.show();
}

/**
 * @method hide() 隐藏加载中
 * @static
 * @public
 * @return {void}
 */
Loading.hide = function() {
    loading.hide();
}

module.exports = Loading;