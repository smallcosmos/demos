define([
    'text!./app.html'
], function(tpl){
    function extend(o1, o2 ,override){
        for(var i in o2){
            if(o1[i] == undefined || override){
                o1[i] = o2[i]
            }
        }
        return o1;
    }
    var component = Regular.extend({
        template: tpl,
        config: function(data){
            this.supr(data);
            extend(data, {
                current: 'panel',
                testSource: [{
                    id: 1,
                    name: "asd"
                }, {
                    id: 2,
                    name: "qwe"
                }],
                testValue: 2
            });
        },
        goto: function(page){
            this.data.current = page;
            this.$update();
        },
        buttonClick: function(){
            alert("ok");
        },
        selectChange: function(event){
            console.log(event, this.data.testValue);
        }
    });
    return component;
});
