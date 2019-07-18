class Jspang {
    public name:string
    public age:number
    public skill:string
    public constructor (name:string, age:number, skill:string) {
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest ():void {
        console.log('找小姐姐')
    }
}

let jspang:Jspang = new Jspang('技术胖', 18, 'web')
console.log(jspang)
jspang.interest()

class JsShuai extends Jspang {
    public xinxiang:string
    public constructor (name:string, age:number, skill:string, xinxiang:string) {
        super(name,age,skill)
        this.xinxiang = xinxiang
    }
    public interest ():void {
        super.interest()
        console.log('建立电商平台')
    }
    public zhuanQian ():void {
        console.log('一天赚一个亿')
    }
}

let shuai:JsShuai = new JsShuai('技术帅', 18, '演讲', '帅气')
console.log(shuai)
shuai.interest()
shuai.zhuanQian()