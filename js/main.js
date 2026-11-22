/* CMG Wrestling Academy
   Site content that changes most often lives in the three objects below. */

// Practice times, keyed by day of week (0 = Sunday). 24-hour "HH:MM".
const SCHEDULE = {
  0: { start: "10:00", end: "11:30" },
  1: { start: "18:00", end: "19:30" },
  2: { start: "18:00", end: "19:30" },
  3: { start: "18:00", end: "19:30" },
  4: { start: "18:00", end: "19:30" },
};

// First day this schedule applies, as YYYY-MM-DD.
const SCHEDULE_START = "2026-11-23";

const COACHES = {
  taylor: {
    name: "Taylor Donovan",
    photo: "images/coach-taylor.jpg",
    groups: [
      {
        title: "High school",
        sub: "Timberlane Regional High School, class of 2018",
        items: [
          "109–43 career record",
          "NHIAA Division I champion and two-time finalist",
          "Three-time New England qualifier",
          "Starter on three All-State championship teams",
        ],
      },
      {
        title: "College",
        sub: "University of New Hampshire",
        items: [
          "UNH club wrestling captain, competed from 2019 to 2021",
          "Hospitality Management major with a minor in Psychology",
        ],
      },
      {
        title: "Now",
        text: "Taylor is an assistant coach at Timberlane Regional High School and Timberlane Middle School, and he is working toward a master's degree in school counseling. He runs our beginners program.",
      },
    ],
  },
  kyle: {
    name: "Kyle Gora",
    photo: "images/coach-kyle.jpg",
    groups: [
      {
        title: "High school",
        sub: "Alvirne High School",
        items: [
          "135–7 career record",
          "NHIAA Meet of Champions state champion and two-time finalist",
          "Three-time NHSCA All-American",
          "New England finalist and two-time New England placer",
          "Lowell Holiday Tournament champion",
        ],
      },
      {
        title: "College",
        sub: "Edinboro and New England College",
        items: [
          "One year of Division I wrestling at Edinboro",
          "Two-year starter at New England College",
          "Business Administration major",
        ],
      },
      {
        title: "Now",
        text: "Kyle coaches the Alvirne High School wrestling team, where he took over the Broncos for the 2025–26 season. He also coaches football.",
      },
    ],
  },
  maslanek: {
    name: "Conor Maslanek",
    photo: "images/coach-maslanek.jpg",
    groups: [
      {
        title: "High school",
        sub: "Pelham High School",
        items: [
          "150–16 career record",
          "Three-time New Hampshire state champion",
          "2021 New England champion",
          "2021 NHSCA national champion and two-time All-American",
        ],
      },
      {
        title: "College",
        sub: "Campbell University",
        items: [
          "Five-year Division I wrestler at 197 pounds",
          "2025 U23 freestyle All-American",
          "Team captain for the 2025–26 season",
          "Bachelor of Science in Biology and a Master of Business Administration",
        ],
      },
    ],
  },
};

// cat: training | competition | facility
const PHOTOS = [
  { src: "images/team-ncaa.jpg", w: 1500, h: 2000, cat: "training", cap: "The team, with our sponsor Atlantic Orthopaedics & Sports Medicine" },
  { src: "images/castleton-team.jpg", w: 1178, h: 786, cat: "competition", cap: "Castleton Fall Classic, October 2026" },
  { src: "images/room.jpg", w: 810, h: 764, cat: "facility", cap: "The wrestling room" },
  { src: "images/castleton-win.jpg", w: 1048, h: 1397, cat: "competition", cap: "Hand raised at Castleton" },
  { src: "images/practice.jpg", w: 1728, h: 530, cat: "training", cap: "Drilling at practice" },
  { src: "images/tulsa.jpg", w: 1400, h: 1864, cat: "competition", cap: "Tulsa Kickoff Nationals, November 2026" },
  { src: "images/weights.jpg", w: 768, h: 1024, cat: "facility", cap: "Weights and conditioning" },
  { src: "images/preseason-team.jpg", w: 1079, h: 963, cat: "competition", cap: "Closing out the preseason, November 2026" },
  { src: "images/bike.jpg", w: 720, h: 1280, cat: "training", cap: "Bike sprints after practice" },
  { src: "images/castleton-trophy.jpg", w: 1200, h: 1600, cat: "competition", cap: "Team champions, Castleton Fall Classic 2026" },
  { src: "images/locker-bench.jpg", w: 856, h: 644, cat: "facility", cap: "Locker room" },
  { src: "images/castleton-medal.jpg", w: 1200, h: 1600, cat: "competition", cap: "Medals at Castleton" },
  { src: "images/turf.jpg", w: 1728, h: 476, cat: "training", cap: "Sprints on the turf" },
  { src: "images/parents.jpg", w: 810, h: 672, cat: "facility", cap: "Parent seating" },
  { src: "images/castleton-match.jpg", w: 1034, h: 1378, cat: "competition", cap: "On the mat at Castleton" },
  { src: "images/locker-sinks.jpg", w: 858, h: 644, cat: "facility", cap: "Locker room" },
  { src: "images/sign.jpg", w: 1142, h: 828, cat: "facility", cap: "Our sign outside the Phanzone Sports Center" },
];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- Header: solid on scroll, mobile menu, current section ---------- */

