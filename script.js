function handleSubmit() {
    // Convert email to lowercase
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
  
    // Get element to display error message
    const errorEmail = document.getElementById('error-email');
  
    // Regex pattern for email validation
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    // Check if email is valid
    const check = emailValue.match(checkMail);
  
    // Get element containing user information
    const sectionContent = document.querySelector('.info');
  
    // Get element to control submit button
    const submitControl = document.querySelector('.submit-email');
  
    if (check) {
      sectionContent.style.display = 'block';
      submitControl.style.display = 'none';
      errorEmail.innerHTML = '';
    } else {
      errorEmail.innerHTML = 'Vui lòng nhập đúng định dạng email';
    }
  }
  
  function handleOnMouseOver(element) {
    const viewLessBtn = element.querySelector('.viewLessBtn');
    if (viewLessBtn.classList.contains('noDisplay')) {
      element.querySelector('.viewMoreBtn').classList.remove('noDisplay');
    }
  }
  
  function handleMouseMoveOut(element) {
    element.querySelector('.viewMoreBtn').classList.add('noDisplay');
  }
  
  function showDetails(button) {
    const detailsList = button.parentNode.parentNode.querySelector('.viewMoreInfo');
    const viewLessBtn = button.parentNode.querySelector('.viewLessBtn');
    detailsList.classList.remove('noDisplay');
    button.classList.add('noDisplay');
    viewLessBtn.classList.remove('noDisplay');
  }
  
  function hideDetails(button) {
    const detailsList = button.parentNode.parentNode.querySelector('.viewMoreInfo');
    const viewMoreBtn = button.parentNode.querySelector('.viewMoreBtn');
    detailsList.classList.add('noDisplay');
    button.classList.add('noDisplay');
    viewMoreBtn.classList.remove('noDisplay');
  }
  