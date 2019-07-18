class XiaoJiejie {
    name:string
    age:number
    constructor (name:string, age:number) {
        this.name = name
        this.age = age
    }
    say() {
        console.log('小哥哥好！')
    }
}

let xiaojiejie:XiaoJiejie = new XiaoJiejie('范冰冰', 18)
console.log(xiaojiejie)
xiaojiejie.say()