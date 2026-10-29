// Tillar: har bir matn uz va ru ko'rinishida.
const t = {
  uz: {
    title: `3 kun ichida saytga kirgan trafficni <span>24/7</span> ariza qoldirishga va xarid qilishga undaydigan sotuv saytini yarating.`,
    eyebrow: "Portfolio",
    tagline: "Men qilgan ishlarim bilan tanishib chiqing!",
    hero_btn: "Saytingiz maketini yasang!",
    b_title: "Saytingiz maketini yasaymiz",
    b_sub: "Bir necha savolga javob bering, men siz bilan bog'lanaman.",
    b_colors: "Sayt ranglari (kamida 3 ta, birinchisi — asosiy fon)",
    b_make: "Maketni yasash",
    b_pages: "Nechta sahifali sayt kerak? (kamida 5 ta)",
    b_msg_pages: "Sahifalar soni",
    r_pages: "Sahifalar yaratilmoqda: {n} / {total}",
    r_pages_done: "{total} ta sahifa tayyor. Sahifalarni bosib ko'rishingiz mumkin.",
    l1: "Ranglar uyg'unlashtirilmoqda…",
    l2: "Sarlavha va matnlar yozilmoqda…",
    l3: "Bloklar joylashtirilmoqda…",
    l4: "Maket jonlantirilmoqda…",
    r_title: "Maketingiz tayyor",
    r_note: "Bu taxminiy maket, javoblaringiz asosida avtomatik yig'ildi. Haqiqiy dizaynni men alohida, to'liq ishlab chiqaman.",
    r_redo: "Qayta yasash",
    p_h: "{goal} — {niche} sohasida ishonchli tanlov",
    p_sub: "Tez natija, ishonchli sifat va shaxsiy yondashuv.",
    p_cta: "Ariza qoldirish",
    p_f1t: "Tez natija", p_f1: "Qisqa vaqtda ko'rinadigan o'zgarish.",
    p_f2t: "Ishonchli sifat", p_f2: "Har bir bosqich nazorat ostida.",
    p_f3t: "Qulay narx", p_f3: "Hamyonbop va shaffof shartlar.",
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
    b_colors: "Цвета сайта (минимум 3, первый — основной фон)",
    b_make: "Создать макет",
    b_pages: "Сколько страниц нужно? (минимум 5)",
    b_msg_pages: "Количество страниц",
    r_pages: "Создаём страницы: {n} / {total}",
    r_pages_done: "Готово страниц: {total}. Нажимайте на вкладки, чтобы посмотреть.",
    l1: "Подбираем цвета…",
    l2: "Пишем заголовок и тексты…",
    l3: "Размещаем блоки…",
    l4: "Оживляем макет…",
    r_title: "Ваш макет готов",
    r_note: "Это примерный макет, собранный автоматически по вашим ответам. Настоящий дизайн я разработаю отдельно и полностью.",
    r_redo: "Собрать заново",
    p_h: "{goal} — надёжный выбор в сфере «{niche}»",
    p_sub: "Быстрый результат, надёжное качество и личный подход.",
    p_cta: "Оставить заявку",
    p_f1t: "Быстрый результат", p_f1: "Заметные изменения за короткий срок.",
    p_f2t: "Надёжное качество", p_f2: "Каждый этап под контролем.",
    p_f3t: "Доступная цена", p_f3: "Прозрачные и выгодные условия.",
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
dialog.addEventListener("close", () => {
  document.body.classList.remove("lock");
  buildId++;
  showView("form");
});

// Maketni jonli yig'ish
const buildBox = document.getElementById("brief-build");
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loader-text");
const bar = document.getElementById("bar");
const result = document.getElementById("result");
const resultMsg = document.getElementById("result-msg");
const mock = document.getElementById("mock");
let buildId = 0;
let lastBrief = null;
let pageCount = 5;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const lum = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(n >> 16) + 0.7152 * f((n >> 8) & 255) + 0.0722 * f(n & 255);
};
const contrast = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const inkOn = (bg) => (lum(bg) > 0.35 ? "#111111" : "#ffffff");

function showView(view) {
  form.hidden = view !== "form";
  buildBox.hidden = view === "form";
  loader.hidden = view !== "loading";
  result.hidden = view !== "result";
  dialog.classList.toggle("wide", view === "result");
}

// Tanlangan ranglardan tema: 1-rang fon, fonga eng kontrastli rang aksent, qolgani kartalar.
function makeTheme(ids) {
  const cols = ids.map((id) => palette.find((c) => c.id === id).hex);
  const bg = cols[0];
  const rest = cols.slice(1);
  const accent = rest.reduce((best, c) => (contrast(bg, c) > contrast(bg, best) ? c : best), rest[0]);
  const card = rest.find((c) => c !== accent) || accent;
  return { bg, ink: inkOn(bg), accent, accentInk: inkOn(accent), card, cardInk: inkOn(card) };
}

// Sahifalar katalogi: tanlangan soniga qarab shu ro'yxatdan dastlabki N tasi olinadi.
const pagesData = {
  uz: [
    { key: "home", name: "Bosh sahifa" },
    { key: "services", name: "Xizmatlar", title: "Bizning xizmatlar", intro: "{goal} bo'yicha to'liq xizmatlar.", items: [["Maslahat", "Bepul dastlabki suhbat."], ["Asosiy xizmat", "{goal}."], ["Qo'llab-quvvatlash", "Natijadan keyin ham yoningizda."]] },
    { key: "prices", name: "Narxlar", title: "Tariflar", intro: "Sizga mos tarifni tanlang.", items: [["Start", "Eng zarur imkoniyatlar."], ["Standart", "Ko'pchilik tanlaydigan variant."], ["Premium", "To'liq xizmat va ustuvorlik."]] },
    { key: "about", name: "Biz haqimizda", title: "Biz haqimizda", intro: "{niche} sohasida ishonch bilan ishlaymiz.", items: [["Tajriba", "Yillar davomidagi amaliyot."], ["Yondashuv", "Har bir mijozga alohida e'tibor."], ["Natija", "Aniq va o'lchanadigan natija."]] },
    { key: "contact", name: "Aloqa", title: "Biz bilan bog'laning", intro: "Ariza qoldiring, tez orada javob beramiz.", fields: ["Ismingiz", "Telefon raqamingiz"] },
    { key: "portfolio", name: "Ishlar", title: "Bajarilgan ishlar", intro: "Mijozlar bilan qilgan loyihalar.", items: [["Loyiha 1", "Qisqa tavsif."], ["Loyiha 2", "Qisqa tavsif."], ["Loyiha 3", "Qisqa tavsif."]] },
    { key: "reviews", name: "Sharhlar", title: "Mijozlar fikri", intro: "Biz bilan ishlaganlar nima deydi.", items: [["Mijoz 1", "“Natijadan juda mamnunman.”"], ["Mijoz 2", "“Tez va sifatli ishladi.”"], ["Mijoz 3", "“Tavsiya qilaman.”"]] },
    { key: "faq", name: "Savollar", title: "Ko'p so'raladigan savollar", intro: "Eng muhim savollarga javoblar.", items: [["Qancha vaqt ketadi?", "Muddat loyihaga bog'liq."], ["Qanday boshlaymiz?", "Ariza qoldiring, bog'lanamiz."], ["Kafolat bormi?", "Ha, shartnomada belgilanadi."]] },
    { key: "blog", name: "Blog", title: "Foydali maqolalar", intro: "{niche} haqida maslahatlar va yangiliklar.", items: [["Maqola 1", "Qisqa mazmun."], ["Maqola 2", "Qisqa mazmun."], ["Maqola 3", "Qisqa mazmun."]] },
    { key: "team", name: "Jamoa", title: "Bizning jamoa", intro: "Ishini yaxshi biladigan mutaxassislar.", items: [["Mutaxassis 1", "Lavozim"], ["Mutaxassis 2", "Lavozim"], ["Mutaxassis 3", "Lavozim"]] },
  ],
  ru: [
    { key: "home", name: "Главная" },
    { key: "services", name: "Услуги", title: "Наши услуги", intro: "{goal}: полный комплекс услуг.", items: [["Консультация", "Бесплатный первичный разговор."], ["Основная услуга", "{goal}."], ["Поддержка", "Остаёмся рядом и после результата."]] },
    { key: "prices", name: "Цены", title: "Тарифы", intro: "Выберите подходящий тариф.", items: [["Старт", "Самое необходимое."], ["Стандарт", "Выбор большинства."], ["Премиум", "Полный сервис и приоритет."]] },
    { key: "about", name: "О нас", title: "О нас", intro: "Уверенно работаем в сфере «{niche}».", items: [["Опыт", "Годы практики."], ["Подход", "Внимание к каждому клиенту."], ["Результат", "Чёткий и измеримый итог."]] },
    { key: "contact", name: "Контакты", title: "Свяжитесь с нами", intro: "Оставьте заявку, мы скоро ответим.", fields: ["Ваше имя", "Ваш телефон"] },
    { key: "portfolio", name: "Работы", title: "Выполненные работы", intro: "Проекты, сделанные с клиентами.", items: [["Проект 1", "Краткое описание."], ["Проект 2", "Краткое описание."], ["Проект 3", "Краткое описание."]] },
    { key: "reviews", name: "Отзывы", title: "Мнение клиентов", intro: "Что говорят те, кто с нами работал.", items: [["Клиент 1", "«Очень доволен результатом.»"], ["Клиент 2", "«Быстро и качественно.»"], ["Клиент 3", "«Рекомендую.»"]] },
    { key: "faq", name: "Вопросы", title: "Частые вопросы", intro: "Ответы на самые важные вопросы.", items: [["Сколько это займёт?", "Срок зависит от проекта."], ["С чего начнём?", "Оставьте заявку, мы свяжемся."], ["Есть ли гарантия?", "Да, фиксируется в договоре."]] },
    { key: "blog", name: "Блог", title: "Полезные статьи", intro: "Советы и новости: {niche}.", items: [["Статья 1", "Краткое содержание."], ["Статья 2", "Краткое содержание."], ["Статья 3", "Краткое содержание."]] },
    { key: "team", name: "Команда", title: "Наша команда", intro: "Специалисты, которые знают своё дело.", items: [["Специалист 1", "Должность"], ["Специалист 2", "Должность"], ["Специалист 3", "Должность"]] },
  ],
};

async function buildMock(id, brief) {
  const tr = t[currentLang];
  const th = makeTheme(brief.ids);
  const pages = pagesData[currentLang].slice(0, brief.pages);
  const fill = (s) => esc(cap(s.replace("{goal}", brief.goal).replace("{niche}", brief.niche)));
  const brand = esc(cap(brief.niche));
  const heading = tr.p_h.replace("{goal}", cap(brief.goal)).replace("{niche}", brief.niche);
  const status = document.getElementById("pages-status");
  const setStatus = (n) => { status.textContent = tr.r_pages.replace("{n}", n).replace("{total}", pages.length); };

  const pageBody = (p) => p.fields
    ? `<h3 class="m-h2">${fill(p.title)}</h3><p class="m-p">${fill(p.intro)}</p>
       <div class="m-form">${p.fields.map((x) => `<div class="m-field">${esc(x)}</div>`).join("")}<span class="m-btn">${tr.p_cta}</span></div>`
    : `<h3 class="m-h2">${fill(p.title)}</h3><p class="m-p">${fill(p.intro)}</p>
       <div class="m-cards">${p.items.map(([a, b]) => `<div class="m-card"><b>${fill(a)}</b><p>${fill(b)}</p></div>`).join("")}</div>`;

  mock.className = "mock";
  mock.style.cssText = `--bg:${th.bg};--ink:${th.ink};--accent:${th.accent};--accent-ink:${th.accentInk};--card:${th.card};--card-ink:${th.cardInk}`;
  mock.innerHTML = `
    <div class="m-nav m-in"><b>${brand}</b></div>
    <div class="m-tabs" role="tablist">
      ${pages.map((p) => `<button type="button" class="m-tab" role="tab" data-page="${p.key}">${esc(p.name)}</button>`).join("")}
    </div>
    <section class="m-page" data-page="home">
      <div class="m-hero">
        <h3 class="m-h"></h3>
        <p class="m-p m-in">${tr.p_sub}</p>
        <span class="m-btn m-in">${tr.p_cta}</span>
      </div>
      <div class="m-cards">
        ${[1, 2, 3].map((n) => `<div class="m-card m-in"><b>${tr["p_f" + n + "t"]}</b><p>${tr["p_f" + n]}</p></div>`).join("")}
      </div>
    </section>
    ${pages.slice(1).map((p) => `<section class="m-page" data-page="${p.key}" hidden>${pageBody(p)}</section>`).join("")}
    <div class="m-foot m-in">© ${brand}</div>`;

  const show = async (sel, ms) => {
    for (const el of mock.querySelectorAll(sel)) {
      if (id !== buildId) return false;
      el.classList.add("on");
      await sleep(ms);
    }
    return id === buildId;
  };

  setStatus(0);
  if (!(await show(".m-nav", 400))) return;

  // Sahifalar birma-bir yaratiladi
  const tabs = [...mock.querySelectorAll(".m-tab")];
  for (let i = 0; i < tabs.length; i++) {
    if (id !== buildId) return;
    tabs[i].classList.add("on");
    setStatus(i + 1);
    await sleep(380);
  }
  tabs[0].classList.add("active");

  // Bosh sahifa jonli yoziladi
  const h = mock.querySelector(".m-h");
  for (let i = 1; i <= heading.length; i++) {
    if (id !== buildId) return;
    h.textContent = heading.slice(0, i);
    await sleep(28);
  }
  if (!(await show("[data-page=home] .m-p", 350))) return;
  if (!(await show("[data-page=home] .m-btn", 400))) return;
  if (!(await show("[data-page=home] .m-card", 300))) return;
  if (!(await show(".m-foot", 0))) return;

  status.textContent = tr.r_pages_done.replace("{total}", pages.length);
  mock.classList.add("ready");
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((x) => x.classList.toggle("active", x === tab));
    mock.querySelectorAll(".m-page").forEach((s) => {
      const on = s.dataset.page === tab.dataset.page;
      s.hidden = !on;
      if (on) { s.classList.remove("fresh"); void s.offsetWidth; s.classList.add("fresh"); }
    });
  }));
}

