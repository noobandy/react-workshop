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

	getDefaultProps: function getDefaultProps() {
		return {
			isActive: false,
			url: "#"
		};
	},
	getInitialState: function getInitialState() {
		return {
			isActive: this.props.isActive
		};
	},
	handleClick: function handleClick(event) {
		event.preventDefault();
		this.setState({
			isActive: !this.state.isActive
		});
	},
	render: function render() {

		var style = {};

		if (this.state.isActive) {
			style.fontWeight = "bold";
		}

		return React.createElement(
			"li",
			{ onClick: this.handleClick, style: style },
			React.createElement(
				"a",
				{ href: this.props.url },
				this.props.displayName
			)
		);
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
	render: function render() {
		var that = this;
		var menuItems = this.props.menus.map(function (menu, index) {

			var isActive = that.state.activeMenuItem === index ? true : false;

			return React.createElement(MenuItem, { key: index, isActive: isActive, displayName: menu.displayName, url: menu.url });
		});

		return React.createElement(
			"div",
			null,
			React.createElement(
				"p",
				null,
				this.props.label
			),
			React.createElement(
				"ul",
				null,
				menuItems
			)
		);
	}
});

module.exports = Menu;

},{"./menu-item":2}]},{},[1]);
