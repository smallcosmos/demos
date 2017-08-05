define([], function(){
    var checkRule = {
        type: 'method',
        method: function(value, rule){
            if(!value){
                return 'false';
            }
            return true;
        },
        message: '请勾选'
    };

    var inputRule1 = {
        type: 'method',
        method: function(value, rule){
            if(value > 100){
                return false;
            }
            return true;
        },
        message: '值大于100'
    };
    var inputRule2 = {
        type: 'method',
        method: function(value, rule){
            if(value < 100){
                return false;
            }
            return true;
        },
        message: '值小于100'
    };

    var checkGroupRule = {
        type: 'method',
        method: function(value, rule){
            var valueArr = ''.split.call(value || '', ',');
            if(valueArr.indexOf('1') == -1){
                return 'false';
            }
            return true;
        },
        message: '必须勾选wtf'
    };

    var datePickerRule = {
        type: 'method',
        method: function(value, rule){
            return 'false';
        },
        message: 'rule验证不通过'
    };

    var multiSelectRule = {
        type: 'method',
        method: function(value, rule){
            return 'false';
        },
        message: 'rule验证不通过'
    };

    var radioGroupRule = {
        type: 'method',
        method: function(value, rule){
            return 'false';
        },
        message: 'rule验证不通过'
    };

    var selectRule = {
        type: 'method',
        method: function(value, rule){
            return 'false';
        },
        message: 'rule验证不通过'
    };

    var textareaRule = {
        type: 'method',
        method: function(value, rule){
            return 'false';
        },
        message: 'rule验证不通过'
    };

    var uploadRule = {
        type: 'method',
        method: function(value, rule){
            return 'false';
        },
        message: 'rule验证不通过'
    };
    return {
        checkRule1: checkRule,
        checkRule2: [checkRule],
        checkRule3: checkRule.method,

        inputRule1: [inputRule1],
        inputRule2: [inputRule2],
        inputRule3: inputRule1.method,

        checkGroupRule1: checkGroupRule,
        checkGroupRule2: [checkGroupRule],
        checkGroupRule3: checkGroupRule.method,

        datePickerRule1: datePickerRule,
        datePickerRule2: [datePickerRule],
        datePickerRule3: datePickerRule.method,

        multiSelectRule1: multiSelectRule,
        multiSelectRule2: [multiSelectRule],
        multiSelectRule3: multiSelectRule.method,

        radioGroupRule1: radioGroupRule,
        radioGroupRule2: [radioGroupRule],
        radioGroupRule3: radioGroupRule.method,

        selectRule1: selectRule,
        selectRule2: [selectRule],
        selectRule3: selectRule.method,

        textareaRule1: textareaRule,
        textareaRule2: [textareaRule],
        textareaRule3: textareaRule.method,

        uploadRule1: uploadRule,
        uploadRule2: [uploadRule],
        uploadRule3: uploadRule.method
    }
});