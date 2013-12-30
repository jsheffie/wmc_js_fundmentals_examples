// Global variable == Hijacked Panda :(
// Global variable == Slow Panda :(

function defineFoo(){
    // adding the var keyword here... makes this a non-global.
    var foo = "globally scoped variable";
}

function sayFoo(){
    console.log(foo);
}

defineFoo();
sayFoo();

/*
Exception: foo is not defined
sayFoo@Scratchpad/1:11
@Scratchpad/1:15
WCA_evalWithDebugger@resource://gre/modules/devtools/dbg-server.jsm -> resource://gre/modules/devtools/server/actors/webconsole.js:890
WCA_onEvaluateJS@resource://gre/modules/devtools/dbg-server.jsm -> resource://gre/modules/devtools/server/actors/webconsole.js:547
DSC_onPacket@resource://gre/modules/devtools/dbg-server.jsm -> resource://gre/modules/devtools/server/main.js:923
@resource://gre/modules/devtools/dbg-server.jsm -> resource://gre/modules/devtools/server/transport.js:242
@resource://gre/modules/devtools/dbg-server.jsm -> resource://gre/modules/devtools/DevToolsUtils.js:61
*/