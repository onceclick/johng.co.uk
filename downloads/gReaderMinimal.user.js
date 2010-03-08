// ==UserScript==
// @name          Google Reader Minimalist
// @namespace     http://userstyles.org
// @description	  Uses the maximum amount of space for the feed viewing area, at the expense of all unnecessary UI elements.
// @author        John Griffin
// @homepage      johng.co.uk
// @include       http://reader.google.com/*
// @include		http://www.google.com/reader/*
// @include		http://google.com/reader/*
// ==/UserScript==

var header = document.getElementById('ogspacer');
if (header) {
    header.parentNode.removeChild(header);
}

var search = document.getElementById('search');
search.style.visibility="hidden";
search.style.maxHeight="1px";
search.style.maxWidth="1px";
search.style.Height="1px";
search.style.Width="1px";
search.style.display="none";
search.style.overflow="hidden";

var footer = document.getElementById('chrome-footer-container');
footer.style.visibility="hidden";
footer.style.maxHeight="1px";
footer.style.maxWidth="1px";
footer.style.Height="1px";
footer.style.Width="1px";
footer.style.display="none";
footer.style.overflow="hidden";

var logo = document.getElementById('logo-container');
logo.style.visibility="hidden";
logo.style.maxHeight="1px";
logo.style.maxWidth="1px";
logo.style.Height="1px";
logo.style.Width="1px";
logo.style.display="none";
logo.style.overflow="hidden";

var info = document.getElementById('global-info');
info.style.visibility="hidden";
info.style.maxHeight="1px";
info.style.maxWidth="1px";
info.style.Height="1px";
info.style.Width="1px";
info.style.display="none";
info.style.overflow="hidden";

var gbar = document.getElementById('gbar');
gbar.style.visibility="hidden";
gbar.style.maxHeight="1px";
gbar.style.maxWidth="1px";
gbar.style.Height="1px";
gbar.style.Width="1px";
gbar.style.display="none";
gbar.style.overflow="hidden";