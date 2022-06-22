!function(){var n={28:function(n,t,e){(t=e(645)(!1)).push([n.id,"*{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\n.private-title-svg-div{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.results-wrapper{\r\n    margin-top: 2px;\r\n    position: absolute;\r\n    width: 100%;\r\n    max-height: 70vh;\r\n    overflow-y: scroll;\r\n}\r\n.suggestions{\r\n    background-color:white;\r\n    width: 100%;\r\n}\r\n.suggestions:hover{\r\n    background-color:rgba(211, 211, 211,0.2);\r\n}\r\n.suggestions p{\r\n    text-align: left;\r\n}\r\n.suggestions a{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n.title{\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n}\r\n.svg{\r\n    font-size: 14px;\r\n    margin-right: 14px;\r\n}\r\n.input-wrapper{\r\n    position: relative;\r\n}\r\n.cross-btn{\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 20px;\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n.mic-btn{\r\n    position: absolute;\r\n    top: 30%;\r\n    right: 45px;\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n.stop-btn{\r\n    position: absolute;\r\n    top: 25%;\r\n    right: 45px;\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    width: 24px;\r\n    height: 24px;\r\n}",""]),n.exports=t},645:function(n){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e,r,i,o=n[1]||"",s=n[3];if(!s)return o;if(t&&"function"==typeof btoa){var a=(e=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(i," */")),c=s.sources.map((function(n){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(n," */")}));return[o].concat(c).concat([a]).join("\n")}return[o].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},154:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.isNative=void 0;var e="undefined"!=typeof window&&(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition);t.isNative=function(n){return n===e};var r=e;t.default=r},99:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=e(983))&&r.__esModule?r:{default:r},o=e(665),s=e(154);function a(n,t,e,r,i,o,s){try{var a=n[o](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(r,i)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function s(n){a(o,r,i,s,c,"next",n)}function c(n){a(o,r,i,s,c,"throw",n)}s(void 0)}))}}function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var l=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.recognition=null,this.pauseAfterDisconnect=!1,this.interimTranscript="",this.finalTranscript="",this.listening=!1,this.isMicrophoneAvailable=!0,this.subscribers={},this.onStopListening=function(){},this.previousResultWasFinalOnly=!1,this.resetTranscript=this.resetTranscript.bind(this),this.startListening=this.startListening.bind(this),this.stopListening=this.stopListening.bind(this),this.abortListening=this.abortListening.bind(this),this.setSpeechRecognition=this.setSpeechRecognition.bind(this),this.disableRecognition=this.disableRecognition.bind(this),this.setSpeechRecognition(t),(0,i.default)()&&(this.updateFinalTranscript=(0,o.debounce)(this.updateFinalTranscript,250,!0))}var t,e,r,a,l,p;return t=n,e=[{key:"setSpeechRecognition",value:function(n){var t=!!n&&((0,s.isNative)(n)||(0,o.browserSupportsPolyfills)());t&&(this.disableRecognition(),this.recognition=new n,this.recognition.continuous=!1,this.recognition.interimResults=!0,this.recognition.onresult=this.updateTranscript.bind(this),this.recognition.onend=this.onRecognitionDisconnect.bind(this),this.recognition.onerror=this.onError.bind(this)),this.emitBrowserSupportsSpeechRecognitionChange(t)}},{key:"subscribe",value:function(n,t){this.subscribers[n]=t}},{key:"unsubscribe",value:function(n){delete this.subscribers[n]}},{key:"emitListeningChange",value:function(n){var t=this;this.listening=n,Object.keys(this.subscribers).forEach((function(e){(0,t.subscribers[e].onListeningChange)(n)}))}},{key:"emitMicrophoneAvailabilityChange",value:function(n){var t=this;this.isMicrophoneAvailable=n,Object.keys(this.subscribers).forEach((function(e){(0,t.subscribers[e].onMicrophoneAvailabilityChange)(n)}))}},{key:"emitTranscriptChange",value:function(n,t){var e=this;Object.keys(this.subscribers).forEach((function(r){(0,e.subscribers[r].onTranscriptChange)(n,t)}))}},{key:"emitClearTranscript",value:function(){var n=this;Object.keys(this.subscribers).forEach((function(t){(0,n.subscribers[t].onClearTranscript)()}))}},{key:"emitBrowserSupportsSpeechRecognitionChange",value:function(n){var t=this;Object.keys(this.subscribers).forEach((function(e){var r=t.subscribers[e],i=r.onBrowserSupportsSpeechRecognitionChange,o=r.onBrowserSupportsContinuousListeningChange;i(n),o(n)}))}},{key:"disconnect",value:function(n){if(this.recognition&&this.listening)switch(n){case"ABORT":this.pauseAfterDisconnect=!0,this.abort();break;case"RESET":this.pauseAfterDisconnect=!1,this.abort();break;default:this.pauseAfterDisconnect=!0,this.stop()}}},{key:"disableRecognition",value:function(){this.recognition&&(this.recognition.onresult=function(){},this.recognition.onend=function(){},this.recognition.onerror=function(){},this.listening&&this.stopListening())}},{key:"onError",value:function(n){n&&n.error&&"not-allowed"===n.error&&(this.emitMicrophoneAvailabilityChange(!1),this.disableRecognition())}},{key:"onRecognitionDisconnect",value:function(){this.onStopListening(),this.listening=!1,this.pauseAfterDisconnect?this.emitListeningChange(!1):this.recognition&&(this.recognition.continuous?this.startListening({continuous:this.recognition.continuous}):this.emitListeningChange(!1)),this.pauseAfterDisconnect=!1}},{key:"updateTranscript",value:function(n){var t=n.results,e=n.resultIndex,r=void 0===e?t.length-1:e;this.interimTranscript="",this.finalTranscript="";for(var s=r;s<t.length;++s)t[s].isFinal&&(!(0,i.default)()||t[s][0].confidence>0)?this.updateFinalTranscript(t[s][0].transcript):this.interimTranscript=(0,o.concatTranscripts)(this.interimTranscript,t[s][0].transcript);var a=!1;""===this.interimTranscript&&""!==this.finalTranscript?(this.previousResultWasFinalOnly&&(a=!0),this.previousResultWasFinalOnly=!0):this.previousResultWasFinalOnly=!1,a||this.emitTranscriptChange(this.interimTranscript,this.finalTranscript)}},{key:"updateFinalTranscript",value:function(n){this.finalTranscript=(0,o.concatTranscripts)(this.finalTranscript,n)}},{key:"resetTranscript",value:function(){this.disconnect("RESET")}},{key:"startListening",value:(p=c(regeneratorRuntime.mark((function n(){var t,e,r,i,o,s,a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=a.length>0&&void 0!==a[0]?a[0]:{},e=t.continuous,r=void 0!==e&&e,i=t.language,this.recognition){n.next=3;break}return n.abrupt("return");case 3:if(o=r!==this.recognition.continuous,s=i&&i!==this.recognition.lang,!o&&!s){n.next=11;break}if(!this.listening){n.next=9;break}return n.next=9,this.stopListening();case 9:this.recognition.continuous=o?r:this.recognition.continuous,this.recognition.lang=s?i:this.recognition.lang;case 11:if(this.listening){n.next=22;break}return this.recognition.continuous||(this.resetTranscript(),this.emitClearTranscript()),n.prev=13,n.next=16,this.start();case 16:this.emitListeningChange(!0),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(13),n.t0 instanceof DOMException||this.emitMicrophoneAvailabilityChange(!1);case 22:case"end":return n.stop()}}),n,this,[[13,19]])}))),function(){return p.apply(this,arguments)})},{key:"abortListening",value:(l=c(regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.disconnect("ABORT"),this.emitListeningChange(!1),n.next=4,new Promise((function(n){t.onStopListening=n}));case 4:case"end":return n.stop()}}),n,this)}))),function(){return l.apply(this,arguments)})},{key:"stopListening",value:(a=c(regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.disconnect("STOP"),this.emitListeningChange(!1),n.next=4,new Promise((function(n){t.onStopListening=n}));case 4:case"end":return n.stop()}}),n,this)}))),function(){return a.apply(this,arguments)})},{key:"getRecognition",value:function(){return this.recognition}},{key:"start",value:(r=c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!this.recognition||this.listening){n.next=4;break}return n.next=3,this.recognition.start();case 3:this.listening=!0;case 4:case"end":return n.stop()}}),n,this)}))),function(){return r.apply(this,arguments)})},{key:"stop",value:function(){this.recognition&&this.listening&&(this.recognition.stop(),this.listening=!1)}},{key:"abort",value:function(){this.recognition&&this.listening&&(this.recognition.abort(),this.listening=!1)}}],e&&u(t.prototype,e),n}();t.default=l},924:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.useSpeechRecognition=void 0;var r=e(497),i=e(665),o=e(697),s=e(911),a=l(e(99)),c=l(e(983)),u=l(e(154));function l(n){return n&&n.__esModule?n:{default:n}}function p(n,t,e,r,i,o,s){try{var a=n[o](s),c=a.value}catch(n){return void e(n)}a.done?t(c):Promise.resolve(c).then(r,i)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function s(n){p(o,r,i,s,a,"next",n)}function a(n){p(o,r,i,s,a,"throw",n)}s(void 0)}))}}function h(n){return function(n){if(Array.isArray(n))return m(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||v(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,i=!1,o=void 0;try{for(var s,a=n[Symbol.iterator]();!(r=(s=a.next()).done)&&(e.push(s.value),!t||e.length!==t);r=!0);}catch(n){i=!0,o=n}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return e}}(n,t)||v(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(n,t){if(n){if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(n,t):void 0}}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var b,y=!!u.default,w=y&&!(0,c.default)();t.useSpeechRecognition=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.transcribing,e=void 0===t||t,a=n.clearTranscriptOnListen,c=void 0===a||a,u=n.commands,l=void 0===u?[]:u,p=(0,r.useState)(C.getRecognitionManager()),f=d(p,1),v=f[0],m=(0,r.useState)(y),b=d(m,2),S=b[0],T=b[1],R=(0,r.useState)(w),x=d(R,2),E=x[0],k=x[1],A=(0,r.useReducer)(s.transcriptReducer,{interimTranscript:v.interimTranscript,finalTranscript:""}),P=d(A,2),L=P[0],O=L.interimTranscript,M=L.finalTranscript,j=P[1],_=(0,r.useState)(v.listening),N=d(_,2),I=N[0],D=N[1],B=(0,r.useState)(v.isMicrophoneAvailable),F=d(B,2),z=F[0],U=F[1],W=(0,r.useRef)(l);W.current=l;var $=function(){j((0,o.clearTranscript)())},Z=(0,r.useCallback)((function(){v.resetTranscript(),$()}),[v]),q=function(n,t,e){var r=("object"===g(n)?n.toString():n).replace(/[&/\\#,+()!$~%.'":*?<>{}]/g,"").replace(/  +/g," ").trim(),o=(0,i.compareTwoStringsUsingDiceCoefficient)(r,t);return o>=e?{command:n,commandWithoutSpecials:r,howSimilar:o,isFuzzyMatch:!0}:null},H=function(n,t){var e=(0,i.commandToRegExp)(n).exec(t);return e?{command:n,parameters:e.slice(1)}:null},J=(0,r.useCallback)((function(n,t){W.current.forEach((function(e){var r=e.command,i=e.callback,o=e.matchInterim,s=void 0!==o&&o,a=e.isFuzzyMatch,c=void 0!==a&&a,u=e.fuzzyMatchingThreshold,l=void 0===u?.8:u,p=e.bestMatchOnly,f=void 0!==p&&p,g=!t&&s?n.trim():t.trim(),d=(Array.isArray(r)?r:[r]).map((function(n){return c?q(n,g,l):H(n,g)})).filter((function(n){return n}));if(c&&f&&d.length>=2){d.sort((function(n,t){return t.howSimilar-n.howSimilar}));var v=d[0],m=v.command,b=v.commandWithoutSpecials,y=v.howSimilar;i(b,g,y,{command:m,resetTranscript:Z})}else d.forEach((function(n){if(n.isFuzzyMatch){var t=n.command,e=n.commandWithoutSpecials,r=n.howSimilar;i(e,g,r,{command:t,resetTranscript:Z})}else{var o=n.command,s=n.parameters;i.apply(void 0,h(s).concat([{command:o,resetTranscript:Z}]))}}))}))}),[Z]),V=(0,r.useCallback)((function(n,t){e&&j((0,o.appendTranscript)(n,t)),J(n,t)}),[J,e]),G=(0,r.useCallback)((function(){c&&$()}),[c]);(0,r.useEffect)((function(){var n=C.counter;C.counter+=1;var t={onListeningChange:D,onMicrophoneAvailabilityChange:U,onTranscriptChange:V,onClearTranscript:G,onBrowserSupportsSpeechRecognitionChange:T,onBrowserSupportsContinuousListeningChange:k};return v.subscribe(n,t),function(){v.unsubscribe(n)}}),[e,c,v,V,G]);var K=(0,i.concatTranscripts)(M,O);return{transcript:K,interimTranscript:O,finalTranscript:M,listening:I,isMicrophoneAvailable:z,resetTranscript:Z,browserSupportsSpeechRecognition:S,browserSupportsContinuousListening:E}};var S,T,R,C={counter:0,applyPolyfill:function(n){b?b.setSpeechRecognition(n):b=new a.default(n);var t=!!n&&(0,i.browserSupportsPolyfills)();y=t,w=t},getRecognitionManager:function(){return b||(b=new a.default(u.default)),b},getRecognition:function(){return C.getRecognitionManager().getRecognition()},startListening:(R=f(regeneratorRuntime.mark((function n(){var t,e,r,i,o=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},e=t.continuous,r=t.language,i=C.getRecognitionManager(),n.next=4,i.startListening({continuous:e,language:r});case 4:case"end":return n.stop()}}),n)}))),function(){return R.apply(this,arguments)}),stopListening:(T=f(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=C.getRecognitionManager(),n.next=3,t.stopListening();case 3:case"end":return n.stop()}}),n)}))),function(){return T.apply(this,arguments)}),abortListening:(S=f(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=C.getRecognitionManager(),n.next=3,t.abortListening();case 3:case"end":return n.stop()}}),n)}))),function(){return S.apply(this,arguments)}),browserSupportsSpeechRecognition:function(){return y},browserSupportsContinuousListening:function(){return w}},x=C;t.default=x},697:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appendTranscript=t.clearTranscript=void 0;var r=e(266);t.clearTranscript=function(){return{type:r.CLEAR_TRANSCRIPT}},t.appendTranscript=function(n,t){return{type:r.APPEND_TRANSCRIPT,payload:{interimTranscript:n,finalTranscript:t}}}},266:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APPEND_TRANSCRIPT=t.CLEAR_TRANSCRIPT=void 0,t.CLEAR_TRANSCRIPT="CLEAR_TRANSCRIPT",t.APPEND_TRANSCRIPT="APPEND_TRANSCRIPT"},515:function(n,t,e){"use strict";function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}Object.defineProperty(t,"x6",{enumerable:!0,get:function(){return i.useSpeechRecognition}}),t.ZP=void 0;var i=function(n){if(n&&n.__esModule)return n;if(null===n||"object"!==r(n)&&"function"!=typeof n)return{default:n};var t=o();if(t&&t.has(n))return t.get(n);var e={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var a=i?Object.getOwnPropertyDescriptor(n,s):null;a&&(a.get||a.set)?Object.defineProperty(e,s,a):e[s]=n[s]}return e.default=n,t&&t.set(n,e),e}(e(924));function o(){if("function"!=typeof WeakMap)return null;var n=new WeakMap;return o=function(){return n},n}var s=i.default;t.ZP=s},983:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return/(android)/i.test("undefined"!=typeof navigator?navigator.userAgent:"")}},911:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transcriptReducer=void 0;var r=e(266),i=e(665);t.transcriptReducer=function(n,t){switch(t.type){case r.CLEAR_TRANSCRIPT:return{interimTranscript:"",finalTranscript:""};case r.APPEND_TRANSCRIPT:return{interimTranscript:t.payload.interimTranscript,finalTranscript:(0,i.concatTranscripts)(n.finalTranscript,t.payload.finalTranscript)};default:throw new Error}}},665:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserSupportsPolyfills=t.compareTwoStringsUsingDiceCoefficient=t.commandToRegExp=t.concatTranscripts=t.debounce=void 0,t.debounce=function(n,t,e){var r;return function(){var i=this,o=arguments,s=function(){r=null,e||n.apply(i,o)},a=e&&!r;clearTimeout(r),r=setTimeout(s,t),a&&n.apply(i,o)}},t.concatTranscripts=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.map((function(n){return n.trim()})).join(" ").trim()};var e=/\s*\((.*?)\)\s*/g,r=/(\(\?:[^)]+\))\?/g,i=/(\(\?)?:\w+/g,o=/\*/g,s=/[-{}[\]+?.,\\^$|#]/g;t.commandToRegExp=function(n){return n instanceof RegExp?new RegExp(n.source,"i"):(n=n.replace(s,"\\$&").replace(e,"(?:$1)?").replace(i,(function(n,t){return t?n:"([^\\s]+)"})).replace(o,"(.*?)").replace(r,"\\s*$1?\\s*"),new RegExp("^"+n+"$","i"))},t.compareTwoStringsUsingDiceCoefficient=function(n,t){if(n=n.replace(/\s+/g,"").toLowerCase(),t=t.replace(/\s+/g,"").toLowerCase(),!n.length&&!t.length)return 1;if(!n.length||!t.length)return 0;if(n===t)return 1;if(1===n.length&&1===t.length)return 0;if(n.length<2||t.length<2)return 0;for(var e=new Map,r=0;r<n.length-1;r++){var i=n.substring(r,r+2),o=e.has(i)?e.get(i)+1:1;e.set(i,o)}for(var s=0,a=0;a<t.length-1;a++){var c=t.substring(a,a+2),u=e.has(c)?e.get(c):0;u>0&&(e.set(c,u-1),s++)}return 2*s/(n.length+t.length-2)},t.browserSupportsPolyfills=function(){return"undefined"!=typeof window&&void 0!==window.navigator&&void 0!==window.navigator.mediaDevices&&void 0!==window.navigator.mediaDevices.getUserMedia&&(void 0!==window.AudioContext||void 0!==window.webkitAudioContext)}},89:function(n,t,e){var r=e(379),i=e(28);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.id,i,""]]);r(i,{insert:"head",singleton:!1}),n.exports=i.locals||{}},379:function(n,t,e){"use strict";var r,i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),o=[];function s(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},r=[],i=0;i<n.length;i++){var a=n[i],c=t.base?a[0]+t.base:a[0],u=e[c]||0,l="".concat(c," ").concat(u);e[c]=u+1;var p=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(o[p].references++,o[p].updater(f)):o.push({identifier:l,updater:d(f,t),references:1}),r.push(l)}return r}function c(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var s=i(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,l=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function p(n,t,e,r){var i=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(o,s[t]):n.appendChild(o)}}function f(n,t,e){var r=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,g=0;function d(n,t){var e,r,i;if(t.singleton){var o=g++;e=h||(h=c(t)),r=p.bind(null,e,o,!1),i=p.bind(null,e,o,!0)}else e=c(t),r=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var i=s(e[r]);o[i].references--}for(var c=a(n,t),u=0;u<e.length;u++){var l=s(e[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}e=c}}}},497:function(n){"use strict";n.exports=require("react")}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nc=void 0;var r={};!function(){"use strict";e.r(r);var n=e(497),t=e.n(n),i=e(515);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o=[],s=!0,a=!1;try{for(e=e.call(n);!(s=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(n){a=!0,i=n}finally{try{s||null==e.return||e.return()}finally{if(a)throw i}}return o}}(n,t)||function(n,t){if(n){if("string"==typeof n)return s(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e(89),r.default=function(e){var r=e.routesObj,s=e.styleObj,a=e.isVoiceSupportEnabled,c=e.crossBtn,u=e.micBtn,l=e.stopBtn,p=(0,i.x6)(),f=p.transcript,h=p.listening,g=p.browserSupportsSpeechRecognition,d=o((0,n.useState)(""),2),v=d[0],m=d[1],b=o((0,n.useState)([]),2),y=b[0],w=b[1],S=o((0,n.useState)([]),2),T=S[0],R=S[1];(0,n.useEffect)((function(){y.length>=1&&x(y)}),[y]),(0,n.useEffect)((function(){m(""),R([])}),[window.location.pathname]),(0,n.useEffect)((function(){0===v.length&&R([])}),[v]);var C=function(n){for(var t=[],e=0,i=Object.entries(r);e<i.length;e++){var s=o(i[e],2),a=s[0];s[1],t.push(a)}w(t)},x=function(n){var t=[];null==n||n.forEach((function(n){n.split("_").forEach((function(e){e.includes(v)&&t.push(r[n])}))})),R(t)},E=function(){m("")};return(0,n.useEffect)((function(){f.length&&(m(f),C())}),[h,f]),document.addEventListener("keydown",(function(n){"Escape"===n.key&&E()})),t().createElement("div",{className:"parent-wrapper",style:{width:s.searchbar.width,position:"absolute",left:s.searchbar.left,top:s.searchbar.top}},t().createElement("div",{className:"input-wrapper"},t().createElement("input",{value:v,onChange:function(n){m(n.target.value),C(n.target.value)},className:"searchbar",style:s.searchbar}),v.length>0&&t().createElement("button",{className:"cross-btn",onClick:E},c),a&&g&&!h?t().createElement("button",{className:"mic-btn",onClick:function(){return i.ZP.startListening()}},t().createElement("img",{src:u})):t().createElement("button",{className:"stop-btn",onClick:function(){return i.ZP.stopListening()}},t().createElement("img",{src:l}))),t().createElement("div",{className:"results-wrapper"},T.map((function(n){return t().createElement("div",{className:"suggestions",style:{padding:"5px 0px 5px 0px",marginRight:"auto",marginLeft:"auto"}},t().createElement("a",{href:n.route,onClick:function(){return m("")}},t().createElement("div",{className:"private-title-svg-div"},t().createElement("p",{className:"svg"},n.svg),t().createElement("div",null,t().createElement("p",{className:"title"},n.title),t().createElement("p",{className:"info"},n.info)))))}))))}}(),module.exports=r}();