(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"3Xcp":function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),c=n("dEAq"),l=n("H1Ra"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"basic-\u8ba4\u8bc1\u673a\u5236"},r.a.createElement(c["AnchorLink"],{to:"#basic-\u8ba4\u8bc1\u673a\u5236","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"basic \u8ba4\u8bc1\u673a\u5236"),r.a.createElement("p",null,"\u57fa\u672c\u6d41\u7a0b ",r.a.createElement("br",null)),r.a.createElement("p",null,r.a.createElement("code",null,"\u9996\u6b21\u8bf7\u6c42")," \u5224\u65ad\u8bf7\u6c42\u5934headers \u4e2dauthorization\u5b57\u6bb5\u7684\u503c\u4e3a\u7a7a\uff0c\u8fd9\u65f6\u8ba9\u7528\u6237\u8f93\u5165"),r.a.createElement("p",null,r.a.createElement("code",null,"\u7b2c\u4e8c\u6b21\u8bf7\u6c42")," \u7684\u65f6\u5019\u5224\u65ad\u7528\u6237\u8f93\u5165\u7684\u503c\u662f\u5426\u6b63\u786e \u505a\u76f8\u5e94\u7684\u5904\u7406"),r.a.createElement("p",null,"nodejs \u4ee3\u7801"),r.a.createElement(l["a"],{code:'const http = require(\'http\');\nconst server = http.createServer(function(req,res){\n  const authorization = req.headers["authorization"];\n  if(!authorization){\n    res.writeHead(401,{\n      "content-Type":"text/plan",\n      "WWW-authenticate":\'Basic realm="famly"\'\n    })\n    res.end(\'\');\n  }else{\n    const str = authorization.slice(6,authorization.length);\n    const resStr =new Buffer(str,"base64").toString();\n    if(resStr!=="xiajiang:123"){\n      res.writeHead(401,{\n        "content-Type":"text/plan",\n        "WWW-authenticate":\'Basic realm="famly"\'\n      })\n      res.end(\'\');\n    }else{\n      res.end("aaaaaaaaaaaaa")\n    }\n  }\n});\n\nserver.listen(8080);',lang:"js"}),r.a.createElement("p",null,"basic \u8ba4\u8bc1\u7f3a\u70b9\u592a\u591a\uff0c\u4ed6\u867d\u7136\u7528base64 \u52a0\u5bc6\u540e\u4f20\u8f93\uff0c\u4f46\u662f\u8fd1\u4e4e\u94ed\u6587\uff0c\u4e00\u822c\u53ea\u6709\u5728https\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u4f7f\u7528\uff0c \u4e3a\u4e86\u6539\u8fdbbasic \u8ba4\u8bc1\uff0c\u4ed6\u9700\u8981\u52a0\u5165\u670d\u52a1\u7aef\u968f\u673a\u6570\u6765\u4fdd\u62a4\u8ba4\u8bc1\u7684\u8fc7\u7a0b\u3002"),r.a.createElement("h3",{id:"\u53c2\u8003\u6587\u732e"},r.a.createElement(c["AnchorLink"],{to:"#\u53c2\u8003\u6587\u732e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u8003\u6587\u732e"),r.a.createElement("p",null,r.a.createElement(c["Link"],{to:"https://book.douban.com/subject/25768396//"},"\u6df1\u5165\u6d45\u51faNodejs"))))}));a["default"]=e=>{var a=r.a.useContext(c["context"]),n=a.demos;return r.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);