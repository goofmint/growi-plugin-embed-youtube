var S={exports:{}},h={},O={exports:{}},o={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),U=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),Y=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),k=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,P={};function p(e,t,r){this.props=e,this.context=t,this.refs=P,this.updater=r||j}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function b(e,t,r){this.props=e,this.context=t,this.refs=P,this.updater=r||j}var E=b.prototype=new I;E.constructor=b;C(E,p.prototype);E.isPureReactComponent=!0;var $=Array.isArray,T=Object.prototype.hasOwnProperty,R={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,r){var n,u={},i=null,c=null;if(t!=null)for(n in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(i=""+t.key),t)T.call(t,n)&&!F.hasOwnProperty(n)&&(u[n]=t[n]);var l=arguments.length-2;if(l===1)u.children=r;else if(1<l){for(var s=Array(l),a=0;a<l;a++)s[a]=arguments[a+2];u.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)u[n]===void 0&&(u[n]=l[n]);return{$$typeof:y,type:e,key:i,ref:c,props:u,_owner:R.current}}function W(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function g(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function J(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var x=/\/+/g;function w(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J(""+e.key):t.toString(36)}function m(e,t,r,n,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case U:c=!0}}if(c)return c=e,u=u(c),e=n===""?"."+w(c,0):n,$(u)?(r="",e!=null&&(r=e.replace(x,"$&/")+"/"),m(u,t,r,"",function(a){return a})):u!=null&&(g(u)&&(u=W(u,r+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(x,"$&/")+"/")+e)),t.push(u)),1;if(c=0,n=n===""?".":n+":",$(e))for(var l=0;l<e.length;l++){i=e[l];var s=n+w(i,l);c+=m(i,t,r,s,u)}else if(s=H(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=n+w(i,l++),c+=m(i,t,r,s,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,r){if(e==null)return e;var n=[],u=0;return m(e,n,"","",function(i){return t.call(r,i,u++)}),n}function K(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f={current:null},v={transition:null},Q={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:v,ReactCurrentOwner:R};o.Children={map:d,forEach:function(e,t,r){d(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};o.Component=p;o.Fragment=V;o.Profiler=N;o.PureComponent=b;o.StrictMode=D;o.Suspense=B;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q;o.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=C({},e.props),u=e.key,i=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,c=R.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)T.call(t,s)&&!F.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var a=0;a<s;a++)l[a]=arguments[a+2];n.children=l}return{$$typeof:y,type:e.type,key:u,ref:i,props:n,_owner:c}};o.createContext=function(e){return e={$$typeof:Y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q,_context:e},e.Consumer=e};o.createElement=A;o.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:M,render:e}};o.isValidElement=g;o.lazy=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:K}};o.memo=function(e,t){return{$$typeof:z,type:e,compare:t===void 0?null:t}};o.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};o.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};o.useCallback=function(e,t){return f.current.useCallback(e,t)};o.useContext=function(e){return f.current.useContext(e)};o.useDebugValue=function(){};o.useDeferredValue=function(e){return f.current.useDeferredValue(e)};o.useEffect=function(e,t){return f.current.useEffect(e,t)};o.useId=function(){return f.current.useId()};o.useImperativeHandle=function(e,t,r){return f.current.useImperativeHandle(e,t,r)};o.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)};o.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)};o.useMemo=function(e,t){return f.current.useMemo(e,t)};o.useReducer=function(e,t,r){return f.current.useReducer(e,t,r)};o.useRef=function(e){return f.current.useRef(e)};o.useState=function(e){return f.current.useState(e)};o.useSyncExternalStore=function(e,t,r){return f.current.useSyncExternalStore(e,t,r)};o.useTransition=function(){return f.current.useTransition()};o.version="18.2.0";(function(e){e.exports=o})(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=O.exports,Z=Symbol.for("react.element"),ee=Symbol.for("react.fragment"),te=Object.prototype.hasOwnProperty,re=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ne={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,r){var n,u={},i=null,c=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)te.call(t,n)&&!ne.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)u[n]===void 0&&(u[n]=t[n]);return{$$typeof:Z,type:e,key:i,ref:c,props:u,_owner:re.current}}h.Fragment=ee;h.jsx=L;h.jsxs=L;(function(e){e.exports=h})(S);const oe=S.exports.Fragment,_=S.exports.jsx,ue=e=>{const r=new URL(e).searchParams.get("v");return r||null},ie=e=>({children:t,href:r,...n})=>{const u=ue(r);return u?_("div",{className:"youtube",children:_("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${u}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}):_(oe,{children:_(e,{...n,children:t})})},ce=()=>{if(growiFacade==null||growiFacade.markdownRenderer==null)return;const{optionsGenerators:e}=growiFacade.markdownRenderer;e.customGenerateViewOptions=(...t)=>{const r=e.generateViewOptions(...t),n=r.components.a;return r.components.a=ie(n),r}},se=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators["growi-plugin-copy-code-to-clipboard2"]={activate:ce,deactivate:se};
