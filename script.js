
;
/* jscrollpane, http://jscrollpane.kelvinluck.com/index.html */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(jQuery||require("jquery")):e(jQuery)}(function(be){be.fn.jScrollPane=function(o){function s(w,e){var y,b,k,T,C,S,x,D,B,H,P,z,A,W,Y,M,X,L,R,t,E,I,F,V,q,O,G,N,K,Q,U,$,J,Z,_=this,r=!0,a=!0,l=!1,c=!1,o=w.clone(!1,!1).empty(),ee=!1,te=be.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp",oe=function(){0<y.resizeSensorDelay?setTimeout(function(){se(y)},y.resizeSensorDelay):se(y)};function se(e){var t,o,s,i,n,r,a,l,c,p,u,d,f,h,g,j,v=!1,m=!1;if(y=e,void 0===b)n=w.scrollTop(),r=w.scrollLeft(),w.css({overflow:"hidden",padding:0}),k=w.innerWidth()+J,T=w.innerHeight(),w.width(k),b=be('<div class="jspPane" />').css("padding",$).append(w.children()),C=be('<div class="jspContainer" />').css({width:k+"px",height:T+"px"}).append(b).appendTo(w);else{if(w.css("width",""),C.css({width:"auto",height:"auto"}),b.css("position","static"),a=w.innerWidth()+J,l=w.innerHeight(),b.css("position","absolute"),v=y.stickToBottom&&(20<(p=x-T)&&p-we()<10),m=y.stickToRight&&(20<(c=S-k)&&c-me()<10),i=a!==k||l!==T,k=a,T=l,C.css({width:k,height:T}),!i&&Z==S&&b.outerHeight()==x)return void w.width(k);Z=S,b.css("width",""),w.width(k),C.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}b.css("overflow","auto"),S=e.contentWidth?e.contentWidth:b[0].scrollWidth,x=b[0].scrollHeight,b.css("overflow",""),D=S/k,H=1<(B=x/T)||y.alwaysShowVScroll,(P=1<D||y.alwaysShowHScroll)||H?(w.addClass("jspScrollable"),(t=y.maintainPosition&&(W||X))&&(o=me(),s=we()),H&&(C.append(be('<div class="jspVerticalBar" />').append(be('<div class="jspCap jspCapTop" />'),be('<div class="jspTrack" />').append(be('<div class="jspDrag" />').append(be('<div class="jspDragTop" />'),be('<div class="jspDragBottom" />'))),be('<div class="jspCap jspCapBottom" />'))),L=C.find(">.jspVerticalBar"),R=L.find(">.jspTrack"),z=R.find(">.jspDrag"),y.showArrows&&(F=be('<a class="jspArrow jspArrowUp" />').on("mousedown.jsp",le(0,-1)).on("click.jsp",ye),V=be('<a class="jspArrow jspArrowDown" />').on("mousedown.jsp",le(0,1)).on("click.jsp",ye),y.arrowScrollOnHover&&(F.on("mouseover.jsp",le(0,-1,F)),V.on("mouseover.jsp",le(0,1,V))),ae(R,y.verticalArrowPositions,F,V)),E=T,C.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){E-=be(this).outerHeight()}),z.on("mouseenter",function(){z.addClass("jspHover")}).on("mouseleave",function(){z.removeClass("jspHover")}).on("mousedown.jsp",function(e){be("html").on("dragstart.jsp selectstart.jsp",ye),z.addClass("jspActive");var t=e.pageY-z.position().top;return be("html").on("mousemove.jsp",function(e){ue(e.pageY-t,!1)}).on("mouseup.jsp mouseleave.jsp",pe),!1}),ne()),P&&(C.append(be('<div class="jspHorizontalBar" />').append(be('<div class="jspCap jspCapLeft" />'),be('<div class="jspTrack" />').append(be('<div class="jspDrag" />').append(be('<div class="jspDragLeft" />'),be('<div class="jspDragRight" />'))),be('<div class="jspCap jspCapRight" />'))),q=C.find(">.jspHorizontalBar"),O=q.find(">.jspTrack"),Y=O.find(">.jspDrag"),y.showArrows&&(K=be('<a class="jspArrow jspArrowLeft" />').on("mousedown.jsp",le(-1,0)).on("click.jsp",ye),Q=be('<a class="jspArrow jspArrowRight" />').on("mousedown.jsp",le(1,0)).on("click.jsp",ye),y.arrowScrollOnHover&&(K.on("mouseover.jsp",le(-1,0,K)),Q.on("mouseover.jsp",le(1,0,Q))),ae(O,y.horizontalArrowPositions,K,Q)),Y.on("mouseenter",function(){Y.addClass("jspHover")}).on("mouseleave",function(){Y.removeClass("jspHover")}).on("mousedown.jsp",function(e){be("html").on("dragstart.jsp selectstart.jsp",ye),Y.addClass("jspActive");var t=e.pageX-Y.position().left;return be("html").on("mousemove.jsp",function(e){fe(e.pageX-t,!1)}).on("mouseup.jsp mouseleave.jsp",pe),!1}),G=C.innerWidth(),re()),function(){if(P&&H){var e=O.outerHeight(),t=R.outerWidth();E-=e,be(q).find(">.jspCap:visible,>.jspArrow").each(function(){G+=be(this).outerWidth()}),G-=t,T-=t,k-=e,O.parent().append(be('<div class="jspCorner" />').css("width",e+"px")),ne(),re()}P&&b.width(C.outerWidth()-J+"px");x=b.outerHeight(),B=x/T,P&&((N=Math.ceil(1/D*G))>y.horizontalDragMaxWidth?N=y.horizontalDragMaxWidth:N<y.horizontalDragMinWidth&&(N=y.horizontalDragMinWidth),Y.css("width",N+"px"),M=G-N,he(X));H&&((I=Math.ceil(1/B*E))>y.verticalDragMaxHeight?I=y.verticalDragMaxHeight:I<y.verticalDragMinHeight&&(I=y.verticalDragMinHeight),z.css("height",I+"px"),A=E-I,de(W))}(),t&&(je(m?S-k:o,!1),ge(v?x-T:s,!1)),b.find(":input,a").off("focus.jsp").on("focus.jsp",function(e){ve(e.target,!1)}),C.off(te).on(te,function(e,t,o,s){X||(X=0),W||(W=0);var i=X,n=W,r=e.deltaFactor||y.mouseWheelSpeed;return _.scrollBy(o*r,-s*r,!1),i==X&&n==W}),j=!1,C.off("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").on("touchstart.jsp",function(e){var t=e.originalEvent.touches[0];u=me(),d=we(),f=t.pageX,h=t.pageY,j=!(g=!1)}).on("touchmove.jsp",function(e){if(j){var t=e.originalEvent.touches[0],o=X,s=W;return _.scrollTo(u+f-t.pageX,d+h-t.pageY),g=g||5<Math.abs(f-t.pageX)||5<Math.abs(h-t.pageY),o==X&&s==W}}).on("touchend.jsp",function(e){j=!1}).on("click.jsp-touchclick",function(e){if(g)return g=!1}),y.enableKeyboardNavigation&&function(){var s,i,n=[];P&&n.push(q[0]);H&&n.push(L[0]);b.on("focus.jsp",function(){w.focus()}),w.attr("tabindex",0).off("keydown.jsp keypress.jsp").on("keydown.jsp",function(e){if(e.target===this||n.length&&be(e.target).closest(n).length){var t=X,o=W;switch(e.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=e.keyCode,r();break;case 35:ge(x-T),s=null;break;case 36:ge(0),s=null}return!(i=e.keyCode==s&&t!=X||o!=W)}}).on("keypress.jsp",function(e){if(e.keyCode==s&&r(),e.target===this||n.length&&be(e.target).closest(n).length)return!i}),y.hideFocus?(w.css("outline","none"),"hideFocus"in C[0]&&w.attr("hideFocus",!0)):(w.css("outline",""),"hideFocus"in C[0]&&w.attr("hideFocus",!1));function r(){var e=X,t=W;switch(s){case 40:_.scrollByY(y.keyboardSpeed,!1);break;case 38:_.scrollByY(-y.keyboardSpeed,!1);break;case 34:case 32:_.scrollByY(T*y.scrollPagePercent,!1);break;case 33:_.scrollByY(-T*y.scrollPagePercent,!1);break;case 39:_.scrollByX(y.keyboardSpeed,!1);break;case 37:_.scrollByX(-y.keyboardSpeed,!1)}return i=e!=X||t!=W}}(),y.clickOnTrack&&function(){ce(),H&&R.on("mousedown.jsp",function(i){if(void 0===i.originalTarget||i.originalTarget==i.currentTarget){var n,r=be(this),e=r.offset(),a=i.pageY-e.top-W,l=!0,c=function(){var e=r.offset(),t=i.pageY-e.top-I/2,o=T*y.scrollPagePercent,s=A*o/(x-T);if(a<0)t<W-s?_.scrollByY(-o):ue(t);else{if(!(0<a))return void p();W+s<t?_.scrollByY(o):ue(t)}n=setTimeout(c,l?y.initialDelay:y.trackClickRepeatFreq),l=!1},p=function(){n&&clearTimeout(n),n=null,be(document).off("mouseup.jsp",p)};return c(),be(document).on("mouseup.jsp",p),!1}});P&&O.on("mousedown.jsp",function(i){if(void 0===i.originalTarget||i.originalTarget==i.currentTarget){var n,r=be(this),e=r.offset(),a=i.pageX-e.left-X,l=!0,c=function(){var e=r.offset(),t=i.pageX-e.left-N/2,o=k*y.scrollPagePercent,s=M*o/(S-k);if(a<0)t<X-s?_.scrollByX(-o):fe(t);else{if(!(0<a))return void p();X+s<t?_.scrollByX(o):fe(t)}n=setTimeout(c,l?y.initialDelay:y.trackClickRepeatFreq),l=!1},p=function(){n&&clearTimeout(n),n=null,be(document).off("mouseup.jsp",p)};return c(),be(document).on("mouseup.jsp",p),!1}})}(),function(){if(location.hash&&1<location.hash.length){var e,t,o=escape(location.hash.substr(1));try{e=be("#"+o+', a[name="'+o+'"]')}catch(e){return}e.length&&b.find(o)&&(0===C.scrollTop()?t=setInterval(function(){0<C.scrollTop()&&(ve(e,!0),be(document).scrollTop(C.position().top),clearInterval(t))},50):(ve(e,!0),be(document).scrollTop(C.position().top)))}}(),y.hijackInternalLinks&&function(){if(be(document.body).data("jspHijack"))return;be(document.body).data("jspHijack",!0),be(document.body).delegate('a[href*="#"]',"click",function(e){var t,o,s,i,n,r=this.href.substr(0,this.href.indexOf("#")),a=location.href;if(-1!==location.href.indexOf("#")&&(a=location.href.substr(0,location.href.indexOf("#"))),r===a){t=escape(this.href.substr(this.href.indexOf("#")+1));try{o=be("#"+t+', a[name="'+t+'"]')}catch(e){return}o.length&&(s=o.closest(".jspScrollable"),s.data("jsp").scrollToElement(o,!0),s[0].scrollIntoView&&(i=be(window).scrollTop(),((n=o.offset().top)<i||n>i+be(window).height())&&s[0].scrollIntoView()),e.preventDefault())}})}()):(w.removeClass("jspScrollable"),b.css({top:0,left:0,width:C.width()-J}),C.off(te),b.find(":input,a").off("focus.jsp"),w.attr("tabindex","-1").removeAttr("tabindex").off("keydown.jsp keypress.jsp"),b.off(".jsp"),ce()),y.resizeSensor||!y.autoReinitialise||U?y.resizeSensor||y.autoReinitialise||!U||clearInterval(U):U=setInterval(function(){se(y)},y.autoReinitialiseDelay),y.resizeSensor&&!ee&&(ie(b,oe),ie(w,oe),ie(w.parent(),oe),window.addEventListener("resize",oe),ee=!0),n&&w.scrollTop(0)&&ge(n,!1),r&&w.scrollLeft(0)&&je(r,!1),w.trigger("jsp-initialised",[P||H])}function ie(e,t){var o,s,i=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");i.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",n.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",a.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",r.style.cssText="position: absolute; left: 0; top: 0;",l.style.cssText="position: absolute; left: 0; top: 0; width: 200%; height: 200%;";var c=function(){r.style.width=n.offsetWidth+10+"px",r.style.height=n.offsetHeight+10+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,a.scrollLeft=a.scrollWidth,a.scrollTop=a.scrollHeight,o=e.width(),s=e.height()};n.addEventListener("scroll",function(){(e.width()>o||e.height()>s)&&t.apply(this,[]),c()}.bind(this)),a.addEventListener("scroll",function(){(e.width()<o||e.height()<s)&&t.apply(this,[]),c()}.bind(this)),n.appendChild(r),a.appendChild(l),i.appendChild(n),i.appendChild(a),e.append(i),"static"===window.getComputedStyle(e[0],null).getPropertyValue("position")&&(e[0].style.position="relative"),c()}function ne(){R.height(E+"px"),W=0,t=y.verticalGutter+R.outerWidth(),b.width(k-t-J);try{0===L.position().left&&b.css("margin-left",t+"px")}catch(e){}}function re(){C.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){G-=be(this).outerWidth()}),O.width(G+"px"),X=0}function ae(e,t,o,s){var i,n="before",r="after";"os"==t&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==n?r=t:t==r&&(n=t,i=o,o=s,s=i),e[n](o)[r](s)}function le(e,t,o){return function(){return function(e,t,o,s){o=be(o).addClass("jspActive");var i,n,r=!0,a=function(){0!==e&&_.scrollByX(e*y.arrowButtonSpeed),0!==t&&_.scrollByY(t*y.arrowButtonSpeed),n=setTimeout(a,r?y.initialDelay:y.arrowRepeatFreq),r=!1};a(),i=s?"mouseout.jsp":"mouseup.jsp",(s=s||be("html")).on(i,function(){o.removeClass("jspActive"),n&&clearTimeout(n),n=null,s.off(i)})}(e,t,this,o),this.blur(),!1}}function ce(){O&&O.off("mousedown.jsp"),R&&R.off("mousedown.jsp")}function pe(){be("html").off("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),z&&z.removeClass("jspActive"),Y&&Y.removeClass("jspActive")}function ue(e,t){if(H){e<0?e=0:A<e&&(e=A);var o=new be.Event("jsp-will-scroll-y");if(w.trigger(o,[e]),!o.isDefaultPrevented()){var s=e||0,i=0===s,n=s==A,r=-(e/A)*(x-T);void 0===t&&(t=y.animateScroll),t?_.animate(z,"top",e,de,function(){w.trigger("jsp-user-scroll-y",[-r,i,n])}):(z.css("top",e),de(e),w.trigger("jsp-user-scroll-y",[-r,i,n]))}}}function de(e){void 0===e&&(e=z.position().top),C.scrollTop(0);var t,o,s=0===(W=e||0),i=W==A,n=-(e/A)*(x-T);r==s&&l==i||(r=s,l=i,w.trigger("jsp-arrow-change",[r,l,a,c])),t=s,o=i,y.showArrows&&(F[t?"addClass":"removeClass"]("jspDisabled"),V[o?"addClass":"removeClass"]("jspDisabled")),b.css("top",n),w.trigger("jsp-scroll-y",[-n,s,i]).trigger("scroll")}function fe(e,t){if(P){e<0?e=0:M<e&&(e=M);var o=new be.Event("jsp-will-scroll-x");if(w.trigger(o,[e]),!o.isDefaultPrevented()){var s=e||0,i=0===s,n=s==M,r=-(e/M)*(S-k);void 0===t&&(t=y.animateScroll),t?_.animate(Y,"left",e,he,function(){w.trigger("jsp-user-scroll-x",[-r,i,n])}):(Y.css("left",e),he(e),w.trigger("jsp-user-scroll-x",[-r,i,n]))}}}function he(e){void 0===e&&(e=Y.position().left),C.scrollTop(0);var t,o,s=0===(X=e||0),i=X==M,n=-(e/M)*(S-k);a==s&&c==i||(a=s,c=i,w.trigger("jsp-arrow-change",[r,l,a,c])),t=s,o=i,y.showArrows&&(K[t?"addClass":"removeClass"]("jspDisabled"),Q[o?"addClass":"removeClass"]("jspDisabled")),b.css("left",n),w.trigger("jsp-scroll-x",[-n,s,i]).trigger("scroll")}function ge(e,t){ue(e/(x-T)*A,t)}function je(e,t){fe(e/(S-k)*M,t)}function ve(e,t,o){var s,i,n,r,a,l,c,p,u,d=0,f=0;try{s=be(e)}catch(e){return}for(i=s.outerHeight(),n=s.outerWidth(),C.scrollTop(0),C.scrollLeft(0);!s.is(".jspPane");)if(d+=s.position().top,f+=s.position().left,s=s.offsetParent(),/^body|html$/i.test(s[0].nodeName))return;l=(r=we())+T,d<r||t?p=d-y.horizontalGutter:l<d+i&&(p=d-T+i+y.horizontalGutter),isNaN(p)||ge(p,o),c=(a=me())+k,f<a||t?u=f-y.horizontalGutter:c<f+n&&(u=f-k+n+y.horizontalGutter),isNaN(u)||je(u,o)}function me(){return-b.position().left}function we(){return-b.position().top}function ye(){return!1}"border-box"===w.css("box-sizing")?J=$=0:($=w.css("paddingTop")+" "+w.css("paddingRight")+" "+w.css("paddingBottom")+" "+w.css("paddingLeft"),J=(parseInt(w.css("paddingLeft"),10)||0)+(parseInt(w.css("paddingRight"),10)||0)),be.extend(_,{reinitialise:function(e){se(e=be.extend({},y,e))},scrollToElement:function(e,t,o){ve(e,t,o)},scrollTo:function(e,t,o){je(e,o),ge(t,o)},scrollToX:function(e,t){je(e,t)},scrollToY:function(e,t){ge(e,t)},scrollToPercentX:function(e,t){je(e*(S-k),t)},scrollToPercentY:function(e,t){ge(e*(x-T),t)},scrollBy:function(e,t,o){_.scrollByX(e,o),_.scrollByY(t,o)},scrollByX:function(e,t){fe((me()+Math[e<0?"floor":"ceil"](e))/(S-k)*M,t)},scrollByY:function(e,t){ue((we()+Math[e<0?"floor":"ceil"](e))/(x-T)*A,t)},positionDragX:function(e,t){fe(e,t)},positionDragY:function(e,t){ue(e,t)},animate:function(e,t,o,s,i){var n={};n[t]=o,e.animate(n,{duration:y.animateDuration,easing:y.animateEase,queue:!1,step:s,complete:i})},getContentPositionX:function(){return me()},getContentPositionY:function(){return we()},getContentWidth:function(){return S},getContentHeight:function(){return x},getPercentScrolledX:function(){return me()/(S-k)},getPercentScrolledY:function(){return we()/(x-T)},getIsScrollableH:function(){return P},getIsScrollableV:function(){return H},getContentPane:function(){return b},scrollToBottom:function(e){ue(A,e)},hijackInternalLinks:be.noop,destroy:function(){var e,t;e=we(),t=me(),w.removeClass("jspScrollable").off(".jsp"),b.off(".jsp"),w.replaceWith(o.append(b.children())),o.scrollTop(e),o.scrollLeft(t),U&&clearInterval(U)}}),se(e)}return o=be.extend({},be.fn.jScrollPane.defaults,o),be.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){o[this]=o[this]||o.speed}),this.each(function(){var e=be(this),t=e.data("jsp");t?t.reinitialise(o):(be("script",e).filter('[type="text/javascript"],:not([type])').remove(),t=new s(e,o),e.data("jsp",t))})},be.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8,alwaysShowVScroll:!1,alwaysShowHScroll:!1,resizeSensor:!1,resizeSensorDelay:0}});

/* rating */
;(function($){
    $.fn.rating = function(callback){
        
        callback = callback || function(){};

        this.each(function(i, v){
           $(v).bind('init.rating', $.fn.rating.init)
            .bind('hover.rating', $.fn.rating.hover)
            .bind('set.rating', $.fn.rating.set)
            .bind('toggle.rating', $.fn.rating.toggle)
            .trigger('init.rating');
        });
    };
    
    $.extend($.fn.rating, {
      init: function(e){
         var el = $(this),
             elRate = Math.abs(el.data('rate')), 
             list = '',
             fillVis = '',
             blankVis = '',
             i = 1;
        
         for (; i < 6; i++) {
           fillVis = (i <= elRate) ? '' : 'display:none';
           blankVis = (i <= elRate) ? 'display:none' : '';
           list = list + "<div class='starWrap'><svg role='img' class='starFill' style='"+fillVis+"'><use xlink:href='icons.svg#starfill'></use></svg><svg role='img' class='starBlank' style='"+blankVis+"'><use xlink:href='icons.svg#star'></use></svg></div>";
         } 
         el.append('<div class="stars rate_'+elRate+'">' + list + '</div>');
         $('.starWrap', el).bind('click', $.fn.rating.click);            
         el.trigger('hover.rating');         
      },  
      
      toggle: function(e){
        var el = $(this);
        
          $('.starWrap.tmp_es', el).each(function(){
            $(this).find('.starFill').hide();
            $(this).find('.starBlank').show();
          });
          
          $('.starWrap.tmp_fs', el).each(function(){
            $(this).find('.starBlank').hide();
            $(this).find('.starFill').show();
          });  
          
          if(0 == $('.starWrap.tmp_es, .starWrap.tmp_fs', el).length) el.trigger('set.rating'); 
      },
      
      set: function(e) {
        var el = $(this),
            keepRate = Math.abs(el.data('rate'));

        el.find('stars').removeClass().addClass('stars rate_' + el.data('rate'));
        el.find('.starFill').hide();
        el.find('.starBlank').show();
        for (var i = 0; i < keepRate; i++) {
          el.find('.starWrap').eq(i).find('.starBlank').hide();
          el.find('.starWrap').eq(i).find('.starFill').show();
        }
      },
      
      hover: function(e) {
        var el = $(this),
            stars = $('.starWrap', el),
            tmp = 0; 
            stars.bind('mouseenter', function(e){
                var box = $(this).parent();
                $(this)
                    .addClass('tmp_fs')
                    .prevAll()
                    .addClass('tmp_fs');
                
                $(this).nextAll()
                    .addClass('tmp_es');
                
                $(this).find('.starBlank').hide();    
                $(this).find('.starFill').show();   
                tmp =  box.find('.tmp_fs').length;
                box.removeClass().addClass('stars rate_' + tmp );    
                el.trigger('toggle.rating');
            });
            
            stars.bind('mouseleave', function(e){
                var box = $(this).parent();
                var keepRate = Math.abs($(this).closest('.rating').data('rate'));
                $(this)
                    .removeClass('tmp_fs')
                    .prevAll()
                    .removeClass('tmp_fs');
                
                $(this).nextAll()
                    .removeClass('tmp_es');
                
                box.removeClass().addClass('stars rate_' + keepRate );
                el.trigger('toggle.rating');
            });        
      },
      
      click: function(e){
        e.preventDefault();
        var el = $(this),
            fs = $(this).parent().find('.tmp_fs').length;
            
        $(this).parent().removeClass().addClass('stars rate_' + fs);
        $(this).closest('.rating').data('rate', fs);
        el.trigger('set.rating');
      }
      
    });  
    
})(jQuery);

    

/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(u){var f,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in window.document||9<=window.document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],w=Array.prototype.slice;if(u.event.fixHooks)for(var i=e.length;i;)u.event.fixHooks[e[--i]]=u.event.mouseHooks;var c=u.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],n,!1);else this.onmousewheel=n;u.data(this,"mousewheel-line-height",c.getLineHeight(this)),u.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],n,!1);else this.onmousewheel=null;u.removeData(this,"mousewheel-line-height"),u.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=u(e),i=t["offsetParent"in u.fn?"offsetParent":"parent"]();return i.length||(i=u("body")),parseInt(i.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return u(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function n(e){var t,i=e||window.event,n=w.call(arguments,1),o=0,l=0,s=0;if((e=u.event.fix(i)).type="mousewheel","detail"in i&&(s=-1*i.detail),"wheelDelta"in i&&(s=i.wheelDelta),"wheelDeltaY"in i&&(s=i.wheelDeltaY),"wheelDeltaX"in i&&(l=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(l=-1*s,s=0),o=0===s?l:s,"deltaY"in i&&(o=s=-1*i.deltaY),"deltaX"in i&&(l=i.deltaX,0===s&&(o=-1*l)),0!==s||0!==l){if(1===i.deltaMode){var a=u.data(this,"mousewheel-line-height");o*=a,s*=a,l*=a}else if(2===i.deltaMode){var h=u.data(this,"mousewheel-page-height");o*=h,s*=h,l*=h}if(t=Math.max(Math.abs(s),Math.abs(l)),(!d||t<d)&&g(i,d=t)&&(d/=40),g(i,t)&&(o/=40,l/=40,s/=40),o=Math[1<=o?"floor":"ceil"](o/d),l=Math[1<=l?"floor":"ceil"](l/d),s=Math[1<=s?"floor":"ceil"](s/d),c.settings.normalizeOffset&&this.getBoundingClientRect){var r=this.getBoundingClientRect();e.offsetX=e.clientX-r.left,e.offsetY=e.clientY-r.top}return e.deltaX=l,e.deltaY=s,e.deltaFactor=d,e.deltaMode=0,n.unshift(e,o,l,s),f&&window.clearTimeout(f),f=window.setTimeout(m,200),(u.event.dispatch||u.event.handle).apply(this,n)}}function m(){d=null}function g(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}u.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})});

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

