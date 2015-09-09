"use strict";define("tedconf/app",["exports","ember","ember/resolver","ember/load-initializers","tedconf/config/environment"],function(e,t,n,r,a){var o;t["default"].MODEL_FACTORY_INJECTIONS=!0,o=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),r["default"](o,a["default"].modulePrefix),e["default"]=o}),define("tedconf/components/app-version",["exports","ember-cli-app-version/components/app-version","tedconf/config/environment"],function(e,t,n){var r=n["default"].APP,a=r.name,o=r.version;e["default"]=t["default"].extend({version:o,name:a})}),define("tedconf/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("tedconf/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("tedconf/helpers/fa-icon",["exports","ember-cli-font-awesome/helpers/fa-icon"],function(e,t){e["default"]=t["default"],e.faIcon=t.faIcon}),define("tedconf/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","tedconf/config/environment"],function(e,t,n){var r=n["default"].APP,a=r.name,o=r.version;e["default"]={name:"App Version",initialize:t["default"](a,o)}}),define("tedconf/initializers/export-application-global",["exports","ember","tedconf/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("tedconf/pods/application/controller",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({groups:[{name:"Ember JS",projects:[{title:"Ember Collapsible Panel",description:"Unopinionated, zero-dependency panel and accordion",url:"https://tedconf.github.io/ember-collapsible-panel"},{title:"Ember CLI Front End Builds",description:"Deploy your Ember app to a Front End Builds-enabled Rails server",url:"https://github.com/tedconf/ember-cli-front-end-builds"},{title:"Ember CLI New Build",description:"Notify users of new app releases",url:"https://github.com/tedconf/ember-cli-new-build"}]},{name:"Ruby",projects:[{title:"Front End Builds",description:"A Rails engine for deploying and serving JavaScript applications",url:"https://github.com/tedconf/front_end_builds"},{title:"Serialism",description:"General-purpose serialization library",url:"https://github.com/tedconf/serialism"},{title:"JSON Logger",description:"Write structured JSON to logs",url:"https://github.com/tedconf/json_logger"},{title:"Time chunk",description:"Iterate over time ranges in discrete chunks",url:"https://github.com/tedconf/time_chunk"}]},{name:"Node",projects:[{title:"node-m3u8",description:"Streaming parser for m3u8 files",url:"https://github.com/tedconf/node-m3u8"}]},{name:"Misc",projects:[{title:"Styleguide",description:"Ruby, CSS, Ember and rspec code style guides",url:"https://github.com/tedconf/code-style-guides"}]}]})}),define("tedconf/pods/application/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:19,column:10},end:{line:21,column:10}},moduleName:"tedconf/pods/application/template.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("            ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","project-card",[],["project",["subexpr","@mut",[["get","project",["loc",[null,[20,35],[20,42]]]]],[],[]]],["loc",[null,[20,12],[20,44]]]]],locals:["project"],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:14,column:4},end:{line:24,column:4}},moduleName:"tedconf/pods/application/template.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","Project-group");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("h2");e.setAttribute(r,"class","Project-group__name");var a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n        ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","Project-cards");var a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("        ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=new Array(2);return a[0]=e.createMorphAt(e.childAt(r,[1]),0,0),a[1]=e.createMorphAt(e.childAt(r,[3]),1,1),a},statements:[["content","group.name",["loc",[null,[16,40],[16,54]]]],["block","each",[["get","group.projects",["loc",[null,[19,18],[19,32]]]]],[],0,null,["loc",[null,[19,10],[21,19]]]]],locals:["group"],templates:[e]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:37,column:9}},moduleName:"tedconf/pods/application/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("header");e.setAttribute(n,"class","Header");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("img");e.setAttribute(r,"class","Header__logo-main"),e.setAttribute(r,"src","assets/images/ted_logo-4b2d54e71d64ea635cfbd3fa2c5747e3.png"),e.setAttribute(r,"alt","TED"),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r);var r=e.createElement("p");e.setAttribute(r,"class","Header__logo-sub");var a=e.createTextNode("OPEN");e.appendChild(r,a);var a=e.createElement("strong"),o=e.createTextNode("SOURCE");e.appendChild(a,o),e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","Header__byline-wrapper");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("p");e.setAttribute(a,"class","Header__byline");var o=e.createTextNode("We use and love open-source software.");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("p");e.setAttribute(a,"class","Header__byline");var o=e.createTextNode("Check out some of our libraries below.");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","Project-groups-wrapper");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","Project-groups");var a=e.createTextNode("\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("footer");e.setAttribute(n,"class","Footer");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","Footer__inner");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("ul");e.setAttribute(a,"class","Footer__nav");var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("li");e.setAttribute(o,"class","Footer__nav-item");var d=e.createElement("a");e.setAttribute(d,"href","http://www.ted.com/about/our-organization/jobs-at-ted");var l=e.createTextNode("Jobs");e.appendChild(d,l),e.appendChild(o,d),e.appendChild(a,o);var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("li");e.setAttribute(o,"class","Footer__nav-item");var d=e.createElement("a");e.setAttribute(d,"href","https://www.ted.com/about/our-organization/who-we-are");var l=e.createTextNode("Staff");e.appendChild(d,l),e.appendChild(o,d),e.appendChild(a,o);var o=e.createTextNode("\n      ");e.appendChild(a,o);var o=e.createElement("li");e.setAttribute(o,"class","Footer__nav-item");var d=e.createElement("a");e.setAttribute(d,"href","https://support.ted.com/customer/portal/emails/new");var l=e.createTextNode("Contact");e.appendChild(d,l),e.appendChild(o,d),e.appendChild(a,o);var o=e.createTextNode("\n    ");e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("p"),o=e.createElement("a");e.setAttribute(o,"href","https://www.ted.com/");var d=e.createElement("span");e.setAttribute(d,"class","u-ted-font");var l=e.createTextNode("TED.com");e.appendChild(d,l),e.appendChild(o,d),e.appendChild(a,o),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");return e.appendChild(n,r),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(e.childAt(t,[2,1]),1,1),r},statements:[["block","each",[["get","groups",["loc",[null,[14,12],[14,18]]]]],[],0,null,["loc",[null,[14,4],[24,13]]]]],locals:[],templates:[e]}}())}),define("tedconf/pods/components/project-card/component",["exports","ember"],function(e,t){e["default"]=t["default"].Component.extend({url:t["default"].computed.alias("project.url"),tagName:"a",classNames:["Project-card"],attributeBindings:["url:href"]})}),define("tedconf/pods/components/project-card/template",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:5,column:9}},moduleName:"tedconf/pods/components/project-card/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3");e.setAttribute(n,"class","Project-card__title");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p");e.setAttribute(n,"class","Project-card__description");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[0]),0,0),r[1]=e.createMorphAt(e.childAt(t,[2]),0,0),r},statements:[["content","project.title",["loc",[null,[1,32],[1,49]]]],["content","project.description",["loc",[null,[2,37],[2,60]]]]],locals:[],templates:[]}}())}),define("tedconf/router",["exports","ember","tedconf/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("tedconf/config/environment",["ember"],function(e){var t="tedconf";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(o){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("tedconf/tests/test-helper"):require("tedconf/app")["default"].create({name:"tedconf",version:"0.0.0+5d799846"});