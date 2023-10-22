(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    color: black;\n}\n\nbody,\nhtml {\n    height: 100%;\n    background-color: rgb(250, 244, 244);\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.container {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 80px 4fr 80px;\n    text-align: center;\n}\n\nheader {\n    background-color: #DC4C3E;\n    grid-row: 1;\n    display: flex;\n    align-items: center;\n    color: white;\n}\n\nmain {\n    text-align: start;\n    padding: 20px;\n    position: relative;\n}\n\nmain .todo-container {\n    display: grid;\n    margin-top: 20px;\n    gap: 30px;\n}\n\nmain .add-todo {\n    margin-top: 10px;\n}\n\n.add-todo button {\n    padding: 5px 15px;\n}\n\n.section {\n    padding: 0 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-radius: 15px;\n}\n.section:hover {\n    cursor: pointer;\n}\n.section div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0;\n}\n\n.sidebar {\n    background-color: #e1dede;\n    grid-column: 1;\n    grid-row: 1 / 4;\n    padding: 20px;\n    display: grid;\n    align-content: flex-start;\n    gap: 30px;\n    grid-template-rows: 100px, repeat(2, 50%);\n}\n\n.sidebar > div {\n    background-color: rgb(240, 240, 240);\n    text-align: start;\n    border-radius: 15px;\n    box-shadow: 0 1px 2px black;\n}\n\n.sidebar ul {\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebar .projects,\n.sidebar .todos {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow-y: auto;\n}\n\n.complete::after {\n    content: 'Completed';\n    background-color: teal;\n    color: white;\n    padding: 2px 7px;\n    border-radius: 15px;\n    margin-left: 15px;\n    font-weight: 500;\n    font-size: .8rem;\n}\n\n.todos .sideBar-container, .projects .sideBar-container, .top {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px;\n}\n.sideBar-container:hover {\n    background-color: white;\n    cursor: pointer;\n}\n#todo-dialog {\n    margin: 10px auto;\n    border: none;\n    width: 95%;\n    padding: 20px;\n    border-radius: 15px;\n    box-shadow: 0 0 3px gray;\n}\nfieldset {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: none;\n}\n\n\ninput, textarea {\n    display: block;\n    width: 100%;\n    border: none;\n    outline: none;\n    padding: 5px 10px;\n    resize: none;\n}\n\ninput[name=\"title\"] {\n    font-weight: 700;\n}\ninput:hover, input:focus, textarea:hover, textarea:focus {\n    border-bottom: 1px solid black;\n}\nselect, .date {\n    outline: none;\n    padding: 5px 10px;\n    border-radius: 10px;\n    border: 1px solid gray;\n}\n\ninput:invalid:focus {\n    border-bottom: 1px solid red;\n}\nselect:invalid:focus {\n    border: 1px solid red;\n}\n.lower-form {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n.sideBar-container div {\n    display: flex;\n    justify-content: flex-end;\n    gap: 5px;\n    padding: 0;\n}\n\n.submit {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.cancel {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n}\n#submit, #cancel {\n    padding: 7px 15px;\n    border: none;\n    border-radius: 10px;\n    font-weight: 700;\n}\n#submit {\n    background-color: #DC4C3E;\n    color: white;\n    \n}\n#cancel {\n    background-color: #e1dede;\n}\n\nbutton:hover {\n    cursor: pointer;\n    opacity: .7;\n}\n\n.add-project {\n    display: none;\n}\n\n.sidebar .side-top {\n    background: none;\n    border: none;\n    box-shadow: none;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 1.3rem;\n}",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var u=e[d],s=r.base?u[0]+r.base:u[0],l=o[s]||0,c="".concat(s," ").concat(l);o[s]=l+1;var m=n(c),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var h=a(f,r);r.byIndex=d,t.splice(d,0,{identifier:c,updater:h,references:1})}i.push(c)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=n(o[i]);t[d].references--}for(var u=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r={};(()=>{n.d(r,{KR:()=>Oe,RY:()=>Ne,KT:()=>Se,EX:()=>Ye});var e=n(379),t=n.n(e),a=n(795),o=n.n(a),i=n(569),d=n.n(i),u=n(565),s=n.n(u),l=n(216),c=n.n(l),m=n(589),f=n.n(m),h=n(426),g={};g.styleTagTransform=f(),g.setAttributes=s(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const p=n.p+"96fed0b6f4ffd9b99e71.svg",v=n.p+"228dfca2862c7d04e4f6.svg",y=[],b=(e,t,n,r,a,o)=>{const i={title:e,desc:t,dueDate:n,priority:r,projectCat:a,complete:o};y.push(i)},w=e=>{y.splice(e,1)},x=e=>e.complete=!e.complete,C=()=>y,T=["Coding","Exercise","Reading"],k=()=>T;const E=n.p+"7627dfa4976d51ee938e.svg";function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function S(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function D(e){S(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===M(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function P(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function U(e){S(1,arguments);var t=D(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function L(e){S(1,arguments);var t=D(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=U(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=U(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var W={};function j(){return W}function Y(e,t){var n,r,a,o,i,d,u,s;S(1,arguments);var l=j(),c=P(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=D(e),f=m.getUTCDay(),h=(f<c?7:0)+f-c;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function N(e,t){var n,r,a,o,i,d,u,s;S(1,arguments);var l=D(e),c=l.getUTCFullYear(),m=j(),f=P(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(u=m.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(c+1,0,f),h.setUTCHours(0,0,0,0);var g=Y(h,t),p=new Date(0);p.setUTCFullYear(c,0,f),p.setUTCHours(0,0,0,0);var v=Y(p,t);return l.getTime()>=g.getTime()?c+1:l.getTime()>=v.getTime()?c:c-1}function O(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const q={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return O("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):O(n+1,2)},d:function(e,t){return O(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return O(e.getUTCHours()%12||12,t.length)},H:function(e,t){return O(e.getUTCHours(),t.length)},m:function(e,t){return O(e.getUTCMinutes(),t.length)},s:function(e,t){return O(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return O(Math.floor(r*Math.pow(10,n-3)),t.length)}};var H={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return q.y(e,t)},Y:function(e,t,n,r){var a=N(e,r),o=a>0?a:1-a;return"YY"===t?O(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):O(o,t.length)},R:function(e,t){return O(L(e),t.length)},u:function(e,t){return O(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return O(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return O(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return q.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return O(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){S(1,arguments);var n=D(e),r=Y(n,t).getTime()-function(e,t){var n,r,a,o,i,d,u,s;S(1,arguments);var l=j(),c=P(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),m=N(e,t),f=new Date(0);return f.setUTCFullYear(m,0,c),f.setUTCHours(0,0,0,0),Y(f,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):O(a,t.length)},I:function(e,t,n){var r=function(e){S(1,arguments);var t=D(e),n=U(t).getTime()-function(e){S(1,arguments);var t=L(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),U(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):O(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):q.d(e,t)},D:function(e,t,n){var r=function(e){S(1,arguments);var t=D(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):O(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return O(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return O(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return O(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):q.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):q.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):q.s(e,t)},S:function(e,t){return q.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return I(a);case"XXXX":case"XX":return F(a);default:return F(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return I(a);case"xxxx":case"xx":return F(a);default:return F(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+B(a,":");default:return"GMT"+F(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+B(a,":");default:return"GMT"+F(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return O(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return O((r._originalDate||e).getTime(),t.length)}};function B(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+O(o,2)}function I(e,t){return e%60==0?(e>0?"-":"+")+O(Math.abs(e)/60,2):F(e,t)}function F(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+O(Math.floor(a/60),2)+n+O(a%60,2)}const A=H;var z=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},R=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const G={p:R,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return z(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",z(a,t)).replace("{{time}}",R(o,t))}};var Q=["D","DD"],X=["YY","YYYY"];function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var J={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function _(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Z={date:_({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:_({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:_({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var K={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function V(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const ee={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:V({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:V({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:V({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:V({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:V({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function te(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,d=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(u);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(d.length)}}}var ne,re={ordinalNumber:(ne={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(ne.matchPattern);if(!n)return null;var r=n[0],a=e.match(ne.parsePattern);if(!a)return null;var o=ne.valueCallback?ne.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:te({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:te({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:te({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:te({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:te({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ae={code:"en-US",formatDistance:function(e,t,n){var r,a=J[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Z,formatRelative:function(e,t,n,r){return K[e]},localize:ee,match:re,options:{weekStartsOn:0,firstWeekContainsDate:1}};var oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ie=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,de=/^'([^]*?)'?$/,ue=/''/g,se=/[a-zA-Z]/;function le(e,t,n){var r,a,o,i,d,u,s,l,c,m,f,h,g,p,v,y,b,w;S(2,arguments);var x=String(t),C=j(),T=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:C.locale)&&void 0!==r?r:ae,k=P(null!==(o=null!==(i=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==d?d:C.firstWeekContainsDate)&&void 0!==i?i:null===(c=C.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=P(null!==(f=null!==(h=null!==(g=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(v=n.locale)||void 0===v||null===(y=v.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:C.weekStartsOn)&&void 0!==h?h:null===(b=C.locale)||void 0===b||null===(w=b.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==f?f:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!T.localize)throw new RangeError("locale must contain localize property");if(!T.formatLong)throw new RangeError("locale must contain formatLong property");var U=D(e);if(!function(e){if(S(1,arguments),!function(e){return S(1,arguments),e instanceof Date||"object"===M(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=D(e);return!isNaN(Number(t))}(U))throw new RangeError("Invalid time value");var L=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(U),W=function(e,t){return S(2,arguments),function(e,t){S(2,arguments);var n=D(e).getTime(),r=P(t);return new Date(n+r)}(e,-P(t))}(U,L),Y={firstWeekContainsDate:k,weekStartsOn:E,locale:T,_originalDate:U};return x.match(ie).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,G[t])(e,T.formatLong):e})).join("").match(oe).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(de))?o[1].replace(ue,"'"):a;var d,u=A[i];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(d=r,-1===X.indexOf(d))||$(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==Q.indexOf(e)}(r)||$(r,t,String(e)),u(W,r,T.localize,Y);if(i.match(se))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const ce=document.querySelector(".add-todo"),me=document.querySelector(".todo-container"),fe=document.getElementById("todo-list"),he=document.getElementById("project-list"),ge=document.getElementById("todo-dialog"),pe=document.getElementById("cancel"),ve=document.querySelector(".add-project"),ye=document.querySelector(".projects .top"),be=document.getElementById("todo-logo"),we=document.getElementById("title"),xe=document.getElementById("description"),Ce=document.getElementById("priority"),Te=document.getElementById("project"),ke=document.getElementById("date");be.src=E;const Ee=new Date,Me=`${Ee.getFullYear()}-${Ee.getMonth()+1}-${Ee.getDate()}`;ke.setAttribute("min",Me);const Se=()=>{De(),Pe()},De=()=>{!function(e){e.innerHTML="",C().forEach(((t,n)=>{const r=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),d=document.createElement("h3"),u=document.createElement("hr"),s=document.createElement("p"),l=document.createElement("p"),c=document.createElement("p"),m=document.createElement("p"),f=document.createElement("hr"),h=new Image,g=new Image;switch(h.src=v,g.src=p,h.width=20,g.width=20,h.style.display="none",g.style.display="none",r.classList.add("section"),l.classList.add("date"),d.textContent=t.title,s.textContent=t.desc,l.textContent=t.dueDate,m.textContent=t.projectCat,c.style.width="16px",c.style.height="16px",c.style.borderRadius="50%",l.textContent=t.dueDate,t.priority){case"highest":c.style.backgroundColor="red",l.style.backgroundColor="red",l.style.color="orange";break;case"high":c.style.backgroundColor="orange",l.style.backgroundColor="orange",l.style.color="white";break;case"normal":c.style.backgroundColor="green",l.style.backgroundColor="green",l.style.color="white";break;case"low":c.style.backgroundColor="blue",l.style.backgroundColor="blue",l.style.color="white";break;case"lowest":c.style.backgroundColor="lightblue",l.style.backgroundColor="lightblur",l.style.color="green"}a.appendChild(d),a.appendChild(h),o.appendChild(s),o.appendChild(g),i.appendChild(l),i.appendChild(m),i.appendChild(c),r.appendChild(a),r.appendChild(u),r.appendChild(o),r.appendChild(i),r.appendChild(f),e.appendChild(r),h.addEventListener("click",(()=>{w(n),Oe(),Ne(),Se()})),t.complete&&d.classList.add("complete"),g.addEventListener("click",(()=>{t.complete?(d.classList.remove("complete"),x(t)):(d.classList.add("complete"),x(t))})),r.addEventListener("mouseover",(()=>{h.style.display="block"})),r.addEventListener("mouseover",(()=>{g.style.display="block"})),r.addEventListener("mouseout",(()=>{h.style.display="none"})),r.addEventListener("mouseout",(()=>{g.style.display="none"}))}))}(me),function(e){e.innerHTML="",C().forEach(((t,n)=>{const r=document.createElement("div"),a=document.createElement("li"),o=document.createElement("div"),i=new Image,d=new Image;r.classList.add("sideBar-container"),i.src=v,d.src=p,i.width=20,d.width=20,a.textContent=t.title,o.appendChild(i),o.appendChild(d),o.style.display="none",r.appendChild(a),r.appendChild(o),e.appendChild(r),i.addEventListener("click",(()=>{w(n),Oe(),Ne(),Se()})),d.addEventListener("click",(()=>{t.complete,x(t),Se()})),r.addEventListener("mouseover",(()=>{o.style.display="flex"})),r.addEventListener("mouseout",(()=>{o.style.display="none"}))}))}(fe)},Pe=()=>{he.innerHTML="",k().forEach(((e,t)=>{!function(e,t,n){const r=document.createElement("div"),a=document.createElement("li"),o=document.createElement("div"),i=new Image,d=document.createElement("p");r.classList.add("sideBar-container"),i.src=v,i.width=20,i.style.display="none";let u=function(e,t){let n=0;return t().forEach((t=>{k().includes(t.projectCat)&&t.projectCat===e&&n++})),n}(e,C);a.textContent=e,d.textContent=u,o.appendChild(d),o.appendChild(i),r.appendChild(a),r.appendChild(o),t.appendChild(r),i.addEventListener("click",(()=>{(e=>{T.splice(e,1)})(n);const t=C();for(let n=t.length-1;n>=0;n--)t[n].projectCat===e&&w(n);Ye(),Se()})),r.addEventListener("mouseover",(()=>{i.style.display="block"})),r.addEventListener("mouseout",(()=>{i.style.display="none"}))}(e,he,t)}))};Pe();let Ue="",Le="",We=Ce.value;const je=Te.value;ce.addEventListener("click",(()=>{ge.show(),Te.value=je,Ue=je,Ce.value=We,Le=We})),Te.addEventListener("change",(()=>{Ue=Te.selectedOptions[0].text})),Ce.addEventListener("change",(()=>{Le=Ce.value}));const Ye=()=>{Te.innerHTML='<option value="" disabled selected id="default-p">Add To Project</option>',k().forEach((e=>{const t=`<option value=${e} class="opt">${e[0].toUpperCase()+e.slice(1)}</option>`;Te.insertAdjacentHTML("beforeend",t)}))};Ye(),document.querySelector(".former").addEventListener("submit",(e=>{e.preventDefault();const t=we.value,n=xe.value;let r=Ue;const a=Le,o=le(new Date(ke.value),"MMM do yyyy");b(t,n,o,a,r,!1),Ne(),Se(),ge.close()})),pe.addEventListener("click",(()=>{ge.close()})),ve.addEventListener("click",(()=>{const e=prompt("Enter project Name: ","Any");k().includes(e)||null==e?alert("Please Try Another Name"):((e=>{const t=e;T.push(t)})(e),Se(),Ye())})),ye.addEventListener("mouseover",(()=>{ve.style.display="block"})),ye.addEventListener("mouseout",(()=>{ve.style.display="none"}));const Ne=()=>{localStorage.clear(),C().forEach(((e,t)=>{localStorage.setItem(`todo_${t}`,JSON.stringify(e))}))},Oe=()=>{C().forEach(((e,t)=>{localStorage.removeItem(`todo_${t}`)}))};(()=>{const e=[];let t=0;for(;;){const n=JSON.parse(localStorage.getItem(`todo_${t}`));if(null===n)break;e.push(n),t++}e.forEach((e=>{b(e.title,e.desc,e.dueDate,e.priority,e.projectCat,e.isComplete),Se()}))})()})()})();