const header = $(".site-header");
const nav = $("#site-nav");
const navToggle = $(".nav-toggle");

const setHeaderState = () => header.classList.toggle("is-solid", window.scrollY > 24);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeMenu = () => {
  nav.classList.remove("is-open");
  header.classList.remove("menu-open");
  document.body.classList.remove("no-scroll");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
};

navToggle.addEventListener("click", () => {
  const open = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", open);
  header.classList.toggle("menu-open", open);
  document.body.classList.toggle("no-scroll", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

const navLinks = $$('.site-nav a[href^="#"]');
const sections = $$("main section[id]");

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) =>
          a.classList.toggle("is-current", a.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Next practice (always in Eastern time) ---------- */

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const formatTime = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
};

const easternNow = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  return {
    utcDate: Date.UTC(Number(get("year")), Number(get("month")) - 1, Number(get("day"))),
    day: SHORT_DAYS.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
};

const nextPractice = () => {
  const now = easternNow();
  for (let offset = 0; offset <= 7; offset++) {
    const day = (now.day + offset) % 7;
    const slot = SCHEDULE[day];
    if (!slot) continue;
    const isoDate = new Date(now.utcDate + offset * 86400000).toISOString().slice(0, 10);
    if (isoDate < SCHEDULE_START) continue;
    if (offset === 0) {
      if (now.minutes >= toMinutes(slot.end)) continue;
      if (now.minutes >= toMinutes(slot.start)) {
        return { day, today: now.day, text: `On now until ${formatTime(slot.end)}` };
      }
      return { day, today: now.day, text: `Today at ${formatTime(slot.start)}` };
    }
    const label = offset === 1 ? "Tomorrow" : DAY_NAMES[day];
    return { day, today: now.day, text: `${label} at ${formatTime(slot.start)}` };
  }
  return null;
};

const renderNextPractice = () => {
  let next = null;
  try {
    next = nextPractice();
  } catch (err) {
    return; // leave the static fallback text in place
  }
  if (!next) return;
  $$("[data-next-practice]").forEach((el) => (el.textContent = next.text));
  $$("#week li").forEach((li) => {
    const day = Number(li.dataset.day);
    li.classList.toggle("is-today", day === next.today);
    li.classList.toggle("is-next", day === next.day);
  });
};

renderNextPractice();
setInterval(renderNextPractice, 60 * 1000);

/* ---------- Tabs ---------- */

$$("[data-tabs]").forEach((group) => {
  const tabs = $$('[role="tab"]', group);
  const vertical = $('[role="tablist"]', group).getAttribute("aria-orientation") === "vertical";

  const select = (tab, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      $("#" + t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (e) => {
      const prev = ["ArrowLeft", "ArrowUp"];
      const next = ["ArrowRight", "ArrowDown"];
      let target = null;
      if (next.includes(e.key)) target = tabs[(i + 1) % tabs.length];
      else if (prev.includes(e.key)) target = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") target = tabs[0];
      else if (e.key === "End") target = tabs[tabs.length - 1];
      if (!target) return;
      if (!vertical && (e.key === "ArrowUp" || e.key === "ArrowDown")) return;
      e.preventDefault();
      select(target, true);
    });
  });
});

/* ---------- Dialog helpers ---------- */

const openDialog = (dialog) => {
  dialog.showModal();
  document.body.classList.add("no-scroll");
};

$$("dialog").forEach((dialog) => {
  dialog.addEventListener("close", () => document.body.classList.remove("no-scroll"));
  dialog.addEventListener("click", (e) => {
    // click on the backdrop (the dialog element itself) or a close button
    if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
  });
});

/* ---------- Coach bios ---------- */

const coachDialog = $("#coach-dialog");

const el = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
};

