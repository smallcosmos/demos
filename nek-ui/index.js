define([
    'text!./template/panel.html'
], function(tpl){
    var component = Regular.extend({
        template: tpl
    });
    return component;
});
