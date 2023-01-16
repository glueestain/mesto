const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const buttonEdit = document.querySelector(".profile__edit-button");

const popupEdit = document.querySelector(".popup");
const popupEditButtonClose = popupEdit.querySelector(".popup__btn-close");
const popupInputName = popupEdit.querySelector(".popup__input_item_name");
const popupInputDescription = popupEdit.querySelector(".popup__input_item_description");
const popupEditForm = popupEdit.querySelector(".popup__form");
const popupOverlay = popupEdit.querySelector('.popup__overlay')

const openPopup = function(item){
    item.classList.add("popup_opened");
    openEditPopup();
}
const openEditPopup = function(){
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileJob.textContent;
}


const closePopup = function (item) {
    item.classList.remove("popup_opened");
}

function editPopupSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileJob.textContent = popupInputDescription.value;
    closePopup(popupEdit);
}

buttonEdit.addEventListener("click", function() {
    openPopup(popupEdit);
    popupOverlay.style.display = 'block';
});

popupEditButtonClose.addEventListener("click", function() {
    closePopup(popupEdit);
    popupOverlay.style.display = 'none';
});

popupEditForm.addEventListener("submit", editPopupSubmit);


