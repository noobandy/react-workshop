(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Menu = require("./menu");

var menus = [{
	displayName: "Home",
	url: "#home"
}, {
	displayName: "About",
	url: "#about"
}];

ReactDOM.render(React.createElement(Menu, { label: "Menu", menus: menus }), document.getElementById('menu'));

},{"./menu":3}],2:[function(require,module,exports){
"use strict";

var MenuItem = React.createClass({
	displayName: "MenuItem",

	render: function render() {

		if (this.props.isActive) {
			return React.createElement(
				"li",
				{ onClick: this.props.onClick },
				React.createElement(
					"a",
					{ className: "is-active", href: this.props.url },
					this.props.displayName
				)
			);
		} else {
			return React.createElement(
				"li",
				{ onClick: this.props.onClick },
				React.createElement(
					"a",
					{ href: this.props.url },
					this.props.displayName
				)
			);
		}
	}
});

module.exports = MenuItem;

},{}],3:[function(require,module,exports){
"use strict";

var MenuItem = require("./menu-item");

var Menu = React.createClass({
	displayName: "Menu",

	getInitialState: function getInitialState() {
		return {
			activeMenuItem: 0
		};
	},
	handleClick: function handleClick(index) {
		this.setState({
			activeMenuItem: index
		});
	},
	render: function render() {
		var that = this;
		var menuItems = this.props.menus.map(function (menu, index) {

			var isActive = that.state.activeMenuItem === index ? true : false;

			return React.createElement(MenuItem, { onClick: that.handleClick.bind(that, index), key: index, isActive: isActive, displayName: menu.displayName, url: menu.url });
		});

		return React.createElement(
			"div",
			{ className: "menu" },
			React.createElement(
				"p",
				{ className: "menu-label" },
				this.props.label
			),
			React.createElement(
				"ul",
				{ className: "menu-list" },
				menuItems
			)
		);
	}
});

module.exports = Menu;

},{"./menu-item":2}]},{},[1]);
