(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(418)},"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(55)},"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(58)},"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(57)},"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(56)},"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(290)},"./node_modules/_object-assign@4.1.1@object-assign/index.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(148)},"./node_modules/_process@0.11.10@process/browser.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(425)},"./node_modules/_raf@3.4.1@raf/index.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(106)},"./node_modules/_react-lifecycles-compat@3.0.4@react-lifecycles-compat/react-lifecycles-compat.es.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(104)},"./node_modules/_warning@4.0.3@warning/warning.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(12)},"./node_modules/_webpack@4.27.1@webpack/buildin/global.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(19)},"./node_modules/_webpack@4.27.1@webpack/buildin/module.js":function(e,n,t){e.exports=t("dll-reference _dll_dllLibrary__pro")(60)},"./src/pages/Documents/EFabButton/index.tsx":function(e,n,t){"use strict";t.r(n);var i,o=t("./node_modules/_tslib@1.14.1@tslib/tslib.es6.js"),l=t("./node_modules/_react@16.8.2@react/index.js"),c=t.n(l),r=t("./node_modules/_emptyd@0.1.7@emptyd/Edocument/index.tsx"),d=t("./node_modules/_emptyd@0.1.7@emptyd/Prompt/index.tsx"),a=t("./node_modules/_emptyd@0.1.7@emptyd/EfabButtonHoc/index.tsx"),m=[{key:"1",title:"name",explain:"中心按钮名称",type:"string",default:"-"},{key:"2",title:"direction",explain:"浮动按钮方向 top | right | bottom | left | circle",type:"string",default:"top"},{key:"3",title:" centerStyle ",explain:"中心按钮样式",type:"object",default:"-"},{key:"4",title:" renderItem ",explain:"浮动按钮数组 ",type:" Array ",default:"-"},{key:"5",title:" delay ",explain:" 动画延时 ",type:" string ",default:".2"},{key:"6",title:"circleBtnDirection",explain:"direction为circle时,按钮环绕方向顺序",type:" string ",default:"['top','right','bottom','left']"}],o=(i=l.Component,o.d(s,i),s.prototype.render=function(){return c.a.createElement(r.a,{title:"浮动按钮:EfabButtonHoc",components:[{component:c.a.createElement("div",null,c.a.createElement(Object(a.a)({name:"看右边",direction:"right",centerStyle:{marginRight:"40px"},renderItem:[{name:"锁定",icon:"lock",id:"001",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"爱心",icon:"heart",id:"002",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"解锁",icon:"unlock",id:"003",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"资料",icon:"folder",id:"004",click:function(e){d.a.info("点击了"+e+"按钮")}}]})()),c.a.createElement(Object(a.a)({name:"点我",direction:"top",renderItem:[{name:"锁定",icon:"lock",id:"001",click:function(e){d.a.info("点击了"+e+"按钮")}}]})()),c.a.createElement(Object(a.a)({name:"更多",direction:"circle",centerStyle:{marginLeft:"40px"},renderItem:[{name:"锁定",icon:"lock",id:"001",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"爱心",icon:"heart",id:"002",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"解锁",icon:"unlock",id:"003",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"资料",icon:"folder",id:"004",click:function(e){d.a.info("点击了"+e+"按钮")}}]})()),c.a.createElement(Object(a.a)({name:"点我",direction:"bottom",centerStyle:{marginLeft:"40px"},renderItem:[{name:"锁定",icon:"lock",id:"001",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"爱心",icon:"heart",id:"002",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"解锁",icon:"unlock",id:"003",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"资料",icon:"folder",id:"004",click:function(e){d.a.info("点击了"+e+"按钮")}}]})()),c.a.createElement(Object(a.a)({name:"看左边",direction:"left",centerStyle:{marginLeft:"40px"},renderItem:[{name:"锁定",icon:"lock",id:"001",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"爱心",icon:"heart",id:"002",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"解锁",icon:"unlock",id:"003",click:function(e){d.a.info("点击了"+e+"按钮")}},{name:"资料",icon:"folder",id:"004",click:function(e){d.a.info("点击了"+e+"按钮")}}]})())),titDescripttion:"浮动按钮支持单方向和多方向渲染，多方向渲染时默认顺序为上右下左，也可自行配置",code:'\n              import  {  Edocument, Prompt , EfabButtonHoc} from \'emptyd\';\n\n              class EfabButtonHocDocuments extends Component<any, any> {\n                render(){\n                  return(\n                    React.createElement(EfabButtonHoc({\n                        name:"更多",\n                        direction:"circle",\n                        centerStyle:{marginLeft:"40px"},\n                        renderItem:[\n                            {\n                                name:"锁定",\n                                icon:"lock",\n                                id:"001",\n                                click(id){\n                                    Prompt[\'info\']("点击了"+id+"按钮")\n                                }\n                            },{\n                                name:\'爱心\',\n                                icon:"heart",\n                                id:"002",\n                                click(id){\n                                    Prompt[\'info\']("点击了"+id+"按钮")\n                                }\n                            },{\n                                name:\'解锁\',\n                                icon:"unlock",\n                                id:"003",\n                                click(id){\n                                    Prompt[\'info\']("点击了"+id+"按钮")\n                                }\n                            },{\n                                name:\'资料\',\n                                icon:"folder",\n                                id:"004",\n                                click(id){\n                                    Prompt[\'info\']("点击了"+id+"按钮")\n                                }\n                            }\n                        ]\n                    })()))\n                  )\n                }\n              }\n            '}],docDescripttion:"EfabButtonHoc属性如下:",documentData:m})},s);function s(){return null!==i&&i.apply(this,arguments)||this}n.default=o}}]);