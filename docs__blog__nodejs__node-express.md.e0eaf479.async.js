(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{bBUS:function(e,n,a){"use strict";a.r(n);var r=a("q1tI"),t=a.n(r),s=a("dEAq"),p=a("H1Ra"),l=t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"express-\u57fa\u672c\u539f\u7406"},t.a.createElement(s["AnchorLink"],{to:"#express-\u57fa\u672c\u539f\u7406","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"express \u57fa\u672c\u539f\u7406"),t.a.createElement("p",null,"express \u662f\u57fa\u4e8enodejs \u7684http \u6a21\u5757\u5c01\u88c5\u7684\u4e00\u4e2a\u6846\u67b6"),t.a.createElement("h3",{id:"\u6781\u7b80\u7528\u4f8b"},t.a.createElement(s["AnchorLink"],{to:"#\u6781\u7b80\u7528\u4f8b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6781\u7b80\u7528\u4f8b"),t.a.createElement(p["a"],{code:'const express = require("express");\nconst app = express();\n\napp.param(\'userid\', function(req, res, next, userid) {\n    req.user = getUser(userid);\n    next();\n});\n\napp.use("/water",function(req,res,next){\n    console.log("middle");\n    next();\n});\n\nfunction getUser(userId){\n    return {\n        userId, \n        age:8,\n        name:"freemen"\n    }\n}\n\nfunction setUser(user){\n\n}\n\napp.get(\'/username/:userid/:name\',function(req,res){\n    console.log(req.user);\n    console.log(req.params);\n    req.user.name = req.params.name;\n    setUser(req.user);\n    res.end("update username success!");\n});\n\napp.get(\'/username/:userid/:age\',function(req,res){\n    req.user.age = req.params.age;\n    setUser(req.user);\n    res.end("update username success!");\n});\n\n\napp.get("/user",function(req,res){\n    console.log(req.query);\n    console.log(req.path);\n    console.log(req.hostname);\n});\n\napp.listen(8888);',lang:"js"}),t.a.createElement("p",null,"\u8bd5\u7740\u5b9e\u73b0\u4e0b\u5b83\u7684\u8fd9\u4e9b\u529f\u80fd \u4e3b\u8981\u662f\u8def\u7531\u548c\u4e2d\u95f4\u4ef6\u90e8\u5206\uff1a"),t.a.createElement("h3",{id:"\u6838\u5fc3\u601d\u60f3"},t.a.createElement(s["AnchorLink"],{to:"#\u6838\u5fc3\u601d\u60f3","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),t.a.createElement("code",null,"\u6838\u5fc3\u601d\u60f3")),t.a.createElement("p",null,"\u5bfc\u51fa\u4e00\u4e2ahttpServer \u51fd\u6570 \u7ed9\u8fd9\u4e2a\u51fd\u6570\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3alisten \u7684\u5c5e\u6027 \u4ed6\u8981\u5e72\u7684\u4e8b\u60c5\u5c31\u662f \u5728\u8c03\u7528\u7684\u65f6\u5019\u7528http\u542f\u4e00\u4e2a\u670d\u52a1\u5e76\u76d1\u542c\u76f8\u5e94\u7684\u7aef\u53e3"),t.a.createElement(p["a"],{code:"app.listen = (...rest)=>{\n        const server = http.createServer(app);\n        server.listen(...rest);\n  }",lang:"js"}),t.a.createElement("p",null,"\u8def\u7531\u548c\u4e2d\u95f4\u4ef6\u90fd\u653e\u5728\u540c\u4e00\u4e2a\u961f\u5217\u5f53\u4e2d \uff0c \u7528",t.a.createElement("code",null,"\u8fed\u4ee3\u5668\u6a21\u5f0f"),"\u5faa\u73af\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002 \u8def\u7531\u548c\u4e2d\u95f4\u4ef6\u7684\u533a\u522b\u5728\u4e8e\u4e2d\u95f4\u4ef6\u662f\u62ff\u5230\u4e86\u8fed\u4ee3\u7684\u6743\u5229\u5373next\u51fd\u6570 \u800c\u4e14\u5f53\u8fd9\u4e2anext\u51fd\u6570\u4f20\u8fdb\u6765\u9519\u8bef\u503c\u7684\u65f6\u5019\u628a\u8fd9\u4e2a\u9519\u8bef\u503c\u505a\u4e00\u5c42\u7a7f\u900f"),t.a.createElement("p",null,"\u5173\u4e8e\u8def\u7531\u53c2\u6570\u7684\u5904\u7406"),t.a.createElement(p["a"],{code:"app.param('userid', function(req, res, next, userid) {\n    req.user = getUser(userid);\n    next();\n});",lang:"js"}),t.a.createElement("p",null,"\u9996\u5148\u5206\u6790\u8fd9\u79cd\u9700\u8981\u5904\u7406\u53c2\u6570\u7684\u60c5\u51b5\u548c\u666e\u901a\u7684\u8def\u7531\u552f\u4e00\u7684\u533a\u522b\u5c31\u662f\u8def\u7531\u7684\u5730\u5740\u6709\u6240\u533a\u522b",t.a.createElement("code",null,"/username/:userid/:name"),"\u5176\u5b9e\u5c31\u662f\u9700\u8981\u5bf9",t.a.createElement("code",null,":"),"\u540e\u9762\u7684\u7684\u503c\u8fdb\u884c\u5904\u7406 \u90a3\u5c31\u5728\u5b9a\u4e49\u7684\u65f6\u5019\u628a\u6709\u7528\u7684\u503c\u5b58\u4e0b\u6765"),t.a.createElement(p["a"],{code:"http.METHODS.forEach( method => {\n        const methods = method.toLocaleLowerCase();\n        app[ methods ] = function(path,cb){\n            const layer = { methods, path, cb };\n            if(path.includes(\":\")){\n               let paramsNames = [];\n               path = path.replace(/:([^\\/]+)/g,function(){\n                   paramsNames.push(arguments[1]);\n                   return '([^\\/]+)'\n               })\n               layer.path = new RegExp(path);\n               layer.paramsNames = paramsNames;\n            }\n            app.routers.push(layer)\n        }\n    })",lang:"js"}),t.a.createElement("p",null,"\u7136\u540e\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u6765\u4fdd\u5b58\u8fd9\u4e9bparam\u7684\u53c2\u6570 \u952e\u540d\u4e3a\u8def\u7531\u7684\u53c2\u6570\u952e\u503c\u4e3a\u76f8\u5e94\u7684\u56de\u8c03"),t.a.createElement(p["a"],{code:"app.paramhandlers = {};\napp.param = function(name,handler){\n    app.paramhandlers[name] = handler;\n}",lang:"js"}),t.a.createElement("p",null,"\u7136\u540e\u5728\u8fed\u4ee3\u7684\u65f6\u5019\u6dfb\u52a0\u76f8\u5e94\u7684\u5224\u65ad\u903b\u8f91 \u53d6\u51fa\u4e4b\u524d\u5b58\u7684\u53c2\u6570\u5e76\u4f20\u8fdb\u76f8\u5e94\u7684\u503c"),t.a.createElement(p["a"],{code:"if(route.paramsNames){\n      let machers = pathname.match(path);\n      if(machers){\n          let params = {};\n          for(let i=0; i < route.paramsNames.length;i++){\n              params[route.paramsNames[i]] = machers[i+1];\n          }\n          req.params = params;\n          for(let j=0;j<route.paramsNames.length;j++){\n              let name = route.paramsNames[j];\n              let handle = app.paramhandlers[route.paramsNames[j]];\n              if(handle){\n                  return handle(req,res,()=>route.cb(req,res),req.params[name]);\n              }\n          }\n      }else{\n          next();\n      }\n  }",lang:"js"}),t.a.createElement("p",null,"\u5b8c\u6574\u5b9e\u73b0\u5982\u4e0b"),t.a.createElement(p["a"],{code:'const http = require("http");\nconst url = require("url");\n//\u9996\u5148\u9700\u8981\u6211\u4eec\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570 \u8fd9\u4e2a\u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61 \u6709listen use param \u7b49\u65b9\u6cd5 \u6211\u4eec\u6682\u4e14\u628a\u5b83\u548c\u8fd9\u4e9b\u5c5e\u6027\u5199\u4e2aapp \u8fd9\u4e2a\u51fd\u6570\u4e0a \nfunction httpServer(){\n    const app = (req,res)=>{\n        const { pathname } = url.parse(req.url,true);\n        let index = 0;\n        function next(err){\n            if(index >= app.routers.length){\n                return res.end(`cannot find ${req.method}---${pathname}`);\n            }\n            let route = app.routers[index++];\n            const { methods ,cb ,path} = route;\n            if(err){\n                if( methods == "middle" ){\n                    if(path==\'/\'||pathname.startsWith(path+"/")||path==pathname){\n                        if(cb.length==4){\n                           cb(err,req,res,next);\n                        }else{\n                            next(err);\n                        }\n                    }\n                }else{\n                    next(err);\n                }\n            }else{\n                if( methods=="middle" ){\n                    cb(req,res,next);\n                }else{\n                    if(route.paramsNames){\n                        let machers = pathname.match(path);\n                        if(machers){\n                            let params = {};\n                            for(let i=0; i < route.paramsNames.length;i++){\n                                params[route.paramsNames[i]] = machers[i+1];\n                            }\n                            req.params = params;\n                            for(let j=0;j<route.paramsNames.length;j++){\n                                let name = route.paramsNames[j];\n                                let handle = app.paramhandlers[route.paramsNames[j]];\n                                if(handle){\n                                    return handle(req,res,()=>route.cb(req,res),req.params[name]);\n                                }\n                            }\n                        }else{\n                            next();\n                        }\n                    }\n                    if((route["path"] == pathname||route["path"]=="*")&&(req.method.toLocaleLowerCase() == route["methods"]|| route[\'methods\']== "all" )){\n                        return cb(req,res);\n                    }else{\n                        next();\n                    }\n                }\n            }\n        }\n        next();\n    }\n\n    app.paramhandlers = {};\n    app.param = function(name,handler){\n        app.paramhandlers[name] = handler;\n    }\n\n    app.routers = [];\n\n    app.listen = (...rest)=>{\n        const server = http.createServer(app);\n        server.listen(...rest);\n    }\n    \n    http.METHODS.forEach( method => {\n        const methods = method.toLocaleLowerCase();\n        app[ methods ] = function(path,cb){\n            const layer = { methods, path, cb };\n            if(path.includes(":")){\n               let paramsNames = [];\n               path = path.replace(/:([^\\/]+)/g,function(){\n                   paramsNames.push(arguments[1]);\n                   return \'([^\\/]+)\'\n               })\n               layer.path = new RegExp(path);\n               layer.paramsNames = paramsNames;\n            }\n            app.routers.push(layer)\n        }\n    })\n\n    app.all = function(path,cb){\n        app.routers.push({\n            methods:"all",\n            path,\n            cb\n        })\n    }\n    app.use = function(path,cb){\n        if(typeof cb !=="function"){\n            let middle = path;\n            cb = middle;\n            path = \'/\';\n        }\n        app.routers.push({\n            methods:"middle",\n            path,\n            cb\n        })\n    }\n    // \u5185\u7f6e\u4e2d\u95f4\u4ef6\u7528\u6765\u63d0\u4f9b\u683c\u5f0f\u5316\u540e\u7684\u8bf7\u6c42\u53c2\u6570\n    app.use(function(req,res,next){\n        const urlObj = url.parse(req.url,true);\n        req.query  = urlObj.query;\n        req.path  = urlObj.pathname;\n        req.hostname  = req.headers[\'host\'].split(":")[0];\n        next();\n    })\n    return app;\n}\n\nmodule.exports = httpServer;',lang:"js"})))}));n["default"]=e=>{var n=t.a.useContext(s["context"]),a=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&s["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(l,{demos:a})}}}]);