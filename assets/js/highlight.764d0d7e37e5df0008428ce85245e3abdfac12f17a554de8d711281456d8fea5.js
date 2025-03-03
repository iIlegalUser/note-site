/*!
  Highlight.js v11.10.0 (git: 366a8bd012)
  (c) 2006-2024 Josh Goebel <hello@joshgoebel.com> and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(t){
return t instanceof Map?t.clear=t.delete=t.set=()=>{
throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{
const i=t[n],s=typeof i;"object"!==s&&"function"!==s||Object.isFrozen(i)||e(i)
})),t}class t{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function n(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function i(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const s=e=>!!e.scope
;class o{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=n(e)}openNode(e){if(!s(e))return;const t=((e,{prefix:t})=>{
if(e.startsWith("language:"))return e.replace("language:","language-")
;if(e.includes(".")){const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}
closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const t={children:[]}
;return Object.assign(t,e),t};class a{constructor(){
this.rootNode=r(),this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t=r({scope:e})
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
a._collapse(e)})))}}class c extends a{constructor(e){super(),this.options=e}
addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
this.closeNode()}__addSublanguage(e,t){const n=e.root
;t&&(n.scope="language:"+t),this.add(n)}toHTML(){
return new o(this,this.options).value()}finalize(){
return this.closeAllNodes(),!0}}function l(e){
return e?"string"==typeof e?e:e.source:null}function g(e){return h("(?=",e,")")}
function u(e){return h("(?:",e,")*")}function d(e){return h("(?:",e,")?")}
function h(...e){return e.map((e=>l(e))).join("")}function f(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}
function p(e){return RegExp(e.toString()+"|").exec("").length-1}
const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function m(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let i=l(e),s="";for(;i.length>0;){const e=b.exec(i);if(!e){s+=i;break}
s+=i.substring(0,e.index),
i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+(Number(e[1])+t):(s+=e[0],
"("===e[0]&&n++)}return s})).map((e=>`(${e})`)).join(t)}
const E="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_="\\b(0b[01]+)",O={
begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[O]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[O]},N=(e,t,n={})=>{const s=i({scope:"comment",begin:e,end:t,
contains:[]},n);s.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const o=f("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return s.contains.push({begin:h(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s
},S=N("//","$"),M=N("/\\*","\\*/"),R=N("#","$");var j=Object.freeze({
__proto__:null,APOS_STRING_MODE:v,BACKSLASH_ESCAPE:O,BINARY_NUMBER_MODE:{
scope:"number",begin:_,relevance:0},BINARY_NUMBER_RE:_,COMMENT:N,
C_BLOCK_COMMENT_MODE:M,C_LINE_COMMENT_MODE:S,C_NUMBER_MODE:{scope:"number",
begin:y,relevance:0},C_NUMBER_RE:y,END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}}),HASH_COMMENT_MODE:R,IDENT_RE:E,
MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+x,relevance:0},
NUMBER_MODE:{scope:"number",begin:w,relevance:0},NUMBER_RE:w,
PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},QUOTE_STRING_MODE:k,REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,
end:/\/[gimuy]*/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]},
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=h(t,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
TITLE_MODE:{scope:"title",begin:E,relevance:0},UNDERSCORE_IDENT_RE:x,
UNDERSCORE_TITLE_MODE:{scope:"title",begin:x,relevance:0}});function A(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function I(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function T(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=A,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function L(e,t){
Array.isArray(e.illegal)&&(e.illegal=f(...e.illegal))}function B(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function P(e,t){
void 0===e.relevance&&(e.relevance=1)}const D=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=h(n.beforeMatch,g(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},H=["of","and","for","in","not","or","if","then","parent","list","value"],C="keyword"
;function $(e,t,n=C){const i=Object.create(null)
;return"string"==typeof e?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,$(e[n],t,n))})),i;function s(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
return t?Number(t):(e=>H.includes(e.toLowerCase()))(e)?0:1}const z={},W=e=>{
console.error(e)},X=(e,...t)=>{console.log("WARN: "+e,...t)},G=(e,t)=>{
z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
},K=Error();function F(e,t,{key:n}){let i=0;const s=e[n],o={},r={}
;for(let e=1;e<=t.length;e++)r[e+i]=s[e],o[e+i]=!0,i+=p(t[e-1])
;e[n]=r,e[n]._emit=o,e[n]._multi=!0}function Z(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
K
;if("object"!=typeof e.beginScope||null===e.beginScope)throw W("beginScope must be object"),
K;F(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
K
;if("object"!=typeof e.endScope||null===e.endScope)throw W("endScope must be object"),
K;F(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}})(e)}function V(e){
function t(t,n){
return RegExp(l(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(m(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class s{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=i(e.classNameAliases||{}),function n(o,r){const a=o
;if(o.isCompiled)return a
;[I,B,Z,D].forEach((e=>e(o,r))),e.compilerExtensions.forEach((e=>e(o,r))),
o.__beforeBegin=null,[T,L,P].forEach((e=>e(o,r))),o.isCompiled=!0;let c=null
;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),
c=o.keywords.$pattern,
delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=$(o.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=t(a.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),
o.end&&(a.endRe=t(a.end)),
a.terminatorEnd=l(a.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),
o.illegal&&(a.illegalRe=t(o.illegal)),
o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>i(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?i(e,{
starts:e.starts?i(e.starts):null
}):Object.isFrozen(e)?i(e):e))("self"===e?o:e)))),o.contains.forEach((e=>{n(e,a)
})),o.starts&&n(o.starts,r),a.matcher=(e=>{const t=new s
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const Y=n,Q=i,ee=Symbol("nomatch"),te=n=>{
const i=Object.create(null),s=Object.create(null),o=[];let r=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",l={
disableAutodetect:!0,name:"Plain text",contains:[]};let p={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:c};function b(e){
return p.noHighlightRe.test(e)}function m(e,t,n){let i="",s=""
;"object"==typeof t?(i=e,
n=t.ignoreIllegals,s=t.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),
G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
s=e,i=t),void 0===n&&(n=!0);const o={code:i,language:s};N("before:highlight",o)
;const r=o.result?o.result:E(o.language,o.code,n)
;return r.code=o.code,N("after:highlight",r),r}function E(e,n,s,o){
const c=Object.create(null);function l(){if(!N.keywords)return void M.addText(R)
;let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(R),n=""
;for(;t;){n+=R.substring(e,t.index)
;const s=_.case_insensitive?t[0].toLowerCase():t[0],o=(i=s,N.keywords[i]);if(o){
const[e,i]=o
;if(M.addText(n),n="",c[s]=(c[s]||0)+1,c[s]<=7&&(j+=i),e.startsWith("_"))n+=t[0];else{
const n=_.classNameAliases[e]||e;u(t[0],n)}}else n+=t[0]
;e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(R)}var i
;n+=R.substring(e),M.addText(n)}function g(){null!=N.subLanguage?(()=>{
if(""===R)return;let e=null;if("string"==typeof N.subLanguage){
if(!i[N.subLanguage])return void M.addText(R)
;e=E(N.subLanguage,R,!0,S[N.subLanguage]),S[N.subLanguage]=e._top
}else e=x(R,N.subLanguage.length?N.subLanguage:null)
;N.relevance>0&&(j+=e.relevance),M.__addSublanguage(e._emitter,e.language)
})():l(),R=""}function u(e,t){
""!==e&&(M.startScope(t),M.addText(e),M.endScope())}function d(e,t){let n=1
;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}
const i=_.classNameAliases[e[n]]||e[n],s=t[n];i?u(s,i):(R=s,l(),R=""),n++}}
function h(e,t){
return e.scope&&"string"==typeof e.scope&&M.openNode(_.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(u(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
R=""):e.beginScope._multi&&(d(e.beginScope,t),R="")),N=Object.create(e,{parent:{
value:N}}),N}function f(e,n,i){let s=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,i);if(s){if(e["on:end"]){const i=new t(e)
;e["on:end"](n,i),i.isMatchIgnored&&(s=!1)}if(s){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return f(e.parent,n,i)}function b(e){
return 0===N.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function m(e){
const t=e[0],i=n.substring(e.index),s=f(N,e,i);if(!s)return ee;const o=N
;N.endScope&&N.endScope._wrap?(g(),
u(t,N.endScope._wrap)):N.endScope&&N.endScope._multi?(g(),
d(N.endScope,e)):o.skip?R+=t:(o.returnEnd||o.excludeEnd||(R+=t),
g(),o.excludeEnd&&(R=t));do{
N.scope&&M.closeNode(),N.skip||N.subLanguage||(j+=N.relevance),N=N.parent
}while(N!==s.parent);return s.starts&&h(s.starts,e),o.returnEnd?0:t.length}
let w={};function y(i,o){const a=o&&o[0];if(R+=i,null==a)return g(),0
;if("begin"===w.type&&"end"===o.type&&w.index===o.index&&""===a){
if(R+=n.slice(o.index,o.index+1),!r){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=w.rule,t}return 1}
if(w=o,"begin"===o.type)return(e=>{
const n=e[0],i=e.rule,s=new t(i),o=[i.__beforeBegin,i["on:begin"]]
;for(const t of o)if(t&&(t(e,s),s.isMatchIgnored))return b(n)
;return i.skip?R+=n:(i.excludeBegin&&(R+=n),
g(),i.returnBegin||i.excludeBegin||(R=n)),h(i,e),i.returnBegin?0:n.length})(o)
;if("illegal"===o.type&&!s){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"')
;throw e.mode=N,e}if("end"===o.type){const e=m(o);if(e!==ee)return e}
if("illegal"===o.type&&""===a)return 1
;if(I>1e5&&I>3*o.index)throw Error("potential infinite loop, way more iterations than matches")
;return R+=a,a.length}const _=O(e)
;if(!_)throw W(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const v=V(_);let k="",N=o||v;const S={},M=new p.__emitter(p);(()=>{const e=[]
;for(let t=N;t!==_;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>M.openNode(e)))})();let R="",j=0,A=0,I=0,T=!1;try{
if(_.__emitTokens)_.__emitTokens(n,M);else{for(N.matcher.considerAll();;){
I++,T?T=!1:N.matcher.considerAll(),N.matcher.lastIndex=A
;const e=N.matcher.exec(n);if(!e)break;const t=y(n.substring(A,e.index),e)
;A=e.index+t}y(n.substring(A))}return M.finalize(),k=M.toHTML(),{language:e,
value:k,relevance:j,illegal:!1,_emitter:M,_top:N}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
illegal:!0,relevance:0,_illegalBy:{message:t.message,index:A,
context:n.slice(A-100,A+100),mode:t.mode,resultSoFar:k},_emitter:M};if(r)return{
language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:N}
;throw t}}function x(e,t){t=t||p.languages||Object.keys(i);const n=(e=>{
const t={value:Y(e),illegal:!1,relevance:0,_top:l,_emitter:new p.__emitter(p)}
;return t._emitter.addText(e),t})(e),s=t.filter(O).filter(k).map((t=>E(t,e,!1)))
;s.unshift(n);const o=s.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(O(e.language).supersetOf===t.language)return 1
;if(O(t.language).supersetOf===e.language)return-1}return 0})),[r,a]=o,c=r
;return c.secondBest=a,c}function w(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=p.languageDetectRe.exec(t);if(n){const t=O(n[1])
;return t||(X(a.replace("{}",n[1])),
X("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||O(e)))})(e);if(b(n))return
;if(N("before:highlightElement",{el:e,language:n
}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
;if(e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),p.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const i=t.textContent,o=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
;e.innerHTML=o.value,e.dataset.highlighted="yes",((e,t,n)=>{const i=t&&s[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+i)
})(e,n,o.language),e.result={language:o.language,re:o.relevance,
relevance:o.relevance},o.secondBest&&(e.secondBest={
language:o.secondBest.language,relevance:o.secondBest.relevance
}),N("after:highlightElement",{el:e,result:o,text:i})}let y=!1;function _(){
"loading"!==document.readyState?document.querySelectorAll(p.cssSelector).forEach(w):y=!0
}function O(e){return e=(e||"").toLowerCase(),i[e]||i[s[e]]}
function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
s[e.toLowerCase()]=t}))}function k(e){const t=O(e)
;return t&&!t.disableAutodetect}function N(e,t){const n=e;o.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y&&_()}),!1),Object.assign(n,{highlight:m,highlightAuto:x,highlightAll:_,
highlightElement:w,
highlightBlock:e=>(G("10.7.0","highlightBlock will be removed entirely in v12.0"),
G("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{p=Q(p,e)},
initHighlighting:()=>{
_(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
_(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(e,t)=>{let s=null;try{s=t(n)}catch(t){
if(W("Language definition for '{}' could not be registered.".replace("{}",e)),
!r)throw t;W(t),s=l}
s.name||(s.name=e),i[e]=s,s.rawDefinition=t.bind(null,n),s.aliases&&v(s.aliases,{
languageName:e})},unregisterLanguage:e=>{delete i[e]
;for(const t of Object.keys(s))s[t]===e&&delete s[t]},
listLanguages:()=>Object.keys(i),getLanguage:O,registerAliases:v,
autoDetection:k,inherit:Q,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),o.push(e)},
removePlugin:e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),n.debugMode=()=>{
r=!1},n.safeMode=()=>{r=!0},n.versionString="11.10.0",n.regex={concat:h,
lookahead:g,either:f,optional:d,anyNumberOfTimes:u}
;for(const t in j)"object"==typeof j[t]&&e(j[t]);return Object.assign(n,j),n
},ne=te({});return ne.newInstance=()=>te({}),ne}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `apache` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"number",
begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/};return{
name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,
contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,
contains:[n,{className:"number",begin:/:\d{1,5}/
},e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",
begin:/\w+/,relevance:0,keywords:{
_:["order","deny","allow","setenv","rewriterule","rewriteengine","rewritecond","documentroot","sethandler","errordocument","loadmodule","options","header","listen","serverroot","servername"]
},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},
contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",
begin:/[\$%]\{/,end:/\}/,contains:["self",{className:"number",begin:/[$%]\d+/}]
},n,{className:"number",begin:/\b\d+/},e.QUOTE_STRING_MODE]}}],illegal:/\S/}}
})();hljs.registerLanguage("apache",e)})();/*! `autohotkey` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a={begin:"`[\\s\\S]"};return{
name:"AutoHotkey",case_insensitive:!0,aliases:["ahk"],keywords:{
keyword:"Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
literal:"true false NOT AND OR",
built_in:"ComSpec Clipboard ClipboardAll ErrorLevel"},
contains:[a,e.inherit(e.QUOTE_STRING_MODE,{contains:[a]}),e.COMMENT(";","$",{
relevance:0}),e.C_BLOCK_COMMENT_MODE,{className:"number",begin:e.NUMBER_RE,
relevance:0},{className:"variable",begin:"%[a-zA-Z0-9#_$@]+%"},{
className:"built_in",begin:"^\\s*\\w+\\s*(,|%)"},{className:"title",variants:[{
begin:'^[^\\n";]+::(?!=)'},{begin:'^[^\\n";]+:(?!=)',relevance:0}]},{
className:"meta",begin:"^\\s*#\\w+",end:"$",relevance:0},{className:"built_in",
begin:"A_[a-zA-Z0-9]+"},{begin:",\\s*,"}]}}})()
;hljs.registerLanguage("autohotkey",e)})();/*! `awk` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Awk",keywords:{
keyword:"BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
},contains:[{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{
begin:/\$\{(.*?)\}/}]},{className:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[{begin:/(u|b)?r?'''/,end:/'''/,relevance:10},{begin:/(u|b)?r?"""/,
end:/"""/,relevance:10},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{
begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{
begin:/(b|br)"/,end:/"/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},e.REGEXP_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE]})})()
;hljs.registerLanguage("awk",e)})();/*! `bash` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const s=e.regex,t={},n={begin:/\$\{/,
end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{
className:"variable",variants:[{
begin:s.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});const a={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]
},i=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),c={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(o);const r={begin:/\$?\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
},l=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),m={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[l,e.SHEBANG(),m,r,i,c,{match:/(\/[a-z._-]+)+/},o,{match:/\\"/},{
className:"string",begin:/'/,end:/'/},{match:/\\'/},t]}}})()
;hljs.registerLanguage("bash",e)})();/*! `basic` grammar compiled for Highlight.js 11.10.0 */
(()=>{var E=(()=>{"use strict";return E=>({name:"BASIC",case_insensitive:!0,
illegal:"^.",keywords:{$pattern:"[a-zA-Z][a-zA-Z0-9_$%!#]*",
keyword:["ABS","ASC","AND","ATN","AUTO|0","BEEP","BLOAD|10","BSAVE|10","CALL","CALLS","CDBL","CHAIN","CHDIR","CHR$|10","CINT","CIRCLE","CLEAR","CLOSE","CLS","COLOR","COM","COMMON","CONT","COS","CSNG","CSRLIN","CVD","CVI","CVS","DATA","DATE$","DEFDBL","DEFINT","DEFSNG","DEFSTR","DEF|0","SEG","USR","DELETE","DIM","DRAW","EDIT","END","ENVIRON","ENVIRON$","EOF","EQV","ERASE","ERDEV","ERDEV$","ERL","ERR","ERROR","EXP","FIELD","FILES","FIX","FOR|0","FRE","GET","GOSUB|10","GOTO","HEX$","IF","THEN","ELSE|0","INKEY$","INP","INPUT","INPUT#","INPUT$","INSTR","IMP","INT","IOCTL","IOCTL$","KEY","ON","OFF","LIST","KILL","LEFT$","LEN","LET","LINE","LLIST","LOAD","LOC","LOCATE","LOF","LOG","LPRINT","USING","LSET","MERGE","MID$","MKDIR","MKD$","MKI$","MKS$","MOD","NAME","NEW","NEXT","NOISE","NOT","OCT$","ON","OR","PEN","PLAY","STRIG","OPEN","OPTION","BASE","OUT","PAINT","PALETTE","PCOPY","PEEK","PMAP","POINT","POKE","POS","PRINT","PRINT]","PSET","PRESET","PUT","RANDOMIZE","READ","REM","RENUM","RESET|0","RESTORE","RESUME","RETURN|0","RIGHT$","RMDIR","RND","RSET","RUN","SAVE","SCREEN","SGN","SHELL","SIN","SOUND","SPACE$","SPC","SQR","STEP","STICK","STOP","STR$","STRING$","SWAP","SYSTEM","TAB","TAN","TIME$","TIMER","TROFF","TRON","TO","USR","VAL","VARPTR","VARPTR$","VIEW","WAIT","WHILE","WEND","WIDTH","WINDOW","WRITE","XOR"]
},contains:[E.QUOTE_STRING_MODE,E.COMMENT("REM","$",{relevance:10
}),E.COMMENT("'","$",{relevance:0}),{className:"symbol",begin:"^[0-9]+ ",
relevance:10},{className:"number",begin:"\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?",
relevance:0},{className:"number",begin:"(&[hH][0-9a-fA-F]{1,4})"},{
className:"number",begin:"(&[oO][0-7]{1,6})"}]})})()
;hljs.registerLanguage("basic",E)})();/*! `c` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,t=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),a="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",i="("+a+"|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",r={
className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
match:/\batomic_[a-z]{3,6}\b/}]},l={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(l,{className:"string"}),{
className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},d={
className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0
},_=n.optional(s)+e.IDENT_RE+"\\s*\\(",u={
keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","typeof","typeof_unqual","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_BitInt","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal96","_Decimal128","_Decimal64x","_Decimal128x","_Float16","_Float32","_Float64","_Float128","_Float32x","_Float64x","_Float128x","const","static","constexpr","complex","bool","imaginary"],
literal:"true false NULL",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
},g=[c,r,t,e.C_BLOCK_COMMENT_MODE,o,l],m={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:g.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:g.concat(["self"]),relevance:0}]),relevance:0},p={
begin:"("+i+"[\\*&\\s]+)+"+_,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:u,relevance:0},{
begin:_,returnBegin:!0,contains:[e.inherit(d,{className:"title.function"})],
relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,
keywords:u,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,l,o,r,{begin:/\(/,
end:/\)/,keywords:u,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,l,o,r]
}]},r,t,e.C_BLOCK_COMMENT_MODE,c]};return{name:"C",aliases:["h"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(m,p,g,[c,{
begin:e.IDENT_RE+"::",keywords:u},{className:"class",
beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:c,
strings:l,keywords:u}}}})();hljs.registerLanguage("c",e)})();/*! `clojure` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t="a-zA-Z_\\-!.?+*=<>&'",n="[#]?["+t+"]["+t+"0-9/;:$#]*",a="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",r={
$pattern:n,
built_in:a+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
},s={begin:n,relevance:0},o={scope:"number",relevance:0,variants:[{
match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{
match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{
match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{
match:/[-+]?([1-9][0-9]*|0)N?/}]},c={scope:"character",variants:[{
match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{
match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,
relevance:0}]},i={scope:"regex",begin:/#"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]
},d=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),l={scope:"punctuation",
match:/,/,relevance:0},m=e.COMMENT(";","$",{relevance:0}),p={
className:"literal",begin:/\b(true|false|nil)\b/},u={
begin:"\\[|(#::?"+n+")?\\{",end:"[\\]\\}]",relevance:0},f={className:"symbol",
begin:"[:]{1,2}"+n},h={begin:"\\(",end:"\\)"},y={endsWithParent:!0,relevance:0
},g={keywords:r,className:"name",begin:n,relevance:0,starts:y
},b=[l,h,c,i,d,m,f,u,o,p,s],v={beginKeywords:a,keywords:{$pattern:n,keyword:a},
end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:n,
relevance:0,excludeEnd:!0,endsParent:!0}].concat(b)}
;return h.contains=[v,g,y],y.contains=b,u.contains=b,{name:"Clojure",
aliases:["clj","edn"],illegal:/\S/,contains:[l,h,c,i,d,m,f,u,o,p]}}})()
;hljs.registerLanguage("clojure",e)})();/*! `cmake` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"CMake",aliases:["cmake.in"],
case_insensitive:!0,keywords:{
keyword:"break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"
},contains:[{className:"variable",begin:/\$\{/,end:/\}/
},e.COMMENT(/#\[\[/,/]]/),e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE]
})})();hljs.registerLanguage("cmake",e)})();/*! `cpp` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,a=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),n="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",i="(?!struct)("+n+"|"+t.optional(r)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",s={
className:"type",begin:"\\b[a-z\\d_]*_t\\b"},c={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{
begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"
},{
begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"
}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{
className:"string",begin:/<.*?>/},a,e.C_BLOCK_COMMENT_MODE]},u={
className:"title",begin:t.optional(r)+e.IDENT_RE,relevance:0
},d=t.optional(r)+e.IDENT_RE+"\\s*\\(",p={
type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
},_={className:"function.dispatch",relevance:0,keywords:{
_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
},
begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))
},m=[_,l,s,a,e.C_BLOCK_COMMENT_MODE,o,c],f={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:p,contains:m.concat([{begin:/\(/,end:/\)/,keywords:p,
contains:m.concat(["self"]),relevance:0}]),relevance:0},g={className:"function",
begin:"("+i+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:p,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:n,keywords:p,relevance:0},{
begin:d,returnBegin:!0,contains:[u],relevance:0},{begin:/::/,relevance:0},{
begin:/:/,endsWithParent:!0,contains:[c,o]},{relevance:0,match:/,/},{
className:"params",begin:/\(/,end:/\)/,keywords:p,relevance:0,
contains:[a,e.C_BLOCK_COMMENT_MODE,c,o,s,{begin:/\(/,end:/\)/,keywords:p,
relevance:0,contains:["self",a,e.C_BLOCK_COMMENT_MODE,c,o,s]}]
},s,a,e.C_BLOCK_COMMENT_MODE,l]};return{name:"C++",
aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:p,illegal:"</",
classNameAliases:{"function.dispatch":"built_in"},
contains:[].concat(f,g,_,m,[l,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
end:">",keywords:p,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:p},{
match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
className:{1:"keyword",3:"title.class"}}])}}})();hljs.registerLanguage("cpp",e)
})();/*! `crmsh` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t="group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml"
;return{name:"crmsh",aliases:["crm","pcmk"],case_insensitive:!0,keywords:{
keyword:"params meta operations op rule attributes utilization read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\ number string",
literal:"Master Started Slave Stopped start promote demote stop monitor true false"
},contains:[e.HASH_COMMENT_MODE,{beginKeywords:"node",starts:{
end:"\\s*([\\w_-]+:)?",starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*"}}
},{beginKeywords:"primitive rsc_template",starts:{className:"title",
end:"\\s*[\\$\\w_][\\w_-]*",starts:{end:"\\s*@?[\\w_][\\w_\\.:-]*"}}},{
begin:"\\b("+t.split(" ").join("|")+")\\s+",keywords:t,starts:{
className:"title",end:"[\\$\\w_][\\w_-]*"}},{
beginKeywords:"property rsc_defaults op_defaults",starts:{className:"title",
end:"\\s*([\\w_-]+:)?"}},e.QUOTE_STRING_MODE,{className:"meta",
begin:"(ocf|systemd|service|lsb):[\\w_:-]+",relevance:0},{className:"number",
begin:"\\b\\d+(\\.\\d+)?(ms|s|h|m)?",relevance:0},{className:"literal",
begin:"[-]?(infinity|inf)",relevance:0},{className:"attr",
begin:/([A-Za-z$_#][\w_-]+)=/,relevance:0},{className:"tag",begin:"</?",
end:"/?>",relevance:0}]}}})();hljs.registerLanguage("crmsh",e)})();/*! `csharp` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),
built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],
literal:["default","false","null","true"]},a=e.inherit(e.TITLE_MODE,{
begin:"[a-zA-Z](\\.?\\w)*"}),i={className:"number",variants:[{
begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
},t=e.inherit(s,{illegal:/\n/}),r={className:"subst",begin:/\{/,end:/\}/,
keywords:n},l=e.inherit(r,{illegal:/\n/}),c={className:"string",begin:/\$"/,
end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/
},e.BACKSLASH_ESCAPE,l]},o={className:"string",begin:/\$@"/,end:'"',contains:[{
begin:/\{\{/},{begin:/\}\}/},{begin:'""'},r]},d=e.inherit(o,{illegal:/\n/,
contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]})
;r.contains=[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE],
l.contains=[d,c,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.inherit(e.C_BLOCK_COMMENT_MODE,{
illegal:/\n/})];const g={variants:[{className:"string",
begin:/"""("*)(?!")(.|\n)*?"""\1/,relevance:1
},o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},E={begin:"<",end:">",
contains:[{beginKeywords:"in out"},a]
},_=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",b={
begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
end:"$",keywords:{
keyword:"if else elif endif define undef warning error line region endregion pragma checksum"
}},g,i,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,
illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"
},a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
contains:[a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
contains:[a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
className:"string",begin:/"/,end:/"/}]},{
beginKeywords:"new return throw await else",relevance:0},{className:"function",
begin:"("+_+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
contains:[e.TITLE_MODE,E],relevance:0},{match:/\(\)/},{className:"params",
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
contains:[g,i,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},b]}}})()
;hljs.registerLanguage("csharp",e)})();/*! `css` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),t=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),o=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse()
;return n=>{const a=n.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
}))(n),s=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",
case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{
begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{
className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{
className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
begin:":("+t.join("|")+")"},{begin:":(:)?("+i.join("|")+")"}]},l.CSS_VARIABLE,{
className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,
contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{
begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
},contains:[...s,{className:"string",begin:/[^)]/,endsWithParent:!0,
excludeEnd:!0}]},l.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",
relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/
},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
$pattern:/[a-z-]+/,keyword:"and or not only",attribute:r.join(" ")},contains:[{
begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{
className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})()
;hljs.registerLanguage("css",e)})();/*! `dart` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"subst",variants:[{
begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,
end:/\}/}],keywords:"true false null this is new super"},t={className:"string",
variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",
illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"""',end:'"""',
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,a]}]};a.contains=[e.C_NUMBER_MODE,t]
;const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],r=i.map((e=>e+"?"))
;return{name:"Dart",keywords:{
keyword:["abstract","as","assert","async","await","base","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","interface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","sealed","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","when","while","with","yield"],
built_in:i.concat(r).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),
$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},
contains:[t,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0
}),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",
end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]
},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}})()
;hljs.registerLanguage("dart",e)})();/*! `diff` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"Diff",
aliases:["patch"],contains:[{className:"meta",relevance:10,
match:a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)
},{className:"comment",variants:[{
begin:a.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),
end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{
className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,
end:/$/}]}}})();hljs.registerLanguage("diff",e)})();/*! `django` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t={begin:/\|[A-Za-z]+:?/,
keywords:{
name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
},contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE]};return{name:"Django",
aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",
contains:[e.COMMENT(/\{%\s*comment\s*%\}/,/\{%\s*endcomment\s*%\}/),e.COMMENT(/\{#/,/#\}/),{
className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",
begin:/\w+/,keywords:{
name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
},starts:{endsWithParent:!0,keywords:"in by as",contains:[t],relevance:0}}]},{
className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}})()
;hljs.registerLanguage("django",e)})();/*! `dns` grammar compiled for Highlight.js 11.10.0 */
(()=>{var d=(()=>{"use strict";return d=>({name:"DNS Zone",
aliases:["bind","zone"],
keywords:["IN","A","AAAA","AFSDB","APL","CAA","CDNSKEY","CDS","CERT","CNAME","DHCID","DLV","DNAME","DNSKEY","DS","HIP","IPSECKEY","KEY","KX","LOC","MX","NAPTR","NS","NSEC","NSEC3","NSEC3PARAM","PTR","RRSIG","RP","SIG","SOA","SRV","SSHFP","TA","TKEY","TLSA","TSIG","TXT"],
contains:[d.COMMENT(";","$",{relevance:0}),{className:"meta",
begin:/^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/},{className:"number",
begin:"((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
},{className:"number",
begin:"((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
},d.inherit(d.NUMBER_MODE,{begin:/\b\d+[dhwm]?/})]})})()
;hljs.registerLanguage("dns",d)})();/*! `dockerfile` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Dockerfile",aliases:["docker"],
case_insensitive:!0,
keywords:["from","maintainer","expose","env","arg","user","onbuild","stopsignal"],
contains:[e.HASH_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{
beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",
starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"})})()
;hljs.registerLanguage("dockerfile",e)})();/*! `dsconfig` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({keywords:"dsconfig",contains:[{
className:"keyword",begin:"^dsconfig",end:/\s/,excludeEnd:!0,relevance:10},{
className:"built_in",begin:/(list|create|get|set|delete)-(\w+)/,end:/\s/,
excludeEnd:!0,illegal:"!@#$%^&*()",relevance:10},{className:"built_in",
begin:/--(\w+)/,end:/\s/,excludeEnd:!0},{className:"string",begin:/"/,end:/"/},{
className:"string",begin:/'/,end:/'/},{className:"string",begin:/[\w\-?]+:\w+/,
end:/\W/,relevance:0},{className:"string",begin:/\w+(\-\w+)*/,end:/(?=\W)/,
relevance:0},e.HASH_COMMENT_MODE]})})();hljs.registerLanguage("dsconfig",e)})();/*! `dts` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a={className:"string",
variants:[e.inherit(e.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{
begin:'(u8?|U)?R"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",
end:"'",illegal:"."}]},n={className:"number",variants:[{
begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:e.C_NUMBER_RE}],
relevance:0},s={className:"meta",begin:"#",end:"$",keywords:{
keyword:"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,
relevance:0},{beginKeywords:"include",end:"$",keywords:{keyword:"include"},
contains:[e.inherit(a,{className:"string"}),{className:"string",begin:"<",
end:">",illegal:"\\n"}]},a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},i={
className:"variable",begin:/&[a-z\d_]*\b/};return{name:"Device Tree",contains:[{
className:"title.class",begin:/^\/(?=\s*\{)/,relevance:10},i,{
className:"keyword",begin:"/[a-z][a-z\\d-]*/"},{className:"symbol",
begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},{className:"title.class",
begin:/[a-zA-Z_][a-zA-Z\d_@-]*(?=\s\{)/,relevance:.2},{relevance:0,
match:[/[a-z][a-z-,]+/,/\s*/,/=/],scope:{1:"attr",3:"operator"}},{
match:/[a-z][a-z-,]+(?=;)/,relevance:0,scope:"attr"},{className:"params",
relevance:0,begin:"<",end:">",contains:[n,i]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,a,s,{scope:"punctuation",
relevance:0,match:/\};|[;{}]/},{begin:e.IDENT_RE+"::",keywords:""}]}}})()
;hljs.registerLanguage("dts",e)})();/*! `dust` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Dust",aliases:["dst"],
case_insensitive:!0,subLanguage:"xml",contains:[{className:"template-tag",
begin:/\{[#\/]/,end:/\}/,illegal:/;/,contains:[{className:"name",
begin:/[a-zA-Z\.-]+/,starts:{endsWithParent:!0,relevance:0,
contains:[e.QUOTE_STRING_MODE]}}]},{className:"template-variable",begin:/\{/,
end:/\}/,illegal:/;/,keywords:"if eq ne lt lte gt gte select default math sep"}]
})})();hljs.registerLanguage("dust",e)})();/*! `erlang` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="[a-z'][a-zA-Z0-9_']*",r="("+n+":"+n+"|"+n+")",a={
keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
literal:"false true"},i=e.COMMENT("%","$"),s={className:"number",
begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
relevance:0},c={begin:"fun\\s+"+n+"/\\d+"},t={begin:r+"\\(",end:"\\)",
returnBegin:!0,relevance:0,contains:[{begin:r,relevance:0},{begin:"\\(",
end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},d={begin:/\{/,end:/\}/,
relevance:0},o={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},l={
begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},g={begin:"#"+e.UNDERSCORE_IDENT_RE,
relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,
relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},b={scope:"string",
match:/\$(\\([^0-9]|[0-9]{1,3}|)|.)/},E={
beginKeywords:"fun receive if try case",end:"end",keywords:a}
;E.contains=[i,c,e.inherit(e.APOS_STRING_MODE,{className:""
}),E,t,e.QUOTE_STRING_MODE,s,d,o,l,g,b]
;const u=[i,c,E,t,e.QUOTE_STRING_MODE,s,d,o,l,g,b]
;t.contains[1].contains=u,d.contains=u,g.contains[1].contains=u;const _={
className:"params",begin:"\\(",end:"\\)",contains:u};return{name:"Erlang",
aliases:["erl"],keywords:a,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,
illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[_,e.inherit(e.TITLE_MODE,{begin:n})],
starts:{end:";|\\.",keywords:a,contains:u}},i,{begin:"^-",end:"\\.",relevance:0,
excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,
keyword:["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"].map((e=>e+"|1.5")).join(" ")
},contains:[_]},s,e.QUOTE_STRING_MODE,g,o,l,d,b,{begin:/\.$/}]}}})()
;hljs.registerLanguage("erlang",e)})();/*! `erlang-repl` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex;return{
name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",
keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
},contains:[{className:"meta.prompt",begin:"^[0-9]+> ",relevance:10
},e.COMMENT("%","$"),{className:"number",
begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
begin:n.concat(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{
begin:"ok"},{begin:"!"},{
begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}})()
;hljs.registerLanguage("erlang-repl",e)})();/*! `excel` grammar compiled for Highlight.js 11.10.0 */
(()=>{var E=(()=>{"use strict";return E=>({name:"Excel formulae",
aliases:["xlsx","xls"],case_insensitive:!0,keywords:{$pattern:/[a-zA-Z][\w\.]*/,
built_in:["ABS","ACCRINT","ACCRINTM","ACOS","ACOSH","ACOT","ACOTH","AGGREGATE","ADDRESS","AMORDEGRC","AMORLINC","AND","ARABIC","AREAS","ASC","ASIN","ASINH","ATAN","ATAN2","ATANH","AVEDEV","AVERAGE","AVERAGEA","AVERAGEIF","AVERAGEIFS","BAHTTEXT","BASE","BESSELI","BESSELJ","BESSELK","BESSELY","BETADIST","BETA.DIST","BETAINV","BETA.INV","BIN2DEC","BIN2HEX","BIN2OCT","BINOMDIST","BINOM.DIST","BINOM.DIST.RANGE","BINOM.INV","BITAND","BITLSHIFT","BITOR","BITRSHIFT","BITXOR","CALL","CEILING","CEILING.MATH","CEILING.PRECISE","CELL","CHAR","CHIDIST","CHIINV","CHITEST","CHISQ.DIST","CHISQ.DIST.RT","CHISQ.INV","CHISQ.INV.RT","CHISQ.TEST","CHOOSE","CLEAN","CODE","COLUMN","COLUMNS","COMBIN","COMBINA","COMPLEX","CONCAT","CONCATENATE","CONFIDENCE","CONFIDENCE.NORM","CONFIDENCE.T","CONVERT","CORREL","COS","COSH","COT","COTH","COUNT","COUNTA","COUNTBLANK","COUNTIF","COUNTIFS","COUPDAYBS","COUPDAYS","COUPDAYSNC","COUPNCD","COUPNUM","COUPPCD","COVAR","COVARIANCE.P","COVARIANCE.S","CRITBINOM","CSC","CSCH","CUBEKPIMEMBER","CUBEMEMBER","CUBEMEMBERPROPERTY","CUBERANKEDMEMBER","CUBESET","CUBESETCOUNT","CUBEVALUE","CUMIPMT","CUMPRINC","DATE","DATEDIF","DATEVALUE","DAVERAGE","DAY","DAYS","DAYS360","DB","DBCS","DCOUNT","DCOUNTA","DDB","DEC2BIN","DEC2HEX","DEC2OCT","DECIMAL","DEGREES","DELTA","DEVSQ","DGET","DISC","DMAX","DMIN","DOLLAR","DOLLARDE","DOLLARFR","DPRODUCT","DSTDEV","DSTDEVP","DSUM","DURATION","DVAR","DVARP","EDATE","EFFECT","ENCODEURL","EOMONTH","ERF","ERF.PRECISE","ERFC","ERFC.PRECISE","ERROR.TYPE","EUROCONVERT","EVEN","EXACT","EXP","EXPON.DIST","EXPONDIST","FACT","FACTDOUBLE","FALSE|0","F.DIST","FDIST","F.DIST.RT","FILTERXML","FIND","FINDB","F.INV","F.INV.RT","FINV","FISHER","FISHERINV","FIXED","FLOOR","FLOOR.MATH","FLOOR.PRECISE","FORECAST","FORECAST.ETS","FORECAST.ETS.CONFINT","FORECAST.ETS.SEASONALITY","FORECAST.ETS.STAT","FORECAST.LINEAR","FORMULATEXT","FREQUENCY","F.TEST","FTEST","FV","FVSCHEDULE","GAMMA","GAMMA.DIST","GAMMADIST","GAMMA.INV","GAMMAINV","GAMMALN","GAMMALN.PRECISE","GAUSS","GCD","GEOMEAN","GESTEP","GETPIVOTDATA","GROWTH","HARMEAN","HEX2BIN","HEX2DEC","HEX2OCT","HLOOKUP","HOUR","HYPERLINK","HYPGEOM.DIST","HYPGEOMDIST","IF","IFERROR","IFNA","IFS","IMABS","IMAGINARY","IMARGUMENT","IMCONJUGATE","IMCOS","IMCOSH","IMCOT","IMCSC","IMCSCH","IMDIV","IMEXP","IMLN","IMLOG10","IMLOG2","IMPOWER","IMPRODUCT","IMREAL","IMSEC","IMSECH","IMSIN","IMSINH","IMSQRT","IMSUB","IMSUM","IMTAN","INDEX","INDIRECT","INFO","INT","INTERCEPT","INTRATE","IPMT","IRR","ISBLANK","ISERR","ISERROR","ISEVEN","ISFORMULA","ISLOGICAL","ISNA","ISNONTEXT","ISNUMBER","ISODD","ISREF","ISTEXT","ISO.CEILING","ISOWEEKNUM","ISPMT","JIS","KURT","LARGE","LCM","LEFT","LEFTB","LEN","LENB","LINEST","LN","LOG","LOG10","LOGEST","LOGINV","LOGNORM.DIST","LOGNORMDIST","LOGNORM.INV","LOOKUP","LOWER","MATCH","MAX","MAXA","MAXIFS","MDETERM","MDURATION","MEDIAN","MID","MIDBs","MIN","MINIFS","MINA","MINUTE","MINVERSE","MIRR","MMULT","MOD","MODE","MODE.MULT","MODE.SNGL","MONTH","MROUND","MULTINOMIAL","MUNIT","N","NA","NEGBINOM.DIST","NEGBINOMDIST","NETWORKDAYS","NETWORKDAYS.INTL","NOMINAL","NORM.DIST","NORMDIST","NORMINV","NORM.INV","NORM.S.DIST","NORMSDIST","NORM.S.INV","NORMSINV","NOT","NOW","NPER","NPV","NUMBERVALUE","OCT2BIN","OCT2DEC","OCT2HEX","ODD","ODDFPRICE","ODDFYIELD","ODDLPRICE","ODDLYIELD","OFFSET","OR","PDURATION","PEARSON","PERCENTILE.EXC","PERCENTILE.INC","PERCENTILE","PERCENTRANK.EXC","PERCENTRANK.INC","PERCENTRANK","PERMUT","PERMUTATIONA","PHI","PHONETIC","PI","PMT","POISSON.DIST","POISSON","POWER","PPMT","PRICE","PRICEDISC","PRICEMAT","PROB","PRODUCT","PROPER","PV","QUARTILE","QUARTILE.EXC","QUARTILE.INC","QUOTIENT","RADIANS","RAND","RANDBETWEEN","RANK.AVG","RANK.EQ","RANK","RATE","RECEIVED","REGISTER.ID","REPLACE","REPLACEB","REPT","RIGHT","RIGHTB","ROMAN","ROUND","ROUNDDOWN","ROUNDUP","ROW","ROWS","RRI","RSQ","RTD","SEARCH","SEARCHB","SEC","SECH","SECOND","SERIESSUM","SHEET","SHEETS","SIGN","SIN","SINH","SKEW","SKEW.P","SLN","SLOPE","SMALL","SQL.REQUEST","SQRT","SQRTPI","STANDARDIZE","STDEV","STDEV.P","STDEV.S","STDEVA","STDEVP","STDEVPA","STEYX","SUBSTITUTE","SUBTOTAL","SUM","SUMIF","SUMIFS","SUMPRODUCT","SUMSQ","SUMX2MY2","SUMX2PY2","SUMXMY2","SWITCH","SYD","T","TAN","TANH","TBILLEQ","TBILLPRICE","TBILLYIELD","T.DIST","T.DIST.2T","T.DIST.RT","TDIST","TEXT","TEXTJOIN","TIME","TIMEVALUE","T.INV","T.INV.2T","TINV","TODAY","TRANSPOSE","TREND","TRIM","TRIMMEAN","TRUE|0","TRUNC","T.TEST","TTEST","TYPE","UNICHAR","UNICODE","UPPER","VALUE","VAR","VAR.P","VAR.S","VARA","VARP","VARPA","VDB","VLOOKUP","WEBSERVICE","WEEKDAY","WEEKNUM","WEIBULL","WEIBULL.DIST","WORKDAY","WORKDAY.INTL","XIRR","XNPV","XOR","YEAR","YEARFRAC","YIELD","YIELDDISC","YIELDMAT","Z.TEST","ZTEST"]
},contains:[{begin:/^=/,end:/[^=]/,returnEnd:!0,illegal:/=/,relevance:10},{
className:"symbol",begin:/\b[A-Z]{1,2}\d+\b/,end:/[^\d]/,excludeEnd:!0,
relevance:0},{className:"symbol",begin:/[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,relevance:0
},E.BACKSLASH_ESCAPE,E.QUOTE_STRING_MODE,{className:"number",
begin:E.NUMBER_RE+"(%)?",relevance:0},E.COMMENT(/\bN\(/,/\)/,{excludeBegin:!0,
excludeEnd:!0,illegal:/\n/})]})})();hljs.registerLanguage("excel",E)})();/*! `fortran` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={
variants:[e.COMMENT("!","$",{relevance:0}),e.COMMENT("^C[ ]","$",{relevance:0
}),e.COMMENT("^C$","$",{relevance:0})]
},t=/(_[a-z_\d]+)?/,i=/([de][+-]?\d+)?/,c={className:"number",variants:[{
begin:n.concat(/\b\d+/,/\.(\d*)/,i,t)},{begin:n.concat(/\b\d+/,i,t)},{
begin:n.concat(/\.\d+/,i,t)}],relevance:0},o={className:"function",
beginKeywords:"subroutine function program",illegal:"[${=\\n]",
contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)"}]}
;return{name:"Fortran",case_insensitive:!0,aliases:["f90","f95"],keywords:{
$pattern:/\b[a-z][a-z0-9_]+\b|\.[a-z][a-z0-9_]+\./,
keyword:["kind","do","concurrent","local","shared","while","private","call","intrinsic","where","elsewhere","type","endtype","endmodule","endselect","endinterface","end","enddo","endif","if","forall","endforall","only","contains","default","return","stop","then","block","endblock","endassociate","public","subroutine|10","function","program",".and.",".or.",".not.",".le.",".eq.",".ge.",".gt.",".lt.","goto","save","else","use","module","select","case","access","blank","direct","exist","file","fmt","form","formatted","iostat","name","named","nextrec","number","opened","rec","recl","sequential","status","unformatted","unit","continue","format","pause","cycle","exit","c_null_char","c_alert","c_backspace","c_form_feed","flush","wait","decimal","round","iomsg","synchronous","nopass","non_overridable","pass","protected","volatile","abstract","extends","import","non_intrinsic","value","deferred","generic","final","enumerator","class","associate","bind","enum","c_int","c_short","c_long","c_long_long","c_signed_char","c_size_t","c_int8_t","c_int16_t","c_int32_t","c_int64_t","c_int_least8_t","c_int_least16_t","c_int_least32_t","c_int_least64_t","c_int_fast8_t","c_int_fast16_t","c_int_fast32_t","c_int_fast64_t","c_intmax_t","C_intptr_t","c_float","c_double","c_long_double","c_float_complex","c_double_complex","c_long_double_complex","c_bool","c_char","c_null_ptr","c_null_funptr","c_new_line","c_carriage_return","c_horizontal_tab","c_vertical_tab","iso_c_binding","c_loc","c_funloc","c_associated","c_f_pointer","c_ptr","c_funptr","iso_fortran_env","character_storage_size","error_unit","file_storage_size","input_unit","iostat_end","iostat_eor","numeric_storage_size","output_unit","c_f_procpointer","ieee_arithmetic","ieee_support_underflow_control","ieee_get_underflow_mode","ieee_set_underflow_mode","newunit","contiguous","recursive","pad","position","action","delim","readwrite","eor","advance","nml","interface","procedure","namelist","include","sequence","elemental","pure","impure","integer","real","character","complex","logical","codimension","dimension","allocatable|10","parameter","external","implicit|10","none","double","precision","assign","intent","optional","pointer","target","in","out","common","equivalence","data"],
literal:[".False.",".True."],
built_in:["alog","alog10","amax0","amax1","amin0","amin1","amod","cabs","ccos","cexp","clog","csin","csqrt","dabs","dacos","dasin","datan","datan2","dcos","dcosh","ddim","dexp","dint","dlog","dlog10","dmax1","dmin1","dmod","dnint","dsign","dsin","dsinh","dsqrt","dtan","dtanh","float","iabs","idim","idint","idnint","ifix","isign","max0","max1","min0","min1","sngl","algama","cdabs","cdcos","cdexp","cdlog","cdsin","cdsqrt","cqabs","cqcos","cqexp","cqlog","cqsin","cqsqrt","dcmplx","dconjg","derf","derfc","dfloat","dgamma","dimag","dlgama","iqint","qabs","qacos","qasin","qatan","qatan2","qcmplx","qconjg","qcos","qcosh","qdim","qerf","qerfc","qexp","qgamma","qimag","qlgama","qlog","qlog10","qmax1","qmin1","qmod","qnint","qsign","qsin","qsinh","qsqrt","qtan","qtanh","abs","acos","aimag","aint","anint","asin","atan","atan2","char","cmplx","conjg","cos","cosh","exp","ichar","index","int","log","log10","max","min","nint","sign","sin","sinh","sqrt","tan","tanh","print","write","dim","lge","lgt","lle","llt","mod","nullify","allocate","deallocate","adjustl","adjustr","all","allocated","any","associated","bit_size","btest","ceiling","count","cshift","date_and_time","digits","dot_product","eoshift","epsilon","exponent","floor","fraction","huge","iand","ibclr","ibits","ibset","ieor","ior","ishft","ishftc","lbound","len_trim","matmul","maxexponent","maxloc","maxval","merge","minexponent","minloc","minval","modulo","mvbits","nearest","pack","present","product","radix","random_number","random_seed","range","repeat","reshape","rrspacing","scale","scan","selected_int_kind","selected_real_kind","set_exponent","shape","size","spacing","spread","sum","system_clock","tiny","transpose","trim","ubound","unpack","verify","achar","iachar","transfer","dble","entry","dprod","cpu_time","command_argument_count","get_command","get_command_argument","get_environment_variable","is_iostat_end","ieee_arithmetic","ieee_support_underflow_control","ieee_get_underflow_mode","ieee_set_underflow_mode","is_iostat_eor","move_alloc","new_line","selected_char_kind","same_type_as","extends_type_of","acosh","asinh","atanh","bessel_j0","bessel_j1","bessel_jn","bessel_y0","bessel_y1","bessel_yn","erf","erfc","erfc_scaled","gamma","log_gamma","hypot","norm2","atomic_define","atomic_ref","execute_command_line","leadz","trailz","storage_size","merge_bits","bge","bgt","ble","blt","dshiftl","dshiftr","findloc","iall","iany","iparity","image_index","lcobound","ucobound","maskl","maskr","num_images","parity","popcnt","poppar","shifta","shiftl","shiftr","this_image","sync","change","team","co_broadcast","co_max","co_min","co_sum","co_reduce"]
},illegal:/\/\*/,contains:[{className:"string",relevance:0,
variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},o,{begin:/^C\s*=(?!=)/,
relevance:0},a,c]}}})();hljs.registerLanguage("fortran",e)})();/*! `gauss` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t={
keyword:"bool break call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary dllcall do dos ed edit else elseif enable end endfor endif endp endo errorlog errorlogat expr external fn for format goto gosub graph if keyword let lib library line load loadarray loadexe loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new open output outwidth plot plotsym pop prcsn print printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap threadfor threadendfor threadbegin threadjoin threadstat threadend until use while winprint ne ge le gt lt and xor or not eq eqv",
built_in:"abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin sylvester strtrim",
literal:"DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS __STDIN __STDOUT __STDERR __FILE_DIR"
},a=e.COMMENT("@","@"),r={className:"meta",begin:"#",end:"$",keywords:{
keyword:"define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline"
},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",end:"$",
keywords:{keyword:"include"},contains:[{className:"string",begin:'"',end:'"',
illegal:"\\n"}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a]},n={
begin:/\bstruct\s+/,end:/\s/,keywords:"struct",contains:[{className:"type",
begin:e.UNDERSCORE_IDENT_RE,relevance:0}]},s=[{className:"params",begin:/\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,endsWithParent:!0,relevance:0,contains:[{
className:"literal",begin:/\.\.\./},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,a,n]
}],o={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},d=(t,r,n)=>{
const d=e.inherit({className:"function",beginKeywords:t,end:r,excludeEnd:!0,
contains:[].concat(s)},{})
;return d.contains.push(o),d.contains.push(e.C_NUMBER_MODE),
d.contains.push(e.C_BLOCK_COMMENT_MODE),d.contains.push(a),d},l={
className:"built_in",begin:"\\b("+t.built_in.split(" ").join("|")+")\\b"},i={
className:"string",begin:'"',end:'"',contains:[e.BACKSLASH_ESCAPE],relevance:0
},c={begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,keywords:t,
relevance:0,contains:[{beginKeywords:t.keyword},l,{className:"built_in",
begin:e.UNDERSCORE_IDENT_RE,relevance:0}]},p={begin:/\(/,end:/\)/,relevance:0,
keywords:{built_in:t.built_in,literal:t.literal},
contains:[e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,a,l,c,i,"self"]}
;return c.contains.push(p),{name:"GAUSS",aliases:["gss"],case_insensitive:!0,
keywords:t,illegal:/(\{[%#]|[%#]\}| <- )/,
contains:[e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,i,r,{
className:"keyword",
begin:/\bexternal (matrix|string|array|sparse matrix|struct|proc|keyword|fn)/
},d("proc keyword",";"),d("fn","="),{beginKeywords:"for threadfor",end:/;/,
relevance:0,contains:[e.C_BLOCK_COMMENT_MODE,a,p]},{variants:[{
begin:e.UNDERSCORE_IDENT_RE+"\\."+e.UNDERSCORE_IDENT_RE},{
begin:e.UNDERSCORE_IDENT_RE+"\\s*="}],relevance:0},c,n]}}})()
;hljs.registerLanguage("gauss",e)})();/*! `go` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a={
keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],
type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
literal:["true","false","iota","nil"],
built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
};return{name:"Go",aliases:["golang"],keywords:a,illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
className:"number",variants:[{
match:/-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,relevance:0
},{
match:/-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
relevance:0},{match:/-?\b0[oO](_?[0-7])*i?/,relevance:0},{
match:/-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,relevance:0},{
match:/-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,relevance:0}]},{
begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",
excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,
endsParent:!0,keywords:a,illegal:/["']/}]}]}}})();hljs.registerLanguage("go",e)
})();/*! `gradle` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Gradle",case_insensitive:!0,
keywords:["task","project","allprojects","subprojects","artifacts","buildscript","configurations","dependencies","repositories","sourceSets","description","delete","from","into","include","exclude","source","classpath","destinationDir","includes","options","sourceCompatibility","targetCompatibility","group","flatDir","doLast","doFirst","flatten","todir","fromdir","ant","def","abstract","break","case","catch","continue","default","do","else","extends","final","finally","for","if","implements","instanceof","native","new","private","protected","public","return","static","switch","synchronized","throw","throws","transient","try","volatile","while","strictfp","package","import","false","null","super","this","true","antlrtask","checkstyle","codenarc","copy","boolean","byte","char","class","double","float","int","interface","long","short","void","compile","runTime","file","fileTree","abs","any","append","asList","asWritable","call","collect","compareTo","count","div","dump","each","eachByte","eachFile","eachLine","every","find","findAll","flatten","getAt","getErr","getIn","getOut","getText","grep","immutable","inject","inspect","intersect","invokeMethods","isCase","join","leftShift","minus","multiply","newInputStream","newOutputStream","newPrintWriter","newReader","newWriter","next","plus","pop","power","previous","print","println","push","putAt","read","readBytes","readLines","reverse","reverseEach","round","size","sort","splitEachLine","step","subMap","times","toInteger","toList","tokenize","upto","waitForOrKill","withPrintWriter","withReader","withStream","withWriter","withWriterAppend","write","writeLine"],
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.REGEXP_MODE]
})})();hljs.registerLanguage("gradle",e)})();/*! `graphql` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"GraphQL",
aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{
keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],
literal:["true","false","null"]},
contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{
scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",
begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,
end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{
scope:"symbol",begin:a.concat(/[_A-Za-z][_0-9A-Za-z]*/,a.lookahead(/\s*:/)),
relevance:0}],illegal:[/[;<']/,/BEGIN/]}}})();hljs.registerLanguage("graphql",e)
})();/*! `haskell` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="([0-9]_*)+",a="([0-9a-fA-F]_*)+",i="([!#$%&*+.\\/<=>?@\\\\^~-]|(?!([(),;\\[\\]`|{}]|[_:\"']))(\\p{S}|\\p{P}))",s={
variants:[e.COMMENT("--+","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},l={
className:"meta",begin:/\{-#/,end:/#-\}/},t={className:"meta",begin:"^#",end:"$"
},c={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},r={begin:"\\(",
end:"\\)",illegal:'"',contains:[l,t,{className:"type",
begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TITLE_MODE,{
begin:"[_a-z][\\w']*"}),s]},o={className:"number",relevance:0,variants:[{
match:`\\b(${n})(\\.(${n}))?([eE][+-]?(${n}))?\\b`},{
match:`\\b0[xX]_*(${a})(\\.(${a}))?([pP][+-]?(${n}))?\\b`},{
match:"\\b0[oO](([0-7]_*)+)\\b"},{match:"\\b0[bB](([01]_*)+)\\b"}]};return{
name:"Haskell",aliases:["hs"],
keywords:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
unicodeRegex:!0,contains:[{beginKeywords:"module",end:"where",
keywords:"module where",contains:[r,s],illegal:"\\W\\.|;"},{
begin:"\\bimport\\b",end:"$",keywords:"import qualified as hiding",
contains:[r,s],illegal:"\\W\\.|;"},{className:"class",
begin:"^(\\s*)?(class|instance)\\b",end:"where",
keywords:"class family instance where",contains:[c,r,s]},{className:"class",
begin:"\\b(data|(new)?type)\\b",end:"$",
keywords:"data family type newtype deriving",contains:[l,c,r,{begin:/\{/,
end:/\}/,contains:r.contains},s]},{beginKeywords:"default",end:"$",
contains:[c,r,s]},{beginKeywords:"infix infixl infixr",end:"$",
contains:[e.C_NUMBER_MODE,s]},{begin:"\\bforeign\\b",end:"$",
keywords:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
contains:[c,e.QUOTE_STRING_MODE,s]},{className:"meta",
begin:"#!\\/usr\\/bin\\/env runhaskell",end:"$"},l,t,{scope:"string",
begin:/'(?=\\?.')/,end:/'/,contains:[{scope:"char.escape",match:/\\./}]
},e.QUOTE_STRING_MODE,o,c,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),{
begin:`(?!-)${i}--+|--+(?!-)${i}`},s,{begin:"->|<-"}]}}})()
;hljs.registerLanguage("haskell",e)})();/*! `http` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n="HTTP/([32]|1\\.[01])",a={
className:"attribute",
begin:e.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{
contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",
relevance:0}}]}},s=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}
}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{
begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{
className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,
contains:s}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{
className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{
className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{
end:/\b\B/,illegal:/\S/,contains:s}},e.inherit(a,{relevance:0})]}}})()
;hljs.registerLanguage("http",e)})();/*! `ini` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"number",
relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]
},s=e.COMMENT();s.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={
className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/
}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},r={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",
end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[s,t,i,r,a,"self"],
relevance:0},c=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{
name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
contains:[s,{className:"section",begin:/\[+/,end:/\]+/},{
begin:n.concat(c,"(\\s*\\.\\s*",c,")*",n.lookahead(/\s*=\s*[^#\s]/)),
className:"attr",starts:{end:/$/,contains:[s,l,t,i,r,a]}}]}}})()
;hljs.registerLanguage("ini",e)})();/*! `java` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;var e="[0-9](_*[0-9])*",a=`\\.(${e})`,n="[0-9a-fA-F](_*[0-9a-fA-F])*",s={
className:"number",variants:[{
begin:`(\\b(${e})((${a})|\\.)?|(${a}))[eE][+-]?(${e})[fFdD]?\\b`},{
begin:`\\b(${e})((${a})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${a})[fFdD]?\\b`
},{begin:`\\b(${e})[fFdD]\\b`},{
begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?(${e})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};function t(e,a,n){return-1===n?"":e.replace(a,(s=>t(e,a,n-1)))}
return e=>{
const a=e.regex,n="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",i=n+t("(?:<"+n+"~~~(?:\\s*,\\s*"+n+"~~~)*>)?",/~~~/g,2),r={
keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto"],
literal:["false","true","null"],
type:["char","boolean","long","float","int","byte","short","double"],
built_in:["super","this"]},l={className:"meta",begin:"@"+n,contains:[{
begin:/\(/,end:/\)/,contains:["self"]}]},c={className:"params",begin:/\(/,
end:/\)/,keywords:r,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
;return{name:"Java",aliases:["jsp"],keywords:r,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
className:"string",contains:[e.BACKSLASH_ESCAPE]
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,n],className:{
1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
begin:[a.concat(/(?!else)/,n),/\s+/,n,/\s+/,/=(?!=)/],className:{1:"type",
3:"variable",5:"operator"}},{begin:[/record/,/\s+/,n],className:{1:"keyword",
3:"title.class"},contains:[c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"new throw return else",relevance:0},{
begin:["(?:"+i+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:r,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:r,relevance:0,
contains:[l,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},s,l]}}})()
;hljs.registerLanguage("java",e)})();/*! `javascript` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s)
;return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch())
;const r=e.input.substring(a)
;((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={
className:"number",variants:[{
begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{
begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},h={begin:".?html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},N={
begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:".?gql`",end:"",
starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],
subLanguage:"graphql"}},f={className:"string",begin:"`",end:"`",
contains:[o.BACKSLASH_ESCAPE,y]},p={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},v=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,{match:/\$\d+/},A]
;y.contains=v.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(v)
});const S=[].concat(p,y.contains),w=S.concat([{begin:/(\s*)\(/,end:/\)/,
keywords:g,contains:["self"].concat(S)}]),R={className:"params",begin:/(\s*)\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},O={variants:[{
match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},I={variants:[{
match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],
illegal:/%/},x={
match:l.concat(/\b/,(T=[...r,"super","import"].map((e=>e+"\\s*\\(")),
l.concat("(?!",T.join("|"),")")),b,l.lookahead(/\s*\(/)),
className:"title.function",relevance:0};var T;const C={
begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={
match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},R]
},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={
match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]}
;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:w,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,p,{match:/\$\d+/},A,k,{
className:"attr",begin:b+l.lookahead(":"),relevance:0},$,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[p,o.REGEXP_MODE,{
className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0
},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,
"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},I,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:b,
className:"title.function"})]},{match:/\.\.\./,relevance:0},C,{match:"\\$"+b,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[R]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},O,M,{match:/\$[(.]/}]}}})()
;hljs.registerLanguage("javascript",e)})();/*! `jboss-cli` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"JBoss CLI",
aliases:["wildfly-cli"],keywords:{$pattern:"[a-z-]+",
keyword:"alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
literal:"true false"},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,{
className:"params",begin:/--[\w\-=\/]+/},{className:"function",
begin:/:[\w\-.]+/,relevance:0},{className:"string",begin:/\B([\/.])[\w\-.\/=]+/
},{className:"params",begin:/\(/,end:/\)/,contains:[{begin:/[\w-]+ *=/,
returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/[\w-]+/}]}],
relevance:0}]})})();hljs.registerLanguage("jboss-cli",e)})();/*! `json` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=["true","false","null"],s={
scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],
keywords:{literal:a},contains:[{className:"attr",
begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,
className:"punctuation",relevance:0
},e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],
illegal:"\\S"}}})();hljs.registerLanguage("json",e)})();/*! `julia` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const r="[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*",t={$pattern:r,
keyword:["baremodule","begin","break","catch","ccall","const","continue","do","else","elseif","end","export","false","finally","for","function","global","if","import","in","isa","let","local","macro","module","quote","return","true","try","using","where","while"],
literal:["ARGS","C_NULL","DEPOT_PATH","ENDIAN_BOM","ENV","Inf","Inf16","Inf32","Inf64","InsertionSort","LOAD_PATH","MergeSort","NaN","NaN16","NaN32","NaN64","PROGRAM_FILE","QuickSort","RoundDown","RoundFromZero","RoundNearest","RoundNearestTiesAway","RoundNearestTiesUp","RoundToZero","RoundUp","VERSION|0","devnull","false","im","missing","nothing","pi","stderr","stdin","stdout","true","undef","\u03c0","\u212f"],
built_in:["AbstractArray","AbstractChannel","AbstractChar","AbstractDict","AbstractDisplay","AbstractFloat","AbstractIrrational","AbstractMatrix","AbstractRange","AbstractSet","AbstractString","AbstractUnitRange","AbstractVecOrMat","AbstractVector","Any","ArgumentError","Array","AssertionError","BigFloat","BigInt","BitArray","BitMatrix","BitSet","BitVector","Bool","BoundsError","CapturedException","CartesianIndex","CartesianIndices","Cchar","Cdouble","Cfloat","Channel","Char","Cint","Cintmax_t","Clong","Clonglong","Cmd","Colon","Complex","ComplexF16","ComplexF32","ComplexF64","CompositeException","Condition","Cptrdiff_t","Cshort","Csize_t","Cssize_t","Cstring","Cuchar","Cuint","Cuintmax_t","Culong","Culonglong","Cushort","Cvoid","Cwchar_t","Cwstring","DataType","DenseArray","DenseMatrix","DenseVecOrMat","DenseVector","Dict","DimensionMismatch","Dims","DivideError","DomainError","EOFError","Enum","ErrorException","Exception","ExponentialBackOff","Expr","Float16","Float32","Float64","Function","GlobalRef","HTML","IO","IOBuffer","IOContext","IOStream","IdDict","IndexCartesian","IndexLinear","IndexStyle","InexactError","InitError","Int","Int128","Int16","Int32","Int64","Int8","Integer","InterruptException","InvalidStateException","Irrational","KeyError","LinRange","LineNumberNode","LinearIndices","LoadError","MIME","Matrix","Method","MethodError","Missing","MissingException","Module","NTuple","NamedTuple","Nothing","Number","OrdinalRange","OutOfMemoryError","OverflowError","Pair","PartialQuickSort","PermutedDimsArray","Pipe","ProcessFailedException","Ptr","QuoteNode","Rational","RawFD","ReadOnlyMemoryError","Real","ReentrantLock","Ref","Regex","RegexMatch","RoundingMode","SegmentationFault","Set","Signed","Some","StackOverflowError","StepRange","StepRangeLen","StridedArray","StridedMatrix","StridedVecOrMat","StridedVector","String","StringIndexError","SubArray","SubString","SubstitutionString","Symbol","SystemError","Task","TaskFailedException","Text","TextDisplay","Timer","Tuple","Type","TypeError","TypeVar","UInt","UInt128","UInt16","UInt32","UInt64","UInt8","UndefInitializer","UndefKeywordError","UndefRefError","UndefVarError","Union","UnionAll","UnitRange","Unsigned","Val","Vararg","VecElement","VecOrMat","Vector","VersionNumber","WeakKeyDict","WeakRef"]
},n={keywords:t,illegal:/<\//},a={className:"subst",begin:/\$\(/,end:/\)/,
keywords:t},i={className:"variable",begin:"\\$"+r},o={className:"string",
contains:[e.BACKSLASH_ESCAPE,a,i],variants:[{begin:/\w*"""/,end:/"""\w*/,
relevance:10},{begin:/\w*"/,end:/"\w*/}]},s={className:"string",
contains:[e.BACKSLASH_ESCAPE,a,i],begin:"`",end:"`"},l={className:"meta",
begin:"@"+r};return n.name="Julia",n.contains=[{className:"number",
begin:/(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
relevance:0},{className:"string",begin:/'(.|\\[xXuU][a-zA-Z0-9]+)'/},o,s,l,{
className:"comment",variants:[{begin:"#=",end:"=#",relevance:10},{begin:"#",
end:"$"}]},e.HASH_COMMENT_MODE,{className:"keyword",
begin:"\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"},{begin:/<:/
}],a.contains=n.contains,n}})();hljs.registerLanguage("julia",e)})();/*! `julia-repl` grammar compiled for Highlight.js 11.10.0 */
(()=>{var a=(()=>{"use strict";return a=>({name:"Julia REPL",contains:[{
className:"meta.prompt",begin:/^julia>/,relevance:10,starts:{end:/^(?![ ]{6})/,
subLanguage:"julia"}}],aliases:["jldoctest"]})})()
;hljs.registerLanguage("julia-repl",a)})();/*! `kotlin` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;var e="[0-9](_*[0-9])*",n=`\\.(${e})`,a="[0-9a-fA-F](_*[0-9a-fA-F])*",i={
className:"number",variants:[{
begin:`(\\b(${e})((${n})|\\.)?|(${n}))[eE][+-]?(${e})[fFdD]?\\b`},{
begin:`\\b(${e})((${n})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${n})[fFdD]?\\b`
},{begin:`\\b(${e})[fFdD]\\b`},{
begin:`\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?(${e})[fFdD]?\\b`},{
begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${a})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};return e=>{const n={
keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
literal:"true false null"},a={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
},s={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},t={
className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},r={className:"string",
variants:[{begin:'"""',end:'"""(?=[^"])',contains:[t,s]},{begin:"'",end:"'",
illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
contains:[e.BACKSLASH_ESCAPE,t,s]}]};s.contains.push(r);const l={
className:"meta",
begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
},c={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
end:/\)/,contains:[e.inherit(r,{className:"string"}),"self"]}]
},o=i,b=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),E={
variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
contains:[]}]},d=E;return d.variants[1].contains=[E],E.variants[1].contains=[d],
{name:"Kotlin",aliases:["kt","kts"],keywords:n,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,b,{className:"keyword",
begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
begin:/@\w+/}]}},a,l,c,{className:"function",beginKeywords:"fun",end:"[(]|$",
returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
endsWithParent:!0,contains:[E,e.C_LINE_COMMENT_MODE,b],relevance:0
},e.C_LINE_COMMENT_MODE,b,l,c,r,e.C_NUMBER_MODE]},b]},{
begin:[/class|interface|trait/,/\s+/,e.UNDERSCORE_IDENT_RE],beginScope:{
3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
illegal:"extends implements",contains:[{
beginKeywords:"public protected internal private constructor"
},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,
excludeBegin:!0,returnEnd:!0},l,c]},r,{className:"meta",begin:"^#!/usr/bin/env",
end:"$",illegal:"\n"},o]}}})();hljs.registerLanguage("kotlin",e)})();/*! `latex` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=[{begin:/\^{6}[0-9a-f]{6}/},{
begin:/\^{5}[0-9a-f]{5}/},{begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/
},{begin:/\^{2}[0-9a-f]{2}/},{begin:/\^{2}[\u0000-\u007f]/}],a=[{
className:"keyword",begin:/\\/,relevance:0,contains:[{endsParent:!0,
begin:e.regex.either(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((e=>e+"(?![a-zA-Z@:_])")))
},{endsParent:!0,
begin:RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map((e=>e+"(?![a-zA-Z:_])")).join("|"))
},{endsParent:!0,variants:n},{endsParent:!0,relevance:0,variants:[{
begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,
begin:/#+\d?/},{variants:n},{className:"built_in",relevance:0,begin:/[$&^_]/},{
className:"meta",begin:/% ?!(T[eE]X|tex|BIB|bib)/,end:"$",relevance:10
},e.COMMENT("%","$",{relevance:0})],i={begin:/\{/,end:/\}/,relevance:0,
contains:["self",...a]},t=e.inherit(i,{relevance:0,endsParent:!0,
contains:[i,...a]}),r={begin:/\[/,end:/\]/,endsParent:!0,relevance:0,
contains:[i,...a]},s={begin:/\s+/,relevance:0},c=[t],l=[r],o=(e,n)=>({
contains:[s],starts:{relevance:0,contains:e,starts:n}}),d=(e,n)=>({
begin:"\\\\"+e+"(?![a-zA-Z@:_])",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e
},relevance:0,contains:[s],starts:n}),g=(n,a)=>e.inherit({
begin:"\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{"+n+"\\})",keywords:{
$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0
},o(c,a)),m=(n="string")=>e.END_SAME_AS_BEGIN({className:n,begin:/(.|\r?\n)/,
end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0}),b=e=>({
className:"string",end:"(?=\\\\end\\{"+e+"\\})"}),p=(e="string")=>({relevance:0,
begin:/\{/,starts:{endsParent:!0,contains:[{className:e,end:/(?=\})/,
endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,contains:["self"]}]}]}
});return{name:"LaTeX",aliases:["tex"],
contains:[...["verb","lstinline"].map((e=>d(e,{contains:[m()]}))),d("mint",o(c,{
contains:[m()]})),d("mintinline",o(c,{contains:[p(),m()]})),d("url",{
contains:[p("link"),p("link")]}),d("hyperref",{contains:[p("link")]
}),d("href",o(l,{contains:[p("link")]
})),...[].concat(...["","\\*"].map((e=>[g("verbatim"+e,b("verbatim"+e)),g("filecontents"+e,o(c,b("filecontents"+e))),...["","B","L"].map((n=>g(n+"Verbatim"+e,o(l,b(n+"Verbatim"+e)))))]))),g("minted",o(l,o(c,b("minted")))),...a]
}}})();hljs.registerLanguage("latex",e)})();/*! `ldif` grammar compiled for Highlight.js 11.10.0 */
(()=>{var a=(()=>{"use strict";return a=>({name:"LDIF",contains:[{
className:"attribute",match:"^dn(?=:)",relevance:10},{className:"attribute",
match:"^\\w+(?=:)"},{className:"literal",match:"^-"},a.HASH_COMMENT_MODE]})})()
;hljs.registerLanguage("ldif",a)})();/*! `less` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),o=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse(),n=r.concat(i).sort().reverse()
;return a=>{const l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
}))(a),s=n,d="[\\w-]+",c="("+d+"|@\\{"+d+"\\})",g=[],b=[],m=e=>({
className:"string",begin:"~?"+e+".*?"+e}),p=(e,t,r)=>({className:e,begin:t,
relevance:r}),f={$pattern:/[a-z-]+/,keyword:"and or not only",
attribute:t.join(" ")},u={begin:"\\(",end:"\\)",contains:b,keywords:f,
relevance:0}
;b.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,m("'"),m('"'),l.CSS_NUMBER_MODE,{
begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
excludeEnd:!0}
},l.HEXCOLOR,u,p("variable","@@?"+d,10),p("variable","@\\{"+d+"\\}"),p("built_in","~?`[^`]*?`"),{
className:"attribute",begin:d+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0
},l.IMPORTANT,{beginKeywords:"and not"},l.FUNCTION_DISPATCH);const h=b.concat({
begin:/\{/,end:/\}/,contains:g}),k={beginKeywords:"when",endsWithParent:!0,
contains:[{beginKeywords:"and not"}].concat(b)},v={begin:c+"\\s*:",
returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/
},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b",
end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:b}}]
},y={className:"keyword",
begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
starts:{end:"[;{}]",keywords:f,returnEnd:!0,contains:b,relevance:0}},w={
className:"variable",variants:[{begin:"@"+d+"\\s*:",relevance:15},{begin:"@"+d
}],starts:{end:"[;}]",returnEnd:!0,contains:h}},x={variants:[{
begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:c,end:/\{/}],returnBegin:!0,
returnEnd:!0,illegal:"[<='$\"]",relevance:0,
contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,k,p("keyword","all\\b"),p("variable","@\\{"+d+"\\}"),{
begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"
},l.CSS_NUMBER_MODE,p("selector-tag",c,0),p("selector-id","#"+c),p("selector-class","\\."+c,0),p("selector-tag","&",0),l.ATTRIBUTE_SELECTOR_MODE,{
className:"selector-pseudo",begin:":("+r.join("|")+")"},{
className:"selector-pseudo",begin:":(:)?("+i.join("|")+")"},{begin:/\(/,
end:/\)/,relevance:0,contains:h},{begin:"!important"},l.FUNCTION_DISPATCH]},_={
begin:d+":(:)?"+`(${s.join("|")})`,returnBegin:!0,contains:[x]}
;return g.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,y,w,_,v,x,k,l.FUNCTION_DISPATCH),
{name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:g}}})()
;hljs.registerLanguage("less",e)})();/*! `lisp` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",a="\\|[^]*?\\|",i="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={
className:"literal",begin:"\\b(t{1}|nil)\\b"},l={className:"number",variants:[{
begin:i,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{
begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{
begin:"#(c|C)\\("+i+" +"+i,end:"\\)"}]},b=e.inherit(e.QUOTE_STRING_MODE,{
illegal:null}),g=e.COMMENT(";","$",{relevance:0}),r={begin:"\\*",end:"\\*"},t={
className:"symbol",begin:"[:&]"+n},c={begin:n,relevance:0},d={begin:a},o={
contains:[l,b,r,t,{begin:"\\(",end:"\\)",contains:["self",s,b,l,c]},c],
variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{
name:"quote"}},{begin:"'"+a}]},v={variants:[{begin:"'"+n},{
begin:"#'"+n+"(::"+n+")*"}]},m={begin:"\\(\\s*",end:"\\)"},u={endsWithParent:!0,
relevance:0};return m.contains=[{className:"name",variants:[{begin:n,relevance:0
},{begin:a}]},u],u.contains=[o,v,m,s,l,b,g,r,t,d,c],{name:"Lisp",illegal:/\S/,
contains:[l,e.SHEBANG(),s,b,g,o,v,m,c]}}})();hljs.registerLanguage("lisp",e)
})();/*! `lua` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t="\\[=*\\[",a="\\]=*\\]",n={
begin:t,end:a,contains:["self"]
},o=[e.COMMENT("--(?!"+t+")","$"),e.COMMENT("--"+t,a,{contains:[n],relevance:10
})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
literal:"true false nil",
keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
},contains:o.concat([{className:"function",beginKeywords:"function",end:"\\)",
contains:[e.inherit(e.TITLE_MODE,{
begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
begin:"\\(",endsWithParent:!0,contains:o}].concat(o)
},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
begin:t,end:a,contains:[n],relevance:5}])}}})();hljs.registerLanguage("lua",e)
})();/*! `makefile` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const i={className:"variable",
variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",
contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",
begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]},n={className:"variable",
begin:/\$\([\w-]+\s/,end:/\)/,keywords:{
built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
},contains:[i]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},r={
className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{
name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,
keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
},contains:[e.HASH_COMMENT_MODE,i,a,n,s,{className:"meta",begin:/^\.PHONY:/,
end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},r]}}})()
;hljs.registerLanguage("makefile",e)})();/*! `markdown` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={begin:/<\/?[A-Za-z_]/,
end:">",subLanguage:"xml",relevance:0},a={variants:[{begin:/\[.+?\]\[.*?\]/,
relevance:0},{
begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
relevance:2},{
begin:e.regex.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/
},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
end:"\\]",excludeBegin:!0,excludeEnd:!0}]},i={className:"strong",contains:[],
variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]
},s={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{
begin:/_(?![_\s])/,end:/_/,relevance:0}]},c=e.inherit(i,{contains:[]
}),t=e.inherit(s,{contains:[]});i.contains.push(t),s.contains.push(c)
;let g=[n,a];return[i,s,c,t].forEach((e=>{e.contains=e.contains.concat(g)
})),g=g.concat(i,s),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:g},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:g}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:g,
end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},{scope:"literal",
match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}})()
;hljs.registerLanguage("markdown",e)})();/*! `mathematica` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e=["AASTriangle","AbelianGroup","Abort","AbortKernels","AbortProtect","AbortScheduledTask","Above","Abs","AbsArg","AbsArgPlot","Absolute","AbsoluteCorrelation","AbsoluteCorrelationFunction","AbsoluteCurrentValue","AbsoluteDashing","AbsoluteFileName","AbsoluteOptions","AbsolutePointSize","AbsoluteThickness","AbsoluteTime","AbsoluteTiming","AcceptanceThreshold","AccountingForm","Accumulate","Accuracy","AccuracyGoal","AcousticAbsorbingValue","AcousticImpedanceValue","AcousticNormalVelocityValue","AcousticPDEComponent","AcousticPressureCondition","AcousticRadiationValue","AcousticSoundHardValue","AcousticSoundSoftCondition","ActionDelay","ActionMenu","ActionMenuBox","ActionMenuBoxOptions","Activate","Active","ActiveClassification","ActiveClassificationObject","ActiveItem","ActivePrediction","ActivePredictionObject","ActiveStyle","AcyclicGraphQ","AddOnHelpPath","AddSides","AddTo","AddToSearchIndex","AddUsers","AdjacencyGraph","AdjacencyList","AdjacencyMatrix","AdjacentMeshCells","Adjugate","AdjustmentBox","AdjustmentBoxOptions","AdjustTimeSeriesForecast","AdministrativeDivisionData","AffineHalfSpace","AffineSpace","AffineStateSpaceModel","AffineTransform","After","AggregatedEntityClass","AggregationLayer","AircraftData","AirportData","AirPressureData","AirSoundAttenuation","AirTemperatureData","AiryAi","AiryAiPrime","AiryAiZero","AiryBi","AiryBiPrime","AiryBiZero","AlgebraicIntegerQ","AlgebraicNumber","AlgebraicNumberDenominator","AlgebraicNumberNorm","AlgebraicNumberPolynomial","AlgebraicNumberTrace","AlgebraicRules","AlgebraicRulesData","Algebraics","AlgebraicUnitQ","Alignment","AlignmentMarker","AlignmentPoint","All","AllowAdultContent","AllowChatServices","AllowedCloudExtraParameters","AllowedCloudParameterExtensions","AllowedDimensions","AllowedFrequencyRange","AllowedHeads","AllowGroupClose","AllowIncomplete","AllowInlineCells","AllowKernelInitialization","AllowLooseGrammar","AllowReverseGroupClose","AllowScriptLevelChange","AllowVersionUpdate","AllTrue","Alphabet","AlphabeticOrder","AlphabeticSort","AlphaChannel","AlternateImage","AlternatingFactorial","AlternatingGroup","AlternativeHypothesis","Alternatives","AltitudeMethod","AmbientLight","AmbiguityFunction","AmbiguityList","Analytic","AnatomyData","AnatomyForm","AnatomyPlot3D","AnatomySkinStyle","AnatomyStyling","AnchoredSearch","And","AndersonDarlingTest","AngerJ","AngleBisector","AngleBracket","AnglePath","AnglePath3D","AngleVector","AngularGauge","Animate","AnimatedImage","AnimationCycleOffset","AnimationCycleRepetitions","AnimationDirection","AnimationDisplayTime","AnimationRate","AnimationRepetitions","AnimationRunning","AnimationRunTime","AnimationTimeIndex","AnimationVideo","Animator","AnimatorBox","AnimatorBoxOptions","AnimatorElements","Annotate","Annotation","AnnotationDelete","AnnotationKeys","AnnotationRules","AnnotationValue","Annuity","AnnuityDue","Annulus","AnomalyDetection","AnomalyDetector","AnomalyDetectorFunction","Anonymous","Antialiasing","Antihermitian","AntihermitianMatrixQ","Antisymmetric","AntisymmetricMatrixQ","Antonyms","AnyOrder","AnySubset","AnyTrue","Apart","ApartSquareFree","APIFunction","Appearance","AppearanceElements","AppearanceRules","AppellF1","Append","AppendCheck","AppendLayer","AppendTo","Application","Apply","ApplyReaction","ApplySides","ApplyTo","ArcCos","ArcCosh","ArcCot","ArcCoth","ArcCsc","ArcCsch","ArcCurvature","ARCHProcess","ArcLength","ArcSec","ArcSech","ArcSin","ArcSinDistribution","ArcSinh","ArcTan","ArcTanh","Area","Arg","ArgMax","ArgMin","ArgumentCountQ","ArgumentsOptions","ARIMAProcess","ArithmeticGeometricMean","ARMAProcess","Around","AroundReplace","ARProcess","Array","ArrayComponents","ArrayDepth","ArrayFilter","ArrayFlatten","ArrayMesh","ArrayPad","ArrayPlot","ArrayPlot3D","ArrayQ","ArrayReduce","ArrayResample","ArrayReshape","ArrayRules","Arrays","Arrow","Arrow3DBox","ArrowBox","Arrowheads","ASATriangle","Ask","AskAppend","AskConfirm","AskDisplay","AskedQ","AskedValue","AskFunction","AskState","AskTemplateDisplay","AspectRatio","AspectRatioFixed","Assert","AssessmentFunction","AssessmentResultObject","AssociateTo","Association","AssociationFormat","AssociationMap","AssociationQ","AssociationThread","AssumeDeterministic","Assuming","Assumptions","AstroAngularSeparation","AstroBackground","AstroCenter","AstroDistance","AstroGraphics","AstroGridLines","AstroGridLinesStyle","AstronomicalData","AstroPosition","AstroProjection","AstroRange","AstroRangePadding","AstroReferenceFrame","AstroStyling","AstroZoomLevel","Asymptotic","AsymptoticDSolveValue","AsymptoticEqual","AsymptoticEquivalent","AsymptoticExpectation","AsymptoticGreater","AsymptoticGreaterEqual","AsymptoticIntegrate","AsymptoticLess","AsymptoticLessEqual","AsymptoticOutputTracker","AsymptoticProbability","AsymptoticProduct","AsymptoticRSolveValue","AsymptoticSolve","AsymptoticSum","Asynchronous","AsynchronousTaskObject","AsynchronousTasks","Atom","AtomCoordinates","AtomCount","AtomDiagramCoordinates","AtomLabels","AtomLabelStyle","AtomList","AtomQ","AttachCell","AttachedCell","AttentionLayer","Attributes","Audio","AudioAmplify","AudioAnnotate","AudioAnnotationLookup","AudioBlockMap","AudioCapture","AudioChannelAssignment","AudioChannelCombine","AudioChannelMix","AudioChannels","AudioChannelSeparate","AudioData","AudioDelay","AudioDelete","AudioDevice","AudioDistance","AudioEncoding","AudioFade","AudioFrequencyShift","AudioGenerator","AudioIdentify","AudioInputDevice","AudioInsert","AudioInstanceQ","AudioIntervals","AudioJoin","AudioLabel","AudioLength","AudioLocalMeasurements","AudioLooping","AudioLoudness","AudioMeasurements","AudioNormalize","AudioOutputDevice","AudioOverlay","AudioPad","AudioPan","AudioPartition","AudioPause","AudioPitchShift","AudioPlay","AudioPlot","AudioQ","AudioRecord","AudioReplace","AudioResample","AudioReverb","AudioReverse","AudioSampleRate","AudioSpectralMap","AudioSpectralTransformation","AudioSplit","AudioStop","AudioStream","AudioStreams","AudioTimeStretch","AudioTrackApply","AudioTrackSelection","AudioTrim","AudioType","AugmentedPolyhedron","AugmentedSymmetricPolynomial","Authenticate","Authentication","AuthenticationDialog","AutoAction","Autocomplete","AutocompletionFunction","AutoCopy","AutocorrelationTest","AutoDelete","AutoEvaluateEvents","AutoGeneratedPackage","AutoIndent","AutoIndentSpacings","AutoItalicWords","AutoloadPath","AutoMatch","Automatic","AutomaticImageSize","AutoMultiplicationSymbol","AutoNumberFormatting","AutoOpenNotebooks","AutoOpenPalettes","AutoOperatorRenderings","AutoQuoteCharacters","AutoRefreshed","AutoRemove","AutorunSequencing","AutoScaling","AutoScroll","AutoSpacing","AutoStyleOptions","AutoStyleWords","AutoSubmitting","Axes","AxesEdge","AxesLabel","AxesOrigin","AxesStyle","AxiomaticTheory","Axis","Axis3DBox","Axis3DBoxOptions","AxisBox","AxisBoxOptions","AxisLabel","AxisObject","AxisStyle","BabyMonsterGroupB","Back","BackFaceColor","BackFaceGlowColor","BackFaceOpacity","BackFaceSpecularColor","BackFaceSpecularExponent","BackFaceSurfaceAppearance","BackFaceTexture","Background","BackgroundAppearance","BackgroundTasksSettings","Backslash","Backsubstitution","Backward","Ball","Band","BandpassFilter","BandstopFilter","BarabasiAlbertGraphDistribution","BarChart","BarChart3D","BarcodeImage","BarcodeRecognize","BaringhausHenzeTest","BarLegend","BarlowProschanImportance","BarnesG","BarOrigin","BarSpacing","BartlettHannWindow","BartlettWindow","BaseDecode","BaseEncode","BaseForm","Baseline","BaselinePosition","BaseStyle","BasicRecurrentLayer","BatchNormalizationLayer","BatchSize","BatesDistribution","BattleLemarieWavelet","BayesianMaximization","BayesianMaximizationObject","BayesianMinimization","BayesianMinimizationObject","Because","BeckmannDistribution","Beep","Before","Begin","BeginDialogPacket","BeginPackage","BellB","BellY","Below","BenfordDistribution","BeniniDistribution","BenktanderGibratDistribution","BenktanderWeibullDistribution","BernoulliB","BernoulliDistribution","BernoulliGraphDistribution","BernoulliProcess","BernsteinBasis","BesagL","BesselFilterModel","BesselI","BesselJ","BesselJZero","BesselK","BesselY","BesselYZero","Beta","BetaBinomialDistribution","BetaDistribution","BetaNegativeBinomialDistribution","BetaPrimeDistribution","BetaRegularized","Between","BetweennessCentrality","Beveled","BeveledPolyhedron","BezierCurve","BezierCurve3DBox","BezierCurve3DBoxOptions","BezierCurveBox","BezierCurveBoxOptions","BezierFunction","BilateralFilter","BilateralLaplaceTransform","BilateralZTransform","Binarize","BinaryDeserialize","BinaryDistance","BinaryFormat","BinaryImageQ","BinaryRead","BinaryReadList","BinarySerialize","BinaryWrite","BinCounts","BinLists","BinnedVariogramList","Binomial","BinomialDistribution","BinomialPointProcess","BinomialProcess","BinormalDistribution","BiorthogonalSplineWavelet","BioSequence","BioSequenceBackTranslateList","BioSequenceComplement","BioSequenceInstances","BioSequenceModify","BioSequencePlot","BioSequenceQ","BioSequenceReverseComplement","BioSequenceTranscribe","BioSequenceTranslate","BipartiteGraphQ","BiquadraticFilterModel","BirnbaumImportance","BirnbaumSaundersDistribution","BitAnd","BitClear","BitGet","BitLength","BitNot","BitOr","BitRate","BitSet","BitShiftLeft","BitShiftRight","BitXor","BiweightLocation","BiweightMidvariance","Black","BlackmanHarrisWindow","BlackmanNuttallWindow","BlackmanWindow","Blank","BlankForm","BlankNullSequence","BlankSequence","Blend","Block","BlockchainAddressData","BlockchainBase","BlockchainBlockData","BlockchainContractValue","BlockchainData","BlockchainGet","BlockchainKeyEncode","BlockchainPut","BlockchainTokenData","BlockchainTransaction","BlockchainTransactionData","BlockchainTransactionSign","BlockchainTransactionSubmit","BlockDiagonalMatrix","BlockLowerTriangularMatrix","BlockMap","BlockRandom","BlockUpperTriangularMatrix","BlomqvistBeta","BlomqvistBetaTest","Blue","Blur","Blurring","BodePlot","BohmanWindow","Bold","Bond","BondCount","BondLabels","BondLabelStyle","BondList","BondQ","Bookmarks","Boole","BooleanConsecutiveFunction","BooleanConvert","BooleanCountingFunction","BooleanFunction","BooleanGraph","BooleanMaxterms","BooleanMinimize","BooleanMinterms","BooleanQ","BooleanRegion","Booleans","BooleanStrings","BooleanTable","BooleanVariables","BorderDimensions","BorelTannerDistribution","Bottom","BottomHatTransform","BoundaryDiscretizeGraphics","BoundaryDiscretizeRegion","BoundaryMesh","BoundaryMeshRegion","BoundaryMeshRegionQ","BoundaryStyle","BoundedRegionQ","BoundingRegion","Bounds","Box","BoxBaselineShift","BoxData","BoxDimensions","Boxed","Boxes","BoxForm","BoxFormFormatTypes","BoxFrame","BoxID","BoxMargins","BoxMatrix","BoxObject","BoxRatios","BoxRotation","BoxRotationPoint","BoxStyle","BoxWhiskerChart","Bra","BracketingBar","BraKet","BrayCurtisDistance","BreadthFirstScan","Break","BridgeData","BrightnessEqualize","BroadcastStationData","Brown","BrownForsytheTest","BrownianBridgeProcess","BrowserCategory","BSplineBasis","BSplineCurve","BSplineCurve3DBox","BSplineCurve3DBoxOptions","BSplineCurveBox","BSplineCurveBoxOptions","BSplineFunction","BSplineSurface","BSplineSurface3DBox","BSplineSurface3DBoxOptions","BubbleChart","BubbleChart3D","BubbleScale","BubbleSizes","BuckyballGraph","BuildCompiledComponent","BuildingData","BulletGauge","BusinessDayQ","ButterflyGraph","ButterworthFilterModel","Button","ButtonBar","ButtonBox","ButtonBoxOptions","ButtonCell","ButtonContents","ButtonData","ButtonEvaluator","ButtonExpandable","ButtonFrame","ButtonFunction","ButtonMargins","ButtonMinHeight","ButtonNote","ButtonNotebook","ButtonSource","ButtonStyle","ButtonStyleMenuListing","Byte","ByteArray","ByteArrayFormat","ByteArrayFormatQ","ByteArrayQ","ByteArrayToString","ByteCount","ByteOrdering","C","CachedValue","CacheGraphics","CachePersistence","CalendarConvert","CalendarData","CalendarType","Callout","CalloutMarker","CalloutStyle","CallPacket","CanberraDistance","Cancel","CancelButton","CandlestickChart","CanonicalGraph","CanonicalizePolygon","CanonicalizePolyhedron","CanonicalizeRegion","CanonicalName","CanonicalWarpingCorrespondence","CanonicalWarpingDistance","CantorMesh","CantorStaircase","Canvas","Cap","CapForm","CapitalDifferentialD","Capitalize","CapsuleShape","CaptureRunning","CaputoD","CardinalBSplineBasis","CarlemanLinearize","CarlsonRC","CarlsonRD","CarlsonRE","CarlsonRF","CarlsonRG","CarlsonRJ","CarlsonRK","CarlsonRM","CarmichaelLambda","CaseOrdering","Cases","CaseSensitive","Cashflow","Casoratian","Cast","Catalan","CatalanNumber","Catch","CategoricalDistribution","Catenate","CatenateLayer","CauchyDistribution","CauchyMatrix","CauchyPointProcess","CauchyWindow","CayleyGraph","CDF","CDFDeploy","CDFInformation","CDFWavelet","Ceiling","CelestialSystem","Cell","CellAutoOverwrite","CellBaseline","CellBoundingBox","CellBracketOptions","CellChangeTimes","CellContents","CellContext","CellDingbat","CellDingbatMargin","CellDynamicExpression","CellEditDuplicate","CellElementsBoundingBox","CellElementSpacings","CellEpilog","CellEvaluationDuplicate","CellEvaluationFunction","CellEvaluationLanguage","CellEventActions","CellFrame","CellFrameColor","CellFrameLabelMargins","CellFrameLabels","CellFrameMargins","CellFrameStyle","CellGroup","CellGroupData","CellGrouping","CellGroupingRules","CellHorizontalScrolling","CellID","CellInsertionPointCell","CellLabel","CellLabelAutoDelete","CellLabelMargins","CellLabelPositioning","CellLabelStyle","CellLabelTemplate","CellMargins","CellObject","CellOpen","CellPrint","CellProlog","Cells","CellSize","CellStyle","CellTags","CellTrayPosition","CellTrayWidgets","CellularAutomaton","CensoredDistribution","Censoring","Center","CenterArray","CenterDot","CenteredInterval","CentralFeature","CentralMoment","CentralMomentGeneratingFunction","Cepstrogram","CepstrogramArray","CepstrumArray","CForm","ChampernowneNumber","ChangeOptions","ChannelBase","ChannelBrokerAction","ChannelDatabin","ChannelHistoryLength","ChannelListen","ChannelListener","ChannelListeners","ChannelListenerWait","ChannelObject","ChannelPreSendFunction","ChannelReceiverFunction","ChannelSend","ChannelSubscribers","ChanVeseBinarize","Character","CharacterCounts","CharacterEncoding","CharacterEncodingsPath","CharacteristicFunction","CharacteristicPolynomial","CharacterName","CharacterNormalize","CharacterRange","Characters","ChartBaseStyle","ChartElementData","ChartElementDataFunction","ChartElementFunction","ChartElements","ChartLabels","ChartLayout","ChartLegends","ChartStyle","Chebyshev1FilterModel","Chebyshev2FilterModel","ChebyshevDistance","ChebyshevT","ChebyshevU","Check","CheckAbort","CheckAll","CheckArguments","Checkbox","CheckboxBar","CheckboxBox","CheckboxBoxOptions","ChemicalConvert","ChemicalData","ChemicalFormula","ChemicalInstance","ChemicalReaction","ChessboardDistance","ChiDistribution","ChineseRemainder","ChiSquareDistribution","ChoiceButtons","ChoiceDialog","CholeskyDecomposition","Chop","ChromaticityPlot","ChromaticityPlot3D","ChromaticPolynomial","Circle","CircleBox","CircleDot","CircleMinus","CirclePlus","CirclePoints","CircleThrough","CircleTimes","CirculantGraph","CircularArcThrough","CircularOrthogonalMatrixDistribution","CircularQuaternionMatrixDistribution","CircularRealMatrixDistribution","CircularSymplecticMatrixDistribution","CircularUnitaryMatrixDistribution","Circumsphere","CityData","ClassifierFunction","ClassifierInformation","ClassifierMeasurements","ClassifierMeasurementsObject","Classify","ClassPriors","Clear","ClearAll","ClearAttributes","ClearCookies","ClearPermissions","ClearSystemCache","ClebschGordan","ClickPane","ClickToCopy","ClickToCopyEnabled","Clip","ClipboardNotebook","ClipFill","ClippingStyle","ClipPlanes","ClipPlanesStyle","ClipRange","Clock","ClockGauge","ClockwiseContourIntegral","Close","Closed","CloseKernels","ClosenessCentrality","Closing","ClosingAutoSave","ClosingEvent","CloudAccountData","CloudBase","CloudConnect","CloudConnections","CloudDeploy","CloudDirectory","CloudDisconnect","CloudEvaluate","CloudExport","CloudExpression","CloudExpressions","CloudFunction","CloudGet","CloudImport","CloudLoggingData","CloudObject","CloudObjectInformation","CloudObjectInformationData","CloudObjectNameFormat","CloudObjects","CloudObjectURLType","CloudPublish","CloudPut","CloudRenderingMethod","CloudSave","CloudShare","CloudSubmit","CloudSymbol","CloudUnshare","CloudUserID","ClusterClassify","ClusterDissimilarityFunction","ClusteringComponents","ClusteringMeasurements","ClusteringTree","CMYKColor","Coarse","CodeAssistOptions","Coefficient","CoefficientArrays","CoefficientDomain","CoefficientList","CoefficientRules","CoifletWavelet","Collect","CollinearPoints","Colon","ColonForm","ColorBalance","ColorCombine","ColorConvert","ColorCoverage","ColorData","ColorDataFunction","ColorDetect","ColorDistance","ColorFunction","ColorFunctionBinning","ColorFunctionScaling","Colorize","ColorNegate","ColorOutput","ColorProfileData","ColorQ","ColorQuantize","ColorReplace","ColorRules","ColorSelectorSettings","ColorSeparate","ColorSetter","ColorSetterBox","ColorSetterBoxOptions","ColorSlider","ColorsNear","ColorSpace","ColorToneMapping","Column","ColumnAlignments","ColumnBackgrounds","ColumnForm","ColumnLines","ColumnsEqual","ColumnSpacings","ColumnWidths","CombinatorB","CombinatorC","CombinatorI","CombinatorK","CombinatorS","CombinatorW","CombinatorY","CombinedEntityClass","CombinerFunction","CometData","CommonDefaultFormatTypes","Commonest","CommonestFilter","CommonName","CommonUnits","CommunityBoundaryStyle","CommunityGraphPlot","CommunityLabels","CommunityRegionStyle","CompanyData","CompatibleUnitQ","CompilationOptions","CompilationTarget","Compile","Compiled","CompiledCodeFunction","CompiledComponent","CompiledExpressionDeclaration","CompiledFunction","CompiledLayer","CompilerCallback","CompilerEnvironment","CompilerEnvironmentAppend","CompilerEnvironmentAppendTo","CompilerEnvironmentObject","CompilerOptions","Complement","ComplementedEntityClass","CompleteGraph","CompleteGraphQ","CompleteIntegral","CompleteKaryTree","CompletionsListPacket","Complex","ComplexArrayPlot","ComplexContourPlot","Complexes","ComplexExpand","ComplexInfinity","ComplexityFunction","ComplexListPlot","ComplexPlot","ComplexPlot3D","ComplexRegionPlot","ComplexStreamPlot","ComplexVectorPlot","ComponentMeasurements","ComponentwiseContextMenu","Compose","ComposeList","ComposeSeries","CompositeQ","Composition","CompoundElement","CompoundExpression","CompoundPoissonDistribution","CompoundPoissonProcess","CompoundRenewalProcess","Compress","CompressedData","CompressionLevel","ComputeUncertainty","ConcaveHullMesh","Condition","ConditionalExpression","Conditioned","Cone","ConeBox","ConfidenceLevel","ConfidenceRange","ConfidenceTransform","ConfigurationPath","Confirm","ConfirmAssert","ConfirmBy","ConfirmMatch","ConfirmQuiet","ConformationMethod","ConformAudio","ConformImages","Congruent","ConicGradientFilling","ConicHullRegion","ConicHullRegion3DBox","ConicHullRegion3DBoxOptions","ConicHullRegionBox","ConicHullRegionBoxOptions","ConicOptimization","Conjugate","ConjugateTranspose","Conjunction","Connect","ConnectedComponents","ConnectedGraphComponents","ConnectedGraphQ","ConnectedMeshComponents","ConnectedMoleculeComponents","ConnectedMoleculeQ","ConnectionSettings","ConnectLibraryCallbackFunction","ConnectSystemModelComponents","ConnectSystemModelController","ConnesWindow","ConoverTest","ConservativeConvectionPDETerm","ConsoleMessage","Constant","ConstantArray","ConstantArrayLayer","ConstantImage","ConstantPlusLayer","ConstantRegionQ","Constants","ConstantTimesLayer","ConstellationData","ConstrainedMax","ConstrainedMin","Construct","Containing","ContainsAll","ContainsAny","ContainsExactly","ContainsNone","ContainsOnly","ContentDetectorFunction","ContentFieldOptions","ContentLocationFunction","ContentObject","ContentPadding","ContentsBoundingBox","ContentSelectable","ContentSize","Context","ContextMenu","Contexts","ContextToFileName","Continuation","Continue","ContinuedFraction","ContinuedFractionK","ContinuousAction","ContinuousMarkovProcess","ContinuousTask","ContinuousTimeModelQ","ContinuousWaveletData","ContinuousWaveletTransform","ContourDetect","ContourGraphics","ContourIntegral","ContourLabels","ContourLines","ContourPlot","ContourPlot3D","Contours","ContourShading","ContourSmoothing","ContourStyle","ContraharmonicMean","ContrastiveLossLayer","Control","ControlActive","ControlAlignment","ControlGroupContentsBox","ControllabilityGramian","ControllabilityMatrix","ControllableDecomposition","ControllableModelQ","ControllerDuration","ControllerInformation","ControllerInformationData","ControllerLinking","ControllerManipulate","ControllerMethod","ControllerPath","ControllerState","ControlPlacement","ControlsRendering","ControlType","ConvectionPDETerm","Convergents","ConversionOptions","ConversionRules","ConvertToPostScript","ConvertToPostScriptPacket","ConvexHullMesh","ConvexHullRegion","ConvexOptimization","ConvexPolygonQ","ConvexPolyhedronQ","ConvexRegionQ","ConvolutionLayer","Convolve","ConwayGroupCo1","ConwayGroupCo2","ConwayGroupCo3","CookieFunction","Cookies","CoordinateBoundingBox","CoordinateBoundingBoxArray","CoordinateBounds","CoordinateBoundsArray","CoordinateChartData","CoordinatesToolOptions","CoordinateTransform","CoordinateTransformData","CoplanarPoints","CoprimeQ","Coproduct","CopulaDistribution","Copyable","CopyDatabin","CopyDirectory","CopyFile","CopyFunction","CopyTag","CopyToClipboard","CoreNilpotentDecomposition","CornerFilter","CornerNeighbors","Correlation","CorrelationDistance","CorrelationFunction","CorrelationTest","Cos","Cosh","CoshIntegral","CosineDistance","CosineWindow","CosIntegral","Cot","Coth","CoulombF","CoulombG","CoulombH1","CoulombH2","Count","CountDistinct","CountDistinctBy","CounterAssignments","CounterBox","CounterBoxOptions","CounterClockwiseContourIntegral","CounterEvaluator","CounterFunction","CounterIncrements","CounterStyle","CounterStyleMenuListing","CountRoots","CountryData","Counts","CountsBy","Covariance","CovarianceEstimatorFunction","CovarianceFunction","CoxianDistribution","CoxIngersollRossProcess","CoxModel","CoxModelFit","CramerVonMisesTest","CreateArchive","CreateCellID","CreateChannel","CreateCloudExpression","CreateCompilerEnvironment","CreateDatabin","CreateDataStructure","CreateDataSystemModel","CreateDialog","CreateDirectory","CreateDocument","CreateFile","CreateIntermediateDirectories","CreateLicenseEntitlement","CreateManagedLibraryExpression","CreateNotebook","CreatePacletArchive","CreatePalette","CreatePermissionsGroup","CreateScheduledTask","CreateSearchIndex","CreateSystemModel","CreateTemporary","CreateTypeInstance","CreateUUID","CreateWindow","CriterionFunction","CriticalityFailureImportance","CriticalitySuccessImportance","CriticalSection","Cross","CrossEntropyLossLayer","CrossingCount","CrossingDetect","CrossingPolygon","CrossMatrix","Csc","Csch","CSGRegion","CSGRegionQ","CSGRegionTree","CTCLossLayer","Cube","CubeRoot","Cubics","Cuboid","CuboidBox","CuboidBoxOptions","Cumulant","CumulantGeneratingFunction","CumulativeFeatureImpactPlot","Cup","CupCap","Curl","CurlyDoubleQuote","CurlyQuote","CurrencyConvert","CurrentDate","CurrentImage","CurrentNotebookImage","CurrentScreenImage","CurrentValue","Curry","CurryApplied","CurvatureFlowFilter","CurveClosed","Cyan","CycleGraph","CycleIndexPolynomial","Cycles","CyclicGroup","Cyclotomic","Cylinder","CylinderBox","CylinderBoxOptions","CylindricalDecomposition","CylindricalDecompositionFunction","D","DagumDistribution","DamData","DamerauLevenshteinDistance","DampingFactor","Darker","Dashed","Dashing","DatabaseConnect","DatabaseDisconnect","DatabaseReference","Databin","DatabinAdd","DatabinRemove","Databins","DatabinSubmit","DatabinUpload","DataCompression","DataDistribution","DataRange","DataReversed","Dataset","DatasetDisplayPanel","DatasetTheme","DataStructure","DataStructureQ","Date","DateBounds","Dated","DateDelimiters","DateDifference","DatedUnit","DateFormat","DateFunction","DateGranularity","DateHistogram","DateInterval","DateList","DateListLogPlot","DateListPlot","DateListStepPlot","DateObject","DateObjectQ","DateOverlapsQ","DatePattern","DatePlus","DateRange","DateReduction","DateScale","DateSelect","DateString","DateTicksFormat","DateValue","DateWithinQ","DaubechiesWavelet","DavisDistribution","DawsonF","DayCount","DayCountConvention","DayHemisphere","DaylightQ","DayMatchQ","DayName","DayNightTerminator","DayPlus","DayRange","DayRound","DeBruijnGraph","DeBruijnSequence","Debug","DebugTag","Decapitalize","Decimal","DecimalForm","DeclareCompiledComponent","DeclareKnownSymbols","DeclarePackage","Decompose","DeconvolutionLayer","Decrement","Decrypt","DecryptFile","DedekindEta","DeepSpaceProbeData","Default","Default2DTool","Default3DTool","DefaultAttachedCellStyle","DefaultAxesStyle","DefaultBaseStyle","DefaultBoxStyle","DefaultButton","DefaultColor","DefaultControlPlacement","DefaultDockedCellStyle","DefaultDuplicateCellStyle","DefaultDuration","DefaultElement","DefaultFaceGridsStyle","DefaultFieldHintStyle","DefaultFont","DefaultFontProperties","DefaultFormatType","DefaultFrameStyle","DefaultFrameTicksStyle","DefaultGridLinesStyle","DefaultInlineFormatType","DefaultInputFormatType","DefaultLabelStyle","DefaultMenuStyle","DefaultNaturalLanguage","DefaultNewCellStyle","DefaultNewInlineCellStyle","DefaultNotebook","DefaultOptions","DefaultOutputFormatType","DefaultPrintPrecision","DefaultStyle","DefaultStyleDefinitions","DefaultTextFormatType","DefaultTextInlineFormatType","DefaultTicksStyle","DefaultTooltipStyle","DefaultValue","DefaultValues","Defer","DefineExternal","DefineInputStreamMethod","DefineOutputStreamMethod","DefineResourceFunction","Definition","Degree","DegreeCentrality","DegreeGraphDistribution","DegreeLexicographic","DegreeReverseLexicographic","DEigensystem","DEigenvalues","Deinitialization","Del","DelaunayMesh","Delayed","Deletable","Delete","DeleteAdjacentDuplicates","DeleteAnomalies","DeleteBorderComponents","DeleteCases","DeleteChannel","DeleteCloudExpression","DeleteContents","DeleteDirectory","DeleteDuplicates","DeleteDuplicatesBy","DeleteElements","DeleteFile","DeleteMissing","DeleteObject","DeletePermissionsKey","DeleteSearchIndex","DeleteSmallComponents","DeleteStopwords","DeleteWithContents","DeletionWarning","DelimitedArray","DelimitedSequence","Delimiter","DelimiterAutoMatching","DelimiterFlashTime","DelimiterMatching","Delimiters","DeliveryFunction","Dendrogram","Denominator","DensityGraphics","DensityHistogram","DensityPlot","DensityPlot3D","DependentVariables","Deploy","Deployed","Depth","DepthFirstScan","Derivative","DerivativeFilter","DerivativePDETerm","DerivedKey","DescriptorStateSpace","DesignMatrix","DestroyAfterEvaluation","Det","DeviceClose","DeviceConfigure","DeviceExecute","DeviceExecuteAsynchronous","DeviceObject","DeviceOpen","DeviceOpenQ","DeviceRead","DeviceReadBuffer","DeviceReadLatest","DeviceReadList","DeviceReadTimeSeries","Devices","DeviceStreams","DeviceWrite","DeviceWriteBuffer","DGaussianWavelet","DiacriticalPositioning","Diagonal","DiagonalizableMatrixQ","DiagonalMatrix","DiagonalMatrixQ","Dialog","DialogIndent","DialogInput","DialogLevel","DialogNotebook","DialogProlog","DialogReturn","DialogSymbols","Diamond","DiamondMatrix","DiceDissimilarity","DictionaryLookup","DictionaryWordQ","DifferenceDelta","DifferenceOrder","DifferenceQuotient","DifferenceRoot","DifferenceRootReduce","Differences","DifferentialD","DifferentialRoot","DifferentialRootReduce","DifferentiatorFilter","DiffusionPDETerm","DiggleGatesPointProcess","DiggleGrattonPointProcess","DigitalSignature","DigitBlock","DigitBlockMinimum","DigitCharacter","DigitCount","DigitQ","DihedralAngle","DihedralGroup","Dilation","DimensionalCombinations","DimensionalMeshComponents","DimensionReduce","DimensionReducerFunction","DimensionReduction","Dimensions","DiracComb","DiracDelta","DirectedEdge","DirectedEdges","DirectedGraph","DirectedGraphQ","DirectedInfinity","Direction","DirectionalLight","Directive","Directory","DirectoryName","DirectoryQ","DirectoryStack","DirichletBeta","DirichletCharacter","DirichletCondition","DirichletConvolve","DirichletDistribution","DirichletEta","DirichletL","DirichletLambda","DirichletTransform","DirichletWindow","DisableConsolePrintPacket","DisableFormatting","DiscreteAsymptotic","DiscreteChirpZTransform","DiscreteConvolve","DiscreteDelta","DiscreteHadamardTransform","DiscreteIndicator","DiscreteInputOutputModel","DiscreteLimit","DiscreteLQEstimatorGains","DiscreteLQRegulatorGains","DiscreteLyapunovSolve","DiscreteMarkovProcess","DiscreteMaxLimit","DiscreteMinLimit","DiscretePlot","DiscretePlot3D","DiscreteRatio","DiscreteRiccatiSolve","DiscreteShift","DiscreteTimeModelQ","DiscreteUniformDistribution","DiscreteVariables","DiscreteWaveletData","DiscreteWaveletPacketTransform","DiscreteWaveletTransform","DiscretizeGraphics","DiscretizeRegion","Discriminant","DisjointQ","Disjunction","Disk","DiskBox","DiskBoxOptions","DiskMatrix","DiskSegment","Dispatch","DispatchQ","DispersionEstimatorFunction","Display","DisplayAllSteps","DisplayEndPacket","DisplayForm","DisplayFunction","DisplayPacket","DisplayRules","DisplayString","DisplayTemporary","DisplayWith","DisplayWithRef","DisplayWithVariable","DistanceFunction","DistanceMatrix","DistanceTransform","Distribute","Distributed","DistributedContexts","DistributeDefinitions","DistributionChart","DistributionDomain","DistributionFitTest","DistributionParameterAssumptions","DistributionParameterQ","Dithering","Div","Divergence","Divide","DivideBy","Dividers","DivideSides","Divisible","Divisors","DivisorSigma","DivisorSum","DMSList","DMSString","Do","DockedCell","DockedCells","DocumentGenerator","DocumentGeneratorInformation","DocumentGeneratorInformationData","DocumentGenerators","DocumentNotebook","DocumentWeightingRules","Dodecahedron","DomainRegistrationInformation","DominantColors","DominatorTreeGraph","DominatorVertexList","DOSTextFormat","Dot","DotDashed","DotEqual","DotLayer","DotPlusLayer","Dotted","DoubleBracketingBar","DoubleContourIntegral","DoubleDownArrow","DoubleLeftArrow","DoubleLeftRightArrow","DoubleLeftTee","DoubleLongLeftArrow","DoubleLongLeftRightArrow","DoubleLongRightArrow","DoubleRightArrow","DoubleRightTee","DoubleUpArrow","DoubleUpDownArrow","DoubleVerticalBar","DoublyInfinite","Down","DownArrow","DownArrowBar","DownArrowUpArrow","DownLeftRightVector","DownLeftTeeVector","DownLeftVector","DownLeftVectorBar","DownRightTeeVector","DownRightVector","DownRightVectorBar","Downsample","DownTee","DownTeeArrow","DownValues","DownValuesFunction","DragAndDrop","DrawBackFaces","DrawEdges","DrawFrontFaces","DrawHighlighted","DrazinInverse","Drop","DropoutLayer","DropShadowing","DSolve","DSolveChangeVariables","DSolveValue","Dt","DualLinearProgramming","DualPlanarGraph","DualPolyhedron","DualSystemsModel","DumpGet","DumpSave","DuplicateFreeQ","Duration","Dynamic","DynamicBox","DynamicBoxOptions","DynamicEvaluationTimeout","DynamicGeoGraphics","DynamicImage","DynamicLocation","DynamicModule","DynamicModuleBox","DynamicModuleBoxOptions","DynamicModuleParent","DynamicModuleValues","DynamicName","DynamicNamespace","DynamicReference","DynamicSetting","DynamicUpdating","DynamicWrapper","DynamicWrapperBox","DynamicWrapperBoxOptions","E","EarthImpactData","EarthquakeData","EccentricityCentrality","Echo","EchoEvaluation","EchoFunction","EchoLabel","EchoTiming","EclipseType","EdgeAdd","EdgeBetweennessCentrality","EdgeCapacity","EdgeCapForm","EdgeChromaticNumber","EdgeColor","EdgeConnectivity","EdgeContract","EdgeCost","EdgeCount","EdgeCoverQ","EdgeCycleMatrix","EdgeDashing","EdgeDelete","EdgeDetect","EdgeForm","EdgeIndex","EdgeJoinForm","EdgeLabeling","EdgeLabels","EdgeLabelStyle","EdgeList","EdgeOpacity","EdgeQ","EdgeRenderingFunction","EdgeRules","EdgeShapeFunction","EdgeStyle","EdgeTaggedGraph","EdgeTaggedGraphQ","EdgeTags","EdgeThickness","EdgeTransitiveGraphQ","EdgeValueRange","EdgeValueSizes","EdgeWeight","EdgeWeightedGraphQ","Editable","EditButtonSettings","EditCellTagsSettings","EditDistance","EffectiveInterest","Eigensystem","Eigenvalues","EigenvectorCentrality","Eigenvectors","Element","ElementData","ElementwiseLayer","ElidedForms","Eliminate","EliminationOrder","Ellipsoid","EllipticE","EllipticExp","EllipticExpPrime","EllipticF","EllipticFilterModel","EllipticK","EllipticLog","EllipticNomeQ","EllipticPi","EllipticReducedHalfPeriods","EllipticTheta","EllipticThetaPrime","EmbedCode","EmbeddedHTML","EmbeddedService","EmbeddedSQLEntityClass","EmbeddedSQLExpression","EmbeddingLayer","EmbeddingObject","EmitSound","EmphasizeSyntaxErrors","EmpiricalDistribution","Empty","EmptyGraphQ","EmptyRegion","EmptySpaceF","EnableConsolePrintPacket","Enabled","Enclose","Encode","Encrypt","EncryptedObject","EncryptFile","End","EndAdd","EndDialogPacket","EndOfBuffer","EndOfFile","EndOfLine","EndOfString","EndPackage","EngineEnvironment","EngineeringForm","Enter","EnterExpressionPacket","EnterTextPacket","Entity","EntityClass","EntityClassList","EntityCopies","EntityFunction","EntityGroup","EntityInstance","EntityList","EntityPrefetch","EntityProperties","EntityProperty","EntityPropertyClass","EntityRegister","EntityStore","EntityStores","EntityTypeName","EntityUnregister","EntityValue","Entropy","EntropyFilter","Environment","Epilog","EpilogFunction","Equal","EqualColumns","EqualRows","EqualTilde","EqualTo","EquatedTo","Equilibrium","EquirippleFilterKernel","Equivalent","Erf","Erfc","Erfi","ErlangB","ErlangC","ErlangDistribution","Erosion","ErrorBox","ErrorBoxOptions","ErrorNorm","ErrorPacket","ErrorsDialogSettings","EscapeRadius","EstimatedBackground","EstimatedDistribution","EstimatedPointNormals","EstimatedPointProcess","EstimatedProcess","EstimatedVariogramModel","EstimatorGains","EstimatorRegulator","EuclideanDistance","EulerAngles","EulerCharacteristic","EulerE","EulerGamma","EulerianGraphQ","EulerMatrix","EulerPhi","Evaluatable","Evaluate","Evaluated","EvaluatePacket","EvaluateScheduledTask","EvaluationBox","EvaluationCell","EvaluationCompletionAction","EvaluationData","EvaluationElements","EvaluationEnvironment","EvaluationMode","EvaluationMonitor","EvaluationNotebook","EvaluationObject","EvaluationOrder","EvaluationPrivileges","EvaluationRateLimit","Evaluator","EvaluatorNames","EvenQ","EventData","EventEvaluator","EventHandler","EventHandlerTag","EventLabels","EventSeries","ExactBlackmanWindow","ExactNumberQ","ExactRootIsolation","ExampleData","Except","ExcludedContexts","ExcludedForms","ExcludedLines","ExcludedPhysicalQuantities","ExcludePods","Exclusions","ExclusionsStyle","Exists","Exit","ExitDialog","ExoplanetData","Exp","Expand","ExpandAll","ExpandDenominator","ExpandFileName","ExpandNumerator","Expectation","ExpectationE","ExpectedValue","ExpGammaDistribution","ExpIntegralE","ExpIntegralEi","ExpirationDate","Exponent","ExponentFunction","ExponentialDistribution","ExponentialFamily","ExponentialGeneratingFunction","ExponentialMovingAverage","ExponentialPowerDistribution","ExponentPosition","ExponentStep","Export","ExportAutoReplacements","ExportByteArray","ExportForm","ExportPacket","ExportString","Expression","ExpressionCell","ExpressionGraph","ExpressionPacket","ExpressionTree","ExpressionUUID","ExpToTrig","ExtendedEntityClass","ExtendedGCD","Extension","ExtentElementFunction","ExtentMarkers","ExtentSize","ExternalBundle","ExternalCall","ExternalDataCharacterEncoding","ExternalEvaluate","ExternalFunction","ExternalFunctionName","ExternalIdentifier","ExternalObject","ExternalOptions","ExternalSessionObject","ExternalSessions","ExternalStorageBase","ExternalStorageDownload","ExternalStorageGet","ExternalStorageObject","ExternalStoragePut","ExternalStorageUpload","ExternalTypeSignature","ExternalValue","Extract","ExtractArchive","ExtractLayer","ExtractPacletArchive","ExtremeValueDistribution","FaceAlign","FaceForm","FaceGrids","FaceGridsStyle","FaceRecognize","FacialFeatures","Factor","FactorComplete","Factorial","Factorial2","FactorialMoment","FactorialMomentGeneratingFunction","FactorialPower","FactorInteger","FactorList","FactorSquareFree","FactorSquareFreeList","FactorTerms","FactorTermsList","Fail","Failure","FailureAction","FailureDistribution","FailureQ","False","FareySequence","FARIMAProcess","FeatureDistance","FeatureExtract","FeatureExtraction","FeatureExtractor","FeatureExtractorFunction","FeatureImpactPlot","FeatureNames","FeatureNearest","FeatureSpacePlot","FeatureSpacePlot3D","FeatureTypes","FeatureValueDependencyPlot","FeatureValueImpactPlot","FEDisableConsolePrintPacket","FeedbackLinearize","FeedbackSector","FeedbackSectorStyle","FeedbackType","FEEnableConsolePrintPacket","FetalGrowthData","Fibonacci","Fibonorial","FieldCompletionFunction","FieldHint","FieldHintStyle","FieldMasked","FieldSize","File","FileBaseName","FileByteCount","FileConvert","FileDate","FileExistsQ","FileExtension","FileFormat","FileFormatProperties","FileFormatQ","FileHandler","FileHash","FileInformation","FileName","FileNameDepth","FileNameDialogSettings","FileNameDrop","FileNameForms","FileNameJoin","FileNames","FileNameSetter","FileNameSplit","FileNameTake","FileNameToFormatList","FilePrint","FileSize","FileSystemMap","FileSystemScan","FileSystemTree","FileTemplate","FileTemplateApply","FileType","FilledCurve","FilledCurveBox","FilledCurveBoxOptions","FilledTorus","FillForm","Filling","FillingStyle","FillingTransform","FilteredEntityClass","FilterRules","FinancialBond","FinancialData","FinancialDerivative","FinancialIndicator","Find","FindAnomalies","FindArgMax","FindArgMin","FindChannels","FindClique","FindClusters","FindCookies","FindCurvePath","FindCycle","FindDevices","FindDistribution","FindDistributionParameters","FindDivisions","FindEdgeColoring","FindEdgeCover","FindEdgeCut","FindEdgeIndependentPaths","FindEquationalProof","FindEulerianCycle","FindExternalEvaluators","FindFaces","FindFile","FindFit","FindFormula","FindFundamentalCycles","FindGeneratingFunction","FindGeoLocation","FindGeometricConjectures","FindGeometricTransform","FindGraphCommunities","FindGraphIsomorphism","FindGraphPartition","FindHamiltonianCycle","FindHamiltonianPath","FindHiddenMarkovStates","FindImageText","FindIndependentEdgeSet","FindIndependentVertexSet","FindInstance","FindIntegerNullVector","FindIsomers","FindIsomorphicSubgraph","FindKClan","FindKClique","FindKClub","FindKPlex","FindLibrary","FindLinearRecurrence","FindList","FindMatchingColor","FindMaximum","FindMaximumCut","FindMaximumFlow","FindMaxValue","FindMeshDefects","FindMinimum","FindMinimumCostFlow","FindMinimumCut","FindMinValue","FindMoleculeSubstructure","FindPath","FindPeaks","FindPermutation","FindPlanarColoring","FindPointProcessParameters","FindPostmanTour","FindProcessParameters","FindRegionTransform","FindRepeat","FindRoot","FindSequenceFunction","FindSettings","FindShortestPath","FindShortestTour","FindSpanningTree","FindSubgraphIsomorphism","FindSystemModelEquilibrium","FindTextualAnswer","FindThreshold","FindTransientRepeat","FindVertexColoring","FindVertexCover","FindVertexCut","FindVertexIndependentPaths","Fine","FinishDynamic","FiniteAbelianGroupCount","FiniteGroupCount","FiniteGroupData","First","FirstCase","FirstPassageTimeDistribution","FirstPosition","FischerGroupFi22","FischerGroupFi23","FischerGroupFi24Prime","FisherHypergeometricDistribution","FisherRatioTest","FisherZDistribution","Fit","FitAll","FitRegularization","FittedModel","FixedOrder","FixedPoint","FixedPointList","FlashSelection","Flat","FlatShading","Flatten","FlattenAt","FlattenLayer","FlatTopWindow","FlightData","FlipView","Floor","FlowPolynomial","Fold","FoldList","FoldPair","FoldPairList","FoldWhile","FoldWhileList","FollowRedirects","Font","FontColor","FontFamily","FontForm","FontName","FontOpacity","FontPostScriptName","FontProperties","FontReencoding","FontSize","FontSlant","FontSubstitutions","FontTracking","FontVariations","FontWeight","For","ForAll","ForAllType","ForceVersionInstall","Format","FormatRules","FormatType","FormatTypeAutoConvert","FormatValues","FormBox","FormBoxOptions","FormControl","FormFunction","FormLayoutFunction","FormObject","FormPage","FormProtectionMethod","FormTheme","FormulaData","FormulaLookup","FortranForm","Forward","ForwardBackward","ForwardCloudCredentials","Fourier","FourierCoefficient","FourierCosCoefficient","FourierCosSeries","FourierCosTransform","FourierDCT","FourierDCTFilter","FourierDCTMatrix","FourierDST","FourierDSTMatrix","FourierMatrix","FourierParameters","FourierSequenceTransform","FourierSeries","FourierSinCoefficient","FourierSinSeries","FourierSinTransform","FourierTransform","FourierTrigSeries","FoxH","FoxHReduce","FractionalBrownianMotionProcess","FractionalD","FractionalGaussianNoiseProcess","FractionalPart","FractionBox","FractionBoxOptions","FractionLine","Frame","FrameBox","FrameBoxOptions","Framed","FrameInset","FrameLabel","Frameless","FrameListVideo","FrameMargins","FrameRate","FrameStyle","FrameTicks","FrameTicksStyle","FRatioDistribution","FrechetDistribution","FreeQ","FrenetSerretSystem","FrequencySamplingFilterKernel","FresnelC","FresnelF","FresnelG","FresnelS","Friday","FrobeniusNumber","FrobeniusSolve","FromAbsoluteTime","FromCharacterCode","FromCoefficientRules","FromContinuedFraction","FromDate","FromDateString","FromDigits","FromDMS","FromEntity","FromJulianDate","FromLetterNumber","FromPolarCoordinates","FromRawPointer","FromRomanNumeral","FromSphericalCoordinates","FromUnixTime","Front","FrontEndDynamicExpression","FrontEndEventActions","FrontEndExecute","FrontEndObject","FrontEndResource","FrontEndResourceString","FrontEndStackSize","FrontEndToken","FrontEndTokenExecute","FrontEndValueCache","FrontEndVersion","FrontFaceColor","FrontFaceGlowColor","FrontFaceOpacity","FrontFaceSpecularColor","FrontFaceSpecularExponent","FrontFaceSurfaceAppearance","FrontFaceTexture","Full","FullAxes","FullDefinition","FullForm","FullGraphics","FullInformationOutputRegulator","FullOptions","FullRegion","FullSimplify","Function","FunctionAnalytic","FunctionBijective","FunctionCompile","FunctionCompileExport","FunctionCompileExportByteArray","FunctionCompileExportLibrary","FunctionCompileExportString","FunctionContinuous","FunctionConvexity","FunctionDeclaration","FunctionDiscontinuities","FunctionDomain","FunctionExpand","FunctionInjective","FunctionInterpolation","FunctionLayer","FunctionMeromorphic","FunctionMonotonicity","FunctionPeriod","FunctionPoles","FunctionRange","FunctionSign","FunctionSingularities","FunctionSpace","FunctionSurjective","FussellVeselyImportance","GaborFilter","GaborMatrix","GaborWavelet","GainMargins","GainPhaseMargins","GalaxyData","GalleryView","Gamma","GammaDistribution","GammaRegularized","GapPenalty","GARCHProcess","GatedRecurrentLayer","Gather","GatherBy","GaugeFaceElementFunction","GaugeFaceStyle","GaugeFrameElementFunction","GaugeFrameSize","GaugeFrameStyle","GaugeLabels","GaugeMarkers","GaugeStyle","GaussianFilter","GaussianIntegers","GaussianMatrix","GaussianOrthogonalMatrixDistribution","GaussianSymplecticMatrixDistribution","GaussianUnitaryMatrixDistribution","GaussianWindow","GCD","GegenbauerC","General","GeneralizedLinearModelFit","GenerateAsymmetricKeyPair","GenerateConditions","GeneratedAssetFormat","GeneratedAssetLocation","GeneratedCell","GeneratedCellStyles","GeneratedDocumentBinding","GenerateDerivedKey","GenerateDigitalSignature","GenerateDocument","GeneratedParameters","GeneratedQuantityMagnitudes","GenerateFileSignature","GenerateHTTPResponse","GenerateSecuredAuthenticationKey","GenerateSymmetricKey","GeneratingFunction","GeneratorDescription","GeneratorHistoryLength","GeneratorOutputType","Generic","GenericCylindricalDecomposition","GenomeData","GenomeLookup","GeoAntipode","GeoArea","GeoArraySize","GeoBackground","GeoBoundary","GeoBoundingBox","GeoBounds","GeoBoundsRegion","GeoBoundsRegionBoundary","GeoBubbleChart","GeoCenter","GeoCircle","GeoContourPlot","GeoDensityPlot","GeodesicClosing","GeodesicDilation","GeodesicErosion","GeodesicOpening","GeodesicPolyhedron","GeoDestination","GeodesyData","GeoDirection","GeoDisk","GeoDisplacement","GeoDistance","GeoDistanceList","GeoElevationData","GeoEntities","GeoGraphics","GeoGraphPlot","GeoGraphValuePlot","GeogravityModelData","GeoGridDirectionDifference","GeoGridLines","GeoGridLinesStyle","GeoGridPosition","GeoGridRange","GeoGridRangePadding","GeoGridUnitArea","GeoGridUnitDistance","GeoGridVector","GeoGroup","GeoHemisphere","GeoHemisphereBoundary","GeoHistogram","GeoIdentify","GeoImage","GeoLabels","GeoLength","GeoListPlot","GeoLocation","GeologicalPeriodData","GeomagneticModelData","GeoMarker","GeometricAssertion","GeometricBrownianMotionProcess","GeometricDistribution","GeometricMean","GeometricMeanFilter","GeometricOptimization","GeometricScene","GeometricStep","GeometricStylingRules","GeometricTest","GeometricTransformation","GeometricTransformation3DBox","GeometricTransformation3DBoxOptions","GeometricTransformationBox","GeometricTransformationBoxOptions","GeoModel","GeoNearest","GeoOrientationData","GeoPath","GeoPolygon","GeoPosition","GeoPositionENU","GeoPositionXYZ","GeoProjection","GeoProjectionData","GeoRange","GeoRangePadding","GeoRegionValuePlot","GeoResolution","GeoScaleBar","GeoServer","GeoSmoothHistogram","GeoStreamPlot","GeoStyling","GeoStylingImageFunction","GeoVariant","GeoVector","GeoVectorENU","GeoVectorPlot","GeoVectorXYZ","GeoVisibleRegion","GeoVisibleRegionBoundary","GeoWithinQ","GeoZoomLevel","GestureHandler","GestureHandlerTag","Get","GetContext","GetEnvironment","GetFileName","GetLinebreakInformationPacket","GibbsPointProcess","Glaisher","GlobalClusteringCoefficient","GlobalPreferences","GlobalSession","Glow","GoldenAngle","GoldenRatio","GompertzMakehamDistribution","GoochShading","GoodmanKruskalGamma","GoodmanKruskalGammaTest","Goto","GouraudShading","Grad","Gradient","GradientFilter","GradientFittedMesh","GradientOrientationFilter","GrammarApply","GrammarRules","GrammarToken","Graph","Graph3D","GraphAssortativity","GraphAutomorphismGroup","GraphCenter","GraphComplement","GraphData","GraphDensity","GraphDiameter","GraphDifference","GraphDisjointUnion","GraphDistance","GraphDistanceMatrix","GraphEmbedding","GraphHighlight","GraphHighlightStyle","GraphHub","Graphics","Graphics3D","Graphics3DBox","Graphics3DBoxOptions","GraphicsArray","GraphicsBaseline","GraphicsBox","GraphicsBoxOptions","GraphicsColor","GraphicsColumn","GraphicsComplex","GraphicsComplex3DBox","GraphicsComplex3DBoxOptions","GraphicsComplexBox","GraphicsComplexBoxOptions","GraphicsContents","GraphicsData","GraphicsGrid","GraphicsGridBox","GraphicsGroup","GraphicsGroup3DBox","GraphicsGroup3DBoxOptions","GraphicsGroupBox","GraphicsGroupBoxOptions","GraphicsGrouping","GraphicsHighlightColor","GraphicsRow","GraphicsSpacing","GraphicsStyle","GraphIntersection","GraphJoin","GraphLayerLabels","GraphLayers","GraphLayerStyle","GraphLayout","GraphLinkEfficiency","GraphPeriphery","GraphPlot","GraphPlot3D","GraphPower","GraphProduct","GraphPropertyDistribution","GraphQ","GraphRadius","GraphReciprocity","GraphRoot","GraphStyle","GraphSum","GraphTree","GraphUnion","Gray","GrayLevel","Greater","GreaterEqual","GreaterEqualLess","GreaterEqualThan","GreaterFullEqual","GreaterGreater","GreaterLess","GreaterSlantEqual","GreaterThan","GreaterTilde","GreekStyle","Green","GreenFunction","Grid","GridBaseline","GridBox","GridBoxAlignment","GridBoxBackground","GridBoxDividers","GridBoxFrame","GridBoxItemSize","GridBoxItemStyle","GridBoxOptions","GridBoxSpacings","GridCreationSettings","GridDefaultElement","GridElementStyleOptions","GridFrame","GridFrameMargins","GridGraph","GridLines","GridLinesStyle","GridVideo","GroebnerBasis","GroupActionBase","GroupBy","GroupCentralizer","GroupElementFromWord","GroupElementPosition","GroupElementQ","GroupElements","GroupElementToWord","GroupGenerators","Groupings","GroupMultiplicationTable","GroupOpenerColor","GroupOpenerInsideFrame","GroupOrbits","GroupOrder","GroupPageBreakWithin","GroupSetwiseStabilizer","GroupStabilizer","GroupStabilizerChain","GroupTogetherGrouping","GroupTogetherNestedGrouping","GrowCutComponents","Gudermannian","GuidedFilter","GumbelDistribution","HaarWavelet","HadamardMatrix","HalfLine","HalfNormalDistribution","HalfPlane","HalfSpace","HalftoneShading","HamiltonianGraphQ","HammingDistance","HammingWindow","HandlerFunctions","HandlerFunctionsKeys","HankelH1","HankelH2","HankelMatrix","HankelTransform","HannPoissonWindow","HannWindow","HaradaNortonGroupHN","HararyGraph","HardcorePointProcess","HarmonicMean","HarmonicMeanFilter","HarmonicNumber","Hash","HatchFilling","HatchShading","Haversine","HazardFunction","Head","HeadCompose","HeaderAlignment","HeaderBackground","HeaderDisplayFunction","HeaderLines","Headers","HeaderSize","HeaderStyle","Heads","HeatFluxValue","HeatInsulationValue","HeatOutflowValue","HeatRadiationValue","HeatSymmetryValue","HeatTemperatureCondition","HeatTransferPDEComponent","HeatTransferValue","HeavisideLambda","HeavisidePi","HeavisideTheta","HeldGroupHe","HeldPart","HelmholtzPDEComponent","HelpBrowserLookup","HelpBrowserNotebook","HelpBrowserSettings","HelpViewerSettings","Here","HermiteDecomposition","HermiteH","Hermitian","HermitianMatrixQ","HessenbergDecomposition","Hessian","HeunB","HeunBPrime","HeunC","HeunCPrime","HeunD","HeunDPrime","HeunG","HeunGPrime","HeunT","HeunTPrime","HexadecimalCharacter","Hexahedron","HexahedronBox","HexahedronBoxOptions","HiddenItems","HiddenMarkovProcess","HiddenSurface","Highlighted","HighlightGraph","HighlightImage","HighlightMesh","HighlightString","HighpassFilter","HigmanSimsGroupHS","HilbertCurve","HilbertFilter","HilbertMatrix","Histogram","Histogram3D","HistogramDistribution","HistogramList","HistogramPointDensity","HistogramTransform","HistogramTransformInterpolation","HistoricalPeriodData","HitMissTransform","HITSCentrality","HjorthDistribution","HodgeDual","HoeffdingD","HoeffdingDTest","Hold","HoldAll","HoldAllComplete","HoldComplete","HoldFirst","HoldForm","HoldPattern","HoldRest","HolidayCalendar","HomeDirectory","HomePage","Horizontal","HorizontalForm","HorizontalGauge","HorizontalScrollPosition","HornerForm","HostLookup","HotellingTSquareDistribution","HoytDistribution","HTMLSave","HTTPErrorResponse","HTTPRedirect","HTTPRequest","HTTPRequestData","HTTPResponse","Hue","HumanGrowthData","HumpDownHump","HumpEqual","HurwitzLerchPhi","HurwitzZeta","HyperbolicDistribution","HypercubeGraph","HyperexponentialDistribution","Hyperfactorial","Hypergeometric0F1","Hypergeometric0F1Regularized","Hypergeometric1F1","Hypergeometric1F1Regularized","Hypergeometric2F1","Hypergeometric2F1Regularized","HypergeometricDistribution","HypergeometricPFQ","HypergeometricPFQRegularized","HypergeometricU","Hyperlink","HyperlinkAction","HyperlinkCreationSettings","Hyperplane","Hyphenation","HyphenationOptions","HypoexponentialDistribution","HypothesisTestData","I","IconData","Iconize","IconizedObject","IconRules","Icosahedron","Identity","IdentityMatrix","If","IfCompiled","IgnoreCase","IgnoreDiacritics","IgnoreIsotopes","IgnorePunctuation","IgnoreSpellCheck","IgnoreStereochemistry","IgnoringInactive","Im","Image","Image3D","Image3DProjection","Image3DSlices","ImageAccumulate","ImageAdd","ImageAdjust","ImageAlign","ImageApply","ImageApplyIndexed","ImageAspectRatio","ImageAssemble","ImageAugmentationLayer","ImageBoundingBoxes","ImageCache","ImageCacheValid","ImageCapture","ImageCaptureFunction","ImageCases","ImageChannels","ImageClip","ImageCollage","ImageColorSpace","ImageCompose","ImageContainsQ","ImageContents","ImageConvolve","ImageCooccurrence","ImageCorners","ImageCorrelate","ImageCorrespondingPoints","ImageCrop","ImageData","ImageDeconvolve","ImageDemosaic","ImageDifference","ImageDimensions","ImageDisplacements","ImageDistance","ImageEditMode","ImageEffect","ImageExposureCombine","ImageFeatureTrack","ImageFileApply","ImageFileFilter","ImageFileScan","ImageFilter","ImageFocusCombine","ImageForestingComponents","ImageFormattingWidth","ImageForwardTransformation","ImageGraphics","ImageHistogram","ImageIdentify","ImageInstanceQ","ImageKeypoints","ImageLabels","ImageLegends","ImageLevels","ImageLines","ImageMargins","ImageMarker","ImageMarkers","ImageMeasurements","ImageMesh","ImageMultiply","ImageOffset","ImagePad","ImagePadding","ImagePartition","ImagePeriodogram","ImagePerspectiveTransformation","ImagePosition","ImagePreviewFunction","ImagePyramid","ImagePyramidApply","ImageQ","ImageRangeCache","ImageRecolor","ImageReflect","ImageRegion","ImageResize","ImageResolution","ImageRestyle","ImageRotate","ImageRotated","ImageSaliencyFilter","ImageScaled","ImageScan","ImageSize","ImageSizeAction","ImageSizeCache","ImageSizeMultipliers","ImageSizeRaw","ImageStitch","ImageSubtract","ImageTake","ImageTransformation","ImageTrim","ImageType","ImageValue","ImageValuePositions","ImageVectorscopePlot","ImageWaveformPlot","ImagingDevice","ImplicitD","ImplicitRegion","Implies","Import","ImportAutoReplacements","ImportByteArray","ImportedObject","ImportOptions","ImportString","ImprovementImportance","In","Inactivate","Inactive","InactiveStyle","IncidenceGraph","IncidenceList","IncidenceMatrix","IncludeAromaticBonds","IncludeConstantBasis","IncludedContexts","IncludeDefinitions","IncludeDirectories","IncludeFileExtension","IncludeGeneratorTasks","IncludeHydrogens","IncludeInflections","IncludeMetaInformation","IncludePods","IncludeQuantities","IncludeRelatedTables","IncludeSingularSolutions","IncludeSingularTerm","IncludeWindowTimes","Increment","IndefiniteMatrixQ","Indent","IndentingNewlineSpacings","IndentMaxFraction","IndependenceTest","IndependentEdgeSetQ","IndependentPhysicalQuantity","IndependentUnit","IndependentUnitDimension","IndependentVertexSetQ","Indeterminate","IndeterminateThreshold","IndexCreationOptions","Indexed","IndexEdgeTaggedGraph","IndexGraph","IndexTag","Inequality","InertEvaluate","InertExpression","InexactNumberQ","InexactNumbers","InfiniteFuture","InfiniteLine","InfiniteLineThrough","InfinitePast","InfinitePlane","Infinity","Infix","InflationAdjust","InflationMethod","Information","InformationData","InformationDataGrid","Inherited","InheritScope","InhomogeneousPoissonPointProcess","InhomogeneousPoissonProcess","InitialEvaluationHistory","Initialization","InitializationCell","InitializationCellEvaluation","InitializationCellWarning","InitializationObject","InitializationObjects","InitializationValue","Initialize","InitialSeeding","InlineCounterAssignments","InlineCounterIncrements","InlineRules","Inner","InnerPolygon","InnerPolyhedron","Inpaint","Input","InputAliases","InputAssumptions","InputAutoReplacements","InputField","InputFieldBox","InputFieldBoxOptions","InputForm","InputGrouping","InputNamePacket","InputNotebook","InputPacket","InputPorts","InputSettings","InputStream","InputString","InputStringPacket","InputToBoxFormPacket","Insert","InsertionFunction","InsertionPointObject","InsertLinebreaks","InsertResults","Inset","Inset3DBox","Inset3DBoxOptions","InsetBox","InsetBoxOptions","Insphere","Install","InstallService","InstanceNormalizationLayer","InString","Integer","IntegerDigits","IntegerExponent","IntegerLength","IntegerName","IntegerPart","IntegerPartitions","IntegerQ","IntegerReverse","Integers","IntegerString","Integral","Integrate","IntegrateChangeVariables","Interactive","InteractiveTradingChart","InterfaceSwitched","Interlaced","Interleaving","InternallyBalancedDecomposition","InterpolatingFunction","InterpolatingPolynomial","Interpolation","InterpolationOrder","InterpolationPoints","InterpolationPrecision","Interpretation","InterpretationBox","InterpretationBoxOptions","InterpretationFunction","Interpreter","InterpretTemplate","InterquartileRange","Interrupt","InterruptSettings","IntersectedEntityClass","IntersectingQ","Intersection","Interval","IntervalIntersection","IntervalMarkers","IntervalMarkersStyle","IntervalMemberQ","IntervalSlider","IntervalUnion","Into","Inverse","InverseBetaRegularized","InverseBilateralLaplaceTransform","InverseBilateralZTransform","InverseCDF","InverseChiSquareDistribution","InverseContinuousWaveletTransform","InverseDistanceTransform","InverseEllipticNomeQ","InverseErf","InverseErfc","InverseFourier","InverseFourierCosTransform","InverseFourierSequenceTransform","InverseFourierSinTransform","InverseFourierTransform","InverseFunction","InverseFunctions","InverseGammaDistribution","InverseGammaRegularized","InverseGaussianDistribution","InverseGudermannian","InverseHankelTransform","InverseHaversine","InverseImagePyramid","InverseJacobiCD","InverseJacobiCN","InverseJacobiCS","InverseJacobiDC","InverseJacobiDN","InverseJacobiDS","InverseJacobiNC","InverseJacobiND","InverseJacobiNS","InverseJacobiSC","InverseJacobiSD","InverseJacobiSN","InverseLaplaceTransform","InverseMellinTransform","InversePermutation","InverseRadon","InverseRadonTransform","InverseSeries","InverseShortTimeFourier","InverseSpectrogram","InverseSurvivalFunction","InverseTransformedRegion","InverseWaveletTransform","InverseWeierstrassP","InverseWishartMatrixDistribution","InverseZTransform","Invisible","InvisibleApplication","InvisibleTimes","IPAddress","IrreduciblePolynomialQ","IslandData","IsolatingInterval","IsomorphicGraphQ","IsomorphicSubgraphQ","IsotopeData","Italic","Item","ItemAspectRatio","ItemBox","ItemBoxOptions","ItemDisplayFunction","ItemSize","ItemStyle","ItoProcess","JaccardDissimilarity","JacobiAmplitude","Jacobian","JacobiCD","JacobiCN","JacobiCS","JacobiDC","JacobiDN","JacobiDS","JacobiEpsilon","JacobiNC","JacobiND","JacobiNS","JacobiP","JacobiSC","JacobiSD","JacobiSN","JacobiSymbol","JacobiZeta","JacobiZN","JankoGroupJ1","JankoGroupJ2","JankoGroupJ3","JankoGroupJ4","JarqueBeraALMTest","JohnsonDistribution","Join","JoinAcross","Joined","JoinedCurve","JoinedCurveBox","JoinedCurveBoxOptions","JoinForm","JordanDecomposition","JordanModelDecomposition","JulianDate","JuliaSetBoettcher","JuliaSetIterationCount","JuliaSetPlot","JuliaSetPoints","K","KagiChart","KaiserBesselWindow","KaiserWindow","KalmanEstimator","KalmanFilter","KarhunenLoeveDecomposition","KaryTree","KatzCentrality","KCoreComponents","KDistribution","KEdgeConnectedComponents","KEdgeConnectedGraphQ","KeepExistingVersion","KelvinBei","KelvinBer","KelvinKei","KelvinKer","KendallTau","KendallTauTest","KernelConfiguration","KernelExecute","KernelFunction","KernelMixtureDistribution","KernelObject","Kernels","Ket","Key","KeyCollisionFunction","KeyComplement","KeyDrop","KeyDropFrom","KeyExistsQ","KeyFreeQ","KeyIntersection","KeyMap","KeyMemberQ","KeypointStrength","Keys","KeySelect","KeySort","KeySortBy","KeyTake","KeyUnion","KeyValueMap","KeyValuePattern","Khinchin","KillProcess","KirchhoffGraph","KirchhoffMatrix","KleinInvariantJ","KnapsackSolve","KnightTourGraph","KnotData","KnownUnitQ","KochCurve","KolmogorovSmirnovTest","KroneckerDelta","KroneckerModelDecomposition","KroneckerProduct","KroneckerSymbol","KuiperTest","KumaraswamyDistribution","Kurtosis","KuwaharaFilter","KVertexConnectedComponents","KVertexConnectedGraphQ","LABColor","Label","Labeled","LabeledSlider","LabelingFunction","LabelingSize","LabelStyle","LabelVisibility","LaguerreL","LakeData","LambdaComponents","LambertW","LameC","LameCPrime","LameEigenvalueA","LameEigenvalueB","LameS","LameSPrime","LaminaData","LanczosWindow","LandauDistribution","Language","LanguageCategory","LanguageData","LanguageIdentify","LanguageOptions","LaplaceDistribution","LaplaceTransform","Laplacian","LaplacianFilter","LaplacianGaussianFilter","LaplacianPDETerm","Large","Larger","Last","Latitude","LatitudeLongitude","LatticeData","LatticeReduce","Launch","LaunchKernels","LayeredGraphPlot","LayeredGraphPlot3D","LayerSizeFunction","LayoutInformation","LCHColor","LCM","LeaderSize","LeafCount","LeapVariant","LeapYearQ","LearnDistribution","LearnedDistribution","LearningRate","LearningRateMultipliers","LeastSquares","LeastSquaresFilterKernel","Left","LeftArrow","LeftArrowBar","LeftArrowRightArrow","LeftDownTeeVector","LeftDownVector","LeftDownVectorBar","LeftRightArrow","LeftRightVector","LeftTee","LeftTeeArrow","LeftTeeVector","LeftTriangle","LeftTriangleBar","LeftTriangleEqual","LeftUpDownVector","LeftUpTeeVector","LeftUpVector","LeftUpVectorBar","LeftVector","LeftVectorBar","LegendAppearance","Legended","LegendFunction","LegendLabel","LegendLayout","LegendMargins","LegendMarkers","LegendMarkerSize","LegendreP","LegendreQ","LegendreType","Length","LengthWhile","LerchPhi","Less","LessEqual","LessEqualGreater","LessEqualThan","LessFullEqual","LessGreater","LessLess","LessSlantEqual","LessThan","LessTilde","LetterCharacter","LetterCounts","LetterNumber","LetterQ","Level","LeveneTest","LeviCivitaTensor","LevyDistribution","Lexicographic","LexicographicOrder","LexicographicSort","LibraryDataType","LibraryFunction","LibraryFunctionDeclaration","LibraryFunctionError","LibraryFunctionInformation","LibraryFunctionLoad","LibraryFunctionUnload","LibraryLoad","LibraryUnload","LicenseEntitlementObject","LicenseEntitlements","LicenseID","LicensingSettings","LiftingFilterData","LiftingWaveletTransform","LightBlue","LightBrown","LightCyan","Lighter","LightGray","LightGreen","Lighting","LightingAngle","LightMagenta","LightOrange","LightPink","LightPurple","LightRed","LightSources","LightYellow","Likelihood","Limit","LimitsPositioning","LimitsPositioningTokens","LindleyDistribution","Line","Line3DBox","Line3DBoxOptions","LinearFilter","LinearFractionalOptimization","LinearFractionalTransform","LinearGradientFilling","LinearGradientImage","LinearizingTransformationData","LinearLayer","LinearModelFit","LinearOffsetFunction","LinearOptimization","LinearProgramming","LinearRecurrence","LinearSolve","LinearSolveFunction","LineBox","LineBoxOptions","LineBreak","LinebreakAdjustments","LineBreakChart","LinebreakSemicolonWeighting","LineBreakWithin","LineColor","LineGraph","LineIndent","LineIndentMaxFraction","LineIntegralConvolutionPlot","LineIntegralConvolutionScale","LineLegend","LineOpacity","LineSpacing","LineWrapParts","LinkActivate","LinkClose","LinkConnect","LinkConnectedQ","LinkCreate","LinkError","LinkFlush","LinkFunction","LinkHost","LinkInterrupt","LinkLaunch","LinkMode","LinkObject","LinkOpen","LinkOptions","LinkPatterns","LinkProtocol","LinkRankCentrality","LinkRead","LinkReadHeld","LinkReadyQ","Links","LinkService","LinkWrite","LinkWriteHeld","LiouvilleLambda","List","Listable","ListAnimate","ListContourPlot","ListContourPlot3D","ListConvolve","ListCorrelate","ListCurvePathPlot","ListDeconvolve","ListDensityPlot","ListDensityPlot3D","Listen","ListFormat","ListFourierSequenceTransform","ListInterpolation","ListLineIntegralConvolutionPlot","ListLinePlot","ListLinePlot3D","ListLogLinearPlot","ListLogLogPlot","ListLogPlot","ListPicker","ListPickerBox","ListPickerBoxBackground","ListPickerBoxOptions","ListPlay","ListPlot","ListPlot3D","ListPointPlot3D","ListPolarPlot","ListQ","ListSliceContourPlot3D","ListSliceDensityPlot3D","ListSliceVectorPlot3D","ListStepPlot","ListStreamDensityPlot","ListStreamPlot","ListStreamPlot3D","ListSurfacePlot3D","ListVectorDensityPlot","ListVectorDisplacementPlot","ListVectorDisplacementPlot3D","ListVectorPlot","ListVectorPlot3D","ListZTransform","Literal","LiteralSearch","LiteralType","LoadCompiledComponent","LocalAdaptiveBinarize","LocalCache","LocalClusteringCoefficient","LocalEvaluate","LocalizeDefinitions","LocalizeVariables","LocalObject","LocalObjects","LocalResponseNormalizationLayer","LocalSubmit","LocalSymbol","LocalTime","LocalTimeZone","LocationEquivalenceTest","LocationTest","Locator","LocatorAutoCreate","LocatorBox","LocatorBoxOptions","LocatorCentering","LocatorPane","LocatorPaneBox","LocatorPaneBoxOptions","LocatorRegion","Locked","Log","Log10","Log2","LogBarnesG","LogGamma","LogGammaDistribution","LogicalExpand","LogIntegral","LogisticDistribution","LogisticSigmoid","LogitModelFit","LogLikelihood","LogLinearPlot","LogLogisticDistribution","LogLogPlot","LogMultinormalDistribution","LogNormalDistribution","LogPlot","LogRankTest","LogSeriesDistribution","LongEqual","Longest","LongestCommonSequence","LongestCommonSequencePositions","LongestCommonSubsequence","LongestCommonSubsequencePositions","LongestMatch","LongestOrderedSequence","LongForm","Longitude","LongLeftArrow","LongLeftRightArrow","LongRightArrow","LongShortTermMemoryLayer","Lookup","Loopback","LoopFreeGraphQ","Looping","LossFunction","LowerCaseQ","LowerLeftArrow","LowerRightArrow","LowerTriangularize","LowerTriangularMatrix","LowerTriangularMatrixQ","LowpassFilter","LQEstimatorGains","LQGRegulator","LQOutputRegulatorGains","LQRegulatorGains","LUBackSubstitution","LucasL","LuccioSamiComponents","LUDecomposition","LunarEclipse","LUVColor","LyapunovSolve","LyonsGroupLy","MachineID","MachineName","MachineNumberQ","MachinePrecision","MacintoshSystemPageSetup","Magenta","Magnification","Magnify","MailAddressValidation","MailExecute","MailFolder","MailItem","MailReceiverFunction","MailResponseFunction","MailSearch","MailServerConnect","MailServerConnection","MailSettings","MainSolve","MaintainDynamicCaches","Majority","MakeBoxes","MakeExpression","MakeRules","ManagedLibraryExpressionID","ManagedLibraryExpressionQ","MandelbrotSetBoettcher","MandelbrotSetDistance","MandelbrotSetIterationCount","MandelbrotSetMemberQ","MandelbrotSetPlot","MangoldtLambda","ManhattanDistance","Manipulate","Manipulator","MannedSpaceMissionData","MannWhitneyTest","MantissaExponent","Manual","Map","MapAll","MapApply","MapAt","MapIndexed","MAProcess","MapThread","MarchenkoPasturDistribution","MarcumQ","MardiaCombinedTest","MardiaKurtosisTest","MardiaSkewnessTest","MarginalDistribution","MarkovProcessProperties","Masking","MassConcentrationCondition","MassFluxValue","MassImpermeableBoundaryValue","MassOutflowValue","MassSymmetryValue","MassTransferValue","MassTransportPDEComponent","MatchingDissimilarity","MatchLocalNameQ","MatchLocalNames","MatchQ","Material","MaterialShading","MaternPointProcess","MathematicalFunctionData","MathematicaNotation","MathieuC","MathieuCharacteristicA","MathieuCharacteristicB","MathieuCharacteristicExponent","MathieuCPrime","MathieuGroupM11","MathieuGroupM12","MathieuGroupM22","MathieuGroupM23","MathieuGroupM24","MathieuS","MathieuSPrime","MathMLForm","MathMLText","Matrices","MatrixExp","MatrixForm","MatrixFunction","MatrixLog","MatrixNormalDistribution","MatrixPlot","MatrixPower","MatrixPropertyDistribution","MatrixQ","MatrixRank","MatrixTDistribution","Max","MaxBend","MaxCellMeasure","MaxColorDistance","MaxDate","MaxDetect","MaxDisplayedChildren","MaxDuration","MaxExtraBandwidths","MaxExtraConditions","MaxFeatureDisplacement","MaxFeatures","MaxFilter","MaximalBy","Maximize","MaxItems","MaxIterations","MaxLimit","MaxMemoryUsed","MaxMixtureKernels","MaxOverlapFraction","MaxPlotPoints","MaxPoints","MaxRecursion","MaxStableDistribution","MaxStepFraction","MaxSteps","MaxStepSize","MaxTrainingRounds","MaxValue","MaxwellDistribution","MaxWordGap","McLaughlinGroupMcL","Mean","MeanAbsoluteLossLayer","MeanAround","MeanClusteringCoefficient","MeanDegreeConnectivity","MeanDeviation","MeanFilter","MeanGraphDistance","MeanNeighborDegree","MeanPointDensity","MeanShift","MeanShiftFilter","MeanSquaredLossLayer","Median","MedianDeviation","MedianFilter","MedicalTestData","Medium","MeijerG","MeijerGReduce","MeixnerDistribution","MellinConvolve","MellinTransform","MemberQ","MemoryAvailable","MemoryConstrained","MemoryConstraint","MemoryInUse","MengerMesh","Menu","MenuAppearance","MenuCommandKey","MenuEvaluator","MenuItem","MenuList","MenuPacket","MenuSortingValue","MenuStyle","MenuView","Merge","MergeDifferences","MergingFunction","MersennePrimeExponent","MersennePrimeExponentQ","Mesh","MeshCellCentroid","MeshCellCount","MeshCellHighlight","MeshCellIndex","MeshCellLabel","MeshCellMarker","MeshCellMeasure","MeshCellQuality","MeshCells","MeshCellShapeFunction","MeshCellStyle","MeshConnectivityGraph","MeshCoordinates","MeshFunctions","MeshPrimitives","MeshQualityGoal","MeshRange","MeshRefinementFunction","MeshRegion","MeshRegionQ","MeshShading","MeshStyle","Message","MessageDialog","MessageList","MessageName","MessageObject","MessageOptions","MessagePacket","Messages","MessagesNotebook","MetaCharacters","MetaInformation","MeteorShowerData","Method","MethodOptions","MexicanHatWavelet","MeyerWavelet","Midpoint","MIMETypeToFormatList","Min","MinColorDistance","MinDate","MinDetect","MineralData","MinFilter","MinimalBy","MinimalPolynomial","MinimalStateSpaceModel","Minimize","MinimumTimeIncrement","MinIntervalSize","MinkowskiQuestionMark","MinLimit","MinMax","MinorPlanetData","Minors","MinPointSeparation","MinRecursion","MinSize","MinStableDistribution","Minus","MinusPlus","MinValue","Missing","MissingBehavior","MissingDataMethod","MissingDataRules","MissingQ","MissingString","MissingStyle","MissingValuePattern","MissingValueSynthesis","MittagLefflerE","MixedFractionParts","MixedGraphQ","MixedMagnitude","MixedRadix","MixedRadixQuantity","MixedUnit","MixtureDistribution","Mod","Modal","Mode","ModelPredictiveController","Modular","ModularInverse","ModularLambda","Module","Modulus","MoebiusMu","Molecule","MoleculeAlign","MoleculeContainsQ","MoleculeDraw","MoleculeEquivalentQ","MoleculeFreeQ","MoleculeGraph","MoleculeMatchQ","MoleculeMaximumCommonSubstructure","MoleculeModify","MoleculeName","MoleculePattern","MoleculePlot","MoleculePlot3D","MoleculeProperty","MoleculeQ","MoleculeRecognize","MoleculeSubstructureCount","MoleculeValue","Moment","MomentConvert","MomentEvaluate","MomentGeneratingFunction","MomentOfInertia","Monday","Monitor","MonomialList","MonomialOrder","MonsterGroupM","MoonPhase","MoonPosition","MorletWavelet","MorphologicalBinarize","MorphologicalBranchPoints","MorphologicalComponents","MorphologicalEulerNumber","MorphologicalGraph","MorphologicalPerimeter","MorphologicalTransform","MortalityData","Most","MountainData","MouseAnnotation","MouseAppearance","MouseAppearanceTag","MouseButtons","Mouseover","MousePointerNote","MousePosition","MovieData","MovingAverage","MovingMap","MovingMedian","MoyalDistribution","MultiaxisArrangement","Multicolumn","MultiedgeStyle","MultigraphQ","MultilaunchWarning","MultiLetterItalics","MultiLetterStyle","MultilineFunction","Multinomial","MultinomialDistribution","MultinormalDistribution","MultiplicativeOrder","Multiplicity","MultiplySides","MultiscriptBoxOptions","Multiselection","MultivariateHypergeometricDistribution","MultivariatePoissonDistribution","MultivariateTDistribution","N","NakagamiDistribution","NameQ","Names","NamespaceBox","NamespaceBoxOptions","Nand","NArgMax","NArgMin","NBernoulliB","NBodySimulation","NBodySimulationData","NCache","NCaputoD","NDEigensystem","NDEigenvalues","NDSolve","NDSolveValue","Nearest","NearestFunction","NearestMeshCells","NearestNeighborG","NearestNeighborGraph","NearestTo","NebulaData","NeedlemanWunschSimilarity","Needs","Negative","NegativeBinomialDistribution","NegativeDefiniteMatrixQ","NegativeIntegers","NegativelyOrientedPoints","NegativeMultinomialDistribution","NegativeRationals","NegativeReals","NegativeSemidefiniteMatrixQ","NeighborhoodData","NeighborhoodGraph","Nest","NestedGreaterGreater","NestedLessLess","NestedScriptRules","NestGraph","NestList","NestTree","NestWhile","NestWhileList","NetAppend","NetArray","NetArrayLayer","NetBidirectionalOperator","NetChain","NetDecoder","NetDelete","NetDrop","NetEncoder","NetEvaluationMode","NetExternalObject","NetExtract","NetFlatten","NetFoldOperator","NetGANOperator","NetGraph","NetInformation","NetInitialize","NetInsert","NetInsertSharedArrays","NetJoin","NetMapOperator","NetMapThreadOperator","NetMeasurements","NetModel","NetNestOperator","NetPairEmbeddingOperator","NetPort","NetPortGradient","NetPrepend","NetRename","NetReplace","NetReplacePart","NetSharedArray","NetStateObject","NetTake","NetTrain","NetTrainResultsObject","NetUnfold","NetworkPacketCapture","NetworkPacketRecording","NetworkPacketRecordingDuring","NetworkPacketTrace","NeumannValue","NevilleThetaC","NevilleThetaD","NevilleThetaN","NevilleThetaS","NewPrimitiveStyle","NExpectation","Next","NextCell","NextDate","NextPrime","NextScheduledTaskTime","NeymanScottPointProcess","NFractionalD","NHoldAll","NHoldFirst","NHoldRest","NicholsGridLines","NicholsPlot","NightHemisphere","NIntegrate","NMaximize","NMaxValue","NMinimize","NMinValue","NominalScale","NominalVariables","NonAssociative","NoncentralBetaDistribution","NoncentralChiSquareDistribution","NoncentralFRatioDistribution","NoncentralStudentTDistribution","NonCommutativeMultiply","NonConstants","NondimensionalizationTransform","None","NoneTrue","NonlinearModelFit","NonlinearStateSpaceModel","NonlocalMeansFilter","NonNegative","NonNegativeIntegers","NonNegativeRationals","NonNegativeReals","NonPositive","NonPositiveIntegers","NonPositiveRationals","NonPositiveReals","Nor","NorlundB","Norm","Normal","NormalDistribution","NormalGrouping","NormalizationLayer","Normalize","Normalized","NormalizedSquaredEuclideanDistance","NormalMatrixQ","NormalsFunction","NormFunction","Not","NotCongruent","NotCupCap","NotDoubleVerticalBar","Notebook","NotebookApply","NotebookAutoSave","NotebookBrowseDirectory","NotebookClose","NotebookConvertSettings","NotebookCreate","NotebookDefault","NotebookDelete","NotebookDirectory","NotebookDynamicExpression","NotebookEvaluate","NotebookEventActions","NotebookFileName","NotebookFind","NotebookGet","NotebookImport","NotebookInformation","NotebookInterfaceObject","NotebookLocate","NotebookObject","NotebookOpen","NotebookPath","NotebookPrint","NotebookPut","NotebookRead","Notebooks","NotebookSave","NotebookSelection","NotebooksMenu","NotebookTemplate","NotebookWrite","NotElement","NotEqualTilde","NotExists","NotGreater","NotGreaterEqual","NotGreaterFullEqual","NotGreaterGreater","NotGreaterLess","NotGreaterSlantEqual","NotGreaterTilde","Nothing","NotHumpDownHump","NotHumpEqual","NotificationFunction","NotLeftTriangle","NotLeftTriangleBar","NotLeftTriangleEqual","NotLess","NotLessEqual","NotLessFullEqual","NotLessGreater","NotLessLess","NotLessSlantEqual","NotLessTilde","NotNestedGreaterGreater","NotNestedLessLess","NotPrecedes","NotPrecedesEqual","NotPrecedesSlantEqual","NotPrecedesTilde","NotReverseElement","NotRightTriangle","NotRightTriangleBar","NotRightTriangleEqual","NotSquareSubset","NotSquareSubsetEqual","NotSquareSuperset","NotSquareSupersetEqual","NotSubset","NotSubsetEqual","NotSucceeds","NotSucceedsEqual","NotSucceedsSlantEqual","NotSucceedsTilde","NotSuperset","NotSupersetEqual","NotTilde","NotTildeEqual","NotTildeFullEqual","NotTildeTilde","NotVerticalBar","Now","NoWhitespace","NProbability","NProduct","NProductFactors","NRoots","NSolve","NSolveValues","NSum","NSumTerms","NuclearExplosionData","NuclearReactorData","Null","NullRecords","NullSpace","NullWords","Number","NumberCompose","NumberDecompose","NumberDigit","NumberExpand","NumberFieldClassNumber","NumberFieldDiscriminant","NumberFieldFundamentalUnits","NumberFieldIntegralBasis","NumberFieldNormRepresentatives","NumberFieldRegulator","NumberFieldRootsOfUnity","NumberFieldSignature","NumberForm","NumberFormat","NumberLinePlot","NumberMarks","NumberMultiplier","NumberPadding","NumberPoint","NumberQ","NumberSeparator","NumberSigns","NumberString","Numerator","NumeratorDenominator","NumericalOrder","NumericalSort","NumericArray","NumericArrayQ","NumericArrayType","NumericFunction","NumericQ","NuttallWindow","NValues","NyquistGridLines","NyquistPlot","O","ObjectExistsQ","ObservabilityGramian","ObservabilityMatrix","ObservableDecomposition","ObservableModelQ","OceanData","Octahedron","OddQ","Off","Offset","OLEData","On","ONanGroupON","Once","OneIdentity","Opacity","OpacityFunction","OpacityFunctionScaling","Open","OpenAppend","Opener","OpenerBox","OpenerBoxOptions","OpenerView","OpenFunctionInspectorPacket","Opening","OpenRead","OpenSpecialOptions","OpenTemporary","OpenWrite","Operate","OperatingSystem","OperatorApplied","OptimumFlowData","Optional","OptionalElement","OptionInspectorSettings","OptionQ","Options","OptionsPacket","OptionsPattern","OptionValue","OptionValueBox","OptionValueBoxOptions","Or","Orange","Order","OrderDistribution","OrderedQ","Ordering","OrderingBy","OrderingLayer","Orderless","OrderlessPatternSequence","OrdinalScale","OrnsteinUhlenbeckProcess","Orthogonalize","OrthogonalMatrixQ","Out","Outer","OuterPolygon","OuterPolyhedron","OutputAutoOverwrite","OutputControllabilityMatrix","OutputControllableModelQ","OutputForm","OutputFormData","OutputGrouping","OutputMathEditExpression","OutputNamePacket","OutputPorts","OutputResponse","OutputSizeLimit","OutputStream","Over","OverBar","OverDot","Overflow","OverHat","Overlaps","Overlay","OverlayBox","OverlayBoxOptions","OverlayVideo","Overscript","OverscriptBox","OverscriptBoxOptions","OverTilde","OverVector","OverwriteTarget","OwenT","OwnValues","Package","PackingMethod","PackPaclet","PacletDataRebuild","PacletDirectoryAdd","PacletDirectoryLoad","PacletDirectoryRemove","PacletDirectoryUnload","PacletDisable","PacletEnable","PacletFind","PacletFindRemote","PacletInformation","PacletInstall","PacletInstallSubmit","PacletNewerQ","PacletObject","PacletObjectQ","PacletSite","PacletSiteObject","PacletSiteRegister","PacletSites","PacletSiteUnregister","PacletSiteUpdate","PacletSymbol","PacletUninstall","PacletUpdate","PaddedForm","Padding","PaddingLayer","PaddingSize","PadeApproximant","PadLeft","PadRight","PageBreakAbove","PageBreakBelow","PageBreakWithin","PageFooterLines","PageFooters","PageHeaderLines","PageHeaders","PageHeight","PageRankCentrality","PageTheme","PageWidth","Pagination","PairCorrelationG","PairedBarChart","PairedHistogram","PairedSmoothHistogram","PairedTTest","PairedZTest","PaletteNotebook","PalettePath","PalettesMenuSettings","PalindromeQ","Pane","PaneBox","PaneBoxOptions","Panel","PanelBox","PanelBoxOptions","Paneled","PaneSelector","PaneSelectorBox","PaneSelectorBoxOptions","PaperWidth","ParabolicCylinderD","ParagraphIndent","ParagraphSpacing","ParallelArray","ParallelAxisPlot","ParallelCombine","ParallelDo","Parallelepiped","ParallelEvaluate","Parallelization","Parallelize","ParallelKernels","ParallelMap","ParallelNeeds","Parallelogram","ParallelProduct","ParallelSubmit","ParallelSum","ParallelTable","ParallelTry","Parameter","ParameterEstimator","ParameterMixtureDistribution","ParameterVariables","ParametricConvexOptimization","ParametricFunction","ParametricNDSolve","ParametricNDSolveValue","ParametricPlot","ParametricPlot3D","ParametricRampLayer","ParametricRegion","ParentBox","ParentCell","ParentConnect","ParentDirectory","ParentEdgeLabel","ParentEdgeLabelFunction","ParentEdgeLabelStyle","ParentEdgeShapeFunction","ParentEdgeStyle","ParentEdgeStyleFunction","ParentForm","Parenthesize","ParentList","ParentNotebook","ParetoDistribution","ParetoPickandsDistribution","ParkData","Part","PartBehavior","PartialCorrelationFunction","PartialD","ParticleAcceleratorData","ParticleData","Partition","PartitionGranularity","PartitionsP","PartitionsQ","PartLayer","PartOfSpeech","PartProtection","ParzenWindow","PascalDistribution","PassEventsDown","PassEventsUp","Paste","PasteAutoQuoteCharacters","PasteBoxFormInlineCells","PasteButton","Path","PathGraph","PathGraphQ","Pattern","PatternFilling","PatternReaction","PatternSequence","PatternTest","PauliMatrix","PaulWavelet","Pause","PausedTime","PDF","PeakDetect","PeanoCurve","PearsonChiSquareTest","PearsonCorrelationTest","PearsonDistribution","PenttinenPointProcess","PercentForm","PerfectNumber","PerfectNumberQ","PerformanceGoal","Perimeter","PeriodicBoundaryCondition","PeriodicInterpolation","Periodogram","PeriodogramArray","Permanent","Permissions","PermissionsGroup","PermissionsGroupMemberQ","PermissionsGroups","PermissionsKey","PermissionsKeys","PermutationCycles","PermutationCyclesQ","PermutationGroup","PermutationLength","PermutationList","PermutationListQ","PermutationMatrix","PermutationMax","PermutationMin","PermutationOrder","PermutationPower","PermutationProduct","PermutationReplace","Permutations","PermutationSupport","Permute","PeronaMalikFilter","Perpendicular","PerpendicularBisector","PersistenceLocation","PersistenceTime","PersistentObject","PersistentObjects","PersistentSymbol","PersistentValue","PersonData","PERTDistribution","PetersenGraph","PhaseMargins","PhaseRange","PhongShading","PhysicalSystemData","Pi","Pick","PickedElements","PickMode","PIDData","PIDDerivativeFilter","PIDFeedforward","PIDTune","Piecewise","PiecewiseExpand","PieChart","PieChart3D","PillaiTrace","PillaiTraceTest","PingTime","Pink","PitchRecognize","Pivoting","PixelConstrained","PixelValue","PixelValuePositions","Placed","Placeholder","PlaceholderLayer","PlaceholderReplace","Plain","PlanarAngle","PlanarFaceList","PlanarGraph","PlanarGraphQ","PlanckRadiationLaw","PlaneCurveData","PlanetaryMoonData","PlanetData","PlantData","Play","PlaybackSettings","PlayRange","Plot","Plot3D","Plot3Matrix","PlotDivision","PlotJoined","PlotLabel","PlotLabels","PlotLayout","PlotLegends","PlotMarkers","PlotPoints","PlotRange","PlotRangeClipping","PlotRangeClipPlanesStyle","PlotRangePadding","PlotRegion","PlotStyle","PlotTheme","Pluralize","Plus","PlusMinus","Pochhammer","PodStates","PodWidth","Point","Point3DBox","Point3DBoxOptions","PointBox","PointBoxOptions","PointCountDistribution","PointDensity","PointDensityFunction","PointFigureChart","PointLegend","PointLight","PointProcessEstimator","PointProcessFitTest","PointProcessParameterAssumptions","PointProcessParameterQ","PointSize","PointStatisticFunction","PointValuePlot","PoissonConsulDistribution","PoissonDistribution","PoissonPDEComponent","PoissonPointProcess","PoissonProcess","PoissonWindow","PolarAxes","PolarAxesOrigin","PolarGridLines","PolarPlot","PolarTicks","PoleZeroMarkers","PolyaAeppliDistribution","PolyGamma","Polygon","Polygon3DBox","Polygon3DBoxOptions","PolygonalNumber","PolygonAngle","PolygonBox","PolygonBoxOptions","PolygonCoordinates","PolygonDecomposition","PolygonHoleScale","PolygonIntersections","PolygonScale","Polyhedron","PolyhedronAngle","PolyhedronBox","PolyhedronBoxOptions","PolyhedronCoordinates","PolyhedronData","PolyhedronDecomposition","PolyhedronGenus","PolyLog","PolynomialExpressionQ","PolynomialExtendedGCD","PolynomialForm","PolynomialGCD","PolynomialLCM","PolynomialMod","PolynomialQ","PolynomialQuotient","PolynomialQuotientRemainder","PolynomialReduce","PolynomialRemainder","Polynomials","PolynomialSumOfSquaresList","PoolingLayer","PopupMenu","PopupMenuBox","PopupMenuBoxOptions","PopupView","PopupWindow","Position","PositionIndex","PositionLargest","PositionSmallest","Positive","PositiveDefiniteMatrixQ","PositiveIntegers","PositivelyOrientedPoints","PositiveRationals","PositiveReals","PositiveSemidefiniteMatrixQ","PossibleZeroQ","Postfix","PostScript","Power","PowerDistribution","PowerExpand","PowerMod","PowerModList","PowerRange","PowerSpectralDensity","PowersRepresentations","PowerSymmetricPolynomial","Precedence","PrecedenceForm","Precedes","PrecedesEqual","PrecedesSlantEqual","PrecedesTilde","Precision","PrecisionGoal","PreDecrement","Predict","PredictionRoot","PredictorFunction","PredictorInformation","PredictorMeasurements","PredictorMeasurementsObject","PreemptProtect","PreferencesPath","PreferencesSettings","Prefix","PreIncrement","Prepend","PrependLayer","PrependTo","PreprocessingRules","PreserveColor","PreserveImageOptions","Previous","PreviousCell","PreviousDate","PriceGraphDistribution","PrimaryPlaceholder","Prime","PrimeNu","PrimeOmega","PrimePi","PrimePowerQ","PrimeQ","Primes","PrimeZetaP","PrimitivePolynomialQ","PrimitiveRoot","PrimitiveRootList","PrincipalComponents","PrincipalValue","Print","PrintableASCIIQ","PrintAction","PrintForm","PrintingCopies","PrintingOptions","PrintingPageRange","PrintingStartingPageNumber","PrintingStyleEnvironment","Printout3D","Printout3DPreviewer","PrintPrecision","PrintTemporary","Prism","PrismBox","PrismBoxOptions","PrivateCellOptions","PrivateEvaluationOptions","PrivateFontOptions","PrivateFrontEndOptions","PrivateKey","PrivateNotebookOptions","PrivatePaths","Probability","ProbabilityDistribution","ProbabilityPlot","ProbabilityPr","ProbabilityScalePlot","ProbitModelFit","ProcessConnection","ProcessDirectory","ProcessEnvironment","Processes","ProcessEstimator","ProcessInformation","ProcessObject","ProcessParameterAssumptions","ProcessParameterQ","ProcessStateDomain","ProcessStatus","ProcessTimeDomain","Product","ProductDistribution","ProductLog","ProgressIndicator","ProgressIndicatorBox","ProgressIndicatorBoxOptions","ProgressReporting","Projection","Prolog","PromptForm","ProofObject","PropagateAborts","Properties","Property","PropertyList","PropertyValue","Proportion","Proportional","Protect","Protected","ProteinData","Pruning","PseudoInverse","PsychrometricPropertyData","PublicKey","PublisherID","PulsarData","PunctuationCharacter","Purple","Put","PutAppend","Pyramid","PyramidBox","PyramidBoxOptions","QBinomial","QFactorial","QGamma","QHypergeometricPFQ","QnDispersion","QPochhammer","QPolyGamma","QRDecomposition","QuadraticIrrationalQ","QuadraticOptimization","Quantile","QuantilePlot","Quantity","QuantityArray","QuantityDistribution","QuantityForm","QuantityMagnitude","QuantityQ","QuantityUnit","QuantityVariable","QuantityVariableCanonicalUnit","QuantityVariableDimensions","QuantityVariableIdentifier","QuantityVariablePhysicalQuantity","Quartics","QuartileDeviation","Quartiles","QuartileSkewness","Query","QuestionGenerator","QuestionInterface","QuestionObject","QuestionSelector","QueueingNetworkProcess","QueueingProcess","QueueProperties","Quiet","QuietEcho","Quit","Quotient","QuotientRemainder","RadialAxisPlot","RadialGradientFilling","RadialGradientImage","RadialityCentrality","RadicalBox","RadicalBoxOptions","RadioButton","RadioButtonBar","RadioButtonBox","RadioButtonBoxOptions","Radon","RadonTransform","RamanujanTau","RamanujanTauL","RamanujanTauTheta","RamanujanTauZ","Ramp","Random","RandomArrayLayer","RandomChoice","RandomColor","RandomComplex","RandomDate","RandomEntity","RandomFunction","RandomGeneratorState","RandomGeoPosition","RandomGraph","RandomImage","RandomInstance","RandomInteger","RandomPermutation","RandomPoint","RandomPointConfiguration","RandomPolygon","RandomPolyhedron","RandomPrime","RandomReal","RandomSample","RandomSeed","RandomSeeding","RandomTime","RandomTree","RandomVariate","RandomWalkProcess","RandomWord","Range","RangeFilter","RangeSpecification","RankedMax","RankedMin","RarerProbability","Raster","Raster3D","Raster3DBox","Raster3DBoxOptions","RasterArray","RasterBox","RasterBoxOptions","Rasterize","RasterSize","Rational","RationalExpressionQ","RationalFunctions","Rationalize","Rationals","Ratios","RawArray","RawBoxes","RawData","RawMedium","RayleighDistribution","Re","ReactionBalance","ReactionBalancedQ","ReactionPDETerm","Read","ReadByteArray","ReadLine","ReadList","ReadProtected","ReadString","Real","RealAbs","RealBlockDiagonalForm","RealDigits","RealExponent","Reals","RealSign","Reap","RebuildPacletData","RecalibrationFunction","RecognitionPrior","RecognitionThreshold","ReconstructionMesh","Record","RecordLists","RecordSeparators","Rectangle","RectangleBox","RectangleBoxOptions","RectangleChart","RectangleChart3D","RectangularRepeatingElement","RecurrenceFilter","RecurrenceTable","RecurringDigitsForm","Red","Reduce","RefBox","ReferenceLineStyle","ReferenceMarkers","ReferenceMarkerStyle","Refine","ReflectionMatrix","ReflectionTransform","Refresh","RefreshRate","Region","RegionBinarize","RegionBoundary","RegionBoundaryStyle","RegionBounds","RegionCentroid","RegionCongruent","RegionConvert","RegionDifference","RegionDilation","RegionDimension","RegionDisjoint","RegionDistance","RegionDistanceFunction","RegionEmbeddingDimension","RegionEqual","RegionErosion","RegionFillingStyle","RegionFit","RegionFunction","RegionImage","RegionIntersection","RegionMeasure","RegionMember","RegionMemberFunction","RegionMoment","RegionNearest","RegionNearestFunction","RegionPlot","RegionPlot3D","RegionProduct","RegionQ","RegionResize","RegionSimilar","RegionSize","RegionSymmetricDifference","RegionUnion","RegionWithin","RegisterExternalEvaluator","RegularExpression","Regularization","RegularlySampledQ","RegularPolygon","ReIm","ReImLabels","ReImPlot","ReImStyle","Reinstall","RelationalDatabase","RelationGraph","Release","ReleaseHold","ReliabilityDistribution","ReliefImage","ReliefPlot","RemoteAuthorizationCaching","RemoteBatchJobAbort","RemoteBatchJobObject","RemoteBatchJobs","RemoteBatchMapSubmit","RemoteBatchSubmissionEnvironment","RemoteBatchSubmit","RemoteConnect","RemoteConnectionObject","RemoteEvaluate","RemoteFile","RemoteInputFiles","RemoteKernelObject","RemoteProviderSettings","RemoteRun","RemoteRunProcess","RemovalConditions","Remove","RemoveAlphaChannel","RemoveAsynchronousTask","RemoveAudioStream","RemoveBackground","RemoveChannelListener","RemoveChannelSubscribers","Removed","RemoveDiacritics","RemoveInputStreamMethod","RemoveOutputStreamMethod","RemoveProperty","RemoveScheduledTask","RemoveUsers","RemoveVideoStream","RenameDirectory","RenameFile","RenderAll","RenderingOptions","RenewalProcess","RenkoChart","RepairMesh","Repeated","RepeatedNull","RepeatedString","RepeatedTiming","RepeatingElement","Replace","ReplaceAll","ReplaceAt","ReplaceHeldPart","ReplaceImageValue","ReplaceList","ReplacePart","ReplacePixelValue","ReplaceRepeated","ReplicateLayer","RequiredPhysicalQuantities","Resampling","ResamplingAlgorithmData","ResamplingMethod","Rescale","RescalingTransform","ResetDirectory","ResetScheduledTask","ReshapeLayer","Residue","ResidueSum","ResizeLayer","Resolve","ResolveContextAliases","ResourceAcquire","ResourceData","ResourceFunction","ResourceObject","ResourceRegister","ResourceRemove","ResourceSearch","ResourceSubmissionObject","ResourceSubmit","ResourceSystemBase","ResourceSystemPath","ResourceUpdate","ResourceVersion","ResponseForm","Rest","RestartInterval","Restricted","Resultant","ResumePacket","Return","ReturnCreatesNewCell","ReturnEntersInput","ReturnExpressionPacket","ReturnInputFormPacket","ReturnPacket","ReturnReceiptFunction","ReturnTextPacket","Reverse","ReverseApplied","ReverseBiorthogonalSplineWavelet","ReverseElement","ReverseEquilibrium","ReverseGraph","ReverseSort","ReverseSortBy","ReverseUpEquilibrium","RevolutionAxis","RevolutionPlot3D","RGBColor","RiccatiSolve","RiceDistribution","RidgeFilter","RiemannR","RiemannSiegelTheta","RiemannSiegelZ","RiemannXi","Riffle","Right","RightArrow","RightArrowBar","RightArrowLeftArrow","RightComposition","RightCosetRepresentative","RightDownTeeVector","RightDownVector","RightDownVectorBar","RightTee","RightTeeArrow","RightTeeVector","RightTriangle","RightTriangleBar","RightTriangleEqual","RightUpDownVector","RightUpTeeVector","RightUpVector","RightUpVectorBar","RightVector","RightVectorBar","RipleyK","RipleyRassonRegion","RiskAchievementImportance","RiskReductionImportance","RobustConvexOptimization","RogersTanimotoDissimilarity","RollPitchYawAngles","RollPitchYawMatrix","RomanNumeral","Root","RootApproximant","RootIntervals","RootLocusPlot","RootMeanSquare","RootOfUnityQ","RootReduce","Roots","RootSum","RootTree","Rotate","RotateLabel","RotateLeft","RotateRight","RotationAction","RotationBox","RotationBoxOptions","RotationMatrix","RotationTransform","Round","RoundImplies","RoundingRadius","Row","RowAlignments","RowBackgrounds","RowBox","RowHeights","RowLines","RowMinHeight","RowReduce","RowsEqual","RowSpacings","RSolve","RSolveValue","RudinShapiro","RudvalisGroupRu","Rule","RuleCondition","RuleDelayed","RuleForm","RulePlot","RulerUnits","RulesTree","Run","RunProcess","RunScheduledTask","RunThrough","RuntimeAttributes","RuntimeOptions","RussellRaoDissimilarity","SameAs","SameQ","SameTest","SameTestProperties","SampledEntityClass","SampleDepth","SampledSoundFunction","SampledSoundList","SampleRate","SamplingPeriod","SARIMAProcess","SARMAProcess","SASTriangle","SatelliteData","SatisfiabilityCount","SatisfiabilityInstances","SatisfiableQ","Saturday","Save","Saveable","SaveAutoDelete","SaveConnection","SaveDefinitions","SavitzkyGolayMatrix","SawtoothWave","Scale","Scaled","ScaleDivisions","ScaledMousePosition","ScaleOrigin","ScalePadding","ScaleRanges","ScaleRangeStyle","ScalingFunctions","ScalingMatrix","ScalingTransform","Scan","ScheduledTask","ScheduledTaskActiveQ","ScheduledTaskInformation","ScheduledTaskInformationData","ScheduledTaskObject","ScheduledTasks","SchurDecomposition","ScientificForm","ScientificNotationThreshold","ScorerGi","ScorerGiPrime","ScorerHi","ScorerHiPrime","ScreenRectangle","ScreenStyleEnvironment","ScriptBaselineShifts","ScriptForm","ScriptLevel","ScriptMinSize","ScriptRules","ScriptSizeMultipliers","Scrollbars","ScrollingOptions","ScrollPosition","SearchAdjustment","SearchIndexObject","SearchIndices","SearchQueryString","SearchResultObject","Sec","Sech","SechDistribution","SecondOrderConeOptimization","SectionGrouping","SectorChart","SectorChart3D","SectorOrigin","SectorSpacing","SecuredAuthenticationKey","SecuredAuthenticationKeys","SecurityCertificate","SeedRandom","Select","Selectable","SelectComponents","SelectedCells","SelectedNotebook","SelectFirst","Selection","SelectionAnimate","SelectionCell","SelectionCellCreateCell","SelectionCellDefaultStyle","SelectionCellParentStyle","SelectionCreateCell","SelectionDebuggerTag","SelectionEvaluate","SelectionEvaluateCreateCell","SelectionMove","SelectionPlaceholder","SelectWithContents","SelfLoops","SelfLoopStyle","SemanticImport","SemanticImportString","SemanticInterpretation","SemialgebraicComponentInstances","SemidefiniteOptimization","SendMail","SendMessage","Sequence","SequenceAlignment","SequenceAttentionLayer","SequenceCases","SequenceCount","SequenceFold","SequenceFoldList","SequenceForm","SequenceHold","SequenceIndicesLayer","SequenceLastLayer","SequenceMostLayer","SequencePosition","SequencePredict","SequencePredictorFunction","SequenceReplace","SequenceRestLayer","SequenceReverseLayer","SequenceSplit","Series","SeriesCoefficient","SeriesData","SeriesTermGoal","ServiceConnect","ServiceDisconnect","ServiceExecute","ServiceObject","ServiceRequest","ServiceResponse","ServiceSubmit","SessionSubmit","SessionTime","Set","SetAccuracy","SetAlphaChannel","SetAttributes","Setbacks","SetCloudDirectory","SetCookies","SetDelayed","SetDirectory","SetEnvironment","SetFileDate","SetFileFormatProperties","SetOptions","SetOptionsPacket","SetPermissions","SetPrecision","SetProperty","SetSecuredAuthenticationKey","SetSelectedNotebook","SetSharedFunction","SetSharedVariable","SetStreamPosition","SetSystemModel","SetSystemOptions","Setter","SetterBar","SetterBox","SetterBoxOptions","Setting","SetUsers","Shading","Shallow","ShannonWavelet","ShapiroWilkTest","Share","SharingList","Sharpen","ShearingMatrix","ShearingTransform","ShellRegion","ShenCastanMatrix","ShiftedGompertzDistribution","ShiftRegisterSequence","Short","ShortDownArrow","Shortest","ShortestMatch","ShortestPathFunction","ShortLeftArrow","ShortRightArrow","ShortTimeFourier","ShortTimeFourierData","ShortUpArrow","Show","ShowAutoConvert","ShowAutoSpellCheck","ShowAutoStyles","ShowCellBracket","ShowCellLabel","ShowCellTags","ShowClosedCellArea","ShowCodeAssist","ShowContents","ShowControls","ShowCursorTracker","ShowGroupOpenCloseIcon","ShowGroupOpener","ShowInvisibleCharacters","ShowPageBreaks","ShowPredictiveInterface","ShowSelection","ShowShortBoxForm","ShowSpecialCharacters","ShowStringCharacters","ShowSyntaxStyles","ShrinkingDelay","ShrinkWrapBoundingBox","SiderealTime","SiegelTheta","SiegelTukeyTest","SierpinskiCurve","SierpinskiMesh","Sign","Signature","SignedRankTest","SignedRegionDistance","SignificanceLevel","SignPadding","SignTest","SimilarityRules","SimpleGraph","SimpleGraphQ","SimplePolygonQ","SimplePolyhedronQ","Simplex","Simplify","Sin","Sinc","SinghMaddalaDistribution","SingleEvaluation","SingleLetterItalics","SingleLetterStyle","SingularValueDecomposition","SingularValueList","SingularValuePlot","SingularValues","Sinh","SinhIntegral","SinIntegral","SixJSymbol","Skeleton","SkeletonTransform","SkellamDistribution","Skewness","SkewNormalDistribution","SkinStyle","Skip","SliceContourPlot3D","SliceDensityPlot3D","SliceDistribution","SliceVectorPlot3D","Slider","Slider2D","Slider2DBox","Slider2DBoxOptions","SliderBox","SliderBoxOptions","SlideShowVideo","SlideView","Slot","SlotSequence","Small","SmallCircle","Smaller","SmithDecomposition","SmithDelayCompensator","SmithWatermanSimilarity","SmoothDensityHistogram","SmoothHistogram","SmoothHistogram3D","SmoothKernelDistribution","SmoothPointDensity","SnDispersion","Snippet","SnippetsVideo","SnubPolyhedron","SocialMediaData","Socket","SocketConnect","SocketListen","SocketListener","SocketObject","SocketOpen","SocketReadMessage","SocketReadyQ","Sockets","SocketWaitAll","SocketWaitNext","SoftmaxLayer","SokalSneathDissimilarity","SolarEclipse","SolarSystemFeatureData","SolarTime","SolidAngle","SolidBoundaryLoadValue","SolidData","SolidDisplacementCondition","SolidFixedCondition","SolidMechanicsPDEComponent","SolidMechanicsStrain","SolidMechanicsStress","SolidRegionQ","Solve","SolveAlways","SolveDelayed","SolveValues","Sort","SortBy","SortedBy","SortedEntityClass","Sound","SoundAndGraphics","SoundNote","SoundVolume","SourceLink","SourcePDETerm","Sow","Space","SpaceCurveData","SpaceForm","Spacer","Spacings","Span","SpanAdjustments","SpanCharacterRounding","SpanFromAbove","SpanFromBoth","SpanFromLeft","SpanLineThickness","SpanMaxSize","SpanMinSize","SpanningCharacters","SpanSymmetric","SparseArray","SparseArrayQ","SpatialBinnedPointData","SpatialBoundaryCorrection","SpatialEstimate","SpatialEstimatorFunction","SpatialGraphDistribution","SpatialJ","SpatialMedian","SpatialNoiseLevel","SpatialObservationRegionQ","SpatialPointData","SpatialPointSelect","SpatialRandomnessTest","SpatialTransformationLayer","SpatialTrendFunction","Speak","SpeakerMatchQ","SpearmanRankTest","SpearmanRho","SpeciesData","SpecificityGoal","SpectralLineData","Spectrogram","SpectrogramArray","Specularity","SpeechCases","SpeechInterpreter","SpeechRecognize","SpeechSynthesize","SpellingCorrection","SpellingCorrectionList","SpellingDictionaries","SpellingDictionariesPath","SpellingOptions","Sphere","SphereBox","SphereBoxOptions","SpherePoints","SphericalBesselJ","SphericalBesselY","SphericalHankelH1","SphericalHankelH2","SphericalHarmonicY","SphericalPlot3D","SphericalRegion","SphericalShell","SpheroidalEigenvalue","SpheroidalJoiningFactor","SpheroidalPS","SpheroidalPSPrime","SpheroidalQS","SpheroidalQSPrime","SpheroidalRadialFactor","SpheroidalS1","SpheroidalS1Prime","SpheroidalS2","SpheroidalS2Prime","Splice","SplicedDistribution","SplineClosed","SplineDegree","SplineKnots","SplineWeights","Split","SplitBy","SpokenString","SpotLight","Sqrt","SqrtBox","SqrtBoxOptions","Square","SquaredEuclideanDistance","SquareFreeQ","SquareIntersection","SquareMatrixQ","SquareRepeatingElement","SquaresR","SquareSubset","SquareSubsetEqual","SquareSuperset","SquareSupersetEqual","SquareUnion","SquareWave","SSSTriangle","StabilityMargins","StabilityMarginsStyle","StableDistribution","Stack","StackBegin","StackComplete","StackedDateListPlot","StackedListPlot","StackInhibit","StadiumShape","StandardAtmosphereData","StandardDeviation","StandardDeviationFilter","StandardForm","Standardize","Standardized","StandardOceanData","StandbyDistribution","Star","StarClusterData","StarData","StarGraph","StartAsynchronousTask","StartExternalSession","StartingStepSize","StartOfLine","StartOfString","StartProcess","StartScheduledTask","StartupSound","StartWebSession","StateDimensions","StateFeedbackGains","StateOutputEstimator","StateResponse","StateSpaceModel","StateSpaceRealization","StateSpaceTransform","StateTransformationLinearize","StationaryDistribution","StationaryWaveletPacketTransform","StationaryWaveletTransform","StatusArea","StatusCentrality","StepMonitor","StereochemistryElements","StieltjesGamma","StippleShading","StirlingS1","StirlingS2","StopAsynchronousTask","StoppingPowerData","StopScheduledTask","StrataVariables","StratonovichProcess","StraussHardcorePointProcess","StraussPointProcess","StreamColorFunction","StreamColorFunctionScaling","StreamDensityPlot","StreamMarkers","StreamPlot","StreamPlot3D","StreamPoints","StreamPosition","Streams","StreamScale","StreamStyle","StrictInequalities","String","StringBreak","StringByteCount","StringCases","StringContainsQ","StringCount","StringDelete","StringDrop","StringEndsQ","StringExpression","StringExtract","StringForm","StringFormat","StringFormatQ","StringFreeQ","StringInsert","StringJoin","StringLength","StringMatchQ","StringPadLeft","StringPadRight","StringPart","StringPartition","StringPosition","StringQ","StringRepeat","StringReplace","StringReplaceList","StringReplacePart","StringReverse","StringRiffle","StringRotateLeft","StringRotateRight","StringSkeleton","StringSplit","StringStartsQ","StringTake","StringTakeDrop","StringTemplate","StringToByteArray","StringToStream","StringTrim","StripBoxes","StripOnInput","StripStyleOnPaste","StripWrapperBoxes","StrokeForm","Struckthrough","StructuralImportance","StructuredArray","StructuredArrayHeadQ","StructuredSelection","StruveH","StruveL","Stub","StudentTDistribution","Style","StyleBox","StyleBoxAutoDelete","StyleData","StyleDefinitions","StyleForm","StyleHints","StyleKeyMapping","StyleMenuListing","StyleNameDialogSettings","StyleNames","StylePrint","StyleSheetPath","Subdivide","Subfactorial","Subgraph","SubMinus","SubPlus","SubresultantPolynomialRemainders","SubresultantPolynomials","Subresultants","Subscript","SubscriptBox","SubscriptBoxOptions","Subscripted","Subsequences","Subset","SubsetCases","SubsetCount","SubsetEqual","SubsetMap","SubsetPosition","SubsetQ","SubsetReplace","Subsets","SubStar","SubstitutionSystem","Subsuperscript","SubsuperscriptBox","SubsuperscriptBoxOptions","SubtitleEncoding","SubtitleTrackSelection","Subtract","SubtractFrom","SubtractSides","SubValues","Succeeds","SucceedsEqual","SucceedsSlantEqual","SucceedsTilde","Success","SuchThat","Sum","SumConvergence","SummationLayer","Sunday","SunPosition","Sunrise","Sunset","SuperDagger","SuperMinus","SupernovaData","SuperPlus","Superscript","SuperscriptBox","SuperscriptBoxOptions","Superset","SupersetEqual","SuperStar","Surd","SurdForm","SurfaceAppearance","SurfaceArea","SurfaceColor","SurfaceData","SurfaceGraphics","SurvivalDistribution","SurvivalFunction","SurvivalModel","SurvivalModelFit","SuspendPacket","SuzukiDistribution","SuzukiGroupSuz","SwatchLegend","Switch","Symbol","SymbolName","SymletWavelet","Symmetric","SymmetricDifference","SymmetricGroup","SymmetricKey","SymmetricMatrixQ","SymmetricPolynomial","SymmetricReduction","Symmetrize","SymmetrizedArray","SymmetrizedArrayRules","SymmetrizedDependentComponents","SymmetrizedIndependentComponents","SymmetrizedReplacePart","SynchronousInitialization","SynchronousUpdating","Synonyms","Syntax","SyntaxForm","SyntaxInformation","SyntaxLength","SyntaxPacket","SyntaxQ","SynthesizeMissingValues","SystemCredential","SystemCredentialData","SystemCredentialKey","SystemCredentialKeys","SystemCredentialStoreObject","SystemDialogInput","SystemException","SystemGet","SystemHelpPath","SystemInformation","SystemInformationData","SystemInstall","SystemModel","SystemModeler","SystemModelExamples","SystemModelLinearize","SystemModelMeasurements","SystemModelParametricSimulate","SystemModelPlot","SystemModelProgressReporting","SystemModelReliability","SystemModels","SystemModelSimulate","SystemModelSimulateSensitivity","SystemModelSimulationData","SystemOpen","SystemOptions","SystemProcessData","SystemProcesses","SystemsConnectionsModel","SystemsModelControllerData","SystemsModelDelay","SystemsModelDelayApproximate","SystemsModelDelete","SystemsModelDimensions","SystemsModelExtract","SystemsModelFeedbackConnect","SystemsModelLabels","SystemsModelLinearity","SystemsModelMerge","SystemsModelOrder","SystemsModelParallelConnect","SystemsModelSeriesConnect","SystemsModelStateFeedbackConnect","SystemsModelVectorRelativeOrders","SystemStub","SystemTest","Tab","TabFilling","Table","TableAlignments","TableDepth","TableDirections","TableForm","TableHeadings","TableSpacing","TableView","TableViewBox","TableViewBoxAlignment","TableViewBoxBackground","TableViewBoxHeaders","TableViewBoxItemSize","TableViewBoxItemStyle","TableViewBoxOptions","TabSpacings","TabView","TabViewBox","TabViewBoxOptions","TagBox","TagBoxNote","TagBoxOptions","TaggingRules","TagSet","TagSetDelayed","TagStyle","TagUnset","Take","TakeDrop","TakeLargest","TakeLargestBy","TakeList","TakeSmallest","TakeSmallestBy","TakeWhile","Tally","Tan","Tanh","TargetDevice","TargetFunctions","TargetSystem","TargetUnits","TaskAbort","TaskExecute","TaskObject","TaskRemove","TaskResume","Tasks","TaskSuspend","TaskWait","TautologyQ","TelegraphProcess","TemplateApply","TemplateArgBox","TemplateBox","TemplateBoxOptions","TemplateEvaluate","TemplateExpression","TemplateIf","TemplateObject","TemplateSequence","TemplateSlot","TemplateSlotSequence","TemplateUnevaluated","TemplateVerbatim","TemplateWith","TemporalData","TemporalRegularity","Temporary","TemporaryVariable","TensorContract","TensorDimensions","TensorExpand","TensorProduct","TensorQ","TensorRank","TensorReduce","TensorSymmetry","TensorTranspose","TensorWedge","TerminatedEvaluation","TernaryListPlot","TernaryPlotCorners","TestID","TestReport","TestReportObject","TestResultObject","Tetrahedron","TetrahedronBox","TetrahedronBoxOptions","TeXForm","TeXSave","Text","Text3DBox","Text3DBoxOptions","TextAlignment","TextBand","TextBoundingBox","TextBox","TextCases","TextCell","TextClipboardType","TextContents","TextData","TextElement","TextForm","TextGrid","TextJustification","TextLine","TextPacket","TextParagraph","TextPosition","TextRecognize","TextSearch","TextSearchReport","TextSentences","TextString","TextStructure","TextStyle","TextTranslation","Texture","TextureCoordinateFunction","TextureCoordinateScaling","TextWords","Therefore","ThermodynamicData","ThermometerGauge","Thick","Thickness","Thin","Thinning","ThisLink","ThomasPointProcess","ThompsonGroupTh","Thread","Threaded","ThreadingLayer","ThreeJSymbol","Threshold","Through","Throw","ThueMorse","Thumbnail","Thursday","TickDirection","TickLabelOrientation","TickLabelPositioning","TickLabels","TickLengths","TickPositions","Ticks","TicksStyle","TideData","Tilde","TildeEqual","TildeFullEqual","TildeTilde","TimeConstrained","TimeConstraint","TimeDirection","TimeFormat","TimeGoal","TimelinePlot","TimeObject","TimeObjectQ","TimeRemaining","Times","TimesBy","TimeSeries","TimeSeriesAggregate","TimeSeriesForecast","TimeSeriesInsert","TimeSeriesInvertibility","TimeSeriesMap","TimeSeriesMapThread","TimeSeriesModel","TimeSeriesModelFit","TimeSeriesResample","TimeSeriesRescale","TimeSeriesShift","TimeSeriesThread","TimeSeriesWindow","TimeSystem","TimeSystemConvert","TimeUsed","TimeValue","TimeWarpingCorrespondence","TimeWarpingDistance","TimeZone","TimeZoneConvert","TimeZoneOffset","Timing","Tiny","TitleGrouping","TitsGroupT","ToBoxes","ToCharacterCode","ToColor","ToContinuousTimeModel","ToDate","Today","ToDiscreteTimeModel","ToEntity","ToeplitzMatrix","ToExpression","ToFileName","Together","Toggle","ToggleFalse","Toggler","TogglerBar","TogglerBox","TogglerBoxOptions","ToHeldExpression","ToInvertibleTimeSeries","TokenWords","Tolerance","ToLowerCase","Tomorrow","ToNumberField","TooBig","Tooltip","TooltipBox","TooltipBoxOptions","TooltipDelay","TooltipStyle","ToonShading","Top","TopHatTransform","ToPolarCoordinates","TopologicalSort","ToRadicals","ToRawPointer","ToRules","Torus","TorusGraph","ToSphericalCoordinates","ToString","Total","TotalHeight","TotalLayer","TotalVariationFilter","TotalWidth","TouchPosition","TouchscreenAutoZoom","TouchscreenControlPlacement","ToUpperCase","TourVideo","Tr","Trace","TraceAbove","TraceAction","TraceBackward","TraceDepth","TraceDialog","TraceForward","TraceInternal","TraceLevel","TraceOff","TraceOn","TraceOriginal","TracePrint","TraceScan","TrackCellChangeTimes","TrackedSymbols","TrackingFunction","TracyWidomDistribution","TradingChart","TraditionalForm","TraditionalFunctionNotation","TraditionalNotation","TraditionalOrder","TrainImageContentDetector","TrainingProgressCheckpointing","TrainingProgressFunction","TrainingProgressMeasurements","TrainingProgressReporting","TrainingStoppingCriterion","TrainingUpdateSchedule","TrainTextContentDetector","TransferFunctionCancel","TransferFunctionExpand","TransferFunctionFactor","TransferFunctionModel","TransferFunctionPoles","TransferFunctionTransform","TransferFunctionZeros","TransformationClass","TransformationFunction","TransformationFunctions","TransformationMatrix","TransformedDistribution","TransformedField","TransformedProcess","TransformedRegion","TransitionDirection","TransitionDuration","TransitionEffect","TransitiveClosureGraph","TransitiveReductionGraph","Translate","TranslationOptions","TranslationTransform","Transliterate","Transparent","TransparentColor","Transpose","TransposeLayer","TrapEnterKey","TrapSelection","TravelDirections","TravelDirectionsData","TravelDistance","TravelDistanceList","TravelMethod","TravelTime","Tree","TreeCases","TreeChildren","TreeCount","TreeData","TreeDelete","TreeDepth","TreeElementCoordinates","TreeElementLabel","TreeElementLabelFunction","TreeElementLabelStyle","TreeElementShape","TreeElementShapeFunction","TreeElementSize","TreeElementSizeFunction","TreeElementStyle","TreeElementStyleFunction","TreeExpression","TreeExtract","TreeFold","TreeForm","TreeGraph","TreeGraphQ","TreeInsert","TreeLayout","TreeLeafCount","TreeLeafQ","TreeLeaves","TreeLevel","TreeMap","TreeMapAt","TreeOutline","TreePlot","TreePosition","TreeQ","TreeReplacePart","TreeRules","TreeScan","TreeSelect","TreeSize","TreeTraversalOrder","TrendStyle","Triangle","TriangleCenter","TriangleConstruct","TriangleMeasurement","TriangleWave","TriangularDistribution","TriangulateMesh","Trig","TrigExpand","TrigFactor","TrigFactorList","Trigger","TrigReduce","TrigToExp","TrimmedMean","TrimmedVariance","TropicalStormData","True","TrueQ","TruncatedDistribution","TruncatedPolyhedron","TsallisQExponentialDistribution","TsallisQGaussianDistribution","TTest","Tube","TubeBezierCurveBox","TubeBezierCurveBoxOptions","TubeBox","TubeBoxOptions","TubeBSplineCurveBox","TubeBSplineCurveBoxOptions","Tuesday","TukeyLambdaDistribution","TukeyWindow","TunnelData","Tuples","TuranGraph","TuringMachine","TuttePolynomial","TwoWayRule","Typed","TypeDeclaration","TypeEvaluate","TypeHint","TypeOf","TypeSpecifier","UnateQ","Uncompress","UnconstrainedParameters","Undefined","UnderBar","Underflow","Underlined","Underoverscript","UnderoverscriptBox","UnderoverscriptBoxOptions","Underscript","UnderscriptBox","UnderscriptBoxOptions","UnderseaFeatureData","UndirectedEdge","UndirectedGraph","UndirectedGraphQ","UndoOptions","UndoTrackedVariables","Unequal","UnequalTo","Unevaluated","UniformDistribution","UniformGraphDistribution","UniformPolyhedron","UniformSumDistribution","Uninstall","Union","UnionedEntityClass","UnionPlus","Unique","UniqueElements","UnitaryMatrixQ","UnitBox","UnitConvert","UnitDimensions","Unitize","UnitRootTest","UnitSimplify","UnitStep","UnitSystem","UnitTriangle","UnitVector","UnitVectorLayer","UnityDimensions","UniverseModelData","UniversityData","UnixTime","UnlabeledTree","UnmanageObject","Unprotect","UnregisterExternalEvaluator","UnsameQ","UnsavedVariables","Unset","UnsetShared","Until","UntrackedVariables","Up","UpArrow","UpArrowBar","UpArrowDownArrow","Update","UpdateDynamicObjects","UpdateDynamicObjectsSynchronous","UpdateInterval","UpdatePacletSites","UpdateSearchIndex","UpDownArrow","UpEquilibrium","UpperCaseQ","UpperLeftArrow","UpperRightArrow","UpperTriangularize","UpperTriangularMatrix","UpperTriangularMatrixQ","Upsample","UpSet","UpSetDelayed","UpTee","UpTeeArrow","UpTo","UpValues","URL","URLBuild","URLDecode","URLDispatcher","URLDownload","URLDownloadSubmit","URLEncode","URLExecute","URLExpand","URLFetch","URLFetchAsynchronous","URLParse","URLQueryDecode","URLQueryEncode","URLRead","URLResponseTime","URLSave","URLSaveAsynchronous","URLShorten","URLSubmit","UseEmbeddedLibrary","UseGraphicsRange","UserDefinedWavelet","Using","UsingFrontEnd","UtilityFunction","V2Get","ValenceErrorHandling","ValenceFilling","ValidationLength","ValidationSet","ValueBox","ValueBoxOptions","ValueDimensions","ValueForm","ValuePreprocessingFunction","ValueQ","Values","ValuesData","VandermondeMatrix","Variables","Variance","VarianceEquivalenceTest","VarianceEstimatorFunction","VarianceGammaDistribution","VarianceGammaPointProcess","VarianceTest","VariogramFunction","VariogramModel","VectorAngle","VectorAround","VectorAspectRatio","VectorColorFunction","VectorColorFunctionScaling","VectorDensityPlot","VectorDisplacementPlot","VectorDisplacementPlot3D","VectorGlyphData","VectorGreater","VectorGreaterEqual","VectorLess","VectorLessEqual","VectorMarkers","VectorPlot","VectorPlot3D","VectorPoints","VectorQ","VectorRange","Vectors","VectorScale","VectorScaling","VectorSizes","VectorStyle","Vee","Verbatim","Verbose","VerificationTest","VerifyConvergence","VerifyDerivedKey","VerifyDigitalSignature","VerifyFileSignature","VerifyInterpretation","VerifySecurityCertificates","VerifySolutions","VerifyTestAssumptions","VersionedPreferences","VertexAdd","VertexCapacity","VertexChromaticNumber","VertexColors","VertexComponent","VertexConnectivity","VertexContract","VertexCoordinateRules","VertexCoordinates","VertexCorrelationSimilarity","VertexCosineSimilarity","VertexCount","VertexCoverQ","VertexDataCoordinates","VertexDegree","VertexDelete","VertexDiceSimilarity","VertexEccentricity","VertexInComponent","VertexInComponentGraph","VertexInDegree","VertexIndex","VertexJaccardSimilarity","VertexLabeling","VertexLabels","VertexLabelStyle","VertexList","VertexNormals","VertexOutComponent","VertexOutComponentGraph","VertexOutDegree","VertexQ","VertexRenderingFunction","VertexReplace","VertexShape","VertexShapeFunction","VertexSize","VertexStyle","VertexTextureCoordinates","VertexTransitiveGraphQ","VertexWeight","VertexWeightedGraphQ","Vertical","VerticalBar","VerticalForm","VerticalGauge","VerticalSeparator","VerticalSlider","VerticalTilde","Video","VideoCapture","VideoCombine","VideoDelete","VideoEncoding","VideoExtractFrames","VideoFrameList","VideoFrameMap","VideoGenerator","VideoInsert","VideoIntervals","VideoJoin","VideoMap","VideoMapList","VideoMapTimeSeries","VideoPadding","VideoPause","VideoPlay","VideoQ","VideoRecord","VideoReplace","VideoScreenCapture","VideoSplit","VideoStop","VideoStream","VideoStreams","VideoTimeStretch","VideoTrackSelection","VideoTranscode","VideoTransparency","VideoTrim","ViewAngle","ViewCenter","ViewMatrix","ViewPoint","ViewPointSelectorSettings","ViewPort","ViewProjection","ViewRange","ViewVector","ViewVertical","VirtualGroupData","Visible","VisibleCell","VoiceStyleData","VoigtDistribution","VolcanoData","Volume","VonMisesDistribution","VoronoiMesh","WaitAll","WaitAsynchronousTask","WaitNext","WaitUntil","WakebyDistribution","WalleniusHypergeometricDistribution","WaringYuleDistribution","WarpingCorrespondence","WarpingDistance","WatershedComponents","WatsonUSquareTest","WattsStrogatzGraphDistribution","WaveletBestBasis","WaveletFilterCoefficients","WaveletImagePlot","WaveletListPlot","WaveletMapIndexed","WaveletMatrixPlot","WaveletPhi","WaveletPsi","WaveletScale","WaveletScalogram","WaveletThreshold","WavePDEComponent","WeaklyConnectedComponents","WeaklyConnectedGraphComponents","WeaklyConnectedGraphQ","WeakStationarity","WeatherData","WeatherForecastData","WebAudioSearch","WebColumn","WebElementObject","WeberE","WebExecute","WebImage","WebImageSearch","WebItem","WebPageMetaInformation","WebRow","WebSearch","WebSessionObject","WebSessions","WebWindowObject","Wedge","Wednesday","WeibullDistribution","WeierstrassE1","WeierstrassE2","WeierstrassE3","WeierstrassEta1","WeierstrassEta2","WeierstrassEta3","WeierstrassHalfPeriods","WeierstrassHalfPeriodW1","WeierstrassHalfPeriodW2","WeierstrassHalfPeriodW3","WeierstrassInvariantG2","WeierstrassInvariantG3","WeierstrassInvariants","WeierstrassP","WeierstrassPPrime","WeierstrassSigma","WeierstrassZeta","WeightedAdjacencyGraph","WeightedAdjacencyMatrix","WeightedData","WeightedGraphQ","Weights","WelchWindow","WheelGraph","WhenEvent","Which","While","White","WhiteNoiseProcess","WhitePoint","Whitespace","WhitespaceCharacter","WhittakerM","WhittakerW","WholeCellGroupOpener","WienerFilter","WienerProcess","WignerD","WignerSemicircleDistribution","WikidataData","WikidataSearch","WikipediaData","WikipediaSearch","WilksW","WilksWTest","WindDirectionData","WindingCount","WindingPolygon","WindowClickSelect","WindowElements","WindowFloating","WindowFrame","WindowFrameElements","WindowMargins","WindowMovable","WindowOpacity","WindowPersistentStyles","WindowSelected","WindowSize","WindowStatusArea","WindowTitle","WindowToolbars","WindowWidth","WindSpeedData","WindVectorData","WinsorizedMean","WinsorizedVariance","WishartMatrixDistribution","With","WithCleanup","WithLock","WolframAlpha","WolframAlphaDate","WolframAlphaQuantity","WolframAlphaResult","WolframCloudSettings","WolframLanguageData","Word","WordBoundary","WordCharacter","WordCloud","WordCount","WordCounts","WordData","WordDefinition","WordFrequency","WordFrequencyData","WordList","WordOrientation","WordSearch","WordSelectionFunction","WordSeparators","WordSpacings","WordStem","WordTranslation","WorkingPrecision","WrapAround","Write","WriteLine","WriteString","Wronskian","XMLElement","XMLObject","XMLTemplate","Xnor","Xor","XYZColor","Yellow","Yesterday","YuleDissimilarity","ZernikeR","ZeroSymmetric","ZeroTest","ZeroWidthTimes","Zeta","ZetaZero","ZIPCodeData","ZipfDistribution","ZoomCenter","ZoomFactor","ZTest","ZTransform","$Aborted","$ActivationGroupID","$ActivationKey","$ActivationUserRegistered","$AddOnsDirectory","$AllowDataUpdates","$AllowExternalChannelFunctions","$AllowInternet","$AssertFunction","$Assumptions","$AsynchronousTask","$AudioDecoders","$AudioEncoders","$AudioInputDevices","$AudioOutputDevices","$BaseDirectory","$BasePacletsDirectory","$BatchInput","$BatchOutput","$BlockchainBase","$BoxForms","$ByteOrdering","$CacheBaseDirectory","$Canceled","$ChannelBase","$CharacterEncoding","$CharacterEncodings","$CloudAccountName","$CloudBase","$CloudConnected","$CloudConnection","$CloudCreditsAvailable","$CloudEvaluation","$CloudExpressionBase","$CloudObjectNameFormat","$CloudObjectURLType","$CloudRootDirectory","$CloudSymbolBase","$CloudUserID","$CloudUserUUID","$CloudVersion","$CloudVersionNumber","$CloudWolframEngineVersionNumber","$CommandLine","$CompilationTarget","$CompilerEnvironment","$ConditionHold","$ConfiguredKernels","$Context","$ContextAliases","$ContextPath","$ControlActiveSetting","$Cookies","$CookieStore","$CreationDate","$CryptographicEllipticCurveNames","$CurrentLink","$CurrentTask","$CurrentWebSession","$DataStructures","$DateStringFormat","$DefaultAudioInputDevice","$DefaultAudioOutputDevice","$DefaultFont","$DefaultFrontEnd","$DefaultImagingDevice","$DefaultKernels","$DefaultLocalBase","$DefaultLocalKernel","$DefaultMailbox","$DefaultNetworkInterface","$DefaultPath","$DefaultProxyRules","$DefaultRemoteBatchSubmissionEnvironment","$DefaultRemoteKernel","$DefaultSystemCredentialStore","$Display","$DisplayFunction","$DistributedContexts","$DynamicEvaluation","$Echo","$EmbedCodeEnvironments","$EmbeddableServices","$EntityStores","$Epilog","$EvaluationCloudBase","$EvaluationCloudObject","$EvaluationEnvironment","$ExportFormats","$ExternalIdentifierTypes","$ExternalStorageBase","$Failed","$FinancialDataSource","$FontFamilies","$FormatType","$FrontEnd","$FrontEndSession","$GeneratedAssetLocation","$GeoEntityTypes","$GeoLocation","$GeoLocationCity","$GeoLocationCountry","$GeoLocationPrecision","$GeoLocationSource","$HistoryLength","$HomeDirectory","$HTMLExportRules","$HTTPCookies","$HTTPRequest","$IgnoreEOF","$ImageFormattingWidth","$ImageResolution","$ImagingDevice","$ImagingDevices","$ImportFormats","$IncomingMailSettings","$InitialDirectory","$Initialization","$InitializationContexts","$Input","$InputFileName","$InputStreamMethods","$Inspector","$InstallationDate","$InstallationDirectory","$InterfaceEnvironment","$InterpreterTypes","$IterationLimit","$KernelCount","$KernelID","$Language","$LaunchDirectory","$LibraryPath","$LicenseExpirationDate","$LicenseID","$LicenseProcesses","$LicenseServer","$LicenseSubprocesses","$LicenseType","$Line","$Linked","$LinkSupported","$LoadedFiles","$LocalBase","$LocalSymbolBase","$MachineAddresses","$MachineDomain","$MachineDomains","$MachineEpsilon","$MachineID","$MachineName","$MachinePrecision","$MachineType","$MaxDisplayedChildren","$MaxExtraPrecision","$MaxLicenseProcesses","$MaxLicenseSubprocesses","$MaxMachineNumber","$MaxNumber","$MaxPiecewiseCases","$MaxPrecision","$MaxRootDegree","$MessageGroups","$MessageList","$MessagePrePrint","$Messages","$MinMachineNumber","$MinNumber","$MinorReleaseNumber","$MinPrecision","$MobilePhone","$ModuleNumber","$NetworkConnected","$NetworkInterfaces","$NetworkLicense","$NewMessage","$NewSymbol","$NotebookInlineStorageLimit","$Notebooks","$NoValue","$NumberMarks","$Off","$OperatingSystem","$Output","$OutputForms","$OutputSizeLimit","$OutputStreamMethods","$Packages","$ParentLink","$ParentProcessID","$PasswordFile","$PatchLevelID","$Path","$PathnameSeparator","$PerformanceGoal","$Permissions","$PermissionsGroupBase","$PersistenceBase","$PersistencePath","$PipeSupported","$PlotTheme","$Post","$Pre","$PreferencesDirectory","$PreInitialization","$PrePrint","$PreRead","$PrintForms","$PrintLiteral","$Printout3DPreviewer","$ProcessID","$ProcessorCount","$ProcessorType","$ProductInformation","$ProgramName","$ProgressReporting","$PublisherID","$RandomGeneratorState","$RandomState","$RecursionLimit","$RegisteredDeviceClasses","$RegisteredUserName","$ReleaseNumber","$RequesterAddress","$RequesterCloudUserID","$RequesterCloudUserUUID","$RequesterWolframID","$RequesterWolframUUID","$ResourceSystemBase","$ResourceSystemPath","$RootDirectory","$ScheduledTask","$ScriptCommandLine","$ScriptInputString","$SecuredAuthenticationKeyTokens","$ServiceCreditsAvailable","$Services","$SessionID","$SetParentLink","$SharedFunctions","$SharedVariables","$SoundDisplay","$SoundDisplayFunction","$SourceLink","$SSHAuthentication","$SubtitleDecoders","$SubtitleEncoders","$SummaryBoxDataSizeLimit","$SuppressInputFormHeads","$SynchronousEvaluation","$SyntaxHandler","$System","$SystemCharacterEncoding","$SystemCredentialStore","$SystemID","$SystemMemory","$SystemShell","$SystemTimeZone","$SystemWordLength","$TargetSystems","$TemplatePath","$TemporaryDirectory","$TemporaryPrefix","$TestFileName","$TextStyle","$TimedOut","$TimeUnit","$TimeZone","$TimeZoneEntity","$TopDirectory","$TraceOff","$TraceOn","$TracePattern","$TracePostAction","$TracePreAction","$UnitSystem","$Urgent","$UserAddOnsDirectory","$UserAgentLanguages","$UserAgentMachine","$UserAgentName","$UserAgentOperatingSystem","$UserAgentString","$UserAgentVersion","$UserBaseDirectory","$UserBasePacletsDirectory","$UserDocumentsDirectory","$Username","$UserName","$UserURLBase","$Version","$VersionNumber","$VideoDecoders","$VideoEncoders","$VoiceStyles","$WolframDocumentsDirectory","$WolframID","$WolframUUID"]
;return t=>{
const i=t.regex,o=i.either(i.concat(/([2-9]|[1-2]\d|[3][0-5])\^\^/,/(\w*\.\w+|\w+\.\w*|\w+)/),/(\d*\.\d+|\d+\.\d*|\d+)/),a=i.either(/``[+-]?(\d*\.\d+|\d+\.\d*|\d+)/,/`([+-]?(\d*\.\d+|\d+\.\d*|\d+))?/),n={
className:"number",relevance:0,
begin:i.concat(o,i.optional(a),i.optional(/\*\^[+-]?\d+/))
},r=/[a-zA-Z$][a-zA-Z0-9$]*/,l=new Set(e),s={variants:[{
className:"builtin-symbol",begin:r,"on:begin":(e,t)=>{
l.has(e[0])||t.ignoreMatch()}},{className:"symbol",relevance:0,begin:r}]},c={
className:"message-name",relevance:0,begin:i.concat("::",r)};return{
name:"Mathematica",aliases:["mma","wl"],classNameAliases:{brace:"punctuation",
pattern:"type",slot:"type",symbol:"variable","named-character":"variable",
"builtin-symbol":"built_in","message-name":"string"},
contains:[t.COMMENT(/\(\*/,/\*\)/,{contains:["self"]}),{className:"pattern",
relevance:0,begin:/([a-zA-Z$][a-zA-Z0-9$]*)?_+([a-zA-Z$][a-zA-Z0-9$]*)?/},{
className:"slot",relevance:0,begin:/#[a-zA-Z$][a-zA-Z0-9$]*|#+[0-9]?/},c,s,{
className:"named-character",begin:/\\\[[$a-zA-Z][$a-zA-Z0-9]+\]/
},t.QUOTE_STRING_MODE,n,{className:"operator",relevance:0,
begin:/[+\-*/,;.:@~=><&|_`'^?!%]+/},{className:"brace",relevance:0,
begin:/[[\](){}]/}]}}})();hljs.registerLanguage("mathematica",e)})();/*! `matlab` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a="('|\\.')+",s={relevance:0,
contains:[{begin:a}]};return{name:"Matlab",keywords:{
keyword:"arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while",
built_in:"sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell "
},illegal:'(//|"|#|/\\*|\\s+/\\w+)',contains:[{className:"function",
beginKeywords:"function",end:"$",contains:[e.UNDERSCORE_TITLE_MODE,{
className:"params",variants:[{begin:"\\(",end:"\\)"},{begin:"\\[",end:"\\]"}]}]
},{className:"built_in",begin:/true|false/,relevance:0,starts:s},{
begin:"[a-zA-Z][a-zA-Z_0-9]*"+a,relevance:0},{className:"number",
begin:e.C_NUMBER_RE,relevance:0,starts:s},{className:"string",begin:"'",end:"'",
contains:[{begin:"''"}]},{begin:/\]|\}|\)/,relevance:0,starts:s},{
className:"string",begin:'"',end:'"',contains:[{begin:'""'}],starts:s
},e.COMMENT("^\\s*%\\{\\s*$","^\\s*%\\}\\s*$"),e.COMMENT("%","$")]}}})()
;hljs.registerLanguage("matlab",e)})();/*! `nestedtext` grammar compiled for Highlight.js 11.10.0 */
(()=>{var t=(()=>{"use strict";return t=>({name:"Nested Text",aliases:["nt"],
contains:[t.inherit(t.HASH_COMMENT_MODE,{begin:/^\s*(?=#)/,excludeBegin:!0}),{
variants:[{match:[/^\s*/,/-/,/[ ]/,/.*$/]},{match:[/^\s*/,/-$/]}],className:{
2:"bullet",4:"string"}},{match:[/^\s*/,/>/,/[ ]/,/.*$/],className:{
2:"punctuation",4:"string"}},{match:[/^\s*(?=\S)/,/[^:]+/,/:\s*/,/$/],
className:{2:"attribute",3:"punctuation"}},{
match:[/^\s*(?=\S)/,/[^:]*[^: ]/,/[ ]*:/,/[ ]/,/.*$/],className:{2:"attribute",
3:"punctuation",5:"string"}}]})})();hljs.registerLanguage("nestedtext",t)})();/*! `nginx` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={
className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{\w+\}/},{
begin:n.concat(/[$@]/,e.UNDERSCORE_IDENT_RE)}]},s={endsWithParent:!0,keywords:{
$pattern:/[a-z_]{2,}|\/dev\/poll/,
literal:["on","off","yes","no","true","false","none","blocked","debug","info","notice","warn","error","crit","select","break","last","permanent","redirect","kqueue","rtsig","epoll","poll","/dev/poll"]
},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",
contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/
}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[a]
},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:"\\s\\^",
end:"\\s|\\{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|\\{|;",returnEnd:!0},{
begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",
begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{
className:"number",begin:"\\b\\d+[kKmMgGdshdwy]?\\b",relevance:0},a]};return{
name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{
beginKeywords:"upstream location",end:/;|\{/,contains:s.contains,keywords:{
section:"upstream location"}},{className:"section",
begin:n.concat(e.UNDERSCORE_IDENT_RE+n.lookahead(/\s+\{/)),relevance:0},{
begin:n.lookahead(e.UNDERSCORE_IDENT_RE+"\\s"),end:";|\\{",contains:[{
className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:s}],relevance:0}],
illegal:"[^\\s\\}\\{]"}}})();hljs.registerLanguage("nginx",e)})();/*! `objectivec` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={
$pattern:n,keyword:["@interface","@class","@protocol","@implementation"]}
;return{name:"Objective-C",
aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{
"variable.language":["this","super"],$pattern:n,
keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],
literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],
built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],
type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]
},illegal:"</",contains:[{className:"built_in",
begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
keywords:{
keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",
begin:"("+_.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:_,
contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,
relevance:0}]}}})();hljs.registerLanguage("objectivec",e)})();/*! `oxygene` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t={$pattern:/\.?\w+/,
keyword:"abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"
},r=e.COMMENT(/\{/,/\}/,{relevance:0}),n=e.COMMENT("\\(\\*","\\*\\)",{
relevance:10}),a={className:"string",begin:"'",end:"'",contains:[{begin:"''"}]
},i={className:"string",begin:"(#\\d+)+"},s={
beginKeywords:"function constructor destructor procedure method",end:"[:;]",
keywords:"function constructor|10 destructor|10 procedure|10 method|10",
contains:[e.inherit(e.TITLE_MODE,{scope:"title.function"}),{className:"params",
begin:"\\(",end:"\\)",keywords:t,contains:[a,i]},r,n]};return{name:"Oxygene",
case_insensitive:!0,keywords:t,illegal:'("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
contains:[r,n,e.C_LINE_COMMENT_MODE,a,i,e.NUMBER_MODE,s,{scope:"punctuation",
match:/;/,relevance:0}]}}})();hljs.registerLanguage("oxygene",e)})();/*! `perl` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=/[dualxmsipngr]{0,12}/,s={$pattern:/[\w.]+/,
keyword:"abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot class close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl field fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map method mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
},r={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:s},a={begin:/->\{/,
end:/\}/},i={scope:"attr",match:/\s+:\s*\w+(\s*\(.*?\))?/},c={scope:"variable",
variants:[{begin:/\$\d/},{
begin:n.concat(/[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")
},{begin:/[$%@](?!")[^\s\w{=]|\$=/,relevance:0}],contains:[i]},o={
className:"number",variants:[{match:/0?\.[0-9][0-9_]+\b/},{
match:/\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/},{
match:/\b0[0-7][0-7_]*\b/},{match:/\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/},{
match:/\b0b[0-1][0-1_]*\b/}],relevance:0
},l=[e.BACKSLASH_ESCAPE,r,c],g=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],d=(e,s,r="\\1")=>{
const a="\\1"===r?r:n.concat(r,s)
;return n.concat(n.concat("(?:",e,")"),s,/(?:\\.|[^\\\/])*?/,a,/(?:\\.|[^\\\/])*?/,r,t)
},m=(e,s,r)=>n.concat(n.concat("(?:",e,")"),s,/(?:\\.|[^\\\/])*?/,r,t),p=[c,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{
endsWithParent:!0}),a,{className:"string",contains:l,variants:[{
begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",
relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{
begin:"-?\\w+\\s*=>",relevance:0}]},o,{
begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
keywords:"split return print reverse grep",relevance:0,
contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{
begin:d("s|tr|y",n.either(...g,{capture:!0}))},{begin:d("s|tr|y","\\(","\\)")},{
begin:d("s|tr|y","\\[","\\]")},{begin:d("s|tr|y","\\{","\\}")}],relevance:2},{
className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{
begin:m("(?:m|qr)?",/\//,/\//)},{begin:m("m|qr",n.either(...g,{capture:!0
}),/\1/)},{begin:m("m|qr",/\(/,/\)/)},{begin:m("m|qr",/\[/,/\]/)},{
begin:m("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub method",
end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE,i]
},{className:"class",beginKeywords:"class",end:"[;{]",excludeEnd:!0,relevance:5,
contains:[e.TITLE_MODE,i,o]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",
end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",
className:"comment"}]}];return r.contains=p,a.contains=p,{name:"Perl",
aliases:["pl","pm"],keywords:s,contains:p}}})();hljs.registerLanguage("perl",e)
})();/*! `pf` grammar compiled for Highlight.js 11.10.0 */
(()=>{var t=(()=>{"use strict";return t=>({name:"Packet Filter config",
aliases:["pf.conf"],keywords:{$pattern:/[a-z0-9_<>-]+/,
built_in:"block match pass load anchor|5 antispoof|10 set table",
keyword:"in out log quick on rdomain inet inet6 proto from port os to route allow-opts divert-packet divert-reply divert-to flags group icmp-type icmp6-type label once probability recieved-on rtable prio queue tos tag tagged user keep fragment for os drop af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin source-hash static-port dup-to reply-to route-to parent bandwidth default min max qlimit block-policy debug fingerprints hostid limit loginterface optimization reassemble ruleset-optimization basic none profile skip state-defaults state-policy timeout const counters persist no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy source-track global rule max-src-nodes max-src-states max-src-conn max-src-conn-rate overload flush scrub|5 max-mss min-ttl no-df|10 random-id",
literal:"all any no-route self urpf-failed egress|5 unknown"},
contains:[t.HASH_COMMENT_MODE,t.NUMBER_MODE,t.QUOTE_STRING_MODE,{
className:"variable",begin:/\$[\w\d#@][\w\d_]*/,relevance:0},{
className:"variable",begin:/<(?!\/)/,end:/>/}]})})()
;hljs.registerLanguage("pf",t)})();/*! `php` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,a=/(?![A-Za-z0-9])(?![$])/,r=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),n=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),o={
scope:"variable",match:"\\$+"+r},c={scope:"subst",variants:[{begin:/\$\w+/},{
begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),s="[ \t\n]",l={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(c)}),i,{
begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(c),"on:begin":(e,t)=>{
t.data._beginMatch=e[1]||e[2]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}},e.END_SAME_AS_BEGIN({
begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},d={scope:"number",variants:[{
begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
}],relevance:0
},_=["false","null","true"],p=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],b=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],E={
keyword:p,literal:(e=>{const t=[];return e.forEach((e=>{
t.push(e),e.toLowerCase()===e?t.push(e.toUpperCase()):t.push(e.toLowerCase())
})),t})(_),built_in:b},u=e=>e.map((e=>e.replace(/\|\d+$/,""))),g={variants:[{
match:[/new/,t.concat(s,"+"),t.concat("(?!",u(b).join("\\b|"),"\\b)"),n],scope:{
1:"keyword",4:"title.class"}}]},h=t.concat(r,"\\b(?!\\()"),m={variants:[{
match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),h],scope:{2:"variable.constant"
}},{match:[/::/,/class/],scope:{2:"variable.language"}},{
match:[n,t.concat(/::/,t.lookahead(/(?!class\b)/)),h],scope:{1:"title.class",
3:"variable.constant"}},{match:[n,t.concat("::",t.lookahead(/(?!class\b)/))],
scope:{1:"title.class"}},{match:[n,/::/,/class/],scope:{1:"title.class",
3:"variable.language"}}]},I={scope:"attr",
match:t.concat(r,t.lookahead(":"),t.lookahead(/(?!::)/))},f={relevance:0,
begin:/\(/,end:/\)/,keywords:E,contains:[I,o,m,e.C_BLOCK_COMMENT_MODE,l,d,g]
},O={relevance:0,
match:[/\b/,t.concat("(?!fn\\b|function\\b|",u(p).join("\\b|"),"|",u(b).join("\\b|"),"\\b)"),r,t.concat(s,"*"),t.lookahead(/(?=\()/)],
scope:{3:"title.function.invoke"},contains:[f]};f.contains.push(O)
;const v=[I,m,e.C_BLOCK_COMMENT_MODE,l,d,g];return{case_insensitive:!1,
keywords:E,contains:[{begin:t.concat(/#\[\s*/,n),beginScope:"meta",end:/]/,
endScope:"meta",keywords:{literal:_,keyword:["new","array"]},contains:[{
begin:/\[/,end:/]/,keywords:{literal:_,keyword:["new","array"]},
contains:["self",...v]},...v,{scope:"meta",match:n}]
},e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{
scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{
begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},o,O,m,{
match:[/const/,/\s/,r],scope:{1:"keyword",3:"variable.constant"}},g,{
scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:E,
contains:["self",o,m,e.C_BLOCK_COMMENT_MODE,l,d]}]},{scope:"class",variants:[{
beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{
beginKeywords:"use",relevance:0,end:";",contains:[{
match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},l,d]}
}})();hljs.registerLanguage("php",e)})();/*! `php-template` grammar compiled for Highlight.js 11.10.0 */
(()=>{var n=(()=>{"use strict";return n=>({name:"PHP template",
subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",
contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{
begin:"b'",end:"'",skip:!0},n.inherit(n.APOS_STRING_MODE,{illegal:null,
className:null,contains:null,skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{
illegal:null,className:null,contains:null,skip:!0})]}]})})()
;hljs.registerLanguage("php-template",n)})();/*! `plaintext` grammar compiled for Highlight.js 11.10.0 */
(()=>{var t=(()=>{"use strict";return t=>({name:"Plain text",
aliases:["text","txt"],disableAutodetect:!0})})()
;hljs.registerLanguage("plaintext",t)})();/*! `powershell` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n={$pattern:/-?[A-z\.\-]+\b/,
keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",
built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"
},s={begin:"`[\\s\\S]",relevance:0},i={className:"variable",variants:[{
begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]
},a={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],
contains:[s,i,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},t={
className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]
},r=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,
end:/#>/}],contains:[{className:"doctag",variants:[{
begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
},{
begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
}]}]}),c={className:"class",beginKeywords:"class enum",end:/\s*[{]/,
excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},l={className:"function",
begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,
contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",
begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,
className:"params",relevance:0,contains:[i]}]},o={begin:/using\s/,end:/$/,
returnBegin:!0,contains:[a,t,{className:"keyword",
begin:/(using|assembly|command|module|namespace|type)/}]},p={
className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,
relevance:0,contains:[{className:"keyword",
begin:"(".concat(n.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,
relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]
},g=[p,r,s,e.NUMBER_MODE,a,t,{className:"built_in",variants:[{
begin:"(Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where)+(-)[\\w\\d]+"
}]},i,{className:"literal",begin:/\$(null|true|false)\b/},{
className:"selector-tag",begin:/@\B/,relevance:0}],m={begin:/\[/,end:/\]/,
excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",g,{
begin:"(string|char|byte|int|long|bool|decimal|single|double|DateTime|xml|array|hashtable|void)",
className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,
relevance:0})};return p.contains.unshift(m),{name:"PowerShell",
aliases:["pwsh","ps","ps1"],case_insensitive:!0,keywords:n,
contains:g.concat(c,l,o,{variants:[{className:"operator",
begin:"(-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor)\\b"
},{className:"literal",begin:/(-){1,2}[\w\d-]+/,relevance:0}]},m)}}})()
;hljs.registerLanguage("powershell",e)})();/*! `profile` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Python profiler",
contains:[e.C_NUMBER_MODE,{begin:"[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
end:":",excludeEnd:!0},{begin:"(ncalls|tottime|cumtime)",end:"$",
keywords:"ncalls tottime|10 cumtime|10 filename",relevance:10},{
begin:"function calls",end:"$",contains:[e.C_NUMBER_MODE],relevance:10
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:"\\(",
end:"\\)$",excludeBegin:!0,excludeEnd:!0,relevance:0}]})})()
;hljs.registerLanguage("profile",e)})();/*! `properties` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="[ \\t\\f]*",t=n+"[:=]"+n,s="[ \\t\\f]+",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",r={
end:"("+t+"|"+s+")",relevance:0,starts:{className:"string",end:/$/,relevance:0,
contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",
disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,
contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:a+t},{
begin:a+s}],contains:[{className:"attr",begin:a,endsParent:!0}],starts:r},{
className:"attr",begin:a+n+"$"}]}}})();hljs.registerLanguage("properties",e)
})();/*! `protobuf` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const s={
match:[/(message|enum|service)\s+/,e.IDENT_RE],scope:{1:"keyword",
2:"title.class"}};return{name:"Protocol Buffers",aliases:["proto"],keywords:{
keyword:["package","import","option","optional","required","repeated","group","oneof"],
type:["double","float","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","bool","string","bytes"],
literal:["true","false"]},
contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{
className:"function",beginKeywords:"rpc",end:/[{;]/,excludeEnd:!0,
keywords:"rpc returns"},{begin:/^\s*[A-Z_]+(?=\s*=[^\n]+;$)/}]}}})()
;hljs.registerLanguage("protobuf",e)})();/*! `puppet` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const s=e.COMMENT("#","$"),r="([A-Za-z_]|::)(\\w|::)*",a=e.inherit(e.TITLE_MODE,{
begin:r}),n={className:"variable",begin:"\\$"+r},i={className:"string",
contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
}]};return{name:"Puppet",aliases:["pp"],contains:[s,n,i,{beginKeywords:"class",
end:"\\{|;",illegal:/=/,contains:[a,s]},{beginKeywords:"define",end:/\{/,
contains:[{className:"section",begin:e.IDENT_RE,endsParent:!0}]},{
begin:e.IDENT_RE+"\\s+\\{",returnBegin:!0,end:/\S/,contains:[{
className:"keyword",begin:e.IDENT_RE,relevance:.2},{begin:/\{/,end:/\}/,
keywords:{
keyword:"and case default else elsif false if in import enherits node or true undef unless main settings $string ",
literal:"alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
built_in:"architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
},relevance:0,contains:[i,s,{begin:"[a-zA-Z_]+\\s*=>",returnBegin:!0,end:"=>",
contains:[{className:"attr",begin:e.IDENT_RE}]},{className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},n]}],relevance:0}]}}})();hljs.registerLanguage("puppet",e)})();/*! `python` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,s=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],t={
$pattern:/[A-Za-z]\w+|__\w+__/,keyword:s,
built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],
type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]
},i={className:"meta",begin:/^(>>>|\.\.\.) /},r={className:"subst",begin:/\{/,
end:/\}/,keywords:t,illegal:/#/},l={begin:/\{\{/,relevance:0},o={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,i,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,i,l,r]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,l,r]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},b="[0-9](_?[0-9])*",c=`(\\b(${b}))?\\.(${b})|\\b(${b})\\.`,d="\\b|"+s.join("|"),g={
className:"number",relevance:0,variants:[{
begin:`(\\b(${b})|(${c}))[eE][+-]?(${b})[jJ]?(?=${d})`},{begin:`(${c})[jJ]?`},{
begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{
begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`
},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${b})[jJ](?=${d})`
}]},p={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:t,
contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={
className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,
contains:["self",i,g,o,e.HASH_COMMENT_MODE]}]};return r.contains=[o,g,i],{
name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:t,
illegal:/(<\/|\?)|=>/,contains:[i,g,{scope:"variable.language",match:/\bself\b/
},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"
},o,p,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{1:"keyword",
3:"title.function"},contains:[m]},{variants:[{
match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],
scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{
className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,m,o]}]}}})()
;hljs.registerLanguage("python",e)})();/*! `python-repl` grammar compiled for Highlight.js 11.10.0 */
(()=>{var a=(()=>{"use strict";return a=>({aliases:["pycon"],contains:[{
className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}
},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]})})()
;hljs.registerLanguage("python-repl",a)})();/*! `r` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=a.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,t=a.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/)
;return{name:"R",keywords:{$pattern:n,
keyword:"function if in break next repeat else for while",
literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,
starts:{end:a.lookahead(a.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),
endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{
scope:"variable",variants:[{match:n},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0
}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]
}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{
1:"operator",2:"number"},match:[s,i]},{scope:{1:"operator",2:"number"},
match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[t,i]},{scope:{
2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},
match:[n,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{
match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:t},{begin:"`",end:"`",
contains:[{begin:/\\./}]}]}}})();hljs.registerLanguage("r",e)})();/*! `roboconf` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n="[a-zA-Z-_][^\\n{]+\\{",a={
className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{
end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{
className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",
aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{
begin:"^facet "+n,end:/\}/,keywords:"facet",contains:[a,e.HASH_COMMENT_MODE]},{
begin:"^\\s*instance of "+n,end:/\}/,
keywords:"name count channels instance-data instance-state instance of",
illegal:/\S/,contains:["self",a,e.HASH_COMMENT_MODE]},{begin:"^"+n,end:/\}/,
contains:[a,e.HASH_COMMENT_MODE]},e.HASH_COMMENT_MODE]}}})()
;hljs.registerLanguage("roboconf",e)})();/*! `ruby` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",s=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=n.concat(s,/(::\w+)*/),t={
"variable.constant":["__FILE__","__LINE__","__ENCODING__"],
"variable.language":["self","super"],
keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield","include","extend","prepend","public","private","protected","raise","throw"],
built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],
literal:["true","false","nil"]},c={className:"doctag",begin:"@[A-Za-z]+"},r={
begin:"#<",end:">"},b=[e.COMMENT("#","$",{contains:[c]
}),e.COMMENT("^=begin","^=end",{contains:[c],relevance:10
}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],l={className:"subst",begin:/#\{/,
end:/\}/,keywords:t},d={className:"string",contains:[e.BACKSLASH_ESCAPE,l],
variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{
begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{
begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,
end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{
begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{
begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{
begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{
begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{
begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
contains:[e.BACKSLASH_ESCAPE,l]})]}]},o="[0-9](_?[0-9])*",g={className:"number",
relevance:0,variants:[{
begin:`\\b([1-9](_?[0-9])*|0)(\\.(${o}))?([eE][+-]?(${o})|r)?i?\\b`},{
begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
begin:"\\b0(_?[0-7])+r?i?\\b"}]},_={variants:[{match:/\(\)/},{
className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,
keywords:t}]},u=[d,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{
match:[/\b(class|module)\s+/,i]}],scope:{2:"title.class",
4:"title.class.inherited"},keywords:t},{match:[/(include|extend)\s+/,i],scope:{
2:"title.class"},keywords:t},{relevance:0,match:[i,/\.new[. (]/],scope:{
1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},{relevance:0,match:s,scope:"title.class"},{
match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[_]},{
begin:e.IDENT_RE+"::"},{className:"symbol",
begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",
begin:":(?!\\s)",contains:[d,{begin:a}],relevance:0},g,{className:"variable",
begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,
relevance:0,keywords:t},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",
keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,l],
illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{
begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",
end:"\\][a-z]*"}]}].concat(r,b),relevance:0}].concat(r,b)
;l.contains=u,_.contains=u;const m=[{begin:/^\s*=>/,starts:{end:"$",contains:u}
},{className:"meta.prompt",
begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
starts:{end:"$",keywords:t,contains:u}}];return b.unshift(r),{name:"Ruby",
aliases:["rb","gemspec","podspec","thor","irb"],keywords:t,illegal:/\/\*/,
contains:[e.SHEBANG({binary:"ruby"})].concat(m).concat(b).concat(u)}}})()
;hljs.registerLanguage("ruby",e)})();/*! `rust` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,n=/(r#)?/,a=t.concat(n,e.UNDERSCORE_IDENT_RE),i=t.concat(n,e.IDENT_RE),r={
className:"title.function.invoke",relevance:0,
begin:t.concat(/\b/,/(?!let|for|while|if|else|match\b)/,i,t.lookahead(/\s*\(/))
},s="([ui](8|16|32|64|128|size)|f(32|64))?",l=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],o=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"]
;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:o,
keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","union","unsafe","unsized","use","virtual","where","while","yield"],
literal:["true","false","Some","None","Ok","Err"],built_in:l},illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
begin:"\\b0b([01_]+)"+s},{begin:"\\b0o([0-7_]+)"+s},{
begin:"\\b0x([A-Fa-f0-9_]+)"+s},{
begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+s}],relevance:0},{
begin:[/fn/,/\s+/,a],className:{1:"keyword",3:"title.function"}},{
className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",
begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]}]},{
begin:[/let/,/\s+/,/(?:mut\s+)?/,a],className:{1:"keyword",3:"keyword",
4:"variable"}},{begin:[/for/,/\s+/,a,/\s+/,/in/],className:{1:"keyword",
3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,a],className:{1:"keyword",
3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,a],
className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{
keyword:"Self",built_in:l,type:o}},{className:"punctuation",begin:"->"},r]}}})()
;hljs.registerLanguage("rust",e)})();/*! `scala` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"subst",
variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:/\$\{/,end:/\}/}]},s={
className:"string",variants:[{begin:'"""',end:'"""'},{begin:'"',end:'"',
illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:'[a-z]+"',end:'"',
illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,a]},{className:"string",
begin:'[a-z]+"""',end:'"""',contains:[a],relevance:10}]},i={className:"type",
begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},t={className:"title",
begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
relevance:0},c={className:"class",beginKeywords:"class object trait type",
end:/[:={\[\n;]/,excludeEnd:!0,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,
excludeEnd:!0,relevance:0,
contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"params",
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,
contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},t]},r={
className:"function",beginKeywords:"def",end:n.lookahead(/[:={\[(\n;]/),
contains:[t]};return{name:"Scala",keywords:{literal:"true false null",
keyword:"type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given transparent"
},contains:[{begin:["//>",/\s+/,/using/,/\s+/,/\S+/],beginScope:{1:"comment",
3:"keyword",5:"type"},end:/$/,contains:[{className:"string",begin:/\S+/}]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,i,r,c,e.C_NUMBER_MODE,{
begin:[/^\s*/,"extension",/\s+(?=[[(])/],beginScope:{2:"keyword"}},{
begin:[/^\s*/,/end/,/\s+/,/(extension\b)?/],beginScope:{2:"keyword",4:"keyword"}
},{match:/\.inline\b/},{begin:/\binline(?=\s)/,keywords:"inline"},{
begin:[/\(\s*/,/using/,/\s+(?!\))/],beginScope:{2:"keyword"}},{className:"meta",
begin:"@[A-Za-z]+"}]}}})();hljs.registerLanguage("scala",e)})();/*! `scheme` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t="[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",n="(-|\\+)?\\d+([./]\\d+)?",r={
$pattern:t,
built_in:"case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
},a={className:"literal",begin:"(#t|#f|#\\\\"+t+"|#\\\\.)"},i={
className:"number",variants:[{begin:n,relevance:0},{begin:n+"[+\\-]"+n+"i",
relevance:0},{begin:"#b[0-1]+(/[0-1]+)?"},{begin:"#o[0-7]+(/[0-7]+)?"},{
begin:"#x[0-9a-f]+(/[0-9a-f]+)?"}]},c=e.QUOTE_STRING_MODE,s=[e.COMMENT(";","$",{
relevance:0}),e.COMMENT("#\\|","\\|#")],l={begin:t,relevance:0},o={
className:"symbol",begin:"'"+t},g={endsWithParent:!0,relevance:0},u={variants:[{
begin:/'/},{begin:"`"}],contains:[{begin:"\\(",end:"\\)",
contains:["self",a,c,i,l,o]}]},d={className:"name",relevance:0,begin:t,
keywords:r},p={variants:[{begin:"\\(",end:"\\)"},{begin:"\\[",end:"\\]"}],
contains:[{begin:/lambda/,endsWithParent:!0,returnBegin:!0,contains:[d,{
endsParent:!0,variants:[{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/}],
contains:[l]}]},d,g]};return g.contains=[a,i,c,l,o,u,p].concat(s),{
name:"Scheme",aliases:["scm"],illegal:/\S/,
contains:[e.SHEBANG(),i,c,o,u,p].concat(s)}}})()
;hljs.registerLanguage("scheme",e)})();/*! `scss` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),t=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),o=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse()
;return n=>{const a=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
}))(n),l=i,s=t,d="@[a-z-]+",c={className:"variable",
begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",relevance:0};return{name:"SCSS",
case_insensitive:!0,illegal:"[=/|']",
contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,a.CSS_NUMBER_MODE,{
className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0
},a.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",
begin:"\\b("+e.join("|")+")\\b",relevance:0},{className:"selector-pseudo",
begin:":("+s.join("|")+")"},{className:"selector-pseudo",
begin:":(:)?("+l.join("|")+")"},c,{begin:/\(/,end:/\)/,
contains:[a.CSS_NUMBER_MODE]},a.CSS_VARIABLE,{className:"attribute",
begin:"\\b("+o.join("|")+")\\b"},{
begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
},{begin:/:/,end:/[;}{]/,relevance:0,
contains:[a.BLOCK_COMMENT,c,a.HEXCOLOR,a.CSS_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,a.IMPORTANT,a.FUNCTION_DISPATCH]
},{begin:"@(page|font-face)",keywords:{$pattern:d,keyword:"@page @font-face"}},{
begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,
keyword:"and or not only",attribute:r.join(" ")},contains:[{begin:d,
className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"
},c,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,a.HEXCOLOR,a.CSS_NUMBER_MODE]
},a.FUNCTION_DISPATCH]}}})();hljs.registerLanguage("scss",e)})();/*! `shell` grammar compiled for Highlight.js 11.10.0 */
(()=>{var s=(()=>{"use strict";return s=>({name:"Shell Session",
aliases:["console","shellsession"],contains:[{className:"meta.prompt",
begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,
subLanguage:"bash"}}]})})();hljs.registerLanguage("shell",s)})();/*! `sql` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const r=e.regex,t=e.COMMENT("--","$"),n=["true","false","unknown"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],i=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=i,c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!i.includes(e))),l={
begin:r.concat(/\b/,r.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}}
;return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
$pattern:/\b[\w\.]+/,keyword:((e,{exceptions:r,when:t}={})=>{const n=t
;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
})(c,{when:e=>e.length<3}),literal:n,type:a,
built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
},contains:[{begin:r.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
keyword:c.concat(s),literal:n,type:a}},{className:"type",
begin:r.either("double precision","large object","with timezone","without timezone")
},l,{className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},{className:"string",
variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,
contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,{
className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
relevance:0}]}}})();hljs.registerLanguage("sql",e)})();/*! `stylus` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video","defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),o=["accent-color","align-content","align-items","align-self","alignment-baseline","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-end-end-radius","border-end-start-radius","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","cx","cy","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","empty-cells","enable-background","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","flood-color","flood-opacity","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","kerning","justify-content","justify-items","justify-self","left","letter-spacing","lighting-color","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","marker","marker-end","marker-mid","marker-start","mask","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","scale","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","speak","speak-as","src","tab-size","table-layout","text-anchor","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-offset","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","vector-effect","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index"].sort().reverse()
;return n=>{const a=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}
}))(n),l={className:"variable",begin:"\\$"+n.IDENT_RE},s="(?=[.\\s\\n[:,(])"
;return{name:"Stylus",aliases:["styl"],case_insensitive:!1,
keywords:"if else for in",
illegal:"(\\?|(\\bReturn\\b)|(\\bEnd\\b)|(\\bend\\b)|(\\bdef\\b)|;|#\\s|\\*\\s|===\\s|\\||%)",
contains:[n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,a.HEXCOLOR,{
begin:"\\.[a-zA-Z][a-zA-Z0-9_-]*"+s,className:"selector-class"},{
begin:"#[a-zA-Z][a-zA-Z0-9_-]*"+s,className:"selector-id"},{
begin:"\\b("+e.join("|")+")"+s,className:"selector-tag"},{
className:"selector-pseudo",begin:"&?:("+r.join("|")+")"+s},{
className:"selector-pseudo",begin:"&?:(:)?("+i.join("|")+")"+s
},a.ATTRIBUTE_SELECTOR_MODE,{className:"keyword",begin:/@media/,starts:{
end:/[{;}]/,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",
attribute:t.join(" ")},contains:[a.CSS_NUMBER_MODE]}},{className:"keyword",
begin:"@((-(o|moz|ms|webkit)-)?(charset|css|debug|extend|font-face|for|import|include|keyframes|media|mixin|page|warn|while))\\b"
},l,a.CSS_NUMBER_MODE,{className:"function",
begin:"^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",illegal:"[\\n]",returnBegin:!0,
contains:[{className:"title",begin:"\\b[a-zA-Z][a-zA-Z0-9_-]*"},{
className:"params",begin:/\(/,end:/\)/,
contains:[a.HEXCOLOR,l,n.APOS_STRING_MODE,a.CSS_NUMBER_MODE,n.QUOTE_STRING_MODE]
}]},a.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b",
starts:{end:/;|$/,
contains:[a.HEXCOLOR,l,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,a.CSS_NUMBER_MODE,n.C_BLOCK_COMMENT_MODE,a.IMPORTANT,a.FUNCTION_DISPATCH],
illegal:/\./,relevance:0}},a.FUNCTION_DISPATCH]}}})()
;hljs.registerLanguage("stylus",e)})();/*! `swift` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(e){return t("(?=",e,")")}
function t(...n){return n.map((n=>e(n))).join("")}function a(...n){const t=(e=>{
const n=e[e.length-1]
;return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}
})(n);return"("+(t.capture?"":"?:")+n.map((n=>e(n))).join("|")+")"}
const i=e=>t(/\b/,e,/\w$/.test(e)?/\b/:/\B/),s=["Protocol","Type"].map(i),c=["init","self"].map(i),u=["Any","Self"],o=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],r=["false","nil","true"],l=["assignment","associativity","higherThan","left","lowerThan","none","right"],m=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],d=a(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=a(d,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),b=t(d,F,"*"),h=a(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=a(h,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),w=t(h,f,"*"),g=t(/[A-Z]/,f,"*"),y=["attached","autoclosure",t(/convention\(/,a("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",t(/objc\(/,w,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],v=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
;return e=>{const d={match:/\s+/,relevance:0},h=e.COMMENT("/\\*","\\*/",{
contains:["self"]}),E=[e.C_LINE_COMMENT_MODE,h],A={match:[/\./,a(...s,...c)],
className:{2:"keyword"}},C={match:t(/\./,a(...o)),relevance:0
},k=o.filter((e=>"string"==typeof e)).concat(["_|0"]),N={variants:[{
className:"keyword",
match:a(...o.filter((e=>"string"!=typeof e)).concat(u).map(i),...c)}]},S={
$pattern:a(/\b\w+/,/#\w+/),keyword:k.concat(m),literal:r},B=[A,C,N],D=[{
match:t(/\./,a(...p)),relevance:0},{className:"built_in",
match:t(/\b/,a(...p),/(?=\()/)}],_={match:/->/,relevance:0},M=[_,{
className:"operator",relevance:0,variants:[{match:b},{match:`\\.(\\.|${F})+`}]
}],x="([0-9]_*)+",L="([0-9a-fA-F]_*)+",$={className:"number",relevance:0,
variants:[{match:`\\b(${x})(\\.(${x}))?([eE][+-]?(${x}))?\\b`},{
match:`\\b0x(${L})(\\.(${L}))?([pP][+-]?(${x}))?\\b`},{match:/\b0o([0-7]_*)+\b/
},{match:/\b0b([01]_*)+\b/}]},I=(e="")=>({className:"subst",variants:[{
match:t(/\\/,e,/[0\\tnr"']/)},{match:t(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]
}),O=(e="")=>({className:"subst",match:t(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)
}),P=(e="")=>({className:"subst",label:"interpol",begin:t(/\\/,e,/\(/),end:/\)/
}),j=(e="")=>({begin:t(e,/"""/),end:t(/"""/,e),contains:[I(e),O(e),P(e)]
}),K=(e="")=>({begin:t(e,/"/),end:t(/"/,e),contains:[I(e),P(e)]}),T={
className:"string",
variants:[j(),j("#"),j("##"),j("###"),K(),K("#"),K("##"),K("###")]
},q=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,
contains:[e.BACKSLASH_ESCAPE]}],U={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,
contains:q},z=e=>{const n=t(e,/\//),a=t(/\//,e);return{begin:n,end:a,
contains:[...q,{scope:"comment",begin:`#(?!.*${a})`,end:/$/}]}},V={
scope:"regexp",variants:[z("###"),z("##"),z("#"),U]},W={match:t(/`/,w,/`/)
},Z=[W,{className:"variable",match:/\$\d+/},{className:"variable",
match:`\\$${f}+`}],G=[{match:/(@|#(un)?)available/,scope:"keyword",starts:{
contains:[{begin:/\(/,end:/\)/,keywords:v,contains:[...M,$,T]}]}},{
scope:"keyword",match:t(/@/,a(...y),n(a(/\(/,/\s+/)))},{scope:"meta",
match:t(/@/,w)}],H={match:n(/\b[A-Z]/),relevance:0,contains:[{className:"type",
match:t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
},{className:"type",match:g,relevance:0},{match:/[?!]+/,relevance:0},{
match:/\.\.\./,relevance:0},{match:t(/\s+&\s+/,n(g)),relevance:0}]},R={
begin:/</,end:/>/,keywords:S,contains:[...E,...B,...G,_,H]};H.contains.push(R)
;const X={begin:/\(/,end:/\)/,relevance:0,keywords:S,contains:["self",{
match:t(w,/\s*:/),keywords:"_|0",relevance:0
},...E,V,...B,...D,...M,$,T,...Z,...G,H]},J={begin:/</,end:/>/,
keywords:"repeat each",contains:[...E,H]},Q={begin:/\(/,end:/\)/,keywords:S,
contains:[{begin:a(n(t(w,/\s*:/)),n(t(w,/\s+/,w,/\s*:/))),end:/:/,relevance:0,
contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:w}]
},...E,...B,...M,$,T,...G,H,X],endsParent:!0,illegal:/["']/},Y={
match:[/(func|macro)/,/\s+/,a(W.match,w,b)],className:{1:"keyword",
3:"title.function"},contains:[J,Q,d],illegal:[/\[/,/%/]},ee={
match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},
contains:[J,Q,d],illegal:/\[|%/},ne={match:[/operator/,/\s+/,b],className:{
1:"keyword",3:"title"}},te={begin:[/precedencegroup/,/\s+/,g],className:{
1:"keyword",3:"title"},contains:[H],keywords:[...l,...r],end:/}/},ae={
begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,w,/\s*/],
beginScope:{1:"keyword",3:"title.class"},keywords:S,contains:[J,...B,{begin:/:/,
end:/\{/,keywords:S,contains:[{scope:"title.class.inherited",match:g},...B],
relevance:0}]};for(const e of T.variants){
const n=e.contains.find((e=>"interpol"===e.label));n.keywords=S
;const t=[...B,...D,...M,$,T,...Z];n.contains=[...t,{begin:/\(/,end:/\)/,
contains:["self",...t]}]}return{name:"Swift",keywords:S,
contains:[...E,Y,ee,ae,ne,te,{beginKeywords:"import",end:/$/,contains:[...E],
relevance:0},V,...B,...D,...M,$,T,...Z,...G,H,X]}}})()
;hljs.registerLanguage("swift",e)})();/*! `thrift` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=["bool","byte","i16","i32","i64","double","string","binary"];return{
name:"Thrift",keywords:{
keyword:["namespace","const","typedef","struct","enum","service","exception","void","oneway","set","list","map","required","optional"],
type:t,literal:"true false"},
contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"class",beginKeywords:"struct enum service exception",end:/\{/,
illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,
excludeEnd:!0}})]},{begin:"\\b(set|list|map)\\s*<",keywords:{
type:[...t,"set","list","map"]},end:">",contains:["self"]}]}}})()
;hljs.registerLanguage("thrift",e)})();/*! `typescript` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s)
;function o(o){const l=o.regex,d=e,b={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch())
;const r=e.input.substring(a)
;((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={
className:"number",variants:[{
begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{
begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},p={begin:".?html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},N={
begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},f={begin:".?gql`",end:"",
starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],
subLanguage:"graphql"}},_={className:"string",begin:"`",end:"`",
contains:[o.BACKSLASH_ESCAPE,y]},h={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},S=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,p,N,f,_,{match:/\$\d+/},A]
;y.contains=S.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(S)
});const v=[].concat(h,y.contains),w=v.concat([{begin:/(\s*)\(/,end:/\)/,
keywords:g,contains:["self"].concat(v)}]),R={className:"params",begin:/(\s*)\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},k={variants:[{
match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,l.concat(d,"(",l.concat(/\./,d),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},x={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},O={variants:[{
match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],
illegal:/%/},I={
match:l.concat(/\b/,(C=[...r,"super","import"].map((e=>e+"\\s*\\(")),
l.concat("(?!",C.join("|"),")")),d,l.lookahead(/\s*\(/)),
className:"title.function",relevance:0};var C;const T={
begin:l.concat(/\./,l.lookahead(l.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={
match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},R]
},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={
match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]}
;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:w,CLASS_REFERENCE:x},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,p,N,f,_,h,{match:/\$\d+/},A,x,{
className:"attr",begin:d+l.lookahead(":"),relevance:0},$,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[h,o.REGEXP_MODE,{
className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0
},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:b.begin,
"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{
begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},O,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:d,
className:"title.function"})]},{match:/\.\.\./,relevance:0},T,{match:"\\$"+d,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[R]},I,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},k,M,{match:/\$[(.]/}]}}return t=>{
const s=o(t),r=e,l=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],d={
begin:[/namespace/,/\s+/,t.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}
},b={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{
keyword:"interface extends",built_in:l},contains:[s.exports.CLASS_REFERENCE]
},g={$pattern:e,
keyword:n.concat(["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"]),
literal:a,built_in:i.concat(l),"variable.language":c},u={className:"meta",
begin:"@"+r},m=(e,n,a)=>{const t=e.contains.findIndex((e=>e.label===n))
;if(-1===t)throw Error("can not find mode to replace");e.contains.splice(t,1,a)}
;Object.assign(s.keywords,g),s.exports.PARAMS_CONTAINS.push(u)
;const E=s.contains.find((e=>"attr"===e.className))
;return s.exports.PARAMS_CONTAINS.push([s.exports.CLASS_REFERENCE,E]),
s.contains=s.contains.concat([u,d,b]),
m(s,"shebang",t.SHEBANG()),m(s,"use_strict",{className:"meta",relevance:10,
begin:/^\s*['"]use strict['"]/
}),s.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(s,{
name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),s}})()
;hljs.registerLanguage("typescript",e)})();/*! `vbnet` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=/\d{1,2}\/\d{1,2}\/\d{4}/,a=/\d{4}-\d{1,2}-\d{1,2}/,i=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,s=/\d{1,2}(:\d{1,2}){1,2}/,r={
className:"literal",variants:[{begin:n.concat(/# */,n.either(a,t),/ *#/)},{
begin:n.concat(/# */,s,/ *#/)},{begin:n.concat(/# */,i,/ *#/)},{
begin:n.concat(/# */,n.either(a,t),/ +/,n.either(i,s),/ *#/)}]
},l=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]
}),o=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]})
;return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,
classNameAliases:{label:"symbol"},keywords:{
keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
literal:"true false nothing"},
illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{
className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,
end:/"/,illegal:/\n/,contains:[{begin:/""/}]},r,{className:"number",relevance:0,
variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{
begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{
className:"label",begin:/^\w+:/},l,o,{className:"meta",
begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
end:/$/,keywords:{
keyword:"const disable else elseif enable end externalsource if region then"},
contains:[o]}]}}})();hljs.registerLanguage("vbnet",e)})();/*! `verilog` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=["begin_keywords","celldefine","default_nettype","default_decay_time","default_trireg_strength","define","delay_mode_distributed","delay_mode_path","delay_mode_unit","delay_mode_zero","else","elsif","end_keywords","endcelldefine","endif","ifdef","ifndef","include","line","nounconnected_drive","pragma","resetall","timescale","unconnected_drive","undef","undefineall"]
;return{name:"Verilog",aliases:["v","sv","svh"],case_insensitive:!1,keywords:{
$pattern:/\$?[\w]+(\$[\w]+)*/,
keyword:["accept_on","alias","always","always_comb","always_ff","always_latch","and","assert","assign","assume","automatic","before","begin","bind","bins","binsof","bit","break","buf|0","bufif0","bufif1","byte","case","casex","casez","cell","chandle","checker","class","clocking","cmos","config","const","constraint","context","continue","cover","covergroup","coverpoint","cross","deassign","default","defparam","design","disable","dist","do","edge","else","end","endcase","endchecker","endclass","endclocking","endconfig","endfunction","endgenerate","endgroup","endinterface","endmodule","endpackage","endprimitive","endprogram","endproperty","endspecify","endsequence","endtable","endtask","enum","event","eventually","expect","export","extends","extern","final","first_match","for","force","foreach","forever","fork","forkjoin","function","generate|5","genvar","global","highz0","highz1","if","iff","ifnone","ignore_bins","illegal_bins","implements","implies","import","incdir","include","initial","inout","input","inside","instance","int","integer","interconnect","interface","intersect","join","join_any","join_none","large","let","liblist","library","local","localparam","logic","longint","macromodule","matches","medium","modport","module","nand","negedge","nettype","new","nexttime","nmos","nor","noshowcancelled","not","notif0","notif1","or","output","package","packed","parameter","pmos","posedge","primitive","priority","program","property","protected","pull0","pull1","pulldown","pullup","pulsestyle_ondetect","pulsestyle_onevent","pure","rand","randc","randcase","randsequence","rcmos","real","realtime","ref","reg","reject_on","release","repeat","restrict","return","rnmos","rpmos","rtran","rtranif0","rtranif1","s_always","s_eventually","s_nexttime","s_until","s_until_with","scalared","sequence","shortint","shortreal","showcancelled","signed","small","soft","solve","specify","specparam","static","string","strong","strong0","strong1","struct","super","supply0","supply1","sync_accept_on","sync_reject_on","table","tagged","task","this","throughout","time","timeprecision","timeunit","tran","tranif0","tranif1","tri","tri0","tri1","triand","trior","trireg","type","typedef","union","unique","unique0","unsigned","until","until_with","untyped","use","uwire","var","vectored","virtual","void","wait","wait_order","wand","weak","weak0","weak1","while","wildcard","wire","with","within","wor","xnor","xor"],
literal:["null"],
built_in:["$finish","$stop","$exit","$fatal","$error","$warning","$info","$realtime","$time","$printtimescale","$bitstoreal","$bitstoshortreal","$itor","$signed","$cast","$bits","$stime","$timeformat","$realtobits","$shortrealtobits","$rtoi","$unsigned","$asserton","$assertkill","$assertpasson","$assertfailon","$assertnonvacuouson","$assertoff","$assertcontrol","$assertpassoff","$assertfailoff","$assertvacuousoff","$isunbounded","$sampled","$fell","$changed","$past_gclk","$fell_gclk","$changed_gclk","$rising_gclk","$steady_gclk","$coverage_control","$coverage_get","$coverage_save","$set_coverage_db_name","$rose","$stable","$past","$rose_gclk","$stable_gclk","$future_gclk","$falling_gclk","$changing_gclk","$display","$coverage_get_max","$coverage_merge","$get_coverage","$load_coverage_db","$typename","$unpacked_dimensions","$left","$low","$increment","$clog2","$ln","$log10","$exp","$sqrt","$pow","$floor","$ceil","$sin","$cos","$tan","$countbits","$onehot","$isunknown","$fatal","$warning","$dimensions","$right","$high","$size","$asin","$acos","$atan","$atan2","$hypot","$sinh","$cosh","$tanh","$asinh","$acosh","$atanh","$countones","$onehot0","$error","$info","$random","$dist_chi_square","$dist_erlang","$dist_exponential","$dist_normal","$dist_poisson","$dist_t","$dist_uniform","$q_initialize","$q_remove","$q_exam","$async$and$array","$async$nand$array","$async$or$array","$async$nor$array","$sync$and$array","$sync$nand$array","$sync$or$array","$sync$nor$array","$q_add","$q_full","$psprintf","$async$and$plane","$async$nand$plane","$async$or$plane","$async$nor$plane","$sync$and$plane","$sync$nand$plane","$sync$or$plane","$sync$nor$plane","$system","$display","$displayb","$displayh","$displayo","$strobe","$strobeb","$strobeh","$strobeo","$write","$readmemb","$readmemh","$writememh","$value$plusargs","$dumpvars","$dumpon","$dumplimit","$dumpports","$dumpportson","$dumpportslimit","$writeb","$writeh","$writeo","$monitor","$monitorb","$monitorh","$monitoro","$writememb","$dumpfile","$dumpoff","$dumpall","$dumpflush","$dumpportsoff","$dumpportsall","$dumpportsflush","$fclose","$fdisplay","$fdisplayb","$fdisplayh","$fdisplayo","$fstrobe","$fstrobeb","$fstrobeh","$fstrobeo","$swrite","$swriteb","$swriteh","$swriteo","$fscanf","$fread","$fseek","$fflush","$feof","$fopen","$fwrite","$fwriteb","$fwriteh","$fwriteo","$fmonitor","$fmonitorb","$fmonitorh","$fmonitoro","$sformat","$sformatf","$fgetc","$ungetc","$fgets","$sscanf","$rewind","$ftell","$ferror"]
},contains:[e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE,e.QUOTE_STRING_MODE,{
scope:"number",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/\b((\d+'([bhodBHOD]))[0-9xzXZa-fA-F_]+)/},{
begin:/\B(('([bhodBHOD]))[0-9xzXZa-fA-F_]+)/},{begin:/\b[0-9][0-9_]*/,
relevance:0}]},{scope:"variable",variants:[{begin:"#\\((?!parameter).+\\)"},{
begin:"\\.\\w+",relevance:0}]},{scope:"variable.constant",
match:n.concat(/`/,n.either("__FILE__","__LINE__"))},{scope:"meta",
begin:n.concat(/`/,n.either(...t)),end:/$|\/\/|\/\*/,returnEnd:!0,keywords:t}]}}
})();hljs.registerLanguage("verilog",e)})();/*! `vim` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Vim Script",keywords:{
$pattern:/[!#@\w]+/,
keyword:"N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
built_in:"synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
},illegal:/;/,contains:[e.NUMBER_MODE,{className:"string",begin:"'",end:"'",
illegal:"\\n"},{className:"string",begin:/"(\\"|\n\\|[^"\n])*"/
},e.COMMENT('"',"$"),{className:"variable",begin:/[bwtglsav]:[\w\d_]+/},{
begin:[/\b(?:function|function!)/,/\s+/,e.IDENT_RE],className:{1:"keyword",
3:"title"},end:"$",relevance:0,contains:[{className:"params",begin:"\\(",
end:"\\)"}]},{className:"symbol",begin:/<[\w-]+>/}]})})()
;hljs.registerLanguage("vim",e)})();/*! `wasm` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{e.regex;const a=e.COMMENT(/\(;/,/;\)/)
;return a.contains.push("self"),{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,
keyword:["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"]
},contains:[e.COMMENT(/;;/,/$/),a,{match:[/(?:offset|align)/,/\s*/,/=/],
className:{1:"keyword",3:"operator"}},{className:"variable",begin:/\$[\w_]+/},{
match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},{
begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",
3:"title.function"}},e.QUOTE_STRING_MODE,{match:/(i32|i64|f32|f64)(?!\.)/,
className:"type"},{className:"keyword",
match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
},{className:"number",relevance:0,
match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
}]}}})();hljs.registerLanguage("wasm",e)})();/*! `xml` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=a.concat(/[\p{L}_]/u,a.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,
end:/>/,relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{
className:"meta",begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]
},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,
relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,
relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",
begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{
end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{
end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
className:"tag",begin:/<>|<\/>/},{className:"tag",
begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{
className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
})();hljs.registerLanguage("xml",e)})();/*! `yaml` grammar compiled for Highlight.js 11.10.0 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={
className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(s,{
variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},t={begin:/\{/,
end:/\}/,contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",end:"\\]",
contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",variants:[{
begin:/\w[\w :()\./-]*:(?=[ \t]|$)/},{begin:/"\w[\w :()\./-]*":(?=[ \t]|$)/},{
begin:/'\w[\w :()\./-]*':(?=[ \t]|$)/}]},{className:"meta",begin:"^---\\s*$",
relevance:10},{className:"string",
begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
className:"number",
begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
},{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},t,g,s],r=[...b]
;return r.pop(),r.push(i),l.contains=r,{name:"YAML",case_insensitive:!0,
aliases:["yml"],contains:b}}})();hljs.registerLanguage("yaml",e)})();