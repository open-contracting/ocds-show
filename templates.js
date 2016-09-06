(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\" class=\"panel panel-default\">\r\n  <h3 class=\"panel-heading\"> (Award ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += ") </h3>\r\n  <div class=\"panel-body\">\r\n    Amount ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount"), env.opts.autoescape);
output += " \r\n  <div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
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
output += "<section id=\"awards\" class=\"panel panel-default\">\r\n\r\n<h2 class=\"panel-heading\"> Awards </h2>\r\n\r\n<div class=\"panel-body\">\r\nContent\r\n";
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
env.getTemplate("award.html", false, "awards.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
})});
}
}
frame = frame.pop();
output += "\r\n</div>\r\n\r\n</section>\r\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\" class=\"panel panel-default\">\r\n  <h2 class=\"panel-heading\">\r\n    Contracts\r\n  </h2>\r\n  <div class=\"panel-body\">\r\n\tContent\r\n  </div>\r\n</section>\r\n";
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
output += "\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 3, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 10, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 11, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 12, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 13, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date published"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 14, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 15, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Format"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 16, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Language"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t";
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
output += "\r\n\t\t\t\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\r\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"datePublished"), env.opts.autoescape);
output += "</td> <!-- add date formatting -->\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"), env.opts.autoescape);
output += "</td> <!-- add date formatting -->\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>";
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
output += "\r\n\t\t</h2>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += " <!-- is this approach better than changing the panel body to \"... data not provided\"? -->\r\n\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 13, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 13, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t<!-- add number formatting -->\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\r\n\t\t\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 24, colno = 44, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget ID not provided"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-danger\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 33, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget amount not provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\"> <!-- c.f. to approach above -->\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 43, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 43, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Source"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 50, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget description not provided."])), env.opts.autoescape);
output += "</span>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\r\n\t\t\t\t\t\t\t\t<small>(<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue((lineno = 53, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source"])), env.opts.autoescape);
output += "</a>)</small>\r\n\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue((lineno = 55, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Budget source not provided"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 67, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t<div class=\"panel panel-warning\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 78, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Rationale"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 82, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["No rationale provided"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t";
;
}
output += "\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 91, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project information"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 91, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue((lineno = 98, colno = 40, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project name not provided."])), env.opts.autoescape);
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
output += runtime.suppressValue((lineno = 103, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Project ID not provided"])), env.opts.autoescape);
output += ")</small>\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t<!-- move this section into a document template -->\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 115, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 122, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 123, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 124, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 125, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date published"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 126, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 127, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Format"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 128, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Language"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
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
output += "\r\n\t\t\t\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\r\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"datePublished"), env.opts.autoescape);
output += "</td> <!-- add date formatting -->\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"), env.opts.autoescape);
output += "</td> <!-- add date formatting -->\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n\r\n\r\n";
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
output += " <small><a data-toggle=\"collapse\" href=\"#metadata\">(hide metadata)</a></small>\r\n\t\t\t\t\t\t<!-- need to fix collapse behaviour -->\r\n\t\t\t\t\t</h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"metadata\" class=\"panel-collapse collapse in\">\r\n\t\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>OCID: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ocid"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Date: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "date"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Tags: </strong>\r\n\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "tag");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("t", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += ",\r\n\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "initiationType"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n<main class=\"row\">\r\n\t<div class=\"col-md-8\">\r\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\r\n\t\t\t";
env.getTemplate("planning.html", false, "release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\r\n\t\t";
})});
}
else {
output += "\r\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h2 class=\"panel-title\">\r\n\t\t\t\t\t\tNo planning data provided\r\n\t\t\t\t\t</h2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t";
;
}
output += "\r\n\t\t";
env.getTemplate("tender.html", false, "release.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\r\n\t\t";
env.getTemplate("awards.html", false, "release.html", null, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
t_13.render(context.getVariables(), frame, function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
output += t_14
output += "\r\n\t\t";
env.getTemplate("contracts.html", false, "release.html", null, function(t_19,t_17) {
if(t_19) { cb(t_19); return; }
t_17.render(context.getVariables(), frame, function(t_20,t_18) {
if(t_20) { cb(t_20); return; }
output += t_18
output += " \t\t\r\n\t</div>\r\n\t<div class=\"col-md-4\">\r\n\t\t";
env.getTemplate("buyer.html", false, "release.html", null, function(t_23,t_21) {
if(t_23) { cb(t_23); return; }
t_21.render(context.getVariables(), frame, function(t_24,t_22) {
if(t_24) { cb(t_24); return; }
output += t_22
output += "\r\n\t</div>\r\n</main>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})});
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
output += "<section id=\"tender\" class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h2>Tender</h2>\r\n\t</div>\r\n  \r\n  \t\t<!-- outstanding fields\r\n\t\t\r\n\t\tprocuringEntity [organisation]\r\n\t\t\r\n\t\thasEnquiries\r\n\t\tenquiryPeriod\r\n\r\n\t\tnumberOfTenderers\r\n\t\ttenderers [organisations]\r\n\r\n\t\tmilestones []\r\n\t\t\r\n\t\t-->\r\n\t\t\r\n\t\t<!-- also need to add error handling for all fields -->\r\n\t\t\r\n\t\t<!-- is there a way we can reference codelist titles and descriptions? -->\r\n\t\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 29, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 41, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Status"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 53, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<strong>";
output += runtime.suppressValue((lineno = 57, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Lower: "])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount"), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += "</small>\t<!-- number formatting -->\r\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 58, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Upper: "])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount"), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += "</small></p>\t<!-- number formatting -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 69, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Eligibility criteria"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 81, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Key Dates"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- date formatting -->\r\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 85, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender start: "])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 86, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Tender end: "])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 87, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award start: "])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue((lineno = 88, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award end: "])), env.opts.autoescape);
output += "</strong> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 97, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Enquiries"])), env.opts.autoescape);
output += "\t<!-- need to add to example data -->\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 103, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 105, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["There have been enquiries regarding this tender"])), env.opts.autoescape);
output += "\t<!-- this isn't quite right, we need different messages depending on whether hasEnquiries = false or doesn't exist -->\r\n\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 120, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Procurement method"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += "</h4>\r\n\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 133, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Award criteria"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += "</h4>\r\n\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 146, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Submission method"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("method", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\r\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 165, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Items"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 172, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["ID"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 173, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 174, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Classification"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 174, colno = 57, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Scheme - ID"])), env.opts.autoescape);
output += ")</small></th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 175, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Quantity"])), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue((lineno = 175, colno = 51, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Unit"])), env.opts.autoescape);
output += ")</small></th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 176, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Value per unit"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("item", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"scheme"), env.opts.autoescape);
output += "</a> -\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"uri")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"id"), env.opts.autoescape);
output += "</a>)\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"id"), env.opts.autoescape);
output += ")\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"additionalClassifications")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"additionalClassifications");
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("classification", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<br>";
output += runtime.suppressValue(runtime.memberLookup((t_12),"description"), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"scheme"), env.opts.autoescape);
output += "</a> -\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_12),"uri")) {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"id"), env.opts.autoescape);
output += "</a>)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_12),"id"), env.opts.autoescape);
output += ")\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"quantity"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"name"), env.opts.autoescape);
output += ")</small></td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"value")),"amount"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_8),"unit")),"value")),"currency"), env.opts.autoescape);
output += "</td> <!-- number formatting -->\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t</tbody>\t\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t<!-- move this section into a document template -->\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t";
output += runtime.suppressValue((lineno = 225, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Documents"])), env.opts.autoescape);
output += "\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 232, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Title"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 233, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Type"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 234, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Description"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 235, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date published"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 236, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Date modified"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 237, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Format"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue((lineno = 238, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "gettext"), "gettext", context, ["Language"])), env.opts.autoescape);
output += "</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_15 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
if(t_15) {var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("document", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
output += "\r\n\t\t\t\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\r\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_16),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_16),"title"), env.opts.autoescape);
output += "</a></td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"type"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"description"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"datePublished"), env.opts.autoescape);
output += "</td> <!-- add date formatting -->\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "doucment")),"dateModified"), env.opts.autoescape);
output += "</td> <!-- add date formatting -->\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"format"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_16),"language"), env.opts.autoescape);
output += "</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n";
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
