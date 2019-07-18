# TypeScript 学习记录

## 视频教程
> 学习资源来自 http://jspang.com/posts/2018/06/27/typesript.html
### TODO List
- [x] 第01节：初识TypeScript  
- [x] 第02节：开发环境的安装  
- [x] 第03节：变量类型的那些事  
- [x] 第04节：TypeScript的函数  
- [x] 第05节：三种函数的定义方式  
- [x] 第06节：函数中变量的作用域  
- [x] 第07节:引用类型-数组  
- [x] 第08节:引用类型-字符串啊  
- [x] 第09节:引用类型-日期对象  
- [x] 第10节:引用类型-正则表达式  
- [x] 第11节: 面向对象编程-类的声明和使用  
- [x] 第12节: 面向对象编程-修饰符  
- [x] 第13节: 面向对象编程-继承和重写  
- [x] 第14节:面向对象编程-接口  
- [x] 第15节:面向对象编程-命名空间  

## 官方文档

> 学习资源来自 https://www.tslang.cn/docs/home.html

### TODO List
- [ ] 辅导教程
    - [ ] Gulp
        - [ ] 由于 gulp 版本问题，运行报错。以后有机会再来看
    - [ ] JavaScript 迁移
    - [x] React & Webpack
- [ ] 手册指南
    - [ ] 基础类型
    - [ ] 变量声明
    - [ ] 接口
    - [ ] 类
    - [ ] 函数
    - [ ] 泛型
    - [ ] 枚举
    - [ ] 类型推论
    - [ ] 类型兼容性
    - [ ] 高级类型
    - [ ] Symbols
    - [ ] 迭代器和生成器
    - [ ] 模块
    - [ ] 命名空间
    - [ ] 命名空间和模块
    - [ ] 模块解析
    - [ ] 声明合并
    - [ ] JSX
    - [ ] 装饰器
    - [ ] Mixins
    - [ ] 三斜线指令
    - [ ] JavaScript文件类型检查
- [ ] 声明文件
    - [ ] 介绍
    - [ ] 结构
    - [ ] 举例
    - [ ] 规范
    - [ ] 深入
    - [ ] 模板
    - [ ] 发布
    - [ ] 使用
- [ ] 项目配置
    - [ ] tsconfig.json
    - [ ] 错误信息列表
    - [ ] 编译信息列表
    - [ ] 编译选项
    - [ ] 项目引用
    - [ ] MSBuild编译选项
    - [ ] 构建工具集成
    - [ ] 每日构建

### 疑问收集  

#### React & Webpack
- [ ] tsconfig.json 配置中 `noImplicitAny` 选项的作用是什么？
- [ ] Hello 组件中 `export class Hello extends React.Component<HelloProps, {}>` 中 `<HelloProps, {}>` 是什么语法？
- [ ] webpack.config.js 中 `output.path` 为什么可以写成 `__dirname + '/dist` 而不引用 `path` 模块使用 `path.resolve(__dirname, './dist')`
- [ ] webpack.config.js 中 `resolve` 选项的作用是什么？
- [ ] webpack.config.js 中 `externals` 选项的具体作用？