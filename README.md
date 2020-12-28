# webRequest Manifest v3 Test 

Chrome 88 will introduce different dynamics for Chrome extensions, namely, the move from background scripts to service workers.
In an effort to prepare other extensions for this transition, I have begun testing fundamental support for the APIs. The Chrome 
extension documentation is not yet complete nor tailored for the changes needed for the manifest.

This repository contains very basic files for reporting whether the onHeadersReceived listener is executed. Download Chrome 88 (Dev Channel), 
load the extension after enabled Developer Mode, visit a site, notice that the console output is not executed.

Visiting chrome://serviceworker-internals/ and the page's main console might be helpful. I will update this repo as I explore nuances of the API further.
