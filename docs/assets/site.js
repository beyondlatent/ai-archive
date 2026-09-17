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

  /* ---------- 목록: 계층 메뉴 + 검색 + 주제 필터 ---------- */
  function initList() {
    var root = document.getElementById("post-groups");
    if (!root) return;

    var groups = Array.prototype.slice.call(root.querySelectorAll(".layer-group"));
    var cards = Array.prototype.slice.call(root.querySelectorAll(".post-card"));
    var search = document.getElementById("search");
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".layer-tab[data-layer-filter]"));
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip[data-filter]"));
    var empty = document.getElementById("empty-state");
    var count = document.getElementById("result-count");

    // 계층과 주제는 서로 독립된 축이다.
    var activeLayer = "all";
    var activeTopic = "all";

    function tagsOf(card) {
      return (card.getAttribute("data-tags") || "").toLowerCase().split("|");
    }
    function matchesSearch(card, q) {
      if (!q) return true;
      return (card.getAttribute("data-search") || "").toLowerCase().indexOf(q) !== -1;
    }
    function matchesTopic(card) {
      return activeTopic === "all" || tagsOf(card).indexOf(activeTopic) !== -1;
    }
    function matchesLayer(card, layer) {
      return layer === "all" || tagsOf(card).indexOf(layer.toLowerCase()) !== -1;
    }

    function apply() {
      var q = (search && search.value ? search.value : "").trim().toLowerCase();
      var shown = 0;

      cards.forEach(function (card) {
        var ok = matchesSearch(card, q) && matchesTopic(card) && matchesLayer(card, activeLayer);
        card.hidden = !ok;
        if (ok) shown++;
      });

      // 계층 메뉴의 편수는 계층 선택을 뺀 나머지 조건으로 센다.
      // 그래야 다른 계층에 몇 편이 남아 있는지 보인다.
      tabs.forEach(function (tab) {
        var layer = tab.getAttribute("data-layer-filter");
        var n = cards.filter(function (card) {
          return matchesSearch(card, q) && matchesTopic(card) && matchesLayer(card, layer);
        }).length;
        var el = tab.querySelector(".n");
        if (el) el.textContent = String(n);
        tab.setAttribute("data-count", String(n));
        tab.setAttribute("aria-pressed", String(layer === activeLayer));
      });

      // 비어 버린 구역은 제목까지 함께 숨긴다.
      groups.forEach(function (g) {
        var visible = Array.prototype.filter.call(
          g.querySelectorAll(".post-card"), function (c) { return !c.hidden; }
        );
        g.hidden = visible.length === 0;
        var c = g.querySelector(".count");
        if (c) c.textContent = visible.length + "편";
      });

      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", String(c.getAttribute("data-filter") === activeTopic));
      });

      if (empty) empty.hidden = shown !== 0;
      if (count) count.textContent = String(shown);
    }

    if (search) search.addEventListener("input", apply);

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var v = tab.getAttribute("data-layer-filter");
        // 선택된 계층을 다시 누르면 전체로 돌아간다.
        activeLayer = (v === activeLayer && v !== "all") ? "all" : v;
        apply();
      });
    });

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var v = chip.getAttribute("data-filter") || "all";
        activeTopic = (v === activeTopic && v !== "all") ? "all" : v;
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
