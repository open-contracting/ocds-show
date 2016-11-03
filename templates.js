(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 3, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 19, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 44, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 51, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 69, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 78, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 87, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 97, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 102, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 106, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 110, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 114, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"suppliers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 126, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Suppliers:"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-";
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
output += "\">\n\t\t\t\t\t\t\t\t";
var t_5;
t_5 = t_4;
frame.set("organization", t_5, true);
if(frame.topLevel) {
context.setVariable("organization", t_5);
}
if(frame.topLevel) {
context.addExport("organization", t_5);
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "award.html", null, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
t_6.render(context.getVariables(), frame, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
output += t_7
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items")) {
output += "\n\t\t\t\t\t";
var t_10;
t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items");
frame.set("items", t_10, true);
if(frame.topLevel) {
context.setVariable("items", t_10);
}
if(frame.topLevel) {
context.addExport("items", t_10);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "award.html", null, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
t_11.render(context.getVariables(), frame, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
output += t_12
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 149, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 153, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents")) {
output += "\n\t\t\t\t\t";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents");
frame.set("documents", t_15, true);
if(frame.topLevel) {
context.setVariable("documents", t_15);
}
if(frame.topLevel) {
context.addExport("documents", t_15);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "award.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 168, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 172, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t<div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
output += "<section id=\"awards\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3>\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Awards"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
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
output += "\n\t\t\t";
env.getTemplate("award.html", false, "awards.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t</div>\n</section>\n";
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
output += "<!doctype html>\n<html class=\"no-js\" lang=\"\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <title> </title>\n        <meta name=\"description\" content=\"\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n        <link rel=\"stylesheet\" href=\"css/normalize.min.css\">\n        <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n        <link rel=\"stylesheet\" href=\"css/custom.css\">\n\n    </head>\n    <body>\n\n";
env.getTemplate("release.html", false, "base_html.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n\n    </body>\n</html>\n";
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
output += "\n\t<aside id=\"buyer\" class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h2>\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 4, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"])), env.opts.autoescape);
output += " \n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<h2>\n\t\t\t\t\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"name"), env.opts.autoescape);
output += "</small>\n\t\t\t\t</h2>\n\t\t\t\t<p>\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")) {
output += "\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 16, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 27, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 30, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 41, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 45, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")) {
output += "\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 78, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 82, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")) {
output += "\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 90, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 97, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 98, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 99, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 125, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifers"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 129, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t</p>\n\t\t\t</div>\n\t</aside>\n";
;
}
else {
output += "\n\t<aside id=\"buyer\" class=\"panel panel-danger\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h2>\n\t\t\t\t";
output += runtime.suppressValue((lineno = 140, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Buyer data provided"])), env.opts.autoescape);
output += "\n\t\t\t</h2>\n\t\t</div>\n\t</aside>\n";
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
output += "\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 3, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 19, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award ID"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award ID provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 46, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 69, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 80, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 89, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 93, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 97, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 107, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"currency"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 116, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 126, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date signed"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 133, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "contract.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 148, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 152, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents")) {
output += "\n\t\t\t\t\t";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents");
frame.set("documents", t_6, true);
if(frame.topLevel) {
context.setVariable("documents", t_6);
}
if(frame.topLevel) {
context.addExport("documents", t_6);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "contract.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 167, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 171, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 182, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Implementation"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t";
var t_11;
t_11 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"transactions");
frame.set("transactions", t_11, true);
if(frame.topLevel) {
context.setVariable("transactions", t_11);
}
if(frame.topLevel) {
context.addExport("transactions", t_11);
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("transactions.html", false, "contract.html", null, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
t_12.render(context.getVariables(), frame, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
output += t_13
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones")) {
output += "\n\t\t\t\t\t\t\t\t\t";
var t_16;
t_16 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones");
frame.set("milestones", t_16, true);
if(frame.topLevel) {
context.setVariable("milestones", t_16);
}
if(frame.topLevel) {
context.addExport("milestones", t_16);
}
output += "\n\t\t\t\t\t\t\t\t\t";
env.getTemplate("milestones.html", false, "contract.html", null, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
t_17.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
output += t_18
output += "\n\t\t\t\t\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 201, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 205, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents")) {
output += "\n\t\t\t\t\t\t\t\t\t";
var t_21;
t_21 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents");
frame.set("documents", t_21, true);
if(frame.topLevel) {
context.setVariable("documents", t_21);
}
if(frame.topLevel) {
context.addExport("documents", t_21);
}
output += "\n\t\t\t\t\t\t\t\t\t";
env.getTemplate("documents.html", false, "contract.html", null, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
t_22.render(context.getVariables(), frame, function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
output += t_23
output += "\n\t\t\t\t\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 220, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 224, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t<div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
output += "<section id=\"contracts\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h3>\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contracts"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
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
output += "\n\t\t\t";
env.getTemplate("contract.html", false, "contracts.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t</div>\n</section>\n";
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
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date published"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Format"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 17, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Language"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\n\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"datePublished"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n\t</div>\n</div>";
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
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items")) > 0) {
output += "\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Classification"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 13, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Quantity"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 14, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value per unit"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\t<!-- need to consider whether to present the id - make sure this is consistent with documents approach -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"scheme"), env.opts.autoescape);
output += "</a> -\n\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += "</a>)\n\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += ")\n\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_4),"additionalClassifications")) {
output += "\n\t\t\t\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t\t\t\t<br>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"scheme"), env.opts.autoescape);
output += "</a> -\n\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += "</a>)\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += ")\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"quantity"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"name"), env.opts.autoescape);
output += ")</small></td>\n\t\t\t\t\t\t  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")) {
output += "\n                <td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"currency"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t  ";
;
}
output += "\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\t\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue((lineno = 57, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n\t</div>\n</div>\n";
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
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "milestones")) > 0) {
output += "\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Due Date"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"dueDate"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"status"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td></td> <!-- work out how to display these -->\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue((lineno = 33, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n\t</div>\n</div>";
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
output += "<h2>\n\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name"), env.opts.autoescape);
output += "</small>\n</h2>\n<p>\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 7, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 19, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 22, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 28, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 35, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 56, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 63, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 71, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 72, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 73, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")) {
output += "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 96, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n</p>";
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
output += "<section id=\"planning\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h2>\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Planning"])), env.opts.autoescape);
output += "\n\t\t</h2>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 12, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 21, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\n\t\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 26, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 36, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 36, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Source"])), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 43, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\n\t\t\t\t\t\t\t\t<small>(<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue((lineno = 46, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source"])), env.opts.autoescape);
output += "</a>)</small>\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 48, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source not provided"])), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 59, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 66, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget rationale not provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 75, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project information"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 75, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 82, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project name not provided."])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "\n\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 87, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID not provided"])), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
frame.set("documents", t_1, true);
if(frame.topLevel) {
context.setVariable("documents", t_1);
}
if(frame.topLevel) {
context.addExport("documents", t_1);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 102, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 106, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_release.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<ul class=\"release-timeline\">\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "releases");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("release", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n <li class=\"release-timeline-item\">\n   <a href=\"#\" class=\"release-button\" data-release-number=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"), env.opts.autoescape);
output += "\" >\n     <div class=\"release-badge ";
if(runtime.contextOrFrameLookup(context, frame, "releaseNumber") == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0")) {
output += " success ";
;
}
else {
output += "  primary ";
;
}
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "</div>\n   </a>\n   ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n     <span class=\"release-timeline-line\"></span>\n   ";
;
}
output += "\n </li>\n\n";
;
}
}
frame = frame.pop();
output += "\n</ul>\n\n  ";
env.getTemplate("release.html", false, "record_release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_select.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n    <h2> OCDS Record\n\n    <label id=\"label-id-select\" class=\"pull-right\">\n        OCID:\n    <select id=\"id-select\">\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "ocids");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("id", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n      <option ";
if(t_4 == runtime.contextOrFrameLookup(context, frame, "ocid")) {
output += "selected";
;
}
output += " value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option> \n      ";
;
}
}
frame = frame.pop();
output += "\n    </select>\n    </label>\n    </h2>\n\n";
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
output += "  <h1>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"title"), env.opts.autoescape);
output += " ";
if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"title")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += " ";
;
}
output += "  \n  </h1>\n\n<main class=\"row\">\n\n  <ul class=\"col-md-3 nav nav-pills nav-stacked\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#metadata\">Metadata</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "disabled";
;
}
output += "\" ><a href=\"#procuringEntity\">Procuring entity</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "disabled";
;
}
output += "\" ><a href=\"#buyer\">Buyer</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning")) {
output += "disabled";
;
}
output += "\" ><a href=\"#planning\">Planning</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")) {
output += "disabled";
;
}
output += "\" ><a href=\"#tender\">Tender</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards")) {
output += "disabled";
;
}
output += "\" ><a href=\"#awards\">Awards</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")) {
output += "disabled";
;
}
output += "\" ><a href=\"#contracts\">Contracts</a></li>\n  </ul>\n\n\n  <div class=\"tab-content\">\n\t<div class=\"col-md-9 tab-pane active\" id=\"metadata\">\n\t\t<div class=\"panel-group\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3>\n            Metadata\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"metadata\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>OCID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"id"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Date: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"date"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Tags: </strong>\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag"),", "), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"initiationType"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-9 tab-pane\" id=\"procuringEntity\">\n\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3>\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procuring entity"])), env.opts.autoescape);
output += "\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity");
frame.set("organization", t_1, true);
if(frame.topLevel) {
context.setVariable("organization", t_1);
}
if(frame.topLevel) {
context.addExport("organization", t_1);
}
output += "\n\t\t\t\t\t";
env.getTemplate("organization.html", false, "release.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 61, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No procuring entity information provided"])), env.opts.autoescape);
output += "\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n  </div>\n\t<div class=\"col-md-9 tab-pane\" id=\"buyer\">\n\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3>\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 70, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"])), env.opts.autoescape);
output += "\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "\n\t\t\t\t\t";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer");
frame.set("organization", t_6, true);
if(frame.topLevel) {
context.setVariable("organization", t_6);
}
if(frame.topLevel) {
context.addExport("organization", t_6);
}
output += "\n\t\t\t\t\t";
var t_7;
t_7 = (lineno = 76, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"]));
frame.set("title", t_7, true);
if(frame.topLevel) {
context.setVariable("title", t_7);
}
if(frame.topLevel) {
context.addExport("title", t_7);
}
output += "\n\t\t\t\t\t";
env.getTemplate("organization.html", false, "release.html", null, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
t_8.render(context.getVariables(), frame, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
output += t_9
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 79, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No buyer information provided"])), env.opts.autoescape);
output += "\n\t\t\t\t";
;
}
output += "\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n  ";
var t_12;
t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning");
frame.set("planning", t_12, true);
if(frame.topLevel) {
context.setVariable("planning", t_12);
}
if(frame.topLevel) {
context.addExport("planning", t_12);
}
output += "\n\t<div id=\"planning\" class=\"tab-pane col-md-9\">\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n\t\t\t";
env.getTemplate("planning.html", false, "release.html", null, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
t_13.render(context.getVariables(), frame, function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
output += t_14
output += "\n\t\t";
})});
}
else {
output += "\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h2 class=\"panel-title\">\n\t\t\t\t\t\tNo planning data provided\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
;
}
output += "\n\t</div>\n  ";
var t_17;
t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender");
frame.set("tender", t_17, true);
if(frame.topLevel) {
context.setVariable("tender", t_17);
}
if(frame.topLevel) {
context.addExport("tender", t_17);
}
output += "\n\t<div id=\"tender\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("tender.html", false, "release.html", null, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
t_18.render(context.getVariables(), frame, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
output += t_19
output += "\n\t</div>\n  ";
var t_22;
t_22 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards");
frame.set("awards", t_22, true);
if(frame.topLevel) {
context.setVariable("awards", t_22);
}
if(frame.topLevel) {
context.addExport("awards", t_22);
}
output += "\n\t<div id=\"awards\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("awards.html", false, "release.html", null, function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
t_23.render(context.getVariables(), frame, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
output += t_24
output += "\n\t</div>\n  ";
var t_27;
t_27 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts");
frame.set("contracts", t_27, true);
if(frame.topLevel) {
context.setVariable("contracts", t_27);
}
if(frame.topLevel) {
context.addExport("contracts", t_27);
}
output += "\n\t<div id=\"contracts\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("contracts.html", false, "release.html", null, function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
t_28.render(context.getVariables(), frame, function(t_31,t_29) {
if(t_31) { cb(t_31); return; }
output += t_29
output += " \t\t\n\t</div>\n</main>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release_select.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "    <h2> OCDS Release\n\n    <label id=\"label-id-select\" class=\"pull-right\">\n        Release ID:\n    <select id=\"id-select\">\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "release_ids");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("id", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <option ";
if(t_4 == runtime.contextOrFrameLookup(context, frame, "release_id")) {
output += "selected";
;
}
output += " value=\"";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</option> \n      ";
;
}
}
frame = frame.pop();
output += "\n    </select>\n    </label>\n    </h2>\n\n";
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
output += "<section id=\"tender\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h2>Tender</h2>\n\t</div>\n  \t\n\t\t<!-- is there a way we can reference codelist titles and descriptions? Using a custom filter or function -->\n\t\t\n\t\t<!-- should i go through and add elif field|length == 0 then warning ?-->\n\t\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 15, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 22, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 31, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 39, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minvalue")),"amount") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 49, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += "</small>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 57, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No minimum value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 59, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += "</small></p>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 63, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 74, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 81, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 90, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 95, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 99, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 103, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 107, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 111, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 115, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\t\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 119, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 123, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 133, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 139, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 141, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 143, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 147, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 151, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 155, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 159, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 172, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n\t\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += "</h4>\t<!-- set up a filter or function to convert between codelist values and titles -->\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<h4>No procurement method provided</h4>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 185, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 195, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 203, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 210, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 220, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 228, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 235, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 251, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 255, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n\t\t\t\t\t";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_6, true);
if(frame.topLevel) {
context.setVariable("documents", t_6);
}
if(frame.topLevel) {
context.addExport("documents", t_6);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 270, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 274, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
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
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-";
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
output += "\">\n\t\t\t\t\t\t\t\t";
var t_15;
t_15 = t_14;
frame.set("organization", t_15, true);
if(frame.topLevel) {
context.setVariable("organization", t_15);
}
if(frame.topLevel) {
context.addExport("organization", t_15);
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "tender.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_20;
t_20 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_20, true);
if(frame.topLevel) {
context.setVariable("milestones", t_20);
}
if(frame.topLevel) {
context.addExport("milestones", t_20);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "tender.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 308, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 312, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n";
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
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Transactions"])), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "transactions")) > 0) {
output += "\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Provider organization"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 14, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Receiver organization"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 15, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Links"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
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
output += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"date"),10,true,""), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"amount")),"currency"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"legalName"), env.opts.autoescape);
output += " <small><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"uri"), env.opts.autoescape);
output += "\">(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"scheme"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"providerOrganization")),"id"), env.opts.autoescape);
output += ")</a></small></td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"legalName"), env.opts.autoescape);
output += " <small><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"uri"), env.opts.autoescape);
output += "\">(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"scheme"), env.opts.autoescape);
output += " - ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"receiverOrganization")),"id"), env.opts.autoescape);
output += ")</a></small></td>\n\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"source"), env.opts.autoescape);
output += "\">Source</a> / <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">URI</a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\t\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue((lineno = 33, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No transactions provided"])), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n\t</div>\n</div>";
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
