(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"uP/6":function(n,l,t){"use strict";t.r(l);var a=t("8Y7J");class o{}var r=t("t68o"),e=t("xYTU"),i=t("D6GP"),u=t("pMnS"),s=t("BV1i"),b=t("SVse"),c=t("IP0z"),d=t("Xd0L"),m=t("cUpR"),p=t("/HVE"),h=t("hOhj"),v=t("5GAg"),w=t("omvX"),f=a.qb({encapsulation:2,styles:[],data:{}});function g(n){return a.Nb(2,[a.Cb(null,0)],null,null)}var D=a.qb({encapsulation:2,styles:[],data:{animation:[{type:7,name:"transform",definitions:[{type:0,name:"open, open-instant",styles:{type:6,styles:{transform:"none",visibility:"visible"},offset:null},options:void 0},{type:0,name:"void",styles:{type:6,styles:{"box-shadow":"none",visibility:"hidden"},offset:null},options:void 0},{type:1,expr:"void => open-instant",animation:{type:4,styles:null,timings:"0ms"},options:null},{type:1,expr:"void <=> open, open-instant => void",animation:{type:4,styles:null,timings:"400ms cubic-bezier(0.25, 0.8, 0.25, 1)"},options:null}],options:{}}]}});function k(n){return a.Nb(2,[(n()(),a.sb(0,0,null,null,1,"div",[["class","mat-drawer-inner-container"]],null,null,null,null,null)),a.Cb(null,0)],null,null)}var B=a.qb({encapsulation:2,styles:[".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}@media (-ms-high-contrast:active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}@media (-ms-high-contrast:active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media (-ms-high-contrast:active){.mat-drawer.mat-drawer-end,[dir=rtl] .mat-drawer{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],data:{}});function y(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,0,"div",[["class","mat-drawer-backdrop"]],[[2,"mat-drawer-shown",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component._onBackdropClicked()&&a),a},null,null))],null,function(n,l){n(l,0,0,l.component._isShowingBackdrop())})}function _(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,3,"mat-sidenav-content",[["cdkScrollable",""],["class","mat-drawer-content mat-sidenav-content"]],[[4,"margin-left","px"],[4,"margin-right","px"]],null,null,g,f)),a.rb(1,212992,null,0,h.a,[a.k,h.b,a.y,[2,c.b]],null,null),a.rb(2,1294336,null,0,s.g,[a.h,s.f,a.k,h.b,a.y],null,null),a.Cb(0,2)],function(n,l){n(l,1,0),n(l,2,0)},function(n,l){n(l,0,0,a.Db(l,2)._container._contentMargins.left,a.Db(l,2)._container._contentMargins.right)})}function x(n){return a.Nb(2,[a.Jb(671088640,1,{_userContent:0}),(n()(),a.hb(16777216,null,null,1,null,y)),a.rb(2,16384,null,0,b.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null),a.Cb(null,0),a.Cb(null,1),(n()(),a.hb(16777216,null,null,1,null,_)),a.rb(6,16384,null,0,b.l,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.hasBackdrop),n(l,6,0,!t._content)},null)}var L=t("FbN9"),M=t("BzsH"),C=t("6UMx"),z=t("Q+lL"),N=t("iInd"),J=t("Mr+X"),I=t("Gi4r");class O{constructor(){this.isMenu=!1,this.close=new a.m,this.resources=[{url:"/dashboard/chat",icon:"chat_bubble",title:"Minhas Conversas"},{url:"/dashboard/chat/users",icon:"people",title:"Todos Usu\xe1rios"},{url:"/dashboard/profile",icon:"person",title:"Perfil"}]}ngOnInit(){this.isMenu&&this.resources.unshift({url:"/dashboard",icon:"home",title:"Home"})}onClose(){this.close.emit()}}var q=a.qb({encapsulation:2,styles:[],data:{}});function S(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,12,"a",[["class","mat-list-item"],["mat-list-item",""]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0,r=n.component;return"click"===l&&(o=!1!==a.Db(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),"click"===l&&(o=!1!==r.onClose()&&o),o},C.c,C.a)),a.rb(1,1228800,null,3,z.d,[a.k,a.h,[2,z.h],[2,z.a]],null,null),a.Jb(603979776,1,{_lines:1}),a.Jb(603979776,2,{_avatar:0}),a.Jb(603979776,3,{_icon:0}),a.rb(5,671744,null,0,N.o,[N.l,N.a,b.i],{routerLink:[0,"routerLink"]},null),(n()(),a.sb(6,0,null,0,3,"mat-icon",[["class","mat-icon notranslate mat-list-icon"],["matListIcon",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,J.b,J.a)),a.rb(7,9158656,null,0,I.b,[a.k,I.d,[8,null],[2,I.a],[2,a.l]],null,null),a.rb(8,16384,[[3,4]],0,z.c,[],null,null),(n()(),a.Lb(9,0,["",""])),(n()(),a.sb(10,0,null,1,2,"h3",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),a.rb(11,16384,[[1,4]],0,d.m,[],null,null),(n()(),a.Lb(12,null,["",""]))],function(n,l){n(l,5,0,l.context.$implicit.url),n(l,7,0)},function(n,l){n(l,0,0,a.Db(l,1)._avatar||a.Db(l,1)._icon,a.Db(l,1)._avatar||a.Db(l,1)._icon,a.Db(l,5).target,a.Db(l,5).href),n(l,6,0,a.Db(l,7).inline,"primary"!==a.Db(l,7).color&&"accent"!==a.Db(l,7).color&&"warn"!==a.Db(l,7).color),n(l,9,0,l.context.$implicit.icon),n(l,12,0,l.context.$implicit.title)})}function F(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,4,"mat-nav-list",[["class","mat-nav-list mat-list-base"],["role","navigation"]],null,null,null,C.d,C.b)),a.rb(1,704512,null,0,z.h,[],null,null),(n()(),a.hb(16777216,null,0,1,null,S)),a.rb(3,278528,null,0,b.k,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),a.Cb(0,0)],function(n,l){n(l,3,0,l.component.resources)},null)}function P(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,1,"app-dashboard-resources",[],null,null,null,F,q)),a.rb(1,114688,null,0,O,[],null,null)],function(n,l){n(l,1,0)},null)}var V=a.ob("app-dashboard-resources",O,P,{isMenu:"isMenu"},{close:"close"},["*"]),j=t("TtEo"),A=t("02hT"),R=t("bujt"),T=t("Fwaw");class U{constructor(n,l){this.authService=n,this.title=l}onLogout(){this.authService.logout()}}var G=t("7dP1"),H=a.qb({encapsulation:0,styles:[[""]],data:{}});function Q(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,17,"mat-toolbar",[["class","mat-elevation-z8 mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,L.b,L.a)),a.rb(1,4243456,null,1,M.a,[a.k,p.a,b.d],{color:[0,"color"]},null),a.Jb(603979776,1,{_toolbarRows:1}),(n()(),a.sb(3,0,null,1,14,"mat-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),a.rb(4,16384,[[1,4]],0,M.c,[],null,null),(n()(),a.sb(5,0,null,null,4,"button",[["mat-icon-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component.sidenav.toggle()&&a),a},R.b,R.a)),a.rb(6,180224,null,0,T.b,[a.k,v.d,[2,w.a]],null,null),(n()(),a.sb(7,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,J.b,J.a)),a.rb(8,9158656,null,0,I.b,[a.k,I.d,[8,null],[2,I.a],[2,a.l]],null,null),(n()(),a.Lb(-1,0,["menu"])),(n()(),a.sb(10,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),a.Lb(11,null,["",""])),(n()(),a.sb(12,0,null,null,0,"span",[["class","spacer"]],null,null,null,null,null)),(n()(),a.sb(13,0,null,null,4,"button",[["mat-icon-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component.onLogout()&&a),a},R.b,R.a)),a.rb(14,180224,null,0,T.b,[a.k,v.d,[2,w.a]],null,null),(n()(),a.sb(15,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,J.b,J.a)),a.rb(16,9158656,null,0,I.b,[a.k,I.d,[8,null],[2,I.a],[2,a.l]],null,null),(n()(),a.Lb(-1,0,["arrow_forward"]))],function(n,l){n(l,1,0,"primary"),n(l,8,0),n(l,16,0)},function(n,l){var t=l.component;n(l,0,0,a.Db(l,1)._toolbarRows.length>0,0===a.Db(l,1)._toolbarRows.length),n(l,5,0,a.Db(l,6).disabled||null,"NoopAnimations"===a.Db(l,6)._animationMode),n(l,7,0,a.Db(l,8).inline,"primary"!==a.Db(l,8).color&&"accent"!==a.Db(l,8).color&&"warn"!==a.Db(l,8).color),n(l,11,0,t.title.getTitle()),n(l,13,0,a.Db(l,14).disabled||null,"NoopAnimations"===a.Db(l,14)._animationMode),n(l,15,0,a.Db(l,16).inline,"primary"!==a.Db(l,16).color&&"accent"!==a.Db(l,16).color&&"warn"!==a.Db(l,16).color)})}class K{constructor(n){this.authService=n}onLogout(n){n.close().then(()=>this.authService.logout())}}var X=a.qb({encapsulation:0,styles:[['@charset "UTF-8";.sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}.sidenav[_ngcontent-%COMP%]{width:320px}']],data:{}});function $(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,31,"mat-sidenav-container",[["class","sidenav-container mat-drawer-container mat-sidenav-container"]],[[2,"mat-drawer-container-explicit-backdrop",null]],null,null,x,B)),a.rb(1,1490944,null,2,s.f,[[2,c.b],a.k,a.y,a.h,h.e,s.a,[2,w.a]],null,null),a.Jb(603979776,1,{_drawers:1}),a.Jb(603979776,2,{_content:0}),(n()(),a.sb(4,0,null,0,21,"mat-sidenav",[["class","sidenav mat-drawer mat-sidenav"],["tabIndex","-1"]],[[1,"align",0],[2,"mat-drawer-end",null],[2,"mat-drawer-over",null],[2,"mat-drawer-push",null],[2,"mat-drawer-side",null],[2,"mat-drawer-opened",null],[2,"mat-sidenav-fixed",null],[4,"top","px"],[4,"bottom","px"],[40,"@transform",0]],[["component","@transform.start"],["component","@transform.done"]],function(n,l,t){var o=!0;return"component:@transform.start"===l&&(o=!1!==a.Db(n,5)._animationStartListener(t)&&o),"component:@transform.done"===l&&(o=!1!==a.Db(n,5)._animationDoneListener(t)&&o),o},k,D)),a.rb(5,3325952,[[1,4],["sidenav",4]],0,s.e,[a.k,v.e,v.d,p.a,a.y,[2,b.d]],null,null),(n()(),a.sb(6,0,null,0,3,"mat-toolbar",[["class","mat-elevator-z8 mat-toolbar"],["color","primary"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,L.b,L.a)),a.rb(7,4243456,null,1,M.a,[a.k,p.a,b.d],{color:[0,"color"]},null),a.Jb(603979776,3,{_toolbarRows:1}),(n()(),a.Lb(-1,0,[" Menu "])),(n()(),a.sb(10,0,null,0,15,"app-dashboard-resources",[],null,[[null,"close"]],function(n,l,t){var o=!0;return"close"===l&&(o=!1!==a.Db(n,5).close()&&o),o},F,q)),a.rb(11,114688,null,0,O,[],{isMenu:[0,"isMenu"]},{close:"close"}),(n()(),a.sb(12,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-horizontal",null],[2,"mat-divider-inset",null]],null,null,j.b,j.a)),a.rb(13,49152,null,0,A.a,[],null,null),(n()(),a.sb(14,0,null,0,11,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.onLogout(a.Db(n,5))&&o),o},C.c,C.a)),a.rb(15,1228800,null,3,z.d,[a.k,a.h,[2,z.h],[2,z.a]],null,null),a.Jb(603979776,4,{_lines:1}),a.Jb(603979776,5,{_avatar:0}),a.Jb(603979776,6,{_icon:0}),(n()(),a.sb(19,0,null,0,3,"mat-icon",[["class","mat-icon notranslate mat-list-icon"],["matListIcon",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,J.b,J.a)),a.rb(20,9158656,null,0,I.b,[a.k,I.d,[8,null],[2,I.a],[2,a.l]],null,null),a.rb(21,16384,[[6,4]],0,z.c,[],null,null),(n()(),a.Lb(-1,0,["arrow_forward"])),(n()(),a.sb(23,0,null,1,2,"h3",[["class","mat-line"],["matLine",""]],null,null,null,null,null)),a.rb(24,16384,[[4,4]],0,d.m,[],null,null),(n()(),a.Lb(-1,null,["Sair"])),(n()(),a.sb(26,0,null,1,5,"mat-sidenav-content",[["class","mat-drawer-content mat-sidenav-content"]],[[4,"margin-left","px"],[4,"margin-right","px"]],null,null,g,f)),a.rb(27,1294336,[[2,4]],0,s.g,[a.h,s.f,a.k,h.b,a.y],null,null),(n()(),a.sb(28,0,null,0,1,"app-dashboard-header",[],null,null,null,Q,H)),a.rb(29,49152,null,0,U,[G.a,m.h],{sidenav:[0,"sidenav"]},null),(n()(),a.sb(30,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),a.rb(31,212992,null,0,N.q,[N.b,a.O,a.j,[8,null],a.h],null,null)],function(n,l){n(l,1,0),n(l,7,0,"primary"),n(l,11,0,!0),n(l,20,0),n(l,27,0),n(l,29,0,a.Db(l,5)),n(l,31,0)},function(n,l){n(l,0,0,a.Db(l,1)._backdropOverride),n(l,4,0,null,"end"===a.Db(l,5).position,"over"===a.Db(l,5).mode,"push"===a.Db(l,5).mode,"side"===a.Db(l,5).mode,a.Db(l,5).opened,a.Db(l,5).fixedInViewport,a.Db(l,5).fixedInViewport?a.Db(l,5).fixedTopGap:null,a.Db(l,5).fixedInViewport?a.Db(l,5).fixedBottomGap:null,a.Db(l,5)._animationState),n(l,6,0,a.Db(l,7)._toolbarRows.length>0,0===a.Db(l,7)._toolbarRows.length),n(l,12,0,a.Db(l,13).vertical?"vertical":"horizontal",a.Db(l,13).vertical,!a.Db(l,13).vertical,a.Db(l,13).inset),n(l,14,0,a.Db(l,15)._avatar||a.Db(l,15)._icon,a.Db(l,15)._avatar||a.Db(l,15)._icon),n(l,19,0,a.Db(l,20).inline,"primary"!==a.Db(l,20).color&&"accent"!==a.Db(l,20).color&&"warn"!==a.Db(l,20).color),n(l,26,0,a.Db(l,27)._container._contentMargins.left,a.Db(l,27)._container._contentMargins.right)})}function E(n){return a.Nb(0,[(n()(),a.sb(0,0,null,null,1,"app-dashboard-home",[],null,null,null,$,X)),a.rb(1,49152,null,0,K,[G.a],null,null)],null,null)}var W=a.ob("app-dashboard-home",K,E,{},{},[]),Y=t("QQfA"),Z=t("s6ns"),nn=t("s7LF"),ln=t("POq0"),tn=t("gavF"),an=t("igqZ"),on=t("zMNK"),rn=t("HsOI"),en=t("oapL"),un=t("ZwOa"),sn=t("W5yJ"),bn=t("dFDH"),cn=t("pBi1"),dn=t("rWV4"),mn=t("PCNd"),pn=t("VQQV");class hn{}t.d(l,"DashboardModuleNgFactory",function(){return vn});var vn=a.pb(o,[],function(n){return a.Ab([a.Bb(512,a.j,a.ab,[[8,[r.a,e.a,e.b,i.a,u.a,W,V]],[3,a.j],a.w]),a.Bb(4608,b.n,b.m,[a.t,[2,b.B]]),a.Bb(4608,Y.a,Y.a,[Y.g,Y.c,a.j,Y.f,Y.d,a.q,a.y,b.d,c.b,[2,b.h]]),a.Bb(5120,Y.h,Y.i,[Y.a]),a.Bb(5120,Z.c,Z.d,[Y.a]),a.Bb(135680,Z.e,Z.e,[Y.a,a.q,[2,b.h],[2,Z.b],Z.c,[3,Z.e],Y.c]),a.Bb(4608,nn.y,nn.y,[]),a.Bb(4608,ln.c,ln.c,[]),a.Bb(4608,d.b,d.b,[]),a.Bb(5120,tn.c,tn.j,[Y.a]),a.Bb(4608,m.e,d.c,[[2,d.g],[2,d.l]]),a.Bb(4608,nn.g,nn.g,[]),a.Bb(1073742336,b.c,b.c,[]),a.Bb(1073742336,c.a,c.a,[]),a.Bb(1073742336,d.l,d.l,[[2,d.d],[2,m.f]]),a.Bb(1073742336,p.b,p.b,[]),a.Bb(1073742336,d.v,d.v,[]),a.Bb(1073742336,T.c,T.c,[]),a.Bb(1073742336,an.f,an.f,[]),a.Bb(1073742336,on.g,on.g,[]),a.Bb(1073742336,h.c,h.c,[]),a.Bb(1073742336,Y.e,Y.e,[]),a.Bb(1073742336,Z.k,Z.k,[]),a.Bb(1073742336,I.c,I.c,[]),a.Bb(1073742336,M.b,M.b,[]),a.Bb(1073742336,nn.x,nn.x,[]),a.Bb(1073742336,nn.l,nn.l,[]),a.Bb(1073742336,ln.d,ln.d,[]),a.Bb(1073742336,rn.e,rn.e,[]),a.Bb(1073742336,en.c,en.c,[]),a.Bb(1073742336,un.b,un.b,[]),a.Bb(1073742336,d.n,d.n,[]),a.Bb(1073742336,d.t,d.t,[]),a.Bb(1073742336,A.b,A.b,[]),a.Bb(1073742336,z.e,z.e,[]),a.Bb(1073742336,tn.i,tn.i,[]),a.Bb(1073742336,tn.f,tn.f,[]),a.Bb(1073742336,sn.c,sn.c,[]),a.Bb(1073742336,s.h,s.h,[]),a.Bb(1073742336,bn.e,bn.e,[]),a.Bb(1073742336,cn.d,cn.d,[]),a.Bb(1073742336,cn.c,cn.c,[]),a.Bb(1073742336,v.a,v.a,[]),a.Bb(1073742336,dn.k,dn.k,[]),a.Bb(1073742336,nn.u,nn.u,[]),a.Bb(1073742336,mn.a,mn.a,[]),a.Bb(1073742336,N.p,N.p,[[2,N.u],[2,N.l]]),a.Bb(1073742336,hn,hn,[]),a.Bb(1073742336,o,o,[]),a.Bb(1024,N.j,function(){return[[{path:"",component:K,canActivate:[pn.a],canActivateChild:[pn.a],children:[{path:"chat",loadChildren:"./../chat/chat.module#ChatModule",canLoad:[pn.a]},{path:"profile",loadChildren:"./../user/user.module#UserModule",canLoad:[pn.a]},{path:"",component:O}]}]]},[])])})}}]);