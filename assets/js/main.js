!function(e){function d(t){t=t.split(")");for(var s,i,r,f,d,p,v,m,y,a=e.trim,n=t.length-1,o=1,c=0,l=0,u=1,g=0,k=0;n--;){switch(s=t[n].split("("),i=a(s[0]),r=s[1],f=d=p=v=0,i){case"translateX":g+=parseInt(r,10);continue;case"translateY":k+=parseInt(r,10);continue;case"translate":r=r.split(","),g+=parseInt(r[0],10),k+=parseInt(r[1]||0,10);continue;case"rotate":r=h(r),f=Math.cos(r),d=Math.sin(r),p=-Math.sin(r),v=Math.cos(r);break;case"scaleX":f=r,v=1;break;case"scaleY":f=1,v=r;break;case"scale":r=r.split(","),f=r[0],v=r.length>1?r[1]:r[0];break;case"skewX":f=v=1,p=Math.tan(h(r));break;case"skewY":f=v=1,d=Math.tan(h(r));break;case"skew":f=v=1,r=r.split(","),p=Math.tan(h(r[0])),d=Math.tan(h(r[1]||0));break;case"matrix":r=r.split(","),f=+r[0],d=+r[1],p=+r[2],v=+r[3],g+=parseInt(r[4],10),k+=parseInt(r[5],10)}m=o*f+c*p,c=o*d+c*v,y=l*f+u*p,u=l*d+u*v,o=m,l=y}return[o,c,l,u,g,k]}function p(e){var t,a,n,s=e[0],i=e[1],r=e[2],o=e[3];return s*o-i*r?(t=Math.sqrt(s*s+i*i),s/=t,i/=t,n=s*r+i*o,r-=s*n,o-=i*n,a=Math.sqrt(r*r+o*o),r/=a,o/=a,n/=a,i*r>s*o&&(s=-s,i=-i,n=-n,t=-t)):rotate=t=a=n=0,{translate:[+e[4],+e[5]],rotate:Math.atan2(i,s),scale:[t,a],skew:[n,0]}}function v(t){t=t.split(")");for(var c,l,u,a=[0,0],n=0,s=[1,1],i=[0,0],r=t.length-1,o=e.trim;r--;)c=t[r].split("("),l=o(c[0]),u=c[1],"translateX"==l?a[0]+=parseInt(u,10):"translateY"==l?a[1]+=parseInt(u,10):"translate"==l?(u=u.split(","),a[0]+=parseInt(u[0],10),a[1]+=parseInt(u[1]||0,10)):"rotate"==l?n+=h(u):"scaleX"==l?s[0]*=u:"scaleY"==l?s[1]*=u:"scale"==l?(u=u.split(","),s[0]*=u[0],s[1]*=u.length>1?u[1]:u[0]):"skewX"==l?i[0]+=h(u):"skewY"==l?i[1]+=h(u):"skew"==l&&(u=u.split(","),i[0]+=h(u[0]),i[1]+=h(u[1]||"0"));return{translate:a,rotate:n,scale:s,skew:i}}function h(e){return~e.indexOf("deg")?parseInt(e,10)*(2*Math.PI/360):~e.indexOf("grad")?parseInt(e,10)*(Math.PI/200):parseFloat(e)}function m(e){return e=/\(([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(e),[e[1],e[2],e[3],e[4],e[5],e[6]]}for(var o,c,l,u,t=document.createElement("div"),a=t.style,n="transform",s="Transform",i=["O"+s,"ms"+s,"Webkit"+s,"Moz"+s,n],r=i.length,f=/Matrix([^)]*)/;r--;)i[r]in a&&(e.support[n]=o=i[r]);o||(e.support.matrixFilter=c=""===a.filter),t=a=null,e.cssNumber[n]=!0,o&&o!=n?(e.cssProps[n]=o,o=="Moz"+s?l={get:function(t,a){return a?e.css(t,o).split("px").join(""):t.style[o]},set:function(e,t){e.style[o]=/matrix[^)p]*\)/.test(t)?t.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,"matrix$1$2px,$3px"):t}}:/^1\.[0-5](?:\.|$)/.test(e.fn.jquery)&&(l={get:function(t,a){return a?e.css(t,o.replace(/^ms/,"Ms")):t.style[o]}})):c&&(l={get:function(e,t){var n,a=t&&e.currentStyle?e.currentStyle:e.style;return a&&f.test(a.filter)?(n=RegExp.$1.split(","),n=[n[0].split("=")[1],n[2].split("=")[1],n[1].split("=")[1],n[3].split("=")[1]]):n=[1,0,0,1],n[4]=a?a.left:0,n[5]=a?a.top:0,"matrix("+n+")"},set:function(t,a,n){var i,r,o,s=t.style;n||(s.zoom=1),a=d(a),(!n||n.M)&&(r=["Matrix(M11="+a[0],"M12="+a[2],"M21="+a[1],"M22="+a[3],"SizingMethod='auto expand'"].join(),o=(i=t.currentStyle)&&i.filter||s.filter||"",s.filter=f.test(o)?o.replace(f,r):o+" progid:DXImageTransform.Microsoft."+r+")",(centerOrigin=e.transform.centerOrigin)&&(s["margin"==centerOrigin?"marginLeft":"left"]=-(t.offsetWidth/2)+t.clientWidth/2+"px",s["margin"==centerOrigin?"marginTop":"top"]=-(t.offsetHeight/2)+t.clientHeight/2+"px")),(!n||n.T)&&(s.left=a[4]+"px",s.top=a[5]+"px")}}),l&&(e.cssHooks[n]=l),u=l&&l.get||e.css,e.fx.step.transform=function(e){var s,r,f,h,y,g,P,t=e.elem,a=e.start,n=e.end,i=e.pos,k=!1,w=!1;if(f=h=y=g="",!a||"string"==typeof a){a||(a=u(t,o)),c&&(t.style.zoom=1),s=n.split(a),2==s.length&&(n=s.join(""),e.origin=a,a="none"),e.start=a="none"==a?{translate:[0,0],rotate:0,scale:[1,1],skew:[0,0]}:p(m(a)),e.end=n=~n.indexOf("matrix")?p(d(n)):v(n);for(P in a)("rotate"==P?a[P]==n[P]:a[P][0]==n[P][0]&&a[P][1]==n[P][1])&&delete a[P]}a.translate&&(f=" translate("+(a.translate[0]+(n.translate[0]-a.translate[0])*i+.5|0)+"px,"+(a.translate[1]+(n.translate[1]-a.translate[1])*i+.5|0)+"px)",k=!0),void 0!=a.rotate&&(h=" rotate("+(a.rotate+(n.rotate-a.rotate)*i)+"rad)",w=!0),a.scale&&(y=" scale("+(a.scale[0]+(n.scale[0]-a.scale[0])*i)+","+(a.scale[1]+(n.scale[1]-a.scale[1])*i)+")",w=!0),a.skew&&(g=" skew("+(a.skew[0]+(n.skew[0]-a.skew[0])*i)+"rad,"+(a.skew[1]+(n.skew[1]-a.skew[1])*i)+"rad)",w=!0),r=e.origin?e.origin+f+g+y+h:f+h+y+g,l&&l.set?l.set(t,r,{M:w,T:k}):t.style[o]=r},e.transform={centerOrigin:"margin"}}(jQuery);
!function(e){e.fn.knobKnob=function(n){var a=e.extend({snap:0,value:0,turn:function(){}},n||{}),t='<div class="knob">				<div class="top"></div>				<div class="base"></div>			</div>';return this.each(function(){var n=e(this);n.append(t);var i=e(".knob",n),s=i.find(".top"),r=-1,o=0,c=0,l=0,u=e(document);a.value>0&&a.value<=359&&(c=l=o=a.value,s.css("transform","rotate("+o+"deg)"),a.turn(o/359)),i.on("mousedown touchstart",function(e){e.preventDefault();var d,f,p,v,n=i.offset(),t={y:n.top+i.height()/2,x:n.left+i.width()/2},y=180/Math.PI;i.on("mousemove.rem touchmove.rem",function(e){return e=e.originalEvent.touches?e.originalEvent.touches[0]:e,d=t.y-e.pageY,f=t.x-e.pageX,p=Math.atan2(d,f)*y,0>p&&(p=360+p),-1==r&&(r=p),v=Math.floor(p-r+c),0>v?v=360+v:v>359&&(v%=360),a.snap&&v<a.snap&&(v=0),Math.abs(v-l)>180?!1:(o=v,l=v,s.css("transform","rotate("+o+"deg)"),void a.turn(o/360))}),u.on("mouseup.rem  touchend.rem",function(){i.off(".rem"),u.off(".rem"),c=o,r=-1})})})}}(jQuery);
!function(){var e=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent);window.soundcloud={version:"0.1",debug:!1,_listeners:[],_redispatch:function(e,t,n){var a,i=this._listeners[e]||[],s="soundcloud:"+e;try{a=this.getPlayer(t)}catch(r){return void(this.debug&&window.console&&console.error("unable to dispatch widget event "+e+" for the widget id "+t,n,r))}window.jQuery?jQuery(a).trigger(s,[n]):window.Prototype&&$(a).fire(s,n);for(var o=0,c=i.length;c>o;o+=1)i[o].apply(a,[a,n]);this.debug&&window.console&&console.log(s,e,t,n)},addEventListener:function(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)},removeEventListener:function(e,t){for(var n=this._listeners[e]||[],a=0,i=n.length;i>a;a+=1)n[a]===t&&n.splice(a,1)},getPlayer:function(t){var n;try{if(!t)throw"The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";if(n=e?window[t]:document[t]){if(n.api_getFlashId)return n;throw"The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code"}throw"The SoundCloud Widget with an id "+t+" couldn't be found"}catch(a){throw console&&console.error&&console.error(a),a}},onPlayerReady:function(e,t){this._redispatch("onPlayerReady",e,t)},onMediaStart:function(e,t){this._redispatch("onMediaStart",e,t)},onMediaEnd:function(e,t){this._redispatch("onMediaEnd",e,t)},onMediaPlay:function(e,t){this._redispatch("onMediaPlay",e,t)},onMediaPause:function(e,t){this._redispatch("onMediaPause",e,t)},onMediaBuffering:function(e,t){this._redispatch("onMediaBuffering",e,t)},onMediaSeek:function(e,t){this._redispatch("onMediaSeek",e,t)},onMediaDoneBuffering:function(e,t){this._redispatch("onMediaDoneBuffering",e,t)},onPlayerError:function(e,t){this._redispatch("onPlayerError",e,t)}}}();
!function(e){var d,y,L,a=function(e){var a=function(e){return{h:Math.floor(e/36e5),m:Math.floor(e/6e4%60),s:Math.floor(e/1e3%60)}}(e),n=[];return a.h>0&&n.push(a.h),n.push(a.m<10&&a.h>0?"0"+a.m:a.m),n.push(a.s<10?"0"+a.s:a.s),n.join(".")},n=function(e){return e.sort(function(){return 1-Math.floor(3*Math.random())}),e},t=!0,i=!1,s=e(document),r=function(e){try{t&&window.console&&window.console.log&&window.console.log.apply(window.console,arguments)}catch(a){}},o=i?"sandbox-soundcloud.com":"soundcloud.com",c="https:"===document.location.protocol,l=function(e,a){var n=(c||/^https/i.test(e)?"https":"http")+"://api."+o+"/resolve?url=",t="format=json&consumer_key="+a+"&callback=?";return c&&(e=e.replace(/^http:/,"https:")),/api\./.test(e)?e+"?"+t:n+e+"&"+t},u=function(){var a=function(){var e=!1;try{var a=new Audio;e=a.canPlayType&&/maybe|probably/.test(a.canPlayType("audio/mpeg"))}catch(n){}return e}(),n={onReady:function(){s.trigger("scPlayer:onAudioReady")},onPlay:function(){s.trigger("scPlayer:onMediaPlay")},onPause:function(){s.trigger("scPlayer:onMediaPause")},onEnd:function(){s.trigger("scPlayer:onMediaEnd")},onBuffer:function(e){s.trigger({type:"scPlayer:onMediaBuffering",percent:e})}},t=function(){var a=new Audio,t=function(e){var a=e.target,t=(a.buffered.length&&a.buffered.end(0))/a.duration*100;n.onBuffer(t),a.currentTime===a.duration&&n.onEnd()},i=function(e){var a=e.target,t=(a.buffered.length&&a.buffered.end(0))/a.duration*100;n.onBuffer(t)};return e('<div class="sc-player-engine-container"></div>').appendTo(document.body).append(a),a.addEventListener("play",n.onPlay,!1),a.addEventListener("pause",n.onPause,!1),a.addEventListener("timeupdate",t,!1),a.addEventListener("progress",i,!1),{load:function(e,n){a.pause(),a.src=e.stream_url+(/\?/.test(e.stream_url)?"&":"?")+"consumer_key="+n,a.load(),a.play()},play:function(){a.play()},pause:function(){a.pause()},stop:function(){a.currentTime&&(a.currentTime=0,a.pause())},seek:function(e){a.currentTime=a.duration*e,a.play()},getDuration:function(){return 1e3*a.duration},getPosition:function(){return 1e3*a.currentTime},setVolume:function(e){a.volume=e/100}}},i=function(){var t,a="scPlayerEngine",i=function(n){var t=(c?"https":"http")+"://player."+o+"/player.swf?url="+n+"&amp;enable_api=true&amp;player_type=engine&amp;object_id="+a;return e.browser.msie?'<object height="100%" width="100%" id="'+a+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="'+t+'"><param name="movie" value="'+t+'" /><param name="allowscriptaccess" value="always" /></object>':'<object height="100%" width="100%" id="'+a+'"><embed allowscriptaccess="always" height="100%" width="100%" src="'+t+'" type="application/x-shockwave-flash" name="'+a+'" /></object>'};return soundcloud.addEventListener("onPlayerReady",function(e,i){t=soundcloud.getPlayer(a),n.onReady()}),soundcloud.addEventListener("onMediaEnd",n.onEnd),soundcloud.addEventListener("onMediaBuffering",function(e,a){n.onBuffer(a.percent)}),soundcloud.addEventListener("onMediaPlay",n.onPlay),soundcloud.addEventListener("onMediaPause",n.onPause),{load:function(a){var n=a.uri;t?t.api_load(n):e('<div class="sc-player-engine-container"></div>').appendTo(document.body).html(i(n))},play:function(){t&&t.api_play()},pause:function(){t&&t.api_pause()},stop:function(){t&&t.api_stop()},seek:function(e){t&&t.api_seekTo(t.api_getTrackDuration()*e)},getDuration:function(){return t&&t.api_getTrackDuration&&1e3*t.api_getTrackDuration()},getPosition:function(){return t&&t.api_getTrackPosition&&1e3*t.api_getTrackPosition()},setVolume:function(e){t&&t.api_setVolume&&t.api_setVolume(e)}}};return a?t():i()}(),f=!1,p=[],v={},h=function(a,n,t){var i=0,s={node:a,tracks:[]},r=function(a){var t=l(a.url,d);e.getJSON(t,function(o){i+=1,o.tracks?s.tracks=s.tracks.concat(o.tracks):o.duration?(o.permalink_url=a.url,s.tracks.push(o)):o.creator?n.push({url:o.uri+"/tracks"}):o.username?/favorites/.test(a.url)?n.push({url:o.uri+"/favorites"}):n.push({url:o.uri+"/tracks"}):e.isArray(o)&&(s.tracks=s.tracks.concat(o)),n[i]?r(n[i]):s.node.trigger({type:"onTrackDataLoaded",playerObj:s,url:t})})};d=t,p.push(s),r(n[i])},m=function(e,a){return a?'<div class="sc-loading-artwork">Loading Artwork</div>':e.artwork_url?'<img src="'+e.artwork_url.replace("-large","-t300x300")+'"/>':'<div class="sc-no-artwork">No Artwork</div>'},g=function(n,t){e(".sc-info",n).each(function(a){e("h3",this).html('<a href="'+t.permalink_url+'">'+t.title+"</a>"),e("h4",this).html('by <a href="'+t.user.permalink_url+'">'+t.user.username+"</a>"),e("p",this).html(t.description||"no Description")}),e(".sc-artwork-list li",n).each(function(a){var n=e(this),i=n.data("sc-track");i===t?n.addClass("active").find(".sc-loading-artwork").each(function(a){e(this).removeClass("sc-loading-artwork").html(m(t,!1))}):n.removeClass("active")}),e(".sc-duration",n).html(a(t.duration)),e(".sc-waveform-container",n).html('<img src="'+t.waveform_url+'" />'),n.trigger("onPlayerTrackSwitch.scPlayer",[t])},k=function(e){var a=e.permalink_url;y===a?u.play():(y=a,u.load(e,d))},P=function(a){return p[e(a).data("sc-player").id]},w=function(a,n){n&&e("div.sc-player.playing").removeClass("playing"),e(a).toggleClass("playing",n).trigger(n?"onPlayerPlay":"onPlayerPause")},b=function(a,n){var t=P(a).tracks[n||0];g(a,t),v={$buffer:e(".sc-buffer",a),$played:e(".sc-played",a),position:e(".sc-position",a)[0]},w(a,!0),k(t)},T=function(e){w(e,!1),u.pause()},_=function(){var e=v.$played.closest(".sc-player");v.$played.css("width","0%"),v.position.innerHTML=a(0),w(e,!1),u.stop(),e.trigger("onPlayerTrackFinish")},M=function(a,n){u.seek(n),e(a).trigger("onPlayerSeek"),w(a,!0)},C=function(a){var n=e(a);r("track finished get the next one"),$nextItem=e(".sc-trackslist li.active",n).next("li"),$nextItem.length||($nextItem=n.nextAll("div.sc-player:first").find(".sc-trackslist li.active")),$nextItem.click()},E=function(){var e=80,a=document.cookie.split(";"),n=new RegExp("scPlayer_volume=(\\d+)");for(var t in a)if(n.test(a[t])){e=parseInt(a[t].match(n)[1],10);break}return e}(),D=function(e){var a=Math.floor(e),n=new Date;n.setTime(n.getTime()+31536e6),E=a,document.cookie=["scPlayer_volume=",a,"; expires=",n.toUTCString(),'; path="/"'].join(""),u.setVolume(E)};s.bind("scPlayer:onAudioReady",function(e){r("onPlayerReady: audio engine is ready"),u.play(),D(E)}).bind("scPlayer:onMediaPlay",function(e){clearInterval(L),L=setInterval(function(){var e=u.getDuration(),n=u.getPosition(),t=n/e;v.$played.css("width",100*t+"%"),v.position.innerHTML=a(n),s.trigger({type:"onMediaTimeUpdate.scPlayer",duration:e,position:n,relative:t})},500)}).bind("scPlayer:onMediaPause",function(e){clearInterval(L),L=null}).bind("scPlayer:onVolumeChange",function(e){D(e.volume)}).bind("scPlayer:onMediaEnd",function(e){_()}).bind("scPlayer:onMediaBuffering",function(e){v.$buffer.css("width",e.percent+"%")}),e.scPlayer=function(t,i){var s=e.extend({},e.scPlayer.defaults,t),r=p.length,o=i&&e(i),c=o[0].className.replace("sc-player",""),l=s.links||e.map(e("a",o).add(o.filter("a")),function(e){return{url:e.href,title:e.innerHTML}}),u=e('<div class="sc-player loading"></div>').data("sc-player",{id:r}),d=e('<ol class="sc-artwork-list"></ol>').appendTo(u),k=(e('<div class="sc-info"><h3></h3><h4></h4><p></p><a href="#" class="sc-info-close">X</a></div>').appendTo(u),e('<div class="sc-controls"></div>').appendTo(u),e('<ol class="sc-trackslist"></ol>').appendTo(u));return(c||s.customClass)&&u.addClass(c).addClass(s.customClass),u.find(".sc-controls").append('<a href="#play" class="sc-play">Play</a> <a href="#pause" class="sc-pause hidden">Pause</a>').end().append('<a href="#info" class="sc-info-toggle">Info</a>').append('<div class="sc-scrubber"></div>').find(".sc-scrubber").append('<div class="sc-volume-slider"><span class="sc-volume-status" style="width:'+E+'%"></span></div>').append('<div class="sc-time-span"><div class="sc-waveform-container"></div><div class="sc-buffer"></div><div class="sc-played"></div></div>').append('<div class="sc-time-indicators"><span class="sc-position"></span> | <span class="sc-duration"></span></div>'),h(u,l,s.apiKey),u.bind("onTrackDataLoaded.scPlayer",function(t){var i=t.playerObj.tracks;s.randomize&&(i=n(i)),e.each(i,function(n,t){var i=0===n;e('<li><a href="'+t.permalink_url+'">'+t.title+'</a><span class="sc-track-duration">'+a(t.duration)+"</span></li>").data("sc-track",{id:n}).toggleClass("active",i).appendTo(k),e("<li></li>").append(m(t,n>=s.loadArtworks)).appendTo(d).toggleClass("active",i).data("sc-track",t)}),u.each(function(){e.isFunction(s.beforeRender)&&s.beforeRender.call(this,i)}),e(".sc-duration",u)[0].innerHTML=a(i[0].duration),e(".sc-position",u)[0].innerHTML=a(0),g(u,i[0]),s.continuePlayback&&u.bind("onPlayerTrackFinish",function(e){C(u)}),u.removeClass("loading").trigger("onPlayerInit"),s.autoPlay&&!f&&(b(u),f=!0)}),o.each(function(a){e(this).replaceWith(u)}),u},e.scPlayer.stopAll=function(){e(".sc-player.playing a.sc-pause").click()},e.scPlayer.destroy=function(){e(".sc-player, .sc-player-engine-container").remove()},e.fn.scPlayer=function(a){return f=!1,this.each(function(){e.scPlayer(a,this)}),this},e.scPlayer.defaults=e.fn.scPlayer.defaults={customClass:null,beforeRender:function(a){e(this)},onDomReady:function(){e("a.sc-player, div.sc-player").scPlayer()},autoPlay:!1,continuePlayback:!0,randomize:!1,loadArtworks:5,apiKey:"htuiRd1JP11Ww0X72T1C3g"},e(document).on("click","a.sc-play, a.sc-pause",function(a){var n=e(this).closest(".sc-player").find("ol.sc-trackslist");return n.find("li.active").click(),!1}),e(document).on("click","a.sc-info-toggle, a.sc-info-close",function(a){var n=e(this);return n.closest(".sc-player").find(".sc-info").toggleClass("active").end().find("a.sc-info-toggle").toggleClass("active"),!1}),e(document).on("click",".sc-trackslist li",function(a){var n=e(this),t=n.closest(".sc-player"),i=n.data("sc-track").id,s=t.is(":not(.playing)")||n.is(":not(.active)");return s?b(t,i):T(t),n.addClass("active").siblings("li").removeClass("active"),e(".artworks li",t).each(function(a){e(this).toggleClass("active",a===i)}),!1});var R=function(a,n){var t=e(a).closest(".sc-time-span"),i=t.find(".sc-buffer"),s=t.find(".sc-waveform-container img"),r=t.closest(".sc-player"),o=Math.min(i.width(),n-s.offset().left)/s.width();M(r,o)},x=function(e){1===e.targetTouches.length&&(R(e.target,e.targetTouches&&e.targetTouches.length&&e.targetTouches[0].clientX),e.preventDefault())};e(document).on("click",".sc-time-span",function(e){return R(this,e.pageX),!1}).on("touchstart",".sc-time-span",function(e){this.addEventListener("touchmove",x,!1),e.originalEvent.preventDefault()}).on("touchend",".sc-time-span",function(e){this.removeEventListener("touchmove",x,!1),e.originalEvent.preventDefault()});var A=function(a,n){var t=e(a),i=t.offset().left,r=t.width(),o=function(e){return Math.floor((e-i)/r*100)},c=function(e){s.trigger({type:"scPlayer:onVolumeChange",volume:o(e.pageX)})};t.bind("mousemove.sc-player",c),c(n)},j=function(a,n){e(a).unbind("mousemove.sc-player")};e(document).on("mousedown",".sc-volume-slider",function(e){A(this,e)}).on("mouseup",".sc-volume-slider",function(e){j(this,e)}),s.bind("scPlayer:onVolumeChange",function(a){e("span.sc-volume-status").css({width:a.volume+"%"})}),e(function(){e.isFunction(e.scPlayer.defaults.onDomReady)&&e.scPlayer.defaults.onDomReady()})}(jQuery);
