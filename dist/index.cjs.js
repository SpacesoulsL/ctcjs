"use strict";const e=["零","一","二","三","四","五","六","七","八","九"],r=["","十","百","千","万","十万","百万","千万","亿","十亿","百亿","千亿"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],t=["","拾","佰","仟","万","拾万","佰万","仟万","亿","拾亿","佰亿","仟亿"];function c(r,t){const c=new Object;return r=r.map((r=>(r=Number(r),r=t?n[r]:e[r]))).forEach(((e,r)=>{c[r]=e})),c}function l(e,r){const n=new RegExp(r,"g"),t=new RegExp(r);return e.match(n)?.length>1?l(e=e.replace(t,""),r):e}module.exports=function(n,i=!1,a=""){if("number"!=typeof n)return console.error("Function CNnum's argument type must be Number."),new Error;if(0===n)return e[0];let p=function(e,n){const l=(e=e.toString().split("")).findIndex((e=>"."===e));let i=null,a=new String;if(-1!==l){i=e.splice(l),i.splice(0,1);const r=c(i,n);for(let e in r)a+=r[e]}const p=c(e,n),o=Object.keys(p).length;for(let e=0,c=o-1;e<o;e++,c--)p[e]=p[e]+(n?t[c]:r[c]);let g=new String;for(let e in p)g+=p[e];return{finalString:g,finalAfterString:a}}(n,i),o=p.finalString,g=p.finalAfterString;var u;return i?(u=l(u=(u=(u=o).replace(/零(拾|佰|仟)万/g,"零").replace(/零万/,"万").replace(/万+/g,"万")).replace(/零万/,"万").replace(/零(拾|佰|仟)/g,"零").replace(/零+/g,"零").replace(/零$/,"").replace(/^壹拾/,"拾"),"亿"),o=l(u,"万")):o=function(e){return e=l(e=(e=e.replace(/零(十|百|千)万/g,"零").replace(/零万/,"万").replace(/万+/g,"万")).replace(/零万/,"万").replace(/零(十|百|千)/g,"零").replace(/零+/g,"零").replace(/零$/,"").replace(/^一十/,"十"),"亿"),l(e,"万")}(o),0!==g.length&&(o=i?o+"點"+g:o+"点"+g),a&&(o+=a),o};