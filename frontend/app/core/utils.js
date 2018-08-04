exports.fetchHtml = function(url) {
	return fetch(url).then((res) => {
		return res.text();
	});
};

exports.addEventListener = function(className, event, action, context) {
	const items = document.querySelectorAll(className);

	for (let i = 0; i < items.length; i++) {
		items[i].addEventListener(event, action.bind(context), false);
	}
};

exports.clearDomElement = function(elemId) {
	const element = document.getElementById(elemId);
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};
