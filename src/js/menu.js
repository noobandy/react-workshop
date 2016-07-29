"use strict";
const MenuItem = require("./menu-item");

function Menu() {
	return <ul> <MenuItem isActive={true}/> <MenuItem/></ul>;
}

module.exports = Menu;