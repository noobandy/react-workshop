"use strict";

const MenuItem = React.createClass({
	render: function() {

		if(this.props.isActive) {
			return (<li onClick={this.props.onClick}>
			<a className={"is-active"} href={this.props.url}>{this.props.displayName}</a>
			</li>);
		} else {
			return (<li onClick={this.props.onClick}>
			<a href={this.props.url}>{this.props.displayName}</a>
			</li>);
		}

		
	}
});


module.exports = MenuItem;