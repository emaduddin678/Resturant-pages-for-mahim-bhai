document.addEventListener("DOMContentLoaded", function () {
  const arrowTop = document.getElementById("arrow-top");
  const arrowBottom = document.getElementById("arrow-bottom");
  const leftImage = document.getElementById("left-img");
  const midImage = document.getElementById("mid-img");
  const rightImage = document.getElementById("right-img");
  const menuText = document.getElementById("menu-text");
  const price = document.getElementById("price");

  let activeIndex = 0;
  const classNames = [
    ["left", "mid", "right"],
    ["left-active", "mid-active", "right-active"],
    ["second-left-active", "second-mid-active", "second-right-active"],
  ];

  const menuNames = ["Set menu 1", "Set menu 2", "Set menu 3"];
  const priceList = [290, 310, 410];

  arrowTop.addEventListener("click", function () {
    leftImage.classList.remove(classNames[activeIndex][0]);
    midImage.classList.remove(classNames[activeIndex][1]);
    rightImage.classList.remove(classNames[activeIndex][2]);

    activeIndex = (activeIndex + 1) % classNames.length;

    leftImage.classList.add(classNames[activeIndex][0]);
    midImage.classList.add(classNames[activeIndex][1]);
    rightImage.classList.add(classNames[activeIndex][2]);

    menuText.querySelector("p").innerText = menuNames[activeIndex];
    price.innerText = priceList[activeIndex];
  });

  arrowBottom.addEventListener("click", function () {
    leftImage.classList.remove(classNames[activeIndex][0]);
    midImage.classList.remove(classNames[activeIndex][1]);
    rightImage.classList.remove(classNames[activeIndex][2]);

    activeIndex--;

    if (activeIndex < 0) {
      activeIndex = classNames.length - 1;
    }

    leftImage.classList.add(classNames[activeIndex][0]);
    midImage.classList.add(classNames[activeIndex][1]);
    rightImage.classList.add(classNames[activeIndex][2]);
    menuText.querySelector("p").innerText = menuNames[activeIndex];
    price.innerText = priceList[activeIndex];
  });
});
