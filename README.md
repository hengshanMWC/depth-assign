## depth-assign
### 特征
* 深度拷贝，包括Object、Array、函数类型
* 设置递归方向，由左到右，由右到左,后者覆盖前者
* 默认底数参数
### 使用方法

通过 npm i -S depth-assign安装

```
/**
 * 深度拷贝
 * arr：Object | Array，克隆拷贝
 * b ：Boolean,设置递归方向，由左到右，由右到左,后者覆盖前者
 * def：Object({})， 传递给函数的初始值
 * 返回一个创建好的值(引用===def)
 */
depthAssign(arr, b, def = {}) 
```
