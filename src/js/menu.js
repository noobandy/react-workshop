"use strict";
const MenuItem = require("./menu-item");

function Menu() {
	return <ul> <MenuItem/> <MenuItem/></ul>;
}

module.exports = Menu;