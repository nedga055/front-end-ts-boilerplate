const lang = document.documentElement.lang;
const defTop = document.getElementById("def-top");
defTop.outerHTML = wet.builder.top({
	breadcrumbs: false,
	siteMenu: false,
	isApplication: true,
	GCToolsModal: true,
});

const defFooter = document.getElementById("def-footer");
defFooter.outerHTML = wet.builder.footer({});
