(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{6162:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var n,l=r(a(6115)),i=r(a(7867)),s=r(a(7071)),o=r(a(434)),c=r(a(7294)),d=r(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],m=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),v=function(e){var t=m(e),a=h(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,y=E&&window.IntersectionObserver,N=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:l}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(N.has(e.target)){var t=N.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),N.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),N.set(e,t)),function(){a.unobserve(e),N.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+c+i+s+a+r+t+l+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,l=e.spreadProps,i=e.ariaHidden,s=c.default.createElement(Z,(0,o.default)({ref:t,src:a},l,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,n(r),s):s})),Z=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,i=e.onLoad,d=e.onError,m=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,s.default)(e,u);return c.default.createElement("img",(0,o.default)({"aria-hidden":h,sizes:a,srcSet:r,src:n},p,{onLoad:i,onError:d,ref:t,loading:m,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));Z.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&v(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:v(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=v(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),(a=h(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,i=e.imgStyle,s=void 0===i?{}:i,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,N=e.loading,w=e.draggable,k=h||g;if(!k)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:j?1:0,transition:L?"opacity "+b+"ms":"none"},s),T="boolean"==typeof v?"lightgray":v,P={transitionDelay:b+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&P,s,u),H={title:t,alt:this.state.isVisible?"":a,style:z,className:f,itemProp:y},M=this.state.isHydrated?p(k):k[0];if(h)return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),T&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&P)}),M.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:k,generateSources:C}),M.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:k,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,x(k),c.default.createElement(Z,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:N},M,{imageVariants:k}))}}));if(g){var V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},l);return"inherit"===l.display&&delete V.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},T&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},L&&P)}),M.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:H,imageVariants:k,generateSources:C}),M.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:H,imageVariants:k,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,x(k),c.default.createElement(Z,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:N},M,{imageVariants:k}))}}))}return null},t}(c.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function P(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}L.propTypes={resolutions:O,sizes:T,fixed:P(d.default.oneOfType([O,d.default.arrayOf(O)])),fluid:P(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var z=L;t.Z=z},3224:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return oe}});var r,n=a(7326),l=a(4578),i=a(7294),s=a(6162),o=a(6322),c=a(8183),d=a(2125),u=a(4184),m=a.n(u),f=a(9351),h=a(3004),p=a(7216),g=a(99);function v(e){if((!r&&0!==r||e)&&h.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}var b=a(2092),E=a(8146),y=a(5654),N=a(5088),x=a(6914),w=a(627),S=a(1645),C=a(1068),k=a(4680),j=(0,k.Z)("modal-body"),I=a(6467),R=a(6792),Z=a(5893);const L=i.forwardRef((({bsPrefix:e,className:t,contentClassName:a,centered:r,size:n,fullscreen:l,children:i,scrollable:s,...o},c)=>{const d=`${e=(0,R.vE)(e,"modal")}-dialog`,u="string"==typeof l?`${e}-fullscreen-${l}`:`${e}-fullscreen`;return(0,Z.jsx)("div",{...o,ref:c,className:m()(d,t,n&&`${e}-${n}`,r&&`${d}-centered`,s&&`${d}-scrollable`,l&&u),children:(0,Z.jsx)("div",{className:m()(`${e}-content`,a),children:i})})}));L.displayName="ModalDialog";var O=L,T=(0,k.Z)("modal-footer"),P=a(2655);const z=i.forwardRef((({bsPrefix:e,className:t,closeLabel:a="Close",closeButton:r=!1,...n},l)=>(e=(0,R.vE)(e,"modal-header"),(0,Z.jsx)(P.Z,{ref:l,...n,className:m()(t,e),closeLabel:a,closeButton:r}))));z.displayName="ModalHeader";var H=z;const M=(0,a(9602).Z)("h4");var V=(0,k.Z)("modal-title",{Component:M});function $(e){return(0,Z.jsx)(C.Z,{...e,timeout:null})}function D(e){return(0,Z.jsx)(C.Z,{...e,timeout:null})}const A=i.forwardRef((({bsPrefix:e,className:t,style:a,dialogClassName:r,contentClassName:n,children:l,dialogAs:s=O,"aria-labelledby":o,"aria-describedby":c,"aria-label":d,show:u=!1,animation:C=!0,backdrop:k=!0,keyboard:j=!0,onEscapeKeyDown:L,onShow:T,onHide:P,container:z,autoFocus:H=!0,enforceFocus:M=!0,restoreFocus:V=!0,restoreFocusOptions:A,onEntered:W,onExit:F,onExiting:B,onEnter:_,onEntering:G,onExited:q,backdropClassName:U,manager:K,...J},X)=>{const[Y,Q]=(0,i.useState)({}),[ee,te]=(0,i.useState)(!1),ae=(0,i.useRef)(!1),re=(0,i.useRef)(!1),ne=(0,i.useRef)(null),[le,ie]=(0,b.Z)(),se=(0,y.Z)(X,ie),oe=(0,E.Z)(P),ce=(0,R.SC)();e=(0,R.vE)(e,"modal");const de=(0,i.useMemo)((()=>({onHide:oe})),[oe]);function ue(){return K||(0,S.t)({isRTL:ce})}function me(e){if(!h.Z)return;const t=ue().getScrollbarWidth()>0,a=e.scrollHeight>(0,p.Z)(e).documentElement.clientHeight;Q({paddingRight:t&&!a?v():void 0,paddingLeft:!t&&a?v():void 0})}const fe=(0,E.Z)((()=>{le&&me(le.dialog)}));(0,N.Z)((()=>{(0,g.Z)(window,"resize",fe),null==ne.current||ne.current()}));const he=()=>{ae.current=!0},pe=e=>{ae.current&&le&&e.target===le.dialog&&(re.current=!0),ae.current=!1},ge=()=>{te(!0),ne.current=(0,x.Z)(le.dialog,(()=>{te(!1)}))},ve=e=>{"static"!==k?re.current||e.target!==e.currentTarget?re.current=!1:null==P||P():(e=>{e.target===e.currentTarget&&ge()})(e)},be=(0,i.useCallback)((t=>(0,Z.jsx)("div",{...t,className:m()(`${e}-backdrop`,U,!C&&"show")})),[C,U,e]),Ee={...a,...Y};Ee.display="block";return(0,Z.jsx)(I.Z.Provider,{value:de,children:(0,Z.jsx)(w.Z,{show:u,ref:se,backdrop:k,container:z,keyboard:!0,autoFocus:H,enforceFocus:M,restoreFocus:V,restoreFocusOptions:A,onEscapeKeyDown:e=>{j?null==L||L(e):(e.preventDefault(),"static"===k&&ge())},onShow:T,onHide:P,onEnter:(e,t)=>{e&&me(e),null==_||_(e,t)},onEntering:(e,t)=>{null==G||G(e,t),(0,f.ZP)(window,"resize",fe)},onEntered:W,onExit:e=>{null==ne.current||ne.current(),null==F||F(e)},onExiting:B,onExited:e=>{e&&(e.style.display=""),null==q||q(e),(0,g.Z)(window,"resize",fe)},manager:ue(),transition:C?$:void 0,backdropTransition:C?D:void 0,renderBackdrop:be,renderDialog:a=>(0,Z.jsx)("div",{role:"dialog",...a,style:Ee,className:m()(t,e,ee&&`${e}-static`,!C&&"show"),onClick:k?ve:void 0,onMouseUp:pe,"aria-label":d,"aria-labelledby":o,"aria-describedby":c,children:(0,Z.jsx)(s,{...J,onMouseDown:he,className:r,contentClassName:n,children:l})})})})}));A.displayName="Modal";var W=Object.assign(A,{Body:j,Header:H,Title:V,Footer:T,Dialog:O,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var F=e=>{let{show:t,onHide:a,children:r}=e;return i.createElement(W,{show:t,onHide:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},i.createElement(W.Header,{closeButton:!0}),i.createElement(W.Body,null,r))};var B=function(e,t){const a=(0,i.useRef)(!0);(0,i.useEffect)((()=>{if(!a.current)return e();a.current=!1}),t)},_=a(2029),G=a(6454);const q=2**31-1;function U(e,t,a){const r=a-Date.now();e.current=r<=q?setTimeout(t,r):setTimeout((()=>U(e,t,a)),q)}function K(){const e=(0,G.Z)(),t=(0,i.useRef)();return(0,N.Z)((()=>clearTimeout(t.current))),(0,i.useMemo)((()=>{const a=()=>clearTimeout(t.current);return{set:function(r,n=0){e()&&(a(),n<=q?t.current=setTimeout(r,n):U(t,r,Date.now()+n))},clear:a}}),[])}var J=a(1586),X=a(2081),Y=(0,k.Z)("carousel-caption");const Q=i.forwardRef((({as:e="div",bsPrefix:t,className:a,...r},n)=>{const l=m()(a,(0,R.vE)(t,"carousel-item"));return(0,Z.jsx)(e,{ref:n,...r,className:l})}));Q.displayName="CarouselItem";var ee=Q;function te(e,t){let a=0;return i.Children.map(e,(e=>i.isValidElement(e)?t(e,a++):e))}var ae=a(3825),re=a(4509),ne=a(360);const le=i.forwardRef((({defaultActiveIndex:e=0,...t},a)=>{const{as:r="div",bsPrefix:n,slide:l=!0,fade:s=!1,controls:o=!0,indicators:c=!0,indicatorLabels:d=[],activeIndex:u,onSelect:f,onSlide:h,onSlid:p,interval:g=5e3,keyboard:v=!0,onKeyDown:b,pause:y="hover",onMouseOver:N,onMouseOut:x,wrap:w=!0,touch:S=!0,onTouchStart:C,onTouchMove:k,onTouchEnd:j,prevIcon:I=(0,Z.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:L="Previous",nextIcon:O=(0,Z.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:T="Next",variant:P,className:z,children:H,...M}=(0,X.Ch)({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),V=(0,R.vE)(n,"carousel"),$=(0,R.SC)(),D=(0,i.useRef)(null),[A,W]=(0,i.useState)("next"),[F,G]=(0,i.useState)(!1),[q,U]=(0,i.useState)(!1),[Y,Q]=(0,i.useState)(u||0);(0,i.useEffect)((()=>{q||u===Y||(D.current?W(D.current):W((u||0)>Y?"next":"prev"),l&&U(!0),Q(u||0))}),[u,q,Y,l]),(0,i.useEffect)((()=>{D.current&&(D.current=null)}));let ee,le=0;!function(e,t){let a=0;i.Children.forEach(e,(e=>{i.isValidElement(e)&&t(e,a++)}))}(H,((e,t)=>{++le,t===u&&(ee=e.props.interval)}));const ie=(0,_.Z)(ee),se=(0,i.useCallback)((e=>{if(q)return;let t=Y-1;if(t<0){if(!w)return;t=le-1}D.current="prev",null==f||f(t,e)}),[q,Y,f,w,le]),oe=(0,E.Z)((e=>{if(q)return;let t=Y+1;if(t>=le){if(!w)return;t=0}D.current="next",null==f||f(t,e)})),ce=(0,i.useRef)();(0,i.useImperativeHandle)(a,(()=>({element:ce.current,prev:se,next:oe})));const de=(0,E.Z)((()=>{!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ce.current)&&($?se():oe())})),ue="next"===A?"start":"end";B((()=>{l||(null==h||h(Y,ue),null==p||p(Y,ue))}),[Y]);const me=`${V}-item-${A}`,fe=`${V}-item-${ue}`,he=(0,i.useCallback)((e=>{(0,re.Z)(e),null==h||h(Y,ue)}),[h,Y,ue]),pe=(0,i.useCallback)((()=>{U(!1),null==p||p(Y,ue)}),[p,Y,ue]),ge=(0,i.useCallback)((e=>{if(v&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?oe(e):se(e));case"ArrowRight":return e.preventDefault(),void($?se(e):oe(e))}null==b||b(e)}),[v,b,se,oe,$]),ve=(0,i.useCallback)((e=>{"hover"===y&&G(!0),null==N||N(e)}),[y,N]),be=(0,i.useCallback)((e=>{G(!1),null==x||x(e)}),[x]),Ee=(0,i.useRef)(0),ye=(0,i.useRef)(0),Ne=K(),xe=(0,i.useCallback)((e=>{Ee.current=e.touches[0].clientX,ye.current=0,"hover"===y&&G(!0),null==C||C(e)}),[y,C]),we=(0,i.useCallback)((e=>{e.touches&&e.touches.length>1?ye.current=0:ye.current=e.touches[0].clientX-Ee.current,null==k||k(e)}),[k]),Se=(0,i.useCallback)((e=>{if(S){const t=ye.current;Math.abs(t)>40&&(t>0?se(e):oe(e))}"hover"===y&&Ne.set((()=>{G(!1)}),g||void 0),null==j||j(e)}),[S,y,se,oe,Ne,g,j]),Ce=null!=g&&!F&&!q,ke=(0,i.useRef)();(0,i.useEffect)((()=>{var e,t;if(!Ce)return;const a=$?se:oe;return ke.current=window.setInterval(document.visibilityState?de:a,null!=(e=null!=(t=ie.current)?t:g)?e:void 0),()=>{null!==ke.current&&clearInterval(ke.current)}}),[Ce,se,oe,ie,g,de,$]);const je=(0,i.useMemo)((()=>c&&Array.from({length:le},((e,t)=>e=>{null==f||f(t,e)}))),[c,le,f]);return(0,Z.jsxs)(r,{ref:ce,...M,onKeyDown:ge,onMouseOver:ve,onMouseOut:be,onTouchStart:xe,onTouchMove:we,onTouchEnd:Se,className:m()(z,V,l&&"slide",s&&`${V}-fade`,P&&`${V}-${P}`),children:[c&&(0,Z.jsx)("div",{className:`${V}-indicators`,children:te(H,((e,t)=>(0,Z.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=d&&d.length?d[t]:`Slide ${t+1}`,className:t===Y?"active":void 0,onClick:je?je[t]:void 0,"aria-current":t===Y},t)))}),(0,Z.jsx)("div",{className:`${V}-inner`,children:te(H,((e,t)=>{const a=t===Y;return l?(0,Z.jsx)(ne.Z,{in:a,onEnter:a?he:void 0,onEntered:a?pe:void 0,addEndListener:ae.Z,children:(t,r)=>i.cloneElement(e,{...r,className:m()(e.props.className,a&&"entered"!==t&&me,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})}):i.cloneElement(e,{className:m()(e.props.className,a&&"active")})}))}),o&&(0,Z.jsxs)(Z.Fragment,{children:[(w||0!==u)&&(0,Z.jsxs)(J.Z,{className:`${V}-control-prev`,onClick:se,children:[I,L&&(0,Z.jsx)("span",{className:"visually-hidden",children:L})]}),(w||u!==le-1)&&(0,Z.jsxs)(J.Z,{className:`${V}-control-next`,onClick:oe,children:[O,T&&(0,Z.jsx)("span",{className:"visually-hidden",children:T})]})]})]})}));le.displayName="Carousel";var ie=Object.assign(le,{Caption:Y,Item:ee});var se=e=>{let{images:t,current:a}=e;const r=t.map(((e,a)=>i.createElement(ie.Item,{key:a},i.createElement("figure",null,i.createElement(s.Z,{fluid:e.node.childImageSharp.fluid}),i.createElement("figcaption",null,i.createElement("div",{className:"bottom-bar"},i.createElement("div",{className:"counter"},a+1," of ",t.length)))))));return i.createElement(ie,{interval:null,indicators:!1,defaultActiveIndex:a,slide:!1},r)};let oe=function(e){function t(t){var a;return a=e.call(this,t)||this,d.Z.handleAnchorScroll=d.Z.handleAnchorScroll.bind((0,n.Z)(a)),a.state={modalShow:!1,modalCurrent:0},a.handlePortfolioClick=a.handlePortfolioClick.bind((0,n.Z)(a)),a.setModal=a.setModal.bind((0,n.Z)(a)),a}(0,l.Z)(t,e);var a=t.prototype;return a.handlePortfolioClick=function(e,t){t.preventDefault(),this.setModal(!0,e)},a.setModal=function(e,t){this.setState({modalShow:e,modalCurrent:t})},a.render=function(){return i.createElement(o.Z,null,i.createElement(c.Z,{title:"Home"}),i.createElement("section",{className:"page-section bg-primary",id:"about"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row justify-content-center"},i.createElement("div",{className:"col-lg-8 text-center"},i.createElement("h2",{className:"text-white mt-0"},"We've got what you need!"),i.createElement("hr",{className:"divider light my-4"}),i.createElement("p",{className:"text-white-50 mb-4"},"Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!"),i.createElement("a",{className:"btn btn-light btn-xl js-scroll-trigger",href:"#services",onClick:d.Z.handleAnchorScroll},"Get Started!"))))),i.createElement("section",{className:"page-section",id:"services"},i.createElement("div",{className:"container"},i.createElement("h2",{className:"text-center mt-0"},"At Your Service"),i.createElement("hr",{className:"divider my-4"}),i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-3 col-md-6 text-center"},i.createElement("div",{className:"mt-5"},i.createElement("i",{className:"fas fa-4x fa-gem text-primary mb-4"}),i.createElement("h3",{className:"h4 mb-2"},"Sturdy Themes"),i.createElement("p",{className:"text-muted mb-0"},"Our themes are updated regularly to keep them bug free!"))),i.createElement("div",{className:"col-lg-3 col-md-6 text-center"},i.createElement("div",{className:"mt-5"},i.createElement("i",{className:"fas fa-4x fa-laptop-code text-primary mb-4"}),i.createElement("h3",{className:"h4 mb-2"},"Up to Date"),i.createElement("p",{className:"text-muted mb-0"},"All dependencies are kept current to keep things fresh."))),i.createElement("div",{className:"col-lg-3 col-md-6 text-center"},i.createElement("div",{className:"mt-5"},i.createElement("i",{className:"fas fa-4x fa-globe text-primary mb-4"}),i.createElement("h3",{className:"h4 mb-2"},"Ready to Publish"),i.createElement("p",{className:"text-muted mb-0"},"You can use this design as is, or you can make changes!"))),i.createElement("div",{className:"col-lg-3 col-md-6 text-center"},i.createElement("div",{className:"mt-5"},i.createElement("i",{className:"fas fa-4x fa-heart text-primary mb-4"}),i.createElement("h3",{className:"h4 mb-2"},"Made with Love"),i.createElement("p",{className:"text-muted mb-0"},"Is it really open source if it's not made with love?")))))),i.createElement("section",{id:"portfolio"},i.createElement("div",{className:"container-fluid p-0"},i.createElement("div",{className:"row gx-0"},i.createElement("div",{className:"col-lg-4 col-sm-6"},i.createElement("a",{className:"portfolio-box",href:"img/portfolio/fullsize/1.jpg",onClick:this.handlePortfolioClick.bind(this,0)},i.createElement(s.Z,{fluid:this.props.data.images.edges[0].node.childImageSharp.fluid}),i.createElement("div",{className:"portfolio-box-caption"},i.createElement("div",{className:"project-category text-white-50"},"Category"),i.createElement("div",{className:"project-name"},"Project Name")))),i.createElement("div",{className:"col-lg-4 col-sm-6"},i.createElement("a",{className:"portfolio-box",href:"img/portfolio/fullsize/2.jpg",onClick:this.handlePortfolioClick.bind(this,1)},i.createElement(s.Z,{fluid:this.props.data.images.edges[1].node.childImageSharp.fluid}),i.createElement("div",{className:"portfolio-box-caption"},i.createElement("div",{className:"project-category text-white-50"},"Category"),i.createElement("div",{className:"project-name"},"Project Name")))),i.createElement("div",{className:"col-lg-4 col-sm-6"},i.createElement("a",{className:"portfolio-box",href:"img/portfolio/fullsize/3.jpg",onClick:this.handlePortfolioClick.bind(this,2)},i.createElement(s.Z,{fluid:this.props.data.images.edges[2].node.childImageSharp.fluid}),i.createElement("div",{className:"portfolio-box-caption"},i.createElement("div",{className:"project-category text-white-50"},"Category"),i.createElement("div",{className:"project-name"},"Project Name")))),i.createElement("div",{className:"col-lg-4 col-sm-6"},i.createElement("a",{className:"portfolio-box",href:"images/portfolio/fullsize/4.jpg",onClick:this.handlePortfolioClick.bind(this,3)},i.createElement(s.Z,{fluid:this.props.data.images.edges[3].node.childImageSharp.fluid}),i.createElement("div",{className:"portfolio-box-caption"},i.createElement("div",{className:"project-category text-white-50"},"Category"),i.createElement("div",{className:"project-name"},"Project Name")))),i.createElement("div",{className:"col-lg-4 col-sm-6"},i.createElement("a",{className:"portfolio-box",href:"img/portfolio/fullsize/5.jpg",onClick:this.handlePortfolioClick.bind(this,4)},i.createElement(s.Z,{fluid:this.props.data.images.edges[4].node.childImageSharp.fluid}),i.createElement("div",{className:"portfolio-box-caption"},i.createElement("div",{className:"project-category text-white-50"},"Category"),i.createElement("div",{className:"project-name"},"Project Name")))),i.createElement("div",{className:"col-lg-4 col-sm-6"},i.createElement("a",{className:"portfolio-box",href:"img/portfolio/fullsize/6.jpg",onClick:this.handlePortfolioClick.bind(this,5)},i.createElement(s.Z,{fluid:this.props.data.images.edges[5].node.childImageSharp.fluid}),i.createElement("div",{className:"portfolio-box-caption p-3"},i.createElement("div",{className:"project-category text-white-50"},"Category"),i.createElement("div",{className:"project-name"},"Project Name"))))))),i.createElement("section",{className:"page-section bg-dark text-white"},i.createElement("div",{className:"container text-center"},i.createElement("h2",{className:"mb-4"},"Free Download at Start Bootstrap!"),i.createElement("a",{className:"btn btn-light btn-xl",href:"https://startbootstrap.com/themes/creative/"},"Download Now!"))),i.createElement("section",{className:"page-section",id:"contact"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row justify-content-center"},i.createElement("div",{className:"col-lg-8 text-center"},i.createElement("h2",{className:"mt-0"},"Let's Get In Touch!"),i.createElement("hr",{className:"divider my-4"}),i.createElement("p",{className:"text-muted mb-5"},"Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!"))),i.createElement("div",{className:"row"},i.createElement("div",{className:"col-lg-4 ml-auto text-center mb-5 mb-lg-0"},i.createElement("i",{className:"fas fa-phone fa-3x mb-3 text-muted"}),i.createElement("div",null,"+1 (202) 555-0149")),i.createElement("div",{className:"col-lg-4 mr-auto text-center"},i.createElement("i",{className:"fas fa-envelope fa-3x mb-3 text-muted"}),i.createElement("a",{className:"d-block",href:"mailto:contact@yourwebsite.com"},"contact@yourwebsite.com"))))),i.createElement(F,{show:this.state.modalShow,onHide:()=>this.setModal(!1,0)},i.createElement(se,{images:this.props.data.images.edges,current:this.state.modalCurrent})))},t}(i.Component)},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-f82c16f6c91c99377a51.js.map