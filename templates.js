(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\" class=\"panel panel-default\">\n  <h3 class=\"panel-heading\"> (Award ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += ") </h3>\n  <div class=\"panel-body\">\n    Amount ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount"), env.opts.autoescape);
output += " \n  <div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
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
output += "<section id=\"awards\" class=\"panel panel-default\">\n\n<h2 class=\"panel-heading\"> Awards </h2>\n\n<div class=\"panel-body\">\n";
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
output += "\n</div>\n\n</section>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["planning.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"planning\" class=\"panel panel-default\">\n  <h2 class=\"panel-heading\">\n    Planning\n  </h2>\n  <div class=\"panel-body\">\n    ";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n       Rational: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rational"), env.opts.autoescape);
output += "\n    ";
;
}
else {
output += "\n      <h4>No planning data</h4>\n    ";
;
}
output += "\n  </div>\n</section>\n";
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
output += "<section id=\"release\" class=\"panel panel-default\">\n<h1 class=\"panel-heading\">\n  Release (";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += ")  <small> ocid (";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ocid"), env.opts.autoescape);
output += ")</small>\n</h1>\n\n<div class=\"panel-body\">\n  ";
env.getTemplate("planning.html", false, "release.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n  ";
env.getTemplate("awards.html", false, "release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n</div>\n\n\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
