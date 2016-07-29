"use strict";

const MenuItem = React.createClass({
	getDefaultProps: function() {
		return {
			isActive : false
		};
	},
	getInitialState: function() {
		return {
			isActive: false
		};
	},
	handleClick: function(event) {
		event.preventDefault();
		this.setState({
			isActive: !this.state.isActive
		});
	},
	render: function() {

		let style = {};

		if(this.state.isActive) {
			style.fontWeight = "bold";
		}

		return <li onClick={this.handleClick} style={style}>{this.props.displayName}</li>;
	}
});


module.exports = MenuItem;