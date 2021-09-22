(async function init() {
	try {
		const tmp = await browser.runtime.sendMessage("ping");
		if(/^https?:/.test(tmp)){
			const url = new URL(tmp);
			const domain = url.hostname;
			if(typeof domain === 'string' && domain !== null && domain !== '') { 
				document.getElementById('myframe').src = 'https://webcompat.com/issues/new?url=' + url;
				return;
			}
		}
	}catch(e) {
		console.error(e.toString());
		//myframe.remove();
	}
	document.body.innerHTML = '<p> tab has invalid url with no domain or protocol <p>';
}());
