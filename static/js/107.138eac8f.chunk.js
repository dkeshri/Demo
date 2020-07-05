(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{1071:function(e,t,a){"use strict";var n=a(5),i=a(11),l=a(16),s=a(0),r=a.n(s),o=a(1),c=a.n(o),u=a(865),m=a(4),p=["toggleEvents","defaultOpen"],d={defaultOpen:c.a.bool,toggler:c.a.string.isRequired,toggleEvents:c.a.arrayOf(c.a.string)},E={toggleEvents:m.defaultToggleEvents},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).togglers=null,a.removeEventListeners=null,a.toggle=a.toggle.bind(Object(i.a)(a)),a.state={isOpen:t.defaultOpen||!1},a}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.togglers=Object(m.findDOMElements)(this.props.toggler),this.togglers.length&&(this.removeEventListeners=Object(m.addMultipleEventListeners)(this.togglers,this.toggle,this.props.toggleEvents))},a.componentWillUnmount=function(){this.togglers.length&&this.removeEventListeners&&this.removeEventListeners()},a.toggle=function(e){this.setState((function(e){return{isOpen:!e.isOpen}})),e.preventDefault()},a.render=function(){return r.a.createElement(u.a,Object(n.a)({isOpen:this.state.isOpen},Object(m.omit)(this.props,p)))},t}(s.Component);g.propTypes=d,g.defaultProps=E,t.a=g},2048:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(13),l=a(15),s=a(14),r=a(0),o=a.n(r),c=a(1260),u=a(1263),m=a(1261),p=a(1262),d=a(181),E=a(1071),g=a(824),h=a(27),f=a(37),b=a(138),v=a(35),O=a(297),N=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={role:e.props.role},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{title:"Access Control",subTitle:"Add route protection using Vuexy's Access Control"}),o.a.createElement(c.a,null,o.a.createElement(u.a,{className:"pt-2"},"Your current role is: ",o.a.createElement("strong",null," ",this.state.role),o.a.createElement("div",{className:"d-flex justify-content-start flex-wrap align-items-center mt-1"},o.a.createElement(v.a,{name:"role-radio",label:"Editor",className:"mr-1",defaultChecked:"editor"===this.state.role,onClick:function(){return e.props.changeRole("editor")}}),o.a.createElement(v.a,{name:"role-radio",label:"Admin",defaultChecked:"admin"===this.state.role,onClick:function(){return e.props.changeRole("admin")}})),o.a.createElement(c.a,{className:"border mt-3"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Buttons")),o.a.createElement(u.a,null,o.a.createElement(d.a,{color:"primary"},"Editor & Admin"),"admin"===this.state.role&&o.a.createElement(d.a,{className:"ml-2",color:"primary"},"Admin Only"))),o.a.createElement(c.a,{className:"border mt-3"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Collapse")),o.a.createElement(u.a,null,o.a.createElement("div",{className:"vx-collapse collapse-bordered"},o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-1"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 1"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(E.a,{toggler:"#item-1"},o.a.createElement(u.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo. Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Nullam sed lobortis nisl, quis eleifend metus."))),o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-2"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 2"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(E.a,{toggler:"#item-2"},o.a.createElement(u.a,null,"Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex, eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus."))),"admin"===this.state.role&&o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-3"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 3 - Admin Only"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(E.a,{toggler:"#item-3"},o.a.createElement(u.a,null,"Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu"))),o.a.createElement(c.a,null,o.a.createElement(m.a,{id:"item-4"},o.a.createElement(p.a,{className:"lead collapse-title collapsed"},"Article 4"),o.a.createElement(O.a,{size:15,className:"collapse-icon"})),o.a.createElement(E.a,{toggler:"#item-4"},o.a.createElement(u.a,null,"Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.")))))),o.a.createElement(c.a,{className:"border mt-3"},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Route Protection")),o.a.createElement(u.a,null,o.a.createElement("p",null,"You can add route protection using file"," ",o.a.createElement("strong",null,"navigationConfig"),". Only admin can visit eCommerce Dashboard."),o.a.createElement(d.a,{color:"admin"===this.state.role?"primary":"danger"},o.a.createElement(f.a,{to:"/ecommerce-dashboard",className:"text-white"},"Visit")))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.role!==t.role?{role:e.role}:null}}]),a}(o.a.Component);t.default=Object(h.b)((function(e){return{role:e.auth.login.userRole}}),{changeRole:b.a})(N)},824:function(e,t,a){"use strict";var n=a(12),i=a(13),l=a(15),s=a(14),r=a(0),o=a.n(r),c=a(1258),u=a(1259),m=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(c.a,{className:"mb-2"},o.a.createElement(u.a,{sm:"12",className:"ml-50"},o.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):o.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(o.a.Component);t.a=m},865:function(e,t,a){"use strict";var n,i=a(5),l=a(8),s=a(11),r=a(16),o=a(34),c=a(0),u=a.n(c),m=a(1),p=a.n(m),d=a(3),E=a.n(d),g=a(103),h=a(4),f=Object(o.a)({},g.Transition.propTypes,{isOpen:p.a.bool,children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),tag:h.tagPropType,className:p.a.node,navbar:p.a.bool,cssModule:p.a.object,innerRef:p.a.oneOfType([p.a.func,p.a.string,p.a.object])}),b=Object(o.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:h.TransitionTimeouts.Collapse}),v=((n={})[h.TransitionStatuses.ENTERING]="collapsing",n[h.TransitionStatuses.ENTERED]="collapse show",n[h.TransitionStatuses.EXITING]="collapsing",n[h.TransitionStatuses.EXITED]="collapse",n);function O(e){return e.scrollHeight}var N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(s.a)(a))})),a}Object(r.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:O(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:O(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,s=t.className,r=t.navbar,c=t.cssModule,m=t.children,p=(t.innerRef,Object(l.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),d=this.state.height,f=Object(h.pick)(p,h.TransitionPropTypeKeys),b=Object(h.omit)(p,h.TransitionPropTypeKeys);return u.a.createElement(g.Transition,Object(i.a)({},f,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return v[e]||"collapse"}(t),l=Object(h.mapToCssModules)(E()(s,n,r&&"navbar-collapse"),c),p=null===d?null:{height:d};return u.a.createElement(a,Object(i.a)({},b,{style:Object(o.a)({},b.style,{},p),className:l,ref:e.props.innerRef}),m)}))},t}(c.Component);N.propTypes=f,N.defaultProps=b,t.a=N}}]);
//# sourceMappingURL=107.138eac8f.chunk.js.map