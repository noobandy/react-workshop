"use strict";

function MenuItem({isActive = false}) {
	let style = {};
	if(isActive) {
		style.fontWeight = "bold";
	}
	return <li style={style}>Menu Item</li>;
}

module.exports = MenuItem;