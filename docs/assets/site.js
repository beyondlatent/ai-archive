/* AI Archive — 공통 스크립트 (테마 토글 + 목록 검색/필터) */
(function () {
  "use strict";

  /* ---------- 테마 ---------- */
  var KEY = "ai-archive-theme";
  function readStored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function writeStored(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* 저장 불가 환경 무시 */ }
  }
  var stored = readStored();
  if (stored === "dark" || stored === "light") {
    document.documentElement.setAttribute("data-theme", stored);
  }
  function currentTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }
  function syncToggleLabel(btn) {
    if (!btn) return;
    var dark = currentTheme() === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "밝은 테마로 전환" : "어두운 테마로 전환");
    btn.setAttribute("title", dark ? "밝은 테마로 전환" : "어두운 테마로 전환");
  }

  /* ---------- 목록 검색 / 필터 ---------- */
  function initList() {
    var root = document.getElementById("post-groups");
    if (!root) return;
    var groups = Array.prototype.slice.call(root.querySelectorAll(".layer-group"));
    var cards = Array.prototype.slice.call(root.querySelectorAll(".post-card"));
    var search = document.getElementById("search");
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip[data-filter]"));
    var empty = document.getElementById("empty-state");
    var count = document.getElementById("result-count");
    var active = "all";

    function apply() {
      var q = (search && search.value ? search.value : "").trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var haystack = (card.getAttribute("data-search") || "").toLowerCase();
        var tags = (card.getAttribute("data-tags") || "").toLowerCase();
        var matchQ = !q || haystack.indexOf(q) !== -1;
        var matchF = active === "all" || tags.split("|").indexOf(active) !== -1;
        var ok = matchQ && matchF;
        card.hidden = !ok;
        if (ok) shown++;
      });
      // 비어 버린 구역은 제목까지 함께 숨긴다
      groups.forEach(function (g) {
        var visible = Array.prototype.filter.call(
          g.querySelectorAll(".post-card"), function (c) { return !c.hidden; }
        );
        g.hidden = visible.length === 0;
        var c = g.querySelector(".count");
        if (c) c.textContent = visible.length + "편";
      });
      if (empty) empty.hidden = shown !== 0;
      if (count) count.textContent = String(shown);
    }

    if (search) search.addEventListener("input", apply);
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        active = chip.getAttribute("data-filter") || "all";
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        apply();
      });
    });
    apply();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    syncToggleLabel(btn);
    if (btn) {
      btn.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        writeStored(next);
        syncToggleLabel(btn);
      });
    }
    initList();
  });
})();
