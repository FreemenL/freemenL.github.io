(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{bkjy:function(e,a,t){"use strict";t.r(a);var n=t("FU0I"),l=t.n(n),r=t("F/hi"),c=t("P/fr"),s=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u4f7f\u7528-canvas-\u6216\u8005-svg-\u6e32\u67d3"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528-canvas-\u6216\u8005-svg-\u6e32\u67d3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528 Canvas \u6216\u8005 SVG \u6e32\u67d3"),l.a.createElement("p",null,"\u6d4f\u89c8\u5668\u7aef\u56fe\u8868\u5e93\u5927\u591a\u4f1a\u9009\u62e9 SVG \u6216\u8005 Canvas \u8fdb\u884c\u6e32\u67d3\u3002\u5bf9\u4e8e\u7ed8\u5236\u56fe\u8868\u6765\u8bf4\uff0c\u8fd9\u4e24\u79cd\u6280\u672f\u5f80\u5f80\u662f\u53ef\u66ff\u6362\u7684\uff0c\u6548\u679c\u76f8\u8fd1\u3002\u4f46\u662f\u5728\u4e00\u4e9b\u573a\u666f\u4e2d\uff0c\u4ed6\u4eec\u7684\u8868\u73b0\u548c\u80fd\u529b\u53c8\u6709\u4e00\u5b9a\u5dee\u5f02\u3002\u4e8e\u662f\uff0c\u5bf9\u5b83\u4eec\u7684\u9009\u62e9\u53d6\u820d\uff0c\u5c31\u6210\u4e3a\u4e86\u4e00\u4e2a\u4e00\u76f4\u5b58\u5728\u7684\u4e0d\u6613\u6709\u6807\u51c6\u7b54\u6848\u7684\u8bdd\u9898\u3002"),l.a.createElement("p",null,"ECharts \u4ece\u521d\u59cb\u4e00\u76f4\u4f7f\u7528 Canvas \u7ed8\u5236\u56fe\u8868\uff08\u9664\u4e86\u5bf9 IE8- \u4f7f\u7528 VML\uff09\u3002\u800c ",l.a.createElement(r["Link"],{to:"https://github.com/ecomfe/echarts/releases"},"ECharts v4.0"),"\u53d1\u5e03\u4e86 SVG \u6e32\u67d3\u5668\uff0c\u4ece\u800c\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b0\u7684\u9009\u62e9\u3002\u53ea\u987b\u5728\u521d\u59cb\u5316\u4e00\u4e2a\u56fe\u8868\u5b9e\u4f8b\u65f6\uff0c\u8bbe\u7f6e ",l.a.createElement(r["Link"],{to:"https://github.com/ecomfe/echarts/releases"},"renderer \u53c2\u6570")," \u4e3a ",l.a.createElement("code",null,"canvas")," \u6216 ",l.a.createElement("code",null,"svg")," \u5373\u53ef\u6307\u5b9a\u6e32\u67d3\u5668\uff0c\u6bd4\u8f83\u65b9\u4fbf\u3002"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"SVG \u548c Canvas \u8fd9\u4e24\u79cd\u4f7f\u7528\u65b9\u5f0f\u5dee\u5f02\u5f88\u5927\u7684\u6280\u672f\uff0c\u80fd\u591f\u505a\u5230\u540c\u65f6\u88ab\u900f\u660e\u652f\u6301\uff0c\u4e3b\u8981\u5f52\u529f\u4e8e ECharts \u5e95\u5c42\u5e93 ZRender \u7684\u62bd\u8c61\u548c\u5b9e\u73b0\uff0c\u5f62\u6210\u53ef\u4e92\u6362\u7684 SVG \u6e32\u67d3\u5668\u548c Canvas \u6e32\u67d3\u5668\u3002")),l.a.createElement("h3",{id:"\u9009\u62e9\u54ea\u79cd\u6e32\u67d3\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u9009\u62e9\u54ea\u79cd\u6e32\u67d3\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9009\u62e9\u54ea\u79cd\u6e32\u67d3\u5668"),l.a.createElement("p",null,"\u4e00\u822c\u6765\u8bf4\uff0cCanvas \u66f4\u9002\u5408\u7ed8\u5236\u56fe\u5f62\u5143\u7d20\u6570\u91cf\u975e\u5e38\u5927\uff08\u8fd9\u4e00\u822c\u662f\u7531\u6570\u636e\u91cf\u5927\u5bfc\u81f4\uff09\u7684\u56fe\u8868\uff08\u5982\u70ed\u529b\u56fe\u3001\u5730\u7406\u5750\u6807\u7cfb\u6216\u5e73\u884c\u5750\u6807\u7cfb\u4e0a\u7684\u5927\u89c4\u6a21\u7ebf\u56fe\u6216\u6563\u70b9\u56fe\u7b49\uff09\uff0c\u4e5f\u5229\u4e8e\u5b9e\u73b0\u67d0\u4e9b\u89c6\u89c9 \u7279\u6548\u3002\u4f46\u662f\uff0c\u5728\u4e0d\u5c11\u573a\u666f\u4e2d\uff0cSVG \u5177\u6709\u91cd\u8981\u7684\u4f18\u52bf\uff1a\u5b83\u7684\u5185\u5b58\u5360\u7528\u66f4\u4f4e\uff08\u8fd9\u5bf9\u79fb\u52a8\u7aef\u5c24\u5176\u91cd\u8981\uff09\u3001\u6e32\u67d3\u6027\u80fd\u7565\u9ad8\u3001\u5e76\u4e14\u7528\u6237\u4f7f\u7528\u6d4f\u89c8\u5668\u5185\u7f6e\u7684\u7f29\u653e\u529f\u80fd\u65f6\u4e0d\u4f1a\u6a21\u7cca\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u5728\u4e00\u4e9b\u786c\u4ef6\u73af\u5883\u4e2d\u5206\u522b\u4f7f\u7528 Canvas \u6e32\u67d3\u5668\u548c SVG \u6e32\u67d3\u5668\u7ed8\u5236\u4e2d\u7b49\u6570\u636e\u91cf\u7684\u6298\u3001\u67f1\u3001\u997c\uff0c\u7edf\u8ba1\u521d\u59cb\u52a8\u753b\u9636\u6bb5\u7684\u5e27\u7387\uff0c\u5f97\u5230\u4e86\u4e00\u4e2a\u6027\u80fd\u5bf9\u6bd4\u56fe\uff1a ",l.a.createElement(r["Link"],{to:"https://echarts.baidu.com/gallery/view.html?c=doc-example/canvas-vs-svg&reset=1%E2%80%9C"},"https://echarts.baidu.com/gallery/view.html?c=doc-example/canvas-vs-svg&reset=1\u201c")," \u4e0a\u56fe\u663e\u793a\u51fa\uff0c\u5728\u8fd9\u4e9b\u573a\u666f\u4e2d\uff0cSVG \u6e32\u67d3\u5668\u76f8\u6bd4 Canvas \u6e32\u67d3\u5668\u5728\u79fb\u52a8\u7aef\u7684\u603b\u4f53\u8868\u73b0\u66f4\u597d\u3002\u5f53\u7136\uff0c\u8fd9\u4e2a\u5b9e\u9a8c\u5e76\u975e\u662f\u5168\u9762\u7684\u8bc4\u6d4b\uff0c\u5728\u53e6\u4e00\u4e9b\u6570\u636e\u91cf\u8f83\u5927\u6216\u8005\u6709\u56fe\u8868\u4ea4\u4e92\u52a8\u753b\u7684\u573a\u666f\u4e2d\uff0c\u76ee\u524d\u7684 SVG \u6e32\u67d3\u5668\u7684\u6027\u80fd\u8fd8\u6bd4\u4e0d\u8fc7 Canvas \u6e32\u67d3\u5668\u3002\u4f46\u662f\u540c\u65f6\u6709\u8fd9\u4e24\u4e2a\u9009\u9879\uff0c\u4e3a\u5f00\u53d1\u8005\u4eec\u6839\u636e\u81ea\u5df1\u7684\u60c5\u51b5\u4f18\u5316\u6027\u80fd\u63d0\u4f9b\u4e86\u66f4\u5e7f\u9614\u7684\u7a7a\u95f4\u3002"),l.a.createElement("p",null,"\u9009\u62e9\u54ea\u79cd\u6e32\u67d3\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u8f6f\u786c\u4ef6\u73af\u5883\u3001\u6570\u636e\u91cf\u3001\u529f\u80fd\u9700\u6c42\u7efc\u5408\u8003\u8651\u3002"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5728\u8f6f\u786c\u4ef6\u73af\u5883\u8f83\u597d\uff0c\u6570\u636e\u91cf\u4e0d\u5927\u7684\u573a\u666f\u4e0b\uff08\u4f8b\u5982 PC \u7aef\u505a\u5546\u52a1\u62a5\u8868\uff09\uff0c\u4e24\u79cd\u6e32\u67d3\u5668\u90fd\u53ef\u4ee5\u9002\u7528\uff0c\u5e76\u4e0d\u9700\u8981\u592a\u591a\u7ea0\u7ed3\u3002")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5728\u73af\u5883\u8f83\u5dee\uff0c\u51fa\u73b0\u6027\u80fd\u95ee\u9898\u9700\u8981\u4f18\u5316\u7684\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bd5\u9a8c\u6765\u786e\u5b9a\u4f7f\u7528\u54ea\u79cd\u6e32\u67d3\u5668\u3002\u6bd4\u5982\u6709\u8fd9\u4e9b\u7ecf\u9a8c\uff1a"))),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5728\u987b\u8981\u521b\u5efa\u5f88\u591a ECharts \u5b9e\u4f8b\u4e14\u6d4f\u89c8\u5668\u6613\u5d29\u6e83\u7684\u60c5\u51b5\u4e0b\uff08\u53ef\u80fd\u662f\u56e0\u4e3a Canvas \u6570\u91cf\u591a\u5bfc\u81f4\u5185\u5b58\u5360\u7528\u8d85\u51fa\u624b\u673a\u627f\u53d7\u80fd\u529b\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 SVG \u6e32\u67d3\u5668\u6765\u8fdb\u884c\u6539\u5584\u3002\u5927\u7565\u5f97\u8bf4\uff0c\u5982\u679c\u56fe\u8868\u8fd0\u884c\u5728\u4f4e\u7aef\u5b89\u5353\u673a\uff0c\u6216\u8005\u6211\u4eec\u5728\u4f7f\u7528\u4e00\u4e9b\u7279\u5b9a\u56fe\u8868\u5982 ",l.a.createElement(r["Link"],{to:"https://ecomfe.github.io/echarts-liquidfill/example/"},"\u6c34\u7403\u56fe")," \u7b49\uff0cSVG \u6e32\u67d3\u5668\u53ef\u80fd\u6548\u679c\u66f4\u597d")),l.a.createElement("li",null,l.a.createElement("p",null,"\u6570\u636e\u91cf\u5f88\u5927\u3001\u8f83\u591a\u4ea4\u4e92\u65f6\uff0c\u53ef\u4ee5\u9009\u7528 Canvas \u6e32\u67d3\u5668\u3002"))),l.a.createElement("p",null,"\u6ce8\uff1a\u9664\u4e86\u67d0\u4e9b\u7279\u6b8a\u7684\u6e32\u67d3\u53ef\u80fd\u4f9d\u8d56 Canvas\uff1a",l.a.createElement(r["Link"],{to:"https://www.echartsjs.com/zh/option.html#series-lines.effect"},"\u5982\u70ab\u5149\u5c3e\u8ff9\u7279\u6548"),"\u3001",l.a.createElement(r["Link"],{to:"https://www.echartsjs.com/examples/zh/editor.html?c=heatmap-bmap"},"\u5e26\u6709\u6df7\u5408\u6548\u679c\u7684\u70ed\u529b\u56fe"),"\u7b49\uff0c\u7edd\u5927\u90e8\u5206\u529f\u80fd SVG \u90fd\u662f\u652f\u6301\u7684\u3002\u6b64\u5916\uff0c\u76ee\u524d\u7684 SVG \u7248\u4e2d\uff0c\u5bcc\u6587\u672c\u3001\u6750\u8d28\u529f\u80fd\u5c1a\u672a\u5b9e\u73b0\u3002"),l.a.createElement("h3",{id:"\u5982\u4f55\u4f7f\u7528\u6e32\u67d3\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u5982\u4f55\u4f7f\u7528\u6e32\u67d3\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u4f7f\u7528\u6e32\u67d3\u5668"),l.a.createElement("p",null,"ECharts \u9ed8\u8ba4\u4f7f\u7528 Canvas \u6e32\u67d3\u3002\u5982\u679c\u60f3\u4f7f\u7528 SVG \u6e32\u67d3\uff0cECharts \u4ee3\u7801\u4e2d\u987b\u5305\u62ec\u6709 SVG \u6e32\u67d3\u5668\u6a21\u5757\u3002"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u5982\u679c ",l.a.createElement(r["Link"],{to:"https://www.echartsjs.com/zh/builder.html"},"\u5728\u7ebf\u81ea\u5b9a\u4e49\u6784\u5efa ECharts"),"\uff0c\u5219\u9700\u8981\u52fe\u4e0a\u9875\u9762\u4e0b\u65b9\u7684 \u201cSVG \u6e32\u67d3\u201d\u3002")),l.a.createElement("li",null,l.a.createElement("p",null,"\u5982\u679c ",l.a.createElement(r["Link"],{to:"https://www.echartsjs.com/zh/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts"},"\u7ebf\u4e0b\u81ea\u5b9a\u4e49\u6784\u5efa ECharts"),"\uff0c\u5219\u987b\u5f15\u5165 SVG \u6e32\u67d3\u5668\u6a21\u5757\uff0c\u5373\uff1a"),l.a.createElement(c["a"],{code:"import 'zrender/lib/svg/svg';",lang:"js"}))),l.a.createElement("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\uff0c\u521d\u59cb\u5316\u56fe\u8868\u5b9e\u4f8b\u65f6\uff0c",l.a.createElement(r["Link"],{to:"https://www.echartsjs.com/zh/api.html#echarts.init"},"\u4f20\u5165\u53c2\u6570")," \u9009\u62e9\u6e32\u67d3\u5668\u7c7b\u578b\uff1a"),l.a.createElement(c["a"],{code:"// \u4f7f\u7528 Canvas \u6e32\u67d3\u5668\uff08\u9ed8\u8ba4\uff09\nvar chart = echarts.init(containerDom, null, {renderer: 'canvas'});\n// \u7b49\u4ef7\u4e8e\uff1a\nvar chart = echarts.init(containerDom);\n// \u4f7f\u7528 SVG \u6e32\u67d3\u5668\nvar chart = echarts.init(containerDom, null, {renderer: 'svg'});",lang:"js"})))}));a["default"]=e=>{var a=l.a.useContext(r["context"]),t=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(s,{demos:t})}}}]);