import $ from 'jquery';

class Modal{

	constructor(){
		this.openModelButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){
		//clicking the open modal button
		this.openModelButton.click(this.openModal.bind(this));

		//clicking the x close button
		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e){
		if(e.keyCode == 27){
			this.closeModal();
		}
	}

	openModal(){
		this.modal.addClass("modal__is_visible");
		return false;
	}

	closeModal(){
		this.modal.removeClass("modal__is_visible");
	}

}
export default Modal;