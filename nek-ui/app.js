define([
    'text!./app.html',
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
                nekService: '/backend/pageSelectInput/getListByKeys',
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

        // ui.button
        buttonClick: function(){
            alert("ok");
        },

        // regular
        selectChange: function(event){
            console.log(event, this.data.testValue);
        },

        // ui.textarea
        textareaValidate: function(){
            var form = this.$refs.textareaForm;
            var result = form.validate();
            if(!result.success){
                return false;
            }
        },

        // ui.form
        sourceCompleted: function(event){
            console.log("source loader");
        }
    });
    return component;
});
