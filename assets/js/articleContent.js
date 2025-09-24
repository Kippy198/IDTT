// Create Product
function createItemList(cartItem, indexItem) {
  if (!cartItem) return null;

  const divItem = document.createElement("li");

  divItem.classList.add("blog-catalog__item");

  // Find template
  const templateItem = `<a href="#${cartItem.idTitle}" class="blog-catalog__link">
      ${cartItem.titleContent}
      </a>`;

  divItem.innerHTML = templateItem;

  return divItem;
}

// Render List of localStorage
function readerCartList(cartList) {
  if (!Array.isArray(cartList) || cartList.length === 0) return null;

  const addProductList = document.querySelector(".blog-catalog__list");
  if (!addProductList) return;

  // Render List Item
  cartList.forEach((itemCart, index) => {
    const cartItemElement = createItemList(itemCart, index);
    if (cartItemElement !== null) addProductList.append(cartItemElement);
  });
}

(() => {
  const parentContent = document.querySelector(
    ".blog-details__content"
  ).children;

  const listArticle = [];

  // Duyệt qua danh sách các phần tử
  for (var i = 0; i < parentContent.length; i++) {
    var element = parentContent[i];

    // Kiểm tra xem phần tử hiện tại có phải là phần tử h2 không
    if (element.tagName === "H2") {
      const currentInfoH2 = {
        titleContent: element.textContent,
        idTitle: `titleContent${i}`,
        listSub: [],
      };
      listArticle.push(currentInfoH2);
      console.log("🚀 ~ element:", element);
      element.setAttribute("id", `titleContent${i}`);
    }

    // Kiểm tra xem phần tử hiện tại có phải là phần tử h3
    // if (element.tagName === "H3" && listArticle[listArticle.length - 1]) {
    //   listArticle[listArticle.length - 1] = {
    //     ...listArticle[listArticle.length - 1],
    //     listSub: [
    //       ...listArticle[listArticle.length - 1].listSub,
    //       { titleContent: element.textContent, idSub: `titleSub${i}` },
    //     ],
    //   };
    //   element.setAttribute("id", `titleSub${i}`);
    // }
  }

  readerCartList(listArticle);

  document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll("a");

    anchorLinks.forEach(function (anchorLink) {
      anchorLink.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault(); // Ngăn chặn hành động mặc định khi click vào thẻ a

          const offset = 150; // Điều chỉnh offset ở đây (50 là một số ví dụ)
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });
})();
