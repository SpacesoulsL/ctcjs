# ctcjs

**Use to convert into Chinese**

- 支持数字转换为大写中文数字

  Supports digit conversion to uppercase Chinese

- 支持数字转换为小写中文数字

  Supports digit conversion to lowercase Chinese

- 最大可转换千亿

  The maximum is convert to 100 billion

- 可添加后置单位

  unit can be added

- 小巧简洁

  Simple

  

## 安装install

```
$ npm install ctcjs --save
```

## 

## 引入

```javascript
//ESM
import ctcjs from "ctcjs"

//CJS
const ctcjs = require("ctcjs")
```



## 使用

`ctcjs(num, isComplexType, unit)`

- `num`:传入待转换的数值
- `isComplexType`: 可选参数，true为简体中文、false为繁体(默认为false)
- `unit`:可选参数，添加单位
- `return` STring

```javascript
//小写中文数字
ctcjs(110011)			//十一万零一十一
ctcjs(110011.1001)		//十一万零一十一点一零零一

//大写中文数字
ctcjs(166, true) 		//壹佰陆拾陆
ctcjs(166.9988, true) 	//壹佰陆拾陆點玖玖捌捌

//添加后置单位
ctcjs(16, false, "天")	//十六天
ctcjs(16, true, "天")	//拾陆天
```

