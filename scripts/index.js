import {initialCards,} from "./cards.js";



const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const buttonEdit = document.querySelector(".profile__edit-button");

const popupEdit = document.querySelector(".popup");

const buttonAdd = document.querySelector(".profile__add-button");
const popupInputName = popupEdit.querySelector(".popup__input_item_name");
const popupInputDescription = popupEdit.querySelector(".popup__input_item_description");
const popupEditForm = popupEdit.querySelector(".popup__form");



const popupAdd = document.querySelector("#popup-add");
const popupAddForm = document.querySelector("#add-form-popup");
const popupAddTitle = popupAdd.querySelector(".popup__input_item_title");
const popupAddLink = popupAdd.querySelector(".popup__input_item_link");


const popupPhoto = document.getElementById("popup-photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupTitle = popupPhoto.querySelector(".popup__title");

const buttonCloseList = document.querySelectorAll('.popup__btn-close');


const elementsContainer = document.querySelector(".elements");
const elementTemplate = document.querySelector("#element-template").content.querySelector(".element");
function createCard (item) {
    const card = elementTemplate.cloneNode(true);
    const cardImage = card.querySelector(".element__image");
    const cardTitle = card.querySelector(".element__caption");
    const cardDeleteButton = card.querySelector(".element__btn-trash");
    const cardLikeButton = card.querySelector(".element__btn-like");
    cardDeleteButton.addEventListener("click", deleteCard);
    cardLikeButton.addEventListener("click", likeCard);
    cardImage.setAttribute("src", item.link);
    cardImage.setAttribute("alt", item.name);
    cardTitle.textContent = item.name;
    cardImage.addEventListener("click", function() {
        openPopupBigImage(item)
    });
    return card;
};

const likeCard = function(e){
    e.target.classList.toggle("element__btn-like-active");
};
const deleteCard = function(e){
    e.target.closest(".element").remove();
};

initialCards.forEach((item) => {
    const element = createCard(item);
    elementsContainer.append(element);
})


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

function handleEditPopupSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileJob.textContent = popupInputDescription.value;
    closePopup(popupEdit);
}


function addPopupCreateSubmit(evt) {
    evt.preventDefault();
    const card = {
        name: popupAddTitle.value,
        link: popupAddLink.value
    };
    const element = createCard(card);
    elementsContainer.prepend(element);
    closePopup(popupAdd);
    popupAddForm.reset();

}

const openPopupBigImage = function (item){
    popupImage.setAttribute("src", item.link);
    popupImage.setAttribute("alt", item.name);
    popupTitle.textContent = item.name;
    openPopup(popupPhoto);

}


buttonEdit.addEventListener("click", function() {
    openPopup(popupEdit);
});
buttonAdd.addEventListener("click", function() {
    openPopup(popupAdd);
});

buttonCloseList.forEach(btn => {
    const popup = btn.closest('.popup');
    btn.addEventListener('click', () => closePopup(popup));
})




popupEditForm.addEventListener("submit", handleEditPopupSubmit);
popupAddForm.addEventListener("submit", addPopupCreateSubmit);


