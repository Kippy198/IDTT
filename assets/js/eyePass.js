const togglePassword = document.querySelectorAll(".eye");
const activeClassName = "is-active";

togglePassword.forEach((item) => {
  item.addEventListener("click", handleTogglePass);
});

function handleTogglePass() {
  let inputType = "password";
  // const input = this.parentNode?.firstElementChild.nextElementSibling;
  const input = this.parentNode?.querySelector(".account-form__view>input");
  console.log(this.parentNode);

  if (this.matches(".eye-close")) {
    inputType = "text";
    const eyeOpen = this.previousElementSibling;
    eyeOpen && eyeOpen.classList.add(activeClassName);
  } else {
    inputType = "password";
    this.classList.remove(activeClassName);
  }

  input && input.setAttribute("type", inputType);
}

const toggleBtns = document.querySelectorAll(".auth-form__toggle");

if (toggleBtns.length > 0) {
  toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", function () {
      const parentGroup = this.closest(".auth-form__group");
      const passwordInput = parentGroup?.querySelector(
        '.auth-form__input[type="password"], .auth-form__input[type="text"]'
      );

      if (passwordInput) {
        const isShow = passwordInput.type === "text";
        passwordInput.type = isShow ? "password" : "text";

        const icon = this.querySelector("img");
        if (icon) {
          icon.src = isShow
            ? "./assets/images/icons/close-eye.svg"
            : "./assets/images/icons/open-eye.png";
          icon.alt = isShow ? "Ẩn mật khẩu" : "Hiện mật khẩu";
        }
      }
    });
  });
}
