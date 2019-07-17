class XiaoJiejie2 {
    public sex:string
    protected name:string
    private age:number
    public constructor (sex:string, name:string, age:number) {
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello() {
        console.log('小哥哥你好！')
    }
    protected sayLove() {
        console.log('我爱你！')
    }
}

let jiejie2:XiaoJiejie2 = new XiaoJiejie2('女', '山口百慧', 23)

console.log(jiejie2.sex)
// console.log(jiejie2.name) // 可以执行但不合规，不能在 ts 语法中出现这种访问
// console.log(jiejie2.age) // 可以执行但不合规，不能在 ts 语法中出现这种访问
jiejie2.sayHello()
// jiejie2.sayLove() // 可以执行但不合规，不能在 ts 语法中出现这种访问

class Man {
    public readonly sex:string = '男'
}

let man:Man = new Man()
console.log(man)
console.log(man.sex)
// man.sex = '女' // 可以执行成功但不合规，不能在 ts 语法中出现这种访问
// console.log(man.sex)
