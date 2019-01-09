module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
        commonjs: true,
        'shared-node-browser': true
    },
    "plugins": [
        "vue",
        'html'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6
    },
    "globals": {
        "Promise": true,
    },
    rules: {
        "semi": [2, "always"], // 要求在行末加上分号
        "semi-spacing": [1, {"before": false, "after": true}], // 该规则用来规定分号前后是否加空格，默认配置为「分号后面加空格，前面不加空格」
        "no-mixed-spaces-and-tabs": 2, //不允许空格和 tab 混用
        "indent": [2, 4, {
            // case 用一个缩进
            "SwitchCase": 1,
            // 变量声明用一个缩进
            "VariableDeclarator": 1,
            "outerIIFEBody": 1,
            "MemberExpression": 1,
            "FunctionDeclaration": {"body": 1, "parameters": 2},
            "FunctionExpression": {"body": 1, "parameters": 2},
            "CallExpression": {"arguments": 1}
        }], // 缩进设置为 4 个空格
        "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1}], // 不要留超过规定数目的空白行
        "space-before-function-paren": [1, "never"], // 禁止在 function 的左括号之前使用空格
        "space-in-parens": [1, "never"], // 禁止在圆括号内使用空格, ( 左括号右边和右括号左边 )
        "quotes": [1, "single"], // 单引用
        "quote-props": [2, "as-needed"], // 当没有严格要求时，禁止对象字面量属性名称使用引号
        "array-bracket-spacing": [1, "never"], // 数组前后不能带空格
        "camelcase": 2, // 强制使用驼峰命名
        "no-inner-declarations": [2, "functions"], // warning 块内定义函数
        // 禁止拖尾逗号
        "comma-dangle": [2, {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "comma-spacing": [1, {"before": false, "after": true}], // 逗号前禁止有空格, 逗号后必须有空格
        "comma-style": [2, "last"], // 禁止逗号前置
        "brace-style": [2, "1tbs"], // 强制使用 1tbs 风格的代码块括号，见 http://eslint.cn/docs/rules/brace-style
        "func-call-spacing": [2, "never"], // 禁止函数调用时括号左边有空格
        "key-spacing": [1, {
            "beforeColon": false,
            "afterColon": true,
            "mode": "strict"
        }], // 对象键值对的冒号前禁止有空格, 冒号后必须有空格
        "no-irregular-whitespace": 2, // 禁止使用不合法或者不规则的空白符
        "no-negated-in-lhs": 2, // 在 in 操作符左边的操作项不能用 ! 例如这样写不对的：if ( !a in b) { // dosomething }
        "no-obj-calls": 2, // 禁止把全局对象当函数调用，比如下面写法错误的：Math(), JSON()
        "no-regex-spaces": 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-debugger": 1, // 禁用 debugger
        "no-dupe-args": 2, // 禁止 function 定义中出现重名参数
        "no-dupe-keys": 2, // 禁止对象字面量中出现重复的 key
        "no-func-assign": 2, // 禁止对 function 声明重新赋值
        "max-depth": [2, 5], // 检查块语句大括号的最大可嵌套深度
        "max-len": [2, 160], // 一行最多 160 个字符
        "max-nested-callbacks": [2, 5], // 一个函数的最大嵌套
        "max-statements": [2, 40], // 一个函数最大语句数
        "complexity": [1, 20], // 用来控制函数的复杂度，{} 大括号对数不能超过 20 对
        "default-case": 2, // 所有的 switch 语句都必须要有一个 default 分支
        "guard-for-in": 1,
        // 代码块的内容不能为空，禁止空代码块
        // if (foo) {
        // }
        // while (foo) {
        // }
        "no-empty": 2,
        "no-empty-function": 1, // warning 空函数
        // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        /*
        function foo() {
        return true;
        console.log("done");
        } // 错误
        */
        "no-unreachable": 2,
        "no-global-assign": 2,
        // 禁止出现令人困惑的多行表达式
        // var foo = bar
        // (1 || 2).baz();
        "no-unexpected-multiline": 2,
        "no-sparse-arrays": 2, // 禁止稀疏数组，清除多余的逗号声明，比如 [1, , 2]
        "no-shadow-restricted-names": 2, // 声明变量时禁止覆盖 JavaScript 中的一些保留关键字，比如 NaN、Infinity、undefined、eval、arguments 等
        "no-undef": 2, // 禁止使用未被定义的变量，除非已在配置文件的 global 中进行了说明
        "no-unused-vars": 2, //不允许定义的变量在后面的代码中没有被使用到
        "no-use-before-define": 2, // 所有的变量都应该先定义后使用
        "block-scoped-var": 0, // 当在代码块中用var声明变量，并在代码块外使用时报错
        "eqeqeq": [0], // 在进行比较时，必须使用全等 === 和完全不等 !==
        "no-alert": [1], // 不允许 alert, confirm, prompt
        "no-caller": [1], // 禁止使用 arguments.caller 和 arguments.callee
        // 禁止在 case/default 语句中使用 lexical declarations，例如 let, const, function and class
        // 因为在 case/default 中的声明，在整个 switch 语句中都能够访问到，如果需要声明变量，可以加大括号。
        // 不能使用看起来像除法的正则表达式
        // 用来消除 /（除号）操作符对程序员的迷惑，比如在正则表达式 /=foo/ 中，我们并不能够确定第一个 / 是除号还是正则表达式，因此我们需要在等号前面加一个转移符 /\=foo/
        "no-div-regex": 2,
        "no-case-declarations": 2,
        "dot-notation": [2, {"allowKeywords": true}], // 强制使用 . 号取属性，关键字属性时用 []
        "no-cond-assign": 2, // 禁止条件表达式中出现赋值操作符
        "no-else-return": 1, // 在 if else 语句中，如果 else 语句中只含有一个 return 语句，那么完全可以不使用 else 语句，直接 return
        "no-multi-spaces": 1, // 保证了在逻辑表达式、条件表达式、申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符
        "no-proto": 2, // 禁止使用 __proto__ 属性
        "no-multi-str": 1, // 多行字符串要相加，而不是用链接符\
        "no-new-wrappers": 2, // 禁止使用 new 创建 String, Number, and Boolean 实例
        "no-array-constructor": 2, // 禁止对 Array 使用 new 操作符
        "no-loop-func": 2, // 禁止在循环体中定义函数并且函数引用了外部变量，在循环中定义了函数，但是函数内部没有引用外部变量，或者使用 let 定义的代码块变量，视为合法
        "no-redeclare": [2, {"builtinGlobals": true}], // 避免重复声明一个变量
        "curly": 2, // 强制所有控制语句使用一致的括号风格
        "no-self-assign": 2, // 禁止给自身赋值
        "no-self-compare": 2, // 禁止和自身比较
        "no-sequences": 2, // 禁止可能导致结果不明确的逗号操作符
        // 禁止使用不被修改的循环条件
        // while (node) {
        //   doSomething(node);
        // }
        "no-unmodified-loop-condition": 2,
        "no-useless-concat": 2, // 避免使用不必要的字符串拼接 var a = '1' + '0';
        "no-useless-escape": 2, // 不必要的转义 "\'" '\"' 等
        "no-with": 2, // 不要用 with
        "no-eval": 2, // 禁止使用 eval 函数
        "no-negated-condition": 1, // 尽量不使用否定表达式
        "wrap-iife": [2, "any"], // 立即执行函数需要通过圆括号包围
        "no-delete-var": 2, // 禁止使用 delete 删除 var 声明的变量
        "no-useless-call": 2, // 避免使用没有意义的 call() 和 apply()

        // 禁止在条件中使用常量表达式
        // if (false) {
        // doSomethingUnfinished();
        // } // error
        "no-constant-condition": 2,
        "no-throw-literal": 1, // 通过 throw 语句抛出的对象必须是 Error 对象本身或者通过 Error 对象定义的对象 http://eslint.org/docs/rules/no-throw-literal

        // if (!key in object) {
        // }
        // if (!obj instanceof Ctor) {
        // }
        "no-unsafe-negation": 2, // 条件判断中的取反操作
        // typeof foo === "strnig"
        // typeof foo == "undefimed"
        // typeof bar != "nunber"
        // typeof bar !== "fucntion"
        "valid-typeof": 2,
        "new-parens": 2, // 要求调用无参构造函数时有圆括号
        "no-labels": 2, // 禁用标签语句

        // Node
        // 禁止调用 require 时使用 new 操作符
        'no-new-require': [2],

        // ES6
        // --fix: 要求箭头函数体使用大括号
        'arrow-body-style': ['error', 'as-needed'],

        // --fix: 要求箭头函数的参数使用圆括号
        'arrow-parens': ['error', 'as-needed', {
            // 如果函数体在一个指令块中（被花括号括起来）要求使用圆括号把参数括起来
            requireForBlockBody: true
        }],

        // --fix: 强制箭头函数的箭头前后使用一致的空格
        'arrow-spacing': ['warn', {
            before: true,
            after: true
        }],

        // 要求在构造函数中有 super() 的调用
        'constructor-super': 'error',

        // --fix: 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': ['warn', {
            before: true,
            after: false
        }],

        // 禁止修改类声明的变量
        'no-class-assign': 'error',

        // 在可能与数值对比造成混淆处禁用箭头函数，allowParens 为 true 时放宽规则，接受使用圆括号预防混淆
        'no-confusing-arrow': ['error', {
            allowParens: true
        }],

        // 禁止修改 const 声明的变量
        'no-const-assign': 'error',

        // 禁止类成员中出现重复的名称
        'no-dupe-class-members': 'error',

        // 不允许从同一路径多次 import
        'no-duplicate-imports': ['error', {
            includeExports: false
        }],

        // 禁止调用 Symbol 使用 new 操作符
        'no-new-symbol': 'error',

        // 禁止引入限制 import 的资源
        'no-restricted-imports': 'off',

        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        'no-this-before-super': 'error',

        // --fix: 禁止对象上不必要的属性计算
        'no-useless-computed-key': 'error',

        // 禁用不必要的构造函数
        'no-useless-constructor': 'error',

        // --fix: 禁止在 import、export 和解构中进行不必要的重命名
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }],

        // --fix: 要求使用 let 或 const，禁止使用 var
        'no-var': 'error',

        // --fix: 要求对象字面量中方法和属性使用简写语法
        // @TODO: 'always' => 'consistent-as-needed'：保证对象字面量的简写或非简写一致性，但尽可能的全部使用简写
        'object-shorthand': ['error', 'always', {
            // 忽略构造函数，允许不简写
            ignoreConstructors: false,
            // 忽略字符串字面量属性，允许不简写
            avoidQuotes: true
        }],

        // --fix: 要求使用箭头函数作为回调
        'prefer-arrow-callback': ['warn', {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }],

        // --fix: 要求使用 const 声明那些声明后不再被修改的变量
        // TODO: enable
        'prefer-const': ['off', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true
        }],

        // 在数组和对象中，使用解构代替成员表达式访问属性
        // TODO: enable
        'prefer-destructuring': ['off', {
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }],

        // --fix: ES6 支持二进制、八进制及十六进制的直接使用，禁止 parseInt() 对他们的转换
        // @TODO: enable
        'prefer-numeric-literals': 'off',

        // 使用 rest 参数获取多余参数，而不是使用 arguments 对象
        'prefer-rest-params': 'error',

        // --fix: 要求使用扩展运算符而非 .apply()
        'prefer-spread': 'error',

        // --fix: 要求使用模板字面量而非字符串连接
        'prefer-template': 'error',

        // 要求 generator 函数内有 yield
        'require-yield': 'error',

        // --fix: 强制 rest 参数中， ... 与参数名之间不能存在空格
        'rest-spread-spacing': ['warn', 'never'],

        // 强制模块内的 import 排序
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }],

        // 使用 Symbol 时强制输入描述，如：Symbol(description)
        'symbol-description': 'error',

        // --fix: 禁止模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing': 'warn',

        // --fix: 强制在 yield* 表达式中 * 周围使用空格
        'yield-star-spacing': ['warn', 'before']
    }
};