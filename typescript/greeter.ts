(() => {
    class Student {
        fullName: string;
        constructor(public firstName, public middleInitial, public lastName) {
            this.fullName = firstName + " " + middleInitial + " " + lastName;
        }
    }
    interface Person {
        firstName: string;
        lastName: string;
    }
    let greeter = function (person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    let user = new Student("Jane", "M.", "User");


    // 可选属性
    interface Optional {
        color?: String;
        width?: number;
    }
    // Object literal may only specify known properties, and 'extra' does not exist in type 'Optional'.
    let style: Optional = {
        color: 'red'
    }
    // let styleExtra: Optional = {
    //     color: 'red',
    //     extra: 'extra'
    // }

    // 额外的属性检查
    interface OptionalFix {
        color?: String;
        width?: number;
        [propName: string]: any;
    }
    let styleFix: OptionalFix = {
        color: 'red',
        extra: 'extra'
    }

    // 只读属性
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 1, y: 2 };
    // Cannot assign to 'x' because it is a read-only property
    // p1.x = 2;
    let roa: ReadonlyArray<number> = [1, 2, 3];
    // Index signature in type 'ReadonlyArray<number>' only permits reading
    // roa[0] = 4;
    // Property 'push' does not exist on type 'ReadonlyArray<number>'
    // roa.push(4);
    // Cannot assign to 'length' because it is a read-only property.
    // roa.length = 4;
    // Cannot redeclare block-scoped variable 'normalArray'
    // let normalArray: number[];
    // let normalArray = roa;
    // success, can replace
    // roa = [4,5,6]; 

    // 函数类型
    interface SayHello {
        (name: string, age: number): void
    }
    let sayHello: SayHello = function (name, age) {
        console.log('hello ', name, 'age ', age);
    }
    sayHello('Alice', 20);

    // 可索引类型
    interface StringArray {
        [index: number]: string;
    }
    let stringArray: StringArray = ['买了佛冷', 'why', '哈哈哈哈哈'];

    // 只读索引类型
    interface StringArrayReadonly {
        readonly [index: number]: string;
    }
    let stringArrayReadonly: StringArrayReadonly = ['买了佛冷', 'why', '哈哈哈哈哈'];
    // Index signature in type 'StringArrayReadonly' only permits reading.
    // stringArrayReadonly[0] = 'change';

    // 类类型
    interface ClockClass {
        currentTime: number;
        // 类只对实例部分进行类型检查，constructor存在于类的静态部分，不在检查范围内，无法通过检查
        // new (h: number, m: number);
        setTime(d: Date): void;
    }
    class Clock implements ClockClass {
        currentTime: number;
        constructor(h: number, m: number) {
            this.currentTime = new Date().setHours(h, m, 0, 0);
        }
        setTime(d: Date) {
            this.currentTime = new Date(d.getTime()).getTime();
            return true;
        }
    }
    let clock = new Clock(0, 0);
    // **如何去描述类静态方法（使用静态工厂函数，用传入的类创建实例）

    // 接口继承
    interface Shape {
        color: string
    }
    interface extendShape extends Shape {
        width: number
    }
    let shape: extendShape = {
        color: 'red',
        width: 2
    }

    // 泛型
    let returnFn = function identity<T>(arg: T): T {
        return arg;
    }
    returnFn(1);

    let returnArrFn = function loggingIdentity<T>(arg: T[]): T[] {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }
    returnArrFn([1, 2, 3]);

    // 枚举
    enum Responses {
        Yes,
        No
    }
    function response(message: Responses | string): number | string {
        console.log(message);
        return message;
    }
    response(Responses[0]);
    response(Responses.Yes);

    //声明合并
    interface Box {
        height: number;
        width: number;
        fn(): void;
    }
    interface Box {
        length: number;
        fn(): number;
    }
    let box: Box = {
        //声明合并对于非函数成员必须唯一，如果不唯一，那么它们必须是相同的类型，否则报错
        height: 1,
        width: 2,
        length: 3,
        //声明合并对于函数成员可实现重载，并且后面的接口具有更高的优先级
        fn: function() {
            return 4;
        }
    }

    //命名空间和模块，命名空间分离到多文件，
    //使用标签来告诉编译器文件之间的关联 /// <reference path="Validation.ts" />
    //模块解析策略 Classic 和 Node 以及nodejs解析模块
    //相对vs非相对模块导入
    //compilerOptions.baseUrl && compilerOptions.paths

    document.body.innerHTML = greeter(user);
})();

//命名空间合并
namespace Animals {
    const name = 1;
    export class Zebra { }
}
namespace Animals {
    //模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口
    //命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里
    const type = 2;
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
