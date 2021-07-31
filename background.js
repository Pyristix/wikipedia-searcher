var contextMenuItem = {
	"id": "wikipedia_search",
	"title": 'Search Wikipedia for "%s"',
	"contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener((info, tab) => {
	if(info.menuItemId === "wikipedia_search")
		console.log(info.selectionText);
})