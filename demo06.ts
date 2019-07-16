function zhengxing():void {
    let yangzi:string = '刘德华'
    console.log(`你现在已经整形成了${yangzi}的样子！`)
}
zhengxing()

console.log('*****************************************************')

let yangzi01:string = '刘德华'
function zhengxing1():void {
    console.log(`你现在已经整形成了${yangzi01}的样子`)
}
zhengxing1()
console.log(yangzi01)

console.log('*****************************************************')

let yangzi02:string = '刘德华'
function zhengxing2():void {
    let yangzi02:string = '马德华'
    console.log(`你现在已经整形成了${yangzi02}的样子！`)
}
zhengxing2()
console.log(yangzi02)

console.log('*****************************************************')

let yangzi03:string = '刘德华'
function zhengxing3():void {
    // console.log(`你现在已经整形成了${yangzi03}的样子！`)
    let yangzi03:string = '马德华'
    console.log(`你现在已经整形成了${yangzi03}的样子！`)
}
zhengxing3()
console.log(yangzi03)

console.log('*****************************************************')

function zhengxing4():void {
    let yangzi04a:string ="刘德华"
    {
        let yangzi04b:string = '马德华'
        console.log(`你现在已经整形成了${yangzi04b}的样子！`)
    }
    console.log(`你现在已经整形成了${yangzi04a}的样子！`)
    // console.log(`你现在已经整形成了${yangzi04b}的样子！`)
}
zhengxing4()