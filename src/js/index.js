"use strict";
const Menu = require("./menu");

let menus = [{
	displayName: "Home",
	url: "#home"
},{
	displayName: "About",
	url: "#about"
}];

ReactDOM.render(<Menu label={"Menu"} menus={menus}/>, document.getElementById('menu'));