(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">\r\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 3, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 19, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 44, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 51, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 69, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 78, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 87, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 97, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 102, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 106, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 110, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 114, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 126, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Suppliers:"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("supplier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t<div class=\"col-md-";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) == 1) {
output += "12";
;
}
else {
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) == 2) {
output += "6";
;
}
else {
output += "4";
;
}
;
}
output += "\">\r\n\t\t\t\t\t\t\t\t";
var t_5;
t_5 = t_4;
frame.set("organization", t_5, true);
if(frame.topLevel) {
context.setVariable("organization", t_5);
}
if(frame.topLevel) {
context.addExport("organization", t_5);
}
output += "\r\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "award.html", null, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
t_6.render(context.getVariables(), frame, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
output += t_7
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items")) {
output += "\r\n\t\t\t\t\t";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items");
frame.set("items", t_10, true);
if(frame.topLevel) {
context.setVariable("items", t_10);
}
if(frame.topLevel) {
context.addExport("items", t_10);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("items.html", false, "award.html", null, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
t_11.render(context.getVariables(), frame, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
output += t_12
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 149, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 153, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents")) {
output += "\r\n\t\t\t\t\t";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents");
frame.set("documents", t_15, true);
if(frame.topLevel) {
context.setVariable("documents", t_15);
}
if(frame.topLevel) {
context.addExport("documents", t_15);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "award.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 168, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 172, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["awards.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"awards\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3>\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Awards"])), env.opts.autoescape);
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "awards");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("award", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t";
env.getTemplate("award.html", false, "awards.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\r\n\t\t";
})});
}
}
frame = frame.pop();
output += "\r\n\t</div>\r\n</section>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base_html.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!doctype html>\r\n<html class=\"no-js\" lang=\"\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\r\n        <title> </title>\r\n        <meta name=\"description\" content=\"\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n        <link rel=\"stylesheet\" href=\"css/normalize.min.css\">\r\n        <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\r\n        <link rel=\"stylesheet\" href=\"css/custom.css\">\r\n\r\n    </head>\r\n    <body>\r\n\r\n";
env.getTemplate("release.html", false, "base_html.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\r\n\r\n    </body>\r\n</html>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["buyer.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "buyer")) {
output += "\r\n\t<aside id=\"buyer\" class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h2>\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 4, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"])), env.opts.autoescape);
output += " \r\n\t\t\t\t</h2>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<h2>\r\n\t\t\t\t\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"name"), env.opts.autoescape);
output += "</small>\r\n\t\t\t\t</h2>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")) {
output += "\r\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 16, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email")) {
output += "\r\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 27, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 30, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url")) {
output += "\r\n\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-warning\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 41, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 45, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")) {
output += "\r\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-warning\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 78, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 82, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")) {
output += "\r\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-default\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 90, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 97, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 98, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 99, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("identifier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-warning\">\r\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 125, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifers"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 129, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t</aside>\r\n";
;
}
else {
output += "\r\n\t<aside id=\"buyer\" class=\"panel panel-danger\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h2>\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 140, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Buyer data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t</h2>\r\n\t\t</div>\r\n\t</aside>\r\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contract.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contract-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">\r\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 3, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 19, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award ID"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award ID provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 46, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 69, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 80, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 89, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 93, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 97, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 107, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"currency"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 116, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 126, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date signed"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 133, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items")) {
output += "\r\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("items.html", false, "contract.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 148, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 152, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents")) {
output += "\r\n\t\t\t\t\t";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents");
frame.set("documents", t_6, true);
if(frame.topLevel) {
context.setVariable("documents", t_6);
}
if(frame.topLevel) {
context.addExport("documents", t_6);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "contract.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 167, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 171, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 182, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Implementation"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t";
var t_11;
t_11 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"transactions");
frame.set("transactions", t_11, true);
if(frame.topLevel) {
context.setVariable("transactions", t_11);
}
if(frame.topLevel) {
context.addExport("transactions", t_11);
}
output += "\r\n\t\t\t\t\t\t\t\t";
env.getTemplate("transactions.html", false, "contract.html", null, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
t_12.render(context.getVariables(), frame, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
output += t_13
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
var t_16;
t_16 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones");
frame.set("milestones", t_16, true);
if(frame.topLevel) {
context.setVariable("milestones", t_16);
}
if(frame.topLevel) {
context.addExport("milestones", t_16);
}
output += "\r\n\t\t\t\t\t\t\t\t\t";
env.getTemplate("milestones.html", false, "contract.html", null, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
t_17.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
output += t_18
output += "\r\n\t\t\t\t\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 201, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 205, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
var t_21;
t_21 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents");
frame.set("documents", t_21, true);
if(frame.topLevel) {
context.setVariable("documents", t_21);
}
if(frame.topLevel) {
context.addExport("documents", t_21);
}
output += "\r\n\t\t\t\t\t\t\t\t\t";
env.getTemplate("documents.html", false, "contract.html", null, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
t_22.render(context.getVariables(), frame, function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
output += t_23
output += "\r\n\t\t\t\t\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 220, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 224, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t<div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3>\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contracts"])), env.opts.autoescape);
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "contracts");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("contract", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t";
env.getTemplate("contract.html", false, "contracts.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\r\n\t\t";
})});
}
}
frame = frame.pop();
output += "\r\n\t</div>\r\n</section>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["documents.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "\r\n\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date published"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Format"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Language"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "documents");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("document", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\r\n\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"datePublished"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t";
;
}
else {
output += "\r\n\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t";
;
}
output += "\r\n\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["items.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items")) > 0) {
output += "\r\n\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Classification"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 13, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Quantity"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 14, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += ")</small></th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value per unit"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\t<!-- need to consider whether to present the id - make sure this is consistent with documents approach -->\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"scheme"), env.opts.autoescape);
output += "</a> -\r\n\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += "</a>)\r\n\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += ")\r\n\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_4),"additionalClassifications")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"additionalClassifications");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("classification", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\r\n\t\t\t\t\t\t\t\t\t\t<br>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"scheme"), env.opts.autoescape);
output += "</a> -\r\n\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"uri")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += "</a>)\r\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += ")\r\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"quantity"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"name"), env.opts.autoescape);
output += ")</small></td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"currency"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</tbody>\t\r\n\t\t\t</table>\r\n\t\t";
;
}
else {
output += "\r\n\t\t\t";
output += runtime.suppressValue((lineno = 55, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\r\n\t\t";
;
}
output += "\r\n\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["milestones.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "milestones")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "milestones")) > 0) {
output += "\r\n\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Due Date"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("milestone", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"dueDate"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"status"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td></td> <!-- work out how to display these -->\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t";
;
}
else {
output += "\r\n\t\t\t";
output += runtime.suppressValue((lineno = 33, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\r\n\t\t";
;
}
output += "\r\n\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<h2>\r\n\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name"), env.opts.autoescape);
output += "</small>\r\n</h2>\r\n<p>\r\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 7, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email")) {
output += "\r\n\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 19, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 22, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url")) {
output += "\r\n\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t";
;
}
output += "\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName")) {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 56, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t";
;
}
output += "\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 63, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\r\n\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 71, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 72, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 73, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")) {
output += "\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\r\n\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("identifier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t";
output += runtime.suppressValue((lineno = 96, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t";
;
}
output += "\r\n\t\t</div>\r\n\t</div>\r\n</p>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization_old.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h2>\r\n\t\t\t\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += " \r\n\t\t\t</h2>\r\n\t\t</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h2>\r\n\t\t\t\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name"), env.opts.autoescape);
output += "</small>\r\n\t\t\t</h2>\r\n\t\t\t<p>\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 14, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email")) {
output += "\r\n\t\t\t\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 26, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 29, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url")) {
output += "\r\n\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 42, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName")) {
output += "\r\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 63, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 70, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\r\n\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 78, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 79, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 80, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("identifier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 103, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</p>\r\n\t\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["planning.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"planning\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h2>\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Planning"])), env.opts.autoescape);
output += "\r\n\t\t</h2>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 12, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 21, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\r\n\t\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 26, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 36, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 36, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Source"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 43, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\r\n\t\t\t\t\t\t\t\t<small>(<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue((lineno = 46, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source"])), env.opts.autoescape);
output += "</a>)</small>\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 48, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source not provided"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 59, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 66, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget rationale not provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 75, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project information"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 75, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 82, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project name not provided."])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "\r\n\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID"), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 87, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID not provided"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents")) {
output += "\r\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
frame.set("documents", t_1, true);
if(frame.topLevel) {
context.setVariable("documents", t_1);
}
if(frame.topLevel) {
context.addExport("documents", t_1);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 102, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 106, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"row\">\r\n\t<div class=\"col-md-12\">\r\n\t\t<div class=\"panel-group\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h1>\r\n\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"title"), env.opts.autoescape);
output += " <small><a data-toggle=\"collapse\" href=\"#metadata\">(hide metadata)</a></small>\r\n\t\t\t\t\t</h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"metadata\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>OCID: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ocid"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Date: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "date"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Tags: </strong>\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.contextOrFrameLookup(context, frame, "tag"),", "), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "initiationType"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n<main class=\"row\">\r\n\t<div class=\"col-md-8\">\r\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\r\n\t\t\t";
env.getTemplate("planning.html", false, "release.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\r\n\t\t";
})});
}
else {
output += "\r\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h2 class=\"panel-title\">\r\n\t\t\t\t\t\tNo planning data provided\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t";
;
}
output += "\r\n\t\t";
env.getTemplate("tender.html", false, "release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\r\n\t\t";
env.getTemplate("awards.html", false, "release.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\r\n\t\t";
env.getTemplate("contracts.html", false, "release.html", null, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
t_13.render(context.getVariables(), frame, function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
output += t_14
output += " \t\t\r\n\t</div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<div class=\"panel panel-";
if(runtime.contextOrFrameLookup(context, frame, "buyer")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3>\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 54, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"])), env.opts.autoescape);
output += "\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t";
if(runtime.contextOrFrameLookup(context, frame, "buyer")) {
output += "\r\n\t\t\t\t\t";
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "buyer");
frame.set("organization", t_17, true);
if(frame.topLevel) {
context.setVariable("organization", t_17);
}
if(frame.topLevel) {
context.addExport("organization", t_17);
}
output += "\r\n\t\t\t\t\t";
var t_18;
t_18 = (lineno = 60, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"]));
frame.set("title", t_18, true);
if(frame.topLevel) {
context.setVariable("title", t_18);
}
if(frame.topLevel) {
context.addExport("title", t_18);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("organization.html", false, "release.html", null, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
t_19.render(context.getVariables(), frame, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
output += t_20
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 63, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No buyer information provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t";
;
}
output += "\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h3>\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 71, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procuring entity"])), env.opts.autoescape);
output += "\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")) {
output += "\r\n\t\t\t\t\t";
var t_23;
t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity");
frame.set("organization", t_23, true);
if(frame.topLevel) {
context.setVariable("organization", t_23);
}
if(frame.topLevel) {
context.addExport("organization", t_23);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("organization.html", false, "release.html", null, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
t_24.render(context.getVariables(), frame, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
output += t_25
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 79, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No procuring entity information provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["snippets.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "Panel snippet\t - text\t\t\r\n\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 5, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\nPanel snippet - value\r\n\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 22, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 31, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\nPanel snippet - period\r\n\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 42, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 47, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 51, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 55, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 59, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\r\nPanel snippet - organisations\r\n\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 70, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Suppliers:"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("supplier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t<div class=\"col-md-";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) == 1) {
output += "12";
;
}
else {
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) == 2) {
output += "6";
;
}
else {
output += "4";
;
}
;
}
output += "\">\r\n\t\t\t\t\t\t\t\t";
var t_5;
t_5 = t_4;
frame.set("organization", t_5, true);
if(frame.topLevel) {
context.setVariable("organization", t_5);
}
if(frame.topLevel) {
context.addExport("organization", t_5);
}
output += "\r\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "snippets.html", null, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
t_6.render(context.getVariables(), frame, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
output += t_7
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\nPanel snippet - items\r\n\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items")) {
output += "\r\n\t\t\t\t\t";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
frame.set("items", t_10, true);
if(frame.topLevel) {
context.setVariable("items", t_10);
}
if(frame.topLevel) {
context.addExport("items", t_10);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("items.html", false, "snippets.html", null, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
t_11.render(context.getVariables(), frame, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
output += t_12
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 92, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 96, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\r\nPanel snippet - documents\r\n\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\r\n\t\t\t\t\t";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_15, true);
if(frame.topLevel) {
context.setVariable("documents", t_15);
}
if(frame.topLevel) {
context.addExport("documents", t_15);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "snippets.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 110, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 114, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tender.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"tender\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h2>Tender</h2>\r\n\t</div>\r\n  \t\r\n\t\t<!-- is there a way we can reference codelist titles and descriptions? Using a custom filter or function -->\r\n\t\t\r\n\t\t<!-- should i go through and add elif field|length == 0 then warning ?-->\r\n\t\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 15, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 22, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 31, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 39, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minvalue")),"amount") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 49, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += "</small>\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 57, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No minimum value provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 59, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += "</small></p>\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 63, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No value provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 74, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 81, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 90, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 95, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 99, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 103, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 107, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 111, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 115, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\t\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 119, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 123, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 133, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 139, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 141, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 143, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t";
;
}
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 147, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 151, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 155, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 159, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 172, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\r\n\t\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += "</h4>\t<!-- set up a filter or function to convert between codelist values and titles -->\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<h4>No procurement method provided</h4>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 185, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 195, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 203, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 210, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 220, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 228, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 235, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items")) {
output += "\r\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 251, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 255, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\r\n\t\t\t\t\t";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_6, true);
if(frame.topLevel) {
context.setVariable("documents", t_6);
}
if(frame.topLevel) {
context.addExport("documents", t_6);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 270, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 274, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 285, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.contextOrFrameLookup(context, frame, "numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 285, colno = 119, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
frame = frame.push();
var t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_13) {var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("tenderer", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\r\n\t\t\t\t\t\t\t<div class=\"col-md-";
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) == 1) {
output += "12";
;
}
else {
if(env.getFilter("length").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) == 2) {
output += "6";
;
}
else {
output += "4";
;
}
;
}
output += "\">\r\n\t\t\t\t\t\t\t\t";
var t_15;
t_15 = t_14;
frame.set("organization", t_15, true);
if(frame.topLevel) {
context.setVariable("organization", t_15);
}
if(frame.topLevel) {
context.addExport("organization", t_15);
}
output += "\r\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "tender.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\r\n\t\t\t\t\t";
var t_20;
t_20 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_20, true);
if(frame.topLevel) {
context.setVariable("milestones", t_20);
}
if(frame.topLevel) {
context.addExport("milestones", t_20);
}
output += "\r\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "tender.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\r\n\t\t\t\t";
})});
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 308, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 312, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["transactions.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "transactions")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">\r\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Transactions"])), env.opts.autoescape);
output += "\r\n\t\t</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "transactions")) > 0) {
output += "\r\n\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Provider organization"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 14, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Receiver organization"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 15, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\r\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Links"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "transactions");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("transaction", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"date"),10,true,""), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"currency"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"legalName"), env.opts.autoescape);
output += " <small><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"uri"), env.opts.autoescape);
output += "\">(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"scheme"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"id"), env.opts.autoescape);
output += ")</a></small></td>\r\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"legalName"), env.opts.autoescape);
output += " <small><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"uri"), env.opts.autoescape);
output += "\">(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"scheme"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"id"), env.opts.autoescape);
output += ")</a></small></td>\r\n\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"source"), env.opts.autoescape);
output += "\">Source</a> / <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">URI</a></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t</tbody>\t\r\n\t\t\t</table>\r\n\t\t";
;
}
else {
output += "\r\n\t\t\t";
output += runtime.suppressValue((lineno = 33, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No transactions provided"])), env.opts.autoescape);
output += "\r\n\t\t";
;
}
output += "\r\n\t</div>\r\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