$$("[data-coach]").forEach((card) => {
  card.addEventListener("click", () => {
    const coach = COACHES[card.dataset.coach];
    if (!coach) return;

    $("#coach-dialog-name").textContent = coach.name;
    const photo = $("#coach-dialog-photo");
    photo.src = coach.photo;
    photo.alt = coach.name;

    const content = $("#coach-dialog-content");
    content.replaceChildren();
    coach.groups.forEach((group) => {
      const wrap = el("div", null, "bio-group");
      wrap.append(el("h4", group.title));
      if (group.sub) wrap.append(el("p", group.sub, "bio-sub"));
      if (group.items) {
        const list = el("ul");
        group.items.forEach((item) => list.append(el("li", item)));
        wrap.append(list);
      }
      if (group.text) wrap.append(el("p", group.text));
      content.append(wrap);
    });

    openDialog(coachDialog);
    coachDialog.scrollTop = 0;
  });
});

/* ---------- Gallery and lightbox ---------- */

const grid = $("#gallery-grid");
const lightbox = $("#lightbox");
const lbImg = $("#lb-img");
const lbCaption = $("#lb-caption");
const lbCount = $("#lb-count");

let visiblePhotos = PHOTOS.slice();
let lbIndex = 0;

PHOTOS.forEach((photo) => {
  const btn = el("button", null, "gallery-item");
  btn.type = "button";
  btn.dataset.cat = photo.cat;
  btn.setAttribute("aria-label", `View photo: ${photo.cap}`);

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.cap;
  img.width = photo.w;
  img.height = photo.h;
  img.loading = "lazy";
  img.decoding = "async";

  btn.append(img, el("span", photo.cap, "cap"));
  btn.addEventListener("click", () => {
    lbIndex = visiblePhotos.indexOf(photo);
    showPhoto();
    openDialog(lightbox);
  });
  photo.node = btn;
  grid.append(btn);
});

const showPhoto = () => {
  const photo = visiblePhotos[lbIndex];
  lbImg.src = photo.src;
  lbImg.alt = photo.cap;
  lbCaption.textContent = photo.cap;
  lbCount.textContent = `${lbIndex + 1} / ${visiblePhotos.length}`;
  // warm the next image so stepping through feels instant
  const next = visiblePhotos[(lbIndex + 1) % visiblePhotos.length];
  new Image().src = next.src;
};

const step = (dir) => {
  lbIndex = (lbIndex + dir + visiblePhotos.length) % visiblePhotos.length;
  showPhoto();
};

$(".lb-prev").addEventListener("click", () => step(-1));
$(".lb-next").addEventListener("click", () => step(1));

lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// swipe on touch screens
let touchX = null;
lightbox.addEventListener("touchstart", (e) => (touchX = e.changedTouches[0].clientX), { passive: true });
lightbox.addEventListener(
  "touchend",
  (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx > 0 ? -1 : 1);
    touchX = null;
  },
  { passive: true }
);

$$(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    const cat = button.dataset.filter;
    $$(".filter").forEach((b) => {
      const on = b === button;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    visiblePhotos = PHOTOS.filter((p) => cat === "all" || p.cat === cat);
    PHOTOS.forEach((p) => (p.node.hidden = !visiblePhotos.includes(p)));
  });
});

/* ---------- Contact form: opens the visitor's email app ---------- */

const form = $("#contact-form");
const formError = $("#form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;

  const checks = [
    [name, name.value.trim().length > 0],
    [email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())],
    [message, message.value.trim().length > 0],
  ];
  checks.forEach(([field, ok]) => field.classList.toggle("is-invalid", !ok));

  const firstBad = checks.find(([, ok]) => !ok);
  formError.hidden = !firstBad;
  if (firstBad) {
    firstBad[0].focus();
    return;
  }

  const phone = form.elements.phone.value.trim();
  const subject = `CMG Wrestling Academy: ${form.elements.interest.value}`;
  const body = [
    message.value.trim(),
    "",
    `Name: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    phone ? `Phone: ${phone}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");

  window.location.href =
    "mailto:connormcg141@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});

form.addEventListener("input", (e) => {
  e.target.classList.remove("is-invalid");
  formError.hidden = true;
});

/* ---------- Reveal on scroll ---------- */

const revealEls = $$(".reveal");
if ("IntersectionObserver" in window) {
  const revealer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  revealEls.forEach((node) => revealer.observe(node));
} else {
  revealEls.forEach((node) => node.classList.add("is-visible"));
}

/* ---------- Footer year ---------- */

$$("[data-year]").forEach((node) => (node.textContent = new Date().getFullYear()));
