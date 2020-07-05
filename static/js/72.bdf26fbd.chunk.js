(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[72],{2009:function(e,a,t){e.exports=t.p+"static/media/reset-password.01a139f9.png"},2047:function(e,a,t){"use strict";t.r(a);var n=t(12),s=t(13),r=t(15),l=t(14),o=t(0),c=t.n(o),i=t(1258),d=t(1259),u=t(1260),m=t(1261),p=t(1262),f=t(1263),b=t(835),h=t(826),g=t(819),y=t(831),v=t(181),j=t(23),E=t(2009),N=t.n(E),O=(t(892),function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(i.a,{className:"m-0 justify-content-center"},c.a.createElement(d.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},c.a.createElement(u.a,{className:"bg-authentication rounded-0 mb-0 w-100"},c.a.createElement(i.a,{className:"m-0"},c.a.createElement(d.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-5"},c.a.createElement("img",{className:"px-5 mx-2",src:N.a,alt:"resetImg"})),c.a.createElement(d.a,{lg:"6",md:"12",className:"p-0"},c.a.createElement(u.a,{className:"rounded-0 mb-0 px-2 py-50"},c.a.createElement(m.a,{className:"pb-1 pt-1"},c.a.createElement(p.a,null,c.a.createElement("h4",{className:"mb-0"},"Reset Password"))),c.a.createElement("p",{className:"px-2 auth-title"},"Please enter your email address and new password to continue."),c.a.createElement(f.a,{className:"pt-1"},c.a.createElement(b.a,null,c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"email",placeholder:"Email",required:!0}),c.a.createElement(y.a,null,"Email")),c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"password",placeholder:"Password",required:!0}),c.a.createElement(y.a,null,"Password")),c.a.createElement(h.a,{className:"form-label-group"},c.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0}),c.a.createElement(y.a,null,"Confirm Password")),c.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column"},c.a.createElement(v.a.Ripple,{block:!0,className:"btn-block",color:"primary",outline:!0,onClick:function(e){e.preventDefault(),j.a.push("/pages/login")}},"Go Back to Login"),c.a.createElement(v.a.Ripple,{block:!0,color:"primary",type:"submit",className:"btn-block mt-1 mt-sm-0",onClick:function(e){return e.preventDefault()}},"Reset"))))))))))}}]),t}(c.a.Component));a.default=O},819:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(11),l=t(16),o=t(0),c=t.n(o),i=t(1),d=t.n(i),u=t(3),m=t.n(u),p=t(4),f={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,f=e.plaintext,b=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=d||("select"===r||"textarea"===r?r:"input"),j="form-control";f?(j+="-plaintext",v=d||"input"):"file"===r?j+="-file":"range"===r?j+="-range":g&&(j=u?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var E=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,j),t);return("input"===v||d&&"function"===typeof d)&&(h.type=r),h.children&&!f&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(v,Object(n.a)({},h,{ref:b,className:E,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},826:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(3),d=t.n(i),u=t(4),m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,m=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(u.mapToCssModules)(d()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===m&&(p.disabled=o),l.a.createElement(m,Object(n.a)({},p,{className:f}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},831:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(3),d=t.n(i),u=t(4),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,f=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(a,n){var s=e[a];if(delete f[a],s||""===s){var r,l=!n;if(Object(u.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=h(l,a,s.size),b.push(Object(u.mapToCssModules)(d()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=h(l,a,s),b.push(r)}}));var g=Object(u.mapToCssModules)(d()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:p},f,{className:g}))};g.propTypes=f,g.defaultProps=b,a.a=g},835:function(e,a,t){"use strict";var n=t(5),s=t(8),r=t(11),l=t(16),o=t(0),c=t.n(o),i=t(1),d=t.n(i),u=t(3),m=t.n(u),p=t(4),f={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:d}))},a}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},892:function(e,a,t){}}]);
//# sourceMappingURL=72.bdf26fbd.chunk.js.map