async function startBuild(brief) {
  const id = ++buildId;
  const steps = ["l1", "l2", "l3", "l4"];
  resultMsg.textContent = "";
  resultMsg.classList.remove("ok");
  showView("loading");
  bar.style.transition = "none";
  bar.style.width = "0%";
  await sleep(30);
  for (let i = 0; i < steps.length; i++) {
    loaderText.textContent = t[currentLang][steps[i]];
    bar.style.transition = "width 1.1s linear";
    bar.style.width = `${((i + 1) / steps.length) * 100}%`;
    await sleep(1150);
    if (id !== buildId) return;
  }
  showView("result");
  await buildMock(id, brief);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tr = t[currentLang];
  const niche = document.getElementById("niche").value.trim();
  const goal = document.getElementById("goal").value.trim();
  briefMsg.classList.remove("ok");
  if (selected.size < MIN_COLORS) { briefMsg.textContent = tr.b_err_colors; return; }
  if (!niche || !goal) { briefMsg.textContent = tr.b_err_fields; return; }

  lastBrief = { ids: [...selected], niche, goal, pages: pageCount };
  startBuild(lastBrief);
});

document.querySelectorAll("#chips .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    pageCount = Number(chip.dataset.n);
    document.querySelectorAll("#chips .chip").forEach((c) => c.setAttribute("aria-pressed", c === chip));
  });
});

document.getElementById("redo-btn").addEventListener("click", () => {
  buildId++;
  showView("form");
});

document.getElementById("send-btn").addEventListener("click", () => {
  const tr = t[currentLang];
  const colors = lastBrief.ids.map((id) => palette.find((c) => c.id === id)[currentLang]).join(", ");
  const text = `${tr.b_msg_head}\n\n${tr.b_msg_colors}: ${colors}\n${tr.b_msg_niche}: ${lastBrief.niche}\n${tr.b_msg_goal}: ${lastBrief.goal}\n${tr.b_msg_pages}: ${lastBrief.pages}`;

  // Telegram brauzer oynasini darhol (bosish paytida) ochamiz, matnni esa buferga nusxalaymiz.
  window.open(`https://t.me/AlishervichA?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  navigator.clipboard?.writeText(text).catch(() => {});
  resultMsg.textContent = tr.b_done;
  resultMsg.classList.add("ok");
});

document.querySelectorAll(".lang button").forEach((b) => {
  b.addEventListener("click", () => setLang(b.dataset.lang, false));
});

let saved = "uz";
try { saved = localStorage.getItem("lang") === "ru" ? "ru" : "uz"; } catch {}
setLang(saved, true);
