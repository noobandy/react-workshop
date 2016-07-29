"use strict";
const MenuItem = require("./menu-item");

const Menu = React.createClass({
	getInitialState: function() {
		return {
			activeMenuItem: 0
		}
	},
	render: function() {
		var that = this;
		var menuItems = this.props.menus.map(function(menu, index) {
			
			let isActive = that.state.activeMenuItem === index ? true : false;

			return <MenuItem key={index} isActive={isActive} displayName={menu.displayName} url={menu.url}/>;
		});

		return <div><p>{this.props.label}</p><ul>{menuItems}</ul></div>;
	}
});

module.exports = Menu;