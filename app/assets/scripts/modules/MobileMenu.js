import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu_icon");
		this.menuContent = $(".site-header__menu_content");
		this.events();
	}
	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	toggleTheMenu(){
		this.menuContent.toggleClass("site-header__menu_content--is-visible");
		this.siteHeader.toggleClass("site-header__is_expanded");
		this.menuIcon.toggleClass("site-header__menu_icon__close_x");
	}
}

export default MobileMenu;