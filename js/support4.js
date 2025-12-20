document.addEventListener('DOMContentLoaded', () => {

    const sButton = document.getElementById('sButton');
    const modal = document.getElementById('support-modal');
    const cancel_b = document.getElementById('cancel_b');
    const img = document.getElementsByClassName('cat');
    const supportcard = document.getElementById('supportcard');

    function openModal() {
        sButton.classList.add('hidden');
        img[0].classList.add('hidden');
        img[1].classList.add('hidden');
        if (supportcard) supportcard.classList.add('modal-visible');
    }

    function closeModal() {
        if (supportcard) supportcard.classList.remove('modal-visible');
        setTimeout(() => {
            sButton.classList.remove('hidden');
            img[0].classList.remove('hidden');
            img[1].classList.remove('hidden');
        }, 500); 
    }

    if (sButton) {
        sButton.addEventListener('click', openModal);
    }

    if (cancel_b) {
        cancel_b.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    const form = document.getElementById('supportForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("感謝您的支持！資訊已提交。");
            closeModal();
        });
    }
});