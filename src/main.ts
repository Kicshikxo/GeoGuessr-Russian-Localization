const inject = Object.assign(document.createElement('script'), {
  src: chrome.runtime.getURL('js/inject.js'),
  onload(this: HTMLScriptElement) {
    this.remove()
  },
})

document.documentElement.appendChild(inject)
