/* Pengelola tema dan ukuran huruf. Pilihan disimpan di localStorage (aman dengan try/catch). */
(function () {
  var KT = "petualangan_nkri_theme", KF = "petualangan_nkri_font_size";
  var root = document.documentElement;
  var TH = {
    "light": ["☀️", "Terang"],
    "dark": ["🌙", "Gelap"],
    "high-contrast": ["🔲", "Kontras Tinggi"],
    "eye-care": ["☕", "Nyaman Mata"]
  };

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function put(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function prefersDark() {
    try { return !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches); }
    catch (e) { return false; }
  }

  function sync() {
    var t = root.getAttribute("data-theme"), s = root.getAttribute("data-font-size");
    var btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    document.getElementById("theme-active-icon").textContent = TH[t][0];
    document.getElementById("theme-active-label").textContent = TH[t][1];
    btn.setAttribute("aria-label", "Tema saat ini: " + TH[t][1] + ". Klik untuk mengganti tema.");
    document.querySelectorAll(".theme-option-btn").forEach(function (b) {
      var on = b.getAttribute("data-theme-value") === t;
      b.setAttribute("aria-checked", on ? "true" : "false");
      b.querySelector(".theme-check-indicator").textContent = on ? "✓" : "";
    });
    document.querySelectorAll(".font-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-size") === s ? "true" : "false");
    });
  }

  function setTheme(t, save) {
    if (!TH[t]) t = "light";
    root.setAttribute("data-theme", t);
    if (save) put(KT, t);
    sync();
  }
  function setFont(s, save) {
    if (["small", "normal", "large"].indexOf(s) < 0) s = "normal";
    root.setAttribute("data-font-size", s);
    if (save) put(KF, s);
    sync();
  }

  /* Terapkan segera (sebelum halaman tampil) agar tidak berkedip */
  setTheme(get(KT) || (prefersDark() ? "dark" : "light"), false);
  setFont(get(KF) || "normal", false);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle-btn");
    var menu = document.getElementById("theme-menu");
    function toggle(open) {
      menu.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function () { toggle(!menu.classList.contains("is-open")); });
    document.querySelectorAll(".theme-option-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        setTheme(b.getAttribute("data-theme-value"), true);
        toggle(false);
        btn.focus();
      });
    });
    document.querySelectorAll(".font-btn").forEach(function (b) {
      b.addEventListener("click", function () { setFont(b.getAttribute("data-size"), true); });
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".theme-dropdown-container")) toggle(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { toggle(false); }
    });
    sync();
  });
})();