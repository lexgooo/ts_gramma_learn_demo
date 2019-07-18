namespace shuaiGe {
    export class DeHua {
        public name = '刘德华'
        talk() {
            console.log(`我是帅哥${this.name}`)
        }
    }
}

namespace bajie {
    export class DeHua {
        public name = '马德华'
        talk() {
            console.log(`我是二师兄${this.name}`)
        }
    }
}

const dehua1:shuaiGe.DeHua = new shuaiGe.DeHua()
const dehua2:bajie.DeHua = new bajie.DeHua()
dehua1.talk()
dehua2.talk()