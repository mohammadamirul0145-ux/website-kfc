/* ============================================================
   KFC Concept Site — Interactions
   ============================================================ */
"use strict";

/* ---------- Menu data ---------- */
const MENU = [
  {
    id: "orig-8pc",
    name: "Original Recipe Bucket",
    cat: "chicken",
    catLabel: "Chicken",
    desc: "8 pieces of our signature pressure-fried chicken, marinated 24 hours in 11 herbs & spices. The one that started it all.",
    price: 19.99,
    tag: "Best Seller",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Looking_down_into_KFC_bucket_of_fried_chicken_%2834956588243%29.jpg/960px-Looking_down_into_KFC_bucket_of_fried_chicken_%2834956588243%29.jpg",
  },
  {
    id: "zinger",
    name: "Zinger Burger",
    cat: "burgers",
    catLabel: "Burgers",
    desc: "Crispy fillet chicken stacked with mayo, lettuce, tomato and melted cheese in a toasted brioche bun. Spicy. Addictive.",
    price: 8.49,
    tag: "Spicy",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/A_new_red_and_black_burger_from_a_KFC_in_Shenzhen.jpg/960px-A_new_red_and_black_burger_from_a_KFC_in_Shenzhen.jpg",
  },
  {
    id: "wings-6pc",
    name: "Hot Wings (6 pc)",
    cat: "chicken",
    catLabel: "Chicken",
    desc: "Six jumbo wings glazed in our fiery secret hot sauce. Served with cool ranch for dipping.",
    price: 10.99,
    tag: "Hot",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/16-03-02-Hot-Wings-KFC-Berlin-N3S_3711.jpg/960px-16-03-02-Hot-Wings-KFC-Berlin-N3S_3711.jpg",
  },
  {
    id: "nuggets",
    name: "Chicken Nuggets (5 pc)",
    cat: "chicken",
    catLabel: "Chicken",
    desc: "Five tender bite-sized pieces of premium white meat, breaded and fried golden. Kid-approved.",
    price: 5.99,
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/GD_%E5%BB%A3%E6%9D%B1_Guangdong_%E6%9D%B1%E8%8E%9E_Dongguan_%E6%B0%91%E7%9B%88_%E5%9C%8B%E8%B2%BF%E5%9F%8E_DG_Mall_shop_KFC_Restaurant_food_%E9%BA%A5%E6%A8%82%E9%9B%9E_%E9%BB%83%E9%87%91%E7%82%B8%E9%9B%9E%E5%A1%8A_fried_chicken_nuggets_December_2024_R12S_03.jpg/960px-GD_%E5%BB%A3%E6%9D%B1_Guangdong_%E6%9D%B1%E8%8E%9E_Dongguan_%E6%B0%91%E7%9B%88_%E5%9C%8B%E8%B2%BF%E5%9F%8E_DG_Mall_shop_KFC_Restaurant_food_%E9%BA%A5%E6%A8%82%E9%9B%9E_%E9%BB%83%E9%87%91%E7%82%B8%E9%9B%9E%E5%A1%8A_fried_chicken_nuggets_December_2024_R12S_03.jpg",
  },
  {
    id: "drumsticks",
    name: "Drumsticks (3 pc)",
    cat: "chicken",
    catLabel: "Chicken",
    desc: "Three meaty drumsticks with skin-on crunch and fall-off-the-bone tenderness.",
    price: 7.49,
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Extra_Crispy_KFC_and_2_Biscuits_%2816987782887%29.jpg/960px-Extra_Crispy_KFC_and_2_Biscuits_%2816987782887%29.jpg",
  },
  {
    id: "sandwich",
    name: "Breakfast Sandwich",
    cat: "burgers",
    catLabel: "Burgers",
    desc: "Egg, ham and melted cheese tucked into a toasted bun — the morning classic, KFC style.",
    price: 4.99,
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/KFC_%22Riser%22_Breakfast_sandwich%2C_Yogyakarta%2C_Indonesia.jpg/960px-KFC_%22Riser%22_Breakfast_sandwich%2C_Yogyakarta%2C_Indonesia.jpg",
  },
  {
    id: "fries",
    name: "Seasoned Fries",
    cat: "sides",
    catLabel: "Sides",
    desc: "Golden fries tossed in our signature seasoning blend. Crispy outside, fluffy inside.",
    price: 3.49,
    tag: "Popular",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/KFC_french_fries_%28Nov_13%2C_2025%29.jpg/960px-KFC_french_fries_%28Nov_13%2C_2025%29.jpg",
  },
  {
    id: "coleslaw",
    name: "Creamy Coleslaw",
    cat: "sides",
    catLabel: "Sides",
    desc: "Crunchy cabbage and carrot in a cool, creamy dressing. The perfect counterpoint to heat.",
    price: 2.99,
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/KFC_Cole_Slaw_%2816987783087%29.jpg/960px-KFC_Cole_Slaw_%2816987783087%29.jpg",
  },
  {
    id: "wedges",
    name: "Cheesy Potato Wedges",
    cat: "sides",
    catLabel: "Sides",
    desc: "Thick-cut potato wedges smothered in warm, gooey cheese sauce. Dangerously moreish.",
    price: 3.99,
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/KFC_Cheesy_Potato_Wedges.jpg/960px-KFC_Cheesy_Potato_Wedges.jpg",
  },
  {
    id: "apple-pie",
    name: "Chocolate Chip Cookie",
    cat: "desserts",
    catLabel: "Desserts",
    desc: "Our warm, gooey chocolate chip cookie — baked fresh and served while still soft in the middle.",
    price: 1.99,
    tag: "Classic",
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/KFC_Chocolate_Chip_Cookie_%2827526286083%29.jpg/960px-KFC_Chocolate_Chip_Cookie_%2827526286083%29.jpg",
  },
  {
    id: "milkshake",
    name: "Coconut Milkshake",
    cat: "drinks",
    catLabel: "Drinks",
    desc: "Thick, creamy coconut milkshake blended to order. Dangerously drinkable.",
    price: 3.99,
    img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Kokos_milkshake_%28Kentucky_Fried_Chicken%29%2C_Oude_Noorden%2C_Rotterdam_%282023%29_01.jpg/960px-Kokos_milkshake_%28Kentucky_Fried_Chicken%29%2C_Oude_Noorden%2C_Rotterdam_%282023%29_01.jpg",
  },
];

