import{_ as K}from"./amber_img-ea094eaa.js";import{c as R,g as X,u as tt,a as et}from"./status-d408d302.js";import{_ as nt,r as rt,o as st,a as at,c as it,b as z,t as ut,d as ot,F as ct,e as ft,f as dt,p as ht,g as lt}from"./index-bf0e922f.js";var Z={exports:{}};(function(D,C){(function(w,g){D.exports=g()})(R,function(){var w=1e3,g=6e4,W=36e5,I="millisecond",b="second",O="minute",x="hour",v="day",L="week",m="month",U="quarter",p="year",k="date",B="Invalid Date",q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},j=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},Q={s:j,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+j(r,2,"0")+":"+j(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),a=t-e<0,i=n.clone().add(r+(a?-1:1),m);return+(-(r+(t-e)/(a?e-i:i-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:m,y:p,w:L,d:v,D:k,h:x,m:O,s:b,ms:I,Q:U}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},T="en",M={};M[T]=P;var F=function(s){return s instanceof N},E=function s(n,t,r){var e;if(!n)return T;if(typeof n=="string"){var a=n.toLowerCase();M[a]&&(e=a),t&&(M[a]=t,e=a);var i=n.split("-");if(!e&&i.length>1)return s(i[0])}else{var o=n.name;M[o]=n,e=o}return!r&&e&&(T=e),e||!r&&T},f=function(s,n){if(F(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new N(t)},u=Q;u.l=E,u.i=F,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var N=function(){function s(t){this.$L=E(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,a=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(q);if(i){var o=i[2]-1||0,c=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,c)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==B},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,a=!!u.u(r)||r,i=u.p(t),o=function(S,l){var _=u.w(e.$u?Date.UTC(e.$y,l,S):new Date(e.$y,l,S),e);return a?_:_.endOf(v)},c=function(S,l){return u.w(e.toDate()[S].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},d=this.$W,h=this.$M,$=this.$D,H="set"+(this.$u?"UTC":"");switch(i){case p:return a?o(1,0):o(31,11);case m:return a?o(1,h):o(0,h+1);case L:var y=this.$locale().weekStart||0,Y=(d<y?d+7:d)-y;return o(a?$-Y:$+(6-Y),h);case v:case k:return c(H+"Hours",0);case x:return c(H+"Minutes",1);case O:return c(H+"Seconds",2);case b:return c(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,a=u.p(t),i="set"+(this.$u?"UTC":""),o=(e={},e[v]=i+"Date",e[k]=i+"Date",e[m]=i+"Month",e[p]=i+"FullYear",e[x]=i+"Hours",e[O]=i+"Minutes",e[b]=i+"Seconds",e[I]=i+"Milliseconds",e)[a],c=a===v?this.$D+(r-this.$W):r;if(a===m||a===p){var d=this.clone().set(k,1);d.$d[o](c),d.init(),this.$d=d.set(k,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,a=this;t=Number(t);var i=u.p(r),o=function(h){var $=f(a);return u.w($.date($.date()+Math.round(h*t)),a)};if(i===m)return this.set(m,this.$M+t);if(i===p)return this.set(p,this.$y+t);if(i===v)return o(1);if(i===L)return o(7);var c=(e={},e[O]=g,e[x]=W,e[b]=w,e)[i]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||B;var a=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,$=e.months,H=e.meridiem,y=function(l,_,A,V){return l&&(l[_]||l(r,a))||A[_].slice(0,V)},Y=function(l){return u.s(o%12||12,l,"0")},S=H||function(l,_,A){var V=l<12?"AM":"PM";return A?V.toLowerCase():V};return a.replace(G,function(l,_){return _||function(A){switch(A){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return y(e.monthsShort,d,$,3);case"MMMM":return y($,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return y(e.weekdaysMin,r.$W,h,2);case"ddd":return y(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return Y(1);case"hh":return Y(2);case"a":return S(o,c,!0);case"A":return S(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return i}return null}(l)||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var a,i=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*g,h=this-c,$=function(){return u.m(i,c)};switch(o){case p:a=$()/12;break;case m:a=$();break;case U:a=$()/3;break;case L:a=(h-d)/6048e5;break;case v:a=(h-d)/864e5;break;case x:a=h/W;break;case O:a=h/g;break;case b:a=h/w;break;default:a=h}return e?a:u.a(a)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return M[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),a=E(t,r,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),J=N.prototype;return f.prototype=J,[["$ms",I],["$s",b],["$m",O],["$H",x],["$W",v],["$M",m],["$y",p],["$D",k]].forEach(function(s){J[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,N,f),s.$i=!0),f},f.locale=E,f.isDayjs=F,f.unix=function(s){return f(1e3*s)},f.en=M[T],f.Ls=M,f.p={},f})})(Z);var $t=Z.exports;const mt=X($t);const vt=D=>(ht("data-v-fc792390"),D=D(),lt(),D),pt={class:"time font-mynerve"},_t=ft('<div class="message-box" data-v-fc792390><div class="message-box-title" data-v-fc792390><div data-v-fc792390><img src="'+K+'" alt="img" data-v-fc792390><span class="fw-bold" data-v-fc792390>MESSAGE</span></div><span class="fz-sm" data-v-fc792390>Now</span></div><div class="p-3" data-v-fc792390><p data-v-fc792390> 哈囉～<br data-v-fc792390> 跟 Amber 一樣喜歡追劇的朋朋們<br data-v-fc792390> 2023 年就快要結束啦！<br data-v-fc792390><br data-v-fc792390> 有沒有想過如果你是主角<br data-v-fc792390> 會是什麼樣的角色呢?<br data-v-fc792390> 快來測驗一下自己的命定角色吧😜 </p><h2 class="message-end" data-aos="zoom-in" data-aos-delay="300" data-v-fc792390>您已收到來自 Amber 的邀請</h2></div></div>',1),gt=vt(()=>z("span",null,"🔍",-1)),Mt={__name:"EnterView",setup(D){const C=tt(),w=rt(void 0),g=()=>{C.questionStatus=1,C.answerArr=[],dt.push({path:"/question"}),console.log(C.answerArr)};return st(()=>{w.value=mt().format("HH:mm"),et.init({duration:1500,easing:"ease",once:!0})}),(W,I)=>(at(),it(ct,null,[z("p",pt,ut(w.value),1),_t,z("button",{class:"search-bar","data-aos":"zoom-in","data-aos-delay":"1800",onClick:g},[ot(" Let's start ! "),gt])],64))}},wt=nt(Mt,[["__scopeId","data-v-fc792390"]]);export{wt as default};
