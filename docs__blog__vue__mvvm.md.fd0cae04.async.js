(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"3Eie":function(e,n,t){"use strict";t.r(n);var a=t("FU0I"),r=t.n(a),l=t("F/hi"),i=t("P/fr"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"vue-mvvm-\u539f\u7406"},r.a.createElement(l["AnchorLink"],{to:"#vue-mvvm-\u539f\u7406","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"vue mvvm \u539f\u7406"),r.a.createElement("h3",{id:"\u524d\u8a00"},r.a.createElement(l["AnchorLink"],{to:"#\u524d\u8a00","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u524d\u8a00"),r.a.createElement("p",null,"MVVM \u662f Model-View-ViewModule \u7684\u7f29\u5199\uff0c\u4ed6\u662f\u524d\u7aef\u7684\u4e00\u79cd\u67b6\u6784\u6a21\u5f0f\uff0cView\u548cModel\u4e4b\u95f4\u901a\u8fc7ViewModel\u8fdb\u884c\u4ea4\u4e92\uff0c\u5176\u6838\u5fc3\u662fViewModel\u901a\u8fc7\u53cc\u5411\u6570\u636e\u7ed1\u5b9a\u5c06View\u548cModel\u8fde\u63a5\u8d77\u6765\u4e86\uff0c\u8fd9\u4f7f\u5f97View\u6570\u636e\u7684\u53d8\u5316\u4f1a\u540c\u6b65\u5230Model\u4e2d\uff0c\u800cModel\u6570\u636e\u7684\u53d8\u5316\u4e5f\u4f1a\u7acb\u5373\u53cd\u5e94\u5230View\u4e0a\uff0c\u672c\u6587\u4e3b\u8981\u9610\u8ff0\u7684\u662fvue\u4e2d mvvm\u7684\u5b9e\u73b0\u539f\u7406\u3002"),r.a.createElement("h3",{id:"\u5b9e\u73b0\u539f\u7406"},r.a.createElement(l["AnchorLink"],{to:"#\u5b9e\u73b0\u539f\u7406","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u539f\u7406"),r.a.createElement("p",null,"vue \u4e2d\u5b9e\u73b0 mvvm \u7684\u6838\u5fc3\u662f Object.defineProperty \u7684 getter\u548csetter \u548c \u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u5728\u5b83\u7684\u5b9e\u73b0\u539f\u7406\u4e2d\u67095\u4e2a\u6bd4\u8f83\u91cd\u8981\u7684\u6982\u5ff5\uff1a"),r.a.createElement(i["a"],{code:"1. vue \u7c7b\n  2. Observer \u7c7b\n  3. Compiler \u7c7b\n  4. Dep \u7c7b\n  5. Watcher\u7c7b",lang:"bash"}),r.a.createElement("p",null,"\u6574\u4f53\u7684\u5b9e\u73b0\u601d\u8def:"),r.a.createElement(i["a"],{code:"1. \u521d\u59cb\u5316Vue\u5bf9\u8c61  \u5c06 el \u548c data \u6302\u8f7d\u5230vue\u5b9e\u4f8b\u4e0a\n2. \u5b9e\u4f8b\u5316 Observer \u901a\u8fc7 Object.defineProperty \u5bf9data\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u52ab\u6301,\u5728get\u65b9\u6cd5\u4e2d\u6dfb\u52a0\u8ba2\u9605\uff0cset\u65b9\u6cd5\u4e2d\u5f53\u76ee\u6807\u503c\u53d1\u751f\u6539\u53d8\u7684\u65f6\u5019\u89e6\u53d1Dep\u4e2d\u7684notify\u3002\n3. \u5b9e\u4f8b\u5316 Compiler \u5bf9\u8c61\u5206\u522b\u5bf9\u8282\u70b9\u578b\u6a21\u7248\u548c\u6587\u672c\u578b\u6a21\u7248\u8fdb\u884c\u7f16\u8bd1, \u7f16\u8bd1\u7684\u540c\u65f6\u7ed9\u8282\u70b9\u6dfb\u52a0\u6570\u636e\u76d1\u542c\uff0c\u5f53\u6570\u636e\u6539\u53d8\u7684\u65f6\u5019\u89e6\u53d1\u76f8\u5e94\u8bd5\u56fe\u7684\u66f4\u65b0\u3002",lang:"bash"}),r.a.createElement("p",null,"\u4ee3\u7801\u5b9e\u73b0:"),r.a.createElement(i["a"],{code:"class Dep {\n  constructor(){\n    this.subs = [];\n  }\n  // \u8ba2\u9605 \n  addSub(watcher){ \n    this.subs.push(watcher);\n  }\n  // \u53d1\u5e03\n  notify(){\n    this.subs.forEach((watcher)=>{\n      watcher.update();\n    })\n  }\n}\n\n// \u89c2\u5bdf\u8005\u6a21\u5f0f \u89c2\u5bdf\u8005/\u88ab\u89c2\u5bdf\u8005\nclass Watcher {\n  constructor(vm,expr,cb){\n    this.vm = vm;\n    this.expr = expr;\n    this.cb = cb;\n    this.oldValue = this.get(); \n  }\n  get(){ \n    Dep.target = this;\n    return compileUtil.getVal(this.vm,this.expr);\n  }\n  update(){\n    let newValue =  compileUtil.getVal(this.vm,this.expr);\n    if(newValue!==this.oldValue){\n      this.cb(newValue);\n    }\n  }\n}\n\nclass Observer {\n  constructor(data){\n    this.walk(data);\n  } \n  walk(data){\n    if(data && typeof data==='object') {\n      for(let key in data){\n        this.defineReactive(data,key,data[key]);\n      }\n    }\n  } \n  defineReactive(obj,key,value){\n    this.walk(value); \n    let dep = new Dep();  // \u7ed9 data \u4e0a\u7684\u6bcf\u4e2a\u5c5e\u6027\u90fd\u52a0\u4e0a \u53d1\u5e03\u8ba2\u9605\n    // \u7528 Object.defineProperty \u5b9e\u73b0\u6570\u636e\u52ab\u6301\n    Object.defineProperty(obj,key,{\n      get(){\n        Dep.target && dep.addSub(Dep.target);\n        return value;\n      }, \n      set: (newVal) => {\n        if(value!==newVal){\n          this.walk(newVal);\n          value = newVal;\n          dep.notify();\n        }\n      }\n    })\n  }\n}\n\n\nclass Compiler {\n  constructor(el,vm){\n    this.vm = vm;\n    // \u5224\u65adel\u5c5e\u6027\u662f\u4e0d\u662f\u4e00\u4e2a\u5143\u7d20\uff0c\u5982\u679c\u4e0d\u662f\u5143\u7d20\uff0c\u90a3\u5c31\u83b7\u53d6\u4ed6 \n    this.el = this.isElementNode(el)?el:document.querySelector(el);\n    // \u628a\u5f53\u524d\u8282\u70b9\u79fb\u52a8\u5230\u5185\u5b58\u4e2d\n    let fragment = this.node2Fragment(this.el);\n    // \u628a\u8282\u70b9\u4e2d\u7684\u5185\u5bb9\u8fdb\u884c\u66ff\u6362\n    this.compile(fragment);\n    // \u7f16\u8bd1\u6a21\u7248 \u7528\u6570\u636e\u7f16\u8bd1 \n    \n    // \u628a\u5185\u5bb9\u585e\u5230\u9875\u9762\u4e2d\n    this.el.appendChild(fragment);\n  }\n\n  isDirective(directive){\n    return directive.startsWith('v-');\n  }\n\n  // \u7f16\u8bd1\u5143\u7d20\u8282\u70b9\n  compileElement(node) {\n    let attributes = node.attributes;\n    [...attributes].forEach(attr=>{\n      let { name,value:expr } = attr;  \n      if(this.isDirective(name)){\n        const [,directive] = name.split('-');\n        const [directiveName,eventName] = directive.split(\":\");\n        compileUtil[directiveName](node,expr,this.vm,eventName);\n      }\n    })\n  }\n\n  // \u7f16\u8bd1\u6587\u672c\u8282\u70b9\n  compileText(node){\n    const content = node.textContent;\n    if(/\\{\\{.+?\\}\\}/.test(content)){\n      compileUtil['text'](node,content,this.vm);\n    }\n  } \n  // \u7f16\u8bd1\u5185\u5b58\u4e2d\u7684DOM  \n  compile(node){\n    const childNodes = node.childNodes;\n    [...childNodes].forEach(child=>{\n      if(this.isElementNode(child)){\n        this.compileElement(child);\n        this.compile(child);\n      }else{\n        this.compileText(child);\n      }\n    })\n  }   \n  isElementNode(el){\n    return el.nodeType===1;\n  }\n  node2Fragment(node){\n    let fragment = document.createDocumentFragment();\n    let firstChild;\n    while(firstChild  = node.firstChild){\n      fragment.appendChild(firstChild);\n    }\n    return fragment;\n  }\n};\n\nconst compileUtil = {\n    on(node,expr,vm,eventName){\n      node.addEventListener(eventName,(event)=>{s\n        vm[expr].call(vm,event);\n      })\n    },\n    // \u83b7\u53d6 $data \u4e2d\u7684\u5bf9\u5e94\u7684\u6570\u636e\n    getVal(vm,expr){\n      return expr.split('.').reduce((data,current)=>{\n        return data[current.trim()]\n      },vm.$data);\n    }, \n    setValue(vm,expr,value){\n      expr.split(\".\").reduce((data,current,index,arr)=>{\n        if(index==arr.length-1){\n          return data[current]=value;\n        }\n        return data[current];\n      }, vm.$data);\n    },  \n    model(node,expr,vm){ \n      const fn = this.updater['modelUpdater'];\n      // \u5b9e\u4f8b\u5316 Watcher \u7684\u65b9\u5f0f \u6dfb\u52a0\u76d1\u542c\u3002\n      new Watcher(vm,expr,(newValue)=>{\n        fn(node,newValue);\n      });\n      const value = this.getVal(vm,expr);\n      node.addEventListener(\"input\",(e)=>{\n        let value = e.target.value;\n        this.setValue(vm,expr,value);\n      }); \n      fn(node,value);\n    },\n    html(node,expr,vm){\n      const fn = this.updater['htmlUpdater'];\n      // \u5b9e\u4f8b\u5316 Watcher \u7684\u65b9\u5f0f \u6dfb\u52a0\u76d1\u542c\u3002\n      new Watcher(vm,expr,(newValue)=>{\n        fn(node,newValue);\n      });\n      const value = this.getVal(vm,expr);\n      fn(node,value);\n    },\n    getContentValue(vm,expr){\n      return expr.replace(/\\{\\{(.+?)\\}\\}/g,(...args)=>{\n        return this.getVal(vm,args[1]);\n      }) \n    },\n    text(node,expr,vm) {\n      const fn = this.updater['textUpdater'];\n      let content = expr.replace(/\\{\\{(.+?)\\}\\}/g,(...args)=>{\n        // \u5b9e\u4f8b\u5316 Watcher \u7684\u65b9\u5f0f \u6dfb\u52a0\u76d1\u542c\u3002\n        new Watcher(vm,args[1],()=>{\n          fn(node, this.getContentValue(vm,expr));\n        });\n        return this.getVal(vm,args[1]);\n      });\n      fn(node, content);\n    },\n    updater:{\n      modelUpdater(node,value){\n        node.value = value;\n      },  \n      textUpdater(node,value){\n        node.textContent = value;\n      },\n      htmlUpdater(node,value){\n        node.innerHTML = value;\n      }\n    }\n}\n\nclass Vue {\n  constructor(options){\n    this.$el = options.el;\n    this.$data = options.data;\n    let computed = options.computed; \n    const methods = options.methods;\n    if(this.$el) {\n      // \u628a\u6570\u636e\u5168\u90e8\u8f6c\u5316\u6210\u7528 Object.defineProperty \u6765\u5b9a\u4e49;\n      new Observer(this.$data);\n      // computed \u539f\u7406\n      for(let key in computed){ // \u6709\u4f9d\u8d56\u5173\u7cfb \u6570\u636e\n        Object.defineProperty(this.$data,key,{\n          get:()=>{ \n            return computed[key].call(this);\n          }\n        })\n      };\n      // methods \u539f\u7406\n      for(let key in methods){ // \u6709\u4f9d\u8d56\u5173\u7cfb \u6570\u636e\n        Object.defineProperty(this,key,{\n          get:()=>{\n            return methods[key];\n          }\n        })\n      };\n      // vm\u4e0a\u76f4\u63a5\u83b7\u53d6\u6570\u636e: \u628a\u6570\u636e\u83b7\u53d6\u64cd\u4f5c vm \u4e0a\u7684\u53d6\u503c\u64cd\u4f5c\u90fd\u4ee3\u7406\u5230 vm.$data \u4e0a; \n      this.proxyVm(this.$data);\n      new Compiler(this.$el,this);\n    } \n  }\n  proxyVm(data){\n    for(let key in data){\n      Object.defineProperty(this,key,{\n        get(){\n            return data[key];\n        },\n        set(newValue){\n          data[key] =  newValue;\n        }\n      })\n    }\n  } \n}",lang:"js"})))}));n["default"]=e=>{var n=r.a.useContext(l["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:t})}}}]);