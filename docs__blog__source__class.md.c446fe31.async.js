(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{yQLm:function(n,e,t){"use strict";t.r(e);var r=t("JrZZ"),a=t("duuc"),s=t("xwgP"),c=t.n(s),o=t("o8VK"),l=t("nFtg"),i=t("INx8"),u=c.a.memo((n=>{n.demos;var e=Object(o["dynamic"])({loader:function(){var n=Object(a["a"])(Object(r["a"])().mark((function n(){var e,a,s,c;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t("HfwZ")["default"],n.t0=e,n.next=4,Promise.resolve().then(t.t.bind(null,"xwgP",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.t2=e,n.next=9,t.e(78).then(t.t.bind(null,"KYQr",7));case 9:return n.t3=n.sent,s=(0,n.t2)(n.t3),c=function(){return a["default"].createElement(a["default"].Fragment,null,a["default"].createElement("img",{src:s["default"],width:"800"}))},n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));function e(){return n.apply(this,arguments)}return e}(),loading:()=>null});return c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"es6\u4e2d-class\u8ddf\u666e\u901afunction\u7684\u533a\u522b"},c.a.createElement(l["AnchorLink"],{to:"#es6\u4e2d-class\u8ddf\u666e\u901afunction\u7684\u533a\u522b","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"ES6\u4e2d class\u8ddf\u666e\u901afunction\u7684\u533a\u522b"),c.a.createElement("p",null,"\u4e0d\u77e5\u5927\u5bb6\u6709\u6ca1\u6709\u60f3\u8fc7\u8fd9\u4e2a\u4e00\u4e2a\u95ee\u9898 \uff1fes5 \u4e2d\u7684function \u53ef\u4ee5\u7528call apply bind \u7684\u65b9\u5f0f \u6765\u6539\u53d8\u4ed6\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u4f46\u662fclass \u5374\u4e0d\u53ef\u4ee5\xa0\uff0c\xa0class \u867d\u7136\u672c\u8d28\u4e0a\u4e5f\u662f\u4e00\u4e2a\u51fd\u6570\xa0 \uff0c\u4f46\u662f babel\u6216\u8005\u6d4f\u89c8\u5668 \u5728\u5bf9\u5176\u8fdb\u884c\u89e3\u6790\u7684\u65f6\u5019\uff0c\u505a\u4e86\u4e00\u5c42\u4ee3\u7406\u6765\u7981\u6b62\u4e86\u8fd9\u79cd\u884c\u4e3a\u3002"),c.a.createElement("p",null,"\u6211\u4eec\u6253\u5f00",c.a.createElement(l["Link"],{to:"https://babeljs.io/repl"},"babel\u7684\u5b98\u7f51repl")," \u952e\u5165\u5982\u4e0b\u4ee3\u7801"),c.a.createElement(i["a"],{code:"class Test{\n  // \u9759\u6001\u65b9\u6cd5\n  static move(){}\n  constructor(){\n    // \u5b9e\u4f8b\u5c5e\u6027\n    this.name='name'\n  }\n  say(){\n  \t\n  }\n}",lang:"js"}),c.a.createElement("p",null,"\u5982\u56fe\u6240\u793a")),c.a.createElement(e,null),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"\u5206\u6790\u7f16\u8bd1\u540e\u7ed3\u679c\u5982\u4e0b"},c.a.createElement(l["AnchorLink"],{to:"#\u5206\u6790\u7f16\u8bd1\u540e\u7ed3\u679c\u5982\u4e0b","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5206\u6790\u7f16\u8bd1\u540e\u7ed3\u679c\u5982\u4e0b"),c.a.createElement(i["a"],{code:"'use strict';\n\nfunction _instanceof(left, right) {\n  if (\n    right != null &&\n    typeof Symbol !== 'undefined' &&\n    right[Symbol.hasInstance]\n  ) {\n    return !!right[Symbol.hasInstance](left);\n  } else {\n    return left instanceof right;\n  }\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!_instanceof(instance, Constructor)) {\n    /*\n      \u8fd9\u53e5\u4ee3\u7801\u5c31\u662f class \u4e0d\u80fd\u88abcall \u5230\u522b\u7684\u5bf9\u8c61\u4e0a\u7684\u539f\u56e0\n    */\n    throw new TypeError('Cannot call a class as a function');\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if ('value' in descriptor) descriptor.writable = true;\n    /*\n      \u7528Object.defineProperty \u7ed9 target \u6dfb\u52a0\u65b9\u6cd5\n      target : object descriptor.key:string descriptor:{key: function value(){}}\n    */\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nvar Test = /*#__PURE__*/ (function() {\n  /*\n    \u6dfb\u52a0\u9759\u6001\u65b9\u6cd5\uff0c\u672c\u8d28\u5c31\u662f\u7ed9\u6784\u9020\u51fd\u6570\u6dfb\u52a0\u4e86\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\n    \u6b64\u5904\u7684\u505a\u6cd5\u662fTest.move = function move(){}\n    \u8fd9\u5c31\u662f\u4e3a\u4f55\u9759\u6001\u65b9\u6cd5\u80fd\u76f4\u63a5\u7528 class \u8c03\u7528\u7684\u539f\u56e0\u6240\u5728\n  */\n  _createClass(Test, null, [\n    {\n      key: 'move',\n      // \u9759\u6001\u65b9\u6cd5\n      value: function move() {},\n    },\n  ]);\n  /*\n    \u521b\u5efa\u6784\u9020\u51fd\u6570\n  */\n  function Test() {\n    _classCallCheck(this, Test);\n\n    // \u5b9e\u4f8b\u5c5e\u6027\n    this.name = 'name';\n  }\n  /*\n   \u5b9a\u4e49\u539f\u578b\u65b9\u6cd5\n  */\n  _createClass(Test, [\n    {\n      key: 'say',\n      value: function say() {},\n    },\n  ]);\n\n  return Test;\n})();",lang:"js"}))))}));e["default"]=n=>{var e=c.a.useContext(l["context"]),t=e.demos;return c.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),c.a.createElement(u,{demos:t})}}}]);