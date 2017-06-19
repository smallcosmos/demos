/**
 * ------------------------------------------------------------
 * Tabs       选项卡
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */

'use strict';

var Component = require('../../../ui-base/component');
var template = require('./index.html');
var _ = require('../../../ui-base/_');

/**
 * @class Tabs
 * @extend Component
 * @param {object}        [options.data]                      = 绑定属性
 * @param {object}        [options.data.selected=null]        <=> 当前选择卡
 * @param {string}        [options.data.titleTemplate=null]   @=> 标题模板
 * @param {boolean}       [options.data.readonly=false]       => 是否只读
 * @param {boolean}       [options.data.disabled=false]       => 是否禁用
 * @param {boolean}       [options.data.visible=true]         => 是否显示
 * @param {string}        [options.data.class]                => 补充class
 */
var Tabs = Component.extend({
    name: 'tabs',
    template: template,
    /**
     * @protected
     */
    config: function() {
        _.extend(this.data, {
            tabs: [],
            selected: undefined,
            titleTemplate: null
        });
        this.supr();

        this.$watch('selected', function(newValue, oldValue) {
            /**
             * @event change 选项卡改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 改变后的选项卡
             */
            this.$emit('change', {
                sender: this,
                selected: newValue
            });
        });
    },
    /**
     * @method select(item) 选择某一项
     * @public
     * @param  {object} item 选择项
     * @return {void}
     */
    select: function(item) {
        if(this.data.readonly || this.data.disabled || item.data.disabled)
            return;

        this.data.selected = item;
        /**
         * @event select 选择某一项时触发
         * @property {object} sender 事件发送对象
         * @property {object} selected 当前选择卡
         */
        this.$emit('select', {
            sender: this,
            selected: item
        });
    }
});

var Tab = Component.extend({
    name: 'tab',
    template: '<div r-hide={this.$outer.data.selected !== this}>{#inc this.$body}</div>',
    /**
     * @protected
     */
    config: function() {
        _.extend(this.data, {
            title: ''
        });
        this.supr();

        if(this.$outer)
            this.$outer.data.tabs.push(this);

        if(!this.$outer.data.selected)
            this.$outer.data.selected = this;
    }
});

module.exports = Tabs;