define([
    './rule.js',
    './filter.js',
    'text!./app.html',
    'text!./template/_nav.html',
    'text!./template/func.validate.html'
], function(Rules, Filter, appTpl, navTpl, funcValidateTpl){
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
    var optTpl = '{#if this.$parent.$parent.getAccess(item.name)}';
    optTpl += '<a target="_blank" href="">审核</a>';
    optTpl += '{/if}';
    var component = Regular.extend({
        template: appTpl,
        config: function(data){
            this.supr(data);
            extend(data, {
                nekService: '/backend/pageSelectInput/getListByKeys',
                Rules: Rules,
                navTpl: navTpl,
                funcValidateTpl: funcValidateTpl,
                current: 'kl-button',
                testSource: [{
                    id: 1,
                    name: "asd"
                }, {
                    id: 2,
                    name: 'qwe'
                }],
                testValue: 2,
                checkValue1: true,
                checkValue2: false,
                checkValue3: true,
                checkGroupValue: '1,2',
                condition: {
                    testValue: 2
                },
                optTpl: optTpl,
                beginTime: this.transTime(+new Date() - 7 * 24 * 60 * 60 * 1000, 'start', 'date'),
                endTime: this.transTime(+new Date() - 24 * 60 * 60 * 1000, 'end', 'date'),

                formData: new FormData()
            });
        },
        transTime: function(value, flag, type) {
            type = type || 'timestamp';
            if(value && value > 0){
                var tempDate = new Date(value);
                if(flag == 'start'){
                    tempDate.setHours(0,0,0,0);
                }else if(flag == 'end'){
                    tempDate.setHours(23,59,59,999);
                }
                return type == 'timestamp' ? tempDate.getTime() : tempDate;
            }else{
                return '';
            }
        },
        init: function(){
            var self = this;
            this.data.fileList = [{
                name: 'kaola-logo.jpg',
                url: 'http://haitao.nos.netease.com/264271ddbec447288f17aef71119b1f4.png?imageView&thumbnail=220x0&quality=85&v=1'
            }];
            this.data.formData = new FormData();
            this.supr();
        },
        goto: function(page){
            this.data.current = page;
            this.$update();
        },

        //kl-input
        blurAction: function(){
            console.log("blur");
        },

        // kl-button
        buttonClick: function(){
            alert("ok");
        },

        // regular
        selectChange: function(event){
            console.log(event, this.data.testValue);
        },

        // kl-textarea
        textareaValidate: function(){
            var form = this.$refs.textareaForm;
            var result = form.validate();
            if(!result.success){
                return false;
            }
        },

        sourceCompleted: function(event){
            console.log("source loader, event: ", event);
        },

        //kl-upload
        uploadSubmit: function(){
            console.log(111,this.data.fileList);
            console.log(222,this.data.formData.get('file'));
            var c = new XMLHttpRequest();
            c.open('json', '/test');
            c.send(this.data.formData);
        },
        successCb: function(event){
            console.log('uploadSuccess', event);
        },
        errorCb: function(event){
            console.log('uploadError', event);
        },
        beforeOnLoad: function(json){
            if(json.code == 200){
                var data = json.data || {};
                if(Array.isArray(data)){
                    data = data[0]
                }
                return data;
            }
            return false;  
        },
        upload: function(){
            var ajax = new XMLHttpRequest();
            ajax.open('json', '/upload');
            ajax.send(this.data.formData); 
        },

        //kl-validation
        validate: function(){
            var form = this.$refs.validateForm;
            var result = form.validate();
            console.log(result.success);
        },

        getAccess: function(access){
            console.log(access);
            return access;
        }
    }).filter(Filter).filter({
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
