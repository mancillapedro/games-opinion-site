"use strict";(self["webpackChunkgames_opinion_site"]=self["webpackChunkgames_opinion_site"]||[]).push([[275],{3770:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"OpinionsManageView"}},[t.showEdit?e("router-view",{attrs:{index:t.indexOpinion},on:{volver:t.volver}}):e("table-manage-opinions",{attrs:{opinions:t.opinions},on:{eliminar:t.removeOpinion,editar:t.updateOpinion}})],1)},o=[],s=e(4367),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table-responsive-lg"},[e("h1",{staticClass:"text-center",domProps:{textContent:t._s("Administrando la Lista de Opiniones")}}),t.opinions[0]?e("table",{staticClass:"table table-borderless table-hover",attrs:{id:"TableManageOpinions"}},[e("thead",[e("tr",t._l(t.headTable,(function(n,i){return e("th",{key:i,attrs:{scope:"col"},domProps:{textContent:t._s(n)}})})),0)]),e("tbody",t._l(t.opinions,(function(n,i){return e("tr",{key:i},[e("th",{attrs:{scope:"row"},domProps:{textContent:t._s(i+1)}}),e("td",{domProps:{textContent:t._s(n.name)}}),e("td",{domProps:{textContent:t._s(n.game)}}),e("td",{domProps:{textContent:t._s(n.opinion)}}),e("td",{staticClass:"d-flex justify-content-around"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},domProps:{textContent:t._s("Eliminar")},on:{click:function(n){return t.eliminar(i)}}}),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},domProps:{textContent:t._s("Editar")},on:{click:function(n){return t.editar(i)}}})])])})),0)]):e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"},domProps:{textContent:t._s("No existen opiniones por administrar.")}})])},r=[],l={name:"TableManageOpinions",props:["opinions"],data:function(){return{headTable:["#","Persona","Juego","Opinion",""]}},methods:{eliminar:function(t){this.$emit("eliminar",t)},editar:function(t){this.$emit("editar",t)}}},p=l,d=e(1001),u=(0,d.Z)(p,a,r,!1,null,null,null),c=u.exports,m=e(4665),h={components:{TableManageOpinions:c},name:"OpinionsManageView",data:function(){return{showEdit:!1,indexOpinion:null}},computed:(0,s.Z)({},(0,m.rn)(["opinions"])),methods:{removeOpinion:function(t){confirm("¿Eliminar opinion?")&&this.$store.dispatch("removeOpinion",t)},updateOpinion:function(t){this.showEdit=!0,this.indexOpinion=t},volver:function(t){this.showEdit=!t}}},f=h,b=(0,d.Z)(f,i,o,!1,null,null,null),_=b.exports}}]);
//# sourceMappingURL=opinionsManageView-legacy.ab000b8e.js.map