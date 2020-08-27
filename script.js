// On DOM ready,
$(function () {
    // Cache selectors
    var $accordion = $(".js-accordion");
    var $allPanels = $(" .accordion-panel").hide();
    var $allItems = $(".accordion-item");
    // Event listeners
    $accordion.on("click", ".accordion-toggle", function () {
        // Toggle the current accordion panel and close others
        $allPanels.slideUp();
        $allItems.removeClass("is-open");
        if (
            $(this)
            .next()
            .is(":visible")
        ) {
            $(".accordion-panel").slideUp();
        } else {
            $(this)
                .next()
                .slideDown()
                .closest(".accordion-item")
                .addClass("is-open");
        }
        return false;
    });
});