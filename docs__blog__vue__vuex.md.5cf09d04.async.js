(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{FLnC:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),l=n("dEAq"),r=n("H1Ra"),s=o.a.memo((e=>{e.demos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"vuex-\u6e90\u7801\u89e3\u8bfb"},o.a.createElement(l["AnchorLink"],{to:"#vuex-\u6e90\u7801\u89e3\u8bfb","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"vuex \u6e90\u7801\u89e3\u8bfb"),o.a.createElement("h3",{id:"\u524d\u8a00"},o.a.createElement(l["AnchorLink"],{to:"#\u524d\u8a00","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u524d\u8a00"),o.a.createElement("p",null,"\u5728\u8f83\u4e3a\u590d\u6742\u7684web\u5e94\u7528\u4e2d\u901a\u5e38\u4f1a\u9762\u4e34\u72b6\u6001\u7ba1\u7406\u7684\u95ee\u9898\uff0c\u5173\u4e8e\u8fd9\u4e00\u95ee\u9898\u4e0d\u540c\u7684web\u6846\u67b6\u6709\u5404\u81ea\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f8b\u5982react\u4e2d\u7684react-redux\u3002 vuex\u662fvue\u4e2d\u72b6\u6001\u7ba1\u7406\u7684\u89e3\u51b3\u65b9\u6848\u3002vuex \u4e2d\u7684\u5173\u952e\u6982\u5ff5\u5982\u4e0b:"),o.a.createElement("ul",null,o.a.createElement("li",null,"state\uff1a        \u7528\u4e8e\u4fdd\u5b58\u6211\u4eec\u5e94\u7528\u7684\u72b6\u6001\u3002"),o.a.createElement("li",null,"mapState\uff1a     \u5904\u7406\u9876\u5c42\u72b6\u6001\u5230\u7ec4\u4ef6\u7684\u6620\u5c04\u5173\u7cfb\u3002"),o.a.createElement("li",null,"Getters\uff1a      \u5bf9\u72b6\u6001\u8fdb\u884c\u516c\u5171\u7684\u5904\u7406\u3002"),o.a.createElement("li",null,"mapGetters\uff1a   \u5904\u7406 Getter \u5230\u7ec4\u4ef6\u7684\u6620\u5c04\u5173\u7cfb\u3002"),o.a.createElement("li",null,"mutations\uff1a     \u4e1a\u52a1\u7ec4\u4ef6\u4e2d\u901a\u8fc7$store.commit \u540c\u6b65\u4fee\u6539state\u3002")),o.a.createElement("p",null,"mapMutations\uff1a \u7b80\u5316 mutation \u7684\u8c03\u7528\u3002"),o.a.createElement("ul",null,o.a.createElement("li",null,"Actions\uff1a       \u5b50\u7ec4\u4ef6\u4e2d\u901a\u8fc7 dispatch action \u5f02\u6b65\u4fee\u6539\u5e94\u7528\u72b6\u6001\u3002"),o.a.createElement("li",null,"mapActions\uff1a   \u7b80\u5316action\u7684\u8c03\u7528\u3002"),o.a.createElement("li",null,"Modules\uff1a     \u5bf9 store \u8fdb\u884c\u6a21\u5757\u5316\u7ba1\u7406\u3002")),o.a.createElement("h3",{id:"vuex\u4e2d\u7684\u6570\u636e\u6d41\u5411"},o.a.createElement(l["AnchorLink"],{to:"#vuex\u4e2d\u7684\u6570\u636e\u6d41\u5411","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"vuex\u4e2d\u7684\u6570\u636e\u6d41\u5411"),o.a.createElement("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ef5e26010614adaaf0cae2848cf5dbc~tplv-k3u1fbpfcp-watermark.image"}),o.a.createElement("p",null,"\u5982\u56fe\u53ef\u4ee5\u770b\u51fa vuex \u4e2d\u7684\u6570\u636e\u6d41\u5411\uff1a \u5b50\u7ec4\u4ef6\u4e2d dispatch action \u8bf7\u6c42\u540e\u7aef\u63a5\u53e3\uff0c\u62ff\u5230\u7ed3\u679c\u540e\u63d0\u4ea4mutations \u6539\u53d8\u76f8\u5e94\u7684\u72b6\u6001"),o.a.createElement("h3",{id:"\u6e90\u7801\u89e3\u8bfb"},o.a.createElement(l["AnchorLink"],{to:"#\u6e90\u7801\u89e3\u8bfb","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u6e90\u7801\u89e3\u8bfb:"),o.a.createElement("p",null,"vuex \u7684\u672c\u8d28\u7c7b\u4f3c\u4e8e react-redux\uff0c\u90fd\u662f\u8ba2\u9605/\u53d1\u5e03\u6a21\u5f0f\u7684\u4e00\u79cd\u5b9e\u8df5\u3002"),o.a.createElement("ol",null,o.a.createElement("li",null,"\u9996\u5148\u6211\u4eec\u5f97\u77e5\u9053 \u88ab vue use \u7684\u63d2\u4ef6\u53ef\u4ee5\u662f\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u662f\u51fd\u6570\uff0c\u5982\u679c\u662f\u5bf9\u8c61\u7684\u8bdd\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2ainstall\u65b9\u6cd5\u3002 \u6e90\u7801\u5982\u4e0b:")),o.a.createElement(r["a"],{code:"const install = (_Vue)=>{\n  Vue = _Vue;\n  Vue.mixin({\n    // \u901a\u8fc7 Vue.mixin \u7ed9\u6240\u6709\u7684\u7ec4\u4ef6\u90fd\u6df7\u5165\u4e00\u4e2a beforeCreate \u751f\u547d\u5468\u671f \u7528\u4e8e\u6ce8\u518c $store \n    \n    // \u8fd9\u6837\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u6a21\u7248\u8bed\u6cd5\u4e2d\u4f7f\u7528\n    beforeCreate(){\n      if( this.$options && this.$options.store ){\n        this.$store = this.$options.store; \n      } else{ \n        this.$store = this.$parent && this.$parent.$store;\n      } \n    } \n  }) \n};",lang:"js"}),o.a.createElement("ol",{start:2},o.a.createElement("li",null,"\u521b\u5efaStore\u7c7b")),o.a.createElement(r["a"],{code:"// new Vuex.Store\nclass Store { \n  constructor(options={}){\n    // \u5c06\u7528\u6237\u7684\u72b6\u6001\u653e\u5165 store \u4e2d\u3002\n    this.s = new Vue({ // \u5c06 state \u8f6c\u6210\u54cd\u5e94\u5f0f\u3002\n      data(){\n        return {\n          state: options.state\n        }\n      }\n    });\n    this.getters = {};\n    this.mutations = {};\n    this.actions = {};\n    this._modules = new ModuleCollection(options);\n    //  \u9012\u5f52\u5c06\u7ed3\u679c\u8fdb\u884c\u5206\u7c7b;\n    installModules(this,this.state,[],this._modules.root);\n  }\n\n  dispatch = (actionName,pyload)=>{\n    this.actions[actionName](pyload);\n  }\n\n  commit = (mutationName,pyload) => {\n    this.mutations[mutationName].forEach(fn=>{\n      fn(pyload); \n    });\n  }\n  \n  // \u901a\u8fc7 new Vue \u7684\u65b9\u5f0f\u5c06 state \u8f6c\u6362\u6210\u54cd\u5e94\u5f0f\u7684\u3002 \n  get state(){\n    return this.s.state;\n  }\n}",lang:"js"}),o.a.createElement("p",null,"Store \u7c7b\u4e2d\u9996\u5148\u4f1a\u521d\u59cb\u5316 getters\uff0cmutations\uff0cactions \u4e09\u4e2a\u5b9e\u4f8b\u5c5e\u6027\uff0c\u4e4b\u540e\u901a\u8fc7ModuleCollection \u65b9\u6cd5\u9010\u7ea7\u6ce8\u518c\u5404\u6a21\u5757\u3002"),o.a.createElement(r["a"],{code:"class ModuleCollection {\n\n  constructor(options){\n    this.register([],options);\n  }\n\n  register (path, rootModule){\n    // \u5b9a\u4e49\u597d\u6a21\u5757\u56fa\u5b9a\u683c\u5f0f\n    const module = {\n      _rawModule: rootModule, \n      _children:  {},\n      state: rootModule.state\n    };\n\n    if( path.length===0 ){\n      this.root = module;\n    } else {\n      const parent = path.slice(0,-1).reduce((root,current)=>{\n        return root._children[current];\n      },this.root);\n      parent._children[path[path.length-1]] = module;\n    }\n    // \u9012\u5f52\u6302\u8f7d\u6a21\u5757\n    if(rootModule.modules){\n      forEach(rootModule.modules,(moduleName,mod)=>{\n        this.register(path.concat(moduleName),mod);\n      });\n    }\n  }\n};",lang:"js"}),o.a.createElement("p",null,"\u6700\u540e\u901a\u8fc7 installModules \u65b9\u6cd5\u6536\u96c6\u5404\u5b50\u6a21\u5757\u4e0a\u7684 state\uff0cgetters\uff0cmutations\uff0cactions \u5168\u90e8\u6302\u8f7d\u5230\u6839store\u4e0a\u3002"),o.a.createElement(r["a"],{code:"const installModules = (store,rootState,path,rootModule) => {\n  // \u628a\u5b50\u6a21\u5757\u7684 state \u5168\u90e8\u6302\u8f7d\u5230\u6839\u4e0a\u3002\n  if(path.length>0){\n    let parent = path.slice(0,-1).reduce((root,current)=>{\n      return root[current];\n    },rootState);\n\n    Vue.set(parent,path[path.length-1],rootModule.state);\n  };  \n\n  // \u628a\u5b50\u6a21\u5757\u7684 getters \u5168\u90e8\u6302\u8f7d\u5230\u6839\u4e0a\u3002\n  let getters = rootModule._rawModule.getters;\n  if(getters){\n    forEach(getters,(getterName,fn)=>{\n      Object.defineProperty(store.getters, getterName,{\n        get(){\n          // \u8ba9 getter \u6267\u884c\u5c06\u81ea\u5df1\u7684\u72b6\u6001\u4f20\u5165\n          return fn(rootModule.state,getters); \n        }\n      })\n    });\n  };\n  \n  // \u6536\u96c6\u6240\u6709\u6a21\u5757\u4e2d\u7684 mutations \u7ec4\u88c5mutations\u7684\u8ba2\u9605\u6570\u7ec4\n  let mutations = rootModule._rawModule.mutations;\n  if(mutations){\n    forEach(mutations,(mutationName,fn)=>{\n      let mutations = store.mutations[mutationName] || [];\n      mutations.push((pyload)=>{\n        fn(rootModule.state,pyload);\n      });\n      store.mutations[mutationName] = mutations;\n    });\n  };  \n  // \u6536\u96c6\u6240\u6709\u6a21\u5757\u4e2d\u7684 actions \u7ec4\u88c5actions\u7684\u8ba2\u9605\u6570\u7ec4\n  let actions = rootModule._rawModule.actions;\n  if(actions){\n    forEach(actions,(actionsName,fn)=>{\n      let actions = store.actions[actionsName] || [];\n      actions.push((pyload)=>{\n        fn(rootModule.state,pyload);\n      });\n      store.actions[actionsName] = actions;\n    });\n  };\n\n  // \u9012\u5f52\u6536\u96c6\u5b50\u6a21\u5757\u4e2d\u7684\u6570\u636e;\n  forEach(rootModule._children,(moduleName,moudle)=>{\n    installModules(store,rootState, path.concat(moduleName),moudle);  \n  });\n};",lang:"js"})))}));t["default"]=e=>{var t=o.a.useContext(l["context"]),n=t.demos;return o.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),o.a.createElement(s,{demos:n})}}}]);