webpackJsonp([1],{0:function(t,s){},"34KM":function(t,s){},"3CFN":function(t,s){},"70Y7":function(t,s){},"7mRP":function(t,s){},Cfai:function(t,s){},HLWu:function(t,s){},He5G:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("/ocq"),n=e("woOf"),o=e.n(n),r={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t,e){return s("span",{key:e,staticClass:"star-item",class:t})}),0)},staticRenderFns:[]};var c=e("VU/8")(r,l,!1,function(t){e("3CFN")},null,null).exports,d={name:"v-header",props:{seller:{type:Object}},components:{star:c},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"v-header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.hideDetail}})])])])],1)},staticRenderFns:[]};var u={name:"App",data:function(){return{seller:{id:(t={},(s=window.location.search.match(/[?&][^?&]+=[^?&]+/g))&&s.forEach(function(s){var e=s.substring(1).split("=");if(2===e.length){var i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);t[i]=a}}),t).id}};var t,s},created:function(){var t=this;this.$http.get("/sell/seller.json?"+this.seller.id).then(function(s){0===(s=s.body).errno&&(t.seller=o()({},t.seller,s.data))},function(t){})},components:{"v-header":e("VU/8")(d,v,!1,function(t){e("m+O0")},null,null).exports}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller,"keep-alive":"true"}})],1)],1)},staticRenderFns:[]};var h=e("VU/8")(u,p,!1,function(t){e("sVpa")},null,null).exports,f=e("8+8L"),_=e("GQaK"),C={name:"cartcontrol",props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("cardAdd",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("i",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]};var g=e("VU/8")(C,m,!1,function(t){e("He5G")},null,null).exports,w={name:"shopcart",props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},components:{cartcontrol:g},data:function(){return{balls:[{show:!1,id:0},{show:!1,id:1},{show:!1,id:2},{show:!1,id:3},{show:!1,id:4}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去配送"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){return!!this.totalCount&&!this.fold}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+n+"px, 0)",t.style.transform="translate3d(0, "+n+"px, 0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.wekitTransform="translate3d("+a+"px, 0, 0)",o.style.transform="translate3d("+a+"px, 0, 0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.wekitTransform="translate3d(0, 0, 0)",s.style.transform="translate3d(0, 0, 0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},clearcart:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付￥"+this.totalPrice+"元")}},watch:{selectFoods:function(t,s){var e=this;t.length?this.$nextTick(function(){e.scroll?e.scroll.refresh():e.scroll=new _.a(e.$refs.listContent,{click:!0})}):this.fold=!0}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart-root"},[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice)+"元")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("div",{staticClass:"ball-container"},[e("transition-group",{attrs:{name:"drop",tag:"div"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},t._l(t.balls,function(t){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:t.id,staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])}),0)],1),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],ref:"shopcartList",staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.clearcart}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("transition-group",{attrs:{name:"foodremove",tag:"ul"}},t._l(t.selectFoods,function(s){return e("li",{key:s.keyid,staticClass:"food border-1px"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.count*s.price))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}),0)],1)])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var x=e("VU/8")(w,y,!1,function(t){e("Cfai")},null,null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var b=e("VU/8")({name:"split"},k,!1,function(t){e("hTQD")},null,null).exports,T={name:"ratingselect",props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}},methods:{select:function(t,s){s._constructed&&this.$emit("selectedType",t)},toggleContent:function(t){t._constructed&&this.$emit("onlySelectedContent")}}},S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2==t.selectType},on:{click:function(s){return t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0==t.selectType},on:{click:function(s){return t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1==t.selectType},on:{click:function(s){return t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:function(s){return t.toggleContent(s)}}},[e("i",{staticClass:"icon-check_circle"}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var R=e("VU/8")(T,S,!1,function(t){e("RiiW")},null,null).exports;function $(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:P(a))}return s}function P(t){return("00"+t).substr(t.length)}var F={name:"food",props:{food:{type:Object}},components:{cartcontrol:g,split:b,ratingselect:R},data:function(){return{showFlag:!1,selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},computed:{showRatings:function(){var t=this;return this.food.ratings?this.food.ratings.filter(function(s){return 0===t.selectType?0===s.rateType&&!(t.onlyContent&&!s.text):1===t.selectType?1===s.rateType&&!(t.onlyContent&&!s.text):!(t.onlyContent&&!s.text)}):[]}},methods:{show:function(){this.showFlag=!0,this.selectType=2,this.onlyContent=!1,this.updateScroll()},hide:function(){this.showFlag=!1},addFirst:function(t,s){s._constructed&&(i.a.set(this.food,"count",1),this.$emit("cardAdd",s.target))},selectedType:function(t){this.selectType=t,this.updateScroll()},onlySelectedContent:function(){this.onlyContent=!this.onlyContent,this.updateScroll()},updateScroll:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new _.a(t.$refs.food,{click:!0})})}},filters:{formatDate:function(t){return $(new Date(t),"yyyy-MM-dd hh:mm")}}},N={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.addFirst(t.food,s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{selectedType:t.selectedType,onlySelectedContent:t.onlySelectedContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.showRatings&&t.showRatings.length,expression:"showRatings && showRatings.length"}]},t._l(t.showRatings,function(s,i){return e("li",{key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("i",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text))])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showRatings||!t.showRatings.length,expression:"!showRatings || !showRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var E=e("VU/8")(F,N,!1,function(t){e("70Y7")},null,null).exports,M={name:"goods",props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$http.get("/sell/goods.json").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,t.goods.forEach(function(t){var s=0;t.foods.forEach(function(t){t.keyid=s++})}),t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))},function(t){})},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuScroll=new _.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new _.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");this.foodsScroll.scrollToElement(e[t],3)}},cartAdd:function(t){this._drop(t)},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())}},components:{shopcart:x,cartcontrol:g,food:E}},D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){return t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px",class:{current:t.currentIndex===i}},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name))])])}),0)]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px",on:{click:function(e){return t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount))]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{cardAdd:t.cartAdd}})],1)])])}),0)])}),0)]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{cardAdd:t.cartAdd}})],1)},staticRenderFns:[]};var H=e("VU/8")(M,D,!1,function(t){e("RJyZ")},null,null).exports,A={name:"ratings",props:{seller:{type:Object}},components:{star:c,cartcontrol:g,split:b,ratingselect:R},data:function(){return{showFlag:!1,selectType:2,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"},ratings:[]}},computed:{showRatings:function(){var t=this;return this.ratings?this.ratings.filter(function(s){return 0===t.selectType?0===s.rateType&&!(t.onlyContent&&!s.text):1===t.selectType?1===s.rateType&&!(t.onlyContent&&!s.text):!(t.onlyContent&&!s.text)}):[]}},methods:{selectedType:function(t){this.selectType=t,this.updateScroll()},onlySelectedContent:function(){this.onlyContent=!this.onlyContent,this.updateScroll()},updateScroll:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new _.a(t.$refs.ratings,{click:!0})})}},filters:{formatDate:function(t){return $(new Date(t),"yyyy-MM-dd hh:mm")}},created:function(){var t=this;this.$http.get("/sell/ratings.json").then(function(s){0===(s=s.body).errno&&(t.ratings=s.data,t.updateScroll())},function(t){})}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime))])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.ratings},on:{selectedType:t.selectedType,onlySelectedContent:t.onlySelectedContent}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.showRatings&&t.showRatings.length,expression:"showRatings && showRatings.length"}]},t._l(t.showRatings,function(s,i){return e("li",{key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("i",{staticClass:"icon-thumb_up"}),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"recommend-item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}),0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showRatings||!t.showRatings.length,expression:"!showRatings || !showRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)])},staticRenderFns:[]};var U=e("VU/8")(A,O,!1,function(t){e("HLWu")},null,null).exports,V=e("mvHQ"),W=e.n(V);var j={name:"seller",props:{seller:{type:Object}},components:{star:c,split:b},data:function(){return{favorite:function(t,s,e){if(!t||!s)return e;var i=window.localStorage.__seller__;return i&&(i=JSON.parse(i))[t]&&i[t][s]?i[t][s]:e}(this.seller.id,"favorite",!1)}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},created:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$nextTick(function(){t._initScroll(),t._initPicScroll()})},watch:{seller:function(t,s){var e=this;this.$nextTick(function(){e._initPicScroll()})}},methods:{_initScroll:function(){this.scroll?this.scroll.refresh():this.scroll=new _.a(this.$refs.seller,{click:!0})},_initPicScroll:function(){if(this.seller.pics){var t=126*this.seller.pics.length-6;this.$refs.picList.style.width=t+"px",this.picScroll?this.picScroll.refresh():this.picScroll=new _.a(this.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})}},toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,function(t,s,e){if(t&&s){var i=window.localStorage.__seller__;i?(i=JSON.parse(i))[t]||(i[t]={}):(i={})[t]={},i[t][s]=e,window.localStorage.__seller__=W()(i)}}(this.seller.id,"favorite",this.favorite))}}},L={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",{staticClass:"title"},[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",{staticClass:"title"},[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",{staticClass:"title"},[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:function(s){return t.toggleFavorite(s)}}},[e("i",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])}),0):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}),0)])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-1px"},[t._v(t._s(s))])}),0)])],1)])},staticRenderFns:[]};var B=e("VU/8")(j,L,!1,function(t){e("7mRP")},null,null).exports;e("34KM");i.a.config.productionTip=!1,i.a.use(a.a),i.a.use(f.a);var z=[{path:"/goods",component:H},{path:"/ratings",component:U},{path:"/seller",component:B}],Y=new a.a({routes:z,linkActiveClass:"active"});new i.a({components:{App:h},template:"<App/>",router:Y}).$mount("#app"),Y.push("/goods")},RJyZ:function(t,s){},RiiW:function(t,s){},hTQD:function(t,s){},"m+O0":function(t,s){},sVpa:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.fac8b84a111b68888ad7.js.map