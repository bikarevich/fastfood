exports.fetchHtml = function(url) {
	return fetch(url).then((res) => {
		return res.text();
	});
};

exports.addEventListener = function(className, event, action, context) {
	document.addEventListener(event, (e) => {
		if (e.target && e.target.classList.contains(className)) {
			action.call(context, e);
		}
	});
};

exports.clearDomElement = function(elemId) {
	const element = document.getElementById(elemId);
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
};

exports.addEventListeners = (actions, wrapper, context) => {
	const items = wrapper.querySelectorAll('[action]');

	for (let i = 0; i < items.length; i++) {
		const actionAttr = items[i].getAttribute('action');
		const attr = actionAttr.split(' ');
		const action = actions[attr[1]];

		if (action) {
			document.addEventListener(attr[0], (event) => {
				if (event.target && event.target === items[i]) {
					let args = items[i].getAttribute('action-data');

					if (!args) {
						args = items[i];
					}

					action.call(context, args);
				}
			}, false);
		}
	}
};
