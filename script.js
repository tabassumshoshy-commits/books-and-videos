(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Bookshelf category filter */
  var buttons = document.querySelectorAll(".filter-btn");
  var books = document.querySelectorAll("#books-grid .book");
  var emptyNote = document.getElementById("empty-note");
  if (!buttons.length || !books.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var filter = btn.getAttribute("data-filter");
      var visible = 0;
      books.forEach(function (book) {
        var show = filter === "all" || book.getAttribute("data-category") === filter;
        book.classList.toggle("hidden", !show);
        if (show) visible++;
      });
      if (emptyNote) emptyNote.hidden = visible > 0;
    });
  });
})();
