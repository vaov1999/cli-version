(function(t){function e(e){for(var n,c,s=e[0],i=e[1],u=e[2],l=0,p=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/cli-version/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"2f57":function(t,e,a){},"3b17":function(t,e,a){"use strict";a("c21b")},"3b41":function(t,e,a){},4534:function(t,e,a){"use strict";a("3b41")},"4c62":function(t,e,a){},5824:function(t,e,a){"use strict";a("7734")},"5a3a":function(t,e,a){"use strict";a("8fa5")},6059:function(t,e,a){"use strict";a("6668")},6668:function(t,e,a){},"69ba":function(t,e,a){"use strict";a("d672")},"6b52":function(t,e,a){"use strict";a("2f57")},"76bd":function(t){t.exports=JSON.parse('[{"id":"post1","title":"Routing","link":"https://nuxtjs.org/docs/2.x/get-started/routing","content":"Most websites will have more than one page (i.e. a home page, about page, contact page etc.). In order to show these pages, we need a Router. That\'s where vue-router comes in. When working with the Vue application, you have to set up a configuration file (i.e. router.js) and add all your routes manually to it. Nuxt.js automatically generates the vue-router configuration for you, based on your provided Vue files inside the pages directory. That means you never have to write a router config again! Nuxt.js also gives you automatic code-splitting for all your routes.","author":{"id":"asd213","name":"John Smith","username":"john_smith","avatar":"https://cdn.britannica.com/81/82281-050-3ADDC3DB/John-Smith-engraving.jpg"}},{"id":"asdasdasdasdasd","title":"Commands and Deployment","link":"https://nuxtjs.org/docs/2.x/get-started/commands","content":"Nuxt.js will create a dist/ directory with everything inside ready to be deployed on a static hosting service. As of Nuxt v2.13 there is a crawler installed that will now crawl your link tags and generate your routes when using the command nuxt generate based on those links.","author":{"id":"asd213","name":"John Smith","username":"john_smith","avatar":"https://cdn.britannica.com/81/82281-050-3ADDC3DB/John-Smith-engraving.jpg"}},{"id":"123123","title":"Context and Helpers","link":"https://nuxtjs.org/docs/2.x/concepts/context-helpers","content":"First and foremost, the context is used to provide access to other parts of the Nuxt.js application, e.g. the Vuex store or the underlying connect instance. Thus, we have the req and res objects in the context available on the server side and store always available. But with time, the context was extended with many other helpful variables and shortcuts. Now we have access to HMR functionalities in development mode, the current route, page params and query, as well as the option to access environment variables through the context. Furthermore, module functions and helpers can be exposed through the context to be available on both - the client and the server side.","author":{"id":"namsasd123123e","name":"Albert Einstein","username":"albert_einstein","avatar":"https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc5NjY5ODU0NjQzMzIy/gettyimages-3091504.jpg"}},{"id":"asd","title":"Directory Structure","link":"https://nuxtjs.org/docs/2.x/get-started/directory-structure","content":"The components directory is where you put all your Vue.js components which are then imported into your pages.With Nuxt.js you can create your components and auto import them into your .vue files meaning there is no need to manually import them in the script section. Nuxt.js will scan and auto import these for you once you have components set to true.","author":{"id":"asd213","name":"John Smith","username":"john_smith","avatar":"https://cdn.britannica.com/81/82281-050-3ADDC3DB/John-Smith-engraving.jpg"}},{"id":"cjvnjslfvdj12","title":"Server Side Rendering","link":"https://nuxtjs.org/docs/2.x/concepts/server-side-rendering","content":"Server-side rendering (SSR), is the ability of an application to contribute by displaying the web-page on the server instead of rendering it in the browser. Server-side sends a fully rendered page to the client; the client\'s JavaScript bundle takes over which then allows the Vue.js app to hydrate.","author":{"id":"nam123123dasdasde","name":"Some Dude","username":"user123123123"}},{"id":"123dasda121","title":"Views","link":"https://nuxtjs.org/docs/2.x/concepts/views","content":"The Views section describes all you need to know to configure data and views for a specific route in your Nuxt.js Application. Views consist of an app template, a layout, and the actual page. In addition, you can define custom meta tags for the head section of each page which are important for SEO (Search Engine Optimization).","author":{"id":"namsasd123123e","name":"Albert Einstein","username":"albert_einstein","avatar":"https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc5NjY5ODU0NjQzMzIy/gettyimages-3091504.jpg"}},{"id":"adkjnvahjfvsnk12","title":"Static Site Generation","link":"https://nuxtjs.org/docs/2.x/concepts/static-site-generation","content":"With static site generation you can render your application during the build phase and deploy it to any static hosting services such as Netlify, GitHub pages, Vercel etc. This means that no server is needed in order to deploy your application.","author":{"id":"n123123ame","name":"Stephen Hawking","username":"stephen_hawking","avatar":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvl9sAAH-yXAze7V6uKXTtWuf2v29DU1YELARJuGfeGaQ-QE_P"}}]')},7734:function(t,e,a){},"8fa5":function(t,e,a){},"9c92":function(t,e,a){"use strict";a("4c62")},c21b:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r={class:"app"},o={class:"app__navigation"},c=Object(n["f"])("Posts"),s=Object(n["f"])("Cards");function i(t,e){var a=Object(n["w"])("router-link"),i=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",r,[Object(n["g"])("div",o,[Object(n["g"])(a,{class:"link",to:"/"},{default:Object(n["D"])((function(){return[c]})),_:1}),Object(n["g"])(a,{class:"link",to:"/cards"},{default:Object(n["D"])((function(){return[s]})),_:1})]),Object(n["g"])(i)])}a("69ba"),a("9c92");const u={};u.render=i;var d=u,l=a("6c02"),p=(a("b0c0"),Object(n["F"])("data-v-2d80efa1"));Object(n["s"])("data-v-2d80efa1");var b={class:"posts"},h={class:"author-wrapper"},j={key:1,class:"gb-author-avatar-anonymous"},O={class:"grid"},f={class:"link-wrapper"},g=Object(n["f"])("Learn More"),m={class:"posts__mixed"},v={class:"author"},y={key:1,class:"gb-author-avatar-anonymous"},_={class:"link-wrapper"},w=Object(n["f"])("Learn More");Object(n["q"])();var C=p((function(t,e,a,r,o,c){var s=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",b,[Object(n["g"])("button",{class:"gb-gradient-button",onClick:e[1]||(e[1]=function(){return t.filterToggle&&t.filterToggle.apply(t,arguments)})},Object(n["z"])(t.isGroupByAuthor?"All posts":"Group by author"),1),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.authorsGroups,(function(e,a){return Object(n["E"])((Object(n["p"])(),Object(n["d"])("div",{key:a,class:"posts__grouped"},[Object(n["g"])("div",h,[e.authorPosts[0].author.avatar?(Object(n["p"])(),Object(n["d"])("img",{key:0,class:"author-avatar",src:e.authorPosts[0].author.avatar,alt:""},null,8,["src"])):(Object(n["p"])(),Object(n["d"])("div",j,"^_^")),Object(n["g"])("div",null,[Object(n["g"])("span",{class:"author-name",innerHTML:e.authorPosts[0].author.name},null,8,["innerHTML"]),Object(n["g"])("a",{class:"author-username",innerHTML:e.authorPosts[0].author.username},null,8,["innerHTML"])])]),Object(n["g"])("div",O,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(e.authorPosts,(function(t,e){return Object(n["p"])(),Object(n["d"])("div",{key:e,class:"item"},[Object(n["g"])("p",{class:"title",innerHTML:t.title},null,8,["innerHTML"]),Object(n["g"])("div",{class:"content",innerHTML:t.content},null,8,["innerHTML"]),Object(n["g"])("div",f,[Object(n["g"])(s,{to:"/posts/".concat(t.id)},{default:p((function(){return[g]})),_:2},1032,["to"])])])})),128))])],512)),[[n["B"],t.isGroupByAuthor]])})),128)),Object(n["E"])(Object(n["g"])("div",m,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.posts,(function(t,e){return Object(n["p"])(),Object(n["d"])("div",{key:e,class:"item"},[Object(n["g"])("p",{class:"title",innerHTML:t.title},null,8,["innerHTML"]),Object(n["g"])("div",v,[t.author.avatar?(Object(n["p"])(),Object(n["d"])("img",{key:0,class:"author-avatar",src:t.author.avatar,alt:""},null,8,["src"])):(Object(n["p"])(),Object(n["d"])("div",y,"^_^")),Object(n["g"])("div",null,[Object(n["g"])("span",{class:"author-name",innerHTML:t.author.name},null,8,["innerHTML"]),Object(n["g"])("a",{class:"author-username",innerHTML:t.author.username},null,8,["innerHTML"])])]),Object(n["g"])("div",{class:"content",innerHTML:t.content},null,8,["innerHTML"]),Object(n["g"])("div",_,[Object(n["g"])(s,{to:"/posts/".concat(t.id)},{default:p((function(){return[w]})),_:2},1032,["to"])])])})),128))],512),[[n["B"],!t.isGroupByAuthor]])])})),x=(a("159b"),a("caad"),a("76bd")),T=Object(n["h"])({name:"Posts",data:function(){return{posts:x,isGroupByAuthor:!1}},computed:{authorsGroups:function(){var t=[];this.posts.forEach((function(e){t.includes(e.author.id)||t.push(e.author.id)}));var e=[];return t.forEach((function(t){e.push({authorId:t,authorPosts:[]})})),this.posts.forEach((function(t){e.forEach((function(e){t.author.id===e.authorId&&e.authorPosts.push(t)}))})),e}},methods:{filterToggle:function(){this.isGroupByAuthor=!this.isGroupByAuthor}}});a("5824");T.render=C,T.__scopeId="data-v-2d80efa1";var M=T,A=Object(n["F"])("data-v-20e5e978");Object(n["s"])("data-v-20e5e978");var k={class:"home-page"},D={key:0,class:"home-page__singles"},H=Object(n["g"])("p",{class:"title"},"Single Components",-1),S={class:"grid"};Object(n["q"])();var E=A((function(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",k,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.cards,(function(e,a){return Object(n["p"])(),Object(n["d"])(n["a"],null,[t.isSingleComponent(e.type)?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])(Object(n["x"])(t.defineComponent(e.type)),{key:a,data:e,"is-single":t.isSingleComponent(e.type)},null,8,["data","is-single"]))],64)})),256)),t.isSingleComponents?(Object(n["p"])(),Object(n["d"])("div",D,[H,Object(n["g"])("div",S,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.cards,(function(e,a){return Object(n["p"])(),Object(n["d"])(n["a"],null,[t.isSingleComponent(e.type)?(Object(n["p"])(),Object(n["d"])(Object(n["x"])(t.defineComponent(e.type)),{key:a,data:e},null,8,["data"])):Object(n["e"])("",!0)],64)})),256))])])):Object(n["e"])("",!0)])})),L=Object(n["F"])("data-v-e09e7fb2");Object(n["s"])("data-v-e09e7fb2");var R={class:"container-card"},N=Object(n["g"])("p",{class:"container-card__title"},"CONTAINER CARD",-1),I={class:"container-card__grid"};Object(n["q"])();var G=L((function(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",R,[N,Object(n["g"])("div",I,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.data.sub_cards,(function(e,a){return Object(n["p"])(),Object(n["d"])(Object(n["x"])(t.defineComponent(e.type)),{key:a,data:e},null,8,["data"])})),128))])])})),P=Object(n["F"])("data-v-54031e19");Object(n["s"])("data-v-54031e19");var B={class:"card-image"};Object(n["q"])();var q=P((function(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",B,[Object(n["g"])("img",{class:"card-image__image",src:t.data.source,alt:"".concat(t.data.name," is broken :(")},null,8,["src","alt"]),Object(n["g"])("p",{class:"card-image__title",innerHTML:t.data.name},null,8,["innerHTML"])])})),J=Object(n["h"])({name:"CardImage",props:{data:{default:{}}}});a("3b17");J.render=q,J.__scopeId="data-v-54031e19";var V=J,z=Object(n["F"])("data-v-32913ca0");Object(n["s"])("data-v-32913ca0");var F={class:"card-text"},X={key:3,class:"card-text__empty"},W=Object(n["f"])(" OOps! "),Y=Object(n["g"])("br",null,null,-1),Q=Object(n["f"])("Content will be soon :) ");Object(n["q"])();var U=z((function(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",F,[t.data.name?(Object(n["p"])(),Object(n["d"])("p",{key:0,class:"card-text__title",innerHTML:t.data.name},null,8,["innerHTML"])):Object(n["e"])("",!0),t.data.source?(Object(n["p"])(),Object(n["d"])("p",{key:1,class:"card-text__source",innerHTML:t.data.source},null,8,["innerHTML"])):Object(n["e"])("",!0),t.data.content?(Object(n["p"])(),Object(n["d"])("p",{key:2,class:"card-text__content",innerHTML:t.data.content},null,8,["innerHTML"])):Object(n["e"])("",!0),t.data.content||t.data.source?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("p",X,[W,Y,Q]))])})),$=Object(n["h"])({name:"CardText",props:{data:{default:{}}}});a("5a3a");$.render=U,$.__scopeId="data-v-32913ca0";var K=$,Z=Object(n["h"])({name:"CardsContainer",components:{CardImage:V,CardText:K},props:{data:{default:{}}},methods:{defineComponent:function(t){switch(t){case"IMAGE_CARD":return V;case"TEXT_CARD":return K}}}});a("6b52");Z.render=G,Z.__scopeId="data-v-e09e7fb2";var tt=Z,et=a("ef62"),at=Object(n["h"])({components:{CardsContainer:tt,CardImage:V,CardText:K},data:function(){return{cards:et}},computed:{isSingleComponents:function(){var t=!1;return this.cards.forEach((function(e){"CONTAINER_CARD"!==e.type&&(t=!0)})),t}},methods:{defineComponent:function(t){switch(t){case"CONTAINER_CARD":return tt;case"IMAGE_CARD":return V;case"TEXT_CARD":return K}},isSingleComponent:function(t){return"CONTAINER_CARD"!==t}}});a("4534");at.render=E,at.__scopeId="data-v-20e5e978";var nt=at,rt=(a("9911"),Object(n["F"])("data-v-4a25e0d4"));Object(n["s"])("data-v-4a25e0d4");var ot={class:"post"},ct={class:"post__title"},st={class:"post__author"},it={key:1,class:"gb-author-avatar-anonymous"},ut={class:"name"},dt={class:"username"},lt={class:"post__content"};Object(n["q"])();var pt=rt((function(t,e,a,r,o,c){return Object(n["p"])(),Object(n["d"])("div",ot,[Object(n["g"])("h1",ct,Object(n["z"])(t.post.title),1),Object(n["g"])("div",st,[t.post.author.avatar?(Object(n["p"])(),Object(n["d"])("img",{key:0,class:"image",src:t.post.author.avatar},null,8,["src"])):(Object(n["p"])(),Object(n["d"])("div",it,"$_$")),Object(n["g"])("div",null,[Object(n["g"])("p",ut,Object(n["z"])(t.post.author.name),1),Object(n["g"])("p",dt,Object(n["z"])(t.post.author.username),1)])]),Object(n["g"])("div",lt,Object(n["z"])(t.post.content),1),Object(n["g"])("a",{class:"gb-gradient-button",href:t.link,target:"_blank"},"Learn More",8,["href"])])})),bt=(a("4de4"),Object(n["h"])({computed:{post:function(){var t=this,e=x.filter((function(e){return e.id===t.$route.params.id}));return e[0]}}}));a("6059");bt.render=pt,bt.__scopeId="data-v-4a25e0d4";var ht=bt,jt=[{path:"/",name:"Posts",component:M},{path:"/cards",name:"Cards",component:nt},{path:"/posts/:id",component:ht}],Ot=Object(l["a"])({history:Object(l["b"])("/cli-version/"),routes:jt}),ft=Ot,gt=a("5502"),mt=Object(gt["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["c"])(d).use(mt).use(ft).mount("#app")},d672:function(t,e,a){},ef62:function(t){t.exports=JSON.parse('[{"id":1,"name":"Card 1","type":"CONTAINER_CARD","title":"Card 1 content","sub_cards":[{"id":1,"name":"Image Card","type":"IMAGE_CARD","source":"https://images.unsplash.com/photo-1618421770676-356cce7a9c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"},{"id":2,"name":"Card 2","type":"TEXT_CARD","source":"Container second card content"},{"id":3,"name":"Card 2","type":"TEXT_CARD"},{"id":4,"name":"Just do it","type":"TEXT_CARD"}]},{"id":2,"name":"Card 2","type":"IMAGE_CARD","source":"https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},{"id":2,"name":"Card 2","type":"IMAGE_CARD","source":"https://imaes.unsplash.com/photo-1543269664-76bc3997d9ea?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"},{"id":3,"name":"Card 3","type":"TEXT_CARD","content":"Card 3 Content"}]')}});
//# sourceMappingURL=app.521a8be0.js.map