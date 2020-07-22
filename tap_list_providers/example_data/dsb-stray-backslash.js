function EmbedMenu(containerId) {
  var container = document.getElementById(containerId);
  container.innerHTML =

  (function () {
    /* btoa shim */
    !(function () {
      function t(t) {
        this.message = t;
      }
      var r = "undefined" != typeof exports ? exports : this,
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      (t.prototype = new Error()),
        (t.prototype.name = "InvalidCharacterError"),
        r.btoa ||
          (r.btoa = function (r) {
            for (
              var o, n, a = String(r), i = 0, c = e, d = "";
              a.charAt(0 | i) || ((c = "="), i % 1);
              d += c.charAt(63 & (o >> (8 - (i % 1) * 8)))
            ) {
              if (((n = a.charCodeAt((i += 0.75))), n > 255))
                throw new t(
                  "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
                );
              o = (o << 8) | n;
            }
            return d;
          }),
        r.atob ||
          (r.atob = function (r) {
            var o = String(r).replace(/=+$/, "");
            if (o.length % 4 == 1)
              throw new t(
                "'atob' failed: The string to be decoded is not correctly encoded."
              );
            for (
              var n, a, i = 0, c = 0, d = "";
              (a = o.charAt(c++));
              ~a && ((n = i % 4 ? 64 * n + a : a), i++ % 4)
                ? (d += String.fromCharCode(255 & (n >> ((-2 * i) & 6))))
                : 0
            )
              a = e.indexOf(a);
            return d;
          });
    })();

    var newEventData = btoa(
      JSON.stringify({
        writeKey: "crq45h8dA8dtssuwIQDuiDKbr2cLDhwb",
        userId: "0",
        event: "menu_view",
        properties: {
          location_id: "3884",
          source: "" !== "" ? "" : "website",
          url: location.href,
        },
      })
    );

    /* use segment's pixel api to track the menu view  */
    var body = document.getElementsByTagName("body").item(0);
    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://api.segment.io/v1/pixel/track?data=" + newEventData
    );
    img.setAttribute("style", "display: none;");
    img.setAttribute("alt", "");
    body.appendChild(img);
  })();
  function getScript(source, callback) {
    var script = document.createElement("script");
    var prior = document.getElementsByTagName("script")[0];
    script.async = 1;
    prior.parentNode.insertBefore(script, prior);

    script.onload = script.onreadystatechange = function (_, isAbort) {
      if (
        isAbort ||
        !script.readyState ||
        /loaded|complete/.test(script.readyState)
      ) {
        script.onload = script.onreadystatechange = null;
        script = undefined;

        if (!isAbort) {
          if (callback) callback();
        }
      }
    };

    script.src = source;
  }

  getScript(
    "https://untappd.akamaized.net/business/assets/menus/main-8b0d7b4d2d6494bd9964fd3c7e7e22bba283936d59acc2ff1fce2fe5eae08ca7.js",
    function () {
      var menuEl = container.getElementsByClassName("ut-menu")[0];
      UT.init(menuEl, {
        id: 11913,
        menu_bg_color: "#FFFFFF",
        menu_font_color: "#000000",
        link_font_color: "#43A0D8",
        font_family: "Helvetica",
        font_size: "medium",
        divider_color: "#E7E7E7",
        hide_header: false,
        show_logo: false,
        show_address: true,
        show_phone: true,
        show_website: true,
        show_announcements: true,
        header_bg_color: "#FFFFFF",
        header_font_color: "#000000",
        section_header_bg_color: "#FFFFFF",
        section_title_color: "#000000",
        section_description_color: "#000000",
        item_bg_color: "#FFFFFF",
        item_title_color: "#000000",
        item_layout: "standard_one_col",
        show_label_image: true,
        show_brewery_name: true,
        show_brewery_location: true,
        show_beer_style: true,
        show_abv: true,
        show_ibu: false,
        show_description: true,
        show_prices: false,
        show_currency_symbol: true,
        show_untappd_rating: false,
        hide_footer: false,
        footer_bg_color: "#FFFFFF",
        footer_font_color: "#000000",
        created_at: "2016-11-17T16:52:06.408Z",
        updated_at: "2020-03-28T21:23:04.578Z",
        show_tap_number: true,
        custom_print_theme_name: null,
        menu_orientation: "horizontal",
        color_palette: "dark",
        beers_on_screen: 0,
        screen_rotation_seconds: 0,
        show_events: true,
        show_checkins: true,
        show_containers: true,
        multiple_displays: false,
        location_id: 3884,
        page_orientation: 0,
        page_size: 0,
        show_menu_title: false,
        show_menu_description: false,
        show_section_title: true,
        show_section_description: false,
        template_id: null,
        logo_file_name: null,
        logo_content_type: null,
        logo_file_size: null,
        logo_updated_at: null,
        background_image_file_name: null,
        background_image_content_type: null,
        background_image_file_size: null,
        background_image_updated_at: null,
        css_override: "",
        orientation_id: null,
        paper_size_id: null,
        show_ad_slides: false,
        show_published_date: true,
        show_calories: false,
      });
    }
  );
}