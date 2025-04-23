(function() {
    function loadCSS(href, integrity = "", crossorigin = "") {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        if (integrity) link.integrity = integrity;
        if (crossorigin) link.crossOrigin = crossorigin;
        document.head.appendChild(link);
    }

    function loadJS(src, integrity = "", crossorigin = "", placeInBody = false) {
        let script = document.createElement("script");
        script.src = src;
        if (integrity) script.integrity = integrity;
        if (crossorigin) script.crossOrigin = crossorigin;
        if (placeInBody) {
            document.body.appendChild(script);
        } else {
            document.head.appendChild(script);
        }
    }

    // Load Bootstrap CSS
    loadCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", 
            "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", 
            "anonymous");

    // Load Font Awesome (Avoids duplicate inclusion)
    loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css", 
            "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==", 
            "anonymous");

    // Load Bootstrap Icons
    loadCSS("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

    // Load Custom Styles
    loadCSS("styles.css");

    // Load jQuery
    loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js", "", "", true);

    // Load Bootstrap JS (Bundle includes Popper.js)
    loadJS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", 
           "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL", 
           "anonymous", 
           true);


    
})();

(function() {
    function addFavicon(href, rel = "icon") {
        let link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
    }

    // Load favicon
    addFavicon("images/favicon/favicon-32x32.png");
    addFavicon("images/favicon/apple-touch-icon.png", "apple-touch-icon");
    addFavicon("images/favicon/site.webmanifest", "manifest");
})();

