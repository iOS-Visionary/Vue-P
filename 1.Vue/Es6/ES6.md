一：require.ensure		
分模块打包,把我们想要组合在一起的组件打包到一个 chunk块中去[资料]	(https://www.cnblogs.com/libin-1/p/7127481.html)	
语法如下：		
		
```
require.ensure(dependencies: String[], callback: function(require), chunkName: String)
```
二：require 单例
		
```
let { stat, exists, readFile } = require('fs'); 
会在**运行到这得时候** 加载整个对象，然后再从这个对象上面读取 3 个方法，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
 **重点！！！require是运行时加载模块**
const path = './' + fileName;
const myModual = require(path);
		
import { stat, exists, readFile } from 'fs';
上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。**可以在编译时就完成模块加载**
```		
三：import  单例		
		
```
import { foo } from 'my_module';
import { bar } from 'my_module';

// 等同于
import { foo, bar } from 'my_module';

上面代码中，虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module实例。也就是说，import语句是 **Singleton** 模式。


```
四：Promise		

```
这个是内部调用成功
const promise = new Promise(function(resolve, reject) {

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

.then 相当于从内部得到 传的参数
promise.then(function(value) {
  // success
  value 是上面那段代码的value
}, function(error) {
  // failure
  error 是上面那段代码的error
});
```
五：scrollBehavior
可以保持在原来的位置
六：scrollTop？
七：生命周期


