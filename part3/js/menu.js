/* Control sliding menu on screens smaller than a specified breakpoint */
(function(menu_button, links, breakpoint) {
	'use strict';
	var menulink = document.getElementById(menu_button),
	    menu = document.getElementById(links);
		
	menu.className = 'start';
	setTimeout(function() {
		menu.className = 'collapsed';
	}, 20);
		
	menulink.onclick = function() {
		if (menu.className === 'displayed') {
			menu.className = 'collapsed';
		} else {
			menu.className = 'displayed';
		}
		return false;
	};
	
	window.onresize = function() {
		if (window.innerWidth < breakpoint) {
			menu.className = 'collapsed';
		}
	};	
})('menulink', 'navlinks', 700);
