(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{fOuQ:function(e,n,t){"use strict";t.r(n);var a=t("xwgP"),r=t.n(a),s=t("nFtg"),o=t("INx8"),l=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"koa-\u6e90\u7801\u89e3\u8bfb"},r.a.createElement(s["AnchorLink"],{to:"#koa-\u6e90\u7801\u89e3\u8bfb","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Koa \u6e90\u7801\u89e3\u8bfb"),r.a.createElement("h3",{id:"koa-\u6846\u67b6\u4ecb\u7ecd"},r.a.createElement(s["AnchorLink"],{to:"#koa-\u6846\u67b6\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Koa \u6846\u67b6\u4ecb\u7ecd"),r.a.createElement("p",null,"koa \u662f\u7531 Express \u539f\u73ed\u4eba\u9a6c\u6253\u9020\u7684\uff0c\u81f4\u529b\u4e8e\u6210\u4e3a\u4e00\u4e2a\u66f4\u5c0f\u3001\u66f4\u5bcc\u6709\u8868\u73b0\u529b\u3001\u66f4\u5065\u58ee\u7684 Web \u6846\u67b6\u3002\u4f7f\u7528 koa \u7f16\u5199 web \u5e94\u7528\uff0c\u901a\u8fc7\u7ec4\u5408\u4e0d\u540c\u7684 generator\uff0c\u53ef\u4ee5\u514d\u9664\u91cd\u590d\u7e41\u7410\u7684\u56de\u8c03\u51fd\u6570\u5d4c\u5957\uff0c\u5e76\u6781\u5927\u5730\u63d0\u5347\u9519\u8bef\u5904\u7406\u7684\u6548\u7387\u3002koa \u4e0d\u5728\u5185\u6838\u65b9\u6cd5\u4e2d\u7ed1\u5b9a\u4efb\u4f55\u4e2d\u95f4\u4ef6\uff0c\u5b83\u4ec5\u4ec5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u4f18\u96c5\u7684\u51fd\u6570\u5e93\uff0c\u4f7f\u5f97\u7f16\u5199 Web \u5e94\u7528\u53d8\u5f97\u5f97\u5fc3\u5e94\u624b\u3002"),r.a.createElement("h3",{id:"\u7279\u70b9"},r.a.createElement(s["AnchorLink"],{to:"#\u7279\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7279\u70b9"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u8f7b\u91cf\u3001\u65e0\u6346\u7ed1"),r.a.createElement("li",null,"\u4e2d\u95f4\u4ef6\u67b6\u6784"),r.a.createElement("li",null,"\u901a\u8fc7\u4e0d\u540c\u7684 generator \u4ee5\u53ca await/async \u66ff\u4ee3\u4e86\u56de\u8c03"),r.a.createElement("li",null,"\u589e\u5f3a\u7684\u9519\u8bef\u5904\u7406"),r.a.createElement("li",null,"\u7b80\u5355\u6613\u7528\u7684 api")),r.a.createElement("h3",{id:"\u7b80\u5355\u4f7f\u7528"},r.a.createElement(s["AnchorLink"],{to:"#\u7b80\u5355\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u4f7f\u7528"),r.a.createElement("p",null,"Koa \u5bf9 node \u670d\u52a1\u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u5e76\u63d0\u4f9b\u4e86\u7b80\u5355\u6613\u7528\u7684 API\u3002\u5047\u5982\u6211\u4eec\u60f3\u5728\u8bf7\u6c42 3000 \u7aef\u53e3\u65f6\u8fd4\u56de hello, node! \u7684\u6570\u636e\uff0c\u4f7f\u7528\u539f\u751f node \u5b9e\u73b0\u4ee3\u7801\u5982\u4e0b"),r.a.createElement(o["a"],{code:"const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.end('hello, node!');\n});\n\nserver.listen(3000, () => {\n  console.log('server is running on 3000...');\n});",lang:"js"}),r.a.createElement("p",null,"\u4f7f\u7528 Koa \u5b9e\u73b0\u5982\u4e0b\uff1a"),r.a.createElement(o["a"],{code:"const Koa = require('koa');\nconst app = new Koa();\n\napp.use((ctx, next) => {\n  ctx.body = 'hello, node!';\n});\n\napp.listen(3000, () => {\n  console.log('server is running on 3000...');\n});",lang:"js"}),r.a.createElement("p",null,"\u901a\u8fc7\u5bf9\u6bd4\u53ef\u4ee5\u53d1\u73b0\uff0ckoa \u5b9e\u73b0\u65b9\u5f0f\u901a\u8fc7 new Koa() \u521b\u5efa\u4e86\u4e00\u4e2a koa \u5b9e\u4f8b\uff0c\u5b9e\u4f8b\u4e0a\u6709 use \u65b9\u6cd5\uff0cuse \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u63a5\u6536 ctx \u548c next \u4e24\u4e2a\u53c2\u6570\u3002\u5c31\u8fd9\u7b80\u5355\u7684\u51e0\u70b9\uff0c\u57fa\u672c\u5c31\u7ec4\u6210\u4e86 koa \u7684\u5168\u90e8\u5185\u5bb9\u3002"),r.a.createElement("h3",{id:"\u4e2d\u95f4\u4ef6\u548c\u6d0b\u8471\u5708\u6a21\u578b"},r.a.createElement(s["AnchorLink"],{to:"#\u4e2d\u95f4\u4ef6\u548c\u6d0b\u8471\u5708\u6a21\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4e2d\u95f4\u4ef6\u548c\u6d0b\u8471\u5708\u6a21\u578b"),r.a.createElement("p",null,"\u4e2d\u95f4\u4ef6\u662f Koa \u7684\u6838\u5fc3\uff0ckoa \u901a\u8fc7 use() \u53bb\u8c03\u7528\u4e00\u7cfb\u5217\u7684\u4e2d\u95f4\u4ef6\uff0c\u5e76\u901a\u8fc7 next() \u5c06\u4e0a\u4e0b\u6587\u4ea4\u7ed9\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u53bb\u8fdb\u884c\u5904\u7406\u3002\u5f53\u6ca1\u6709\u4e0b\u4e00\u4e2a next() \u53ef\u6267\u884c\u4e4b\u540e\uff0c\u518d\u5012\u5e8f\u6267\u884c\u6bcf\u4e2a use() \u56de\u8c03\u51fd\u6570\u4e2d next \u4e4b\u540e\u7684\u903b\u8f91\u3002"),r.a.createElement("p",null,"\u8fd9\u5c31\u662f koa \u7684\u6d0b\u8471\u5708\u6a21\u578b\uff1a"),r.a.createElement("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a3deece4df4464acbfab60883b843b~tplv-k3u1fbpfcp-watermark.image"}),r.a.createElement("p",null,"\u5982\u4e0b\u4e00\u6bb5\u4ee3\u7801\uff0c\u5728\u8bf7\u6c42 localhost:3000 \u7aef\u53e3\u540e node \u63a7\u5236\u53f0\u6253\u5370\u987a\u5e8f\u4e3a: 1\u30013\u30015\u30016\u30014\u30012:"),r.a.createElement(o["a"],{code:"const Koa = require('koa');\nconst app = new Koa();\n\napp.use((ctx, next) => {\n  console.log(1);\n  next();\n  console.log(2);\n});\n\napp.use((ctx, next) => {\n  console.log(3);\n  next();\n  console.log(4);\n});\n\napp.use((ctx, next) => {\n  console.log(5);\n  ctx.body = 'hello, node!';\n  console.log(6);\n});\n\napp.listen(3000, () => {\n  console.log('server is running on 3000...');\n});",lang:"js"}),r.a.createElement("h3",{id:"koa-\u6e90\u7801\u7ed3\u6784"},r.a.createElement(s["AnchorLink"],{to:"#koa-\u6e90\u7801\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Koa \u6e90\u7801\u7ed3\u6784"),r.a.createElement("p",null,r.a.createElement(s["Link"],{to:"https://github.com/koajs/koa"},"koa \u6e90\u7801\u7ed3\u6784")),r.a.createElement("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58566dcd3e5a4ef995662e44187f7d85~tplv-k3u1fbpfcp-watermark.image"}),r.a.createElement("p",null,"Koa \u7684\u6838\u5fc3\u6587\u4ef6\u4e00\u5171\u6709\u56db\u4e2a: ",r.a.createElement("code",null,"application.js"),"\u3001",r.a.createElement("code",null,"context.js"),"\u3001",r.a.createElement("code",null,"request.js"),"\u3001",r.a.createElement("code",null,"response.js"),"\u6240\u6709\u7684\u4ee3\u7801\u52a0\u8d77\u6765\u4e0d\u5230 2000 \u884c\uff0c\u5341\u5206\u7684\u8f7b\u4fbf\uff0c\u800c\u4e14\u5927\u91cf\u4ee3\u7801\u96c6\u4e2d\u5728 request.js \u548c response.js \u5bf9\u4e8e\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u7684\u5904\u7406\uff0c\u6838\u5fc3\u4ee3\u7801\u53ea\u6709\u51e0\u767e\u884c\u3002"),r.a.createElement("h3",{id:"application"},r.a.createElement(s["AnchorLink"],{to:"#application","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"application"),r.a.createElement("p",null,"application.js \u662f koa \u7684\u5165\u53e3\u6587\u4ef6\uff0c\u91cc\u9762\u5bfc\u51fa\u4e86 koa \u7684\u6784\u9020\u51fd\u6570\uff0c\u6784\u9020\u51fd\u6570\u4e2d\u5305\u542b\u4e86 koa \u7684\u4e3b\u8981\u529f\u80fd\u5b9e\u73b0\u3002"),r.a.createElement("h5",{id:"listen"},r.a.createElement(s["AnchorLink"],{to:"#listen","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"listen"),r.a.createElement("p",null,"application \u6784\u9020\u51fd\u6570\u9996\u5148\u901a\u8fc7 node \u4e2d http \u6a21\u5757\uff0c\u5b9e\u73b0\u4e86 listen \u529f\u80fd:"),r.a.createElement(o["a"],{code:"listen(...args) {\n    debug('listen');\n    const server = http.createServer(this.callback());\n    return server.listen(...args);\n}",lang:"js"}),r.a.createElement("h5",{id:"use"},r.a.createElement(s["AnchorLink"],{to:"#use","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"use"),r.a.createElement("p",null,"use \u65b9\u6cd5\u5c06\u63a5\u6536\u5230\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\uff0c\u5168\u90e8\u6dfb\u52a0\u5230\u4e86 this.middleware \u4e2d\uff0c\u4ee5\u4fbf\u540e\u9762\u6309\u987a\u5e8f\u8c03\u7528\u5404\u4e2a\u4e2d\u95f4\u4ef6\u3002\u540c\u65f6\u4e3a\u4e86\u517c\u5bb9 koa1 \u4e2d\u7684 use \u4f7f\u7528\uff0c\u5bf9\u4e8e generator \u7c7b\u578b\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\uff0c\u4f1a\u901a\u8fc7 koa-convert \u5e93\u5c06\u5176\u8fdb\u884c\u8f6c\u6362\uff0c\u4ee5\u517c\u5bb9 koa2 \u4e2d\u7684 koa \u7684\u9012\u5f52\u8c03\u7528\u3002"),r.a.createElement(o["a"],{code:"use(fn) {\n    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');\n    if (isGeneratorFunction(fn)) { // \u517c\u5bb9 koa1 \u7684 use \u7528\u6cd5\n      deprecate('Support for generators will be removed in v3. ' +\n                'See the documentation for examples of how to convert old middleware ' +\n                'https://github.com/koajs/koa/blob/master/docs/migration.md');\n      fn = convert(fn);\n    }\n    debug('use %s', fn._name || fn.name || '-');\n    this.middleware.push(fn);\n    return this;\n}",lang:"js"}),r.a.createElement("h5",{id:"callback"},r.a.createElement(s["AnchorLink"],{to:"#callback","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"callback"),r.a.createElement("p",null,"\u4e0a\u9762 listen \u51fd\u6570\u5728\u670d\u52a1\u542f\u52a8\u65f6\uff0ccreateServer \u51fd\u6570\u4f1a\u8fd4\u56de callback \u51fd\u6570\u7684\u6267\u884c\u7ed3\u679c\u3002"),r.a.createElement("p",null,"\u5728\u670d\u52a1\u542f\u52a8\u65f6\uff0ccallback \u51fd\u6570\u505a\u4e86\u4e2d\u95f4\u4ef6\u7684\u5408\u5e76\uff0c\u76d1\u542c\u6846\u67b6\u5c42\u7684\u9519\u8bef\u8bf7\u6c42\u7b49\u529f\u80fd\u3002"),r.a.createElement("p",null,"\u7136\u540e\u8fd4\u56de\u4e86 handleRequest \u7684\u65b9\u6cd5\uff0c\u5b83\u63a5\u6536 req \u548c res \u4e24\u4e2a\u53c2\u6570\uff0c\u6bcf\u6b21\u670d\u52a1\u7aef\u6536\u5230\u8bf7\u6c42\u65f6\uff0c\u4f1a\u6839\u636e node http \u539f\u751f\u7684 req \u548c res\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 koa \u7684\u4e0a\u4e0b\u6587 ctx\u3002"),r.a.createElement(o["a"],{code:"callback() {\n    const fn = compose(this.middleware); // \u5408\u5e76\u4e2d\u95f4\u4ef6\n\n    if (!this.listenerCount('error')) this.on('error', this.onerror); // \u6355\u83b7\u6846\u67b6\u5c42\u7684\u9519\u8bef\n\n    const handleRequest = (req, res) => {\n      const ctx = this.createContext(req, res); // \u521b\u5efa\u4e0a\u4e0b\u6587\n      return this.handleRequest(ctx, fn);\n    };\n\n    return handleRequest;\n  }",lang:"js"}),r.a.createElement("h5",{id:"createcontext"},r.a.createElement(s["AnchorLink"],{to:"#createcontext","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"createContext"),r.a.createElement("p",null,"\u518d\u6765\u770b createContext \u51fd\u6570\uff0c\u4e00\u5927\u4e32\u7684\u8d4b\u503c\u9a9a\u64cd\u4f5c\uff0c\u6211\u4eec\u7ec6\u7ec6\u89e3\u8bfb\u4e00\u4e0b:"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5148\u901a\u8fc7 Object.create()\uff0c\u521b\u5efa\u4e86\u65b0\u7684\u4ece context.js\u3001request.js\u3001response.js \u5f15\u5165\u7684\u5bf9\u8c61\uff0c\u9632\u6b62\u5f15\u5165\u7684\u539f\u59cb\u5bf9\u8c61\u88ab\u6c61\u67d3\u3002"),r.a.createElement("li",null,"\u901a\u8fc7 context.request = Object.create(this.request) \u548c context.response = Object.create(this.response) \u5c06 request \u548c response \u5bf9\u8c61\u6302\u8f7d\u5230\u4e86 context \u5bf9\u8c61\u4e0a\u3002\u8fd9\u90e8\u5206\u5bf9\u5e94\u4e86 context.js \u4e2d delegate \u7684\u59d4\u6258\u90e8\u5206(\u6709\u5173 delegate \u53ef\u4ee5\u89c1\u540e\u9762 koa \u6838\u5fc3\u5e93\u90e8\u5206\u7684\u89e3\u8bfb)\uff0c\u80fd\u8ba9 ctx \u76f4\u63a5\u901a\u8fc7 ctx.xxx \u53bb\u8bbf\u95ee\u5230 ctx.request.xxx \u548c ctx.response.xxx"),r.a.createElement("li",null,"\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u8d4b\u503c\u64cd\u4f5c\uff0c\u5c06\u539f\u59cb\u7684 http \u8bf7\u6c42\u7684 res \u548c req\uff0c\u4ee5\u53ca Koa \u5b9e\u4f8b app \u7b49\u7b49\u5206\u522b\u6302\u8f7d\u5230\u4e86 context\u3001request \u548c response \u5bf9\u8c61\u4e2d\uff0c\u4ee5\u4fbf\u4e8e\u5728 context.js\u3001request.js \u548c response.js \u4e2d\u9488\u5bf9\u539f\u59cb\u7684\u8bf7\u6c42\u3001\u76f8\u5e94\u53c2\u6570\u7b49\u505a\u4e00\u4e9b\u7cfb\u5217\u7684\u5904\u7406\u8bbf\u95ee\uff0c\u4fbf\u4e8e\u7528\u6237\u4f7f\u7528")),r.a.createElement(o["a"],{code:"createContext(req, res) {\n    // Object.create()\u521b\u5efa\n    const context = Object.create(this.context);\n    const request = context.request = Object.create(this.request);\n    const response = context.response = Object.create(this.response);\n    context.app = request.app = response.app = this;\n    context.req = request.req = response.req = req;\n    context.res = request.res = response.res = res;\n    request.ctx = response.ctx = context;\n    request.response = response;\n    response.request = request;\n    context.originalUrl = request.originalUrl = req.url;\n    context.state = {};\n    return context;\n  }",lang:"js"}),r.a.createElement("p",null,"\u6700\u7ec8\u8fd9\u6bb5\u4ee3\u7801\u6267\u884c\u540e\u7684\u5173\u7cfb\u56fe\u5982\u4e0b:"),r.a.createElement("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cc61ff5c932457d9430eb241e6fe8bd~tplv-k3u1fbpfcp-watermark.image"}),r.a.createElement("h5",{id:"handlerequest"},r.a.createElement(s["AnchorLink"],{to:"#handlerequest","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"handleRequest"),r.a.createElement("p",null,"callback \u4e2d\u6267\u884c\u5b8c createContext \u540e\uff0c\u4f1a\u5c06\u521b\u5efa\u597d\u7684 ctx \u4ee5\u53ca\u5408\u5e76\u4e2d\u95f4\u4ef6\u540e\u751f\u6210\u7684\u987a\u5e8f\u6267\u884c\u51fd\u6570\u4f20\u7ed9 handleRequest \u5e76\u6267\u884c\u8be5\u51fd\u6570\u3002"),r.a.createElement("p",null,"handleRequest \u4e2d\u4f1a\u901a\u8fc7 onFinished \u8fd9\u4e2a\u65b9\u6cd5\u76d1\u542c res\uff0c\u5f53 res \u5b8c\u6210\u3001\u5173\u95ed\u6216\u8005\u51fa\u9519\u65f6\uff0c\u4fbf\u4f1a\u6267\u884c onerror \u56de\u8c03\u3002 \u4e4b\u540e\u8fd4\u56de\u4e2d\u95f4\u4ef6\u6267\u884c\u7684\u7ed3\u679c\uff0c\u5f53\u4e2d\u95f4\u4ef6\u5168\u90e8\u6267\u884c\u5b8c\u4e4b\u540e\uff0c\u6267\u884c respond \u8fdb\u884c\u6570\u636e\u8fd4\u56de\u64cd\u4f5c\u3002"),r.a.createElement(o["a"],{code:"handleRequest(ctx, fnMiddleware) {\n    const res = ctx.res;\n    res.statusCode = 404;\n    const onerror = err => ctx.onerror(err);\n    const handleResponse = () => respond(ctx);\n    onFinished(res, onerror);\n    return fnMiddleware(ctx).then(handleResponse).catch(onerror);\n}",lang:"js"}),r.a.createElement("h5",{id:"cookies"},r.a.createElement(s["AnchorLink"],{to:"#cookies","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"cookies"),r.a.createElement("p",null,"context.js \u4e2d\u901a\u8fc7 get \u548c set \u65b9\u6cd5\u505a\u4e86 cookie \u7684\u8bbe\u7f6e\u548c\u8bfb\u53d6\u64cd\u4f5c\u3002"),r.a.createElement("h5",{id:"delegate"},r.a.createElement(s["AnchorLink"],{to:"#delegate","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"delegate"),r.a.createElement("p",null,"context.js \u4e2d\u6709\u5927\u91cf\u7684 delegate \u64cd\u4f5c\uff0c\u662f\u901a\u8fc7 delegate\uff0c\u53ef\u4ee5\u8ba9 ctx \u80fd\u591f\u76f4\u63a5\u8bbf\u95ee\u5176\u4e0a\u9762 response \u548c request \u4e2d\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5373\u53ef\u4ee5\u901a\u8fc7 ctx.xxx \u83b7\u53d6\u5230 ctx.request.xxx \u6216 ctx.response.xxx \u3002"),r.a.createElement("p",null,"delegate \u662f\u901a\u8fc7 delegates \u8fd9\u4e2a\u5e93\u5b9e\u73b0\u7684\uff0c\u901a\u8fc7 proto.",r.a.createElement("strong",null,"defineGetter")," \u548c proto.",r.a.createElement("strong",null,"defineSetter")," \u53bb\u4ee3\u7406\u5bf9\u8c61\u4e0b\u9762\u8282\u70b9\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u7b49\u3002(proto.",r.a.createElement("strong",null,"defineGetter")," \u548c proto.",r.a.createElement("strong",null,"defineSetter")," \u73b0\u5df2\u88ab mdn \u5e9f\u5f03\uff0c\u6539\u7528 Object.defineProperty())"),r.a.createElement(o["a"],{code:"delegate(proto, 'response')\n  .method('attachment')\n  .method('redirect')\n  .access('lastModified')\n  .access('etag')\n  .getter('headerSent')\n  .getter('writable');\n// ...\n\ndelegate(proto, 'request')\n  .method('acceptsLanguages')\n  .getter('ip');\n// ...",lang:"js"}),r.a.createElement("p",null,"context.js \u4e2d\u5bfc\u51fa\u4e86\u4e00\u4e2a context \u5bf9\u8c61\uff0c\u4e3b\u8981\u7528\u6765\u5728\u4e2d\u95f4\u4ef6\u4ee5\u53ca\u5176\u5b83\u5404\u90e8\u4ef6\u4e4b\u95f4\u4f20\u9012\u4fe1\u606f\u7684\uff0c\u540c\u65f6 context \u5bf9\u8c61\u4e0a\u6302\u8f7d\u4e86 request \u548c response \u4e24\u5927\u5bf9\u8c61\u3002"),r.a.createElement("p",null,"\u53e6\u5916\u5176\u8fd8\u505a\u4e86 cookie \u7684\u5904\u7406\u4ee5\u53ca\u4f7f\u7528 delegates \u5e93\u5bf9 request \u548c response \u5bf9\u8c61\u4e0a\u9762\u7684\u4e8b\u4ef6\u548c\u65b9\u6cd5\u8fdb\u884c\u4e86\u59d4\u6258\uff0c\u4fbf\u4e8e\u7528\u6237\u4f7f\u7528\u3002"),r.a.createElement("h5",{id:"request"},r.a.createElement(s["AnchorLink"],{to:"#request","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"request"),r.a.createElement("p",null,"request.js \u5bfc\u51fa\u4e86 request \u5bf9\u8c61\uff0c\u901a\u8fc7 get() \u548c set() \u65b9\u6cd5\u5bf9\u8bf7\u6c42\u5934\u7684\u53c2\u6570\u5982 header\u3001url\u3001href\u3001method\u3001path\u3001query\u2026\u2026\u505a\u4e86\u5904\u7406\uff0c\u6302\u8f7d\u5230\u4e86 request \u5bf9\u8c61\u4e0a\uff0c\u65b9\u4fbf\u7528\u6237\u83b7\u53d6\u548c\u8bbe\u7f6e\u3002"),r.a.createElement("h5",{id:"response"},r.a.createElement(s["AnchorLink"],{to:"#response","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"response"),r.a.createElement("p",null,"\u540c request.js \uff0c\u901a\u8fc7 get() \u548c set()\u5bf9\u54cd\u5e94\u53c2\u6570\u505a\u4e86\u5904\u7406\u3002"),r.a.createElement("h5",{id:"koa-compose"},r.a.createElement(s["AnchorLink"],{to:"#koa-compose","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"koa-compose"),r.a.createElement("p",null,"\u5728 application.js \u4e2d\uff0c\u901a\u8fc7 compose \u5c06\u4e2d\u95f4\u4ef6\u8fdb\u884c\u4e86\u5408\u5e76\uff0c\u8fd9\u4e5f\u662f koa \u7684\u4e00\u4e2a\u6838\u5fc3\u5b9e\u73b0\u3002"),r.a.createElement("p",null,"\u5148\u6765\u770b koa-compose \u7684\u6e90\u7801\uff0c\u5b9e\u73b0\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u6709\u51e0\u5341\u884c\uff1a"),r.a.createElement(o["a"],{code:"function compose(middleware) {\n  // middleware \u4e2d\u95f4\u4ef6\u51fd\u6570\u6570\u7ec4, \u6570\u7ec4\u4e2d\u662f\u4e00\u4e2a\u4e2a\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\n  if (!Array.isArray(middleware))\n    throw new TypeError('Middleware stack must be an array!');\n  for (const fn of middleware) {\n    if (typeof fn !== 'function')\n      throw new TypeError('Middleware must be composed of functions!');\n  }\n  return function(context, next) {\n    // last called middleware #\n    let index = -1;\n    return dispatch(0);\n    function dispatch(i) {\n      if (i <= index)\n        return Promise.reject(new Error('next() called multiple times'));\n      index = i;\n      let fn = middleware[i];\n      if (i === middleware.length) fn = next;\n      if (!fn) return Promise.resolve();\n      try {\n        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));\n      } catch (err) {\n        return Promise.reject(err);\n      }\n    }\n  };\n}",lang:"js"}),r.a.createElement("p",null,"compose \u63a5\u6536\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570\u7684\u6570\u7ec4\uff0c\u8fd4\u56de\u4e86\u4e00\u4e2a\u95ed\u5305\u51fd\u6570\uff0c\u95ed\u5305\u4e2d\u7ef4\u62a4\u4e86\u4e00\u4e2a index \u53bb\u8bb0\u5f55\u5f53\u524d\u8c03\u7528\u7684\u4e2d\u95f4\u4ef6\u3002"),r.a.createElement("p",null,"\u91cc\u9762\u521b\u5efa\u4e86\u4e00\u4e2a dispatch \u51fd\u6570\uff0cdispatch(i) \u4f1a\u901a\u8fc7 Promise.resolve() \u8fd4\u56de middleware \u4e2d\u7684\u7b2c i \u9879\u51fd\u6570\u6267\u884c\u7ed3\u679c\uff0c\u5373\u7b2c i + 1 \u4e2a app.use() \u4f20\u5165\u7684\u51fd\u6570\u3002 app.use() \u56de\u8c03\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f next\uff0c\u6240\u4ee5\u5f53 app.use() \u4e2d\u7684\u4ee3\u7801\u6267\u884c\u5230 next() \u65f6\uff0c\u4fbf\u4f1a\u6267\u884c dispatch.bind(null, i + 1))\uff0c\u5373\u6267\u884c\u4e0b\u4e00\u4e2a app.use() \u7684\u56de\u8c03\u3002"),r.a.createElement("p",null,"\u4f9d\u6b21\u7c7b\u63a8\uff0c\u4fbf\u5c06\u4e00\u4e2a\u4e2a app.use() \u7684\u56de\u8c03\u7ed9\u4e32\u8054\u4e86\u8d77\u6765\uff0c\u76f4\u81f3\u6ca1\u6709\u4e0b\u4e00\u4e2a next\uff0c\u8fb9\u4f1a\u6309\u987a\u5e8f\u8fd4\u56de\u6267\u884c\u6bcf\u4e2a app.use() \u7684 next() \u540e\u9762\u7684\u903b\u8f91\u3002\u6700\u7ec8\u901a\u8fc7 Promise.resolve() \u8fd4\u56de\u7b2c\u4e00\u4e2a app.use() \u7684\u6267\u884c\u7ed3\u679c\u3002"),r.a.createElement("h3",{id:"\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684-koa"},r.a.createElement(s["AnchorLink"],{to:"#\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684-koa","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 Koa"),r.a.createElement("p",null,"\u4e0b\u9762\u6211\u4eec\u5c1d\u8bd5\u5b9e\u73b0\u4e00\u4e2a\u7b80\u6613\u7248\u7684 koa"),r.a.createElement("h5",{id:"\u5c01\u88c5-node-\u7684-http-\u6a21\u5757"},r.a.createElement(s["AnchorLink"],{to:"#\u5c01\u88c5-node-\u7684-http-\u6a21\u5757","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c01\u88c5 node \u7684 http \u6a21\u5757"),r.a.createElement("p",null,"\u6309\u7167\u672c\u6587\u5f00\u7bc7\u7684\u6700\u7b80\u5355\u793a\u4f8b\u53bb\u5b9e\u73b0\uff0c\u65b0\u5efa application.js\uff0c\u5185\u90e8\u521b\u5efa\u4e00\u4e2a MyKoa \u7c7b\uff0c\u57fa\u4e8e node \u7684 http \u6a21\u5757\uff0c\u5b9e\u73b0 listen \u51fd\u6570\uff1a"),r.a.createElement(o["a"],{code:"// application.js\nconst http = require('http');\n\nclass MyKoa {\n  listen(...args) {\n    const server = http.createServer((req, res) => {\n      res.end('mykoa');\n    });\n    server.listen(...args);\n  }\n}\n\nmodule.exports = MyKoa;",lang:"js"}),r.a.createElement("h5",{id:"\u5b9e\u73b0-use-\u65b9\u6cd5\u548c\u7b80\u6613-createcontext"},r.a.createElement(s["AnchorLink"],{to:"#\u5b9e\u73b0-use-\u65b9\u6cd5\u548c\u7b80\u6613-createcontext","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0 use \u65b9\u6cd5\u548c\u7b80\u6613 createContext"),r.a.createElement("p",null,"\u7136\u540e\u8981\u5b9e\u73b0 app.use() \u65b9\u6cd5\uff0c\u6211\u4eec\u770b\u5230 app.use() \u4e2d\u5185\u90e8\u6709 ctx.body\uff0c\u6240\u4ee5\u6211\u4eec\u8fd8\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 ctx \u5bf9\u8c61"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u521b\u5efa\u4e00\u4e2a context.js\uff0c\u5185\u90e8\u5bfc\u51fa ctx \u5bf9\u8c61\uff0c\u5206\u522b\u901a\u8fc7 get \u548c set\uff0c\u5b9e\u73b0\u53ef\u4ee5\u83b7\u53d6\u548c\u8bbe\u7f6e ctx.body \u7684\u503c")),r.a.createElement(o["a"],{code:"// context.js\nmodule.exports = {\n  get body() {\n    return this._body;\n  },\n\n  set body(value) {\n    this._body = value;\n  },\n};",lang:"js"}),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u5728 application.js \u7684 MyKoa \u7c7b\u4e2d\u6dfb\u52a0 use \u548c createContext \u65b9\u6cd5\uff0c\u540c\u65f6 res.end \u8fd4\u56de ctx.body")),r.a.createElement(o["a"],{code:"const http = require('http');\nconst _context = require('./context');\n\nclass MyKoa {\n  listen(...args) {\n    const server = http.createServer((req, res) => {\n      const ctx = this.createContext(req, res);\n      this.callback();\n      res.end(ctx.body);\n    });\n    server.listen(...args);\n  }\n\n  use(callback) {\n    this.callback = callback;\n  }\n\n  createContext(req, res) {\n    const ctx = Object.assign(_context);\n    return ctx;\n  }\n}\n\nmodule.exports = MyKoa;",lang:"js"}),r.a.createElement("h5",{id:"\u5b8c\u5584-createcontext"},r.a.createElement(s["AnchorLink"],{to:"#\u5b8c\u5584-createcontext","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b8c\u5584 createContext"),r.a.createElement("p",null,"\u6211\u4eec\u8981\u901a\u8fc7 ctx \u53bb\u8bbf\u95ee\u8bf7\u6c42\u5934\u4ee5\u53ca\u8bbe\u7f6e\u54cd\u5e94\u5934\u7b49\u76f8\u5173\u4fe1\u606f\uff0c\u4f8b\u5982 ctx.query\uff0cctx.message \u7b49\u7b49\uff0c\u5c31\u8981\u521b\u5efa response.js \u548c request.js \u5bf9\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u505a\u5904\u7406\uff0c\u5c06 request \u548c response \u5bf9\u8c61\u6302\u8f7d\u5230 ctx \u5bf9\u8c61\u4e0a\uff0c\u540c\u65f6\u5b9e\u73b0\u4e00\u4e2a delegate \u51fd\u6570\u8ba9 ctx \u80fd\u591f\u8bbf\u95ee request \u548c response \u4e0a\u9762\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5b9e\u73b0\u7b80\u5355\u7684 request \u548c response\uff0crequest \u4e2d\u901a\u8fc7 get \u65b9\u6cd5\uff0c\u80fd\u591f\u89e3\u6790 req.url \u4e2d\u7684\u53c2\u6570\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u8fd4\u56de\u3002response \u4e2d\uff0c\u901a\u8fc7 get \u548c set message\uff0c\u80fd\u591f\u83b7\u53d6\u548c\u8bbe\u7f6e res.statusMessage \u7684\u503c\uff1a")),r.a.createElement(o["a"],{code:"// request.js\nmodule.exports = {\n  get query() {\n    const arr = this.req.url.split('?');\n    if (arr[1]) {\n      const obj = {};\n      arr[1].split('&').forEach(str => {\n        const param = str.split('=');\n        obj[param[0]] = param[1];\n      });\n      return obj;\n    }\n    return {};\n  },\n};",lang:"js"}),r.a.createElement(o["a"],{code:"// response.js\nmodule.exports = {\n  get message() {\n    return this.res.statusMessage || '';\n  },\n\n  set message(msg) {\n    this.res.statusMessage = msg;\n  },\n};",lang:"js"}),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u65b0\u5efa\u4e00\u4e2a utils.js\uff0c\u5bfc\u51fa delegate \u65b9\u6cd5\uff0cdelegate \u5185\u90e8\u901a\u8fc7 Object.defineProperty \uff0c\u8ba9\u4f20\u5165\u7684\u5bf9\u8c61 obj \u80fd\u591f\u5728\u5c5e\u6027 property \u6539\u53d8\u65f6\u5b9e\u65f6\u76d1\u542c\uff0c\u4f8b\u5982 delegate(ctx, 'request') \u5f53 request \u5bf9\u8c61\u503c\u6539\u53d8\u65f6\uff0cctx \u5bf9 request \u4ee3\u7406\u4e5f\u80fd\u83b7\u53d6\u6700\u65b0\u7684\u503c\u3002")),r.a.createElement("p",null,"\u7136\u540e\u5b9e\u73b0\u7b80\u5355\u7684 getter \u548c setter\uff0c\u901a\u8fc7\u4e00\u4e2a listen \u51fd\u6570\uff0c\u5f53\u4f7f\u7528 getter \u6216\u8005 setter \u65f6\uff0c\u5c06\u5bf9\u5e94\u7684\u952e\u6dfb\u52a0\u5230 setters \u548c getters \u4e2d\uff0c\u8ba9 obj \u8bbf\u95ee\u5bf9\u5e94\u952e\u65f6\u4ee3\u7406\u5230 proterty \u5bf9\u5e94\u7684\u952e\u503c\uff1a"),r.a.createElement(o["a"],{code:"// utils.js\nmodule.exports.delegate = function Delegate(obj, property) {\n  let setters = [];\n  let getters = [];\n  let listens = [];\n\n  function listen(key) {\n    Object.defineProperty(obj, key, {\n      get() {\n        return getters.includes(key) ? obj[property][key] : obj[key]; // \u5982\u679c\u901a\u8fc7 getter \u4ee3\u7406\u4e86\uff0c\u5219\u8fd4\u56de\u5bf9\u5e94 obj[property][key] \u7684\u503c\uff0c\u5426\u5219\u8fd4\u56de obj[key] \u7684\u503c\n      },\n      set(val) {\n        if (setters.includes(key)) {\n          obj[property][key] = val; \u5982\u679c\u901a\u8fc7 setter \u4ee3\u7406\u4e86\uff0c\u5219\u8bbe\u7f6e\u5bf9\u5e94 obj[property][key] \u7684\u503c\uff0c\u5426\u5219\u8bbe\u7f6e obj[key] \u7684\u503c\n        } else {\n          obj[key] = val;\n        }\n      },\n    });\n  }\n\n  this.getter = function (key) {\n    getters.push(key);\n    if (!listens.includes(key)) { // \u9632\u6b62\u91cd\u590d\u8c03\u7528listen\n      listen(key);\n      listens.push(key);\n    }\n    return this;\n  };\n\n  this.setter = function (key) {\n    setters.push(key);\n    if (!listens.includes(key)) { // \u9632\u6b62\u91cd\u590d\u8c03\u7528listenf\n      listen(key);\n      listens.push(key);\n    }\n    return this;\n  };\n  return this;\n};",lang:"js"}),r.a.createElement("ol",{start:3},r.a.createElement("li",null,"\u5728 context \u4f7f\u7528 delegate \u5bf9 request \u548c response \u8fdb\u884c\u4ee3\u7406\uff1a")),r.a.createElement(o["a"],{code:"// context.js\nconst { delegate } = require('./utils');\nconst context = (module.exports = {\n  get body() {\n    return this._body;\n  },\n\n  set body(value) {\n    this._body = value;\n  },\n});\ndelegate(context, 'request').getter('query');\ndelegate(context, 'response')\n  .getter('message')\n  .setter('message');",lang:"js"}),r.a.createElement("ol",{start:4},r.a.createElement("li",null,"\u5b8c\u5584 createContext \u51fd\u6570\uff1a")),r.a.createElement(o["a"],{code:"// application.js\nconst http = require('http');\nconst _context = require('./context');\nconst _request = require('./request');\nconst _response = require('./response');\n\nclass MyKoa {\n  // ...\n  createContext(req, res) {\n    const ctx = Object.assign(_context);\n    const request = Object.assign(_request);\n    const response = Object.assign(_response);\n    ctx.request = request;\n    ctx.response = response;\n    ctx.req = request.req = req;\n    ctx.res = response.res = res;\n    return ctx;\n  }\n}\n\nmodule.exports = MyKoa;",lang:"js"}),r.a.createElement("h3",{id:"\u5b9e\u73b0\u4e2d\u95f4\u4ef6\u548c\u6d0b\u8471\u6a21\u578b"},r.a.createElement(s["AnchorLink"],{to:"#\u5b9e\u73b0\u4e2d\u95f4\u4ef6\u548c\u6d0b\u8471\u6a21\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u4e2d\u95f4\u4ef6\u548c\u6d0b\u8471\u6a21\u578b"),r.a.createElement("p",null,"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u53ea\u5269\u4e0b\u5b9e\u73b0 app.use() \u4e2d\u95f4\u4ef6\u7684\u529f\u80fd\u4e86\u3002"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u6309\u7167\u524d\u9762 koa-compose \u5206\u6790\u7684\u601d\u8def\uff0c\u5728 utils.js \u4e2d\uff0c\u5b9e\u73b0 compose\uff1a")),r.a.createElement(o["a"],{code:"// utils.js\nmodule.exports.compose = middleware => {\n  return (ctx, next) => {\n    let index = -1;\n    return dispatch(0);\n    function dispatch(i) {\n      if (i <= index) return Promise.reject(new Error('error'));\n      index = i;\n      const cb = middleware[i] || next;\n      if (!cb) return Promise.resolve();\n      try {\n        return Promise.resolve(\n          cb(ctx, function next() {\n            return dispatch(i + 1);\n          }),\n        );\n      } catch (error) {\n        return Promise.reject(error);\n      }\n    }\n  };\n};",lang:"js"}),r.a.createElement("ol",{start:2},r.a.createElement("li",null,"\u5728 app.js \u4e2d\uff0c\u521d\u59cb\u5316 this.middleware \u7684\u6570\u7ec4\uff0cuse() \u51fd\u6570\u4e2d\u5c06 callback \u6dfb\u52a0\u8fdb\u6570\u7ec4\uff1a")),r.a.createElement(o["a"],{code:"// ...\nclass MyKoa {\n  constructor() {\n    this.middleware = [];\n  }\n  // ...\n\n  use(callback) {\n    this.middleware.push(callback);\n  }\n  // ...\n}\n\nmodule.exports = MyKoa;",lang:"js"}),r.a.createElement("ol",{start:3},r.a.createElement("li",null,"listen \u65b9\u6cd5 createServer \u4e2d\uff0c\u9047\u5230\u8bf7\u6c42\u65f6\u5c06\u4e2d\u95f4\u4ef6\u5408\u5e76\uff0c\u4e2d\u95f4\u4ef6\u6267\u884c\u5b8c\u6bd5\u540e\u8fd4\u56de res \u7ed3\u679c:")),r.a.createElement(o["a"],{code:"// ...\nconst { compose } = require('./utils');\n\nclass MyKoa {\n  // ...\n  listen(...args) {\n    const server = http.createServer((req, res) => {\n      const ctx = this.createContext(req, res);\n      //\n      const fn = compose(this.middleware);\n      fn(ctx)\n        .then(() => {\n          // \u5168\u90e8\u4e2d\u95f4\u4ef6\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u8fd4\u56de\u76f8\u5e94\u4fe1\u606f\n          res.end(ctx.body);\n        })\n        .catch(err => {\n          throw err;\n        });\n    });\n    server.listen(...args);\n  }\n  // ...\n}\nmodule.exports = MyKoa;",lang:"js"}),r.a.createElement("h3",{id:"\u6d4b\u8bd5"},r.a.createElement(s["AnchorLink"],{to:"#\u6d4b\u8bd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6d4b\u8bd5"),r.a.createElement(o["a"],{code:"const Koa = require('../my-koa/application');\nconst app = new Koa();\n\napp.use((ctx, next) => {\n  ctx.message = 'ok';\n  console.log(1);\n  next();\n  console.log(2);\n});\n\napp.use((ctx, next) => {\n  console.log(3);\n  next();\n  console.log(4);\n});\n\napp.use((ctx, next) => {\n  console.log(5);\n  next();\n  console.log(6);\n});\n\napp.use((ctx, next) => {\n  console.log(ctx.message);\n  console.log(ctx.query);\n  ctx.body = 'hello, myKoa';\n});\n\napp.listen(3000, () => {\n  console.log('server is running on 3000...');\n});",lang:"js"}),r.a.createElement("p",null,"\u8bbf\u95ee ",r.a.createElement(s["Link"],{to:"http://localhost:3000/api?name=lxj"},"http://localhost:3000/api?name=lxj")," \u63a5\u53e3\uff0c\u8fd4\u56de\u6570\u636e\u4e3a hello, myKoa \u8bf4\u660e\u6211\u4eec\u5b9e\u73b0\u7684\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\uff01")))}));n["default"]=e=>{var n=r.a.useContext(s["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:t})}}}]);