/**
 * ------------------------------------------------------------
 * Menu      两级菜单
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */

'use strict';

var Component = require('../../../ui-base/component');
var template = require('./index.html');
var Menu = require('../menu/index.js');

/**
 * @class Sidebar
 * @extend Component
 * @param {object}        [options.data]                          = 绑定属性
 * @param {string}        [options.data.class]                    => 补充class
 * @param {array}         [options.data.menus]                    => 菜单数组
 * @param {string}        [options.data.top='60px']               => 菜单style top的值
 * @param {boolean}       [options.data.active=true]              => 默认是否收起
 * @param {string}        [options.data.bodyEl='']                => 主内容区body元素的id,当菜单收起时,拉伸bodyEl
 * @param {boolean}       [options.data.uniqueOpened=true]        => 是否只保持打开一个菜单
 * @param {string}        [options.data.titleKey=title]           => 一级菜单的字段key名
 * @param {string}        [options.data.urlKey="url"]             => 菜单结构中的链接key名
 * @param {string}        [options.data.pageKey="title"]          => 二级菜单的字段key名
 * @param {string}        [options.data.childrenKey="children"]   => 一级菜单对象下二级菜单数组的key名
 */
var Sidebar = Component.extend({
  name: 'ui.sidebar',
  template: template,
  /**
   * @protected
   */
  config: function() {
    this.defaults({
      class: '',
      uniqueOpened: true,
      menus: [],
      titleKey: 'title',
      urlKey: 'url',
      pageKey: 'title',
      childrenKey: 'children',
      top: '60px',
      active: true,
      bodyEl: '',
    });

    this.initMenu();
    this.supr();
  },
  initMenu: function() {
    var url = location.href;
    var menus = this.data.menus;
    var childrenKey = this.data.childrenKey;
    var urlKey = this.data.urlKey;
    menus.forEach(function(menu) {
      var children = menu[childrenKey];
      var shouldOpen = false;
      if (children && children.length) {
        children.forEach(function(page) {
          if (url == page[urlKey]) {
            page.open = true;
            shouldOpen = true;
          }
        });
      }
      menu.open = shouldOpen || menu.open;
    });
  },
  initBodyEl: function() {
    if (this.data.bodyEl) {
      this.data.$bodyEl = document.getElementById(this.data.bodyEl);
      if (this.data.$bodyEl) {
        this.data.$bodyEl.style.transition = 'left .3s';
      }
    }
  },
  toggle: function() {
    this.initBodyEl();

    this.data.active = !this.data.active;
    if (this.data.$bodyEl) {
      this.data.$bodyEl.style.left = this.data.active? '180px' : '0';
    }
  },
});

Sidebar.directive('top', function(ele, value) {
  this.$watch(value, function(top) {
    ele.style.top = top;
  });
});

module.exports = Sidebar;