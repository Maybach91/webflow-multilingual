const addUrls = (function() {
  const dropdown = window.document.querySelectorAll(".language-dropdown")[0];

  // run only, when there is the language dropdown (not on 404 and password page)
  if (dropdown !== null) {
    const links = dropdown.querySelectorAll(".dropdown-link");
    const origin = window.location.origin; // https://www.example.com
    let path = window.location.pathname; // /post/blogpost-name-lorem

    // go through every link and get the language code from the language dropdown
    Array.prototype.forEach.call(links, function(el, i) {
      let attr = el.getAttribute("href");
      if (attr === "/") {
        attr = "";
      }
      const regexLang = /\/([\w]{2})\//g;
      const arrPath = regexLang.exec(path);
      if (arrPath) {
        path = path.replace(regexLang, "");
      }

      const fullUrl = origin + attr + path;

      // Check if the requested site exists in the language and set it to e.g  /en/delivery otherwise do nothing and redirect to /en
      const request = new XMLHttpRequest();
      request.open("GET", fullUrl, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Site is translated, to update the links

          let newPath = attr + path; // make a relative path out of it

          el.setAttribute("href", newPath);
        } else {
          // do nothing because the site is not there in the language
        }
      };
      request.onerror = function() {
        // do nothing because the site is not there in the language
      };
      request.send();

      // If Blog / or Blog Category, then add get param to set the language (because all translated content is on one page - because of collections)
      const arrParam =
        /\/post\//g.exec(location.pathname) ||
        /\/category\//g.exec(location.pathname);

      if (arrParam) {
        const langPath = attr.replace("/", ""); // cut the / from the default href of the link
        const newPath = origin + path + "?lang=" + langPath; // make a absolute path out of it
        el.setAttribute("href", newPath); // set the attribute
      }
    });
  }
})();
