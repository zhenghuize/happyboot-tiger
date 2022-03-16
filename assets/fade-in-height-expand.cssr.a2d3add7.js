import{c as $,K as f}from"./Space.5f8f31c2.js";const{cubicBezierEaseInOut:e,cubicBezierEaseOut:h,cubicBezierEaseIn:g}=f;function b({overflow:p="hidden",duration:t=".3s",originalTransition:i="",leavingDelay:n="0s",foldPadding:s=!1,enterToProps:c=void 0,leaveToProps:d=void 0,reverse:m=!1}={}){const a=m?"leave":"enter",o=m?"enter":"leave";return[$(`&.fade-in-height-expand-transition-${o}-from,
 &.fade-in-height-expand-transition-${a}-to`,Object.assign(Object.assign({},c),{opacity:1})),$(`&.fade-in-height-expand-transition-${o}-to,
 &.fade-in-height-expand-transition-${a}-from`,Object.assign(Object.assign({},d),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:s?"0 !important":void 0,paddingBottom:s?"0 !important":void 0})),$(`&.fade-in-height-expand-transition-${o}-active`,`
 overflow: ${p};
 transition:
 max-height ${t} ${e} ${n},
 opacity ${t} ${h} ${n},
 margin-top ${t} ${e} ${n},
 margin-bottom ${t} ${e} ${n},
 padding-top ${t} ${e} ${n},
 padding-bottom ${t} ${e} ${n}
 ${i?","+i:""}
 `),$(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${p};
 transition:
 max-height ${t} ${e},
 opacity ${t} ${g},
 margin-top ${t} ${e},
 margin-bottom ${t} ${e},
 padding-top ${t} ${e},
 padding-bottom ${t} ${e}
 ${i?","+i:""}
 `)]}export{b as f};
