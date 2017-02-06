(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<h3 class=\"tab-heading\">\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title")) {
output += "\n  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += ") </small>\n  ";
;
}
else {
output += "\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += "\n  ";
;
}
output += " ";
output += runtime.suppressValue((lineno = 5, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award")])), env.opts.autoescape);
output += "\n\n</h3>\n<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"description"), env.opts.autoescape);
output += " \n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 14, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n        <dl> \n           <dt class=\"dt-large dt-inline dt-gap\">\n\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 18, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 18, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"status"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline dd-gap\">\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status")) {
output += "\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"status"), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               ";
output += runtime.suppressValue((lineno = 24, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n             ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-inline\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 29, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 29, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"date"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"date"), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 35, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-inline\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 40, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 40, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"value"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline\">\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value"),"amount"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 45, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value"),"currency"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 47, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 52, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 52, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"contractPeriod"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 55, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 57, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 59, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t<strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 61, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 63, colno = 71, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"contractPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 65, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n           </dd>\n\n         </dl> \n      </div>\n    </div>\n\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 79, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Private Party"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 79, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "award"),"suppliers"])), env.opts.autoescape);
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
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t";
var t_5;
t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_4),"id"));
frame.set("organization", t_5, true);
if(frame.topLevel) {
context.setVariable("organization", t_5);
}
if(frame.topLevel) {
context.addExport("organization", t_5);
}
output += "\n                ";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n                  ";
var t_6;
t_6 = t_4;
frame.set("organization", t_6, true);
if(frame.topLevel) {
context.setVariable("organization", t_6);
}
if(frame.topLevel) {
context.addExport("organization", t_6);
}
output += "\n                ";
;
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "award.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t";
frame = frame.push();
var t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"privateParty");
if(t_13) {var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("supplier", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_14),"id"));
frame.set("organization", t_15, true);
if(frame.topLevel) {
context.setVariable("organization", t_15);
}
if(frame.topLevel) {
context.addExport("organization", t_15);
}
output += "\n                ";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n                  ";
var t_16;
t_16 = t_14;
frame.set("organization", t_16, true);
if(frame.topLevel) {
context.setVariable("organization", t_16);
}
if(frame.topLevel) {
context.addExport("organization", t_16);
}
output += "\n                ";
;
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "award.html", null, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
t_17.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
output += t_18
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items")) {
output += "\n\t\t\t\t\t";
var t_21;
t_21 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"items");
frame.set("items", t_21, true);
if(frame.topLevel) {
context.setVariable("items", t_21);
}
if(frame.topLevel) {
context.addExport("items", t_21);
}
output += "\n\t\t\t\t\t";
var t_22;
t_22 = runtime.contextOrFrameLookup(context, frame, "award");
frame.set("parent", t_22, true);
if(frame.topLevel) {
context.setVariable("parent", t_22);
}
if(frame.topLevel) {
context.addExport("parent", t_22);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "award.html", null, function(t_25,t_23) {
if(t_25) { cb(t_25); return; }
t_23.render(context.getVariables(), frame, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
output += t_24
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 115, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 119, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents")) {
output += "\n\t\t\t\t\t";
var t_27;
t_27 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"documents");
frame.set("documents", t_27, true);
if(frame.topLevel) {
context.setVariable("documents", t_27);
}
if(frame.topLevel) {
context.addExport("documents", t_27);
}
output += "\n\t\t\t\t\t";
var t_28;
t_28 = runtime.contextOrFrameLookup(context, frame, "award");
frame.set("parent", t_28, true);
if(frame.topLevel) {
context.setVariable("parent", t_28);
}
if(frame.topLevel) {
context.addExport("parent", t_28);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "award.html", null, function(t_31,t_29) {
if(t_31) { cb(t_31); return; }
t_29.render(context.getVariables(), frame, function(t_32,t_30) {
if(t_32) { cb(t_32); return; }
output += t_30
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 135, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 139, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"agreedMetrics")) {
output += "\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 152, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n              ";
var t_33;
t_33 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"agreedMetrics");
frame.set("metrics", t_33, true);
if(frame.topLevel) {
context.setVariable("metrics", t_33);
}
if(frame.topLevel) {
context.addExport("metrics", t_33);
}
output += "\n              ";
var t_34;
t_34 = runtime.contextOrFrameLookup(context, frame, "award");
frame.set("parent", t_34, true);
if(frame.topLevel) {
context.setVariable("parent", t_34);
}
if(frame.topLevel) {
context.addExport("parent", t_34);
}
output += "\n              ";
env.getTemplate("metrics.html", false, "award.html", null, function(t_37,t_35) {
if(t_37) { cb(t_37); return; }
t_35.render(context.getVariables(), frame, function(t_38,t_36) {
if(t_38) { cb(t_38); return; }
output += t_36
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 165, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 169, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Agreed Metrics provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
output += "<section id=\"awards\">\n  ";
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
output += "\n    ";
env.getTemplate("award.html", false, "awards.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n      <hr>\n    ";
;
}
output += "\n  ";
})});
}
}
frame = frame.pop();
output += "\n</section>\n";
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
output += "\">\n  <h3>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 2, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += " ";
output += runtime.suppressValue((lineno = 2, colno = 94, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract")])), env.opts.autoescape);
output += "\n  </h3>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 9, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 14, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"id"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 16, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 25, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award ID"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 30, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 32, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award ID provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 43, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 48, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 50, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 59, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 64, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"status"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 66, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 77, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\t<!-- add time hover over? -->\n          <p>\n            ";
output += runtime.suppressValue((lineno = 82, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"period"])), env.opts.autoescape);
output += "\n\n            <strong>";
output += runtime.suppressValue((lineno = 84, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 87, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"startDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 89, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n          </p>\n          <p>\n            <strong>";
output += runtime.suppressValue((lineno = 93, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 96, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"endDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 98, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 108, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <h4>\n            ";
output += runtime.suppressValue((lineno = 113, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"value"])), env.opts.autoescape);
output += "\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 116, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"amount"])), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"currency"), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 118, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"currency"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              ";
output += runtime.suppressValue((lineno = 120, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n            ";
;
}
output += "\n          </h4>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 130, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date signed"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\t<!-- add time hover over? -->\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned"),10,true,""), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 136, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"dateSigned"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 138, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items")) {
output += "\n        ";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n        ";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n        ";
env.getTemplate("items.html", false, "contract.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 154, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 158, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents")) {
output += "\n        ";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n        ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n        ";
env.getTemplate("documents.html", false, "contract.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 174, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 178, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 189, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Implementation"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              ";
var t_13;
t_13 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"transactions");
frame.set("transactions", t_13, true);
if(frame.topLevel) {
context.setVariable("transactions", t_13);
}
if(frame.topLevel) {
context.addExport("transactions", t_13);
}
output += "\n              ";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_14, true);
if(frame.topLevel) {
context.setVariable("parent", t_14);
}
if(frame.topLevel) {
context.addExport("parent", t_14);
}
output += "\n              ";
env.getTemplate("transactions.html", false, "contract.html", null, function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
t_15.render(context.getVariables(), frame, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
output += t_16
output += "\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones")) {
output += "\n                ";
var t_19;
t_19 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones");
frame.set("milestones", t_19, true);
if(frame.topLevel) {
context.setVariable("milestones", t_19);
}
if(frame.topLevel) {
context.addExport("milestones", t_19);
}
output += "\n                ";
var t_20;
t_20 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_20, true);
if(frame.topLevel) {
context.setVariable("parent", t_20);
}
if(frame.topLevel) {
context.addExport("parent", t_20);
}
output += "\n                ";
env.getTemplate("milestones.html", false, "contract.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\n              ";
})});
}
else {
output += "\n                <div class=\"panel panel-warning\">\n                  <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                      ";
output += runtime.suppressValue((lineno = 210, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n                    </h3>\n                  </div>\n                  <div class=\"panel-body\">\n                    ";
output += runtime.suppressValue((lineno = 214, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n                  </div>\n                </div>\n              ";
;
}
output += "\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents")) {
output += "\n                ";
var t_25;
t_25 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents");
frame.set("documents", t_25, true);
if(frame.topLevel) {
context.setVariable("documents", t_25);
}
if(frame.topLevel) {
context.addExport("documents", t_25);
}
output += "\n                ";
var t_26;
t_26 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_26, true);
if(frame.topLevel) {
context.setVariable("parent", t_26);
}
if(frame.topLevel) {
context.addExport("parent", t_26);
}
output += "\n                ";
env.getTemplate("documents.html", false, "contract.html", null, function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
t_27.render(context.getVariables(), frame, function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
output += t_28
output += "\n              ";
})});
}
else {
output += "\n                <div class=\"panel panel-warning\">\n                  <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">\n                      ";
output += runtime.suppressValue((lineno = 230, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n                    </h3>\n                  </div>\n                  <div class=\"panel-body\">\n                    ";
output += runtime.suppressValue((lineno = 234, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n                  </div>\n                </div>\n              ";
;
}
output += "\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contract_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<section id=\"contract-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\">\n  <h3>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"title"), env.opts.autoescape);
;
}
else {
output += runtime.suppressValue((lineno = 3, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No title provided"])), env.opts.autoescape);
;
}
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 94, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract")])), env.opts.autoescape);
output += " \n    <small> \n      (";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id")) {
output += "\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 6, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"id"])), env.opts.autoescape);
output += "\n      ";
;
}
else {
output += "\n        ";
output += runtime.suppressValue((lineno = 8, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No ID provided"])), env.opts.autoescape);
output += "\n      ";
;
}
output += ")\n    </small>\n  </h3>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n        <div class=\"panel-body\">\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description")) {
output += "\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 17, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n          ";
;
}
else {
output += "\n            ";
output += runtime.suppressValue((lineno = 19, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n          ";
;
}
output += "\n          <dl> \n             <dt class=\"dt-large dt-inline dt-gap\">\n              ";
output += runtime.suppressValue((lineno = 23, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award ID"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline dd-gap\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"awardID"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"awardID"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 29, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award ID provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n             </dd>\n\n             <dt class=\"dt-large dt-inline\">\n               ";
output += runtime.suppressValue((lineno = 34, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline\">\n               ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status")) {
output += "\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 38, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"status"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 ";
output += runtime.suppressValue((lineno = 40, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n             </dd>\n\n\n             <dt class=\"dt-large dt-gap\">\n               ";
output += runtime.suppressValue((lineno = 46, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contract Period"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-small\">\n                ";
output += runtime.suppressValue((lineno = 49, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"period"])), env.opts.autoescape);
output += "\n\n                <strong>";
output += runtime.suppressValue((lineno = 51, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 54, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 56, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 58, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 61, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"period"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 63, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n             </dd>\n             <dt class=\"dt-large dt-inline dt-gap\">\n               ";
output += runtime.suppressValue((lineno = 67, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline dd-gap\">\n               ";
output += runtime.suppressValue((lineno = 70, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"value"])), env.opts.autoescape);
output += "\n               ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")) {
output += "\n                 ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"amount")), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 73, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"amount"])), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value")),"currency"), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 75, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"value"),"currency"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 ";
output += runtime.suppressValue((lineno = 77, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n              </dd>\n             <dt class=\"dt-large dt-inline\">\n               ";
output += runtime.suppressValue((lineno = 81, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date signed"])), env.opts.autoescape);
output += "\n             </dt>\n             <dd class=\"dd-large dd-inline\">\n               ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned")) {
output += "\n                 ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"dateSigned"),10,true,""), env.opts.autoescape);
output += "\n                 ";
output += runtime.suppressValue((lineno = 86, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "contract"),"dateSigned"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 88, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No date provided"])), env.opts.autoescape);
output += "</span>\n               ";
;
}
output += "\n             </dd>\n\n           </dl> \n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items")) {
output += "\n        ";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"items");
frame.set("items", t_1, true);
if(frame.topLevel) {
context.setVariable("items", t_1);
}
if(frame.topLevel) {
context.addExport("items", t_1);
}
output += "\n        ";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n        ";
env.getTemplate("items.html", false, "contract_ppp.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 110, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 114, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents")) {
output += "\n        ";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n        ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n        ";
env.getTemplate("documents.html", false, "contract_ppp.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 130, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 134, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"relatedProcesses")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 147, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Related Processes"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-responsive\">\n            <thead>\n              <tr>\n                <th>\n                  Title\n                </th>\n                <th>\n                  ID\n                </th>\n                <th>\n                  OCID\n                </th>\n                <th>\n                  Relationship\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              ";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"relatedProcesses");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("relatedProcess", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\n              <tr>\n                <td>\n                  ";
if(runtime.memberLookup((t_16),"uri")) {
output += "\n                    <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"uri"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"title"), env.opts.autoescape);
output += " </a>\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"title"), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n                </td>\n                <td>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"id"), env.opts.autoescape);
output += "\n                </td>\n                <td>\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_16),"ocid"), env.opts.autoescape);
output += "\n                </td>\n                <td>\n                  ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((t_16),"relationship"),", "), env.opts.autoescape);
output += "\n                </td>\n              </tr>\n              ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"milestones")) {
output += "\n        ";
var t_17;
t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"milestones");
frame.set("milestones", t_17, true);
if(frame.topLevel) {
context.setVariable("milestones", t_17);
}
if(frame.topLevel) {
context.addExport("milestones", t_17);
}
output += "\n        ";
var t_18;
t_18 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_18, true);
if(frame.topLevel) {
context.setVariable("parent", t_18);
}
if(frame.topLevel) {
context.addExport("parent", t_18);
}
output += "\n        ";
env.getTemplate("milestones.html", false, "contract_ppp.html", null, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
t_19.render(context.getVariables(), frame, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
output += t_20
output += "\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 207, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 211, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"agreedMetrics")) {
output += "\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 224, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
var t_23;
t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"agreedMetrics");
frame.set("metrics", t_23, true);
if(frame.topLevel) {
context.setVariable("metrics", t_23);
}
if(frame.topLevel) {
context.addExport("metrics", t_23);
}
output += "\n            ";
var t_24;
t_24 = runtime.contextOrFrameLookup(context, frame, "contract");
frame.set("parent", t_24, true);
if(frame.topLevel) {
context.setVariable("parent", t_24);
}
if(frame.topLevel) {
context.addExport("parent", t_24);
}
output += "\n            ";
env.getTemplate("metrics.html", false, "contract_ppp.html", null, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
t_25.render(context.getVariables(), frame, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
output += t_26
output += "\n          </div>\n        </div>\n      ";
})});
}
else {
output += "\n        <div class=\"panel panel-warning\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n              ";
output += runtime.suppressValue((lineno = 237, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Agreed Metrics"])), env.opts.autoescape);
output += "\n            </h3>\n          </div>\n          <div class=\"panel-body\">\n            ";
output += runtime.suppressValue((lineno = 241, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Agreed Metrics provided"])), env.opts.autoescape);
output += "\n          </div>\n        </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"finance")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 254, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_31 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"finance");
if(t_31) {var t_30 = t_31.length;
for(var t_29=0; t_29 < t_31.length; t_29++) {
var t_32 = t_31[t_29];
frame.set("finance", t_32);
frame.set("loop.index", t_29 + 1);
frame.set("loop.index0", t_29);
frame.set("loop.revindex", t_30 - t_29);
frame.set("loop.revindex0", t_30 - t_29 - 1);
frame.set("loop.first", t_29 === 0);
frame.set("loop.last", t_29 === t_30 - 1);
frame.set("loop.length", t_30);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_32),"id"), env.opts.autoescape);
output += ") </small>\n                </h4>\n              </div>\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_32),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 267, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"description"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 269, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 273, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Financing Party"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_32),"financingParty")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"financingParty")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 277, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"financingParty"),"name"])), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"financingParty")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 277, colno = 141, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"financingParty"),"id"])), env.opts.autoescape);
output += ") </small>\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 279, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Financing Party provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 283, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
output += runtime.suppressValue((lineno = 286, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"value"])), env.opts.autoescape);
output += "\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"value")),"amount")) {
output += "\n                      ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_32),"value")),"amount")), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue((lineno = 289, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"value"),"amount"])), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"value")),"currency"), env.opts.autoescape);
output += "\n                      ";
output += runtime.suppressValue((lineno = 291, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"value"),"currency"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 293, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value not provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 298, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Type"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"financeType")) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"financeType"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 302, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"financeType"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 304, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No finance type provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 309, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Category"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                    ";
if(runtime.memberLookup((t_32),"financeCategory")) {
output += "\n                      ";
output += runtime.suppressValue(runtime.memberLookup((t_32),"financeCategory"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 313, colno = 60, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"financeCategory"])), env.opts.autoescape);
output += "\n                    ";
;
}
else {
output += "\n                      ";
output += runtime.suppressValue((lineno = 315, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No finance category provided"])), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-gap\">\n                    ";
output += runtime.suppressValue((lineno = 320, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Finance Period"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-small\">\n                     ";
output += runtime.suppressValue((lineno = 323, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"period"])), env.opts.autoescape);
output += "\n\n                     <strong>";
output += runtime.suppressValue((lineno = 325, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"startDate")) {
output += "\n                       ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((t_32),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 328, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"period"),"startDate"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 330, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n                     <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 332, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"period")),"endDate")) {
output += "\n                       ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((t_32),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 335, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"period"),"endDate"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 337, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n                  </dd>\n\n                  <dt class=\"dt-large dt-gap\">\n                    ";
output += runtime.suppressValue((lineno = 342, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Interest Rates"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-small\">\n                     ";
output += runtime.suppressValue((lineno = 345, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_32,"interestRate"])), env.opts.autoescape);
output += "\n\n                     <strong>";
output += runtime.suppressValue((lineno = 347, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Margin: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"margin")) {
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"margin"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 350, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"margin"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 352, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No margin provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n\n                     <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 355, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Base: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"base")) {
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"base"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 358, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"base"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 360, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No base provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"fixed")) {
output += "\n                       <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 364, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fixed: "])), env.opts.autoescape);
output += "</strong>\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"fixed"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 366, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"fixed"])), env.opts.autoescape);
output += "\n                     ";
;
}
output += "\n\n                     <br/>\n                     <strong>";
output += runtime.suppressValue((lineno = 370, colno = 37, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes: "])), env.opts.autoescape);
output += "</strong>\n                     ";
if(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"notes")) {
output += "\n                       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_32),"interestRate")),"notes"), env.opts.autoescape);
output += "\n                       ";
output += runtime.suppressValue((lineno = 373, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_32),"interestRate"),"notes"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 375, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No notes provided"])), env.opts.autoescape);
output += "</span>\n                     ";
;
}
output += "\n\n                  </dd>\n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financialModel")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 396, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Financial Model"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_35 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"financialModel");
if(t_35) {var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("indicator", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_36),"id"), env.opts.autoescape);
output += ") </small>\n                </h4>\n              </div>\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_36),"notes")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"notes"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 409, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_36,"notes"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 413, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Indicator Code"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_36),"code")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"code"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 417, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_36,"code"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 419, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Indicator Code Provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                    ";
output += runtime.suppressValue((lineno = 423, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                     ";
if(runtime.memberLookup((t_36),"value")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 427, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_36,"value"])), env.opts.autoescape);
output += "\n                     ";
;
}
else {
output += "\n                       ";
output += runtime.suppressValue((lineno = 429, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Indicator Value Provided"])), env.opts.autoescape);
output += "\n                     ";
;
}
output += "\n                  </dd>\n\n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"equityTransferCaps")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 450, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Equity Transfer Caps"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_39 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"equityTransferCaps");
if(t_39) {var t_38 = t_39.length;
for(var t_37=0; t_37 < t_39.length; t_37++) {
var t_40 = t_39[t_37];
frame.set("equityTransferCap", t_40);
frame.set("loop.index", t_37 + 1);
frame.set("loop.index0", t_37);
frame.set("loop.revindex", t_38 - t_37);
frame.set("loop.revindex0", t_38 - t_37 - 1);
frame.set("loop.first", t_37 === 0);
frame.set("loop.last", t_37 === t_38 - 1);
frame.set("loop.length", t_38);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_40),"title"), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_40),"id"), env.opts.autoescape);
output += ") </small>\n                </h4>\n              </div>\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_40),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_40),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 463, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_40,"description"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 467, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Amount"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_40),"amount")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_40),"amount") * 100, env.opts.autoescape);
output += "% ";
output += runtime.suppressValue((lineno = 471, colno = 67, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_40,"amount"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 473, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Equitly Transfer Cap given "])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 477, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestone"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((runtime.memberLookup((t_40),"milestone")),"title")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_40),"milestone")),"title"), env.opts.autoescape);
output += " \n                     ";
output += runtime.suppressValue((lineno = 482, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_40),"milestone"),"title"])), env.opts.autoescape);
output += "\n                     <small>\n                     (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_40),"milestone")),"id"), env.opts.autoescape);
output += " \n                      ";
output += runtime.suppressValue((lineno = 485, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_40),"milestone"),"id"])), env.opts.autoescape);
output += ")\n                     </small>\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 488, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Milestone Referenced"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n\n  ";
;
}
output += "\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"riskAllocation")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default %}\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 508, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Risk Allocation"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
frame = frame.push();
var t_43 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"riskAllocation");
if(t_43) {var t_42 = t_43.length;
for(var t_41=0; t_41 < t_43.length; t_41++) {
var t_44 = t_43[t_41];
frame.set("risk", t_44);
frame.set("loop.index", t_41 + 1);
frame.set("loop.index0", t_41);
frame.set("loop.revindex", t_42 - t_41);
frame.set("loop.revindex0", t_42 - t_41 - 1);
frame.set("loop.first", t_41 === 0);
frame.set("loop.last", t_41 === t_42 - 1);
frame.set("loop.length", t_42);
output += "\n            <div class=\"panel panel-default %}\">\n              <div class=\"panel-body\">\n                ";
if(runtime.memberLookup((t_44),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 516, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"description"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n                ";
if(runtime.memberLookup((t_44),"id")) {
output += "\n                  (id: ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 519, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"id"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n\n                <dl> \n                  <dt class=\"dt-large dt-inline dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 524, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Category"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline dd-gap\">\n                   ";
if(runtime.memberLookup((t_44),"category")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"category"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 528, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"category"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 530, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No category"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 534, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Mitigation"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_44),"mitigation")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"mitigation"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 538, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"mitigation"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 540, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No mitigation"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 544, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["allocation"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_44),"allocation")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"allocation"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 548, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"allocation"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 550, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No allocation"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 554, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fiscal Impact"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_44),"fiscalImpact")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"fiscalImpact"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 558, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"fiscalImpact"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 560, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Fiscal Impact"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-inline\">\n                   ";
output += runtime.suppressValue((lineno = 564, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Likelihood"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-large dd-inline\">\n                   ";
if(runtime.memberLookup((t_44),"likelihood")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"likelihood"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 568, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"likelihood"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 570, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No likelihood"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  <dt class=\"dt-large dt-gap\">\n                   ";
output += runtime.suppressValue((lineno = 574, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += "\n                  </dt>\n                  <dd class=\"dd-small\">\n                   ";
if(runtime.memberLookup((t_44),"notes")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_44),"notes"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 578, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_44,"notes"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 580, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No notes"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                  </dd>\n                  \n                </dl> \n              </div>\n            </div>\n          ";
;
}
}
frame = frame.pop();
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n\n  ";
;
}
output += "\n\n\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"tariffs")) {
output += "\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            Tariffs ";
output += runtime.suppressValue((lineno = 602, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"tariffs")])), env.opts.autoescape);
output += " \n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          <table class=\"table table-striped table-condensed table-responsive\">\n            <thead>\n              <tr>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 610, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["title"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 613, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 616, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Dimensions"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 619, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 622, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += " \n                </th>\n                <th>\n                  ";
output += runtime.suppressValue((lineno = 625, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += " \n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              ";
frame = frame.push();
var t_47 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"tariffs");
if(t_47) {var t_46 = t_47.length;
for(var t_45=0; t_45 < t_47.length; t_45++) {
var t_48 = t_47[t_45];
frame.set("tariff", t_48);
frame.set("loop.index", t_45 + 1);
frame.set("loop.index0", t_45);
frame.set("loop.revindex", t_46 - t_45);
frame.set("loop.revindex0", t_46 - t_45 - 1);
frame.set("loop.first", t_45 === 0);
frame.set("loop.last", t_45 === t_46 - 1);
frame.set("loop.length", t_46);
output += "\n                <tr>\n                  <td>\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_48),"title"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 634, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_48,"title"])), env.opts.autoescape);
output += "\n                     <br>\n                     <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_48),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 636, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_48,"id"])), env.opts.autoescape);
output += " </small>\n                  </td>\n                  <td>\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_48),"period")),"startDate")) {
output += "\n                      <strong> ";
output += runtime.suppressValue((lineno = 640, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start Date:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_48),"period")),"startDate"), env.opts.autoescape);
output += "\n                      ";
if(runtime.memberLookup((runtime.memberLookup((t_48),"period")),"endDate")) {
output += "\n                        <br/>\n                      ";
;
}
output += "\n                    ";
;
}
output += "\n                    ";
if(runtime.memberLookup((runtime.memberLookup((t_48),"period")),"endDate")) {
output += "\n                      <strong> ";
output += runtime.suppressValue((lineno = 646, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End Date:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_48),"period")),"endDate"), env.opts.autoescape);
output += "\n                    ";
;
}
output += "\n                  </td>\n                  <td>\n                    ";
frame = frame.push();
var t_51 = runtime.memberLookup((t_48),"dimensions");
if(t_51) {var t_49;
if(runtime.isArray(t_51)) {
var t_50 = t_51.length;
for(t_49=0; t_49 < t_51.length; t_49++) {
var t_52 = t_51[t_49][0]
frame.set("key", t_51[t_49][0]);
var t_53 = t_51[t_49][1]
frame.set("value", t_51[t_49][1]);
frame.set("loop.index", t_49 + 1);
frame.set("loop.index0", t_49);
frame.set("loop.revindex", t_50 - t_49);
frame.set("loop.revindex0", t_50 - t_49 - 1);
frame.set("loop.first", t_49 === 0);
frame.set("loop.last", t_49 === t_50 - 1);
frame.set("loop.length", t_50);
output += "\n                      <strong>";
output += runtime.suppressValue(t_52, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_53, env.opts.autoescape);
output += "\n                      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                        <br/>\n                      ";
;
}
output += "\n                    ";
;
}
} else {
t_49 = -1;
var t_50 = runtime.keys(t_51).length;
for(var t_54 in t_51) {
t_49++;
var t_55 = t_51[t_54];
frame.set("key", t_54);
frame.set("value", t_55);
frame.set("loop.index", t_49 + 1);
frame.set("loop.index0", t_49);
frame.set("loop.revindex", t_50 - t_49);
frame.set("loop.revindex0", t_50 - t_49 - 1);
frame.set("loop.first", t_49 === 0);
frame.set("loop.last", t_49 === t_50 - 1);
frame.set("loop.length", t_50);
output += "\n                      <strong>";
output += runtime.suppressValue(t_54, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_55, env.opts.autoescape);
output += "\n                      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                        <br/>\n                      ";
;
}
output += "\n                    ";
;
}
}
}
frame = frame.pop();
output += "\n                  </td>\n                  <td>\n                     ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_48),"value")),"amount")), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 659, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_48),"value"),"amount"])), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_48),"value")),"currency"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 661, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_48),"value"),"currency"])), env.opts.autoescape);
output += "\n                  </td>\n                  <td>\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_48),"unit")),"name"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 665, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_48),"unit"),"name"])), env.opts.autoescape);
output += "\n                  </td>\n                  <td>\n                     ";
output += runtime.suppressValue(runtime.memberLookup((t_48),"notes"), env.opts.autoescape);
output += "\n                     ";
output += runtime.suppressValue((lineno = 669, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_48,"notes"])), env.opts.autoescape);
output += "\n                  </td>\n                </tr>\n              ";
;
}
}
frame = frame.pop();
output += "\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
;
}
output += "\n\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\">\n  ";
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
output += "\n    ";
env.getTemplate("contract.html", false, "contracts.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n      <hr>\n    ";
;
}
output += "\n  ";
})});
}
}
frame = frame.pop();
output += "\n</section>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\">\n  ";
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
output += "\n    ";
env.getTemplate("contract_ppp.html", false, "contracts_ppp.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n      <hr>\n    ";
;
}
output += "\n  ";
})});
}
}
frame = frame.pop();
output += "\n</section>\n";
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
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 38, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"documents"])), env.opts.autoescape);
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
output += "\n\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue((lineno = 23, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"url"])), env.opts.autoescape);
output += " <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 23, colno = 112, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"title"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"type"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 25, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"datePublished"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 26, colno = 69, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"datePublished"])), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 68, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"dateModified"])), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 28, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"format"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 29, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"language"])), env.opts.autoescape);
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
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 34, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"items"])), env.opts.autoescape);
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
output += " ";
output += runtime.suppressValue((lineno = 21, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4])), env.opts.autoescape);
output += " </td>\t<!-- need to consider whether to present the id - make sure this is consistent with documents approach -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 22, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 24, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"classification"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 91, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"scheme"), env.opts.autoescape);
output += "</a> -\n                  ";
output += runtime.suppressValue((lineno = 27, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"scheme"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += "</a>)\n                    ";
output += runtime.suppressValue((lineno = 30, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"uri"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += ")\n                    ";
output += runtime.suppressValue((lineno = 33, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"classification"),"id"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t</small>\n                ";
output += runtime.suppressValue((lineno = 36, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"additionalClassifications"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
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
output += " ";
output += runtime.suppressValue((lineno = 52, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"quantity"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue((lineno = 52, colno = 77, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"unit"])), env.opts.autoescape);
output += " (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"name"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 52, colno = 121, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"unit"),"name"])), env.opts.autoescape);
output += ")</small></td>\n\t\t\t\t\t\t  ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")) {
output += "\n                ";
output += runtime.suppressValue((lineno = 54, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_4),"unit"),"value"])), env.opts.autoescape);
output += "\n                <td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 55, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value"),"amount"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 55, colno = 133, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value"),"currency"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 62, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["change", "gettext"], 
["class"], 
function (l_change, l_gettext, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("change", l_change);
frame.set("gettext", l_gettext);
frame.set("class", kwargs.hasOwnProperty("class") ? kwargs["class"] : "");
var t_2 = "";t_2 += "\n\n";
if(l_change == "new") {
t_2 += "\n<span class=\"label label-success ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 3, colno = 47, runtime.callWrap(l_gettext, "gettext", context, ["new"])), env.opts.autoescape);
t_2 += "</span>\n";
;
}
else {
if(l_change == "changed") {
t_2 += "\n<span class=\"label label-primary ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 5, colno = 47, runtime.callWrap(l_gettext, "gettext", context, ["changed"])), env.opts.autoescape);
t_2 += "</span>\n";
;
}
;
}
t_2 += "\n\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("change_label");
context.setVariable("change_label", macro_t_1);
output += "\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["metrics.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "metrics");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("metric", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n<div class=\"col-xs-12\">\n  <div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">\n        ";
output += runtime.suppressValue((lineno = 5, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 5, colno = 56, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"title"])), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += ") ";
output += runtime.suppressValue((lineno = 5, colno = 107, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"id"])), env.opts.autoescape);
output += "</small>\n      </h3>\n    </div>\n\n    <div class=\"panel-body\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 10, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "\n    </div>\n    <table class=\"table table-striped table-condensed table-responsive\">\n      <thead>\n        <tr>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 16, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Period"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 19, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Dimensions"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 22, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 25, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 28, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Quantity"])), env.opts.autoescape);
output += " \n          </th>\n          <th>\n            ";
output += runtime.suppressValue((lineno = 31, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Notes"])), env.opts.autoescape);
output += " \n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        ";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"observations");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("observation", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n          <tr>\n            <td>\n              ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"period")),"startDate")) {
output += "\n                <strong> ";
output += runtime.suppressValue((lineno = 40, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Start Date:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"period")),"startDate"), env.opts.autoescape);
output += "\n                ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"period")),"endDate")) {
output += "\n                  <br/>\n                ";
;
}
output += "\n              ";
;
}
output += "\n              ";
if(runtime.memberLookup((runtime.memberLookup((t_8),"period")),"endDate")) {
output += "\n                <strong> ";
output += runtime.suppressValue((lineno = 46, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["End Date:"])), env.opts.autoescape);
output += " </strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"period")),"endDate"), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n            </td>\n            <td>\n              ";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"dimensions");
if(t_11) {var t_9;
if(runtime.isArray(t_11)) {
var t_10 = t_11.length;
for(t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9][0]
frame.set("key", t_11[t_9][0]);
var t_13 = t_11[t_9][1]
frame.set("value", t_11[t_9][1]);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n                <strong>";
output += runtime.suppressValue(t_12, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_13, env.opts.autoescape);
output += "\n                ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                  <br/>\n                ";
;
}
output += "\n              ";
;
}
} else {
t_9 = -1;
var t_10 = runtime.keys(t_11).length;
for(var t_14 in t_11) {
t_9++;
var t_15 = t_11[t_14];
frame.set("key", t_14);
frame.set("value", t_15);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\n                <strong>";
output += runtime.suppressValue(t_14, env.opts.autoescape);
output += ": </strong>";
output += runtime.suppressValue(t_15, env.opts.autoescape);
output += "\n                ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n                  <br/>\n                ";
;
}
output += "\n              ";
;
}
}
}
frame = frame.pop();
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((t_8),"value")),"amount")), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 59, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"value"),"amount"])), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"value")),"currency"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 61, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"value"),"currency"])), env.opts.autoescape);
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"name"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 65, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_8),"unit"),"name"])), env.opts.autoescape);
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"quantity"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 69, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_8,"quantity"])), env.opts.autoescape);
output += "\n            </td>\n            <td>\n               ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"notes"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 73, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_8,"notes"])), env.opts.autoescape);
output += "\n            </td>\n          </tr>\n        ";
;
}
}
frame = frame.pop();
output += "\n      </tbody>\n    </table>\n  </div>\n</div>\n    \n";
;
}
}
frame = frame.pop();
output += "\n";
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
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"milestones"])), env.opts.autoescape);
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
output += " ";
output += runtime.suppressValue((lineno = 22, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"milestones"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 23, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"description"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"dueDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 24, colno = 64, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"dueDate"])), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"dateModified"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 25, colno = 69, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"dateModified"])), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 26, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_4,"status"])), env.opts.autoescape);
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<h3 class=\"tab-heading\">\n\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization"),"name"])), env.opts.autoescape);
output += "\n</h3>\n<p>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsBefore"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 11, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Contact Point"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 11, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization"),"contactPoint"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 17, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"name"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 20, colno = 101, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"email"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 23, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Phone: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 23, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"telephone"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue((lineno = 26, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Fax: "])), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 26, colno = 71, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"email"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 29, colno = 106, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint"),"url"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 32, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No contact data provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 39, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Address"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 39, colno = 36, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "organization"),"address"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 45, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"streetAddress"])), env.opts.autoescape);
output += "<br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality")) {
output += " ";
output += runtime.suppressValue((lineno = 47, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"locality"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region")) {
output += " ";
output += runtime.suppressValue((lineno = 50, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"region"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode")) {
output += " ";
output += runtime.suppressValue((lineno = 53, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"postalCode"])), env.opts.autoescape);
output += "\n\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName")) {
output += " ";
output += runtime.suppressValue((lineno = 56, colno = 54, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address"),"countryName"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 60, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No address data provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 67, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifiers"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 75, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 76, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Identifer"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 77, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Legal Name"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")) {
output += "\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 83, colno = 182, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"scheme"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 84, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"id"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a> ";
output += runtime.suppressValue((lineno = 85, colno = 120, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier"),"legalName"])), env.opts.autoescape);
output += " </td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t";
frame = frame.push();
var t_5 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers");
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("identifier", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_6),"scheme"), env.opts.autoescape);
output += "</a> ";
output += runtime.suppressValue((lineno = 91, colno = 171, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"legalName"])), env.opts.autoescape);
output += " </td>\n\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_6),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 92, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"id"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_6),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_6),"legalName"), env.opts.autoescape);
output += "</a>";
output += runtime.suppressValue((lineno = 93, colno = 95, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_6,"legalName"])), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
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
output += runtime.suppressValue((lineno = 100, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No identifier data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsAfter"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n</p>\n";
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
function b_additionalOrgFieldsBefore(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsAfter(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_additionalOrgFieldsBefore: b_additionalOrgFieldsBefore,
b_additionalOrgFieldsAfter: b_additionalOrgFieldsAfter,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("organization.html", true, "organization_ppp.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsBefore"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("additionalOrgFieldsAfter"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsBefore(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"roles")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n      <strong> ";
output += runtime.suppressValue((lineno = 5, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Roles within process"])), env.opts.autoescape);
output += " </strong> \n\t\t</div>\n\t\t<div class=\"panel-body\">\n      <ul>\n      ";
frame = frame.push();
var t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"roles");
if(t_9) {var t_8 = t_9.length;
for(var t_7=0; t_7 < t_9.length; t_7++) {
var t_10 = t_9[t_7];
frame.set("role", t_10);
frame.set("loop.index", t_7 + 1);
frame.set("loop.index0", t_7);
frame.set("loop.revindex", t_8 - t_7);
frame.set("loop.revindex0", t_8 - t_7 - 1);
frame.set("loop.first", t_7 === 0);
frame.set("loop.last", t_7 === t_8 - 1);
frame.set("loop.length", t_8);
output += "\n       <li>\n       ";
output += runtime.suppressValue(t_10, env.opts.autoescape);
output += "\n       </li>\n      ";
;
}
}
frame = frame.pop();
output += "\n      <ul>\n\t\t</div>\n\t</div>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_additionalOrgFieldsAfter(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t";
output += runtime.suppressValue((lineno = 24, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholders"])), env.opts.autoescape);
output += "\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders")) {
output += "\n\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 32, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholder"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 33, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Shareholding"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 34, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Voting Rights"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 35, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Voting Rights Details"])), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n            ";
frame = frame.push();
var t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"shareholders");
if(t_13) {var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("shareholder", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\n              <tr>\n                <td> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 41, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_14),"shareholder"),"name"])), env.opts.autoescape);
output += "\n                  <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_14),"shareholder")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 42, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((t_14),"shareholder"),"id"])), env.opts.autoescape);
output += ") </small> </td>\n                <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"shareholding") * 100, env.opts.autoescape);
output += "% ";
output += runtime.suppressValue((lineno = 43, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"shareholding"])), env.opts.autoescape);
output += " </td>\n                <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"votingRights"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 58, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"votingRights"])), env.opts.autoescape);
output += " </td>\n                <td> ";
output += runtime.suppressValue(runtime.memberLookup((t_14),"votingRightsDetails"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 45, colno = 65, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [t_14,"votingRightsDetails"])), env.opts.autoescape);
output += " </td>\n              </tr>\n            ";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
output += runtime.suppressValue((lineno = 51, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No shareholder data provided"])), env.opts.autoescape);
output += "\n\t\t\t";
;
}
output += "\n\t\t</div>\n\t</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_additionalOrgFieldsBefore: b_additionalOrgFieldsBefore,
b_additionalOrgFieldsAfter: b_additionalOrgFieldsAfter,
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
output += "<section id=\"planning\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-body\">\n            <dl> \n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 7, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 12, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"amount"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 14, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"currency"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 16, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 21, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 26, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"id"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 28, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 33, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget Source"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\n                  <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "</a>\n                  ";
output += runtime.suppressValue((lineno = 38, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"source"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 40, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source not provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 46, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 51, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"description"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 53, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                  ";
output += runtime.suppressValue((lineno = 58, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 63, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "planning"),"rationale"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   ";
output += runtime.suppressValue((lineno = 65, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget rationale not provided"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n               </dd>\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap dt-inline\">\n                 ";
output += runtime.suppressValue((lineno = 69, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project Name"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 74, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"project"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 76, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project name not provided."])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n               </dd>\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                 ";
output += runtime.suppressValue((lineno = 80, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 85, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"projectID"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 87, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID not provided"])), env.opts.autoescape);
output += ")</span>\n                 ";
;
}
output += "\n               </dd>\n             </dl> \n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
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
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 107, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 111, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n</section>\n\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["planning_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n<section id=\"planning\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-body\">\n            <dl> \n\t\t\t\t\t\t   <dt class=\"dt-large\">\n                  ";
output += runtime.suppressValue((lineno = 8, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 13, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "planning"),"rationale"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   ";
output += runtime.suppressValue((lineno = 15, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget rationale not provided"])), env.opts.autoescape);
output += "\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 20, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 25, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"amount"])), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 27, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount"),"currency"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 29, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 34, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 39, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"id"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue((lineno = 41, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-small dt-inline\">\n                ";
output += runtime.suppressValue((lineno = 46, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget Source"])), env.opts.autoescape);
output += " \n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small dd-inline\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\n                  <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "</a>\n                  ";
output += runtime.suppressValue((lineno = 51, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"source"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 53, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source not provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                ";
output += runtime.suppressValue((lineno = 59, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 64, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget"),"description"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 66, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n\n             </dl> \n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"project")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"project");
frame.set("project", t_1, true);
if(frame.topLevel) {
context.setVariable("project", t_1);
}
if(frame.topLevel) {
context.addExport("project", t_1);
}
output += "\n\t\t\t\t\t";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("project.html", false, "planning_ppp.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 88, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 92, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No project provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"forecasts")) {
output += "\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 105, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Forecasts"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n              ";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"forecasts");
frame.set("metrics", t_7, true);
if(frame.topLevel) {
context.setVariable("metrics", t_7);
}
if(frame.topLevel) {
context.addExport("metrics", t_7);
}
output += "\n              ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n              ";
env.getTemplate("metrics.html", false, "planning_ppp.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 118, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Forecasts"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 122, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No forecasts provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"milestones");
frame.set("milestones", t_13, true);
if(frame.topLevel) {
context.setVariable("milestones", t_13);
}
if(frame.topLevel) {
context.addExport("milestones", t_13);
}
output += "\n\t\t\t\t\t";
var t_14;
t_14 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_14, true);
if(frame.topLevel) {
context.setVariable("parent", t_14);
}
if(frame.topLevel) {
context.addExport("parent", t_14);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "planning_ppp.html", null, function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
t_15.render(context.getVariables(), frame, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
output += t_16
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 139, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 143, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents")) {
output += "\n\t\t\t\t\t";
var t_19;
t_19 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
frame.set("documents", t_19, true);
if(frame.topLevel) {
context.setVariable("documents", t_19);
}
if(frame.topLevel) {
context.addExport("documents", t_19);
}
output += "\n\t\t\t\t\t";
var t_20;
t_20 = runtime.contextOrFrameLookup(context, frame, "planning");
frame.set("parent", t_20, true);
if(frame.topLevel) {
context.setVariable("parent", t_20);
}
if(frame.topLevel) {
context.addExport("parent", t_20);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning_ppp.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 160, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 164, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n</section>\n\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["prequalification.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"preQualification");
frame.set("tender", t_1, true);
if(frame.topLevel) {
context.setVariable("tender", t_1);
}
if(frame.topLevel) {
context.addExport("tender", t_1);
}
output += "\n<div class=\"row\">\n\n  <div class=\"col-xs-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 7, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"description"])), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 9, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n        <dl> \n           <dt class=\"dt-large dt-inline dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 13, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline dd-gap\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 17, colno = 44, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"status"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 19, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-inline\">\n              ";
output += runtime.suppressValue((lineno = 24, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-large dd-inline\">\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 28, colno = 57, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"eligibilityCriteria"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 30, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 35, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n            <strong>";
output += runtime.suppressValue((lineno = 38, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"startDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 40, colno = 72, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period"),"startDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 42, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n            <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 44, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"endDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 46, colno = 70, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"period"),"endDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 48, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n            <br/>\n            <strong>";
output += runtime.suppressValue((lineno = 51, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 53, colno = 77, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"startDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 55, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n            <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 57, colno = 45, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\n            ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n              ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 59, colno = 75, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"endDate"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 61, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n            ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 66, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n             <p>\n             ";
output += runtime.suppressValue((lineno = 70, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"hasEnquiries"])), env.opts.autoescape);
output += "\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n               ";
output += runtime.suppressValue((lineno = 72, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n               ";
output += runtime.suppressValue((lineno = 74, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 76, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
;
}
output += "\n             </p>\n             <strong>";
output += runtime.suppressValue((lineno = 79, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n             ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n               ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 82, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"startDate"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 84, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
output += "\n             <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 86, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n             ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n               ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 89, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"endDate"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 91, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 96, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n             <strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += ":";
output += runtime.suppressValue((lineno = 100, colno = 58, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethod"])), env.opts.autoescape);
output += "</strong>\t<!-- set up a filter or function to convert between codelist values and titles -->\n             ";
;
}
else {
output += "\n               <strong>No procurement method provided </strong>\n             ";
;
}
output += "\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 105, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethodRationale"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 107, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 112, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n             <strong>\n               ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n                 ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += ":\n                 ";
output += runtime.suppressValue((lineno = 118, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteria"])), env.opts.autoescape);
output += "\n               ";
;
}
else {
output += "\n                 ";
output += runtime.suppressValue((lineno = 120, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\n               ";
;
}
output += "\n             </strong>\n             ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n               ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n               ";
output += runtime.suppressValue((lineno = 125, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteriaDetails"])), env.opts.autoescape);
output += "\n             ";
;
}
else {
output += "\n               <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 127, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
output += "</span>\n             ";
;
}
output += "\n           </dd>\n\n           <dt class=\"dt-large dt-gap\">\n             ";
output += runtime.suppressValue((lineno = 132, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n           </dt>\n           <dd class=\"dd-small\">\n            <strong>\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n                ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += ":\n                ";
output += runtime.suppressValue((lineno = 138, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethod"])), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n                ";
output += runtime.suppressValue((lineno = 140, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n            </strong>\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n              ";
output += runtime.suppressValue((lineno = 145, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethodDetails"])), env.opts.autoescape);
output += "\n            ";
;
}
else {
output += "\n              <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 147, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\n            ";
;
}
output += "\n           </dd>\n         </dl> \n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n      ";
var t_2;
t_2 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_2, true);
if(frame.topLevel) {
context.setVariable("documents", t_2);
}
if(frame.topLevel) {
context.addExport("documents", t_2);
}
output += "\n      ";
var t_3;
t_3 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_3, true);
if(frame.topLevel) {
context.setVariable("parent", t_3);
}
if(frame.topLevel) {
context.addExport("parent", t_3);
}
output += "\n      ";
env.getTemplate("documents.html", false, "prequalification.html", null, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
t_4.render(context.getVariables(), frame, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
output += t_5
output += "\n    ";
})});
}
else {
output += "\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 165, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
output += runtime.suppressValue((lineno = 169, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n        </div>\n      </div>\n    ";
;
}
output += "\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n           ";
output += runtime.suppressValue((lineno = 181, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procuring Entity"])), env.opts.autoescape);
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"col-md-12\">\n          ";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity");
frame.set("organization", t_8, true);
if(frame.topLevel) {
context.setVariable("organization", t_8);
}
if(frame.topLevel) {
context.addExport("organization", t_8);
}
output += "\n          ";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n            ";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity");
frame.set("organization", t_9, true);
if(frame.topLevel) {
context.setVariable("organization", t_9);
}
if(frame.topLevel) {
context.addExport("organization", t_9);
}
output += "\n          ";
;
}
output += "\n          ";
env.getTemplate("organization.html", false, "prequalification.html", null, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
t_10.render(context.getVariables(), frame, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
output += t_11
output += "\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">\n           ";
output += runtime.suppressValue((lineno = 202, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 202, colno = 129, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\n        </h3>\n      </div>\n      <div class=\"panel-body\">\n        ";
frame = frame.push();
var t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_16) {var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("tenderer", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n          <div class=\"col-md-12\">\n            ";
var t_18;
t_18 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_17),"id"));
frame.set("organization", t_18, true);
if(frame.topLevel) {
context.setVariable("organization", t_18);
}
if(frame.topLevel) {
context.addExport("organization", t_18);
}
output += "\n            ";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n              ";
var t_19;
t_19 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),t_17);
frame.set("organization", t_19, true);
if(frame.topLevel) {
context.setVariable("organization", t_19);
}
if(frame.topLevel) {
context.addExport("organization", t_19);
}
output += "\n            ";
;
}
output += "\n            ";
env.getTemplate("organization.html", false, "prequalification.html", null, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
t_20.render(context.getVariables(), frame, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
output += t_21
output += "\n          </div>\n        ";
})});
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n      ";
var t_24;
t_24 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_24, true);
if(frame.topLevel) {
context.setVariable("milestones", t_24);
}
if(frame.topLevel) {
context.addExport("milestones", t_24);
}
output += "\n      ";
var t_25;
t_25 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_25, true);
if(frame.topLevel) {
context.setVariable("parent", t_25);
}
if(frame.topLevel) {
context.addExport("parent", t_25);
}
output += "\n      ";
env.getTemplate("milestones.html", false, "prequalification.html", null, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
t_26.render(context.getVariables(), frame, function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
output += t_27
output += "\n    ";
})});
}
else {
output += "\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">\n            ";
output += runtime.suppressValue((lineno = 229, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n          </h3>\n        </div>\n        <div class=\"panel-body\">\n          ";
output += runtime.suppressValue((lineno = 233, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n        </div>\n      </div>\n    ";
;
}
output += "\n  </div>\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["project.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(runtime.contextOrFrameLookup(context, frame, "project")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n      ";
output += runtime.suppressValue((lineno = 3, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "parent"),"project"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 46, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project: "])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"title"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 87, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"title"])), env.opts.autoescape);
output += " <small> (";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"id"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 3, colno = 138, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"id"])), env.opts.autoescape);
output += ")</small>\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n  <dl> \n    <dt class=\"dt-large\">\n    </dt>\n    <dd class=\"dd-large\">\n     ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"description")) {
output += "\n       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"description"), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue((lineno = 13, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"description"])), env.opts.autoescape);
output += "\n     ";
;
}
else {
output += "\n       ";
output += runtime.suppressValue((lineno = 15, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project description not provided"])), env.opts.autoescape);
output += "\n     ";
;
}
output += "\n    </dd>\n    <dt class=\"dt-large dt-inline dt-gap\">\n       Further Information\n    </dt>\n    <dd class=\"dd-large dd-inline dd-gap\">\n     ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"uri")) {
output += "\n       <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"uri"), env.opts.autoescape);
output += "</a>\n       ";
output += runtime.suppressValue((lineno = 24, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"uri"])), env.opts.autoescape);
output += "\n     ";
;
}
else {
output += "\n       ";
output += runtime.suppressValue((lineno = 26, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Further information not provided"])), env.opts.autoescape);
output += "\n     ";
;
}
output += "\n    </dd>\n    <dt class=\"dt-large dt-inline dt-gap\">\n     ";
output += runtime.suppressValue((lineno = 30, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Total Amount"])), env.opts.autoescape);
output += " \n    </dt>\n    <dd class=\"dd-large dd-inline dd-gap\">\n     ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue")),"amount")) {
output += "\n       ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue")),"amount")), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue((lineno = 35, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue"),"amount"])), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue")),"currency"), env.opts.autoescape);
output += "\n       ";
output += runtime.suppressValue((lineno = 37, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"totalValue"),"currency"])), env.opts.autoescape);
output += "\n     ";
;
}
else {
output += "\n       ";
output += runtime.suppressValue((lineno = 39, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Total amount not provided"])), env.opts.autoescape);
output += "\n     ";
;
}
output += "\n   </dd>\n   <dt class=\"dt-large dt-gap\"> ";
output += runtime.suppressValue((lineno = 42, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Sector Classifications"])), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 42, colno = 78, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"sector"])), env.opts.autoescape);
output += " </dt>\n   <dd class=\"dd-large\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 47, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"description"])), env.opts.autoescape);
output += "\n      <small>\n        (<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"scheme"), env.opts.autoescape);
output += "</a> -\n        ";
output += runtime.suppressValue((lineno = 47, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"scheme"])), env.opts.autoescape);
output += "\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"uri")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"id"), env.opts.autoescape);
output += "</a>)\n          ";
output += runtime.suppressValue((lineno = 50, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"uri"])), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector")),"id"), env.opts.autoescape);
output += ")\n          ";
output += runtime.suppressValue((lineno = 53, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"sector"),"id"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </small>\n      ";
output += runtime.suppressValue((lineno = 56, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "project"),"additionalClassifications"])), env.opts.autoescape);
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"additionalClassifications")) {
output += "\n        ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "project")),"additionalClassifications");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("classification", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          <br>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "\n          <small>\n            (<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a> -\n            ";
if(runtime.memberLookup((t_4),"uri")) {
output += "\n              <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</a>)\n            ";
;
}
else {
output += "\n              ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += ")\n            ";
;
}
output += "\n          </small>\n        ";
;
}
}
frame = frame.pop();
output += "\n      ";
;
}
output += "\n   </dd>\n   ";
output += "\n  </dl> \n\t</div>\n</div>\n";
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
env.getTemplate("record_release_base.html", true, "record_release.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("release"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
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
function b_release(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
env.getTemplate("release.html", false, "record_release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_release: b_release,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_release_base.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<ul class=\"release-timeline\">\n";
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
output += "\n</ul>\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("release"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_release(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_release: b_release,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["record_release_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("record_release_base.html", true, "record_release_ppp.html", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("release"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n";
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
function b_release(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n  ";
env.getTemplate("release_ppp.html", false, "record_release_ppp.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_release: b_release,
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
output += "  ";
var macro_t_1 = runtime.makeMacro(
["object", "key"], 
[], 
function (l_object, l_key, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("object", l_object);
frame.set("key", l_key);
var t_2 = "";t_2 += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "get_change")) {
t_2 += "\n      ";
var t_3;
t_3 = (lineno = 2, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "get_change"), "get_change", context, [l_object,l_key]));
frame.set("change", t_3, true);
if(frame.topLevel) {
context.setVariable("change", t_3);
}
if(frame.topLevel) {
context.addExport("change", t_3);
}
t_2 += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "change") == "new") {
t_2 += "\n        <span class=\"label label-success ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 4, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["new"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "change") == "changed") {
t_2 += "\n        <span class=\"label label-primary ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 6, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["changed"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
;
}
t_2 += "\n    ";
;
}
t_2 += "\n  ";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("change_label");
context.setVariable("change_label", macro_t_1);
output += "\n\n  <h1>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"title"), env.opts.autoescape);
output += " ";
if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"title")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += " ";
;
}
output += "  \n  </h1>\n\n<main class=\"row\">\n\n  <ul class=\"release-pills col-md-3 nav nav-pills nav-stacked\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#metadata\">Metadata</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "disabled";
;
}
output += "\" ><a href=\"#procuringEntity\">Procuring entity ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += runtime.suppressValue((lineno = 19, colno = 181, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"tender"])), env.opts.autoescape);
;
}
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "disabled";
;
}
output += "\" ><a href=\"#buyer\">Buyer ";
output += runtime.suppressValue((lineno = 20, colno = 108, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"buyer"])), env.opts.autoescape);
output += " </a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning")) {
output += "disabled";
;
}
output += "\" ><a href=\"#planning\">Planning ";
output += runtime.suppressValue((lineno = 21, colno = 117, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"planning"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")) {
output += "disabled";
;
}
output += " \" ><a href=\"#tender\">Tender ";
output += runtime.suppressValue((lineno = 22, colno = 113, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"tender"])), env.opts.autoescape);
output += "</a> </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards")) {
output += "disabled";
;
}
output += "\" ><a href=\"#awards\">Awards ";
output += runtime.suppressValue((lineno = 23, colno = 112, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"awards"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")) {
output += "disabled";
;
}
output += "\" ><a href=\"#contracts\">Contracts ";
output += runtime.suppressValue((lineno = 24, colno = 121, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"contracts"])), env.opts.autoescape);
output += "</a></li>\n  </ul>\n\n\n  <div id=\"release-tabs\" class=\"tab-content\">\n\t<div class=\"col-md-9 tab-pane active\" id=\"metadata\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>OCID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"id"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Date: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"date"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Tags: </strong>\n              ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag")) {
output += "\n                ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag"),", "), env.opts.autoescape);
output += "\n              ";
;
}
else {
output += "\n\t\t\t\t\t\t\t  ";
output += runtime.suppressValue((lineno = 45, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Tags Provided"])), env.opts.autoescape);
output += "\n              ";
;
}
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"initiationType"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t</div>\n\t<div class=\"col-md-9 tab-pane\" id=\"procuringEntity\">\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity")) {
output += "\n      ";
var t_4;
t_4 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")),"procuringEntity");
frame.set("organization", t_4, true);
if(frame.topLevel) {
context.setVariable("organization", t_4);
}
if(frame.topLevel) {
context.addExport("organization", t_4);
}
output += "\n      ";
env.getTemplate("organization.html", false, "release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n    ";
})});
}
else {
output += "\n      ";
output += runtime.suppressValue((lineno = 58, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No procuring entity information provided"])), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n  </div>\n\t<div class=\"col-md-9 tab-pane\" id=\"buyer\">\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer")) {
output += "\n      ";
var t_9;
t_9 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"buyer");
frame.set("organization", t_9, true);
if(frame.topLevel) {
context.setVariable("organization", t_9);
}
if(frame.topLevel) {
context.addExport("organization", t_9);
}
output += "\n      ";
var t_10;
t_10 = (lineno = 64, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Buyer"]));
frame.set("title", t_10, true);
if(frame.topLevel) {
context.setVariable("title", t_10);
}
if(frame.topLevel) {
context.addExport("title", t_10);
}
output += "\n      ";
env.getTemplate("organization.html", false, "release.html", null, function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
t_11.render(context.getVariables(), frame, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
output += t_12
output += "\n    ";
})});
}
else {
output += "\n      ";
output += runtime.suppressValue((lineno = 67, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No buyer information provided"])), env.opts.autoescape);
output += "\n    ";
;
}
output += "\n\t</div>\n\n  ";
var t_15;
t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning");
frame.set("planning", t_15, true);
if(frame.topLevel) {
context.setVariable("planning", t_15);
}
if(frame.topLevel) {
context.addExport("planning", t_15);
}
output += "\n\t<div id=\"planning\" class=\"tab-pane col-md-9\">\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n\t\t\t";
env.getTemplate("planning.html", false, "release.html", null, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
t_16.render(context.getVariables(), frame, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
output += t_17
output += "\n\t\t";
})});
}
else {
output += "\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h2 class=\"panel-title\">\n\t\t\t\t\t\tNo planning data provided\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
;
}
output += "\n\t</div>\n  ";
var t_20;
t_20 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender");
frame.set("tender", t_20, true);
if(frame.topLevel) {
context.setVariable("tender", t_20);
}
if(frame.topLevel) {
context.addExport("tender", t_20);
}
output += "\n\t<div id=\"tender\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("tender.html", false, "release.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\n\t</div>\n  ";
var t_25;
t_25 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards");
frame.set("awards", t_25, true);
if(frame.topLevel) {
context.setVariable("awards", t_25);
}
if(frame.topLevel) {
context.addExport("awards", t_25);
}
output += "\n\t<div id=\"awards\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("awards.html", false, "release.html", null, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
t_26.render(context.getVariables(), frame, function(t_29,t_27) {
if(t_29) { cb(t_29); return; }
output += t_27
output += "\n\t</div>\n  ";
var t_30;
t_30 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts");
frame.set("contracts", t_30, true);
if(frame.topLevel) {
context.setVariable("contracts", t_30);
}
if(frame.topLevel) {
context.addExport("contracts", t_30);
}
output += "\n\t<div id=\"contracts\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("contracts.html", false, "release.html", null, function(t_33,t_31) {
if(t_33) { cb(t_33); return; }
t_31.render(context.getVariables(), frame, function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
output += t_32
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\n  ";
var macro_t_1 = runtime.makeMacro(
["object", "key"], 
[], 
function (l_object, l_key, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("object", l_object);
frame.set("key", l_key);
var t_2 = "";t_2 += "\n    ";
if(runtime.contextOrFrameLookup(context, frame, "get_change")) {
t_2 += "\n      ";
var t_3;
t_3 = (lineno = 3, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "get_change"), "get_change", context, [l_object,l_key]));
frame.set("change", t_3, true);
if(frame.topLevel) {
context.setVariable("change", t_3);
}
if(frame.topLevel) {
context.addExport("change", t_3);
}
t_2 += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "change") == "new") {
t_2 += "\n        <span class=\"label label-success ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 5, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["new"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "change") == "changed") {
t_2 += "\n        <span class=\"label label-primary ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "class"), env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue((lineno = 7, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["changed"])), env.opts.autoescape);
t_2 += "</span>\n      ";
;
}
;
}
t_2 += "\n    ";
;
}
t_2 += "\n  ";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("change_label");
context.setVariable("change_label", macro_t_1);
output += "\n\n  <h1>\n    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"title"), env.opts.autoescape);
output += " ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"title")) {
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += " ";
;
}
output += "  \n  </h1>\n\n<main class=\"row\">\n\n  <ul class=\"release-pills col-md-3 nav nav-pills nav-stacked\">\n    <li role=\"presentation\" class=\"active\"><a href=\"#metadata\">Description</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"relatedProcesses")) {
output += "disabled";
;
}
output += "\" >\n       <a href=\"#relatedProcesses\">Related Processes ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"relatedProcesses")) {
output += runtime.suppressValue((lineno = 21, colno = 94, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"relatedProcesses"])), env.opts.autoescape);
;
}
output += "</a>\n    </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties")) {
output += "disabled";
;
}
output += "\" >\n       <a href=\"#parties\">Parties ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties")) {
output += runtime.suppressValue((lineno = 24, colno = 66, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"parties"])), env.opts.autoescape);
;
}
output += "</a>\n    </li>\n\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority")) {
output += "disabled";
;
}
output += "\" ><a href=\"#publicAuthority\">Public Authority ";
output += runtime.suppressValue((lineno = 27, colno = 139, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"publicAuthority"])), env.opts.autoescape);
output += " </a></li>\n\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning")) {
output += "disabled";
;
}
output += "\" ><a href=\"#planning\">Planning ";
output += runtime.suppressValue((lineno = 29, colno = 117, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"planning"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"preQualification")) {
output += "disabled";
;
}
output += " \" ><a href=\"#preQualification\">Pre-Qualification ";
output += runtime.suppressValue((lineno = 30, colno = 144, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"preQualification"])), env.opts.autoescape);
output += "</a> </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender")) {
output += "disabled";
;
}
output += " \" ><a href=\"#tender\">Tender ";
output += runtime.suppressValue((lineno = 31, colno = 113, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"tender"])), env.opts.autoescape);
output += "</a> </li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards")) {
output += "disabled";
;
}
output += "\" ><a href=\"#awards\">Awards ";
output += runtime.suppressValue((lineno = 32, colno = 112, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"awards"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")) {
output += "disabled";
;
}
output += "\" ><a href=\"#contracts\">Contract ";
output += runtime.suppressValue((lineno = 33, colno = 120, runtime.callWrap(macro_t_1, "change_label", context, [runtime.contextOrFrameLookup(context, frame, "release"),"contracts"])), env.opts.autoescape);
output += "</a></li>\n    <li role=\"presentation\" class=\"";
if(!runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")),0)),"implementation")) {
output += "disabled";
;
}
output += "\" >\n      <a href=\"#implementation\">Implementation ";
output += runtime.suppressValue((lineno = 35, colno = 60, runtime.callWrap(macro_t_1, "change_label", context, [runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")),0)),"implementation"),"contracts"])), env.opts.autoescape);
output += "</a>\n    </li>\n  </ul>\n\n\n  <div id=\"release-tabs\" class=\"tab-content\">\n\t<div class=\"col-md-9 tab-pane active\" id=\"metadata\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n         ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"description"), env.opts.autoescape);
output += "\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <strong>OCID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"ocid"), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"id"), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Date: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"date"), env.opts.autoescape);
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Tags: </strong>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag")) {
output += "\n          ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tag"),", "), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n          ";
output += runtime.suppressValue((lineno = 62, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Tags Provided"])), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </li>\n      <li class=\"list-group-item\">\n        <strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"initiationType"), env.opts.autoescape);
output += "\n      </li>\n    </ul>\n\t</div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"relatedProcesses\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <table class=\"table table-striped table-responsive\">\n          <thead>\n            <tr>\n              <th>\n                Title\n              </th>\n              <th>\n                ID\n              </th>\n              <th>\n                OCID\n              </th>\n              <th>\n                Relationship\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            ";
frame = frame.push();
var t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"relatedProcesses");
if(t_6) {var t_5 = t_6.length;
for(var t_4=0; t_4 < t_6.length; t_4++) {
var t_7 = t_6[t_4];
frame.set("relatedProcess", t_7);
frame.set("loop.index", t_4 + 1);
frame.set("loop.index0", t_4);
frame.set("loop.revindex", t_5 - t_4);
frame.set("loop.revindex0", t_5 - t_4 - 1);
frame.set("loop.first", t_4 === 0);
frame.set("loop.last", t_4 === t_5 - 1);
frame.set("loop.length", t_5);
output += "\n            <tr>\n              <td>\n                ";
if(runtime.memberLookup((t_7),"uri")) {
output += "\n                  <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_7),"uri"), env.opts.autoescape);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((t_7),"title"), env.opts.autoescape);
output += " </a>\n                ";
;
}
else {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((t_7),"title"), env.opts.autoescape);
output += "\n                ";
;
}
output += "\n              </td>\n              <td>\n                ";
output += runtime.suppressValue(runtime.memberLookup((t_7),"id"), env.opts.autoescape);
output += "\n              </td>\n              <td>\n                ";
output += runtime.suppressValue(runtime.memberLookup((t_7),"ocid"), env.opts.autoescape);
output += "\n              </td>\n              <td>\n                ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((t_7),"relationship"),", "), env.opts.autoescape);
output += "\n              </td>\n            </tr>\n            ";
;
}
}
frame = frame.pop();
output += "\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"parties\">\n    ";
frame = frame.push();
var t_10 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"parties");
if(t_10) {var t_9 = t_10.length;
for(var t_8=0; t_8 < t_10.length; t_8++) {
var t_11 = t_10[t_8];
frame.set("organization", t_11);
frame.set("loop.index", t_8 + 1);
frame.set("loop.index0", t_8);
frame.set("loop.revindex", t_9 - t_8);
frame.set("loop.revindex0", t_9 - t_8 - 1);
frame.set("loop.first", t_8 === 0);
frame.set("loop.last", t_8 === t_9 - 1);
frame.set("loop.length", t_9);
output += "\n      ";
env.getTemplate("organization_ppp.html", false, "release_ppp.html", null, function(t_14,t_12) {
if(t_14) { cb(t_14); return; }
t_12.render(context.getVariables(), frame, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
output += t_13
output += "\n      ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
output += "\n        <hr>\n      ";
;
}
output += "\n    ";
})});
}
}
frame = frame.pop();
output += "\n  </div>\n\n\t<div class=\"col-md-9 tab-pane\" id=\"publicAuthority\">\n    ";
var t_16;
t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority")),"id"));
frame.set("organization", t_16, true);
if(frame.topLevel) {
context.setVariable("organization", t_16);
}
if(frame.topLevel) {
context.addExport("organization", t_16);
}
output += "\n    ";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n      ";
var t_17;
t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"publicAuthority");
frame.set("organization", t_17, true);
if(frame.topLevel) {
context.setVariable("organization", t_17);
}
if(frame.topLevel) {
context.addExport("organization", t_17);
}
output += "\n    ";
;
}
output += "\n    ";
var t_18;
t_18 = (lineno = 132, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Public authority"]));
frame.set("title", t_18, true);
if(frame.topLevel) {
context.setVariable("title", t_18);
}
if(frame.topLevel) {
context.addExport("title", t_18);
}
output += "\n    ";
env.getTemplate("organization_ppp.html", false, "release_ppp.html", null, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
t_19.render(context.getVariables(), frame, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
output += t_20
output += "\n\t</div>\n\n\n\n  ";
var t_23;
t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"planning");
frame.set("planning", t_23, true);
if(frame.topLevel) {
context.setVariable("planning", t_23);
}
if(frame.topLevel) {
context.addExport("planning", t_23);
}
output += "\n\t<div id=\"planning\" class=\"tab-pane col-md-9\">\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n\t\t\t";
env.getTemplate("planning_ppp.html", false, "release_ppp.html", null, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
t_24.render(context.getVariables(), frame, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
output += t_25
output += "\n\t\t";
})});
}
else {
output += "\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h2 class=\"panel-title\">\n\t\t\t\t\t\tNo planning data provided\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
;
}
output += "\n\t</div>\n\t<div id=\"preQualification\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("prequalification.html", false, "release_ppp.html", null, function(t_30,t_28) {
if(t_30) { cb(t_30); return; }
t_28.render(context.getVariables(), frame, function(t_31,t_29) {
if(t_31) { cb(t_31); return; }
output += t_29
output += "\n\t</div>\n  ";
var t_32;
t_32 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"tender");
frame.set("tender", t_32, true);
if(frame.topLevel) {
context.setVariable("tender", t_32);
}
if(frame.topLevel) {
context.addExport("tender", t_32);
}
output += "\n\t<div id=\"tender\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("tender_ppp.html", false, "release_ppp.html", null, function(t_35,t_33) {
if(t_35) { cb(t_35); return; }
t_33.render(context.getVariables(), frame, function(t_36,t_34) {
if(t_36) { cb(t_36); return; }
output += t_34
output += "\n\t</div>\n  ";
var t_37;
t_37 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"awards");
frame.set("awards", t_37, true);
if(frame.topLevel) {
context.setVariable("awards", t_37);
}
if(frame.topLevel) {
context.addExport("awards", t_37);
}
output += "\n\t<div id=\"awards\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("awards.html", false, "release_ppp.html", null, function(t_40,t_38) {
if(t_40) { cb(t_40); return; }
t_38.render(context.getVariables(), frame, function(t_41,t_39) {
if(t_41) { cb(t_41); return; }
output += t_39
output += "\n\t</div>\n  ";
var t_42;
t_42 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts");
frame.set("contracts", t_42, true);
if(frame.topLevel) {
context.setVariable("contracts", t_42);
}
if(frame.topLevel) {
context.addExport("contracts", t_42);
}
output += "\n\t<div id=\"contracts\" class=\"tab-pane col-md-9\">\n\t\t";
env.getTemplate("contracts_ppp.html", false, "release_ppp.html", null, function(t_45,t_43) {
if(t_45) { cb(t_45); return; }
t_43.render(context.getVariables(), frame, function(t_46,t_44) {
if(t_46) { cb(t_46); return; }
output += t_44
output += " \t\t\n\t</div>\n\n\t<div id=\"implementation\" class=\"tab-pane col-md-9\">\n    ";
var t_47;
t_47 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "release")),"contracts")),0);
frame.set("contract", t_47, true);
if(frame.topLevel) {
context.setVariable("contract", t_47);
}
if(frame.topLevel) {
context.addExport("contract", t_47);
}
output += "\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ";
var t_48;
t_48 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"transactions");
frame.set("transactions", t_48, true);
if(frame.topLevel) {
context.setVariable("transactions", t_48);
}
if(frame.topLevel) {
context.addExport("transactions", t_48);
}
output += "\n        ";
var t_49;
t_49 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_49, true);
if(frame.topLevel) {
context.setVariable("parent", t_49);
}
if(frame.topLevel) {
context.addExport("parent", t_49);
}
output += "\n        ";
env.getTemplate("transactions.html", false, "release_ppp.html", null, function(t_52,t_50) {
if(t_52) { cb(t_52); return; }
t_50.render(context.getVariables(), frame, function(t_53,t_51) {
if(t_53) { cb(t_53); return; }
output += t_51
output += "\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones")) {
output += "\n          ";
var t_54;
t_54 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"milestones");
frame.set("milestones", t_54, true);
if(frame.topLevel) {
context.setVariable("milestones", t_54);
}
if(frame.topLevel) {
context.addExport("milestones", t_54);
}
output += "\n          ";
var t_55;
t_55 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_55, true);
if(frame.topLevel) {
context.setVariable("parent", t_55);
}
if(frame.topLevel) {
context.addExport("parent", t_55);
}
output += "\n          ";
env.getTemplate("milestones.html", false, "release_ppp.html", null, function(t_58,t_56) {
if(t_58) { cb(t_58); return; }
t_56.render(context.getVariables(), frame, function(t_59,t_57) {
if(t_59) { cb(t_59); return; }
output += t_57
output += "\n        ";
})});
}
else {
output += "\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                ";
output += runtime.suppressValue((lineno = 187, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n              </h3>\n            </div>\n            <div class=\"panel-body\">\n              ";
output += runtime.suppressValue((lineno = 191, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n            </div>\n          </div>\n        ";
;
}
output += "\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents")) {
output += "\n          ";
var t_60;
t_60 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"documents");
frame.set("documents", t_60, true);
if(frame.topLevel) {
context.setVariable("documents", t_60);
}
if(frame.topLevel) {
context.addExport("documents", t_60);
}
output += "\n          ";
var t_61;
t_61 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_61, true);
if(frame.topLevel) {
context.setVariable("parent", t_61);
}
if(frame.topLevel) {
context.addExport("parent", t_61);
}
output += "\n          ";
env.getTemplate("documents.html", false, "release_ppp.html", null, function(t_64,t_62) {
if(t_64) { cb(t_64); return; }
t_62.render(context.getVariables(), frame, function(t_65,t_63) {
if(t_65) { cb(t_65); return; }
output += t_63
output += "\n        ";
})});
}
else {
output += "\n          <div class=\"panel panel-warning\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                ";
output += runtime.suppressValue((lineno = 207, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n              </h3>\n            </div>\n            <div class=\"panel-body\">\n              ";
output += runtime.suppressValue((lineno = 211, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n            </div>\n          </div>\n        ";
;
}
output += "\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"metrics")) {
output += "\n\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 223, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n              ";
var t_66;
t_66 = runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation")),"metrics");
frame.set("metrics", t_66, true);
if(frame.topLevel) {
context.setVariable("metrics", t_66);
}
if(frame.topLevel) {
context.addExport("metrics", t_66);
}
output += "\n              ";
var t_67;
t_67 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "contract")),"implementation");
frame.set("parent", t_67, true);
if(frame.topLevel) {
context.setVariable("parent", t_67);
}
if(frame.topLevel) {
context.addExport("parent", t_67);
}
output += "\n              ";
env.getTemplate("metrics.html", false, "release_ppp.html", null, function(t_70,t_68) {
if(t_70) { cb(t_70); return; }
t_68.render(context.getVariables(), frame, function(t_71,t_69) {
if(t_71) { cb(t_71); return; }
output += t_69
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 236, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Metrics"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 240, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No Metrics provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n      </div>\n    </div>\n\t</div>\n</main>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})});
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
output += "    <h2> PPP Release\n\n    <label id=\"label-id-select\" class=\"pull-right\">\n        Release ID:\n    <select id=\"id-select\">\n      ";
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
output += "\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 5, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 10, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 12, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 21, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 27, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 29, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 39, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 43, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 45, colno = 53, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 45, colno = 125, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"currency"])), env.opts.autoescape);
output += "</small>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 47, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No minimum value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 49, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 51, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 51, colno = 116, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"currency"])), env.opts.autoescape);
output += "</small></p>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 53, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No value provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 64, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 69, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"eligibilityCriteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 71, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 80, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 85, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 87, colno = 72, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"startDate"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 93, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 95, colno = 70, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 97, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 101, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 103, colno = 71, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 105, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\t\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 109, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 111, colno = 69, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 113, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 123, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<p>\n            ";
output += runtime.suppressValue((lineno = 128, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"hasEnquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 130, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 132, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 134, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 138, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 141, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"startDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 143, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 147, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 150, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"endDate"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 152, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 165, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n\t\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 170, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethod"])), env.opts.autoescape);
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
output += " ";
output += runtime.suppressValue((lineno = 176, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethodRationale"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 178, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 188, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 195, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 197, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 203, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteriaDetails"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 205, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 215, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 222, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethod"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 224, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n                ";
output += runtime.suppressValue((lineno = 230, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethodDetails"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 232, colno = 41, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
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
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 249, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 253, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n\t\t\t\t\t";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n\t\t\t\t\t";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 269, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 273, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 284, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.contextOrFrameLookup(context, frame, "numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 284, colno = 119, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("tenderer", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
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
var t_17;
t_17 = t_16;
frame.set("organization", t_17, true);
if(frame.topLevel) {
context.setVariable("organization", t_17);
}
if(frame.topLevel) {
context.addExport("organization", t_17);
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "tender.html", null, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
t_18.render(context.getVariables(), frame, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
output += t_19
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_22;
t_22 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_22, true);
if(frame.topLevel) {
context.setVariable("milestones", t_22);
}
if(frame.topLevel) {
context.addExport("milestones", t_22);
}
output += "\n\t\t\t\t\t";
var t_23;
t_23 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_23, true);
if(frame.topLevel) {
context.setVariable("parent", t_23);
}
if(frame.topLevel) {
context.addExport("parent", t_23);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "tender.html", null, function(t_26,t_24) {
if(t_26) { cb(t_26); return; }
t_24.render(context.getVariables(), frame, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
output += t_25
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
output += "\n\t\t\t</div>\n\t\t</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tender_ppp.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 5, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"description"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 7, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No description provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n            <dl> \n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 11, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline dd-gap\">\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 15, colno = 48, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"status"])), env.opts.autoescape);
output += "\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue((lineno = 17, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No status provided"])), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-inline\">\n\t\t\t\t\t\t\t    ";
output += runtime.suppressValue((lineno = 22, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-large dd-inline\">\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 26, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"eligibilityCriteria"])), env.opts.autoescape);
output += "\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue((lineno = 28, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No eligibility criteria provided"])), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 33, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                <strong>";
output += runtime.suppressValue((lineno = 36, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 38, colno = 64, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 38, colno = 136, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue"),"currency"])), env.opts.autoescape);
output += "</small>\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 40, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No minimum value provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 42, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 44, colno = 61, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"amount"])), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += runtime.suppressValue((lineno = 44, colno = 127, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value"),"currency"])), env.opts.autoescape);
output += "</small>\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 46, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No value provided"])), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t    ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 51, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                <strong>";
output += runtime.suppressValue((lineno = 54, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 56, colno = 82, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 58, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 60, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 62, colno = 80, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 64, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <br/>\n                <strong>";
output += runtime.suppressValue((lineno = 67, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 69, colno = 81, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 71, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n                <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 73, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong>\n                ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n                  ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 75, colno = 79, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 77, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "<span>\n                ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 82, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 <p>\n                 ";
output += runtime.suppressValue((lineno = 86, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"hasEnquiries"])), env.opts.autoescape);
output += "\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n                   ";
output += runtime.suppressValue((lineno = 88, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been no enquiries regarding this tender"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n                   ";
output += runtime.suppressValue((lineno = 90, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 92, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No information on enquiries provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
;
}
output += "\n                 </p>\n                 <strong>";
output += runtime.suppressValue((lineno = 95, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries start: "])), env.opts.autoescape);
output += "</strong>\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n                   ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 98, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"startDate"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 100, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No start date provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n                 <strong class=\"gap-left\">";
output += runtime.suppressValue((lineno = 102, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries end: "])), env.opts.autoescape);
output += "</strong>\n                 ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n                   ";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 105, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod"),"endDate"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 107, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No end date provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 112, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n                 <strong>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += ":";
output += runtime.suppressValue((lineno = 116, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethod"])), env.opts.autoescape);
output += "</strong>\t<!-- set up a filter or function to convert between codelist values and titles -->\n                 ";
;
}
else {
output += "\n                   <strong>No procurement method provided </strong>\n                 ";
;
}
output += "\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue((lineno = 121, colno = 66, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"procurementMethodRationale"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 123, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n\t\t\t\t\t\t\t   ";
output += runtime.suppressValue((lineno = 128, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                 <strong>\n                   ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n                     ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += ":\n                     ";
output += runtime.suppressValue((lineno = 134, colno = 33, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteria"])), env.opts.autoescape);
output += "\n                   ";
;
}
else {
output += "\n                     ";
output += runtime.suppressValue((lineno = 136, colno = 29, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria provided"])), env.opts.autoescape);
output += "\n                   ";
;
}
output += "\n                 </strong>\n                 ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n                   ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n                   ";
output += runtime.suppressValue((lineno = 141, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"awardCriteriaDetails"])), env.opts.autoescape);
output += "\n                 ";
;
}
else {
output += "\n                   <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 143, colno = 52, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No award criteria details provided"])), env.opts.autoescape);
output += "</span>\n                 ";
;
}
output += "\n               </dd>\n\n\t\t\t\t\t\t   <dt class=\"dt-large dt-gap\">\n                 ";
output += runtime.suppressValue((lineno = 148, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t   </dt>\n               <dd class=\"dd-small\">\n                <strong>\n                  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n                    ";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += ":\n                    ";
output += runtime.suppressValue((lineno = 154, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethod"])), env.opts.autoescape);
output += "\n                  ";
;
}
else {
output += "\n                    ";
output += runtime.suppressValue((lineno = 156, colno = 28, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method provided"])), env.opts.autoescape);
output += "\n                  ";
;
}
output += "\n                </strong>\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n                  ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n                  ";
output += runtime.suppressValue((lineno = 161, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "change_label"), "change_label", context, [runtime.contextOrFrameLookup(context, frame, "tender"),"submissionMethodDetails"])), env.opts.autoescape);
output += "\n                ";
;
}
else {
output += "\n                  <span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 163, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No submission method details provided"])), env.opts.autoescape);
output += "</span>\n                ";
;
}
output += "\n               </dd>\n             </dl> \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
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
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_2, true);
if(frame.topLevel) {
context.setVariable("parent", t_2);
}
if(frame.topLevel) {
context.addExport("parent", t_2);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender_ppp.html", null, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
t_3.render(context.getVariables(), frame, function(t_6,t_4) {
if(t_6) { cb(t_6); return; }
output += t_4
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 181, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 185, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No items provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n\t\t\t\t\t";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_7, true);
if(frame.topLevel) {
context.setVariable("documents", t_7);
}
if(frame.topLevel) {
context.addExport("documents", t_7);
}
output += "\n\t\t\t\t\t";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_8, true);
if(frame.topLevel) {
context.setVariable("parent", t_8);
}
if(frame.topLevel) {
context.addExport("parent", t_8);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender_ppp.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 201, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 205, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No documents provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 217, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procuring Entity"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n            <div class=\"col-md-12\">\n              ";
var t_13;
t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity")),"id"));
frame.set("organization", t_13, true);
if(frame.topLevel) {
context.setVariable("organization", t_13);
}
if(frame.topLevel) {
context.addExport("organization", t_13);
}
output += "\n              ";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n                ";
var t_14;
t_14 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procuringEntity");
frame.set("organization", t_14, true);
if(frame.topLevel) {
context.setVariable("organization", t_14);
}
if(frame.topLevel) {
context.addExport("organization", t_14);
}
output += "\n              ";
;
}
output += "\n              ";
env.getTemplate("organization.html", false, "tender_ppp.html", null, function(t_17,t_15) {
if(t_17) { cb(t_17); return; }
t_15.render(context.getVariables(), frame, function(t_18,t_16) {
if(t_18) { cb(t_18); return; }
output += t_16
output += "\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t ";
output += runtime.suppressValue((lineno = 238, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tenderers:"])), env.opts.autoescape);
output += " ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers")) {
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"numberOfTenderers"), env.opts.autoescape);
;
}
else {
output += "<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 238, colno = 126, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Number of tenderers not provided"])), env.opts.autoescape);
output += "</span>";
;
}
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
frame = frame.push();
var t_21 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderers");
if(t_21) {var t_20 = t_21.length;
for(var t_19=0; t_19 < t_21.length; t_19++) {
var t_22 = t_21[t_19];
frame.set("tenderer", t_22);
frame.set("loop.index", t_19 + 1);
frame.set("loop.index0", t_19);
frame.set("loop.revindex", t_20 - t_19);
frame.set("loop.revindex0", t_20 - t_19 - 1);
frame.set("loop.first", t_19 === 0);
frame.set("loop.last", t_19 === t_20 - 1);
frame.set("loop.length", t_20);
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
var t_23;
t_23 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),runtime.memberLookup((t_22),"id"));
frame.set("organization", t_23, true);
if(frame.topLevel) {
context.setVariable("organization", t_23);
}
if(frame.topLevel) {
context.addExport("organization", t_23);
}
output += "\n\t\t\t\t\t\t\t\t";
if(!runtime.contextOrFrameLookup(context, frame, "organization")) {
output += "\n                  ";
var t_24;
t_24 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "parties")),t_22);
frame.set("organization", t_24, true);
if(frame.topLevel) {
context.setVariable("organization", t_24);
}
if(frame.topLevel) {
context.addExport("organization", t_24);
}
output += "\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
env.getTemplate("organization.html", false, "tender_ppp.html", null, function(t_27,t_25) {
if(t_27) { cb(t_27); return; }
t_25.render(context.getVariables(), frame, function(t_28,t_26) {
if(t_28) { cb(t_28); return; }
output += t_26
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
})});
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones")) {
output += "\n\t\t\t\t\t";
var t_29;
t_29 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"milestones");
frame.set("milestones", t_29, true);
if(frame.topLevel) {
context.setVariable("milestones", t_29);
}
if(frame.topLevel) {
context.addExport("milestones", t_29);
}
output += "\n\t\t\t\t\t";
var t_30;
t_30 = runtime.contextOrFrameLookup(context, frame, "tender");
frame.set("parent", t_30, true);
if(frame.topLevel) {
context.setVariable("parent", t_30);
}
if(frame.topLevel) {
context.addExport("parent", t_30);
}
output += "\n\t\t\t\t\t";
env.getTemplate("milestones.html", false, "tender_ppp.html", null, function(t_33,t_31) {
if(t_33) { cb(t_33); return; }
t_31.render(context.getVariables(), frame, function(t_34,t_32) {
if(t_34) { cb(t_34); return; }
output += t_32
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 265, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Milestones"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 269, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No milestones provided"])), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n";
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
