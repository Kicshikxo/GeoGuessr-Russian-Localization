const e=Object.assign(document.createElement("script"),{src:chrome.runtime.getURL("js/inject.js"),onload(){this.remove()}});document.documentElement.appendChild(e);
