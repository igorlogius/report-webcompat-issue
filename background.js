browser.browserAction.onClicked.addListener( (tab) => {
	browser.sidebarAction.setPanel({
		tabId: tab.id, 
		panel: 'https://webcompat.com/issues/new?url=' + encodeURI(tab.url)
	});
	browser.sidebarAction.toggle();
});
