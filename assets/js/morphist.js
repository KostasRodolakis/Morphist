/*! Morphist - v1.0.0 - 2014-03-20 */!function(a){function b(b,e){this.element=a(b),this.settings=a.extend({},d,e),this._defaults=d,this._name=c,this.init()}var c="Morphist",d={animateIn:"bounceIn",animateOut:"rollOut",speed:2e3};b.prototype={init:function(){this.children=this.element.children(),this.element.addClass("morphist"),this.index=-1,this.cycle()},animate:function(){var a=this;++this.index,this.prev=this.index,this.children.eq(this.index).addClass("animated "+this.settings.animateIn),setTimeout(function(){a.cycle()},this.settings.speed)},cycle:function(){var b=this;return this.index+1===this.children.length&&(this.index=-1),"undefined"!=typeof this.prev&&null!==this.prev?void this.children.eq(this.prev).addClass(this.settings.animateOut).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a(this).removeClass(),b.animate()}):void this.animate()}},a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})}}(jQuery,window,document);