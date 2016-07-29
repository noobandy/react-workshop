"use strict";

const MenuItem = React.createClass({
	getDefaultProps: function() {
		return {
			isActive : false
		};
	},
	render: function() {

		let style = {};

		if(this.props.isActive) {
			style.fontWeight = "bold";
		}

		return <li style={style}>Menu Item</li>;
	}
});


module.exports = MenuItem;