const money = (n) => "$" + n.toFixed(2);
const byId = (id) => MENU.find((m) => m.id === id);

/* ---------- Menu rendering & filtering ---------- */
const grid = document.getElementById("menuGrid");
const filters = document.getElementById("menuFilters");
let activeCat = "all";

function cardHTML(item, i) {
  return `
    <article class="dish-card" data-id="${item.id}" style="animation-delay:${Math.min(i * 60, 360)}ms">
      <div class="dish-card__img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.tag ? `<span class="dish-card__tag${item.tag === "Hot" || item.tag === "Spicy" ? " dish-card__tag--hot" : ""}">${item.tag}</span>` : ""}
        <span class="dish-card__price">${money(item.price)}</span>
      </div>
      <div class="dish-card__body">
        <span class="dish-card__cat">${item.catLabel}</span>
        <h3 class="dish-card__name">${item.name}</h3>
        <p class="dish-card__desc">${item.desc}</p>
        <div class="dish-card__foot">
          <span class="dish-card__price-full">${money(item.price)}</span>
          <button class="add-btn" data-add="${item.id}" aria-label="Add ${item.name} to cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            Add
          </button>
        </div>
      </div>
    </article>`;
}

function renderMenu(cat = "all") {
  const items = cat === "all" ? MENU : MENU.filter((m) => m.cat === cat);
  grid.innerHTML = items.map(cardHTML).join("");
}

filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
  btn.classList.add("is-active");
  activeCat = btn.dataset.cat;
  renderMenu(activeCat);
});

/* ---------- Cart ---------- */
const cart = new Map(); // id -> qty
const cartEl = document.getElementById("cart");
const overlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartFootEl = document.getElementById("cartFoot");
const cartCountEl = document.getElementById("cartCount");
const DELIVERY_FEE = 3.99;

function cartCount() {
  let n = 0;
  cart.forEach((q) => (n += q));
  return n;
}

function cartSubtotal() {
  let s = 0;
  cart.forEach((q, id) => (s += byId(id).price * q));
  return s;
}

function addToCart(id, qty = 1) {
  cart.set(id, (cart.get(id) || 0) + qty);
  renderCart();
  const item = byId(id);
  toast(`${item.name} added to cart`);
  const badge = cartCountEl;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
}

function setQty(id, qty) {
  if (qty <= 0) cart.delete(id);
  else cart.set(id, qty);
  renderCart();
}

