const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


const popups = document.querySelectorAll(".popup");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const buttonEdit = document.querySelector(".profile__edit-button");

const popupEdit = document.querySelector(".popup");
const popupEditButtonClose = popupEdit.querySelector(".popup__btn-close");
const buttonAdd = document.querySelector(".profile__add-button");
const popupInputName = popupEdit.querySelector(".popup__input_item_name");
const popupInputDescription = popupEdit.querySelector(".popup__input_item_description");
const popupEditForm = popupEdit.querySelector(".popup__form");



const popupAdd = document.getElementById("popup-add");
const popupAddForm = document.getElementById("add-form-popup");
const popupAddButtonClose = document.getElementById("popup-add-btn-close");
const popupAddButtonCreate = document.getElementById("add-popup-btn-create");
const popupAddTitle = popupAdd.querySelector(".popup__item_el_title");
const popupAddLink = popupAdd.querySelector(".popup__item_el_link");


const popupPhoto = document.getElementById("popup-photo");
const popupImage = popupPhoto.querySelector(".popup__image");
const popupTitle = popupPhoto.querySelector(".popup__title");
const popupPhotoButtonClose  = document.getElementById("popup-img-btn-close");

const elementsList = document.querySelector(".elements");
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
        imgPopupBigSize(item)
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
    elementsList.append(element);
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

function editPopupSubmit(evt) {
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
    elementsList.prepend(element);
    closePopup(popupAdd);
    popupAddTitle.value = "";
    popupAddLink.value = "";

}

const imgPopupBigSize = function (item){
    popupImage.setAttribute("src", item.link);
    popupImage.setAttribute("alt", item.name);
    popupTitle.textContent = item.name;
    openPopup(popupPhoto);

}


buttonEdit.addEventListener("click", function() {
    openEditPopup();
    openPopup(popupEdit);
});
buttonAdd.addEventListener("click", function() {
    openPopup(popupAdd);
});

popupEditButtonClose.addEventListener("click", function() {
    closePopup(popupEdit);
});
popupAddButtonClose.addEventListener("click", function() {
    closePopup(popupAdd);
});

popupPhotoButtonClose.addEventListener("click", function() {
    closePopup(popupPhoto);
})




popupEditForm.addEventListener("submit", editPopupSubmit);
popupAddForm.addEventListener("submit", addPopupCreateSubmit);


