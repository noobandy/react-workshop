"use strict";

const MenuItem = React.createClass({
	getDefaultProps: function() {
		return {
			isActive : false,
			url : "#"
		};
	},
	getInitialState: function() {
		return {
			isActive: this.props.isActive
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

		return (<li onClick={this.handleClick} style={style}>
			<a href={this.props.url}>{this.props.displayName}</a>
			</li>);
	}
});


module.exports = MenuItem;