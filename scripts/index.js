const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const buttonEdit = document.querySelector(".profile__edit-button");

const popupEdit = document.querySelector(".popup_edit");
const popupEditButtonClose = popupEdit.querySelector(".popup__btn-close");
const popupInputName = popupEdit.querySelector(".popup__input_name");
const popupInputDescription = popupEdit.querySelector(".popup__input_description");
const popupEditForm = popupEdit.querySelector(".popup__form");


const openPopup = function(item){
    item.classList.add("popup_opened");
    document.addEventListener('keyup', handleKeyUp);
}
const openEditPopup = function(){
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileJob.textContent;
}


const closePopup = function (item) {
    item.classList.remove("popup_opened");
    document.removeEventListener('keyup', handleKeyUp)
}

function editPopupSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileJob.textContent = popupInputDescription.value;
    closePopup(popupEdit);
}

buttonEdit.addEventListener("click", function() {
    openEditPopup();
    openPopup(popupEdit);
});

popupEditButtonClose.addEventListener("click", function() {
    closePopup(popupEdit);
});

popupEditForm.addEventListener("submit", editPopupSubmit);