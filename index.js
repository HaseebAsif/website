(function ($) {
    // Begin jQuery
    $(function () {
      // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".nav-dropdown").toggle();
        // Close one dropdown when selecting another
        $(".nav-dropdown").not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $("html").click(function () {
        $(".nav-dropdown").hide();
      });
      // Toggle open and close nav styles on click
      $("#nav-toggle").click(function () {
        $("nav ul").slideToggle();
      });
      // Hamburger to X toggle
      $("#nav-toggle").on("click", function () {
        this.classList.toggle("active");
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
  
  function SearchFunctionality() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("tr");
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("td")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
