// Tillar: har bir matn uz va ru ko'rinishida.
const t = {
  uz: {
    title: `3 kun ichida saytga kirgan trafficni <span>24/7</span> ariza qoldirishga va xarid qilishga undaydigan sotuv saytini yarating.`,
    eyebrow: "Portfolio",
    tagline: "Men qilgan ishlarim bilan tanishib chiqing!",
    hero_btn: "Saytingiz maketini yasang!",
    b_title: "Saytingiz maketini yasaymiz",
    b_sub: "Bir necha savolga javob bering, men siz bilan bog'lanaman.",
    b_colors: "Sayt ranglari (kamida 3 ta)",
    b_colors_hint: "Tanlandi: {n} / kamida 3",
    b_niche: "Yo'nalish",
    b_niche_ph: "Masalan: stomatologiya, ta'lim, onlayn do'kon",
    b_goal: "Nima sotasiz yoki qanday xizmat uchun?",
    b_goal_ph: "Masalan: implantatsiya xizmati, onlayn kurs...",
    b_send: "Telegramga yuborish",
    b_err_colors: "Kamida 3 ta rang tanlang.",
    b_err_fields: "Yo'nalish va xizmat/mahsulot maydonlarini to'ldiring.",
    b_done: "Javoblaringiz nusxalandi va Telegram ochildi. Xabar yozilmagan bo'lsa, uni yopishtirib yuboring.",
    b_msg_head: "Salom! Sayt maketini buyurtma qilmoqchiman.",
    b_msg_colors: "Ranglar",
    b_msg_niche: "Yo'nalish",
    b_msg_goal: "Nima sotish / qanday xizmat",
    cta_text: `Agar siz ham <span>SOVUQ TRAFFIC</span>ni 24/7 sotuv va ariza qoldirishga undaydigan saytingizni yaratmoqchi bo'lsangiz, men bilan bog'laning 👇`,
    cta_btn: "Telegram orqali bog'lanish",
    open_site: "Saytni ochish",
    shot: "skrinshoti",
  },
  ru: {
    title: `За 3 дня создайте продающий сайт, который превращает холодный трафик в заявки и покупки <span>24/7</span>.`,
    eyebrow: "Портфолио",
    tagline: "Познакомьтесь с моими работами!",
    hero_btn: "Закажите макет вашего сайта!",
    b_title: "Сделаем макет вашего сайта",
    b_sub: "Ответьте на несколько вопросов, и я свяжусь с вами.",
    b_colors: "Цвета сайта (минимум 3)",
    b_colors_hint: "Выбрано: {n} / минимум 3",
    b_niche: "Направление",
    b_niche_ph: "Например: стоматология, образование, интернет-магазин",
    b_goal: "Что продаёте или для какой услуги?",
    b_goal_ph: "Например: услуга имплантации, онлайн-курс...",
    b_send: "Отправить в Telegram",
    b_err_colors: "Выберите минимум 3 цвета.",
    b_err_fields: "Заполните направление и продукт/услугу.",
    b_done: "Ответы скопированы, Telegram открыт. Если сообщение не появилось, вставьте его и отправьте.",
    b_msg_head: "Здравствуйте! Хочу заказать макет сайта.",
    b_msg_colors: "Цвета",
    b_msg_niche: "Направление",
    b_msg_goal: "Что продаём / какая услуга",
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
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t[lang][el.dataset.i18nPh];
  });
  renderCards(lang, animate);
  renderSwatches(lang);
  try { localStorage.setItem("lang", lang); } catch {}
}

// Anketa (maket buyurtmasi)
const palette = [
  { id: "black", hex: "#111111", uz: "Qora", ru: "Чёрный" },
  { id: "white", hex: "#f4f3ee", uz: "Oq", ru: "Белый" },
  { id: "gold", hex: "#c8a96a", uz: "Oltin", ru: "Золотой" },
  { id: "blue", hex: "#2f6fed", uz: "Ko'k", ru: "Синий" },
  { id: "teal", hex: "#1fb5b5", uz: "Moviy", ru: "Бирюзовый" },
  { id: "green", hex: "#2e9e6b", uz: "Yashil", ru: "Зелёный" },
  { id: "red", hex: "#e04545", uz: "Qizil", ru: "Красный" },
  { id: "orange", hex: "#f08a24", uz: "To'q sariq", ru: "Оранжевый" },
  { id: "pink", hex: "#e86aa6", uz: "Pushti", ru: "Розовый" },
  { id: "purple", hex: "#7a4fe0", uz: "Binafsha", ru: "Фиолетовый" },
  { id: "brown", hex: "#8a5a3c", uz: "Jigarrang", ru: "Коричневый" },
  { id: "gray", hex: "#8d8c87", uz: "Kulrang", ru: "Серый" },
];
const MIN_COLORS = 3;
const selected = new Set();

const dialog = document.getElementById("brief");
const form = document.getElementById("brief-form");
const swatchBox = document.getElementById("swatches");
const colorHint = document.getElementById("color-hint");
const briefMsg = document.getElementById("brief-msg");
let currentLang = "uz";

function updateHint() {
  colorHint.textContent = t[currentLang].b_colors_hint.replace("{n}", selected.size);
}

function renderSwatches(lang) {
  currentLang = lang;
  swatchBox.textContent = "";
  for (const c of palette) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "swatch";
    b.style.setProperty("--c", c.hex);
    b.title = c[lang];
    b.setAttribute("aria-label", c[lang]);
    b.setAttribute("aria-pressed", selected.has(c.id));
    b.innerHTML = `<i></i><span>${c[lang]}</span>`;
    b.addEventListener("click", () => {
      selected.has(c.id) ? selected.delete(c.id) : selected.add(c.id);
      b.setAttribute("aria-pressed", selected.has(c.id));
      briefMsg.textContent = "";
      updateHint();
    });
    swatchBox.appendChild(b);
  }
  updateHint();
}

function openBrief() {
  briefMsg.textContent = "";
  briefMsg.classList.remove("ok");
  dialog.showModal();
  document.body.classList.add("lock");
}
const closeBrief = () => dialog.close();

document.getElementById("open-brief").addEventListener("click", openBrief);
document.getElementById("brief-close").addEventListener("click", closeBrief);
dialog.addEventListener("click", (e) => { if (e.target === dialog) closeBrief(); });
dialog.addEventListener("close", () => document.body.classList.remove("lock"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tr = t[currentLang];
  const niche = document.getElementById("niche").value.trim();
  const goal = document.getElementById("goal").value.trim();
  briefMsg.classList.remove("ok");
  if (selected.size < MIN_COLORS) { briefMsg.textContent = tr.b_err_colors; return; }
  if (!niche || !goal) { briefMsg.textContent = tr.b_err_fields; return; }

  const colors = palette.filter((c) => selected.has(c.id)).map((c) => c[currentLang]).join(", ");
  const text = `${tr.b_msg_head}\n\n${tr.b_msg_colors}: ${colors}\n${tr.b_msg_niche}: ${niche}\n${tr.b_msg_goal}: ${goal}`;

  // Telegram brauzer oynasini darhol (bosish paytida) ochamiz, matnni esa buferga nusxalaymiz.
  window.open(`https://t.me/AlishervichA?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  navigator.clipboard?.writeText(text).catch(() => {});
  briefMsg.textContent = tr.b_done;
  briefMsg.classList.add("ok");
});

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => setLang(b.dataset.lang, false));
});

let saved = "uz";
try { saved = localStorage.getItem("lang") === "ru" ? "ru" : "uz"; } catch {}
setLang(saved, true);
