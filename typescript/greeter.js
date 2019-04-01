(function() {
    let Student = /** @class */ (function() {
        function Student(firstName, middleInitial, lastName) {
            this.firstName = firstName;
            this.middleInitial = middleInitial;
            this.lastName = lastName;
            this.fullName = `${firstName} ${middleInitial} ${lastName}`;
        }
        return Student;
    }());
    let greeter = function(person) {
        return `Hello, ${person.firstName} ${person.lastName}`;
    };
    let user = new Student('Jane', 'M.', 'User');
    // Object literal may only specify known properties, and 'extra' does not exist in type 'Optional'.
    let style = {
        color: 'red'
    };
    let styleFix = {
        color: 'red',
        extra: 'extra'
    };
    let p1 = { x: 1, y: 2 };
    // Cannot assign to 'x' because it is a read-only property
    // p1.x = 2;
    let roa = [1, 2, 3];
    let sayHello = function(name, age) {
        console.log('hello ', name, 'age ', age);
    };
    sayHello('Alice', 20);
    let stringArray = ['买了佛冷', 'why', '哈哈哈哈哈'];
    let stringArrayReadonly = ['买了佛冷', 'why', '哈哈哈哈哈'];
    let Clock = /** @class */ (function() {
        function Clock(h, m) {
            this.currentTime = new Date().setHours(h, m, 0, 0);
        }
        Clock.prototype.setTime = function(d) {
            this.currentTime = new Date(d.getTime()).getTime();
            return true;
        };
        return Clock;
    }());
    let clock = new Clock(0, 0);
    let shape = {
        color: 'red',
        width: 2
    };
    // 泛型
    let returnFn = function identity(arg) {
        return arg;
    };
    returnFn(1);
    let returnArrFn = function loggingIdentity(arg) {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    };
    returnArrFn([1, 2, 3]);
    // 枚举
    let Responses;
    (function(Responses) {
        Responses[Responses.Yes = 0] = 'Yes';
        Responses[Responses.No = 1] = 'No';
    })(Responses || (Responses = {}));
    function response(message) {
        console.log(message);
        return message;
    }
    response(Responses[0]);
    response(Responses.Yes);
    let box = {
        //声明合并对于非函数成员必须唯一，如果不唯一，那么它们必须是相同的类型，否则报错
        height: 1,
        width: 2,
        length: 3,
        //声明合并对于函数成员可实现重载，并且后面的接口具有更高的优先级
        fn() {
            return 4;
        }
    };
    //命名空间和模块，命名空间分离到多文件，
    //使用标签来告诉编译器文件之间的关联 /// <reference path="Validation.ts" />
    //模块解析策略 Classic 和 Node 以及nodejs解析模块
    //相对vs非相对模块导入
    //compilerOptions.baseUrl && compilerOptions.paths
    document.body.innerHTML = greeter(user);
})();
//命名空间合并
let Animals;
(function(Animals) {
    let name = 1;
    let Zebra = /** @class */ (function() {
        function Zebra() {
        }
        return Zebra;
    }());
    Animals.Zebra = Zebra;
})(Animals || (Animals = {}));
(function(Animals) {
    //模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口
    //命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里
    let type = 2;
    let Dog = /** @class */ (function() {
        function Dog() {
        }
        return Dog;
    }());
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
