// ==UserScript==
// @name         Force Google Chrome Browser Fonts
// @version      0.1
// @description  Better font on Google Chrome browser
// @match        http://*/*
// @match        https://*/*
// @exclude      *github.com*
// @grant        GM_addStyle
// @copyright    @henices
// ==/UserScript==

GM_addStyle('body {font-family:  "WenQuanYi Micro Hei", "Microsoft Yahei", "DejaVu Serif" "DejaVu Sans" !important; }');
