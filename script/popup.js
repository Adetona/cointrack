function openlink() {
 chrome.tabs.create({active: true, url: "https://twitter.com/adetona77"});
}

document.addEventListener("click", openlink); 