"use strict";
const MenuItem = require("./menu-item");

const Menu = React.createClass({
	render: function() {
		return <ul> <MenuItem isActive={true}/> <MenuItem/></ul>;
	}
});

module.exports = Menu;