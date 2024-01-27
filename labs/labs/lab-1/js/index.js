 const speedTestButton = document.getElementById('speed-test-button');
 const emailDialog = document.getElementById('email-dialog');
 const closeButton = document.getElementById('close-button');

 speedTestButton.addEventListener('click', () => {
   emailDialog.showModal();
 });

 closeButton.addEventListener('click', () => {
   emailDialog.close();
 });

 emailDialog.addEventListener('click', onClickOutsideDialog);

function onClickOutsideDialog(event) {
    const dialogDimensions = emailDialog.getBoundingClientRect();
    if (event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom) {
        event.currentTarget.close();
    }
}

