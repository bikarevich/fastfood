import { settings } from '../../settings';

exports.parseUrl = (hash, hashToken) => {
	return hash.split(hashToken)[1];
};

exports.changeUrl = (url) => {
	window.location.hash = `${settings.hashSyntax}/${url}`;
};
