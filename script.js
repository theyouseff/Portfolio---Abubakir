// Tillar: har bir matn uz va ru ko'rinishida.
const t = {
  uz: {
    title: `3 kun ichida saytga kirgan trafficni <span>24/7</span> ariza qoldirishga va xarid qilishga undaydigan sotuv saytini yarating.`,
    eyebrow: "Portfolio",
    tagline: "Men qilgan ishlarim bilan tanishib chiqing!",
    cta_text: `Agar siz ham <span>SOVUQ TRAFFIC</span>ni 24/7 sotuv va ariza qoldirishga undaydigan saytingizni yaratmoqchi bo'lsangiz, men bilan bog'laning 👇`,
    cta_btn: "Telegram orqali bog'lanish",
    open_site: "Saytni ochish",
    shot: "skrinshoti",
  },
  ru: {
    title: `За 3 дня создайте продающий сайт, который превращает холодный трафик в заявки и покупки <span>24/7</span>.`,
    eyebrow: "Портфолио",
    tagline: "Познакомьтесь с моими работами!",
    cta_text: `Если вы тоже хотите сайт, который превращает <span>ХОЛОДНЫЙ ТРАФИК</span> в продажи и заявки 24/7, свяжитесь со мной 👇`,
    cta_btn: "Связаться через Telegram",
    open_site: "Открыть сайт",
    shot: "скриншот",
  },
};

// Yangi sayt qo'shish uchun shu massivga bitta obyekt qo'shing.
// image: zaxira skrinshot (images/ papkasida). Har bir matn maydoni {uz, ru}.
const sites = [
  {
    name: { uz: "Yusufkhan — Shaxsiy brend", ru: "Yusufkhan — Личный бренд" },
    desc: {
      uz: "Shaxsiy brend va kontent avtovoronka ekosistemasi uchun sotuv sahifasi.",
      ru: "Продающая страница для личного бренда и экосистемы контент-автоворонки.",
    },
    tags: [{ uz: "Landing", ru: "Лендинг" }],
    url: "https://yusufkhan-self-brend-01.vercel.app",
    image: "images/site1.png",
  },
  {
    name: { uz: "Dr. Ubaydulloh — Implantatsiya", ru: "Dr. Ubaydulloh — Имплантация" },
    desc: {
      uz: "Bir kunlik implantatsiya xizmati uchun bir sahifali sotuv sayti.",
      ru: "Одностраничный продающий сайт для услуги имплантации за один день.",
    },
    tags: [{ uz: "Landing", ru: "Лендинг" }],
    url: "https://1-page-ubaydulloh-aka-site.vercel.app/",
    image: "images/site2.png",
  },
  {
    name: { uz: "FESS Safe — LOR kurs", ru: "FESS Safe — курс для ЛОР-врачей" },
    desc: {
      uz: "LOR shifokorlar uchun xavfsiz FESS amaliyoti kursining yozilish sahifasi.",
      ru: "Страница записи на курс безопасной практики FESS для ЛОР-врачей.",
    },
    tags: [{ uz: "Landing", ru: "Лендинг" }],
    url: "https://mirkamol-mini-prod.vercel.app/",
    image: "images/site3.png",
  },
  {
    name: { uz: "LOR mutaxassisi — Video dars", ru: "ЛОР-специалист — Видеоурок" },
    desc: {
      uz: "LOR shifokorlari uchun KT tahlili bo'yicha 35 daqiqalik video dars sahifasi.",
      ru: "Страница 35-минутного видеоурока по анализу КТ для ЛОР-врачей.",
    },
    tags: [{ uz: "Landing", ru: "Лендинг" }, { uz: "Video", ru: "Видео" }],
    url: "https://mirkamol-video-site.vercel.app/",
    image: "images/site4.png",
  },
  {
    name: { uz: "Tripwire — 3 ta amaliy dars", ru: "Tripwire — 3 практических урока" },
    desc: {
      uz: "MSKT bo'yicha 3 ta amaliy darsni arzon narxda sotuvchi tripwire sahifa.",
      ru: "Трипвайр-страница с 3 практическими уроками по МСКТ по доступной цене.",
    },
    tags: [{ uz: "Landing", ru: "Лендинг" }, { uz: "Tripwire", ru: "Tripwire" }],
    url: "https://tripwire-sayt.vercel.app/",
    image: "images/site5.png",
  },
  {
    name: { uz: "ilmaviya — Ta'lim platformasi", ru: "ilmaviya — Образовательная платформа" },
    desc: {
      uz: "Foydalanuvchilar shaxsiy kabinet orqali kiradigan onlayn ta'lim platformasi.",
      ru: "Онлайн-платформа обучения с личным кабинетом для пользователей.",
    },
    tags: [{ uz: "Platforma", ru: "Платформа" }, { uz: "Kabinet", ru: "Кабинет" }],
    cta: { uz: "Platformani ochish", ru: "Открыть платформу" },
    url: "https://ilmaviya.vercel.app/",
    image: "images/site6.png",
  },
];

// Jonli skrinshot: sayt o'zgarsa, rasm ham yangilanadi. Ishlamasa, image (saqlangan nusxa) chiqadi.
const liveShot = (url) => `https://image.thum.io/get/width/1200/crop/750/noanimate/${url}`;

const grid = document.getElementById("grid");
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }
}, { threshold: 0.1 });

function renderCards(lang, animate) {
  grid.textContent = "";
  sites.forEach((s, i) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = s.url;
    card.target = "_blank";
    card.rel = "noopener";
    card.innerHTML = `
      <div class="thumb"><img src="${liveShot(s.url)}" alt="${s.name[lang]} ${t[lang].shot}" loading="lazy"></div>
      <div class="info">
        <h2>${s.name[lang]}</h2>
        <p>${s.desc[lang]}</p>
        <div class="tags">${s.tags.map((tag) => `<span>${tag[lang]}</span>`).join("")}</div>
        <div class="open">${(s.cta || { uz: t.uz.open_site, ru: t.ru.open_site })[lang]} <i>→</i></div>
      </div>`;
    const img = card.querySelector("img");
    img.addEventListener("error", () => {
      if (img.dataset.fallback) return img.remove();
      img.dataset.fallback = "1";
      img.src = s.image;
    });
    grid.appendChild(card);
    if (animate) {
      card.style.transitionDelay = `${i * 80}ms`;
      io.observe(card);
    } else {
      card.classList.add("in");
    }
  });
}

function setLang(lang, animate) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t[lang][el.dataset.i18n];
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  renderCards(lang, animate);
  try { localStorage.setItem("lang", lang); } catch {}
}

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => setLang(b.dataset.lang, false));
});

let saved = "uz";
try { saved = localStorage.getItem("lang") === "ru" ? "ru" : "uz"; } catch {}
setLang(saved, true);
