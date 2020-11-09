let lang = document.documentElement.lang;
let defTop = document.getElementById("def-top");
defTop.outerHTML = wet.builder.top({
  "breadcrumbs": false,
  // "siteMenu": false,
  "isApplication": true,
  "GCToolsModal": true,
});	

let defFooter = document.getElementById("def-footer");
defFooter.outerHTML = wet.builder.footer({
});
