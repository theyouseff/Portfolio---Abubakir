// Yangi sayt qo'shish uchun shu massivga bitta obyekt qo'shing.
// image: zaxira skrinshot (images/ papkasida).
const sites = [
  {
    name: "Yusufkhan — Shaxsiy brend",
    desc: "Shaxsiy brend va kontent avtovoronka ekosistemasi uchun sotuv sahifasi.",
    tags: ["Landing"],
    url: "https://yusufkhan-self-brend-01.vercel.app",
    image: "images/site1.png",
  },
  {
    name: "Dr. Ubaydulloh — Implantatsiya",
    desc: "Bir kunlik implantatsiya xizmati uchun bir sahifali sotuv sayti.",
    tags: ["Landing"],
    url: "https://1-page-ubaydulloh-aka-site.vercel.app/",
    image: "images/site2.png",
  },
  {
    name: "FESS Safe — LOR kurs",
    desc: "LOR shifokorlar uchun xavfsiz FESS amaliyoti kursining yozilish sahifasi.",
    tags: ["Landing"],
    url: "https://mirkamol-mini-prod.vercel.app/",
    image: "images/site3.png",
  },
  {
    name: "LOR mutaxassisi — Video dars",
    desc: "LOR shifokorlari uchun KT tahlili bo'yicha 35 daqiqalik video dars sahifasi.",
    tags: ["Landing", "Video"],
    url: "https://mirkamol-video-site.vercel.app/",
    image: "images/site4.png",
  },
  {
    name: "Tripwire — 3 ta amaliy dars",
    desc: "MSKT bo'yicha 3 ta amaliy darsni arzon narxda sotuvchi tripwire sahifa.",
    tags: ["Landing", "Tripwire"],
    url: "https://tripwire-sayt.vercel.app/",
    image: "images/site5.png",
  },
  {
    name: "ilmaviya — Ta'lim platformasi",
    desc: "Foydalanuvchilar shaxsiy kabinet orqali kiradigan onlayn ta'lim platformasi.",
    tags: ["Platforma", "Kabinet"],
    cta: "Platformani ochish",
    url: "https://ilmaviya.vercel.app/",
    image: "images/site6.png",
  },
];

// Jonli skrinshot: sayt o'zgarsa, rasm ham yangilanadi. Ishlamasa, image (saqlangan nusxa) chiqadi.
const liveShot = (url) => `https://image.thum.io/get/width/1200/crop/750/noanimate/${url}`;

const grid = document.getElementById("grid");

for (const s of sites) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = s.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `
    <div class="thumb"><img src="${liveShot(s.url)}" alt="${s.name} skrinshoti" loading="lazy"></div>
    <div class="info">
      <h2>${s.name}</h2>
      <p>${s.desc}</p>
      <div class="tags">${s.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="open">${s.cta || "Saytni ochish"} <i>→</i></div>
    </div>`;
  const img = card.querySelector("img");
  img.addEventListener("error", () => {
    if (img.dataset.fallback) return img.remove();
    img.dataset.fallback = "1";
    img.src = s.image;
  });
  grid.appendChild(card);
}

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }
}, { threshold: 0.1 });
document.querySelectorAll(".card").forEach((c, i) => {
  c.style.transitionDelay = `${i * 80}ms`;
  io.observe(c);
});
