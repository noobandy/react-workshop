"use strict";
const MenuItem = require("./menu-item");

const Menu = React.createClass({
	render: function() {
		return <ul> <MenuItem displayName={"Home"}/> <MenuItem displayName={"About"}/></ul>;
	}
});

module.exports = Menu;