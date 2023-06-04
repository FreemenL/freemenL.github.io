(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{nQyR:function(n,t,e){"use strict";e.r(t);var i=e("xwgP"),s=e.n(i),o=e("nFtg"),r=e("INx8"),a=s.a.memo((n=>{n.demos;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h1",{id:"js\u4e2d-bind-\u51fd\u6570\u7684\u539f\u7406"},s.a.createElement(o["AnchorLink"],{to:"#js\u4e2d-bind-\u51fd\u6570\u7684\u539f\u7406","aria-hidden":"true",tabIndex:-1},s.a.createElement("span",{className:"icon icon-link"})),"js\u4e2d bind \u51fd\u6570\u7684\u539f\u7406"),s.a.createElement(r["a"],{code:"/**\n* bind \u51fd\u6570\u5728js\u4e2d\u7684\u5e94\u7528\n*/\nthis.name = \"test\";\nlet testObj = {\n\tname:'zhangsan',\n\tintroduce:function(){\n\t\treturn this.name;\n\t}\n}\nlet test = {\n\tname:\"lisi\"\n}\nlet test1 = {\n\tname:\"wangwu\"\n}\nlet fn = testObj.introduce;\nconsole.log(fn());//test\xa0 \xa0\nconsole.log(fn.bind(test)());//lisi\nconsole.log(fn.bind(test1)());//\u738b\u4e94\nconsole.log(fn());//test \u6ce8\uff1a\u4e0d\u5b58\u5728\u6c38\u4e45\u6539\u53d8this\u6307\u5411\u7684\u8bf4\u6cd5\xa0\xa0\n \n \n/**\n\t*bind()\u7684\u53e6\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u7528\u6cd5\u662f\u4f7f\u4e00\u4e2a\u51fd\u6570\u62e5\u6709\u9884\u8bbe\u7684\u521d\u59cb\u53c2\u6570\u3002\u8fd9\u4e9b\u53c2\u6570\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4f5c\u4e3abind()\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u8ddf\u5728this\uff08\u6216\u5176\u4ed6\u5bf9\u8c61\uff09\u540e\u9762\uff0c\u4e4b\u540e\u5b83\u4eec\u4f1a\u88ab\u63d2\u5165\u5230\n\t*\u76ee\u6807\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u7684\u5f00\u59cb\u4f4d\u7f6e\uff0c\u4f20\u9012\u7ed9\u7ed1\u5b9a\u51fd\u6570\u7684\u53c2\u6570\u4f1a\u8ddf\u5728\u5b83\u4eec\u7684\u540e\u9762\u3002\n*/\nfunction list() {\n\xa0 return Array.prototype.slice.call(arguments);\n}\n \n \nvar list1 = list(1, 2, 3); // [1, 2, 3]\n \n \nvar leadingThirtysevenList = list.bind(undefined, 37,21);\n \n \nvar list2 = leadingThirtysevenList(); // [37]\nvar list3 = leadingThirtysevenList(1, 2, 3); // [37,21, 1, 2, 3]\nvar list4 = leadingThirtysevenList(1, 2, 3, 4); // [37,21, 1, 2, 3,4]\n \n/**\n* \u6765\u770bes6\u4e2d\u7684\u51fd\u6570\u521d\u59cb\u503c\xa0\n*/\nfunction EsArguments(name='zhangsan'){\n\tconsole.log(name);\n}\nEsArguments();//zhangsan\nEsArguments(\"lisi\");//lisi\n \n \n/**\n* \u5728\u81ea\u5b9a\u4e49\u5bf9\u8c61\u4e2d\u7684\u5e94\u7528\xa0 demo\xa0\n* \u8ddfes6\u4e2d\u51fd\u6570\u7684\u521d\u59cb\u503c\u7684\u533a\u522b\u5728\u4e8e\u4e0d\u4f1a\u8986\u76d6\u539f\u59cb\u503c\xa0\n*/\nfunction testBind(){\n\tthis.cacheArgs = this.transformArgs.bind(undefined,...arguments);\n};\ntestBind.prototype.transformArgs = function(){\n\treturn Array.prototype.slice.call(arguments);\n}\ntestBind.prototype.showArgList = function(){\n\treturn this.cacheArgs(...arguments);\n}\n\xa0let Test = new testBind(1,2,3);\xa0\n\xa0console.log(Test.showArgList(13,14));\n\xa0console.log(Test.showArgList(5,21));\n \n \n/* bind\u548ccall apply\u7684\u533a\u522b\u5728\u4e8e\u4e0d\u4f1a\u7acb\u5373\u8c03\u7528 \u539f\u56e0\u5728\u4e8e bind() \u51fd\u6570\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u51fd\u6570\uff08\u79f0\u4e3a\u7ed1\u5b9a\u51fd\u6570\uff09\uff0c\n* \u65b0\u51fd\u6570\u4e0e\u88ab\u8c03\u51fd\u6570\uff08\u7ed1\u5b9a\u51fd\u6570\u7684\u76ee\u6807\u51fd\u6570\uff09\u5177\u6709\u76f8\u540c\u7684\u51fd\u6570\u4f53\u3002\n* bind\u4e00\u822c\u7528\u5728\u5f02\u6b65\u8c03\u7528\u548c\u4e8b\u4ef6\n* ->\u4e0b\u9762\u770bbind\u51fd\u6570\u7684\u539f\u751f\u5b9e\u73b0\u65b9\u5f0f\xa0\n*/\nFunction.prototype.bind = function() {\n        var self = this, // \u4fdd\u5b58\u539f\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u7684this\u6307\u5411\xa0\n        context = Array.prototype.shift.call(arguments), // \u9700\u8981\u7ed1\u5b9a\u7684this\u4e0a\u4e0b\u6587\n        args = Array.prototype.slice.call(arguments); // \u5269\u4f59\u7684\u53c2\u6570\u8f6c\u6210\u6570\u7ec4\n        return function() { //\u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\n        // \u6267\u884c\u65b0\u51fd\u6570\u65f6\uff0c\u5c06\u4f20\u5165\u7684\u4e0a\u4e0b\u6587context\u4f5c\u4e3a\u65b0\u51fd\u6570\u7684this\n        // \u5e76\u4e14\u7ec4\u5408\u4e24\u6b21\u5206\u522b\u4f20\u5165\u7684\u53c2\u6570\uff0c\u4f5c\u4e3a\u65b0\u51fd\u6570\u7684\u53c2\u6570\n\t\treturn self.apply(context, Array.prototype.concat.call(args, Array.prototype.slice.call(arguments)));\xa0\n\xa0 \xa0\xa0\xa0\xa0}\n};\n\n/** bind \u5b98\u65b9\u6587\u6863\u89e3\u91ca\n* \u8bed\u6cd5\n* fun.bind(thisArg[, arg1[, arg2[, ...]]])\n* \u53c2\u6570thisArg\n* \u5f53\u7ed1\u5b9a\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u8be5\u53c2\u6570\u4f1a\u4f5c\u4e3a\u539f\u51fd\u6570\u8fd0\u884c\u65f6\u7684 this \u6307\u5411\u3002\u5f53\u4f7f\u7528new \u64cd\u4f5c\u7b26\u8c03\u7528\u7ed1\u5b9a\u51fd\u6570\u65f6\uff0c\u8be5\u53c2\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u6570\xa0\u65e0\xa0\u6548\u3002 (\u6ce8\uff1a\u539f\u56e0\u5728\u4e8enew\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2a\u7a7a\u5bf9\u8c61)\n* arg1, arg2, ...\n* \u5f53\u7ed1\u5b9a\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u8fd9\u4e9b\u53c2\u6570\u5c06\u7f6e\u4e8e\u5b9e\u53c2\u4e4b\u524d\u4f20\u9012\u7ed9\u88ab\u7ed1\u5b9a\u7684\u65b9\u6cd5\u3002\n* \u8fd4\u56de\u503c\n\xa0 \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0* \u8fd4\u56de\u7531\u6307\u5b9a\u7684this\u503c\u548c\u521d\u59cb\u5316\u53c2\u6570\u6539\u9020\u7684\u539f\u51fd\u6570\u62f7\u8d1d\n*/\n \n/**\n\xa0 * bind\u51fd\u6570\u5728setTimeout\u4e2d\u7684\u5e94\u7528\n*/\nlet testBingMethod = {\n\tname:'123',\n\ttest:function(){\n\t\tconsole.log(this.name);\n},\nshowList:function(){\n\tsetTimeout(this.test.bind(this),1000);\n  //\u7b2c\u4e00\u4e2athis\u4e3a\u5f53\u524d\u5bf9\u8c61\u6267\u884c\u4e0a\u6587\u7684this\xa0\n  //\u7b2c\u4e8c\u4e2athis\u4e3asetTimeout\u51fd\u6570\u7684this\u6307\u5411\u5373window\u5bf9\u8c61\n\t}\n}\ntestBingMethod.showList()\n/**\n\xa0 bind\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528\u7684\u7ed1\u5b9a\u51fd\u6570\u81ea\u7136\u800c\u7136\u5730\uff0c\u7ed1\u5b9a\u51fd\u6570\u9002\u7528\u4e8e\u7528new\u64cd\u4f5c\u7b26 new \u53bb\u6784\u9020\u4e00\u4e2a\u7531\u76ee\u6807\u51fd\u6570\u521b\u5efa \u7684\u65b0\u7684\u5b9e\u4f8b\u3002\u5f53\u4e00\u4e2a\u7ed1\u5b9a\u51fd\u6570\u662f\u7528\u6765\u6784\u5efa\u4e00\u4e2a\u503c\u7684\uff0c\u539f\u6765\u63d0\u4f9b\u7684 this \u5c31\u4f1a\u88ab\u5ffd\u7565\u3002\u7136\u800c,\xa0\u539f\u5148\u63d0\u4f9b\u7684\u90a3\u4e9b\u53c2\u6570\u4ecd\u7136\u4f1a\u88ab\u524d\u7f6e\u5230\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u524d\u9762\u3002 <---\u539f\u56e0\u5728\u4e8enew\u64cd\u4f5c\u4f1a\u521b\u5efa\u4e00\u4e2a\u7a7a\u5bf9\u8c61--\x3e\n\xa0 */\nfunction Point(x, y) {\n\xa0 this.x = x;\n\xa0 this.y = y;\n}\n \n \nPoint.prototype.toString = function() {\xa0\n\xa0 return this.x + ',' + this.y;\xa0\n};\n \n \nvar p = new Point(1, 2);\np.toString(); // '1,2'\n \n \n// \u4ee5\u4e0b\u8fd9\u884c\u4ee3\u7801\u5728 polyfill \u4e0d\u652f\u6301,polyfill\u4e0b\u5fc5\u987b\u6307\u5411\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\xa0\n// \u5728\u539f\u751f\u7684bind\u65b9\u6cd5\u8fd0\u884c\u6ca1\u95ee\u9898:\xa0\nvar YAxisPoint = Point.bind(null, 0/*x*/);\nvar axisPoint = new YAxisPoint(5);\naxisPoint.toString(); // '0,5'\n \n \n/**\n* bind \u7684\u5feb\u6377\u8c03\u7528: \u4f60\u53ef\u4ee5\u7528 Array.prototype.slice \u6765\u5c06\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u7684\u5bf9\u8c61\uff08array-like object\uff09\u8f6c\u6362\u6210\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u5c31\u62ff\u5b83\u6765\u4e3e\u4f8b\u5b50\u5427\u3002\u4f60\u53ef\u4ee5\u521b\u5efa\u8fd9\u6837\u4e00\u4e2a\u6377\u5f84\uff1a\n*/\n\nfunction testFn(){\n\tvar slice = Array.prototype.slice;\n\tslice.apply(arguments);\n \n\t/* \u7528 bind()\u53ef\u4ee5\u4f7f\u8fd9\u4e2a\u8fc7\u7a0b\u53d8\u5f97\u7b80\u5355\u3002\u5728\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u91cc\u9762\uff0cslice \u662f Function.prototype \u7684 apply() \u65b9\n\t\u6cd5\u7684\u7ed1\u5b9a\u51fd\u6570\uff0c\u5e76\u4e14\u5c06 Array.prototype \u7684slice() \u65b9\u6cd5\u4f5c\u4e3a this \u7684\u503c\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u538b\u6839\u513f\u7528\u4e0d\u7740\u4e0a\u9762\u90a3\u4e2a apply()\u8c03\u7528\u4e86\u3002\n\t*/\xa0\n\tvar unboundSlice = Array.prototype.slice;\n\tvar slice = Function.prototype.apply.bind(unboundSlice);\n\tslice(arguments);\n}",lang:"js"})))}));t["default"]=n=>{var t=s.a.useContext(o["context"]),e=t.demos;return s.a.useEffect((()=>{var t;null!==n&&void 0!==n&&null!==(t=n.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),s.a.createElement(a,{demos:e})}}}]);