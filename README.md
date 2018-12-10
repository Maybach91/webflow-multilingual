https://img.shields.io/npm/v/webflow-multilingual.svg

# Webflow Multilingual

Fork from http://multilinguale.webflow.io

Only support modern browsers

## Install

```
<script src="https://unpkg.com/webflow-multilingual/webflow-multilingual.js"></script>
```

## Usage

### Text node

```
<p>[[ko]] 안녕 [[en]]hello</p>
```

### Class

```
<p class="wm-ko">안녕</p>
<p class="wm-en">hello</p>
```

### Attribute (not yet)

```
<p data-wm-lang="ko">안녕</p>
<p data-wm-lang="en">hello</p>
```

### Select language by URL query string parameters

```
https://your-awesome-site.site?lang=ko
https://your-awesome-site.site?lang=en
```

### Select language by button

```
<button data-wm-sel="ko">한국어</button>
<button data-wm-sel="en">English</button>
```

### Switch language

```
<button data-wm-switch>Switch</button>
```

### Language Dropdown

Just add a normal Dropdown in Webflow and set the href to the language. Add the class `language-dropdown` to the dropdown.

It should look like this:

```
<div class="language-dropdown">
  <nav class="dropdown-list w-dropdown-list">
    <a href="/de" class="dropdown-link dropdown-link-german w-dropdown-link">German</a>
    <a href="/fr" class="dropdown-link dropdown-link-francais w-dropdown-link">Français</a>
  </nav>
</div>

```

The script checks if the current site is translated in the requested language. So if you are on www.example.com/delivery the scripts checks if www.example.com/fr/delivery doesn’t return a 404 - not found status. And sets the link.

ToDo: If the URL Slug is also translated this solution does not work.

#### URL Rewriting for Collection Item Pages (e.g. Blog Posts)

If the site IS a Collection Item / Collection List site (e.g. Blog Category or Blog Post) it checks the slug (category or post in this case) and add the param `?lang=fr` to the url instead of rewriting the url to the folder structure.

Currently it just checks `category` and `post` within the url.
