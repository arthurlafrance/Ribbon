(this["webpackJsonpgroupchat-wrapped"]=this["webpackJsonpgroupchat-wrapped"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),r=n.n(a),o=n(28),i=n.n(o),c=(n(38),n(5)),u=n(6),l=n(12),h=n(11),d=n(14),f=n(32),j={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 40px 20px",margin:"12px",backgroundColor:"rgba(255, 92, 135, 0.2)",color:"#bdbdbd",outline:"none",transition:"background .1s",fontSize:"calc(5px + 2vmin)",borderRadius:"4px"},v={backgroundColor:"rgba(255, 92, 135, 0.4)"};var b=function(e){var t=Object(f.a)({accept:".json",onDrop:function(t){return e.onFileInput(t)}}),n=t.getRootProps,r=t.getInputProps,o=t.isDragActive,i=Object(a.useMemo)((function(){return Object(d.a)(Object(d.a)({},j),o?v:{})}),[o]);return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",Object(d.a)(Object(d.a)({},n({style:i})),{},{children:[Object(s.jsx)("input",Object(d.a)({},r())),Object(s.jsx)("p",{children:"Drop your message_1.json here, or click to select from your file system"})]}))})},m=n(9),p=n(7);function O(e,t){return Math.abs(t-e)}var g=function(){function e(){Object(c.a)(this,e),this.items={},this.counts={}}return Object(u.a)(e,[{key:"get",value:function(e){return this.items[e]}},{key:"set",value:function(e,t){this.items[e]=t,t in this.counts||(this.counts[t]=0),this.counts[t]+=1}},{key:"hasKey",value:function(e){return e in this.items}},{key:"valueCount",value:function(e){return e in this.counts?this.counts[e]:0}},{key:"getItems",value:function(){return this.items}}]),e}();function y(e){return decodeURIComponent(escape(e))}var k=function(){function e(t){Object(c.a)(this,e),this.scorekeepers=[new D(t),new w(t),new x(t),new S(t),new T(t),new C(t),new A(t),new F(t)]}return Object(u.a)(e,[{key:"update",value:function(e){this.scorekeepers.forEach((function(t){return t.update(e)}))}},{key:"getScores",value:function(){var e,t={},n=Object(p.a)(this.scorekeepers);try{for(n.s();!(e=n.n()).done;){var s=e.value;if(s.valid())for(var a=0,r=Object.entries(s.scores());a<r.length;a++){var o=Object(m.a)(r[a],2),i=o[0],c=o[1];i in t||(t[i]=[]),t[i].push(c)}else console.log("scorekeeper is not valid")}}catch(u){n.e(u)}finally{n.f()}return t}},{key:"assignRoles",value:function(){var e,t=this.getScores(),n={},s=Object(p.a)(this.scorekeepers);try{for(s.s();!(e=s.n()).done;){n[e.value.role()[0]]=1}}catch(O){s.e(O)}finally{s.f()}for(var a=new g,r=new g,o=Object.keys(t).length;o>0;){var i=this.findBestScore(t,n,a),c=Object(m.a)(i,5),u=c[0],l=c[1],h=c[2],d=(c[3],c[4]);if(null!=u)for(var f in a.set(u,l),r.set(u,[h,d]),t[u]){var j=Object(m.a)(f,3),v=j[0],b=j[1];j[2];n[v[0]]-=b}o--}return r.getItems()}},{key:"findBestScore",value:function(e,t,n){for(var s=null,a=null,r=null,o=null,i=null,c=0,u=Object.entries(e);c<u.length;c++){var l=Object(m.a)(u[c],2),h=l[0],d=l[1];if(!n.hasKey(h)){var f,j=Object(p.a)(d);try{for(j.s();!(f=j.n()).done;){var v=Object(m.a)(f.value,3),b=v[0],O=v[1],g=v[2],y=b[0];if(n.valueCount(y)<2){var k=O/t[y];(null==s||k>s)&&(s=k,a=h,r=y,o=b[n.valueCount(y)],i=g)}}}catch(D){j.e(D)}finally{j.f()}}}return[a,r,o,t[r]*s,i]}}]),e}(),D=function(){function e(t){Object(c.a)(this,e),this.wordsSent={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.wordsSent[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalWords=0}return Object(u.a)(e,[{key:"update",value:function(e){var t=e.sender_name;if(t in this.wordsSent&&"content"in e){var n=e.content.split(" ").length;this.wordsSent[t]+=n,this.totalWords+=n}}},{key:"valid",value:function(){return!0}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.wordsSent);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalWords;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The Word Wizard","The Alphabet Apprentice"]}}]),e}(),w=function(){function e(t){Object(c.a)(this,e),this.inverse=new D(t)}return Object(u.a)(e,[{key:"update",value:function(e){this.inverse.update(e)}},{key:"valid",value:function(){return!0}},{key:"scores",value:function(){for(var e=this.inverse.scores(),t=0,n=0,s=Object.entries(e);n<s.length;n++){var a=Object(m.a)(s[n],2),r=(a[0],a[1]);r[0]=this.role(),r[2]=r[1],r[1]=1-r[1],t+=r[1]}for(var o=0,i=Object.values(e);o<i.length;o++){i[o][1]/=t}return e}},{key:"role",value:function(){return["The Stone","The Pebble"]}}]),e}(),x=function(){function e(t){Object(c.a)(this,e),this.photosSent={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.photosSent[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalPhotos=0}return Object(u.a)(e,[{key:"update",value:function(e){var t=e.sender_name;if(t in this.photosSent&&"photos"in e){var n=e.photos.length;this.photosSent[t]+=n,this.totalPhotos+=n}}},{key:"valid",value:function(){return!0}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.photosSent);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalPhotos;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The Photographer","The Amateur Photographer"]}}]),e}(),S=function(){function e(t){Object(c.a)(this,e),this.reactsMade={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.reactsMade[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalReacts=0}return Object(u.a)(e,[{key:"update",value:function(e){if("reactions"in e){var t,n=Object(p.a)(e.reactions);try{for(n.s();!(t=n.n()).done;){var s=t.value.actor;s in this.reactsMade&&(this.reactsMade[s]++,this.totalReacts++)}}catch(a){n.e(a)}finally{n.f()}}}},{key:"valid",value:function(){return this.totalReacts>10}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.reactsMade);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalReacts;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The Reactor","The Encourager"]}}]),e}(),T=function(){function e(t){Object(c.a)(this,e),this.COMMA_WEIGHT=1,this.SEMICOLON_WEIGHT=3,this.punctuationScores={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.punctuationScores[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalPunctuationScore=0}return Object(u.a)(e,[{key:"update",value:function(e){var t=e.sender_name,n=0;if(t in this.punctuationScores&&"content"in e){var s=e.content,a=(s.match(/[A-Za-z],\s/g)||[]).length,r=(s.match(/[A-Za-z];\s/g)||[]).length;n=this.COMMA_WEIGHT*a+this.SEMICOLON_WEIGHT*r,this.punctuationScores[t]+=n,this.totalPunctuationScore+=n}}},{key:"valid",value:function(){return this.totalPunctuationScore>100}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.punctuationScores);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalPunctuationScore;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The English Teacher","The English TA"]}}]),e}(),C=function(){function e(t){Object(c.a)(this,e),this.SWEAR_WEIGHTS={shit:1,bitch:1,"\bass\b":1,cunt:1,fuck:1,motherfuck:1},this.swearScores={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.swearScores[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalSwearScore=0}return Object(u.a)(e,[{key:"update",value:function(e){var t=e.sender_name,n=0;if(t in this.swearScores&&"content"in e){var s=e.content;for(var a in this.SWEAR_WEIGHTS){var r=new RegExp("".concat(a),"gi"),o=(s.match(r)||[]).length;n+=this.SWEAR_WEIGHTS[a]*o}this.swearScores[t]+=n,this.totalSwearScore+=n}}},{key:"valid",value:function(){return this.totalSwearScore>10}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.swearScores);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalSwearScore;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The Sailor","The First Mate"]}}]),e}(),A=function(){function e(t){Object(c.a)(this,e),this.emojiAmounts={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.emojiAmounts[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalEmojiAmount=0}return Object(u.a)(e,[{key:"update",value:function(e){var t=e.sender_name,n=0;if(t in this.emojiAmounts&&"content"in e){var s=e.content;n=(y(s).match(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g)||[]).length,this.emojiAmounts[t]+=n,this.totalEmojiAmount+=n}}},{key:"valid",value:function(){return this.totalEmojiAmount>5}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.emojiAmounts);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalEmojiAmount;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The Emoji Spammer","The Emoji Poweruser"]}}]),e}(),F=function(){function e(t){Object(c.a)(this,e),this.nameAmounts={};var n,s=Object(p.a)(t);try{for(s.s();!(n=s.n()).done;){var a=n.value;this.nameAmounts[a]=0}}catch(r){s.e(r)}finally{s.f()}this.totalNameAmount=0}return Object(u.a)(e,[{key:"update",value:function(e){var t=e.sender_name,n=0;if(t in this.nameAmounts&&"content"in e){var s=e.content;(/set\sthe\snickname\sfor/.test(s)||/set\syour\snickname\sto/.test(s))&&(n=1),this.nameAmounts[t]+=n,this.totalNameAmount+=n}}},{key:"valid",value:function(){return this.totalNameAmount>3}},{key:"scores",value:function(){for(var e={},t=0,n=Object.entries(this.nameAmounts);t<n.length;t++){var s=Object(m.a)(n[t],2),a=s[0],r=s[1];if(r>0){var o=r/this.totalNameAmount;e[a]=[this.role(),o,o]}}return e}},{key:"role",value:function(){return["The Name Author","The Name Editor"]}}]),e}(),E=n(15),N=n.n(E),M=n(22),I="ribbon-api-prod.us-west-1.elasticbeanstalk.com";function R(){return(R=Object(M.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://"+I+"/results/"+t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(M.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://"+I+"/results",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=n.p+"static/media/step1_hl.4de6c3aa.jpg",B=n.p+"static/media/step2_hl.32364970.jpg",W=n.p+"static/media/step3_hl.9cb663e6.jpg",H=n.p+"static/media/step4_hl.51d0744f.jpg";n(42);function z(e){return Object(s.jsxs)("div",{className:"stepPanelH",children:[Object(s.jsx)("div",{children:e.description}),Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"stepImg",src:e.image})})]})}var G=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).increment=function(e){s.setState({stepNumber:Math.min(e,s.state.stepNumber+1)})},s.decrement=function(){s.setState({stepNumber:Math.max(1,s.state.stepNumber-1)})},s.state={stepNumber:1},s}return Object(u.a)(n,[{key:"render",value:function(){var e=[Object(s.jsx)(z,{description:'"Deselect All" and then select "Messages"',image:_}),Object(s.jsx)(z,{description:'"Create File" with your preferred date and settings shown below',image:B}),Object(s.jsx)(z,{description:"Download the file when it is ready (this can take upwards of 20 minutes, depending on your date settings)",image:W}),Object(s.jsx)(z,{description:"Extract the file and find the json of the chat to analyze (facebook-name > messages > inbox > chatname > message_1.json)",image:H})];return Object(s.jsxs)("div",{className:"tutorialPanel",children:[Object(s.jsx)("h3",{children:" How to Export Your Messenger Data"}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{onClick:this.decrement,children:"Previous"}),Object(s.jsx)("button",{onClick:this.increment.bind(this,e.length),children:"Next"})]}),e[this.state.stepNumber-1]]})}}]),n}(r.a.Component),L=n.p+"static/media/wizard1.676249da.svg",Z=n.p+"static/media/wizard2.a1a3b9c0.svg",q=n.p+"static/media/stone1.0334579d.svg",J=n.p+"static/media/stone2.215fec12.svg",Y=n.p+"static/media/photo1.284385b3.svg",K=n.p+"static/media/photo2.ba323590.svg",$=n.p+"static/media/reactor1.cba154d5.svg",U=n.p+"static/media/reactor2.ec607eff.svg",Q=n.p+"static/media/english1.5bbcc0c2.svg",V=n.p+"static/media/english2.66ce52bb.svg",X=n.p+"static/media/sailor1.1c4c278c.svg",ee=n.p+"static/media/sailor2.b8e043f3.svg",te=n.p+"static/media/emoji1.a75a8ed2.svg",ne=n.p+"static/media/emoji2.fd317d07.svg",se=n.p+"static/media/name1.bfdc362d.svg",ae=n.p+"static/media/name2.7db7dbeb.svg",re=(n(43),function(e){var t={"The Word Wizard":[L,"This guy sure talks a lot. This guy sure talks a lot. This guy sure talks a lot. This guy sure talks a lot.","% of total words"],"The Alphabet Apprentice":[Z,"This guy talks a lot, but not as much as the other guy.","% of total words"],"The Stone":[q,"Maybe everyone else just talks too much.","% of total messages sent"],"The Pebble":[J,"A chip off the old block.","% of total messages sent"],"The Photographer":[Y,"Is a picture of a plate of chicken alfredo worth 1000 words? Has anyone tried to write 1000 words about chicken alfredo?","% of total photos sent"],"The Amateur Photographer":[K,"Does a phone really count as a camera?","% of total photos sent"],"The Reactor":[$,"Definitely reflective of their true personality. I mean, just look at them.","% of total reacts given"],"The Encourager":[U,"Everyone just needs a little encouragement. Thanks.","% of total reacts given"],"The English Teacher":[Q,"I love semicolons. I dressed up as a semicolon for Halloween.","% of total number of commas and semicolons"],"The English TA":[V,"I was a comma, and the other TA was a period. We had to explain it a lot.","% of total number of commas and semicolons"],"The Sailor":[X,"F--- f--- f--- f--- sh-- f--- sh-- b---- f--- -----------------","% of total swear words"],"The First Mate":[ee,"Potty mouth in training. Mouth is probably full of shit right now.","% of total swear words"],"The Emoji Spammer":[te,"\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02","% of total emojis sent"],"The Emoji Poweruser":[ne,"\ud83d\ude33\ud83d\ude33\ud83d\ude33\ud83d\ude33\ud83d\udc47\ud83c\udffb\ud83d\udc46\ud83c\udffb\ud83d\ude33\ud83d\udc46\ud83c\udffb\ud83d\udc46\ud83c\udffb","% of total emojis sent"],"The Name Author":[se,"Some crimes go unpunished. Also known as:","% of total nickname changes"],"The Name Editor":[ae,"Only dabbles a bit in the dark art of text manipulation.","% of total nickname changes"]},n=t[e.data[1][0]][0],a=e.data[1][0],r=t[e.data[1][0]][1],o=e.data[0],i=(100*e.data[1][1]).toPrecision(3)+t[e.data[1][0]][2];return Object(s.jsx)("div",{className:"panelCard roleCard",children:Object(s.jsxs)("div",{className:"roleCardInner",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"roleIcon",src:n})}),Object(s.jsxs)("div",{className:"roleCardInnerInfo",children:[Object(s.jsxs)("div",{className:"roleTitle",children:[" ",a," "]}),Object(s.jsxs)("div",{children:[" ",o," "]}),Object(s.jsxs)("div",{children:[" ",r," "]}),Object(s.jsxs)("div",{children:[" ",i," "]})]})]})})}),oe=n(4),ie=(n(25),n(26),n(44),function(e){var t="",n="";return console.log(e.results),Object.keys(e.results).length>0&&(Math.round(Math.abs(e.results.longestStreak[0]-e.results.longestStreak[1])/864e5),t=e.results.totalReacts,n=e.results.totalMessages,e.results.title),Object(s.jsxs)("div",{className:"genStatCard",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"number",children:[" ",n," "]}),Object(s.jsx)("div",{children:"Total Messages Sent"})]}),Object(s.jsxs)("div",{class:"emphasized",children:[Object(s.jsxs)("div",{className:"number",children:[" ",t," "]}),Object(s.jsx)("div",{children:"Total Reacts Given"})]})]})}),ce=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).processFileInput=function(e){console.log(e);var t=e[0],n=new FileReader;n.onload=function(e){(function(e){return P.apply(this,arguments)})(function(e){for(var t=e.participants.map((function(e){return e.name})),n=new k(t),s={},a=0;a<24;a++)s[a]=0;var r,o=0,i={},c=0,u={},l=Object(p.a)(t);try{for(l.s();!(r=l.n()).done;){var h=r.value;i[h]=0,u[h]=0}}catch(le){l.e(le)}finally{l.f()}var d={},f={},j=new Set(["the","be","to","of","and","a","in","that","have","i","it","for","not","on","with","he","as","you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there","their","what","so","up","out","if","about","who","get","which","go","me","when","make","can","like","time","no","just","him","know","take","into","year","your","good","some","could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well","way","even","new","want","because","any","these","give","day","most","us","was","which","why","yeah","too","my","like","lol","lolol","lmao","yeah","sure","aight","alright","ok","btw","sup","okay","uh","um","uhh","hey","hi","yo","oh","ooh","nice","wait","oooh","cool","thats","true","ahh"]),v="",b=null,g=null,D=-1,w=null,x=null,S=new Set;t.forEach((function(e){return S.add(e)}));var T,C,A,F=Object(p.a)(e.messages);try{for(F.s();!(T=F.n()).done;){var E=T.value,N=E.sender_name;if(S.has(N)){c++,u[N]++;var M=E.timestamp_ms;if(s[new Date(M).getHours()]++,"reactions"in E){var I=E.reactions.length;i[N]+=I;var R,P=Object(p.a)(E.reactions);try{for(P.s();!(R=P.n()).done;){var _=y(R.value.reaction);_ in d?d[_]++:d[_]=1,o++}}catch(le){P.e(le)}finally{P.f()}}if(C=b,A=M,Math.abs(C-A)<864e5?b=M:(b=M,g=M),O(b,g)>D&&(w=b,x=g,D=O(b,g)),"content"in E){var B=E.content;if(v=B,!/sent an attachment/.test(B.toLowerCase())&&!/named the group/.test(B.toLowerCase())){var W,H=Object(p.a)(B.match(/(^|\s)([A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+)($|\s)/g)||[]);try{for(H.s();!(W=H.n()).done;){var z=W.value;" "==z[0]&&(z=z.substr(1,z.length))," "==z[z.length-1]&&(z=z.substr(0,z.length-1));var G,L=z.toLowerCase(),Z=0,q=Object(p.a)(L.split(" "));try{for(q.s();!(G=q.n()).done;){var J=G.value;j.has(J)&&Z++}}catch(le){q.e(le)}finally{q.f()}Z<=1&&(L in f||(f[L]=0),f[L]++)}}catch(le){H.e(le)}finally{H.f()}}}n.update(E)}}}catch(le){F.e(le)}finally{F.f()}for(var Y=-1,K=-1,$=0,U=Object.entries(s);$<U.length;$++){var Q=Object(m.a)(U[$],2),V=Q[0],X=Q[1];X>K&&(Y=V,K=X)}for(var ee=-1,te="",ne=0,se=Object.entries(i);ne<se.length;ne++){var ae=Object(m.a)(se[ne],2),re=ae[0],oe=ae[1];oe>ee&&(ee=oe,te=re)}var ie=Object.keys(d).map((function(e){return[e,d[e]]}));ie.sort((function(e,t){return t[1]-e[1]})),ie=ie.slice(0,10);var ce=Object.keys(f).map((function(e){return[e,f[e]]}));ce.sort((function(e,t){return t[1]-e[1]})),ce=ce.slice(0,10);var ue=Object.keys(c).map((function(e){return[e,c[e]]}));return ue.sort((function(e,t){return t[1]-e[1]})),ue=ue.slice(0,10),{title:e.title,mostFrequentTime:[Y,K],mostTotalReacts:[te,ee],reactCounts:ie,wordCounts:ce,longestStreak:[w,x],firstMessage:v,totalReacts:o,totalMessages:c,totalMessagesByMember:ue,roles:n.assignRoles()}}(JSON.parse(e.target.result))).then((function(e){return e.json()})).then((function(e){return s.setState({resultID:e.id})}))},n.readAsText(t)},s.state={resultID:-1},s}return Object(u.a)(n,[{key:"render",value:function(){return this.state.resultID>0?Object(s.jsx)(oe.a,{to:"results/"+this.state.resultID}):Object(s.jsx)(ue,{onFileInput:this.processFileInput})}}]),n}(r.a.Component),ue=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).toggleTutorial=function(){s.setState({displayTutorial:!s.state.displayTutorial})},s.state={displayTutorial:!1},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:Object(s.jsx)("span",{className:"bolded",children:"Ribbon"})}),Object(s.jsx)(b,{onFileInput:this.props.onFileInput}),Object(s.jsx)("button",{onClick:this.toggleTutorial,children:this.state.displayTutorial?"Hide tutorial \u2191":"Show tutorial \u2193"}),this.state.displayTutorial&&Object(s.jsx)(G,{})]})})}}]),n}(r.a.Component),le=function(e){var t,n,a,r;return Object.keys(e.results).length>0&&(t=e.results.mostFrequentTime[0],n=e.results.mostFrequentTime[1],a=e.results.mostTotalReacts[0],r=e.results.mostTotalReacts[1]),Object(s.jsxs)("div",{className:"panelCard",children:[Object(s.jsxs)("div",{children:[" Most frequent conversation time: ",t," to ",n,"  "]}),Object(s.jsxs)("div",{children:[" Most reacted: ",a,", with ",r," "]})]})},he=function(e){var t;return Object.keys(e.results).length>0&&(t=e.results.totalReacts,e.results.reactCounts),Object(s.jsxs)("div",{className:"panelCard",children:[Object(s.jsxs)("div",{children:[" Total reacts: ",t," "]}),Object(s.jsx)("div",{children:" Distribution: "})]})},de=function(e){var t,n,a;return Object.keys(e.results).length>0&&(t=(t=new Date(e.results.longestStreak[0])).getMonth()+"-"+t.getDay()+"-"+t.getFullYear(),n=(n=new Date(e.results.longestStreak[1])).getMonth()+"-"+n.getDay()+"-"+n.getFullYear(),a=e.results.firstMessage),Object(s.jsxs)("div",{className:"panelCard",children:[Object(s.jsxs)("div",{children:[" Longest streak: ",t," to ",n]}),Object(s.jsxs)("div",{children:[" First recorded message: ",a]})]})},fe=function(e){var t,n,a;return Object.keys(e.results).length>0&&(t=e.results.wordCounts[0][0],n=e.results.wordCounts[1][0],a=e.results.wordCounts[2][0]),Object(s.jsxs)("div",{className:"panelCard",children:[Object(s.jsxs)("div",{children:[" First most common phrase: ",t," "]}),Object(s.jsxs)("div",{children:[" Second most common phrase: ",n]}),Object(s.jsxs)("div",{children:[" Third most common phrase: ",a," "]})]})},je=(n(48),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;Object(c.a)(this,n);var a=(s=t.call(this,e)).props.match.params.id;return s.state={id:a,result:{},roleComponents:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(e){return R.apply(this,arguments)})(this.state.id).then((function(e){return e.json()})).then((function(t){e.setState({result:t})})).then((function(t){e.setState({roleComponents:e.genRoles()})}))}},{key:"genRoles",value:function(){var e,t=null===(e=this.state)||void 0===e?void 0:e.result.roles;console.log("raw roles",t),console.log("objected",Object.entries(t));var n=[];return Object.entries(t).forEach((function(e,t){n.push(Object(s.jsx)(re,{data:e},t))})),n}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"Results",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:this.state.result.title}),Object(s.jsx)(ie,{results:this.state.result}),Object(s.jsx)(le,{results:this.state.result}),Object(s.jsx)(he,{results:this.state.result}),Object(s.jsx)(de,{results:this.state.result}),Object(s.jsx)(fe,{results:this.state.result}),this.state.roleComponents]})})}}]),n}(r.a.Component)),ve=Object(oe.g)(je),be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),r(e),o(e)}))},me=n(17),pe=n(31),Oe=Object(pe.a)(),ge=document.getElementById("root");if(ge){var ye=(/#!(\/.*)$/.exec(window.location.hash)||[])[1];ye&&Oe.replace(ye),i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(me.a,{children:Object(s.jsxs)(oe.d,{children:[Object(s.jsx)(oe.b,{exact:!0,path:"/",children:Object(s.jsx)(ce,{})}),Object(s.jsx)(oe.b,{path:"/results/:id",children:Object(s.jsx)(ve,{})})]})})}),ge)}be()}},[[49,1,2]]]);
//# sourceMappingURL=main.1fc44c12.chunk.js.map