define(["url","core/helper"],function(a){var b=Backbone.Model.extend({initialize:function(){},getIndividuationData:function(b){$.ajax({url:a.getIndividuationData(this.get("reportId"),this.get("compId")),type:"get",success:function(a){var c=a.data;!c&&(c={}),!c.appearance&&(c.appearance={}),(void 0===c.appearance.isShowInds||null===c.appearance.isShowInds)&&(c.appearance.isShowInds=!0),b(c)}})},saveIndividuationInfo:function(b,c){var d=this.get("compId");$.ajax({url:a.getIndividuationData(this.get("reportId"),d),type:"POST",data:b,success:function(){c()}})}});return b});