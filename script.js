// On DOM ready,
$(function() {
  // Cache selectors
  var $accordion = $(".js-accordion");
  var $allPanels = $(" .accordionPanel").hide();
  var $allItems = $(".accordionItem");
  // Event listeners
  $accordion.on("click", ".accordionToggle", function() {
      // Toggle the current accordion panel and close others
      $allPanels.slideUp();
      $allItems.removeClass("is-open");
      if (
          $(this)
          .next()
          .is(":visible")
      ) {
          $(".accordionPanel").slideUp();
      } else {
          $(this)
              .next()
              .slideDown()
              .closest(".accordionItem")
              .addClass("is-open");
      }
      return false;
  });
});
$(function() {
  $(".toggleHead").click(function() {
      if ($(this).parent(".FAQ").hasClass("active")) {
          $(".toggleIcon").removeClass("active");
      } else {
          $(".toggleIcon").removeClass("active");
          $(this).find(".toggleIcon").addClass("active");
      }
  });
});