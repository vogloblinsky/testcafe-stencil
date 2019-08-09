System.register(["./p-c965441f.system.js"],function(e){"use strict";var t,r;return{setters:[function(e){t=e.r;r=e.h}],execute:function(){var s=e("nova_badge",function(){function e(e){t(this,e)}e.prototype.validateScore=function(){if(this.score==="1"||this.score==="2"||this.score==="3"||this.score==="4"){this.getScoreCSSClass()}else{this.score="1"}};e.prototype.isValidScore=function(e){return e==="1"||e==="2"||e==="3"||e==="4"};e.prototype.componentWillLoad=function(){if(!this.isValidScore(this.score)){this.score="1"}};e.prototype.getScoreCSSClass=function(){var e="";switch(this.score){case"1":e="one";break;case"2":e="two";break;case"3":e="three";break;case"4":e="four";break;default:e="one";break}return e};e.prototype.render=function(){return r("div",{class:"container"},r("div",{class:"title"},"NOVA"),r("div",{class:"score "+this.getScoreCSSClass()},this.score))};Object.defineProperty(e,"watchers",{get:function(){return{score:["validateScore"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;font-family:Arial,Helvetica,sans-serif;font-weight:700}:host .container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;text-align:center}:host .container .title{color:#7e7e7e;font-size:24px}:host .container .score{color:#fff;width:68px;height:90px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:80px}:host .container .score.one{background-color:#48ab00}:host .container .score.two{background-color:#f5cd00}:host .container .score.three{background-color:#ec6500}:host .container .score.four{background-color:#e90000}"},enumerable:true,configurable:true});return e}())}}});