function discountPrice(userState, count, price) {
  if (price >= 20000) {
    price -= price * 0.05;
  }

  if (userState == "회원" && userState == "비회원" && count == 1) {
    price -= price * 0.05;
  } else if (userState == "회원" && count == 2) {
    price -= price * 0.1;
  } else if (userState == "프리미엄 회원") {
    price -= price * 0.2;
  } else if (userState == "비회원" && count == 2) {
    price;
  }

  console.log(price);
}

discountPrice("비회원", 2, 12500);
