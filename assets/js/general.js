// <!-- ================ Header Scroll ================= -->
function handleHeaderScroll() {
  const headerScroll = document.querySelector(".header-scroll");
  const headerMain = document.querySelector(".header");
  // Nếu có img ở header top thì là headerMain.offsetTop + 50;
  var sticky = headerMain.offsetTop + 200;

  if (window.pageYOffset > sticky) {
    headerScroll.classList.add("fixed");
  } else {
    headerScroll.classList.remove("fixed");
  }
}

function handleCopyText() {
  //  <!-- Handle Copy Text -->
  const btnCopyAll = document.querySelectorAll(".account-share__copy");
  console.log("🚀 ~ handleCopyText ~ btnCopyAll:", btnCopyAll);

  if (btnCopyAll.length < 1) return;

  btnCopyAll.forEach((itemBtnCopy) => {
    itemBtnCopy.addEventListener("click", () => {
      const divCover = itemBtnCopy.closest(".account-share__code");

      const contentText = divCover.querySelector(".account-share__string");
      const textTooltip = divCover.querySelector(".account-share__tooltip");
      // Copy the text inside the text field
      navigator.clipboard.writeText(contentText.innerHTML);

      textTooltip.innerHTML = "Đã sao chép";

      setTimeout(() => {
        textTooltip.innerHTML = "Sao chép";
      }, 500);
    });
  });
}

(() => {
  handleCopyText();
  window.onscroll = function () {
    handleHeaderScroll();
  };
})();
