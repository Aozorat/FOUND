/* =========================================================
   FOUND. — SCRIPT.JS
   DON'T SEARCH. DISCOVER.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     01 — PRODUCT DATABASE
     Prototype data only
     ======================================================= */

  const products = [

    {
      id: 1,
      name: "Nike Air Max 95 Silver",
      category: "sneakers",
      price: 6200,
      style: "STREET / RUNNER",
      era: "90s / NOW",
      type: "SNEAKER",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
      tags: ["nike", "silver", "runner", "90s", "street"],
      why:
        "A classic runner silhouette with the kind of metallic energy that keeps coming back through street culture."
    },

    {
      id: 2,
      name: "Adidas Retro Runner",
      category: "sneakers",
      price: 4800,
      style: "RETRO / SPORT",
      era: "2000s / NOW",
      type: "SNEAKER",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85",
      tags: ["adidas", "retro", "runner", "2000s"],
      why:
        "A low-profile retro runner that feels equally at home in old-school archives and today's streets."
    },

    {
      id: 3,
      name: "Black Low Profile Sneaker",
      category: "sneakers",
      price: 3900,
      style: "MINIMAL / STREET",
      era: "NOW",
      type: "SNEAKER",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=85",
      tags: ["black", "minimal", "street", "low profile"],
      why:
        "Nothing loud. Just the right shape, the right proportions, and enough attitude."
    },

    {
      id: 4,
      name: "Oversized Graphic Tee",
      category: "clothing",
      price: 1290,
      style: "OVERSIZED / GRAPHIC",
      era: "NOW",
      type: "T-SHIRT",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85",
      tags: ["tee", "graphic", "oversized", "streetwear"],
      why:
        "The oversized tee remains one of the simplest ways to build a street silhouette."
    },

    {
      id: 5,
      name: "Washed Black Hoodie",
      category: "clothing",
      price: 2490,
      style: "WASHED / OVERSIZED",
      era: "NOW",
      type: "HOODIE",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85",
      tags: ["hoodie", "black", "washed", "oversized"],
      why:
        "A washed finish gives a basic hoodie the worn-in character usually found in older pieces."
    },

    {
      id: 6,
      name: "Vintage Racing Jacket",
      category: "vintage",
      price: 5900,
      style: "RACING / RETRO",
      era: "90s",
      type: "JACKET",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
      tags: ["vintage", "racing", "jacket", "90s"],
      why:
        "Racing graphics, oversized proportions and nostalgia make this exactly the kind of piece worth hunting for."
    },

    {
      id: 7,
      name: "Y2K Metallic Bag",
      category: "y2k",
      price: 1890,
      style: "METALLIC / FUTURE",
      era: "2000s",
      type: "BAG",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=85",
      tags: ["y2k", "metallic", "bag", "2000s"],
      why:
        "Metallic accessories are one of the easiest ways to bring Y2K energy into a modern outfit."
    },

    {
      id: 8,
      name: "Silver Frame Sunglasses",
      category: "accessories",
      price: 1590,
      style: "SILVER / Y2K",
      era: "2000s / NOW",
      type: "EYEWEAR",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=85",
      tags: ["silver", "sunglasses", "y2k", "accessories"],
      why:
        "Small object, big effect. Silver frames instantly shift an outfit toward early-2000s territory."
    },

    {
      id: 9,
      name: "Chrome Chain Necklace",
      category: "accessories",
      price: 990,
      style: "CHROME / STREET",
      era: "NOW",
      type: "JEWELRY",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
      tags: ["chrome", "chain", "street", "jewelry"],
      why:
        "Chrome details work as a subtle connection between streetwear, punk and Y2K aesthetics."
    },

    {
      id: 10,
      name: "Vintage Denim",
      category: "vintage",
      price: 2200,
      style: "DENIM / RELAXED",
      era: "90s",
      type: "DENIM",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=85",
      tags: ["denim", "vintage", "90s", "jeans"],
      why:
        "Vintage denim is less about a perfect condition and more about the character it already carries."
    },

    {
      id: 11,
      name: "Technical Shoulder Bag",
      category: "streetwear",
      price: 2790,
      style: "TECHNICAL / UTILITY",
      era: "NOW",
      type: "BAG",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
      tags: ["technical", "utility", "bag", "streetwear"],
      why:
        "Functional design has become part of the visual language of modern streetwear."
    },

    {
      id: 12,
      name: "Y2K Baby Tee",
      category: "y2k",
      price: 1190,
      style: "FITTED / GRAPHIC",
      era: "2000s",
      type: "TOP",
      image:
        "https://images.unsplash.com/photo-1564257577054-2e5f8b9e8c9c?auto=format&fit=crop&w=1200&q=85",
      tags: ["y2k", "baby tee", "2000s", "graphic"],
      why:
        "The fitted baby tee is one of those Y2K silhouettes that keeps cycling back into street fashion."
    },

    {
      id: 13,
      name: "Oversized Track Pants",
      category: "streetwear",
      price: 1990,
      style: "SPORT / OVERSIZED",
      era: "2000s / NOW",
      type: "PANTS",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9c297dcbf26?auto=format&fit=crop&w=1200&q=85",
      tags: ["track pants", "sport", "oversized", "streetwear"],
      why:
        "Loose track pants bring together sport, nostalgia and the oversized proportions of streetwear."
    },

    {
      id: 14,
      name: "Classic Canvas High Top",
      category: "sneakers",
      price: 2590,
      style: "CANVAS / CLASSIC",
      era: "NOW",
      type: "SNEAKER",
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=1200&q=85",
      tags: ["canvas", "high top", "classic", "street"],
      why:
        "A familiar silhouette that works because it never really needed to follow trends."
    },

    {
      id: 15,
      name: "Retro Football Jersey",
      category: "vintage",
      price: 3490,
      style: "SPORT / VINTAGE",
      era: "90s / 2000s",
      type: "JERSEY",
      image:
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=85",
      tags: ["football", "jersey", "vintage", "90s", "2000s"],
      why:
        "Football jerseys moved from the pitch into street culture, becoming everyday graphic pieces."
    },

    {
      id: 16,
      name: "Black Utility Cap",
      category: "accessories",
      price: 890,
      style: "UTILITY / MINIMAL",
      era: "NOW",
      type: "CAP",
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1200&q=85",
      tags: ["cap", "black", "utility", "street"],
      why:
        "The simplest finishing piece can completely change the balance of a street outfit."
    }

  ];


  /* =======================================================
     02 — STATE
     ======================================================= */

  let currentProduct = null;
  let currentCategory = "all";
  let currentSearch = "";

  const SAVED_KEY = "foundSaved";


  /* =======================================================
     03 — DOM HELPERS
     ======================================================= */

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);


  /* =======================================================
     04 — TOAST
     ======================================================= */

  function showToast(message = "FOUND.") {

    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }


  /* =======================================================
     05 — SAVED SYSTEM
     ======================================================= */

  function getSavedIds() {

    try {

      const saved = JSON.parse(
        localStorage.getItem(SAVED_KEY)
      );

      return Array.isArray(saved) ? saved : [];

    } catch {

      return [];

    }
  }


  function saveIds(ids) {

    localStorage.setItem(
      SAVED_KEY,
      JSON.stringify(ids)
    );

  }


  function isSaved(id) {

    return getSavedIds().includes(id);

  }


  function toggleSave(id) {

    let saved = getSavedIds();

    if (saved.includes(id)) {

      saved = saved.filter(
        productId => productId !== id
      );

      showToast("REMOVED FROM SAVED.");

    } else {

      saved.push(id);

      showToast("SAVED TO YOUR COLLECTION.");

    }

    saveIds(saved);

    renderSaved();

    updateSaveButtons();

  }


  function updateSaveButtons() {

    $$(".save-button").forEach(button => {

      const id = Number(button.dataset.save);

 