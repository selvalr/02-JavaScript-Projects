function focusNext(current) {
  if (!isNaN(current.value)) {
    let next = current.nextElementSibling;

    if (current.value.length >= 1) {
      if (next && next.classList.contains("otp-input")) {
        next.focus();
      }
    }
  } else {
    current.value = "";
  }
}

function previousFocus(event, current) {

    console.log(current.previousElementSibling);
    
    // Check if the current input field is empty
    if (event.key === "Backspace" && current.value.length === 0) {
        let previous = current.previousElementSibling;
        
        // Ensure the previous sibling exists and is an OTP input field
        if (previous && previous.classList.contains("otp-input")) {
            previous.focus();
        }
    }
}

