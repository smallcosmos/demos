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
    Number.prototype.mul = function(arg){   
        var m = 0;
        var s1 = this.toString();
        var s2 = arg.toString();   
        try{
            m += s1.split('.')[1].length;
        }catch(e){
            //
        }
        try{
            m += s2.split('.')[1].length;
        }catch(e){
            //
        } 
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10,m);  
    }
    //除法   
    Number.prototype.div = function(arg){   
        var t1=0;
        var t2=0;
        var r1,r2;   
        try{
            t1 = this.toString().split('.')[1].length;
        }catch(e){
            //
        }
        try{
            t2 = arg.toString().split('.')[1].length;
        }catch(e){
            //
        }
        with(Math){   
            r1 = Number(this.toString().replace('.', ''));
            r2 = Number(arg.toString().replace('.', ''));
            return (r1/r2) * pow(10, t2-t1);
        }
    }
    var component = Regular.extend({
        template: tpl,
        config: function(data){
            this.supr(data);
            extend(data, {
                nekService: '/backend/pageSelectInput/getListByKeys',
                current: 'multi.select',
                testSource: [{
                    id: 1,
                    name: "asd",
                    children: [{
                        id: 11,
                        name: "zxc"
                    }]
                }, {
                    id: 2,
                    name: "qwe"
                }],
                testValue: 2,
                condition: {
                    testValue: 2
                }
            });
        },
        init: function(){
            //
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

        sourceCompleted: function(event){
            console.log("source loader, event: ", event);
        }
    }).filter({
        klInputTrans: {
            get: function(value){
                if(!parseFloat(value)){
                    return value;
                }
                return Number(value).mul(100);
            },
            set: function(value){
                if(!parseFloat(value)){
                    return value;
                }
                return Number(value).div(100);
            }
        }
    });
    return component;
});