function renderCart() {
  const count = cartCount();
  cartCountEl.textContent = count;
  cartItemsEl.innerHTML = "";

  if (count === 0) {
    cartEmptyEl.classList.add("is-visible");
    cartFootEl.hidden = true;
    return;
  }
  cartEmptyEl.classList.remove("is-visible");
  cartFootEl.hidden = false;

  cart.forEach((qty, id) => {
    const item = byId(id);
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img class="cart-item__img" src="${item.img}" alt="${item.name}" />
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${money(item.price)} each</div>
      </div>
      <div class="cart-item__right">
        <div class="qty">
          <button data-dec="${id}" aria-label="Decrease">−</button>
          <span>${qty}</span>
          <button data-inc="${id}" aria-label="Increase">+</button>
        </div>
        <span class="cart-item__total">${money(item.price * qty)}</span>
        <button class="cart-item__remove" data-remove="${id}">Remove</button>
      </div>`;
    cartItemsEl.appendChild(row);
  });

  const sub = cartSubtotal();
  const total = sub + DELIVERY_FEE;
  document.getElementById("cartSubtotal").textContent = money(sub);
  document.getElementById("cartDelivery").textContent = money(DELIVERY_FEE);
  document.getElementById("cartTotal").textContent = money(total);
}

cartItemsEl.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]");
  const dec = e.target.closest("[data-dec]");
  const rem = e.target.closest("[data-remove]");
  if (inc) setQty(inc.dataset.inc, (cart.get(inc.dataset.inc) || 0) + 1);
  if (dec) setQty(dec.dataset.dec, (cart.get(dec.dataset.dec) || 1) - 1);
  if (rem) { cart.delete(rem.dataset.remove); renderCart(); }
});

function openCart() {
  cartEl.classList.add("is-open");
  cartEl.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("is-open"));
  document.body.style.overflow = "hidden";
}
function closeCart() {
  cartEl.classList.remove("is-open");
  cartEl.setAttribute("aria-hidden", "true");
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => { if (!cartEl.classList.contains("is-open")) overlay.hidden = true; }, 400);
}

document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.getElementById("cartEmptyBtn").addEventListener("click", () => {
  closeCart();
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
  toast("Order placed! Your crispy chicken is on the way. 🍗");
  cart.clear();
  renderCart();
  setTimeout(closeCart, 600);
});

/* ---------- Menu card interactions ---------- */
let modalItem = null;
let modalQty = 1;

const modal = document.getElementById("itemModal");

function openModal(id) {
  const item = byId(id);
  if (!item) return;
  modalItem = item;
  modalQty = 1;
  document.getElementById("modalImg").src = item.img;
  document.getElementById("modalImg").alt = item.name;
  document.getElementById("modalCat").textContent = item.catLabel;
  document.getElementById("modalName").textContent = item.name;
  document.getElementById("modalDesc").textContent = item.desc;
  document.getElementById("modalPrice").textContent = money(item.price);
  document.getElementById("modalQty").textContent = "1";
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  modalItem = null;
}

grid.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add]");
  const card = e.target.closest(".dish-card");
  if (addBtn) {
    e.stopPropagation();
    addToCart(addBtn.dataset.add);
    return;
  }
  if (card) openModal(card.dataset.id);
});

modal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]") || e.target === modal.querySelector(".modal__backdrop")) {
    closeModal();
    return;
  }
  if (e.target.closest("#modalQtyMinus")) {
    modalQty = Math.max(1, modalQty - 1);
    document.getElementById("modalQty").textContent = modalQty;
  }
  if (e.target.closest("#modalQtyPlus")) {
    modalQty = Math.min(20, modalQty + 1);
    document.getElementById("modalQty").textContent = modalQty;
  }
  if (e.target.closest("#modalAdd") && modalItem) {
    addToCart(modalItem.id, modalQty);
    closeModal();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); closeCart(); }
});

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span>${msg}</span>`;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2600);
}

/* ---------- Navigation ---------- */
const nav = document.getElementById("nav");
const navLinks = document.getElementById("navLinks");
const burger = document.getElementById("navBurger");

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}, { passive: true });

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
});

navLinks.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__link")) {
    navLinks.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
});

/* Active section highlighting */
const sections = document.querySelectorAll("main section[id]");
const linkMap = new Map();
document.querySelectorAll(".nav__link").forEach((l) => linkMap.set(l.getAttribute("href").slice(1), l));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    document.querySelectorAll(".nav__link").forEach((l) => l.classList.remove("is-active"));
    const link = linkMap.get(en.target.id);
    if (link) link.classList.add("is-active");
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach((s) => spy.observe(s));

/* ---------- Reveal on scroll ---------- */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("is-visible");
      revealer.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

/* ---------- Forms ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cfName").value.trim();
  e.target.reset();
  toast(`Thanks${name ? `, ${name}` : ""}! We’ll get back to you soon.`);
});
document.getElementById("newsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  toast("You’re on the list. Secret deals incoming.");
});

/* ---------- Init ---------- */
renderMenu();
renderCart();
