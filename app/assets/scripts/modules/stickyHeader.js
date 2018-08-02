import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class stickyHeader {

	constructor(){
		this.lazyImages = $(".lazyload")
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSection = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoint();
		this.addSmoothScrolling();
		this.refreshWayPoints();
	}
	refreshWayPoints(){
		this.lazyImages.on('load', function(){
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element : this.headerTriggerElement[0],
			handler : function(direction){
				if (direction == "down") {
					that.siteHeader.addClass("site-header__dark");
				}else{
					that.siteHeader.removeClass("site-header__dark");
				}
			}
		});
	}

	createPageSectionWaypoint(){
		var that = this;
		this.pageSection.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element : currentPageSection,
				handler : function(direction){
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is_current_link");
						$(matchingHeaderLink).addClass("is_current_link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element : currentPageSection,
				handler : function(direction){
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is_current_link");
						$(matchingHeaderLink).addClass("is_current_link");
					}
				},
				offset: "-45%"
			});
		});
	}

}

export default stickyHeader;