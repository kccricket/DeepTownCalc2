(function(e){function a(a){for(var i,o,m=a[0],u=a[1],l=a[2],c=0,d=[];c<m.length;c++)o=m[c],n[o]&&d.push(n[o][0]),n[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);s&&s(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],i=!0,m=1;m<t.length;m++){var u=t[m];0!==n[u]&&(i=!1)}i&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var i={},n={app:0},r=[];function o(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)o.d(t,i,function(a){return e[a]}.bind(null,i));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/DeepTownCalc2/";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],u=m.push.bind(m);m.push=a,m=m.slice();for(var l=0;l<m.length;l++)a(m[l]);var s=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("cd49")},"106f":function(e,a,t){},4355:function(e,a){},5526:function(e,a){},"5c0b":function(e,a,t){"use strict";var i=t("106f"),n=t.n(i);n.a},"7c62":function(e,a){},b33a:function(e){e.exports=[{name:"coal",source:"mining"},{name:"copper",source:"mining"},{name:"amber",source:"mining"},{name:"iron",source:"mining"},{name:"aluminum",source:"mining"},{name:"silver",source:"mining"},{name:"gold",source:"mining"},{name:"emerald",source:"mining"},{name:"platinum",source:"mining"},{name:"topaz",source:"mining"},{name:"ruby",source:"mining"},{name:"diamond",source:"mining"},{name:"sapphire",source:"mining"},{name:"amethyst",source:"mining"},{name:"titaniumOre",source:"mining"},{name:"alexandrite",source:"mining"},{name:"uranium",source:"mining"},{name:"obsidian",source:"mining"},{name:"uraniumRod",source:"enrichment",time:600,components:[{materialName:"uranium",quantity:100},{materialName:"sodium",quantity:50}]},{name:"polishedAlexandrite",source:"jewelCrafting",time:60,components:[{materialName:"alexandrite",quantity:5}]},{name:"titanium",source:"chemistry",time:20,yield:50,components:[{materialName:"sulfuricAcid",quantity:1},{materialName:"titaniumOre",quantity:100}]},{name:"diethylEther",source:"chemistry",time:60,components:[{materialName:"sulfuricAcid",quantity:1},{materialName:"ethanol",quantity:1}]},{name:"gunpowder",source:"chemistry",time:120,yield:20,components:[{materialName:"diethylEther",quantity:1},{materialName:"sulfuricAcid",quantity:2},{materialName:"tree",quantity:2}]},{name:"gear",source:"crafting",time:80,components:[{materialName:"diamondCutter",quantity:1},{materialName:"titaniumBar",quantity:1}]},{name:"bomb",source:"crafting",time:120,components:[{materialName:"titaniumBar",quantity:5},{materialName:"gunpowder",quantity:10}]},{name:"titaniumBar",source:"smelting",time:60,components:[{materialName:"titanium",quantity:5}]},{name:"copperBar",source:"smelting",time:10,components:[{materialName:"copper",quantity:5}]},{name:"ironBar",source:"smelting",time:15,components:[{materialName:"iron",quantity:5}]},{name:"glass",source:"smelting",time:60,components:[{materialName:"silicon",quantity:2}]},{name:"aluminumBar",source:"smelting",time:15,components:[{materialName:"aluminum",quantity:5}]},{name:"steelBar",source:"smelting",time:45,components:[{materialName:"ironBar",quantity:1},{materialName:"graphite",quantity:1}]},{name:"silverBar",source:"smelting",time:60,components:[{materialName:"silver",quantity:5}]},{name:"charcoal",source:"smelting",time:60,yield:50,components:[{materialName:"tree",quantity:1}]},{name:"goldBar",source:"smelting",time:60,components:[{materialName:"gold",quantity:5}]},{name:"steelPlate",source:"smelting",time:120,components:[{materialName:"steelBar",quantity:5}]},{name:"graphite",source:"crafting",time:5,value:15,components:[{materialName:"coal",quantity:5}]},{name:"copperNail",source:"crafting",time:20,yield:10,value:10,components:[{materialName:"copperBar",quantity:1}]},{name:"wire",source:"crafting",time:30,yield:5,value:15,components:[{materialName:"copperBar",quantity:1}]},{name:"battery",source:"crafting",time:120,value:200,components:[{materialName:"amber",quantity:1},{materialName:"ironBar",quantity:1},{materialName:"copperBar",quantity:5}]},{name:"circuit",source:"crafting",time:180,value:2070,components:[{materialName:"ironBar",quantity:10},{materialName:"graphite",quantity:50},{materialName:"copperBar",quantity:20}]},{name:"lamp",source:"crafting",time:80,value:760,components:[{materialName:"wire",quantity:10},{materialName:"graphite",quantity:20},{materialName:"copperBar",quantity:5}]},{name:"flask",source:"crafting",time:60,value:800,components:[{materialName:"glass",quantity:1}]},{name:"amberCharger",source:"crafting",time:5,value:4,components:[{materialName:"amber",quantity:1}]},{name:"aluminumBottle",source:"crafting",time:30,value:55,components:[{materialName:"aluminumBar",quantity:1}]},{name:"amberInsulation",source:"crafting",time:20,value:125,components:[{materialName:"amber",quantity:10},{materialName:"aluminumBottle",quantity:1}]},{name:"insulatedWire",source:"crafting",time:200,value:750,components:[{materialName:"wire",quantity:1},{materialName:"amberInsulation",quantity:1}]},{name:"greenLaser",source:"crafting",time:20,yield:5,value:400,components:[{materialName:"polishedEmerald",quantity:1},{materialName:"insulatedWire",quantity:1},{materialName:"lamp",quantity:1}]},{name:"diamondCutter",source:"crafting",time:30,value:5e3,components:[{materialName:"steelPlate",quantity:1},{materialName:"polishedDiamond",quantity:5}]},{name:"motherboard",source:"crafting",time:1800,value:17e3,components:[{materialName:"silicon",quantity:3},{materialName:"circuit",quantity:3},{materialName:"goldBar",quantity:1}]},{name:"solidPropellant",source:"crafting",time:1200,value:27e3,components:[{materialName:"rubber",quantity:3},{materialName:"aluminumBar",quantity:10}]},{name:"accumulator",source:"crafting",time:180,value:9e3,components:[{materialName:"sodium",quantity:20},{materialName:"sulfur",quantity:20}]},{name:"solarPanel",source:"crafting",time:60,value:69e3,components:[{materialName:"rubber",quantity:1},{materialName:"silicon",quantity:10},{materialName:"glass",quantity:50}]},{name:"silicon",source:"chemicalMining",time:600,yield:5,value:100},{name:"sulfur",source:"chemicalMining",time:600,yield:5,value:100},{name:"sodium",source:"chemicalMining",time:600,yield:5,value:100},{name:"oil",source:"oilPumping",value:21},{name:"water",source:"waterCollection",value:5},{name:"tree",source:"greenhouse",time:1800,yield:10,value:193,components:[{materialName:"treeSeed",quantity:1},{materialName:"water",quantity:10}]},{name:"liana",source:"greenhouse",time:1800,components:[{materialName:"lianaSeed",quantity:1},{materialName:"water",quantity:20}]},{name:"grape",source:"greenhouse",time:1800,yield:2,components:[{materialName:"grapeSeed",quantity:1},{materialName:"water",quantity:15}]},{name:"treeSeed",source:"shop",value:20},{name:"lianaSeed",source:"shop",value:1e3},{name:"grapeSeed",source:"shop",value:1200},{name:"cleanWater",source:"chemistry",time:600,value:1200,components:[{materialName:"water",quantity:1},{materialName:"flask",quantity:1}]},{name:"rubber",source:"chemistry",time:1800,value:4e3,yield:2,components:[{materialName:"liana",quantity:1}]},{name:"sulfuricAcid",source:"chemistry",time:1800,value:3500,components:[{materialName:"cleanWater",quantity:1},{materialName:"sulfur",quantity:2}]},{name:"ethanol",source:"chemistry",time:1800,value:4200,components:[{materialName:"aluminumBottle",quantity:1},{materialName:"grape",quantity:2}]},{name:"refinedOil",source:"chemistry",time:1800,value:16500,components:[{materialName:"flask",quantity:1},{materialName:"hydrogen",quantity:10},{materialName:"oil",quantity:10}]},{name:"plastic",source:"chemistry",time:600,value:4e4,components:[{materialName:"refinedOil",quantity:1},{materialName:"coal",quantity:50},{materialName:"greenLaser",quantity:1}]},{name:"hydrogen",source:"chemistry",time:900,value:400,yield:2,byproducts:[{materialName:"oxygen",quantity:1}],components:[{materialName:"cleanWater",quantity:1}]},{name:"oxygen",source:"hydrogen",value:800},{name:"polishedAmber",source:"jewelCrafting",time:30,value:70,components:[{materialName:"amber",quantity:5}]},{name:"polishedEmerald",source:"jewelCrafting",time:30,value:160,components:[{materialName:"emerald",quantity:5}]},{name:"amberBracelet",source:"jewelCrafting",time:120,value:280,components:[{materialName:"polishedAmber",quantity:1},{materialName:"silverBar",quantity:1}]},{name:"emeraldRing",source:"jewelCrafting",time:300,value:450,components:[{materialName:"polishedEmerald",quantity:1},{materialName:"goldBar",quantity:1}]},{name:"polishedTopaz",source:"jewelCrafting",time:60,value:70,components:[{materialName:"topaz",quantity:5}]},{name:"polishedRuby",source:"jewelCrafting",time:60,value:75,components:[{materialName:"ruby",quantity:5}]},{name:"polishedDiamond",source:"jewelCrafting",time:60,value:90,components:[{materialName:"diamond",quantity:5}]},{name:"polishedSapphire",source:"jewelCrafting",time:60,value:80,components:[{materialName:"sapphire",quantity:5}]},{name:"polishedAmethyst",source:"jewelCrafting",time:60,value:90,components:[{materialName:"amethyst",quantity:5}]},{name:"mayaCalendar",source:"jewelCrafting",time:120,components:[{materialName:"goldBar",quantity:10},{materialName:"silverBar",quantity:2}]},{name:"hairComb",source:"jewelCrafting",time:120,components:[{materialName:"silverBar",quantity:1},{materialName:"polishedAmethyst",quantity:15},{materialName:"polishedAlexandrite",quantity:10}]}]},cd49:function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("097d");var i,n,r,o=t("2b0e"),m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app",attrs:{id:"app"}},[t("inventory"),t("demands"),t("requirements")],1)},u=[],l=t("c665"),s=t("dc0a"),c=t("aa9a"),d=t("d328"),p=t("11d9"),y=t("9ab4"),v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"inventory column"},[t("h2",[e._v("Inventory")]),t("ul",{staticClass:"inventory-list list-of-materials"},e._l(e.gameData.materials,function(e){return t("inventory-row",{key:e.name,attrs:{material:e}})}))])},f=[],b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",{staticClass:"list-of-materials-item",class:{"material-demanded":e.isThisMaterialDemanded,"material-required":e.isThisMaterialRequired,"material-requirement-satisfied":e.isThisMaterialRequirementSatisfied}},[t("label",{attrs:{for:"inventory-"+e.material.name}},[e._v(e._s(e.material.name))]),t("el-input-number",{attrs:{controls:!1,id:"inventory-"+e.material.name,min:0},model:{value:e.inventoryQuantity,callback:function(a){e.inventoryQuantity=a},expression:"inventoryQuantity"}})],1)},h=[],g=(t("7f7f"),t("7c62")),q=t.n(g),j=t("65d9"),O=t.n(j),N=t("60a3"),D=t("4bb5"),w=t("a322"),_=(t("7514"),t("ac4d"),t("8a81"),t("ac6a"),t("2f62")),x=t("2ef0"),k=function(){function e(a){Object(l["a"])(this,e),this.material=a.material,this.quantity=a.quantity}return Object(c["a"])(e,[{key:"isDemanded",get:function(){return this.quantity>0}},{key:"rawQuantity",get:function(){return this.quantity}},{key:"unadjustedQuantity",get:function(){return this.quantity}}]),e}(),I=function(){function e(a,t,i){Object(l["a"])(this,e),this.requiredBy=new Array,this.material=a,this.inventoryItem=t,i&&this.requiredBy.push(i)}return Object(c["a"])(e,[{key:"getSecondsToMake",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(this.material.time)return this.yieldCount*this.material.time/e}},{key:"isDemanded",get:function(){return void 0!=this.requiredBy.filter(function(e){return e instanceof k&&e.unadjustedQuantity>0})}},{key:"isRequired",get:function(){return void 0!=this.requiredBy.filter(function(a){return a instanceof e&&a.unadjustedQuantity>0})}},{key:"isSatisfied",get:function(){return 0==this.quantity}},{key:"materialYield",get:function(){return this.material.yield||1}},{key:"yieldCount",get:function(){return Math.ceil(this.quantity/this.materialYield)}},{key:"displayQuantity",get:function(){return this.quantity*this.materialYield}},{key:"unadjustedQuantity",get:function(){var e=this,a=0,t=!0,i=!1,n=void 0;try{for(var r,o=this.requiredBy[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var m=r.value;if(m.material.name==this.material.name)a+=m.unadjustedQuantity;else{var u=m.material.components;if(u){var l=u.find(function(a){return a.materialName==e.material.name});l&&(a+=l.quantity*m.unadjustedQuantity)}}}}catch(e){i=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}return a}},{key:"rawQuantity",get:function(){var e=this,a=0,t=!0,i=!1,n=void 0;try{for(var r,o=this.requiredBy[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var m=r.value;if(m.material.name==this.material.name)a+=m.quantity;else{var u=m.material.components;if(u){var l=u.find(function(a){return a.materialName==e.material.name});l&&(a+=l.quantity*m.quantity)}}}}catch(e){i=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(i)throw n}}return a}},{key:"quantity",get:function(){var e=this.rawQuantity-this.inventoryItem.quantity;return e<0?0:Math.ceil(e/this.materialYield)}}]),e}();o["default"].use(_["b"]);var S,B,C,R;function Q(e,a,t){var i=a.material.components;if(i){var n=!0,r=!1,m=void 0;try{for(var u,l=i[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){var s=u.value,c=t[s.materialName].material;e[s.materialName]||o["default"].set(e,s.materialName,new I(c,t[s.materialName])),e[s.materialName].requiredBy.find(function(e){return e.material.name==a.material.name})||e[s.materialName].requiredBy.push(e[a.material.name]),Q(e,{material:c,quantity:a.quantity*s.quantity},t)}}catch(e){r=!0,m=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw m}}}}(function(e){e["getActiveRequirements"]="getActiveRequirements",e["getActiveDemands"]="getActiveDemands"})(S||(S={})),function(e){e["setGameData"]="setGameData",e["setInventory"]="setInventory",e["setInventoryItemQuantity"]="setInventoryItemQuantity",e["updateDemand"]="updateDemand"}(B||(B={})),function(e){e["demands"]="demands",e["inventory"]="inventory",e["gameData"]="gameData"}(C||(C={})),function(e){e["populateGameData"]="populateGameData",e["populateInitialInventory"]="populateInitialInventory"}(R||(R={}));var M,z,A,E,T=new _["b"].Store({state:{inventory:{},demands:{},gameData:{},requirements:{}},getters:(i={},Object(w["a"])(i,S.getActiveDemands,function(e){return Object(x["keyBy"])(Object(x["filter"])(e.demands,function(e){return void 0!==e&&e.isDemanded}),function(e){return e.material.name})}),Object(w["a"])(i,S.getActiveRequirements,function(e){return Object(x["keyBy"])(Object(x["filter"])(e.requirements,function(e){return void 0!==e&&e.isRequired&&!e.isSatisfied}),function(e){return e.material.name})}),i),mutations:(n={},Object(w["a"])(n,B.setGameData,function(e,a){o["default"].set(e,C.gameData,a)}),Object(w["a"])(n,B.setInventory,function(e,a){o["default"].set(e,C.inventory,a)}),Object(w["a"])(n,B.setInventoryItemQuantity,function(e,a){e.inventory[a.material.name]?o["default"].set(e.inventory[a.material.name],"quantity",a.quantity):o["default"].set(e.inventory,a.material.name,a)}),Object(w["a"])(n,B.updateDemand,function(e,a){if(!a||!a.material.name||void 0===a.quantity)throw new TypeError("newDemand may not be undefined.");var t={};e.demands[a.material.name]?o["default"].set(e.demands[a.material.name],"quantity",a.quantity):o["default"].set(e.demands,a.material.name,new k(a));var i=function(a){var i=e.demands[a];if(!i)return"continue";if(t[i.material.name]){var n=t[i.material.name].requiredBy.find(function(e){return e.material.name==i.material.name&&e instanceof k});n?o["default"].set(n,"quantity",i.quantity):t[i.material.name].requiredBy.push(i)}else o["default"].set(t,i.material.name,new I(i.material,e.inventory[i.material.name],e.demands[i.material.name]));Q(t,i,e.inventory)};for(var n in e.demands)i(n);e.requirements=t}),n),actions:(r={},Object(w["a"])(r,R.populateGameData,function(e){var a=t("e8d0"),i=t("b33a"),n={},r=!0,m=!1,u=void 0;try{for(var l,s=i[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value;o["default"].set(n,c.name,c)}}catch(e){m=!0,u=e}finally{try{r||null==s.return||s.return()}finally{if(m)throw u}}var d=new Array,p=!0,y=!1,v=void 0;try{for(var f,b=a[Symbol.iterator]();!(p=(f=b.next()).done);p=!0){var h=f.value;o["default"].set(d,h.area,h)}}catch(e){y=!0,v=e}finally{try{p||null==b.return||b.return()}finally{if(y)throw v}}var g={materials:n,mines:d};e.commit(B.setGameData,g)}),Object(w["a"])(r,R.populateInitialInventory,function(e){var a={};for(var t in e.state.gameData.materials)a[t]={material:e.state.gameData.materials[t],quantity:0};e.commit(B.setInventory,a)}),r)}),G=t("4355"),P=t("5c96"),$=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(c["a"])(a,[{key:"isThisMaterialDemanded",get:function(){var e=this.activeDemands[this.material.name];return!!e&&e.isDemanded}},{key:"isThisMaterialRequired",get:function(){var e=this.activeRequirements[this.material.name];return!!e&&e.isRequired}},{key:"isThisMaterialRequirementSatisfied",get:function(){var e=this.activeRequirements[this.material.name];return void 0!==e&&e.isRequired&&0==e.quantity}},{key:"inventoryQuantity",get:function(){return this.inventory[this.material.name].quantity},set:function(e){this.setInventoryItemQuantity({material:this.material,quantity:e||0})}}]),Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(N["b"])({type:Object,required:!0}),y["b"]("design:type","function"===typeof(M="undefined"!==typeof q.a&&q.a)&&M||Object)],$.prototype,"material",void 0),y["a"]([Object(D["b"])(S.getActiveRequirements),y["b"]("design:type","function"===typeof(z="undefined"!==typeof G["RequirementsStore"]&&G["RequirementsStore"])&&z||Object)],$.prototype,"activeRequirements",void 0),y["a"]([Object(D["b"])(S.getActiveDemands),y["b"]("design:type","function"===typeof(A="undefined"!==typeof G["DemandsStore"]&&G["DemandsStore"])&&A||Object)],$.prototype,"activeDemands",void 0),y["a"]([Object(D["c"])(B.setInventoryItemQuantity),y["b"]("design:type",Function)],$.prototype,"setInventoryItemQuantity",void 0),y["a"]([Object(D["d"])(C.inventory),y["b"]("design:type","function"===typeof(E="undefined"!==typeof G["InventoryStore"]&&G["InventoryStore"])&&E||Object)],$.prototype,"inventory",void 0),$=y["a"]([O()({components:{"el-input-number":P["InputNumber"]}})],$);var F=$,W=F,Y=t("2877"),J=Object(Y["a"])(W,b,h,!1,null,null,null);J.options.__file="InventoryRow.vue";var V,L=J.exports,H=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["d"])(C.gameData),y["b"]("design:type","function"===typeof(V="undefined"!==typeof G["GameDataStore"]&&G["GameDataStore"])&&V||Object)],H.prototype,"gameData",void 0),H=y["a"]([O()({components:{InventoryRow:L}})],H);var K=H,U=K,X=Object(Y["a"])(U,v,f,!1,null,null,null);X.options.__file="Inventory.vue";var Z,ee=X.exports,ae=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"demands column"},[t("h2",[e._v("Demands")]),t("demand-input"),t("ul",{staticClass:"demands-list list-of-materials"},e._l(e.activeDemands,function(e){return t("demand-row",{key:e.name,attrs:{demand:e}})}))],1)},te=[],ie=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"demand-input"},[t("el-select",{attrs:{filterable:"","value-key":"name"},model:{value:e.newDemandMaterial,callback:function(a){e.newDemandMaterial=a},expression:"newDemandMaterial"}},e._l(e.gameData.materials,function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e}})})),t("el-input-number",{attrs:{controls:!1,min:1},model:{value:e.newDemandQuantity,callback:function(a){e.newDemandQuantity=a},expression:"newDemandQuantity"}}),t("el-button",{attrs:{disabled:!e.inputIsValid,icon:"el-icon-plus",type:"primary",circle:""},on:{click:e.addDemand}})],1)},ne=[];(function(e){e["ChemicalMining"]="chemicalMining",e["Chemistry"]="chemistry",e["Crafting"]="crafting",e["Enrichment"]="enrichment",e["Greenhouse"]="greenhouse",e["Hydrogen"]="hydrogen",e["JewelCrafting"]="jewelCrafting",e["Mining"]="mining",e["OilPumping"]="oilPumping",e["Shop"]="shop",e["Smelting"]="smelting",e["WaterCollection"]="waterCollection"})(Z||(Z={}));var re,oe=Z,me=function(e){function a(){var e;return Object(l["a"])(this,a),e=Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments)),e.newDemandMaterial={},e.newDemandQuantity=1,e}return Object(c["a"])(a,[{key:"addDemand",value:function(){this.updateDemand({material:this.newDemandMaterial,quantity:this.newDemandQuantity}),this.clearDemandInput()}},{key:"clearDemandInput",value:function(){this.newDemandMaterial={},this.newDemandQuantity=1}},{key:"inputIsValid",get:function(){return!!(this.newDemandMaterial&&this.newDemandQuantity>0)}},{key:"cascadedMaterials",get:function(){var e=[],a={},t=0;for(var i in oe)a[oe[i]]=t,e[t++]={value:oe[i],label:i,children:[]};for(var n in this.gameData.materials){var r=this.gameData.materials[n],o=a[r.source];e[o].children.push({value:n,label:n})}return e}}]),Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["c"])(B.updateDemand),y["b"]("design:type",Function)],me.prototype,"updateDemand",void 0),y["a"]([Object(D["d"])(C.gameData),y["b"]("design:type","function"===typeof(re="undefined"!==typeof G["GameDataStore"]&&G["GameDataStore"])&&re||Object)],me.prototype,"gameData",void 0),me=y["a"]([O()({components:{"el-select":P["Select"],"el-option":P["Option"],"el-input-number":P["InputNumber"],"el-button":P["Button"],"el-cascader":P["Cascader"]}})],me);var ue=me,le=ue,se=Object(Y["a"])(le,ie,ne,!1,null,null,null);se.options.__file="DemandInput.vue";var ce,de=se.exports,pe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",{staticClass:"list-of-materials-item"},[t("span",{staticClass:"demand-name"},[e._v(e._s(e.demand.material.name))]),t("el-input-number",{staticClass:"demand-quantity",attrs:{controls:!1,id:"demand-"+e.demand.material.name,min:0},model:{value:e.demandQuantity,callback:function(a){e.demandQuantity=a},expression:"demandQuantity"}}),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger",circle:""},on:{click:e.removeDemand}})],1)},ye=[],ve=t("c93e"),fe=t("5526"),be=t.n(fe),he=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(c["a"])(a,[{key:"removeDemand",value:function(){this.updateDemand(Object(ve["a"])({},this.demand,{quantity:0})),this.$emit("remove-demand",this.demand)}},{key:"demandQuantity",get:function(){return this.demand.quantity},set:function(e){this.updateDemand(Object(ve["a"])({},this.demand,{quantity:e||1})),this.$emit("update-demand-quantity",this.demand)}}]),Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["c"])(B.updateDemand),y["b"]("design:type",Function)],he.prototype,"updateDemand",void 0),y["a"]([Object(N["b"])({type:Object,required:!0}),y["b"]("design:type","function"===typeof(ce="undefined"!==typeof be.a&&be.a)&&ce||Object)],he.prototype,"demand",void 0),he=y["a"]([Object(N["a"])({components:{"el-input-number":P["InputNumber"],"el-button":P["Button"]}})],he);var ge=he,qe=ge,je=Object(Y["a"])(qe,pe,ye,!1,null,null,null);je.options.__file="DemandRow.vue";var Oe,Ne=je.exports,De=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["b"])(S.getActiveDemands),y["b"]("design:type","function"===typeof(Oe="undefined"!==typeof _["Dictionary"]&&_["Dictionary"])&&Oe||Object)],De.prototype,"activeDemands",void 0),De=y["a"]([O()({components:{DemandInput:de,DemandRow:Ne}})],De);var we=De,_e=we,xe=Object(Y["a"])(_e,ae,te,!1,null,null,null);xe.options.__file="Demands.vue";var ke,Ie=xe.exports,Se=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"requirements column"},e._l(e.materialSources,function(e){return t("requirement-source-block",{key:e,attrs:{source:e}})}))},Be=[],Ce=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h3",[e._v(e._s(e.source))]),t("ul",e._l(e.requirementsForThisSource,function(e){return t("requirement-row",{key:e.material.name,attrs:{requirement:e}})}))])},Re=[],Qe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("li",[e._v(e._s(e.requirement.material.name)+": "+e._s(e.requirement.displayQuantity)+e._s(e.timeString))])},Me=[],ze=(t("6b54"),function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(c["a"])(a,[{key:"timeString",get:function(){var e=this.requirement.getSecondsToMake();if(!e)return"";var a=t("8311"),i=new a(1e3*e);return" at "+i.toString("condensed")}}]),Object(s["a"])(a,e),a}(o["default"]));y["a"]([Object(N["b"])({type:Object,required:!0}),y["b"]("design:type","function"===typeof(ke="undefined"!==typeof I&&I)&&ke||Object)],ze.prototype,"requirement",void 0),ze=y["a"]([O.a],ze);var Ae=ze,Ee=Ae,Te=Object(Y["a"])(Ee,Qe,Me,!1,null,null,null);Te.options.__file="RequirementRow.vue";var Ge,Pe,$e=Te.exports,Fe=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(c["a"])(a,[{key:"requirementsForThisSource",get:function(){var e=this;return Object(x["filter"])(this.activeRequirements,function(a){return a.material.source==e.source})}}]),Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["b"])(S.getActiveRequirements),y["b"]("design:type","function"===typeof(Ge="undefined"!==typeof x["Dictionary"]&&x["Dictionary"])&&Ge||Object)],Fe.prototype,"activeRequirements",void 0),y["a"]([Object(N["b"])({type:String,required:!0}),y["b"]("design:type","function"===typeof(Pe="undefined"!==typeof oe&&oe)&&Pe||Object)],Fe.prototype,"source",void 0),Fe=y["a"]([O()({components:{RequirementRow:$e}})],Fe);var We=Fe,Ye=We,Je=Object(Y["a"])(Ye,Ce,Re,!1,null,null,null);Je.options.__file="RequirementSourceBlock.vue";var Ve,Le=Je.exports,He=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(c["a"])(a,[{key:"materialSources",get:function(){return Object(x["uniq"])(Object(x["values"])(Object(x["mapValues"])(this.activeRequirements,function(e){return e.material.source})))}}]),Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["b"])(S.getActiveRequirements),y["b"]("design:type","function"===typeof(Ve="undefined"!==typeof _["Dictionary"]&&_["Dictionary"])&&Ve||Object)],He.prototype,"activeRequirements",void 0),He=y["a"]([O()({components:{RequirementSourceBlock:Le}})],He);var Ke=He,Ue=Ke,Xe=Object(Y["a"])(Ue,Se,Be,!1,null,null,null);Xe.options.__file="Requirements.vue";var Ze=Xe.exports,ea=function(e){function a(){return Object(l["a"])(this,a),Object(d["a"])(this,Object(p["a"])(a).apply(this,arguments))}return Object(c["a"])(a,[{key:"created",value:function(){this.populateGameData(),this.populateInitialInventory()}}]),Object(s["a"])(a,e),a}(o["default"]);y["a"]([Object(D["a"])("populateGameData"),y["b"]("design:type",Function)],ea.prototype,"populateGameData",void 0),y["a"]([Object(D["a"])("populateInitialInventory"),y["b"]("design:type",Function)],ea.prototype,"populateInitialInventory",void 0),ea=y["a"]([O()({components:{Inventory:ee,Demands:Ie,Requirements:Ze}})],ea);var aa=ea,ta=aa,ia=(t("5c0b"),Object(Y["a"])(ta,m,u,!1,null,null,null));ia.options.__file="App.vue";var na=ia.exports,ra=(t("f5df"),t("0fae"),t("4897")),oa=t.n(ra),ma=t("b2d6"),ua=t.n(ma);oa.a.use(ua.a),o["default"].config.productionTip=!1,new o["default"]({store:T,render:function(e){return e(na)}}).$mount("#app")},e8d0:function(e){e.exports=[{area:1,provides:{coal:100}},{area:2,provides:{coal:70,copper:30}},{area:3,provides:{coal:59,copper:28,iron:9,amber:2,gold:1}},{area:4,provides:{coal:54,copper:32,iron:10,amber:2,gold:1}},{area:5,provides:{coal:48,copper:36,iron:11,amber:2,gold:1}},{area:6,provides:{coal:43,copper:40,iron:12,amber:2,gold:1}},{area:7,provides:{coal:38,copper:45,iron:13,amber:2,gold:1}},{area:8,provides:{coal:33,copper:49,iron:14,amber:1,gold:2}},{area:9,provides:{coal:27,copper:53,iron:15,amber:1,gold:2}},{area:10,provides:{coal:22,copper:57,iron:16,amber:1,gold:2}},{area:11,provides:{coal:17,copper:61,iron:17,amber:1,gold:2}},{area:12,provides:{coal:12,copper:65,iron:18,amber:1,gold:2}},{area:13,provides:{copper:100}},{area:14,provides:{copper:70,iron:30}},{area:15,provides:{copper:58,iron:19,coal:7,amber:9,aluminum:3,silver:2}},{area:16,provides:{copper:52,iron:19,amber:15,coal:4,aluminum:6,silver:2,gold:2}},{area:17,provides:{copper:46,iron:19,amber:20,coal:4,aluminum:7,silver:1.5,gold:1.5}},{area:18,provides:{copper:40,iron:18,amber:25,coal:4.5,aluminum:8,silver:1.5,gold:1.5}},{area:19,provides:{copper:35,iron:18,amber:30,coal:5,aluminum:10,silver:1.5,gold:1.5}},{area:20,provides:{copper:29,iron:18,amber:35,aluminum:11,coal:3.5,silver:1,gold:1}},{area:21,provides:{copper:23,iron:18,amber:40,aluminum:13,coal:3,silver:1,gold:1}},{area:22,provides:{copper:17,iron:17,amber:45,aluminum:15,coal:2.5,silver:2,gold:.5}},{area:23,provides:{copper:11,iron:17,amber:50,aluminum:16,coal:1,silver:3,gold:.5}},{area:24,provides:{copper:5,iron:17,amber:55,aluminum:18,coal:1,silver:4}},{area:25,provides:{amber:100}},{area:26,provides:{amber:70,aluminum:30}},{area:27,provides:{iron:19,amber:50,aluminum:26,silver:4}},{area:28,provides:{iron:20,amber:45,aluminum:30,silver:5}},{area:29,provides:{iron:21,amber:40,aluminum:33,silver:5}},{area:30,provides:{iron:22,amber:35,aluminum:36,silver:6}},{area:31,provides:{iron:23,amber:30,aluminum:40,silver:6}},{area:32,provides:{iron:24,amber:25,aluminum:43,silver:7}},{area:33,provides:{iron:25,amber:19,aluminum:46,silver:8}},{area:34,provides:{iron:26,amber:15,aluminum:50,silver:8}},{area:35,provides:{iron:27,aluminum:53,amber:11.5,silver:7.5}},{area:36,provides:{iron:28,aluminum:56,amber:8,silver:6}},{area:37,provides:{aluminum:100}},{area:38,provides:{iron:30,aluminum:70}},{area:39,provides:{iron:25,aluminum:50,silver:11,gold:10,emerald:4}},{area:40,provides:{iron:22,aluminum:45,silver:11,gold:15,emerald:6}},{area:41,provides:{iron:20,aluminum:40,silver:12,gold:20,emerald:8}},{area:42,provides:{iron:17,aluminum:35,silver:12,gold:25,emerald:10}},{area:43,provides:{iron:15,aluminum:30,silver:13,gold:30,emerald:11}},{area:44,provides:{iron:23,aluminum:25,silver:14,gold:35,emerald:13}},{area:45,provides:{iron:10,aluminum:19,silver:14,gold:40,emerald:15}},{area:46,provides:{iron:8,aluminum:15,silver:15,gold:45,emerald:17}},{area:47,provides:{silver:15,gold:50,emerald:19,iron:5,aluminum:10}},{area:48,provides:{silver:16,gold:55,emerald:21,iron:3,aluminum:5}},{area:49,provides:{gold:100}},{area:50,provides:{gold:70,emerald:30}},{area:51,provides:{silver:14,gold:50,emerald:25}},{area:52,provides:{silver:12,gold:45,emerald:27}},{area:53,provides:{silver:11,gold:40,emerald:28}},{area:54,provides:{gold:35,emerald:30,ruby:12}},{area:55,provides:{gold:30,emerald:31,ruby:15}},{area:56,provides:{gold:25,emerald:32,ruby:17,diamond:11}},{area:57,provides:{gold:19,emerald:34,ruby:20,diamond:13}},{area:58,provides:{gold:15,emerald:35,ruby:22,diamond:15}},{area:59,provides:{emerald:37,ruby:25,diamond:16}},{area:60,provides:{emerald:38,ruby:27,diamond:18}},{area:61,provides:{emerald:100}},{area:62,provides:{emerald:70,ruby:30}},{area:63,provides:{emerald:33,topaz:13,ruby:31,diamond:16}},{area:64,provides:{emerald:30,topaz:15,ruby:32,diamond:15}},{area:65,provides:{emerald:26,topaz:16,ruby:33,diamond:13}},{area:66,provides:{emerald:23,topaz:18,ruby:34,diamond:11}},{area:67,provides:{emerald:20,ruby:35,topaz:20}},{area:68,provides:{emerald:16,topaz:21,ruby:35,sapphire:11}},{area:69,provides:{emerald:13,topaz:23,ruby:36,sapphire:13}},{area:70,provides:{topaz:25,ruby:37,sapphire:15}},{area:71,provides:{topaz:26,ruby:38,sapphire:16}},{area:72,provides:{ruby:39,topaz:28,sapphire:18}},{area:73,provides:{ruby:100}},{area:74,provides:{ruby:70,topaz:30}},{area:75,provides:{topaz:25,ruby:33,sapphire:16,amethyst:15,alexandrite:4,titanium:2,uranium:2,platinum:1}},{area:76,provides:{topaz:22,ruby:30,sapphire:15,amethyst:17,alexandrite:6,titanium:4,uranium:3,platinum:1}},{area:77,provides:{topaz:200,ruby:26,sapphire:14,amethyst:20,alexandrite:8,titanium:7,uranium:3,platinum:1}},{area:78,provides:{topaz:17,ruby:23,sapphire:13,amethyst:22,alexandrite:11,titanium:8,uranium:4,platinum:1}},{area:79,provides:{topaz:15,ruby:20,sapphire:12,amethyst:25,alexandrite:13,titanium:9,uranium:4,platinum:1}},{area:80,provides:{topaz:12,ruby:16,amethyst:27,sapphire:11,alexandrite:15,titanium:11,uranium:5,platinum:2}},{area:81,provides:{topaz:6,ruby:13,amethyst:30,sapphire:10,alexandrite:18,titanium:13,uranium:7,platinum:2}},{area:82,provides:{topaz:4,ruby:11,amethyst:32,sapphire:7,alexandrite:20,titanium:15,uranium:8,platinum:2}},{area:83,provides:{topaz:3,ruby:6,amethyst:35,sapphire:6,alexandrite:22,titanium:16,uranium:9,platinum:2}},{area:84,provides:{topaz:2,ruby:3,amethyst:37,sapphire:2,alexandrite:24,titanium:18,uranium:9,platinum:2}},{area:85,provides:{amethyst:100}},{area:86,provides:{amethyst:70,alexandrite:30}},{area:87,provides:{amethyst:36,titanium:26,alexandrite:25,platinum:9,uranium:2}},{area:88,provides:{amethyst:35,titanium:30,alexandrite:24,platinum:9,uranium:2}},{area:89,provides:{amethyst:33,titanium:33,alexandrite:23,platinum:9,uranium:1}},{area:90,provides:{amethyst:31,titanium:36,alexandrite:22,platinum:8,uranium:1}},{area:91,provides:{amethyst:30,titanium:40,alexandrite:22,platinum:7,uranium:1}},{area:92,provides:{amethyst:28,titanium:43,alexandrite:21,platinum:6,uranium:1}},{area:93,provides:{amethyst:26,titanium:46,alexandrite:20,platinum:6,uranium:1}},{area:94,provides:{amethyst:25,titanium:50,alexandrite:19,platinum:4,uranium:1}},{area:95,provides:{amethyst:23,titanium:53,alexandrite:18,platinum:4,uranium:1}},{area:96,provides:{amethyst:21,titanium:56,alexandrite:17,platinum:3,uranium:1}},{area:97,provides:{obsidian:100}},{area:98,provides:{obsidian:70,diamond:30}},{area:99,provides:{obsidian:50,diamond:12,iron:11}},{area:100,provides:{obsidian:45,iron:17,diamond:11}},{area:101,provides:{obsidian:40,iron:23}},{area:102,provides:{obsidian:35,iron:29}},{area:103,provides:{iron:35,obsidian:30}},{area:104,provides:{iron:40,obsidian:25,coal:11}},{area:105,provides:{iron:46,obsidian:19,coal:13,silver:11}},{area:106,provides:{iron:52,coal:15,obsidian:15,silver:12}},{area:107,provides:{iron:58,coal:16,silver:14}},{area:108,provides:{iron:64,coal:18,silver:15}}]}});
//# sourceMappingURL=app.fa7cc76b.js.map