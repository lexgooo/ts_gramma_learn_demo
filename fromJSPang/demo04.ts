function searchXiaojiejie(age:number):string {
    return `找到了一个${age}岁的小姐姐！`
}

let age:number = 18;
let results:string = searchXiaojiejie(age)
console.log(results)

// 有可选参数的函数
function searchXiaojiejie1(age:number, stature?:string) {
    return `找到了${age}岁${stature ? stature : ''}的小姐姐`
}

let results1 = searchXiaojiejie1(18)
console.log(results1)
results1 = searchXiaojiejie1(18, '大长腿')
console.log(results1)

// 有默认参数的函数
function searchXiaojiejie2(age:number = 18, stature:string = '大胸') {
    return `找到了一个${age}岁${stature}的小姐姐`
}

let results2 = searchXiaojiejie2()
console.log(results2)
results2 = searchXiaojiejie2(28, '大长腿')
console.log(results2)

// 有剩余参数的函数
function searchXiaojiejie3(...xuqiu:string[]):string {
    let yy:string = ''
    for(let i:number = 0; i < xuqiu.length; i++) {
        yy += `${i > 0 ? '、' : ''}${xuqiu[i]}`
    }
    return `找到了一个${yy}的小姐姐。`
}

console.log(searchXiaojiejie3('22岁', '瓜子脸', '水蛇腰'))