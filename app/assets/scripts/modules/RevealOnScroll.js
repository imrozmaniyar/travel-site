import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {

	constructor(els, offset){
		this.iteamsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.iteamsToReveal.addClass("reveal-item");
	}

	createWaypoints(){
		var that = this;
		this.iteamsToReveal.each(function(){
			var currentItem = this;
			new Waypoint({
				element : currentItem,
				handler : function(){
					$(currentItem).addClass("reveal-item__is_visible");
				},
				offset: that.offsetPercentage
			});
		});
	}

}


export default RevealOnScroll;