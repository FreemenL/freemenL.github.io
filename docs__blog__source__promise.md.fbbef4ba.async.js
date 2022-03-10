(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{PgnQ:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),l=n.n(r),o=n("dEAq"),s=n("H1Ra"),c=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"promise-\u539f\u7406\u89e3\u6790"},l.a.createElement(o["AnchorLink"],{to:"#promise-\u539f\u7406\u89e3\u6790","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"promise \u539f\u7406\u89e3\u6790"),l.a.createElement("p",null,"promise \u662fjs \u5f02\u6b65\u53d1\u5c55\u81f3\u4eca\u7684\u4e00\u4e2a\u65f6\u4ee3\u7684\u4ea7\u7269\xa0 js\u7684\u5f02\u6b65 \u7ecf\u8fc7\u5982\u4e0b\u5386\u7a0b\uff0c\xa0 \u4e8b\u4ef6\u76d1\u542c\xa0 \u56de\u8c03\u51fd\u6570\xa0 \u8ba2\u9605\u53d1\u5e03\xa0"),l.a.createElement("p",null,"promise \u662f\u4e00\u4e2a\u65f6\u4e0b\u5f02\u6b65 \u7684\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\xa0 \xa0\u5176\u6838\u5fc3\u8bbe\u8ba1\u601d\u60f3\u4e3b\u8981\u6982\u62ec\u4e3a\u4ee5\u4e0b\u51e0\u70b9"),l.a.createElement("p",null,"1\uff1a\u6240\u6d89\u53ca\u5230\u7684\u8bbe\u8ba1\u6a21\u5f0f \uff1a \u8ba2\u9605\u53d1\u5e03\u6a21\u5f0f\uff08\u89c2\u5bdf\u8005\u6a21\u5f0f \uff09 \u72b6\u6001\u6a21\u5f0f"),l.a.createElement("p",null,"2 \uff1a\u4e8b\u4ef6\u5faa\u73af"),l.a.createElement("p",null,"promise \u4e2d\u7684 \u4e09\u4e2a\u72b6\u6001\u5206\u522b\u4e3a"),l.a.createElement("p",null,"pending\xa0 \xa0//\u8fdb\u884c\u4e2d fulfilled\xa0 //\u6210\u529f rejected\xa0 //\u5931\u8d25"),l.a.createElement("p",null,"\u72b6\u6001\u53ea\u80fd\u4ecepending \u8f6c\u4e3afulfilled \u6216\u8005rejected\xa0 \u6b64\u4e3apromise\xa0 \u5b88\u62a4\u7684\u4e09\u4e2a\u72b6\u6001\xa0 \xa0\uff08\u72b6\u6001\u6a21\u5f0f\uff09"),l.a.createElement("p",null,"\u56e0\u4e3a\u6d89\u53ca\u5230\u5f02\u6b65\u8c03\u7528 \u5176\u5b9epromise\u8fd8\u662f\u7528\u7684\u8ba2\u9605\u53d1\u5e03\u7684\u539f\u7406 \u6765\u89e3\u51b3\u5f02\u6b65\u8fd9\u4e00\u95ee\u9898\xa0\xa0"),l.a.createElement("p",null,"\u5373 \u4e00\u4e2a\u6210\u529f\u65f6\u7684\u4efb\u52a1\u961f\u5217\xa0 \u5931\u8d25\u65f6\u7684\u4efb\u52a1\u961f\u5217\xa0"),l.a.createElement("p",null,"\u79c1\u6709\u65b9\u6cd5\xa0 resolve \u548creject \u5145\u5f53\u7684\u89d2\u8272\u4e3a \u6539\u53d8\u72b6\u6001 \u548c \u4efb\u52a1\u8ba2\u9605\xa0"),l.a.createElement("p",null,"\u539f\u578b\u65b9\u6cd5\xa0 then \u65b9\u6cd5\u8d1f\u8d23\u6839\u636e\u5f53\u524d\u72b6\u6001\u6765\u8fdb\u884c\u76f8\u5e94\u7684\u903b\u8f91\u5904\u7406\xa0"),l.a.createElement("p",null,"promise A+ \u89c4\u8303\u4e2d \u5f02\u6b65\u53ef\u4ee5\u57fa\u4e8esetTimeout \u548cprocess\xa0 \u533a\u522b\u5c31\u662f\u5728\u4e8b\u4ef6\u5faa\u73af\u4e2d\u6240\u5904\u7684\u4f4d\u7f6e\xa0 \xa0setTimeout \u5728\u5904\u4e8e\u5b8f\u4efb\u52a1 process \u5904"),l.a.createElement("p",null,"\u4e8e\u5fae\u4efb\u52a1\u4e2d \u6ce8\uff1a\uff08 ES6\u4e2d\u7684promise \u5904\u4e8e\u5fae\u4efb\u52a1\u4e2d \u6b64\u5904\u6211\u4eec\u7528setTimeout \u65b9\u5f0f\u5b9e\u73b0\xa0\uff09"),l.a.createElement("p",null,"\u5177\u4f53\u4ee3\u7801\u5982\u4e0b \uff1a \u200b"),l.a.createElement(s["a"],{code:'const PENDING = "pending"; //\u8fdb\u884c\u4e2d\nconst FULFILLED = "fulfilled"; //\u6210\u529f\nconst REJECTED = "rejected"; //\u5931\u8d25\nfunction MyPromise(executor){\n\n\tlet self = this; //\u7f13\u5b58\u5f53\u524dpromise \u7684\u5b9e\u4f8b\n\tself.status = PENDING;\n\t//\u6210\u529f\u56de\u8c03\u4efb\u52a1\u961f\u5217\n\tself.onResolvedCallbacks = [];\n\t//\u5931\u8d25\u56de\u8c03\u7684\u4efb\u52a1\u961f\u5217\u3002\n\tself.onRejectedCallbacks = [];\n\n\t//\u5f53\u8c03\u7528\u6b64\u65b9\u6cd5\u7684\u65f6\u5019\u5982\u679cpromise \u72b6\u6001\u4e3apending \u53ef\u4ee5\u8f6c\u6210\u6210\u529f\u6001\n\t//   \u5982\u679c\u5df2\u7ecf\u662f\u6210\u529f\u6001\u6216\u8005\u5931\u8d25\u6001\u5219\u4ec0\u4e48\u90fd\u4e0d\u505a\n\tfunction resolve(value){\n\t\tif (value instanceof Promise) {\n\t      return value.then(resolve, reject)\n\t    }\n\t    setTimeout(function(){ // \u5f02\u6b65\u6267\u884c\u6240\u6709\u7684\u56de\u8c03\u51fd\u6570  \n\t\t\tif(self.status==PENDING){\n\t\t\t\tself.status=FULFILLED;\n\t\t\t\tself.value = value; //\u6210\u529f\u540e\u4f1a\u6709\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u503c \n\t\t\t\tself.onResolvedCallbacks.forEach(cb=>cb(self.value));\n\t\t\t}\n\t\t})\n\t}\n\n\tfunction reject(reason){\n\t\tsetTimeout(function(){ // \u5f02\u6b65\u6267\u884c\u6240\u6709\u7684\u56de\u8c03\u51fd\u6570\n\t\t\tif(self.status==PENDING){\n\t\t\t\tself.status=REJECTED;\n\t\t\t\tself.value = reason;\n\t\t\t\tself.onRejectedCallbacks.forEach(cb=>cb(self.value));\n\t\t\t}\n\t\t})\n\t}\n\n\ttry{\n\t\t//\u6b64\u51fd\u6570\u53ef\u80fd\u4f1a\u5f02\u5e38 \u6240\u4ee5\u9700\u8981\u6355\u83b7\u3002 \u5982\u679c\u51fa\u9519\u4e86 \u9700\u8981\u7528reject\u6389\u5f53\u524dpromise\n\t\texecutor(resolve,reject);\n\t}catch(err){\n\t\treject(err)\n\t}\n}\n\nMyPromise.prototype.then = function(onFulfilled,onRejected){\n\t//\u524d\u4e24\u53e5\u5224\u65ad\u7528\u6765\u505a \u503c\u7684\u7a7f\u900f\u3002\n   onFulfilled = typeof onFulfilled=="function"?onFulfilled:value=>value;\n   onRejected = typeof onRejected=="function"?onRejected:reason=>{throw reason}\n   let self = this;\n   let promise2;\n   //\u5982\u679c\u5f53\u524d\u7684promise \u72b6\u6001\u5df2\u7ecf\u662f\u9648\u6210\u529f\u6001\u4e86\u3002onFulfilled \u76f4\u63a5\u503c\n   if(self.status===FULFILLED){\n   \t  return promise2 = new MyPromise(function(resolve,reject){\n   \t  \tsetTimeout(function(){ // \u5f02\u6b65\u6267\u884c\u6240\u6709onFulfilled\n\t   \t  \ttry{\n\t   \t  \t\tlet x = onFulfilled(self.value);\n\t   \t  \t\tresolvePromise(promise2,x,resolve,reject)\n\t   \t  \t}catch(err){\n\t   \t  \t\treject(err);\n\t   \t  \t}\n\t   \t })\n   \t  })\n   }\n   if(self.status === REJECTED){\n   \t    return promise2 = new MyPromise(function(resolve,reject){\n   \t    \tsetTimeout(function(){ // \u5f02\u6b65\u6267\u884c\u6240\u6709onRejected\n\t   \t  \t  try{\n\t   \t  \t\t let x = onRejected(self.value);\n\t   \t  \t\t resolvePromise(promise2,x,resolve,reject)\n\t   \t  \t   }catch(err){\n\t   \t  \t\t reject(err);\n\t   \t  \t   }\n\t   \t  \t})\n   \t    })\n   \t  \n   }\n   if(self.status===PENDING){\n   \tpromise2 = new MyPromise(function(resolve,reject){\n   \t  self.onResolvedCallbacks.push(function(){\n   \t  \tlet x = onFulfilled(self.value);\n   \t  \tresolvePromise(promise2,x,resolve,reject)\n\n   \t  })\n   \t  self.onRejectedCallbacks.push(function(){\n   \t  \tlet x = onRejected(self.value);\n   \t  \tresolvePromise(promise2,x,resolve,reject)\n   \t  })\n   \t})\n   }\n}\n\nfunction resolvePromise(promise2, x, resolve, reject) {\n  var then\n  var thenCalledOrThrow = false\n\n  if (promise2 === x) { // \u5bf9\u5e94\u6807\u51c62.3.1\u8282\n    return reject(new TypeError(\'Chaining cycle detected for promise!\'))\n  }\n\n  if (x instanceof Promise) { // \u5bf9\u5e94\u6807\u51c62.3.2\u8282\n    // \u5982\u679cx\u7684\u72b6\u6001\u8fd8\u6ca1\u6709\u786e\u5b9a\uff0c\u90a3\u4e48\u5b83\u662f\u6709\u53ef\u80fd\u88ab\u4e00\u4e2athenable\u51b3\u5b9a\u6700\u7ec8\u72b6\u6001\u548c\u503c\u7684\n    // \u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u505a\u4e00\u4e0b\u5904\u7406\uff0c\u800c\u4e0d\u80fd\u4e00\u6982\u7684\u4ee5\u4e3a\u5b83\u4f1a\u88ab\u4e00\u4e2a\u201c\u6b63\u5e38\u201d\u7684\u503cresolve\n    if (x.status === PENDING) {\n      x.then(function(value) {\n        resolvePromise(promise2, value, resolve, reject)\n      }, reject)\n    } else { // \u4f46\u5982\u679c\u8fd9\u4e2aPromise\u7684\u72b6\u6001\u5df2\u7ecf\u786e\u5b9a\u4e86\uff0c\u90a3\u4e48\u5b83\u80af\u5b9a\u6709\u4e00\u4e2a\u201c\u6b63\u5e38\u201d\u7684\u503c\uff0c\u800c\u4e0d\u662f\u4e00\u4e2athenable\uff0c\u6240\u4ee5\u8fd9\u91cc\u76f4\u63a5\u53d6\u5b83\u7684\u72b6\u6001\n      x.then(resolve, reject)\n    }\n    return\n  }\n\n  if ((x !== null) && ((typeof x === \'object\') || (typeof x === \'function\'))) { // 2.3.3\n    try {\n\n      // 2.3.3.1 \u56e0\u4e3ax.then\u6709\u53ef\u80fd\u662f\u4e00\u4e2agetter\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u591a\u6b21\u8bfb\u53d6\u5c31\u6709\u53ef\u80fd\u4ea7\u751f\u526f\u4f5c\u7528\n      // \u5373\u8981\u5224\u65ad\u5b83\u7684\u7c7b\u578b\uff0c\u53c8\u8981\u8c03\u7528\u5b83\uff0c\u8fd9\u5c31\u662f\u4e24\u6b21\u8bfb\u53d6\n      then = x.then \n      if (typeof then === \'function\') { // 2.3.3.3\n        then.call(x, function rs(y) { // 2.3.3.3.1\n          if (thenCalledOrThrow) return // 2.3.3.3.3 \u5373\u8fd9\u4e09\u5904\u8c01\u9009\u6267\u884c\u5c31\u4ee5\u8c01\u7684\u7ed3\u679c\u4e3a\u51c6\n          thenCalledOrThrow = true\n          return resolvePromise(promise2, y, resolve, reject) // 2.3.3.3.1\n        }, function rj(r) { // 2.3.3.3.2\n          if (thenCalledOrThrow) return // 2.3.3.3.3 \u5373\u8fd9\u4e09\u5904\u8c01\u9009\u6267\u884c\u5c31\u4ee5\u8c01\u7684\u7ed3\u679c\u4e3a\u51c6\n          thenCalledOrThrow = true\n          return reject(r)\n        })\n      } else { // 2.3.3.4\n        resolve(x)\n      }\n    } catch (e) { // 2.3.3.2\n      if (thenCalledOrThrow) return // 2.3.3.3.3 \u5373\u8fd9\u4e09\u5904\u8c01\u9009\u6267\u884c\u5c31\u4ee5\u8c01\u7684\u7ed3\u679c\u4e3a\u51c6\n      thenCalledOrThrow = true\n      return reject(e)\n    }\n  } else { // 2.3.4\n    resolve(x)\n  }\n}\n\nMyPromise.deferred = MyPromise.defer = function() {\n  var dfd = {}\n  dfd.promise = new MyPromise(function(resolve, reject) {\n    dfd.resolve = resolve\n    dfd.reject = reject\n  })\n  return dfd\n}\n\nmodule.exports = MyPromise;',lang:"js"})))}));t["default"]=e=>{var t=l.a.useContext(o["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(c,{demos:n})}}}]);