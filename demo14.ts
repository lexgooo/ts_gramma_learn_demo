interface Husband {
    sex: string
    interest: string
    maiBaoBao?: boolean
}

let myHusband:Husband = {
    sex: '男',
    interest: '看书，做家务',
    maiBaoBao: true
}

console.log(myHusband)

console.log('***************************')

interface searchMan{
    (source:string, subString:string):boolean
}

let mySearch:searchMan = function (source:string, subString:string):boolean {
    let flag = source.search(subString)
    return (flag != -1)
}

console.log(mySearch('高、富、帅', '胖'))