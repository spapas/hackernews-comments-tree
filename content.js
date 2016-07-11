
var s = document.createElement('script');
s.src = chrome.extension.getURL("jquery-1.11.1.min.js");
(document.head||document.documentElement).appendChild(s);
s.parentNode.removeChild(s);


s = document.createElement('script');
s.src = chrome.extension.getURL("script.js");
(document.head||document.documentElement).appendChild(s);
s.parentNode.removeChild(s);
