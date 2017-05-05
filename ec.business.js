/**
 * Last  Update:2012-1-22
 */

ec.debug = false;

ol.load.define("jquery" , [{mark:"jquery",uri: "base/jquery-1.4.4.min.js",type: "js"}]);
ol.load.define("jquery.form" , ["jquery",{mark:"jquery.form",uri: "base/jquery.form-2.49.js",type: "js",	charset: "utf-8",depend:true}]);
ol.load.define("jquery.bgiframe" , [{mark:"jquery.bgiframe",uri: "base/jquery.bgiframe.min.js",type: "js",	charset: "utf-8",depend:true,loadType:"lazy"}]);
ol.load.define("jquery.autocomplete" , [{mark:"jquery.autocomplete",uri: "jquery.autocomplete/jquery.autocomplete.hack-min.js",type: "js",	charset: "utf-8",depend:true}]);
ol.load.define("My97DatePicker" , [{mark:"My97DatePicker",uri: "My97DatePicker/WdatePicker.js",type: "js",charset: "utf-8",depend:false , onload : function(){
	WdatePicker();
}}]);
ol.load.define("jquery.movebar" , [{uri: "jquery.movebar/movebar.min.js",type: "js"}]);
ol.load.define("ec.aes" , [{uri: "aes/aes.js",type: "js",depend:true},{uri: "aes/aesUtil.js",type: "js",depend:true},{uri: "aes/pbkdf2.js",type: "js",depend:true}]);
ol.load.define("ec.dh" , [{uri: "dh/bigInt.min.js",type: "js",depend:true}]);
ol.load.define("ec.rc4" , [{uri: "crypt/rc4.js",type: "js",depend:true}]);
ol.load.define("uploadify" , [
	"jquery",
	"swfobject",
	{uri: "uploadify/jquery.uploadify.v2.1.4.min.js",type:"js",depend:true},
	{uri: "uploadify/uploadify.customize.css",type:"css"}
]);
ol.load.define("ec.pager" , [
	"jquery",
	{uri: "ec.pager/pager-min.js",type:"js",charset: "gbk",depend:true}
]);
ol.load.define("ajax" , [
	"jquery.form",
	{mark:"ajax",uri: "base/ajax.js",type: "js",	charset: "utf-8",depend:true}
]);
ol.load.define("ajaxcdr" , [
	"jquery.form",
	{mark:"ajaxcdr",uri: "base/ajaxcdr.js?20121031",type: "js",	charset: "utf-8",depend:true}
]);
ol.load.define("ec.box" , [
	"jquery",
	{mark:"jquery.bgiframe",uri: "base/jquery.bgiframe.min.js",type: "js",charset: "utf-8",depend:true,loadType:null},
	{uri: "ec.box/box-min.js",type: "js",depend:true}
]);
ol.load.define("ec.tab" , [
	"jquery",
	{uri: "ec.tab/tab-min.js",type: "js",charset:"utf-8",depend:true}
]);

ol.load.define("jquery.float" , [
	"jquery",
	{uri: "jquery.float/float.min.js",type: "js",charset:"gbk",depend:true}
]);

ol.load.define("cloud-zoom" , [
	{uri : "cloud-zoom.1.0.2/cloud-zoom.1.0.2-hack-min.js" , type :"js"}
]);
ol.load.define("jqzoom" , [
	"jquery",
	{uri : "jqzoom-2.3/js/jquery.jqzoom-core.js" , type :"js", depend:true},
	{uri : "jqzoom-2.3/css/jquery.jqzoom.css", type : "css"}
]);


ol.load.define("RaterStar" , [
	{uri : "RaterStar/rater-star.js" , type :"js"}
]);

ol.load.define("ec.slider" , [
	{uri : "slider-min.js" , type :"js"}
]);

ol.load.define("ec.linkSelect.region" , [
	"jquery",
	{uri: "linkSelect/region-min.js?20161011",type: "js",charset:"utf-8",depend:true}
]);

ol.load.define("jquery.rotate" , [
	"jquery",
	{uri: "jquery.rotate/jQueryRotate-min.js",type: "js"}
]);
ol.load.define("jquery.fixed" , [
	"jquery",
	{uri: "jquery.fixed/fixed.js",type: "js"}
]);

if(jQuery)
{
	ol._setLoadStatus("jquery" , "complete");
}



ec.ready(function(){
})
