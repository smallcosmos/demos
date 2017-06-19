/**
 * ------------------------------------------------------------
 * Menu      两级菜单
 * @author   sensen(rainforest92@126.com)
 * ------------------------------------------------------------
 */

'use strict';

var Component = require('../../../ui-base/component');
var template = require('./index.html');

/**
 * @class Menu
 * @extend Component
 * @param {object}        [options.data]                          = 绑定属性
 * @param {string}        [options.data.class]                    => 补充class
 * @param {boolean}       [options.data.uniqueOpened]             => 是否只保持打开一个菜单
 */
var Menu = Component.extend({
  name: 'ui.menu',
  template: template,
  openedMenus: [],
  currentItem: null,
  /**
   * @protected
   */
  config: function() {
    this.defaults({
      class: '',
      uniqueOpened: true,
    });
    this.supr();
  },
  init: function() {
    this.$on('submenu-click', function(submenu) {
      var isOpened = this.openedMenus.indexOf(submenu) !== -1;
      if (isOpened) {
        this.closeMenu(submenu);
        this.$emit('close', submenu);
      } else {
        this.openMenu(submenu);
        this.$emit('open', submenu);
      }
    });

    this.$on('menuitem-click', function(menuitem) {
      this.currentItem = menuitem;
    });
  },
  closeMenu: function(submenu) {
    this.openedMenus.splice(this.openedMenus.indexOf(submenu), 1);
  },
  openMenu: function(submenu) {
    var openedMenus = this.openedMenus;
    if (openedMenus.indexOf(submenu) !== -1) return;
    if (this.data.uniqueOpened) {
      this.openedMenus = [].concat(submenu);
    } else {
      this.openedMenus.push(submenu);
    }
  },
});

module.exports = Menu;