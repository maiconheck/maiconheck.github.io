(function($) {
  $(document).ready(function () {
    const ICON_OPEN = "−";
    const ICON_CLOSED = "+";

    // Toggle accordion items.
    $(".accordion").on("click", ".accordion-header", function () {
      const $header = $(this);
      const $content = $header.next(".accordion-content");

      const isAccordionClosed = $content.css("max-height") === "0px" || !$content.css("max-height");
      if (isAccordionClosed) 
        openAccordionItem($header, $content);
      else 
        closeAccordionItem($header, $content);    
    });

    // Handle whatsapp CTA button clicks.
    $(document).on("click", '[data-cta-type="whatsapp"]', function (e) {
      e.preventDefault();
      openLinkInNewTab($(this));
    });

    function openAccordionItem($header, $content) {
      $content.css("max-height", `${$content[0].scrollHeight}px`);
      $header.find(".accordion-icon").text(ICON_OPEN);
    }

    function closeAccordionItem($header, $content) {
      $content.css("max-height", "0px");
      $header.find(".accordion-icon").text(ICON_CLOSED);
    }

    function openLinkInNewTab($link) {
      const href = $link.attr("href");
      if (href) 
        window.open(href, $link.attr("target") || "_blank");
    }
  });
})(jQuery);