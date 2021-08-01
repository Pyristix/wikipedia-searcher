chrome.contextMenus.create({
	"id": "wikipedia_search",
	"title": 'Search Wikipedia for "%s"',
	"contexts": ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "wikipedia_search") {
        chrome.tabs.create({
			url: "https://wikipedia.org/wiki/" + info.selectionText.trim().split(' ').join('_')
		});
    }
});