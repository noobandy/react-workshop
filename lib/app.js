(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Menu = require("./menu");

ReactDOM.render(React.createElement(Menu, null), document.getElementById('app'));

},{"./menu":3}],2:[function(require,module,exports){
"use strict";

var MenuItem = React.createClass({
	displayName: "MenuItem",

	getDefaultProps: function getDefaultProps() {
		return {
			isActive: false
		};
	},
	render: function render() {

		var style = {};

		if (this.props.isActive) {
			style.fontWeight = "bold";
		}

		return React.createElement(
			"li",
			{ style: style },
			"Menu Item"
		);
	}
});

module.exports = MenuItem;

},{}],3:[function(require,module,exports){
"use strict";

var MenuItem = require("./menu-item");

var Menu = React.createClass({
	displayName: "Menu",

	render: function render() {
		return React.createElement(
			"ul",
			null,
			" ",
			React.createElement(MenuItem, { isActive: true }),
			" ",
			React.createElement(MenuItem, null)
		);
	}
});

module.exports = Menu;

},{"./menu-item":2}]},{},[1]);
