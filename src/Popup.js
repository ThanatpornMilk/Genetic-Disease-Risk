function openPopup(popupId) {
    document.getElementById(popupId).classList.remove('hidden');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
}