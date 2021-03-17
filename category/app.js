const store = [
  {
    id: 8,
    title: "안432",
    business_category: "음식점",
    location: "반곡동",
    img: "/src/images/stores/안432.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 1,
    title: "SILBERMOND",
    business_category: "음식점",
    location: "반곡동",
    img: "/src/images/stores/실버몬트.jpg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 2,
    title: "까치둥지",
    business_category: "음식점",
    location: "개운동",
    img: "/src/images/stores/까치둥지.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 3,
    title: "르미엘",
    business_category: "카페",
    location: "무실동",
    img: "/src/images/stores/르미엘.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 4,
    title: "린",
    business_category: "음식점",
    location: "무실동",
    img: "/src/images/stores/린.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 5,
    title: "보릿고개",
    business_category: "음식점",
    location: "반곡동",
    img: "/src/images/stores/보릿고개.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 6,
    title: "사니다카페",
    business_category: "카페",
    location: "무실동",
    img: "/src/images/stores/사니다카페.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 7,
    title: "산정집",
    business_category: "음식점",
    location: "행구동",
    img: "/src/images/stores/산정집.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 9,
    title: "앤트빌라",
    business_category: "음식점",
    location: "반곡동",
    img: "/src/images/stores/앤트빌라.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 10,
    title: "착한낙지",
    business_category: "음식점",
    location: "단계동",
    img: "/src/images/stores/착한낙지.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 12,
    title: "카페 행복지수",
    business_category: "카페",
    location: "행구동",
    img: "/src/images/stores/카페행복지수.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 13,
    title: "카페553",
    business_category: "카페",
    location: "행구동",
    img: "/src/images/stores/카페553.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 14,
    title: "카페치올라",
    business_category: "카페",
    location: "행구동",
    img: "/src/images/stores/카페치올라.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 15,
    title: "향교막국수",
    business_category: "음식점",
    location: "개운동",
    img: "/src/images/stores/향교막국수.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
  {
    id: 16,
    title: "허선웅닭갈비",
    business_category: "음식점",
    location: "단계동",
    img: "/src/images/stores/허선웅닭갈비.jpeg",
    desc: "동남아식 프리미엄 샐러드 & 샌드위치",
  },
];

//get parent element

const section__hot = document.querySelector(".cards__swiper__hot");
const section__food = document.querySelector(".cards__grid__food");

///////// Hot Stores /////////
window.addEventListener("DOMContentLoaded", function () {
  let displayStore = store.map(function (item) {
    // console.log(item.business_category);
    if (item.business_category === "음식점") {
      return `<div class="cards__swiper__card hot">
            <img
              src="${item.img}"
              class="store_img"
              alt="${item.title}"
            />
            <h3>${item.title}</h3>
            <span>${item.location}</span>
            <p>${item.desc}</p>
          </div>`;
    }
  });
  displayStore = displayStore.join("");
  section__hot.innerHTML = displayStore;
});

///////// Restaurant Recommendation /////////
window.addEventListener("DOMContentLoaded", function () {
  let displayStore = store.map(function (item) {
    // console.log(item);
    if (item.business_category === "음식점") {
      return `<a href="#" class="cards__grid__card">
            <div
              class="thumb16"
              style="background-image: url(${item.img})"
            ></div>
            <article>
              <h3>${item.title}</h3>
              <span>${item.location}</span>
              <p>${item.desc}</p>
            </article>
          </a>`;
    }
  });
  displayStore = displayStore.join("");
  section__food.innerHTML = displayStore;
});
