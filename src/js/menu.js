"use strict";
const MenuItem = require("./menu-item");

const Menu = React.createClass({
	getInitialState: function() {
		return {
			activeMenuItem: 0
		}
	},
	handleClick: function(index) {
		this.setState({
			activeMenuItem: index
		});
	},
	render: function() {
		var that = this;
		var menuItems = this.props.menus.map(function(menu, index) {
			
			let isActive = that.state.activeMenuItem === index ? true : false;

			return <MenuItem onClick={that.handleClick.bind(that,index)} key={index} isActive={isActive} displayName={menu.displayName} url={menu.url}/>;
		});

		return <div className={"menu"}><p className={"menu-label"}>{this.props.label}</p><ul className="menu-list">{menuItems}</ul></div>;
	}
});

module.exports = Menu;