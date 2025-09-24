// Khai báo biến ở phạm vi toàn cục để theo dõi trạng thái đánh giá
let activeStarIndex = -1;

// Hàm khởi tạo chính
const initRatingSystem = () => {
  const listGroupStar = document.querySelectorAll(".details-evaluate__group");
  const listInput = document.querySelectorAll(".details-evaluate__input");

  // Xử lý hiệu ứng hover cho các sao
  listGroupStar.forEach((itemGroupStar, index) => {
    // Sự kiện hover vào sao
    itemGroupStar.addEventListener("mouseover", () => {
      updateStars(listGroupStar, index);
    });

    // Sự kiện rời khỏi sao
    itemGroupStar.addEventListener("mouseout", () => {
      resetStars(listGroupStar);
      if (activeStarIndex >= 0) {
        updateStars(listGroupStar, activeStarIndex, false);
      }
    });
  });

  // Xử lý chọn checkbox
  listInput.forEach((itemInput, index) => {
    itemInput.addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        // Chọn tất cả sao từ đầu đến vị trí hiện tại
        selectStarsUpTo(listInput, listGroupStar, index);
      } else {
        // Bỏ chọn tất cả và chọn lại đến vị trí hiện tại
        resetSelection(listInput);
        selectStarsUpTo(listInput, listGroupStar, index);
      }
    });
  });
};

// ============================================================
// =                       Utils                              =
// ============================================================
// Cập nhật hiển thị sao đến vị trí index
const updateStars = (listGroupStar, index, isHover = true) => {
  // Nếu đang hover, xóa lớp gold từ tất cả các sao trước
  if (isHover) {
    resetStars(listGroupStar);
  }

  // Thêm lớp gold cho các sao từ đầu đến vị trí index
  for (let i = 0; i <= index; i++) {
    const star = listGroupStar[i].querySelector(".details-evaluate__label>i");
    star.classList.add("gold");
  }
};

// Xóa lớp gold từ tất cả các sao
const resetStars = (listGroupStar) => {
  listGroupStar.forEach((item) => {
    const star = item.querySelector(".details-evaluate__label>i");
    star.classList.remove("gold");
  });
};

// Chọn các sao từ đầu đến vị trí index
const selectStarsUpTo = (listInput, listGroupStar, index) => {
  // Cập nhật trạng thái đánh giá hiện tại
  activeStarIndex = index;

  // Chọn các checkbox và thêm lớp gold cho các sao
  for (let i = 0; i <= index; i++) {
    listInput[i].checked = true;
    const star = listGroupStar[i].querySelector(".details-evaluate__label>i");
    star.classList.add("gold");
  }
};

// Xóa tất cả lựa chọn
const resetSelection = (listInput) => {
  activeStarIndex = -1;
  listInput.forEach((input) => {
    input.checked = false;
  });
  $(".details-evaluate__label>i").removeClass("gold");
};

// Khởi chạy
(() => {
  initRatingSystem();
})();