;
var mkStar = function(){
  var sRate = 0;
  var sStr = '';  
    $('.stars:empty').each(function(n){
      sRate = Math.abs( $(this).data('rate') );
      for (var i = 1; i < 6; i++) {
        sStr = (i <= sRate) ? "<svg role='img'><use xlink:href='icons.svg#starfill'></use></svg>" : "<svg role='img'><use xlink:href='icons.svg#star'></use></svg>";
        // этот набор svg можно формировать на сервере, но мне лениво было их в html писать, 
        // а так "сами создаются", согласно data-rate
        $(this).append(sStr).addClass('rate_'+sRate);
      }  
    })  
} 

var attachName = function(str, item){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    jQuery(item).closest('.input-file').find('em').eq(0).text(filename);  
}


jQuery(function ($) {
   'use strict';
    $(document).on('click', 'a[href^="#"]', function(event){
       event.preventDefault();
       return false;
    });

    $(document).on('click', '.show-more', function(){
      $(this).closest('div').find(':hidden').eq(0).show();
      if(0 == $(this).closest('div').find(':hidden').length) {
        $(this).hide();
      }
    });  
    
    $(document).on('click', '.clients-list footer', function(){ // типо пример подгрузки "ещё соискателей"
      $.ajax({
        url: 'aka-servreside.inc',
        dataType: 'json',
        success: function(result) {              
          $($(result.data)).insertBefore( $('.clients-list footer') );
          mkStar();
        }
      });        
    });
    
    $(document).on('click', '.show-form, .add-form-close', function(){
      $('.add-form-box').toggleClass('expand');
      $('.form-overlay').toggleClass('expand');
    });  
    
    $(document).on('click', '#add-form [type="reset"]', function(){
      $('.add-form-box').removeClass('expand');
      $('.form-overlay').removeClass('expand');
    });    
    
    $(document).on('click', '.add-input', function(){
      $( $(this).prev().clone() ).insertBefore($(this));
      $('input.tel, input[type="tel"], input.phone').mask('+9 (999) 999-99-99');
    });     
    
    $('.scroll-area').jScrollPane({ 
      autoReinitialise: true,
      horizontalDragMinWidth: 30,
      horizontalDragMaxWidth: 10,
      contentWidth: '100%',
      showArrows: false,
      resizeSensor: true
    });    
    
});

$(document).ready( function() {
  
  if( $('.stars').length ) {
    mkStar();
  }
  
  $('input.tel, input[type="tel"], input.phone').mask('+9 (999) 999-99-99');
  
  $('.ratings-row .rating').rating();
  
});  

    