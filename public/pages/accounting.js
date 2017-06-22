(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["pages/accounting.nj"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layout.nj", true, "pages/accounting.nj", false, function(t_2,_parentTemplate) {
if(t_2) { cb(t_2); return; }
parentTemplate = _parentTemplate
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n \n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("more"))(env, context, frame, runtime, function(t_6,t_5) {
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
function b_main(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n    <h2>QuickBooks Consulting</h2>\n    <div id=\"content\">\n        <p><b>You are a successful business person with hundreds of concerns...</b></p>\n        <p>Madeline Bailey offers support in every aspect of financial, bookkeeping and office systems management. With many clients this involves active financial consultation.</p>\n        <div class=\"quickbooks-logo green-backdrop\"></div>\n        <p>Ms. Bailey is an Advanced Certified QuickBooks Professional Advisor , QuickBooks Enterprise Certified, QuickBooks Online Certified, and Intuit POS (Point of Sale) Certified who helps her clients manage over $54M. She trains clients on every version and every edition of QuickBooks for the PC, Mac, and Online Edition. In addition, she offers on-going accounting management services, as well as training.</p>\n\n        <p>You want accurate information. Whether Ms. Bailey is training you, your bookkeeper, or actually performing the work, her services focus on making your financial information crystal clear to you. She empowers her clients to make better business decisions by enhanced access to their information. As one client said, \"Once you make these improvements, there is growth.\"</p>\n        <div class=\"row\">\n            <span class=\"scroll-down\">\n                SCROLL DOWN</br>\n                FOR MORE INFO\n                <div class=\"arrow\"></div>\n            </span>\n        </div>\n    </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_more(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\n    <div class=\"row\">\n        <span class=\"scroll-down\">\n            SCROLL DOWN</br>\n            FOR MORE INFO\n            <div class=\"arrow\"></div>\n        </span>\n    </div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
b_more: b_more,
root: root
};

})();
})();
