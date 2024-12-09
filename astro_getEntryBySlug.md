<!DOCTYPE html>
<html lang="en" dir="ltr" data-has-toc data-has-sidebar data-theme="dark" class="astro-zi5wwkvs">
	<head>
		<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Astro render context | Docs</title><link rel="canonical" href="https://docs.astro.build/en/reference/api-reference/"/><link rel="alternate" hreflang="en" href="https://docs.astro.build/en/reference/api-reference/"/><link rel="alternate" hreflang="de" href="https://docs.astro.build/de/reference/api-reference/"/><link rel="alternate" hreflang="pt-BR" href="https://docs.astro.build/pt-br/reference/api-reference/"/><link rel="alternate" hreflang="es" href="https://docs.astro.build/es/reference/api-reference/"/><link rel="alternate" hreflang="zh-CN" href="https://docs.astro.build/zh-cn/reference/api-reference/"/><link rel="alternate" hreflang="zh-TW" href="https://docs.astro.build/zh-tw/reference/api-reference/"/><link rel="alternate" hreflang="fr" href="https://docs.astro.build/fr/reference/api-reference/"/><link rel="alternate" hreflang="hi" href="https://docs.astro.build/hi/reference/api-reference/"/><link rel="alternate" hreflang="ar" href="https://docs.astro.build/ar/reference/api-reference/"/><link rel="alternate" hreflang="ja" href="https://docs.astro.build/ja/reference/api-reference/"/><link rel="alternate" hreflang="ko" href="https://docs.astro.build/ko/reference/api-reference/"/><link rel="alternate" hreflang="pl" href="https://docs.astro.build/pl/reference/api-reference/"/><link rel="alternate" hreflang="ru" href="https://docs.astro.build/ru/reference/api-reference/"/><link rel="alternate" hreflang="it" href="https://docs.astro.build/it/reference/api-reference/"/><link rel="sitemap" href="/sitemap-index.xml"/><link rel="icon" href="/favicon.ico" sizes="32x32"/><link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"/><meta name="generator" content="Astro v4.16.13"/><meta name="generator" content="Starlight v0.29.1"/><meta property="og:title" content="Astro render context"/><meta property="og:type" content="article"/><meta property="og:url" content="https://docs.astro.build/en/reference/api-reference/"/><meta property="og:locale" content="en"/><meta property="og:description"/><meta property="og:site_name" content="Docs"/><meta name="twitter:card" content="summary_large_image"/>
<meta property="og:image" content="https://docs.astro.build/open-graph/en/reference/api-reference.webp">
<meta name="twitter:image" content="https://docs.astro.build/open-graph/en/reference/api-reference.webp">

<!-- Algolia docsearch language facet -->
<meta name="docsearch:language" content="en">
<meta name="twitter:site" content="astrodotbuild">

<!-- Fathom analytics -->
<script src="https://cdn.usefathom.com/script.js" data-site="EZBHTSIG" data-canonical="true" defer></script>
		
		
<script>
	window.StarlightThemeProvider = (() => {
		const storedTheme =
			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');
		const theme =
			storedTheme ||
			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';
		return {
			updatePickers(theme = storedTheme || 'auto') {
				document.querySelectorAll('starlight-theme-select').forEach((picker) => {
					const select = picker.querySelector('select');
					if (select) select.value = theme;
					/** @type {HTMLTemplateElement | null} */
					const tmpl = document.querySelector(`#theme-icons`);
					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);
					if (newIcon) {
						const oldIcon = picker.querySelector('svg.label-icon');
						if (oldIcon) {
							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);
						}
					}
				});
			},
		};
	})();
</script>

<template id="theme-icons">
	<svg aria-hidden="true" class="light astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm.64 5-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM12 5a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Zm5.66 2.34a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.66.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29Zm-12-.29a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.71-.71a1.004 1.004 0 1 0-1.43 1.41l.73.71ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-2.64 6A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41l-.76-.66ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0 3.5a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Z"/></svg>
	<svg aria-hidden="true" class="dark astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M21.64 13a1 1 0 0 0-1.05-.14 8.049 8.049 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.784 9.784 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32v-.04Z"/></svg>
	<svg aria-hidden="true" class="auto astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z"/></svg>
</template>
	<link rel="stylesheet" href="/_astro/index.B-0O6jNC.css">
<style>.action:where(.astro-vnzlvqnm){gap:.5em;align-items:center;border-radius:999rem;padding:.5rem 1.125rem;color:var(--sl-color-white);line-height:1.1875;text-decoration:none;font-size:var(--sl-text-sm)}.action:where(.astro-vnzlvqnm).primary,.action:where(.astro-vnzlvqnm).primary:hover{background:var(--sl-color-text-accent);color:var(--sl-color-black)}.action:where(.astro-vnzlvqnm).secondary{background:var(--sl-color-black);border:2px solid}.action:where(.astro-vnzlvqnm).minimal{padding-inline:0}@media (min-width: 50rem){.action:where(.astro-vnzlvqnm){font-size:var(--sl-text-base);padding:1rem 1.25rem}}
:root{--sl-badge-default-border: var(--sl-color-accent);--sl-badge-default-bg: var(--sl-color-accent-low);--sl-badge-default-text: #fff;--sl-badge-note-border: var(--sl-color-blue);--sl-badge-note-bg: var(--sl-color-blue-low);--sl-badge-note-text: #fff;--sl-badge-danger-border: var(--sl-color-red);--sl-badge-danger-bg: var(--sl-color-red-low);--sl-badge-danger-text: #fff;--sl-badge-success-border: var(--sl-color-green);--sl-badge-success-bg: var(--sl-color-green-low);--sl-badge-success-text: #fff;--sl-badge-caution-border: var(--sl-color-orange);--sl-badge-caution-bg: var(--sl-color-orange-low);--sl-badge-caution-text: #fff;--sl-badge-tip-border: var(--sl-color-purple);--sl-badge-tip-bg: var(--sl-color-purple-low);--sl-badge-tip-text: #fff}[data-theme=light]:root{--sl-badge-default-bg: var(--sl-color-accent-high);--sl-badge-note-bg: var(--sl-color-blue-high);--sl-badge-danger-bg: var(--sl-color-red-high);--sl-badge-success-bg: var(--sl-color-green-high);--sl-badge-caution-bg: var(--sl-color-orange-high);--sl-badge-tip-bg: var(--sl-color-purple-high)}.sl-badge:where(.astro-4zuixnj2){display:inline-block;border:1px solid var(--sl-color-border-badge);border-radius:.25rem;font-family:var(--sl-font-system-mono);line-height:normal;color:var(--sl-color-text-badge);background-color:var(--sl-color-bg-badge);overflow-wrap:anywhere}.sidebar-content .sl-badge:where(.astro-4zuixnj2){line-height:1;font-size:var(--sl-text-xs);padding:.125rem .375rem}.sidebar-content a[aria-current=page]>.sl-badge:where(.astro-4zuixnj2){--sl-color-bg-badge: transparent;--sl-color-border-badge: currentColor;color:inherit}.default:where(.astro-4zuixnj2){--sl-color-bg-badge: var(--sl-badge-default-bg);--sl-color-border-badge: var(--sl-badge-default-border);--sl-color-text-badge: var(--sl-badge-default-text)}.note:where(.astro-4zuixnj2){--sl-color-bg-badge: var(--sl-badge-note-bg);--sl-color-border-badge: var(--sl-badge-note-border);--sl-color-text-badge: var(--sl-badge-note-text)}.danger:where(.astro-4zuixnj2){--sl-color-bg-badge: var(--sl-badge-danger-bg);--sl-color-border-badge: var(--sl-badge-danger-border);--sl-color-text-badge: var(--sl-badge-danger-text)}.success:where(.astro-4zuixnj2){--sl-color-bg-badge: var(--sl-badge-success-bg);--sl-color-border-badge: var(--sl-badge-success-border);--sl-color-text-badge: var(--sl-badge-success-text)}.tip:where(.astro-4zuixnj2){--sl-color-bg-badge: var(--sl-badge-tip-bg);--sl-color-border-badge: var(--sl-badge-tip-border);--sl-color-text-badge: var(--sl-badge-tip-text)}.caution:where(.astro-4zuixnj2){--sl-color-bg-badge: var(--sl-badge-caution-bg);--sl-color-border-badge: var(--sl-badge-caution-border);--sl-color-text-badge: var(--sl-badge-caution-text)}.small:where(.astro-4zuixnj2){font-size:var(--sl-text-xs);padding:.125rem .25rem}.medium:where(.astro-4zuixnj2){font-size:var(--sl-text-sm);padding:.175rem .35rem}.large:where(.astro-4zuixnj2){font-size:var(--sl-text-base);padding:.225rem .45rem}.sl-markdown-content :is(h1,h2,h3,h4,h5,h6) .sl-badge:where(.astro-4zuixnj2){vertical-align:middle}
.card-grid:where(.astro-onjvyvka){display:grid;grid-template-columns:100%;gap:1rem}.card-grid:where(.astro-onjvyvka)>*{margin-top:0!important}@media (min-width: 50rem){.card-grid:where(.astro-onjvyvka){grid-template-columns:1fr 1fr;gap:1.5rem}.stagger:where(.astro-onjvyvka){--stagger-height: 5rem;padding-bottom:var(--stagger-height)}.stagger:where(.astro-onjvyvka)>*:nth-child(2n){transform:translateY(var(--stagger-height))}}
.card:where(.astro-hyhkmgbx){--sl-card-border: var(--sl-color-purple);--sl-card-bg: var(--sl-color-purple-low);border:1px solid var(--sl-color-gray-5);background-color:var(--sl-color-black);padding:clamp(1rem,calc(.125rem + 3vw),2.5rem);flex-direction:column;gap:clamp(.5rem,calc(.125rem + 1vw),1rem)}.card:where(.astro-hyhkmgbx):nth-child(4n+1){--sl-card-border: var(--sl-color-orange);--sl-card-bg: var(--sl-color-orange-low)}.card:where(.astro-hyhkmgbx):nth-child(4n+3){--sl-card-border: var(--sl-color-green);--sl-card-bg: var(--sl-color-green-low)}.card:where(.astro-hyhkmgbx):nth-child(4n+4){--sl-card-border: var(--sl-color-red);--sl-card-bg: var(--sl-color-red-low)}.card:where(.astro-hyhkmgbx):nth-child(4n+5){--sl-card-border: var(--sl-color-blue);--sl-card-bg: var(--sl-color-blue-low)}.title:where(.astro-hyhkmgbx){font-weight:600;font-size:var(--sl-text-h4);color:var(--sl-color-white);line-height:var(--sl-line-height-headings);gap:1rem;align-items:center}.card:where(.astro-hyhkmgbx) .icon:where(.astro-hyhkmgbx){border:1px solid var(--sl-card-border);background-color:var(--sl-card-bg);padding:.2em;border-radius:.25rem}.card:where(.astro-hyhkmgbx) .body:where(.astro-hyhkmgbx){margin:0;font-size:clamp(var(--sl-text-sm),calc(.5rem + 1vw),var(--sl-text-body))}
svg:where(.astro-w7fkij7b){color:var(--sl-icon-color);font-size:var(--sl-icon-size, 1em);width:1em;height:1em}
.card:where(.astro-har75nup){position:relative;margin:-.75rem;padding:.75rem;display:grid;grid-template-columns:auto 1fr;gap:.5rem;align-items:center;border-radius:.5rem}.card--minimal:where(.astro-har75nup){grid-template-columns:1fr;justify-items:center;text-align:center}.card:where(.astro-har75nup):hover,.card:where(.astro-har75nup):focus-within{background-color:var(--sl-color-gray-6);outline:1px solid var(--sl-color-text-accent)}@media (forced-colors: active){.card:where(.astro-har75nup):hover,.card:where(.astro-har75nup):focus-within{outline:1px solid LinkText}}.stack:where(.astro-har75nup){flex-direction:column;gap:.5rem}h3:where(.astro-har75nup){line-height:var(--sl-line-height-headings);font-size:var(--sl-text-lg);font-weight:600}.card--minimal:where(.astro-har75nup) h3:where(.astro-har75nup){font-size:var(--sl-text-body)}a:where(.astro-har75nup){text-decoration:none;color:var(--sl-color-white)}a:where(.astro-har75nup):focus{outline:none}a:where(.astro-har75nup):before{content:"";position:absolute;inset:0}
.fluid-grid:where(.astro-oxk5cgh7){--column-min-width: 13rem;text-align:start;margin-block:.5rem;padding-inline-start:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--column-min-width),1fr));grid-template-columns:repeat(auto-fill,minmax(min(var(--column-min-width),100%),1fr));gap:1.5rem 2rem;list-style:none;align-items:start}@media (min-width: 37.75em){.fluid-grid:where(.astro-oxk5cgh7){gap:2rem}}.fluid-grid--minimal:where(.astro-oxk5cgh7){--column-min-width: 8rem;gap:1.5rem .75rem}
starlight-tabs:where(.astro-i74rryjx){display:block}.tablist-wrapper:where(.astro-i74rryjx){overflow-x:auto}:where(.astro-i74rryjx)[role=tablist]{display:flex;list-style:none;border-bottom:2px solid var(--sl-color-gray-5);padding:0}.tab:where(.astro-i74rryjx){margin-bottom:-2px}.tab:where(.astro-i74rryjx)>:where(.astro-i74rryjx)[role=tab]{display:flex;align-items:center;gap:.5rem;padding:0 1.25rem;text-decoration:none;border-bottom:2px solid var(--sl-color-gray-5);color:var(--sl-color-gray-3);outline-offset:var(--sl-outline-offset-inside);overflow-wrap:initial}.tab:where(.astro-i74rryjx) :where(.astro-i74rryjx)[role=tab][aria-selected=true]{color:var(--sl-color-white);border-color:var(--sl-color-text-accent);font-weight:600}.tablist-wrapper:where(.astro-i74rryjx)~[role=tabpanel]{margin-top:1rem}
.logo:where(.astro-anndpidy){display:flex;place-content:center;font-size:var(--logo-size);width:1em;height:1em;background-color:#17181c;border:1px solid hsl(224,10%,23%);outline:1px solid transparent;overflow:hidden}.circle:where(.astro-anndpidy){border-radius:50%}.rounded:where(.astro-anndpidy){border-radius:.125em}.logo:where(.astro-anndpidy) img:where(.astro-anndpidy){padding:var(--logo-padding);width:100%;height:100%}
.sl-link-card:where(.astro-6qgcp5ue){display:grid;grid-template-columns:1fr auto;gap:.5rem;border:1px solid var(--sl-color-gray-5);border-radius:.5rem;padding:1rem;box-shadow:var(--sl-shadow-sm);position:relative}a:where(.astro-6qgcp5ue){text-decoration:none;line-height:var(--sl-line-height-headings)}a:where(.astro-6qgcp5ue):before{content:"";position:absolute;inset:0}.stack:where(.astro-6qgcp5ue){flex-direction:column;gap:.5rem}.title:where(.astro-6qgcp5ue){color:var(--sl-color-white);font-weight:600;font-size:var(--sl-text-lg)}.description:where(.astro-6qgcp5ue){color:var(--sl-color-gray-3);line-height:1.5}.icon:where(.astro-6qgcp5ue){color:var(--sl-color-gray-3)}.sl-link-card:where(.astro-6qgcp5ue):hover{background:var(--sl-color-gray-7, var(--sl-color-gray-6));border-color:var(--sl-color-gray-2)}.sl-link-card:where(.astro-6qgcp5ue):hover .icon:where(.astro-6qgcp5ue){color:var(--sl-color-white)}
.description:where(.astro-kq5jy4fu){color:var(--sl-color-gray-2);font-size:var(--sl-text-body-sm)}.tags:where(.astro-kq5jy4fu){gap:.5rem}
.neutral-badge{border-color:var(--sl-color-gray-5);background-color:var(--sl-color-gray-6);color:var(--sl-color-text)}
.sl-steps{--bullet-size: calc(var(--sl-line-height) * 1rem);--bullet-margin: .375rem;list-style:none;counter-reset:steps-counter var(--sl-steps-start, 0);padding-inline-start:0}.sl-steps>li{counter-increment:steps-counter;position:relative;padding-inline-start:calc(var(--bullet-size) + 1rem);padding-bottom:1px;min-height:calc(var(--bullet-size) + var(--bullet-margin))}.sl-steps>li+li{margin-top:0}.sl-steps>li:before{content:counter(steps-counter);position:absolute;top:0;inset-inline-start:0;width:var(--bullet-size);height:var(--bullet-size);line-height:var(--bullet-size);font-size:var(--sl-text-xs);font-weight:600;text-align:center;color:var(--sl-color-white);background-color:var(--sl-color-gray-6);border-radius:99rem;box-shadow:inset 0 0 0 1px var(--sl-color-gray-5)}.sl-steps>li:after{--guide-width: 1px;content:"";position:absolute;top:calc(var(--bullet-size) + var(--bullet-margin));bottom:var(--bullet-margin);inset-inline-start:calc((var(--bullet-size) - var(--guide-width)) / 2);width:var(--guide-width);background-color:var(--sl-color-hairline-light)}.sl-steps>li>:first-child{--lh: calc(1em * var(--sl-line-height));--shift-y: calc(.5 * (var(--bullet-size) - var(--lh)));transform:translateY(var(--shift-y));margin-bottom:var(--shift-y)}.sl-steps>li>:first-child:where(h1,h2,h3,h4,h5,h6){--lh: calc(1em * var(--sl-line-height-headings))}@supports (--prop: 1lh){.sl-steps>li>:first-child{--lh: 1lh}}
.integrations-nav:where(.astro-hu7fe7u2) .scope{font-weight:400;color:var(--sl-color-text)}
starlight-file-tree:where(.astro-hofwv5z6){--x-space: 1.5rem;--y-space: .125rem;--y-pad: 0;display:block;border:1px solid var(--sl-color-gray-5);padding:1rem;background-color:var(--sl-color-gray-6);font-size:var(--sl-text-xs);font-family:var(--__sl-font-mono);overflow-x:auto}starlight-file-tree:where(.astro-hofwv5z6) .directory>details{border:0;padding:0;padding-inline-start:var(--x-space);background:transparent}starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary{margin-inline-start:calc(-1 * var(--x-space));border:0;padding:var(--y-pad) .625rem;font-weight:400;color:var(--sl-color-white);max-width:100%}starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary::marker,starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary::-webkit-details-marker{color:var(--sl-color-gray-3)}starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary:hover,starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary:hover .tree-icon{cursor:pointer;color:var(--sl-color-text-accent);fill:var(--sl-color-text-accent)}starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary:hover~ul{border-color:var(--sl-color-gray-4)}starlight-file-tree:where(.astro-hofwv5z6) .directory>details>summary:hover .highlight .tree-icon{fill:var(--sl-color-text-invert)}starlight-file-tree:where(.astro-hofwv5z6) ul{margin-inline-start:.5rem;border-inline-start:1px solid var(--sl-color-gray-5);padding:0;padding-inline-start:.125rem;list-style:none}starlight-file-tree:where(.astro-hofwv5z6)>ul{margin:0;border:0;padding:0}starlight-file-tree:where(.astro-hofwv5z6) li{margin:var(--y-space) 0;padding:var(--y-pad) 0}starlight-file-tree:where(.astro-hofwv5z6) .file{margin-inline-start:calc(var(--x-space) - .125rem);color:var(--sl-color-white)}starlight-file-tree:where(.astro-hofwv5z6) .tree-entry{display:inline-flex;align-items:flex-start;flex-wrap:wrap;max-width:calc(100% - 1rem)}@media (min-width: 30em){starlight-file-tree:where(.astro-hofwv5z6) .tree-entry{flex-wrap:nowrap}}starlight-file-tree:where(.astro-hofwv5z6) .tree-entry>:first-child{flex-shrink:0}starlight-file-tree:where(.astro-hofwv5z6) .empty{color:var(--sl-color-gray-3);padding-inline-start:.375rem}starlight-file-tree:where(.astro-hofwv5z6) .comment{color:var(--sl-color-gray-3);padding-inline-start:1.625rem;max-width:24rem;min-width:12rem}starlight-file-tree:where(.astro-hofwv5z6) .highlight{display:inline-block;border-radius:.25rem;padding-inline-end:.5rem;color:var(--sl-color-text-invert);background-color:var(--sl-color-text-accent)}starlight-file-tree:where(.astro-hofwv5z6) svg{display:inline;fill:var(--sl-color-gray-3);vertical-align:middle;margin-inline:.25rem .375rem;width:.875rem;height:.875rem}starlight-file-tree:where(.astro-hofwv5z6) .highlight svg.tree-icon{fill:var(--sl-color-text-invert)}
</style><script type="module" src="/_astro/page.7qqag-5g.js"></script><style>.read-more:where(.astro-szj46hnz){display:flex;gap:.5rem;align-items:flex-start}.icon:where(.astro-szj46hnz){--icon-size: 1.5rem;font-size:var(--icon-size);flex-shrink:0;margin-block:calc((var(--sl-line-height) * 1rem - var(--icon-size)) / 2);color:var(--sl-color-text-accent)}
</style></head>
	<body class="astro-zi5wwkvs">
		<a href="#_top" class="astro-4myx5lke">Skip to content</a>
		<div class="page sl-flex astro-sfkvv2cu">
	<header class="header astro-sfkvv2cu"><div class="header sl-flex astro-g7vumxvm">
	<div class="title-wrapper sl-flex astro-g7vumxvm">
		<span class="site-title sl-flex astro-oijwx5iz">
	<a class="astro-logo astro-oijwx5iz" href="https://astro.build/" aria-label="Astro"><svg xmlns="http://www.w3.org/2000/svg" width="106" height="32" viewBox="0 -6 381 100">
  <path class="flame" fill="currentColor" d="M25.8 85.2c-4.5-4.2-5.9-12.8-4-19.1 3.3 4 7.8 5.2 12.5 6 7.2 1 14.3.6 21-2.7l2.4-1.4c.6 1.8.8 3.7.5 5.6-.5 4.5-2.8 8-6.4 10.7-1.4 1.1-3 2-4.5 3-4.6 3.2-5.8 6.8-4 12.1v.6a12 12 0 0 1-5.3-4.6 13 13 0 0 1-2-7c0-1.2 0-2.5-.2-3.7-.4-3-1.8-4.3-4.5-4.4a5.2 5.2 0 0 0-5.4 4.2l-.1.7Z"/>
  <path fill="currentColor" d="M0 65s13.4-6.5 26.8-6.5l10.1-31.3c.4-1.5 1.5-2.5 2.7-2.5 1.3 0 2.4 1 2.8 2.5l10 31.3c16 0 26.9 6.5 26.9 6.5L56.5 3c-.6-1.8-1.7-3-3.2-3H26c-1.5 0-2.5 1.2-3.2 3L0 65Zm141-19.9c0 5.5-6.8 8.8-16.2 8.8-6.2 0-8.3-1.5-8.3-4.7 0-3.4 2.6-5 8.8-5 5.5 0 10.3 0 15.7.8v.1Zm.1-6.8a71 71 0 0 0-14.5-1.2c-17.7 0-26 4.2-26 14 0 10.1 5.7 14 18.8 14 11.2 0 18.8-2.8 21.6-9.8h.4l-.1 4.7c0 3.6.6 3.9 3.5 3.9h13.8c-.8-2.2-1.2-8.2-1.2-13.4l.2-15.4c0-11.5-6.9-18.8-28.5-18.8-9.3 0-19.6 1.6-27.5 4 .8 3.1 1.8 9.4 2.3 13.5a61.4 61.4 0 0 1 24-4.5c10.4 0 13.2 2.3 13.2 7.1v2Zm37.9 10c-1.9.3-4.5.3-7 .3a60 60 0 0 1-7.1-.4l-.1 2c0 9.5 6.2 15 28.1 15 20.6 0 27.3-5.5 27.3-15.1 0-9.2-4.4-13.7-24-14.7-15.2-.6-16.6-2.3-16.6-4.2 0-2.2 2-3.4 12.2-3.4 10.6 0 13.4 1.5 13.4 4.5v.7a153 153 0 0 1 14.1 0v-1.7c0-11.2-9.2-14.9-27.2-14.9-20.3 0-27 5-27 14.6 0 8.7 5.4 14.1 24.8 15 14.3.4 16 2 16 4.2 0 2.4-2.4 3.5-12.5 3.5-11.5 0-14.4-1.6-14.4-5v-.4Zm66-40.1a58.2 58.2 0 0 1-20.8 11.6v10.8h5V47c0 10 5.3 17.7 21.8 17.7 7 0 11.6-.8 17.4-2-.6-3.7-1.3-9.4-1.5-13.8a41 41 0 0 1-12.6 1.8c-6.6 0-9.3-1.8-9.3-7.1V30.8c8.6 0 17.1.2 22.1.4 0-4 .1-9.7.3-13.5l-22.1.2.2-9.7h-.5Zm44.7 20.1.3-10.6h-15.1c.2 6.5.2 13.3.2 23 0 10 0 16.7-.2 23.2H292c-.3-4.6-.3-12.3-.3-18.9 0-10.3 4.2-13.3 13.7-13.3 4.4 0 7.6.5 10.3 1.5.1-3.8.9-11.4 1.3-14.7a34 34 0 0 0-9.8-1.4c-8.2 0-14.2 3.3-17 11.3l-.6-.1Zm75.1 12.2c0 8.3-6 12.2-15.4 12.2S334 49 334 40.5c0-8.6 6-11.8 15.4-11.8 9.3 0 15.4 3.5 15.4 11.8Zm15.7-.4c0-16.5-13-24-31.1-24-18.3 0-30.8 7.5-30.8 24s11.6 25.3 30.7 25.3c19.2 0 31.2-8.8 31.2-25.3Z"/>
  <defs>
    <linearGradient id="gradient" x1="21" x2="64.6" y1="100" y2="79.4" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D83333"/>
      <stop offset="1" stop-color="#F041FF"/>
    </linearGradient>
  </defs>
  <style>
    [data-theme="dark"] .flame {
      fill: url(#gradient);
    }
  </style>
</svg>
</a>
	<a class="docs-logo astro-oijwx5iz" href="/en/getting-started/" aria-label="Docs"><svg xmlns="http://www.w3.org/2000/svg" width="69" height="28" viewBox="0 -6 246 100">
	<path fill="currentColor" d="M29 63.8c16.6 0 28.1-9.5 28.1-23.8 0-14.4-10.8-22.3-27.8-22.3H0v46.1h29ZM13.2 26.6h14.2c9.5 0 16 4.6 16 13.6 0 9.3-6 14.7-15.9 14.7H13.1V26.6Zm80.1 38.8c18.8 0 31-9.7 31-24.6 0-15-12.2-24.6-31-24.6-18.7 0-31 9.6-31 24.6 0 14.8 12.3 24.6 31 24.6Zm0-9.8c-10.3 0-17-6-17-14.8 0-9 6.7-14.9 17-14.9s17.1 6 17.1 14.9-6.8 14.8-17.1 14.8Zm66.3 9.8c15 0 25.5-6 29.3-16.4l-13.5-3c-1.9 6.1-7.2 9.4-15.4 9.4-10.4 0-17-5.8-17-14.7 0-9 6.4-14.7 16.8-14.7 8.4 0 13.7 3.4 15.5 9.7l13.6-2.4c-3-10.7-13.9-17.2-28.9-17.2-18.1 0-30.7 10.2-30.7 24.8 0 14.8 11.7 24.4 30.2 24.4Zm60.3 0c16.6 0 26.1-5.7 26.1-15.9 0-8.5-5.2-12.3-18-13.6l-12.7-1.2c-5.9-.7-7.8-1.8-7.8-4.6 0-3.2 3.9-4.8 11-4.8 8.8 0 15.4 2.8 18.9 7.3l8.2-7c-5.7-6.4-14.8-9.4-26.5-9.4-15.7 0-24.6 5.4-24.6 14.5 0 8.5 5.4 12.7 16.7 14l14.1 1.5c5.5.6 7.5 1.7 7.5 4.6 0 3.6-4 5.3-12.3 5.3-9.4 0-16.5-3.6-20.4-9l-9.3 6.5c4.7 7.3 15.4 11.8 29 11.8Z"/>
</svg>
</a>
</span>
	</div>
	<div class="sl-flex astro-g7vumxvm">
		<sl-doc-search data-translations="{&#34;button&#34;:&#34;Search&#34;,&#34;shortcutLabel&#34;:&#34;Press / to search&#34;,&#34;placeholder&#34;:&#34;Search docs&#34;}">
	<button type="button" class="DocSearch DocSearch-Button" aria-label="Search">
		<span class="DocSearch-Button-Container">
			<svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20">
				<path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
			</svg>
			<span class="DocSearch-Button-Placeholder">Search</span>
		</span>
		<span class="DocSearch-Button-Keys"></span>
	</button>
</sl-doc-search>

<script type="module" src="/_astro/Search.astro_astro_type_script_index_0_lang.ByHJUbA9.js"></script>
	</div>
	<div class="sl-hidden md:sl-flex right-group astro-g7vumxvm">
		<div class="sl-flex social-icons astro-g7vumxvm">
			<a href="https://github.com/withastro/astro" rel="me" class="sl-flex astro-bcg4mff4">
					<span class="sr-only astro-bcg4mff4">GitHub</span>
					<svg aria-hidden="true" class="astro-bcg4mff4 astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/></svg>
				</a><a href="https://astro.build/chat" rel="me" class="sl-flex astro-bcg4mff4">
					<span class="sr-only astro-bcg4mff4">Discord</span>
					<svg aria-hidden="true" class="astro-bcg4mff4 astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.26 20.26 0 0 0 .11 18.09l.02.02a19.9 19.9 0 0 0 6.04 3.03l.04-.02a14.24 14.24 0 0 0 1.23-2.03.08.08 0 0 0-.05-.07 13.1 13.1 0 0 1-1.9-.92.08.08 0 0 1 .02-.1 10.2 10.2 0 0 0 .41-.31h.04a14.2 14.2 0 0 0 12.1 0l.04.01a9.63 9.63 0 0 0 .4.32.08.08 0 0 1-.03.1 12.29 12.29 0 0 1-1.9.91.08.08 0 0 0-.02.1 15.97 15.97 0 0 0 1.27 2.01h.04a19.84 19.84 0 0 0 6.03-3.05v-.03a20.12 20.12 0 0 0-3.57-13.69ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/></svg>
				</a>


		</div>
		<starlight-theme-select>
	
	<label style="--sl-select-width: 6.25em" class="astro-biied46h">
	<span class="sr-only astro-biied46h">Select theme</span>
	<svg aria-hidden="true" class="icon label-icon astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z"/></svg>
	<select value="auto" class="astro-biied46h">
		<option value="dark" class="astro-biied46h">Dark</option><option value="light" class="astro-biied46h">Light</option><option value="auto" selected class="astro-biied46h">Auto</option>
	</select>
	<svg aria-hidden="true" class="icon caret astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"/></svg>
</label>
</starlight-theme-select>


<script>
	StarlightThemeProvider.updatePickers();
</script>

<script type="module">const r="starlight-theme",o=e=>e==="auto"||e==="dark"||e==="light"?e:"auto",c=()=>o(typeof localStorage<"u"&&localStorage.getItem(r));function n(e){typeof localStorage<"u"&&localStorage.setItem(r,e==="light"||e==="dark"?e:"")}const l=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function t(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?l():e,n(e)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{c()==="auto"&&t("auto")});class s extends HTMLElement{constructor(){super(),t(c()),this.querySelector("select")?.addEventListener("change",a=>{a.currentTarget instanceof HTMLSelectElement&&t(o(a.currentTarget.value))})}}customElements.define("starlight-theme-select",s);</script>
		<starlight-lang-select>
			<label style="--sl-select-width: 7em" class="astro-biied46h">
	<span class="sr-only astro-biied46h">Select language</span>
	<svg aria-hidden="true" class="icon label-icon astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd"/></svg>
	<select value="/en/reference/api-reference/" class="astro-biied46h">
		<option value="/en/reference/api-reference/" selected class="astro-biied46h">English</option><option value="/de/reference/api-reference/" class="astro-biied46h">Deutsch</option><option value="/pt-br/reference/api-reference/" class="astro-biied46h">Português do Brasil</option><option value="/es/reference/api-reference/" class="astro-biied46h">Español</option><option value="/zh-cn/reference/api-reference/" class="astro-biied46h">简体中文</option><option value="/zh-tw/reference/api-reference/" class="astro-biied46h">正體中文</option><option value="/fr/reference/api-reference/" class="astro-biied46h">Français</option><option value="/hi/reference/api-reference/" class="astro-biied46h">हिन्दी</option><option value="/ar/reference/api-reference/" class="astro-biied46h">العربية</option><option value="/ja/reference/api-reference/" class="astro-biied46h">日本語</option><option value="/ko/reference/api-reference/" class="astro-biied46h">한국어</option><option value="/pl/reference/api-reference/" class="astro-biied46h">Polski</option><option value="/ru/reference/api-reference/" class="astro-biied46h">Русский</option><option value="/it/reference/api-reference/" class="astro-biied46h">Italiano</option>
	</select>
	<svg aria-hidden="true" class="icon caret astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"/></svg>
</label>
		</starlight-lang-select>

<script type="module">class n extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define("starlight-lang-select",n);</script>
	</div>
</div></header>
	<nav class="sidebar astro-sfkvv2cu" aria-label="Main">
				<starlight-menu-button class="astro-mhiavz7x">
	<button aria-expanded="false" aria-label="Menu" aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-mhiavz7x">
		<svg aria-hidden="true" class="astro-mhiavz7x astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M3 8h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/></svg>
	</button>
</starlight-menu-button>

<script type="module">class s extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",s);</script>
				<div id="starlight__sidebar" class="sidebar-pane astro-sfkvv2cu">
					<div class="sidebar-content sl-flex astro-sfkvv2cu">
						<sl-sidebar-state-persist data-hash="15dekwq" class="astro-ro4wdfen">
	<script>
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	</script>

	
	<tabbed-content class="astro-6yyweqw4">
	<ul class="tab-list tabbed-sidebar astro-3x5efdbn astro-6yyweqw4">
		<li class="tab-item astro-3x5efdbn">
	<a href="#start" class="tab-link">
		
						<svg aria-hidden="true" class="icon astro-3x5efdbn astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path fill-rule="evenodd" d="M1.44 8.855v-.001l3.527-3.516c.34-.344.802-.541 1.285-.548h6.649l.947-.947c3.07-3.07 6.207-3.072 7.62-2.868a1.821 1.821 0 0 1 1.557 1.557c.204 1.413.203 4.55-2.868 7.62l-.946.946v6.649a1.845 1.845 0 0 1-.549 1.286l-3.516 3.528a1.844 1.844 0 0 1-3.11-.944l-.858-4.275-4.52-4.52-2.31-.463-1.964-.394A1.847 1.847 0 0 1 .98 10.693a1.843 1.843 0 0 1 .46-1.838Zm5.379 2.017-3.873-.776L6.32 6.733h4.638l-4.14 4.14Zm8.403-5.655c2.459-2.46 4.856-2.463 5.89-2.33.134 1.035.13 3.432-2.329 5.891l-6.71 6.71-3.561-3.56 6.71-6.711Zm-1.318 15.837-.776-3.873 4.14-4.14v4.639l-3.364 3.374Z" clip-rule="evenodd"/><path d="M9.318 18.345a.972.972 0 0 0-1.86-.561c-.482 1.435-1.687 2.204-2.934 2.619a8.22 8.22 0 0 1-1.23.302c.062-.365.157-.79.303-1.229.415-1.247 1.184-2.452 2.62-2.935a.971.971 0 1 0-.62-1.842c-.12.04-.236.084-.35.13-2.02.828-3.012 2.588-3.493 4.033a10.383 10.383 0 0 0-.51 2.845l-.001.016v.063c0 .536.434.972.97.972H2.24a7.21 7.21 0 0 0 .878-.065c.527-.063 1.248-.19 2.02-.447 1.445-.48 3.205-1.472 4.033-3.494a5.828 5.828 0 0 0 .147-.407Z"/></svg> Start
	</a>
</li><li class="tab-item astro-3x5efdbn">
	<a href="#guides-and-recipes" class="tab-link">
		
						<svg aria-hidden="true" class="icon astro-3x5efdbn astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M21.17 2.06A13.1 13.1 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2 13.1 13.1 0 0 0-2.17.19 1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1 10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.91.91 0 0 0 .7 0h.11l.12-.07A10.899 10.899 0 0 1 20.83 16 1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94ZM11 15.35a12.87 12.87 0 0 0-6-1.48H4v-10c.333-.02.667-.02 1 0a10.86 10.86 0 0 1 6 1.8v9.68Zm9-1.44h-1a12.87 12.87 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8c.333-.02.667-.02 1 0v10.04Zm1.17 4.15a13.098 13.098 0 0 0-2.17-.19 12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2.05c-.727.003-1.453.066-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79 10.9 10.9 0 0 1 8.25 1.91 1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79 1 1 0 0 0-.83-1.15Z"/></svg> Guides and recipes
	</a>
</li><li class="tab-item astro-3x5efdbn">
	<a href="#reference" data-initial aria-selected="true" class="tab-link">
		
						<svg aria-hidden="true" class="icon astro-3x5efdbn astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M12 11a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm.38-3.92a1 1 0 0 0-.76 0 1 1 0 0 0-.33.21 1.15 1.15 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21A1 1 0 0 0 13 8a1.05 1.05 0 0 0-.29-.71 1 1 0 0 0-.33-.21ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"/></svg> Reference
	</a>
</li><li class="tab-item astro-3x5efdbn">
	<a href="#integrations" class="tab-link">
		
						<svg aria-hidden="true" class="icon astro-3x5efdbn astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M17 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1a4 4 0 0 1 7.3-2.18c.448.64.692 1.4.7 2.18h3a1 1 0 0 1 1 1v3a4 4 0 0 1 2.18 7.3A3.86 3.86 0 0 1 18 18v3a1 1 0 0 1-1 1ZM5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11v-3.18a1 1 0 0 1 1.33-.95 1.77 1.77 0 0 0 1.74-.23 2 2 0 0 0 .93-1.37 2 2 0 0 0-.48-1.59 1.89 1.89 0 0 0-2.17-.55 1 1 0 0 1-1.33-.95V8h-3.2a1 1 0 0 1-1-1.33 1.77 1.77 0 0 0-.23-1.74 1.939 1.939 0 0 0-3-.43A2 2 0 0 0 8 6c.002.23.046.456.13.67A1 1 0 0 1 7.18 8H5Z"/></svg> Integrations
	</a>
</li><li class="tab-item astro-3x5efdbn">
	<a href="#third-party-services" class="tab-link">
		
						<svg aria-hidden="true" class="icon astro-3x5efdbn astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="m21.32 9.55-1.89-.63.89-1.78A1 1 0 0 0 20.13 6L18 3.87a1 1 0 0 0-1.15-.19l-1.78.89-.63-1.89A1 1 0 0 0 13.5 2h-3a1 1 0 0 0-.95.68l-.63 1.89-1.78-.89A1 1 0 0 0 6 3.87L3.87 6a1 1 0 0 0-.19 1.15l.89 1.78-1.89.63a1 1 0 0 0-.68.94v3a1 1 0 0 0 .68.95l1.89.63-.89 1.78A1 1 0 0 0 3.87 18L6 20.13a1 1 0 0 0 1.15.19l1.78-.89.63 1.89a1 1 0 0 0 .95.68h3a1 1 0 0 0 .95-.68l.63-1.89 1.78.89a1 1 0 0 0 1.13-.19L20.13 18a1 1 0 0 0 .19-1.15l-.89-1.78 1.89-.63a1 1 0 0 0 .68-.94v-3a1 1 0 0 0-.68-.95ZM20 12.78l-1.2.4A2 2 0 0 0 17.64 16l.57 1.14-1.1 1.1-1.11-.6a2 2 0 0 0-2.79 1.16l-.4 1.2h-1.59l-.4-1.2A2 2 0 0 0 8 17.64l-1.14.57-1.1-1.1.6-1.11a2 2 0 0 0-1.16-2.82l-1.2-.4v-1.56l1.2-.4A2 2 0 0 0 6.36 8l-.57-1.11 1.1-1.1L8 6.36a2 2 0 0 0 2.82-1.16l.4-1.2h1.56l.4 1.2A2 2 0 0 0 16 6.36l1.14-.57 1.1 1.1-.6 1.11a2 2 0 0 0 1.16 2.79l1.2.4v1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg> Third-party services
	</a>
</li>
	</ul>

	<div class="panels tabbed-sidebar astro-3x5efdbn astro-6yyweqw4">
		
		
		<div id="start" class="astro-s7ttdo4b">
	
					<ul class="top-level astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/getting-started/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Getting started</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="0"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Welcome, world!</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/concepts/why-astro/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Why Astro?</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/concepts/islands/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Islands architecture</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/tutorial/0-introduction/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Tutorial: Build a blog</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="1"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Start a new project</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/install-and-setup/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Installation</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/basics/project-structure/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Project structure</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/develop-and-build/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Develop and build</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="2"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Configuration</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/configuring-astro/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Configuration overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/editor-setup/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Editor setup</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/typescript/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">TypeScript</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/environment-variables/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Environment variables</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/dev-toolbar/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Dev toolbar</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="3"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Migrate to Astro</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Site migration overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-create-react-app/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Create React App</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-docusaurus/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Docusaurus</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-eleventy/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Eleventy</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-gatsby/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Gatsby</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-gitbook/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">GitBook</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-gridsome/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Gridsome</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-hugo/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Hugo</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-jekyll/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Jekyll</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-nextjs/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Next.js</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-nuxtjs/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">NuxtJS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-pelican/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Pelican</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-sveltekit/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">SvelteKit</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-vuepress/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">VuePress</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/migrate-to-astro/from-wordpress/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">WordPress</span>
						
					</a>
			</li>
</ul>
					</details>
			</li>
</ul>
				
</div><div id="guides-and-recipes" class="astro-s7ttdo4b">
	
					<ul class="top-level astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="4"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Routing and navigation</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/basics/astro-pages/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Pages</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/routing/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Routing</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/endpoints/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Endpoints</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/middleware/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Middleware</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/internationalization/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Internationalization (i18n)</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/prefetch/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Prefetch</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/view-transitions/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">View transitions</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="5"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Build your UI</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/basics/astro-components/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Components</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/basics/layouts/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Layouts</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/styling/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Styles and CSS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/fonts/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Using custom fonts</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/syntax-highlighting/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Syntax Highlighting</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/client-side-scripts/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Scripts and event handling</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/framework-components/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Front-end frameworks</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="6"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Add content to your site</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/markdown-content/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Markdown</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/content-collections/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Content collections</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/images/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Images</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/data-fetching/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Data fetching</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/astro-db/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Astro DB</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="7"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Server rendering</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/on-demand-rendering/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">On-demand rendering</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/server-islands/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Server islands</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/actions/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Actions</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="8"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Upgrade</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/upgrade-astro/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Upgrade Astro</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="21"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Major upgrade guides</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/upgrade-to/v5/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">v5.0</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/upgrade-to/v4/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">v4.0</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/upgrade-to/v3/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">v3.0</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/upgrade-to/v2/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">v2.0</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/upgrade-to/v1/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">v1.0</span>
						
					</a>
			</li>
</ul>
					</details>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/troubleshooting/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Troubleshooting</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="9"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">How-to recipes</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/recipes/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Recipes overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/add-yaml-support/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Installing a Vite or Rollup plugin</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/analyze-bundle-size/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Analyze bundle size</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/build-custom-img-component/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Build a custom image component</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/build-forms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Build HTML forms in Astro pages</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/build-forms-api/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Build forms with API routes</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/bun/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Use Bun with Astro</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/call-endpoints/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Call endpoints from the server</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/captcha/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Verify a Captcha</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/docker/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Build your Astro site with Docker</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/dynamically-importing-images/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Dynamically import images</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/external-links/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Add icons to external links</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/i18n/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Add i18n features</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/making-toolbar-apps/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Create a dev toolbar app</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/modified-time/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Add last modified time</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/reading-time/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Add reading time</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/rss/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Add an RSS feed</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/sharing-state/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Share state between Astro components</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/sharing-state-islands/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Share state between islands</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/streaming-improve-page-performance/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Using streaming to improve page performance</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/recipes/tailwind-rendered-markdown/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Style rendered Markdown with Tailwind Typography</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<a href="/en/contribute/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Contribute to Astro</span>
						
					</a>
			</li>
</ul>
				
</div><div data-initial id="reference" class="astro-s7ttdo4b">
	
					<ul class="top-level astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="10"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Astro Template Syntax</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/reference/astro-syntax/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Template expressions reference</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/directives-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Template directives reference</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/configuration-reference/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Configuration Reference</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/cli-reference/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">CLI Commands</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/imports/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Imports reference</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/routing-reference/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Routing Reference</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="11"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Runtime API</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/reference/api-reference/" aria-current="page" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Render context</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-actions/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:actions</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-assets/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:assets</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-content/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:content</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-env/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:env</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-i18n/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:i18n</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-middleware/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:middleware</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/modules/astro-transitions/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">astro:transitions</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="12"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Other development APIs</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/reference/integrations-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Integration API</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/adapter-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Adapter API</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/content-loader-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Content Loader API</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/image-service-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Image Service API</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/dev-toolbar-app-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Dev Toolbar App API</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/container-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Container API (experimental)</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/programmatic-reference/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Programmatic Astro API (experimental)</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="13"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Experimental features</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/reference/experimental-flags/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Configuring experimental flags</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/experimental-flags/responsive-images/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Responsive images</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/experimental-flags/svg/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">SVG components</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/experimental-flags/client-prerender/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Client prerendering</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/experimental-flags/content-intellisense/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Intellisense for collections</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/legacy-flags/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Legacy flags</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/error-reference/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Error reference</span>
						
					</a>
			</li>
</ul>
				
</div><div id="integrations" class="astro-s7ttdo4b">
	
					<ul class="top-level astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Integrations overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="14"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">UI frameworks</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/alpinejs/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Alpine.js</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/preact/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Preact</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/react/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">React</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/solid-js/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">SolidJS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/svelte/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Svelte</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/vue/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Vue</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="15"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Adapters</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/cloudflare/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Cloudflare</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/netlify/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Netlify</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/node/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Node</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/vercel/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Vercel</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details open class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="16"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Other official integrations</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/db/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">DB</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/markdoc/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Markdoc</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/mdx/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">MDX</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/partytown/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Partytown</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/sitemap/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Sitemap</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/integrations-guide/tailwind/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Tailwind</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<a href="/en/reference/publish-to-npm/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Publish to NPM</span>
						
					</a>
			</li>
</ul>
				
</div><div id="third-party-services" class="astro-s7ttdo4b">
	
					<ul class="top-level astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="17"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Deployment guides</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Deployment overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/aws/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">AWS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/azion/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Azion</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/buddy/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Buddy</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/cleavr/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Cleavr</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/clever-cloud/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Clever Cloud</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/cloudflare/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Cloudflare</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/deno/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Deno</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/edgio/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Edgio</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/fleek/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Fleek</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/flightcontrol/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Flightcontrol</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/flyio/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Fly.io</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/github/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">GitHub Pages</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/gitlab/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">GitLab Pages</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/google-cloud/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Google Cloud</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/google-firebase/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Google Firebase</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/heroku/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Heroku</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/kinsta/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Kinsta</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/microsoft-azure/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Microsoft Azure</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/netlify/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Netlify</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/render/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Render</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/sst/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">SST</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/stormkit/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Stormkit</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/surge/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Surge</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/vercel/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Vercel</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/zeabur/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Zeabur</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/deploy/zerops/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Zerops</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="18"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Content management systems</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/cms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">CMS overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/apostrophecms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">ApostropheCMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/builderio/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Builder.io</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/buttercms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">ButterCMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/caisy/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Caisy</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/cloudcannon/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">CloudCannon</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/contentful/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Contentful</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/cosmic/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Cosmic</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/craft-cms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Craft CMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/crystallize/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Crystallize</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/datocms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">DatoCMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/decap-cms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Decap CMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/directus/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Directus</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/drupal/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Drupal</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/flotiq/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Flotiq</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/frontmatter-cms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Front Matter CMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/ghost/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Ghost</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/hashnode/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Hashnode</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/hygraph/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Hygraph</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/keystatic/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Keystatic</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/keystonejs/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">KeystoneJS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/kontent-ai/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Kontent.ai</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/microcms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">microCMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/payload/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Payload CMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/preprcms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Prepr CMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/prismic/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Prismic</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/sanity/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Sanity</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/sitecore/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Sitecore XM</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/spinal/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Spinal</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/statamic/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Statamic</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/storyblok/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Storyblok</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/strapi/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Strapi</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/tina-cms/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Tina CMS</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/umbraco/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Umbraco</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/cms/wordpress/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Wordpress</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="19"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Backend services</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/backend/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Backend services overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/appwriteio/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Appwrite</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/google-firebase/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Firebase</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/neon/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Neon</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/sentry/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Sentry</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/supabase/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Supabase</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/turso/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Turso</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/backend/xata/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Xata</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<details class="astro-xktt5ndl">
						<sl-sidebar-restore data-index="20"></sl-sidebar-restore>
						<summary class="astro-xktt5ndl">
							<div class="group-label astro-xktt5ndl">
								<span class="large astro-xktt5ndl">Hosted media &amp; DAM</span>
								
							</div>
							<svg aria-hidden="true" class="caret astro-xktt5ndl astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.25rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</summary>
						<ul class="astro-xktt5ndl">
	<li class="astro-xktt5ndl">
				<a href="/en/guides/media/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Digital Asset Management overview</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/media/cloudinary/" class="astro-xktt5ndl">
						<span class="astro-xktt5ndl">Cloudinary</span>
						
					</a>
			</li>
</ul>
					</details>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/ecommerce/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">E-commerce</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/authentication/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Authentication</span>
						
					</a>
			</li><li class="astro-xktt5ndl">
				<a href="/en/guides/testing/" class="large astro-xktt5ndl">
						<span class="astro-xktt5ndl">Testing</span>
						
					</a>
			</li>
</ul>
				
</div>
	</div>
</tabbed-content>



<script type="module">class d extends HTMLElement{id=Math.floor(Math.random()*1e11).toString(32);count=0;TabStore=[];PanelStore=[];constructor(){super();const n=this.querySelectorAll(".panels > [id]"),s=this.querySelector(".tab-list"),t=s.querySelectorAll("a");s.setAttribute("role","tablist");let i=0;Array.prototype.forEach.call(t,(e,a)=>{e.setAttribute("role","tab"),e.setAttribute("id",this.id+"tab"+this.count++),e.setAttribute("tabindex","-1"),e.parentElement?.setAttribute("role","presentation"),this.TabStore[a]||this.TabStore.push(new Set),this.TabStore[a].add(e),"initial"in e.dataset&&e.dataset.initial!=="false"&&(i=a);const c=r=>{r.preventDefault();const o=s.querySelector("[aria-selected]");r.currentTarget!==o&&this.switchTab(r.currentTarget,a)};e.addEventListener("click",c),e.addEventListener("auxclick",c),e.addEventListener("keydown",r=>{const o=Array.prototype.indexOf.call(t,r.currentTarget),l=r.key==="ArrowLeft"?o-1:r.key==="ArrowRight"?o+1:r.key==="Home"?0:r.key==="End"?t.length-1:null;l!==null&&(r.preventDefault(),t[l]&&this.switchTab(t[l],l))})}),Array.prototype.forEach.call(n,(e,a)=>{e.setAttribute("role","tabpanel"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-labelledby",t[a].id),e.hidden=!0,this.PanelStore[a]||this.PanelStore.push(new Set),this.PanelStore[a].add(e)}),t[i].removeAttribute("tabindex"),t[i].setAttribute("aria-selected","true"),n[i].hidden=!1}switchTab(n,s){this.TabStore.forEach(t=>t.forEach(i=>{i.removeAttribute("aria-selected"),i.setAttribute("tabindex","-1")})),this.TabStore[s].forEach(t=>{t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true")}),this.PanelStore.forEach(t=>t.forEach(i=>{i.hidden=!0})),this.PanelStore[s].forEach(t=>{t.hidden=!1}),n.focus()}}customElements.define("tabbed-content",d);</script>


	<script>
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	</script>
</sl-sidebar-state-persist>

<div class="md:sl-hidden astro-3x5efdbn">
	<div class="sl-flex astro-mkinwl4g">
	<div dir="ltr" lang="en" class="sponsors astro-kwmzlgva">
	<h2 class="sponsors-title astro-kwmzlgva">Sponsored by</h2>
	<a href="https://www.netlify.com/?utm_campaign=Astro-2024&utm_source=astro-referral" aria-label="Netlify" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 256 105" aria-hidden="true" class="astro-kwmzlgva">
			<path fill="#32E6E2" d="M58.5 103.8V77.4l.5-.5h6.6l.6.5v26.4l-.6.5H59l-.5-.5Zm0-76.9V.5L59 0h6.6l.6.5V27l-.6.5H59l-.5-.5ZM35.8 85.2h-1l-4.4-4.5v-.9l8.5-8.5h4.7l.7.6v4.8l-8.5 8.5Zm-5.4-60.5v-.9l4.5-4.5h.9l8.5 8.5v4.8l-.7.6H39l-8.5-8.5ZM.5 48.3H38l.5.6v6.6l-.5.5H.5l-.5-.5v-6.6l.5-.6Zm255 0 .5.6v6.6l-.6.5h-37.8l-.6-.5 2.8-6.6.5-.6h35.1Z" class="astro-kwmzlgva"></path>
			<path d="M74.7 65.9H68l-.6-.6V50c0-2.7-1-4.9-4.4-5-1.7 0-3.6 0-5.7.2l-.3.3v20l-.6.5H50l-.6-.6V39l.6-.6h14.8c5.7 0 10.4 4.7 10.4 10.5v16.4l-.5.6Zm31.9-11.6-.6.6H89l-.6.5c0 1.1 1.1 4.4 5.5 4.4 1.7 0 3.3-.5 3.9-1.6l.5-.6h6.6l.6.6c-.6 3.3-3.3 8.2-11.6 8.2-9.3 0-13.7-6.6-13.7-14.3S84.6 38 93.4 38s13.2 6.6 13.2 14.2v2.2ZM98.3 49c0-.6-.5-4.4-5-4.4s-4.9 3.8-4.9 4.4l.6.5h8.8l.5-.5Zm23.7 8.7c0 1.1.5 1.7 1.6 1.7h5l.5.5v5.5l-.6.6h-4.9c-5 0-9.3-2.2-9.3-8.3v-12l-.6-.6H110l-.6-.5V39l.6-.6h3.8l.6-.5v-5l.5-.5h6.6l.5.5v5l.6.5h6l.6.6v5.5l-.6.5h-6l-.6.6v12Zm20.3 8.3h-6.6l-.6-.6V28l.6-.6h6.6l.5.6v37.3l-.5.6ZM157 34h-6.6l-.5-.5V28l.5-.6h6.6l.6.6v5.5l-.6.5Zm0 31.9h-6.6l-.5-.6V39l.5-.6h6.6l.6.6v26.3l-.6.6Zm25.8-38v5.6l-.5.5h-5c-1 0-1.6.6-1.6 1.7v2.2l.5.5h5.5l.6.6v5.5l-.6.5h-5.5l-.5.6v19.7l-.6.6h-6.5l-.6-.6V45.5l-.5-.5h-3.9l-.5-.5V39l.5-.6h3.9l.5-.5v-2.2c0-6 4.4-8.3 9.4-8.3h4.9l.5.6Zm20.3 38.5c-2.2 5.5-4.3 8.8-12 8.8h-2.8l-.5-.5v-5.5l.5-.6h2.8c2.7 0 3.3-.5 3.8-2.2V66l-8.8-21.4V39l.6-.6h5l.5.6 6.5 18.7h.6L206 39l.5-.6h5l.5.6v5.5l-8.8 22Z" class="astro-kwmzlgva"></path>
		</svg>
	</a>
	<a href="https://sentry.io/welcome/?utm_medium=partner&utm_source=astro&utm_campaign=astro-docs" aria-label="Sentry" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 44" width="96" aria-hidden="true" class="astro-kwmzlgva">
			<path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z" fill="currentColor" class="astro-kwmzlgva"></path>
		</svg>
	</a>
	<a href="https://idx.dev/?utm_source=astro&utm_medium=astro&utm_campaign=astro" aria-label="Project IDX" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 52" width="125" aria-hidden="true" class="astro-kwmzlgva">
			<path fill="#8964E8" d="M23.39 44.18H4.19a3.6 3.6 0 0 0 0 7.2h19.2a3.6 3.6 0 0 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#17B877" d="M30.58 33.38h-3.6a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 0 0 0-7.2Zm-14.38 0h-3.6a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 1 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#FFA23E" d="M29.38 22.59h-8.4a3.6 3.6 0 1 0 0 7.2h8.4a3.6 3.6 0 1 0 0-7.2Zm14.4 3.59a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z" class="astro-kwmzlgva"></path>
			<path fill="#25A6E9" d="M31.78 11.8H12.6a3.6 3.6 0 1 0 0 7.19h19.2a3.6 3.6 0 1 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#8964E8" d="M23.39 1h-8.4a3.6 3.6 0 0 0 0 7.2h8.4a3.6 3.6 0 0 0 0-7.2ZM7.8 4.6a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z" class="astro-kwmzlgva"></path>
			<path fill="#currentColor" d="M66.5 36.08V15.47h7.08c1.25 0 2.38.27 3.4.8a5.99 5.99 0 0 1 2.42 2.22c.61.94.92 2.04.92 3.28a6.2 6.2 0 0 1-3.34 5.53 7.37 7.37 0 0 1-3.4.78h-3.91v8H66.5Zm3.17-11h4c.75 0 1.38-.15 1.9-.46a3.3 3.3 0 0 0 1.18-1.23c.29-.52.43-1.06.43-1.62a3.1 3.1 0 0 0-.43-1.58 3.3 3.3 0 0 0-3.08-1.73h-4v6.62Zm13.38 11V21.4h2.93v2.16h.18c.23-.5.55-.94.98-1.33.44-.38.94-.69 1.5-.92a4.76 4.76 0 0 1 2.78-.26c.3.04.55.1.78.2v3.23a7.7 7.7 0 0 0-1.12-.37 4.5 4.5 0 0 0-1.15-.15c-.73 0-1.38.2-1.96.6-.56.39-1 .9-1.32 1.56a4.82 4.82 0 0 0-.5 2.19v7.77h-3.1Zm17.59.46a7.41 7.41 0 0 1-6.7-3.83 8.12 8.12 0 0 1-.99-3.97c0-1.46.33-2.77.98-3.94a7.35 7.35 0 0 1 6.71-3.86c1.5 0 2.82.35 3.97 1.06a7.4 7.4 0 0 1 2.7 2.8c.66 1.17.99 2.48.99 3.94s-.33 2.78-.98 3.97a7.4 7.4 0 0 1-6.68 3.83Zm0-2.85c.8 0 1.55-.2 2.25-.57.69-.4 1.24-.97 1.67-1.7a5.2 5.2 0 0 0 .66-2.68c0-1.04-.22-1.92-.66-2.65a4.31 4.31 0 0 0-1.67-1.7 4.53 4.53 0 0 0-6.22 1.7 5.2 5.2 0 0 0-.64 2.65 4.67 4.67 0 0 0 2.36 4.38 4.7 4.7 0 0 0 2.25.57Zm9.37 8.9a9.4 9.4 0 0 1-1.61-.2v-3a3.34 3.34 0 0 0 1.35.38c.54 0 .92-.18 1.16-.52.23-.33.34-.8.34-1.44V21.4h3.1v16.44c0 1.13-.18 2.04-.57 2.73-.36.7-.87 1.2-1.52 1.53-.66.32-1.4.49-2.25.49Zm2.8-23.35a2.1 2.1 0 0 1-1.5-.6 2.1 2.1 0 0 1-.6-1.5c0-.6.2-1.09.6-1.47.42-.4.92-.6 1.5-.6.59 0 1.09.2 1.5.6.4.38.6.87.6 1.47 0 .57-.2 1.07-.6 1.5-.41.4-.91.6-1.5.6Zm11.97 17.3a7.27 7.27 0 0 1-6.54-3.77 8.28 8.28 0 0 1-.94-4c0-1.4.3-2.7.92-3.89a7.35 7.35 0 0 1 2.56-2.85 6.83 6.83 0 0 1 3.83-1.1c1.52 0 2.8.33 3.86.99a6.35 6.35 0 0 1 2.45 2.67 8.57 8.57 0 0 1 .77 4.81h-11.34c.08.8.28 1.5.6 2.1a4.3 4.3 0 0 0 3.92 2.28c.98 0 1.8-.22 2.45-.66a5.12 5.12 0 0 0 1.58-1.7l2.56 1.24a7.95 7.95 0 0 1-2.59 2.82 7.36 7.36 0 0 1-4.09 1.06Zm-4.26-9.47h8.15a3.37 3.37 0 0 0-.29-1.15 3.7 3.7 0 0 0-1.98-1.99 4.15 4.15 0 0 0-1.76-.34c-.84 0-1.6.22-2.25.66a4.22 4.22 0 0 0-1.52 1.78c-.16.33-.27.68-.35 1.04Zm21.05 9.47a7.26 7.26 0 0 1-6.62-3.77 8.45 8.45 0 0 1-.95-4.03c0-1.5.31-2.83.95-4a7.26 7.26 0 0 1 2.68-2.77 7.52 7.52 0 0 1 3.94-1.03c1.63 0 3 .36 4.12 1.1A6.02 6.02 0 0 1 148.1 25l-2.82 1.15a3.68 3.68 0 0 0-1.5-1.76c-.63-.4-1.39-.6-2.27-.6a4.43 4.43 0 0 0-3.83 2.33c-.4.73-.6 1.6-.6 2.62 0 1 .2 1.87.6 2.62a4.23 4.23 0 0 0 3.83 2.33 4.3 4.3 0 0 0 2.4-.63 4.23 4.23 0 0 0 1.52-1.79l2.76 1.21a7 7 0 0 1-6.62 4.06Zm8.14-15.14h2.56v-4.15h3.1v4.15h3.6v2.7h-3.6v7.06c0 .73.15 1.28.44 1.67.3.38.82.57 1.53.57.34 0 .65-.04.92-.14.27-.12.53-.25.8-.4v3.02a5.93 5.93 0 0 1-2.33.43c-1.36 0-2.44-.4-3.25-1.18-.8-.8-1.21-1.9-1.21-3.31v-7.71h-2.56V21.4Zm19.49 14.68V15.47h3.16v20.61h-3.16Zm7.84 0V15.47h6.6c2.16 0 4.02.44 5.58 1.32a8.92 8.92 0 0 1 3.63 3.63c.86 1.55 1.3 3.34 1.3 5.35 0 2.02-.44 3.8-1.3 5.36a9.1 9.1 0 0 1-3.63 3.66 11.4 11.4 0 0 1-5.59 1.3h-6.59Zm3.17-3h3.34c1.55 0 2.88-.28 4-.86a5.98 5.98 0 0 0 2.53-2.53c.58-1.1.86-2.4.86-3.92 0-1.51-.28-2.82-.86-3.91a5.81 5.81 0 0 0-2.53-2.5 8.38 8.38 0 0 0-4-.9h-3.34V33.1Zm15.63-17.61h3.9l4.57 7.4h.17l4.6-7.4h3.86l-6.41 9.9 6.88 10.71h-3.86l-5.07-8.03h-.17l-5.07 8.03h-3.86l6.88-10.7-6.41-9.91Z" class="astro-kwmzlgva"></path>
		</svg>
	</a>
</div>
	<div class="mobile-preferences sl-flex astro-u7vfgcvj">
	<div class="sl-flex social-icons astro-u7vfgcvj">
		<a href="https://github.com/withastro/astro" rel="me" class="sl-flex astro-bcg4mff4">
					<span class="sr-only astro-bcg4mff4">GitHub</span>
					<svg aria-hidden="true" class="astro-bcg4mff4 astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/></svg>
				</a><a href="https://astro.build/chat" rel="me" class="sl-flex astro-bcg4mff4">
					<span class="sr-only astro-bcg4mff4">Discord</span>
					<svg aria-hidden="true" class="astro-bcg4mff4 astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51 13.78 13.78 0 0 0-.64 1.28 18.27 18.27 0 0 0-5.5 0 12.64 12.64 0 0 0-.64-1.28h-.05A19.74 19.74 0 0 0 3.64 4.4 20.26 20.26 0 0 0 .11 18.09l.02.02a19.9 19.9 0 0 0 6.04 3.03l.04-.02a14.24 14.24 0 0 0 1.23-2.03.08.08 0 0 0-.05-.07 13.1 13.1 0 0 1-1.9-.92.08.08 0 0 1 .02-.1 10.2 10.2 0 0 0 .41-.31h.04a14.2 14.2 0 0 0 12.1 0l.04.01a9.63 9.63 0 0 0 .4.32.08.08 0 0 1-.03.1 12.29 12.29 0 0 1-1.9.91.08.08 0 0 0-.02.1 15.97 15.97 0 0 0 1.27 2.01h.04a19.84 19.84 0 0 0 6.03-3.05v-.03a20.12 20.12 0 0 0-3.57-13.69ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/></svg>
				</a>


	</div>
	<starlight-theme-select>
	
	<label style="--sl-select-width: 6.25em" class="astro-biied46h">
	<span class="sr-only astro-biied46h">Select theme</span>
	<svg aria-hidden="true" class="icon label-icon astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M21 14h-1V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v7H3a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1ZM6 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7H6V7Zm14 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1h16v1Z"/></svg>
	<select value="auto" class="astro-biied46h">
		<option value="dark" class="astro-biied46h">Dark</option><option value="light" class="astro-biied46h">Light</option><option value="auto" selected class="astro-biied46h">Auto</option>
	</select>
	<svg aria-hidden="true" class="icon caret astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"/></svg>
</label>
</starlight-theme-select>


<script>
	StarlightThemeProvider.updatePickers();
</script>


	<starlight-lang-select>
			<label style="--sl-select-width: 7em" class="astro-biied46h">
	<span class="sr-only astro-biied46h">Select language</span>
	<svg aria-hidden="true" class="icon label-icon astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd"/></svg>
	<select value="/en/reference/api-reference/" class="astro-biied46h">
		<option value="/en/reference/api-reference/" selected class="astro-biied46h">English</option><option value="/de/reference/api-reference/" class="astro-biied46h">Deutsch</option><option value="/pt-br/reference/api-reference/" class="astro-biied46h">Português do Brasil</option><option value="/es/reference/api-reference/" class="astro-biied46h">Español</option><option value="/zh-cn/reference/api-reference/" class="astro-biied46h">简体中文</option><option value="/zh-tw/reference/api-reference/" class="astro-biied46h">正體中文</option><option value="/fr/reference/api-reference/" class="astro-biied46h">Français</option><option value="/hi/reference/api-reference/" class="astro-biied46h">हिन्दी</option><option value="/ar/reference/api-reference/" class="astro-biied46h">العربية</option><option value="/ja/reference/api-reference/" class="astro-biied46h">日本語</option><option value="/ko/reference/api-reference/" class="astro-biied46h">한국어</option><option value="/pl/reference/api-reference/" class="astro-biied46h">Polski</option><option value="/ru/reference/api-reference/" class="astro-biied46h">Русский</option><option value="/it/reference/api-reference/" class="astro-biied46h">Italiano</option>
	</select>
	<svg aria-hidden="true" class="icon caret astro-biied46h astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 1 0-1.41 1.42l4.24 4.24a1.002 1.002 0 0 0 1.42 0L17 10.59a1.002 1.002 0 0 0 0-1.42Z"/></svg>
</label>
		</starlight-lang-select>


</div>
</div>
</div>

<div class="desktop-footer sl-hidden md:sl-block astro-3x5efdbn">
	<div dir="ltr" lang="en" class="sponsors astro-kwmzlgva">
	<h2 class="sponsors-title astro-kwmzlgva">Sponsored by</h2>
	<a href="https://www.netlify.com/?utm_campaign=Astro-2024&utm_source=astro-referral" aria-label="Netlify" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 256 105" aria-hidden="true" class="astro-kwmzlgva">
			<path fill="#32E6E2" d="M58.5 103.8V77.4l.5-.5h6.6l.6.5v26.4l-.6.5H59l-.5-.5Zm0-76.9V.5L59 0h6.6l.6.5V27l-.6.5H59l-.5-.5ZM35.8 85.2h-1l-4.4-4.5v-.9l8.5-8.5h4.7l.7.6v4.8l-8.5 8.5Zm-5.4-60.5v-.9l4.5-4.5h.9l8.5 8.5v4.8l-.7.6H39l-8.5-8.5ZM.5 48.3H38l.5.6v6.6l-.5.5H.5l-.5-.5v-6.6l.5-.6Zm255 0 .5.6v6.6l-.6.5h-37.8l-.6-.5 2.8-6.6.5-.6h35.1Z" class="astro-kwmzlgva"></path>
			<path d="M74.7 65.9H68l-.6-.6V50c0-2.7-1-4.9-4.4-5-1.7 0-3.6 0-5.7.2l-.3.3v20l-.6.5H50l-.6-.6V39l.6-.6h14.8c5.7 0 10.4 4.7 10.4 10.5v16.4l-.5.6Zm31.9-11.6-.6.6H89l-.6.5c0 1.1 1.1 4.4 5.5 4.4 1.7 0 3.3-.5 3.9-1.6l.5-.6h6.6l.6.6c-.6 3.3-3.3 8.2-11.6 8.2-9.3 0-13.7-6.6-13.7-14.3S84.6 38 93.4 38s13.2 6.6 13.2 14.2v2.2ZM98.3 49c0-.6-.5-4.4-5-4.4s-4.9 3.8-4.9 4.4l.6.5h8.8l.5-.5Zm23.7 8.7c0 1.1.5 1.7 1.6 1.7h5l.5.5v5.5l-.6.6h-4.9c-5 0-9.3-2.2-9.3-8.3v-12l-.6-.6H110l-.6-.5V39l.6-.6h3.8l.6-.5v-5l.5-.5h6.6l.5.5v5l.6.5h6l.6.6v5.5l-.6.5h-6l-.6.6v12Zm20.3 8.3h-6.6l-.6-.6V28l.6-.6h6.6l.5.6v37.3l-.5.6ZM157 34h-6.6l-.5-.5V28l.5-.6h6.6l.6.6v5.5l-.6.5Zm0 31.9h-6.6l-.5-.6V39l.5-.6h6.6l.6.6v26.3l-.6.6Zm25.8-38v5.6l-.5.5h-5c-1 0-1.6.6-1.6 1.7v2.2l.5.5h5.5l.6.6v5.5l-.6.5h-5.5l-.5.6v19.7l-.6.6h-6.5l-.6-.6V45.5l-.5-.5h-3.9l-.5-.5V39l.5-.6h3.9l.5-.5v-2.2c0-6 4.4-8.3 9.4-8.3h4.9l.5.6Zm20.3 38.5c-2.2 5.5-4.3 8.8-12 8.8h-2.8l-.5-.5v-5.5l.5-.6h2.8c2.7 0 3.3-.5 3.8-2.2V66l-8.8-21.4V39l.6-.6h5l.5.6 6.5 18.7h.6L206 39l.5-.6h5l.5.6v5.5l-8.8 22Z" class="astro-kwmzlgva"></path>
		</svg>
	</a>
	<a href="https://sentry.io/welcome/?utm_medium=partner&utm_source=astro&utm_campaign=astro-docs" aria-label="Sentry" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 44" width="96" aria-hidden="true" class="astro-kwmzlgva">
			<path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z" fill="currentColor" class="astro-kwmzlgva"></path>
		</svg>
	</a>
	<a href="https://idx.dev/?utm_source=astro&utm_medium=astro&utm_campaign=astro" aria-label="Project IDX" class="astro-kwmzlgva">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 52" width="125" aria-hidden="true" class="astro-kwmzlgva">
			<path fill="#8964E8" d="M23.39 44.18H4.19a3.6 3.6 0 0 0 0 7.2h19.2a3.6 3.6 0 0 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#17B877" d="M30.58 33.38h-3.6a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 0 0 0-7.2Zm-14.38 0h-3.6a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 1 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#FFA23E" d="M29.38 22.59h-8.4a3.6 3.6 0 1 0 0 7.2h8.4a3.6 3.6 0 1 0 0-7.2Zm14.4 3.59a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z" class="astro-kwmzlgva"></path>
			<path fill="#25A6E9" d="M31.78 11.8H12.6a3.6 3.6 0 1 0 0 7.19h19.2a3.6 3.6 0 1 0 0-7.2Z" class="astro-kwmzlgva"></path>
			<path fill="#8964E8" d="M23.39 1h-8.4a3.6 3.6 0 0 0 0 7.2h8.4a3.6 3.6 0 0 0 0-7.2ZM7.8 4.6a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0Z" class="astro-kwmzlgva"></path>
			<path fill="#currentColor" d="M66.5 36.08V15.47h7.08c1.25 0 2.38.27 3.4.8a5.99 5.99 0 0 1 2.42 2.22c.61.94.92 2.04.92 3.28a6.2 6.2 0 0 1-3.34 5.53 7.37 7.37 0 0 1-3.4.78h-3.91v8H66.5Zm3.17-11h4c.75 0 1.38-.15 1.9-.46a3.3 3.3 0 0 0 1.18-1.23c.29-.52.43-1.06.43-1.62a3.1 3.1 0 0 0-.43-1.58 3.3 3.3 0 0 0-3.08-1.73h-4v6.62Zm13.38 11V21.4h2.93v2.16h.18c.23-.5.55-.94.98-1.33.44-.38.94-.69 1.5-.92a4.76 4.76 0 0 1 2.78-.26c.3.04.55.1.78.2v3.23a7.7 7.7 0 0 0-1.12-.37 4.5 4.5 0 0 0-1.15-.15c-.73 0-1.38.2-1.96.6-.56.39-1 .9-1.32 1.56a4.82 4.82 0 0 0-.5 2.19v7.77h-3.1Zm17.59.46a7.41 7.41 0 0 1-6.7-3.83 8.12 8.12 0 0 1-.99-3.97c0-1.46.33-2.77.98-3.94a7.35 7.35 0 0 1 6.71-3.86c1.5 0 2.82.35 3.97 1.06a7.4 7.4 0 0 1 2.7 2.8c.66 1.17.99 2.48.99 3.94s-.33 2.78-.98 3.97a7.4 7.4 0 0 1-6.68 3.83Zm0-2.85c.8 0 1.55-.2 2.25-.57.69-.4 1.24-.97 1.67-1.7a5.2 5.2 0 0 0 .66-2.68c0-1.04-.22-1.92-.66-2.65a4.31 4.31 0 0 0-1.67-1.7 4.53 4.53 0 0 0-6.22 1.7 5.2 5.2 0 0 0-.64 2.65 4.67 4.67 0 0 0 2.36 4.38 4.7 4.7 0 0 0 2.25.57Zm9.37 8.9a9.4 9.4 0 0 1-1.61-.2v-3a3.34 3.34 0 0 0 1.35.38c.54 0 .92-.18 1.16-.52.23-.33.34-.8.34-1.44V21.4h3.1v16.44c0 1.13-.18 2.04-.57 2.73-.36.7-.87 1.2-1.52 1.53-.66.32-1.4.49-2.25.49Zm2.8-23.35a2.1 2.1 0 0 1-1.5-.6 2.1 2.1 0 0 1-.6-1.5c0-.6.2-1.09.6-1.47.42-.4.92-.6 1.5-.6.59 0 1.09.2 1.5.6.4.38.6.87.6 1.47 0 .57-.2 1.07-.6 1.5-.41.4-.91.6-1.5.6Zm11.97 17.3a7.27 7.27 0 0 1-6.54-3.77 8.28 8.28 0 0 1-.94-4c0-1.4.3-2.7.92-3.89a7.35 7.35 0 0 1 2.56-2.85 6.83 6.83 0 0 1 3.83-1.1c1.52 0 2.8.33 3.86.99a6.35 6.35 0 0 1 2.45 2.67 8.57 8.57 0 0 1 .77 4.81h-11.34c.08.8.28 1.5.6 2.1a4.3 4.3 0 0 0 3.92 2.28c.98 0 1.8-.22 2.45-.66a5.12 5.12 0 0 0 1.58-1.7l2.56 1.24a7.95 7.95 0 0 1-2.59 2.82 7.36 7.36 0 0 1-4.09 1.06Zm-4.26-9.47h8.15a3.37 3.37 0 0 0-.29-1.15 3.7 3.7 0 0 0-1.98-1.99 4.15 4.15 0 0 0-1.76-.34c-.84 0-1.6.22-2.25.66a4.22 4.22 0 0 0-1.52 1.78c-.16.33-.27.68-.35 1.04Zm21.05 9.47a7.26 7.26 0 0 1-6.62-3.77 8.45 8.45 0 0 1-.95-4.03c0-1.5.31-2.83.95-4a7.26 7.26 0 0 1 2.68-2.77 7.52 7.52 0 0 1 3.94-1.03c1.63 0 3 .36 4.12 1.1A6.02 6.02 0 0 1 148.1 25l-2.82 1.15a3.68 3.68 0 0 0-1.5-1.76c-.63-.4-1.39-.6-2.27-.6a4.43 4.43 0 0 0-3.83 2.33c-.4.73-.6 1.6-.6 2.62 0 1 .2 1.87.6 2.62a4.23 4.23 0 0 0 3.83 2.33 4.3 4.3 0 0 0 2.4-.63 4.23 4.23 0 0 0 1.52-1.79l2.76 1.21a7 7 0 0 1-6.62 4.06Zm8.14-15.14h2.56v-4.15h3.1v4.15h3.6v2.7h-3.6v7.06c0 .73.15 1.28.44 1.67.3.38.82.57 1.53.57.34 0 .65-.04.92-.14.27-.12.53-.25.8-.4v3.02a5.93 5.93 0 0 1-2.33.43c-1.36 0-2.44-.4-3.25-1.18-.8-.8-1.21-1.9-1.21-3.31v-7.71h-2.56V21.4Zm19.49 14.68V15.47h3.16v20.61h-3.16Zm7.84 0V15.47h6.6c2.16 0 4.02.44 5.58 1.32a8.92 8.92 0 0 1 3.63 3.63c.86 1.55 1.3 3.34 1.3 5.35 0 2.02-.44 3.8-1.3 5.36a9.1 9.1 0 0 1-3.63 3.66 11.4 11.4 0 0 1-5.59 1.3h-6.59Zm3.17-3h3.34c1.55 0 2.88-.28 4-.86a5.98 5.98 0 0 0 2.53-2.53c.58-1.1.86-2.4.86-3.92 0-1.51-.28-2.82-.86-3.91a5.81 5.81 0 0 0-2.53-2.5 8.38 8.38 0 0 0-4-.9h-3.34V33.1Zm15.63-17.61h3.9l4.57 7.4h.17l4.6-7.4h3.86l-6.41 9.9 6.88 10.71h-3.86l-5.07-8.03h-.17l-5.07 8.03h-3.86l6.88-10.7-6.41-9.91Z" class="astro-kwmzlgva"></path>
		</svg>
	</a>
</div>
</div>
					</div>
				</div>
			</nav>
	<div class="main-frame astro-sfkvv2cu">
			
			<script type="module">const a=document.getElementById("starlight__sidebar"),n=a?.querySelector("sl-sidebar-state-persist"),o="sl-sidebar-state",i=()=>{let t=[];const e=n?.dataset.hash||"";try{const s=sessionStorage.getItem(o),r=JSON.parse(s||"{}");Array.isArray(r.open)&&r.hash===e&&(t=r.open)}catch{}return{hash:e,open:t,scroll:a?.scrollTop||0}},c=t=>{try{sessionStorage.setItem(o,JSON.stringify(t))}catch{}},d=()=>c(i()),l=(t,e)=>{const s=i();s.open[e]=t,c(s)};n?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const s=e.querySelector("sl-sidebar-restore"),r=parseInt(s?.dataset.index||"");isNaN(r)||l(!e.open,r)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&d()});addEventListener("pageHide",d);</script>
			<div class="lg:sl-flex astro-mduiocwh">
	<aside class="right-sidebar-container astro-mduiocwh">
				<div class="right-sidebar astro-mduiocwh">
					
			<div class="lg:sl-hidden astro-evux67hy">
				<mobile-starlight-toc data-min-h="2" data-max-h="4" class="astro-yitqccco">
			<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-yitqccco">
				<details id="starlight__mobile-toc" class="astro-yitqccco">
					<summary id="starlight__on-this-page--mobile" class="sl-flex astro-yitqccco">
						<div class="toggle sl-flex astro-yitqccco">
							On this page
							<svg aria-hidden="true" class="caret astro-yitqccco astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1rem;"><path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"/></svg>
						</div>
						<span class="display-current astro-yitqccco"></span>
					</summary>
					<div class="dropdown astro-yitqccco">
						<ul class="isMobile astro-qttv54w7" style="--depth: 0;">
	<li class="astro-qttv54w7" style="--depth: 0;">
				<a href="#_top" class="astro-qttv54w7" style="--depth: 0;">
					<span class="astro-qttv54w7" style="--depth: 0;">Overview</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 0;">
				<a href="#the-context-object" class="astro-qttv54w7" style="--depth: 0;">
					<span class="astro-qttv54w7" style="--depth: 0;">The context object</span>
				</a>
				<ul class="isMobile astro-qttv54w7" style="--depth: 1;">
	<li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#props" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">props</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#params" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">params</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#url" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">url</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#site" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">site</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#clientaddress" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">clientAddress</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#isprerendered" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">isPrerendered</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#generator" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">generator</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#request" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">request</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#response" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">response</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#redirect" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">redirect()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#rewrite" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">rewrite()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#locals" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">locals</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#preferredlocale" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">preferredLocale</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#preferredlocalelist" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">preferredLocaleList</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#currentlocale" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">currentLocale</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#getactionresult" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">getActionResult()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#callaction" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">callAction()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#routepattern" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">routePattern</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#cookies" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">cookies</span>
				</a>
				<ul class="isMobile astro-qttv54w7" style="--depth: 2;">
	<li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#cookie-utilities" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">Cookie utilities</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astrocookie-type" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">AstroCookie Type</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astrocookiegetoptions" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">AstroCookieGetOptions</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astrocookiesetoptions" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">AstroCookieSetOptions</span>
				</a>
				
			</li>
</ul>
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#deprecated-object-properties" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">Deprecated object properties</span>
				</a>
				<ul class="isMobile astro-qttv54w7" style="--depth: 2;">
	<li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astroglob" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">Astro.glob()</span>
				</a>
				
			</li>
</ul>
			</li>
</ul>
			</li>
</ul>
					</div>
				</details>
			</nav>
		</mobile-starlight-toc>



<script type="module" src="/_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.B6c2wewi.js"></script>
			</div>
			<div class="right-sidebar-panel sl-hidden lg:sl-block astro-evux67hy">
				<div class="sl-container astro-evux67hy">
					<starlight-toc data-min-h="2" data-max-h="4">
			<nav aria-labelledby="starlight__on-this-page">
				<h2 id="starlight__on-this-page">
					On this page
				</h2>
				<ul class="astro-qttv54w7" style="--depth: 0;">
	<li class="astro-qttv54w7" style="--depth: 0;">
				<a href="#_top" class="astro-qttv54w7" style="--depth: 0;">
					<span class="astro-qttv54w7" style="--depth: 0;">Overview</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 0;">
				<a href="#the-context-object" class="astro-qttv54w7" style="--depth: 0;">
					<span class="astro-qttv54w7" style="--depth: 0;">The context object</span>
				</a>
				<ul class="astro-qttv54w7" style="--depth: 1;">
	<li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#props" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">props</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#params" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">params</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#url" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">url</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#site" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">site</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#clientaddress" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">clientAddress</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#isprerendered" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">isPrerendered</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#generator" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">generator</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#request" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">request</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#response" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">response</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#redirect" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">redirect()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#rewrite" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">rewrite()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#locals" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">locals</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#preferredlocale" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">preferredLocale</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#preferredlocalelist" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">preferredLocaleList</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#currentlocale" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">currentLocale</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#getactionresult" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">getActionResult()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#callaction" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">callAction()</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#routepattern" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">routePattern</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#cookies" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">cookies</span>
				</a>
				<ul class="astro-qttv54w7" style="--depth: 2;">
	<li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#cookie-utilities" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">Cookie utilities</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astrocookie-type" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">AstroCookie Type</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astrocookiegetoptions" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">AstroCookieGetOptions</span>
				</a>
				
			</li><li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astrocookiesetoptions" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">AstroCookieSetOptions</span>
				</a>
				
			</li>
</ul>
			</li><li class="astro-qttv54w7" style="--depth: 1;">
				<a href="#deprecated-object-properties" class="astro-qttv54w7" style="--depth: 1;">
					<span class="astro-qttv54w7" style="--depth: 1;">Deprecated object properties</span>
				</a>
				<ul class="astro-qttv54w7" style="--depth: 2;">
	<li class="astro-qttv54w7" style="--depth: 2;">
				<a href="#astroglob" class="astro-qttv54w7" style="--depth: 2;">
					<span class="astro-qttv54w7" style="--depth: 2;">Astro.glob()</span>
				</a>
				
			</li>
</ul>
			</li>
</ul>
			</li>
</ul>
			</nav>
		</starlight-toc>

<script type="module" src="/_astro/TableOfContents.astro_astro_type_script_index_0_lang.CKWWgpjV.js"></script>
				</div>
				<div class="sl-container astro-evux67hy">
					<aside class="not-content astro-mmwdqvkz">
	<div class="astro-mmwdqvkz">
		<a href="https://starlight.astro.build/" class="astro-mmwdqvkz">
			<h2 class="astro-mmwdqvkz">Want to build your own Docs?</h2>
		</a>
		<p class="astro-mmwdqvkz">
			Grab this template to get started.<b class="astro-mmwdqvkz">→</b>
		</p>
	</div>
	<div class="astro-mmwdqvkz">
		<img src="/_astro/houston_omg.CKiB_MJZ_wdOqF.webp" alt="" class="astro-mmwdqvkz" width="180" height="112" loading="lazy" decoding="async">
	</div>
</aside>
				</div>
			</div>
		


				</div>
			</aside>
	<div class="main-pane astro-mduiocwh">
				
				<main data-pagefind-body lang="en" dir="ltr" class="astro-zi5wwkvs">
					
					


					
								<div class="content-panel astro-eewswelc">
	<div class="sl-container astro-eewswelc">
									<h1 id="_top" class="astro-44ntpqfx">Astro render context</h1>


									</div>
</div>
								<div class="content-panel astro-eewswelc">
	<div class="sl-container astro-eewswelc">
									<div class="sl-markdown-content astro-klj6ju3r">
	
										<p>When rendering a page, Astro provides a runtime API specific to the current render. This includes useful information such as the current page URL as well as APIs to perform actions like redirecting to another page.</p>
<p>In <code dir="auto">.astro</code> components, this context is available from the <code dir="auto">Astro</code> global object. Endpoint functions are also called with this same context object as their first argument, whose properties mirror the Astro global properties.</p>
<p>Some properties are only available for routes rendered on demand or may have limited functionality on prerendered pages.</p>
<p>The <code dir="auto">Astro</code> global object is available to all <code dir="auto">.astro</code> files. Use the <code dir="auto">context</code> object in <a href="/en/guides/endpoints/">endpoint functions</a> to serve static or live server endpoints and in <a href="/en/guides/middleware/">middleware</a> to inject behavior when a page or endpoint is about to be rendered.</p>
<div tabindex="-1" class="heading-wrapper level-h2"><h2 id="the-context-object">The context object</h2><a class="anchor-link" href="#the-context-object"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled The context object</span></a></div>
<p>The following properties are available on the <code dir="auto">Astro</code> global (e.g. <code dir="auto">Astro.props</code>, <code dir="auto">Astro.redirect()</code>) and are also available on the context object (e.g. <code dir="auto">context.props</code>, <code dir="auto">context.redirect()</code>) passed to endpoint functions and middleware.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="props"><code dir="auto">props</code></h3><a class="anchor-link" href="#props"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled props</span></a></div>
<p><code dir="auto">props</code> is an object containing any values that have been passed as <a href="/en/basics/astro-components/#component-props">component attributes</a>.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.kfc3y.css"><script type="module" src="/_astro/ec.8zarh.js"></script><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/components/Heading.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#C792EA;--1:#773b98">const { </span><span style="--0:#82AAFF;--1:#335497">title</span><span style="--0:#C792EA;--1:#773b98">, </span><span style="--0:#82AAFF;--1:#335497">date</span><span style="--0:#C792EA;--1:#773b98"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">props</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">title</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">date</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---const { title, date } = Astro.props;---<div>  <h1>{title}</h1>  <p>{date}</p></div>"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> Heading </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">../components/Heading.astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#8D46B4">&#x3C;</span><span style="--0:#C5E478;--1:#3C63B3">Heading</span><span style="--0:#7FDBCA;--1:#8D46B4"> </span><mark><span style="--0:#C5E478;--1:#335497">title</span><span style="--0:#7FDBCA;--1:#773b98">=</span></mark><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">My First Post</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4"> </span><mark><span style="--0:#C5E478;--1:#335497">date</span><span style="--0:#7FDBCA;--1:#773b98">=</span></mark><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">09 Aug 2022</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4"> /></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import Heading from &#x27;../components/Heading.astro&#x27;;---<Heading title=&#x22;My First Post&#x22; date=&#x22;09 Aug 2022&#x22; />"><div></div></button></div></figure></div>
<div class="read-more astro-szj46hnz">
	<svg aria-hidden="true" class="icon astro-szj46hnz astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M21.17 2.06A13.1 13.1 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2 13.1 13.1 0 0 0-2.17.19 1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1 10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.91.91 0 0 0 .7 0h.11l.12-.07A10.899 10.899 0 0 1 20.83 16 1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94ZM11 15.35a12.87 12.87 0 0 0-6-1.48H4v-10c.333-.02.667-.02 1 0a10.86 10.86 0 0 1 6 1.8v9.68Zm9-1.44h-1a12.87 12.87 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8c.333-.02.667-.02 1 0v10.04Zm1.17 4.15a13.098 13.098 0 0 0-2.17-.19 12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2.05c-.727.003-1.453.066-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79 10.9 10.9 0 0 1 8.25 1.91 1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79 1 1 0 0 0-.83-1.15Z"/></svg>
	<span class="astro-szj46hnz">Learn more about how <a href="/en/guides/markdown-content/#frontmatter-layout-property">Markdown and MDX layouts</a> handle props.</span>
</div>
<p>The <code dir="auto">props</code> object also contains any <code dir="auto">props</code> passed from <code dir="auto">getStaticPaths()</code> when rendering static routes.</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-635" id="tab-635" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.props
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-636" id="tab-636" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.props
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-635" aria-labelledby="tab-635" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/posts/[id].astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">getStaticPaths</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ params: { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">1</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">props:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { author: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Blu</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ params: { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">2</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">props:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { author: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Erika</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ params: { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">3</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">props:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { author: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Matthew</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const { </span><span style="--0:#82AAFF;--1:#3C63B3">id</span><span style="--0:#C792EA;--1:#8D46B4"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">params</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#C792EA;--1:#773b98">const { </span><span style="--0:#82AAFF;--1:#335497">author</span><span style="--0:#C792EA;--1:#773b98"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">props</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---export function getStaticPaths() {  return [    { params: { id: &#x27;1&#x27; }, props: { author: &#x27;Blu&#x27; } },    { params: { id: &#x27;2&#x27; }, props: { author: &#x27;Erika&#x27; } },    { params: { id: &#x27;3&#x27; }, props: { author: &#x27;Matthew&#x27; } }  ];}const { id } = Astro.params;const { author } = Astro.props;---"><div></div></button></div></figure></div>
</div><div id="tab-panel-636" aria-labelledby="tab-636" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/posts/[id].json.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">getStaticPaths</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ params: { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">1</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">props:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { author: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Blu</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ params: { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">2</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">props:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { author: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Erika</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ params: { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">3</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">props:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { author: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Matthew</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#C792EA;--1:#773b98">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#773b98">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#335497">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D6DEEB">{ </span><span style="--0:#D7DBE0">props</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#7FDBCA;--1:#086164">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#773b98">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#086164">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#335497">Response</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent">    </span><span style="--0:#82AAFF;--1:#335497">JSON</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#82AAFF;--1:#335497">stringify</span><span style="--0:#D6DEEB;--1:#403F53">({ author: props</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">author</span><span style="--0:#D6DEEB;--1:#403F53"> })</span><span style="--0:#8da2b5;--1:#44596b">,</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function getStaticPaths() {  return [    { params: { id: &#x27;1&#x27; }, props: { author: &#x27;Blu&#x27; } },    { params: { id: &#x27;2&#x27; }, props: { author: &#x27;Erika&#x27; } },    { params: { id: &#x27;3&#x27; }, props: { author: &#x27;Matthew&#x27; } }  ];}export function GET({ props }: APIContext) {  return new Response(    JSON.stringify({ author: props.author }),  );}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>



<script type="module">class r extends HTMLElement{static#e=new Map;#t;#n="starlight-synced-tabs__";constructor(){super();const t=this.querySelector('[role="tablist"]');if(this.tabs=[...t.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.#t=this.dataset.syncKey,this.#t){const i=r.#e.get(this.#t)??[];i.push(this),r.#e.set(this.#t,i)}this.tabs.forEach((i,c)=>{i.addEventListener("click",e=>{e.preventDefault();const n=t.querySelector('[aria-selected="true"]');e.currentTarget!==n&&this.switchTab(e.currentTarget,c)}),i.addEventListener("keydown",e=>{const n=this.tabs.indexOf(e.currentTarget),s=e.key==="ArrowLeft"?n-1:e.key==="ArrowRight"?n+1:e.key==="Home"?0:e.key==="End"?this.tabs.length-1:null;s!==null&&this.tabs[s]&&(e.preventDefault(),this.switchTab(this.tabs[s],s))})})}switchTab(t,i,c=!0){if(!t)return;const e=c?this.getBoundingClientRect().top:0;this.tabs.forEach(s=>{s.setAttribute("aria-selected","false"),s.setAttribute("tabindex","-1")}),this.panels.forEach(s=>{s.hidden=!0});const n=this.panels[i];n&&(n.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),c&&(t.focus(),r.#r(this,t),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-e)}))}#i(t){!this.#t||typeof localStorage>"u"||localStorage.setItem(this.#n+this.#t,t)}static#r(t,i){const c=t.#t,e=r.#s(i);if(!c||!e)return;const n=r.#e.get(c);if(n){for(const s of n){if(s===t)continue;const a=s.tabs.findIndex(o=>r.#s(o)===e);a!==-1&&s.switchTab(s.tabs[a],a,!1)}t.#i(e)}}static#s(t){return t.textContent?.trim()}}customElements.define("starlight-tabs",r);</script>
<p>See also: <a href="/en/reference/routing-reference/#data-passing-with-props">Data Passing with <code dir="auto">props</code></a></p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="params"><code dir="auto">params</code></h3><a class="anchor-link" href="#params"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled params</span></a></div>
<p><code dir="auto">params</code> is an object containing the values of dynamic route segments matched for a request. Its keys must match the <a href="/en/guides/routing/#dynamic-routes">parameters</a> in the page or endpoint file path.</p>
<p>In static builds, this will be the <code dir="auto">params</code> returned by <code dir="auto">getStaticPaths()</code> used for prerendering <a href="/en/guides/routing/#dynamic-routes">dynamic routes</a>:</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-637" id="tab-637" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.params
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-638" id="tab-638" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.params
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-637" aria-labelledby="tab-637" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/posts/[id].astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">getStaticPaths</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">params:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">1</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">params:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">2</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">params:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">3</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#C792EA;--1:#773b98">const { </span><span style="--0:#82AAFF;--1:#335497">id</span><span style="--0:#C792EA;--1:#773b98"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">params</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">id</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---export function getStaticPaths() {  return [    { params: { id: &#x27;1&#x27; } },    { params: { id: &#x27;2&#x27; } },    { params: { id: &#x27;3&#x27; } }  ];}const { id } = Astro.params;---<h1>{id}</h1>"><div></div></button></div></figure></div>
</div><div id="tab-panel-638" aria-labelledby="tab-638" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/posts/[id].json.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">getStaticPaths</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">params:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">1</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">params:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">2</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">params:</span></mark><span style="--0:#D6DEEB;--1:#403F53"> { id: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">3</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53"> } }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#C792EA;--1:#773b98">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#773b98">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#335497">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D6DEEB">{ </span><span style="--0:#D7DBE0">params</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#7FDBCA;--1:#086164">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#773b98">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#086164">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#335497">Response</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent">    </span><span style="--0:#82AAFF;--1:#335497">JSON</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#82AAFF;--1:#335497">stringify</span><span style="--0:#D6DEEB;--1:#403F53">({ id: params</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">id</span><span style="--0:#D6DEEB;--1:#403F53"> })</span><span style="--0:#8da2b5;--1:#44596b">,</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line highlight mark"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function getStaticPaths() {  return [    { params: { id: &#x27;1&#x27; } },    { params: { id: &#x27;2&#x27; } },    { params: { id: &#x27;3&#x27; } }  ];}export function GET({ params }: APIContext) {  return new Response(    JSON.stringify({ id: params.id }),  );}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>




<p>When routes are rendered on demand, <code dir="auto">params</code> can be any value matching the path segments in the dynamic route pattern.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/posts/[id].astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> { getPost } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">../api</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">post</span><span style="--0:#C792EA;--1:#8D46B4"> = await </span><span style="--0:#82AAFF;--1:#3C63B3">getPost</span><span style="--0:#D6DEEB;--1:#403F53">(</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">params</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">id</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// No posts found with this ID</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">if</span><span style="--0:#D6DEEB;--1:#403F53"> (</span><span style="--0:#C792EA;--1:#8D46B4">!</span><span style="--0:#D6DEEB;--1:#403F53">post) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">redirect</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">/404</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">post</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">name</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { getPost } from &#x27;../api&#x27;;const post = await getPost(Astro.params.id);// No posts found with this IDif (!post) {  return Astro.redirect(&#x22;/404&#x22;)}---<html>  <h1>{post.name}</h1></html>"><div></div></button></div></figure></div>
<p>See also: <a href="/en/reference/routing-reference/#params"><code dir="auto">params</code></a></p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="url"><code dir="auto">url</code></h3><a class="anchor-link" href="#url"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled url</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">URL</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@1.0.0</code>
	
	
</span></p>
<p><code dir="auto">url</code> is a <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL">URL</a> object constructed from the current <code dir="auto">request.url</code> value. It is useful for interacting with individual properties of the request URL, like pathname and origin.</p>
<p><code dir="auto">Astro.url</code> is equivalent to doing <code dir="auto">new URL(Astro.request.url)</code>.</p>
<p><code dir="auto">url</code> will be a <code dir="auto">localhost</code> URL in dev mode. When building a site, prerendered routes will receive a URL based on the <a href="/en/reference/configuration-reference/#site"><code dir="auto">site</code></a> and <a href="/en/reference/configuration-reference/#base"><code dir="auto">base</code></a> options. If <code dir="auto">site</code> is not configured, prerendered pages will receive a <code dir="auto">localhost</code> URL during builds as well.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">The current URL is: </span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">url</span></mark><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">The current URL pathname is: </span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">url</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">pathname</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">The current URL origin is: </span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">url</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">origin</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<h1>The current URL is: {Astro.url}</h1><h1>The current URL pathname is: {Astro.url.pathname}</h1><h1>The current URL origin is: {Astro.url.origin}</h1>"><div></div></button></div></figure></div>
<p>You can also use <code dir="auto">url</code> to create new URLs by passing it as an argument to <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"><code dir="auto">new URL()</code></a>.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// Example: Construct a canonical URL using your production domain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">canonicalURL</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#C792EA;--1:#8D46B4"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">url</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">pathname</span><span style="--0:#C792EA;--1:#8D46B4">, </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">site</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// Example: Construct a URL for SEO meta tags using your current domain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">socialImageURL</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#C792EA;--1:#8D46B4"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">/images/preview.png</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#C792EA;--1:#8D46B4">, </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">url</span></mark><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">link</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">rel</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">canonical</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4"> </span><span style="--0:#C5E478;--1:#3C63B3">href</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">canonicalURL</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#7FDBCA;--1:#8D46B4"> /></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">meta</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">property</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">og:image</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4"> </span><span style="--0:#C5E478;--1:#3C63B3">content</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">socialImageURL</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#7FDBCA;--1:#8D46B4"> /></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---// Example: Construct a canonical URL using your production domainconst canonicalURL = new URL(Astro.url.pathname, Astro.site);// Example: Construct a URL for SEO meta tags using your current domainconst socialImageURL = new URL(&#x27;/images/preview.png&#x27;, Astro.url);---<link rel=&#x22;canonical&#x22; href={canonicalURL} /><meta property=&#x22;og:image&#x22; content={socialImageURL} />"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="site"><code dir="auto">site</code></h3><a class="anchor-link" href="#site"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled site</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">URL | undefined</code></p></p>
<p><code dir="auto">site</code> returns a <code dir="auto">URL</code> made from <code dir="auto">site</code> in your Astro config. It returns <code dir="auto">undefined</code> if you have not set a value for <a href="/en/reference/configuration-reference/#site"><code dir="auto">site</code></a> in your Astro config.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">link</span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C5E478;--1:#3C63B3">rel</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">alternate</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C5E478;--1:#3C63B3">type</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">application/rss+xml</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C5E478;--1:#3C63B3">title</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">Your Site's Title</span><span style="--0:#D9F5DD;--1:#111111">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C5E478;--1:#3C63B3">href</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#7FDBCA;--1:#8D46B4"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">rss.xml</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4">, </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">site</span></mark><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#DD6B68;--1:#B73936">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#8D46B4">/></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<link    rel=&#x22;alternate&#x22;    type=&#x22;application/rss+xml&#x22;    title=&#x22;Your Site&#x27;s Title&#x22;    href={new URL(&#x22;rss.xml&#x22;, Astro.site)}/>"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="clientaddress"><code dir="auto">clientAddress</code></h3><a class="anchor-link" href="#clientaddress"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled clientAddress</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@1.0.0</code>
	
	
</span></p>
<p><code dir="auto">clientAddress</code> specifies the <a href="https://en.wikipedia.org/wiki/IP_address">IP address</a> of the request. This property is only available for routes rendered on demand and cannot be used on prerendered pages.</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-639" id="tab-639" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.clientAddress
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-640" id="tab-640" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.clientAddress
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-639" aria-labelledby="tab-639" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/ip-address.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export const </span><span style="--0:#82AAFF;--1:#3C63B3">prerender</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#FF5874;--1:#A54A4A">false</span><span style="--0:#D6DEEB;--1:#403F53">; </span><span style="--0:#809191;--1:#5E6578">// Not needed in 'server' mode</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Your IP address is: </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">span</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">class</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">address</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4">></span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">clientAddress</span></mark><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">span</span><span style="--0:#7FDBCA">>&#x3C;/</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---export const prerender = false; // Not needed in &#x27;server&#x27; mode---<div>Your IP address is: <span class=&#x22;address&#x22;>{Astro.clientAddress}</span></div>"><div></div></button></div></figure></div>
</div><div id="tab-panel-640" aria-labelledby="tab-640" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/ip-address.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export const </span><span style="--0:#82AAFF;--1:#3C63B3">prerender</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#FF5874;--1:#A54A4A">false</span><span style="--0:#D6DEEB;--1:#403F53">; </span><span style="--0:#809191;--1:#5E6578">// Not needed in 'server' mode</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">clientAddress</span></mark><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">Response</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D6DEEB;--1:#403F53">`</span><span style="--0:#ECC48D;--1:#3C63B3">Your IP address is: </span><span style="--0:#DD6B68;--1:#B73936">${</span><mark><span style="--0:#D6DEEB;--1:#403F53">clientAddress</span></mark><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#D6DEEB;--1:#403F53">`</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export const prerender = false; // Not needed in &#x27;server&#x27; modeimport type { APIContext } from &#x27;astro&#x27;;export function GET({ clientAddress }: APIContext) {  return new Response(&#x60;Your IP address is: ${clientAddress}&#x60;);}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>




<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="isprerendered"><code dir="auto">isPrerendered</code></h3><a class="anchor-link" href="#isprerendered"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled isPrerendered</span></a></div>
<p><p><strong>Type</strong>: <code dir="auto">boolean</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@5.0.0</code>
	<span class="sl-badge default small astro-4zuixnj2">New</span>
	
</span></p>
<p>A boolean representing whether or not the current page is prerendered.</p>
<p>You can use this property to run conditional logic in middleware, for example, to avoid accessing headers in prerendered pages.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="generator"><code dir="auto">generator</code></h3><a class="anchor-link" href="#generator"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled generator</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@1.0.0</code>
	
	
</span></p>
<p><code dir="auto">generator</code> provides the current version of Astro your project is running. This is a convenient way to add a <a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-generator"><code dir="auto">&#x3C;meta name="generator"></code></a> tag with your current version of Astro. It follows the format <code dir="auto">"Astro v5.x.x"</code>.</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-641" id="tab-641" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.generator
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-642" id="tab-642" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.generator
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-641" aria-labelledby="tab-641" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/site-info.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">head</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">meta</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">name</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">generator</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4"> </span><span style="--0:#C5E478;--1:#3C63B3">content</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">generator</span></mark><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#7FDBCA;--1:#8D46B4"> /></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">head</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">footer</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Built with </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">href</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">https://astro.build</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4">></span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#7FDBCA;--1:#086164">generator</span></mark><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA">>&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">footer</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">body</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">html</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<html>  <head>    <meta name=&#x22;generator&#x22; content={Astro.generator} />  </head>  <body>    <footer>      <p>Built with <a href=&#x22;https://astro.build&#x22;>{Astro.generator}</a></p>    </footer>  </body></html>"><div></div></button></div></figure></div>
</div><div id="tab-panel-642" aria-labelledby="tab-642" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/site-info.json.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">generator</span></mark><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--1:#403F53"><span style="--0:#D6DEEB"> </span><span style="--0:#D7DBE0">site</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">body</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#82AAFF;--1:#3C63B3">JSON</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">stringify</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#C792EA;--1:#8D46B4">{ </span><mark><span style="--0:#D6DEEB;--1:#403F53">generator</span></mark><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#C792EA;--1:#8D46B4"> </span><span style="--0:#D6DEEB;--1:#403F53">site</span><span style="--0:#C792EA;--1:#8D46B4"> }</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">Response</span><span style="--0:#D6DEEB;--1:#403F53">(body);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ generator, site }: APIContext) {  const body = JSON.stringify({ generator, site });  return new Response(body);}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>




<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="request"><code dir="auto">request</code></h3><a class="anchor-link" href="#request"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled request</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">Request</code></p></p>
<p><code dir="auto">request</code> is a standard <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request">Request</a> object. It can be used to get the <code dir="auto">url</code>, <code dir="auto">headers</code>, <code dir="auto">method</code>, and even the body of the request.</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-643" id="tab-643" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.request
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-644" id="tab-644" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.request
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-643" aria-labelledby="tab-643" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro" class="wrap" style="--ecMaxLine:79ch"><code><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Received a </span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">request</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">method</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#D6DEEB;--1:#403F53"> request to "</span><span style="--0:#DD6B68;--1:#B73936">{</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">request</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#D6DEEB;--1:#403F53">".</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Received request headers:</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">>&#x3C;</span><span style="--0:#CAECE6">code</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#82AAFF;--1:#3C63B3">JSON</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">stringify</span><span style="--0:#D6DEEB;--1:#403F53">(Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">fromEntries</span><span style="--0:#D6DEEB;--1:#403F53">(</span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">request</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">headers</span><span style="--0:#D6DEEB;--1:#403F53">))</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">code</span><span style="--0:#7FDBCA">>&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<p>Received a {Astro.request.method} request to &#x22;{Astro.request.url}&#x22;.</p><p>Received request headers:</p><p><code>{JSON.stringify(Object.fromEntries(Astro.request.headers))}</code></p>"><div></div></button></div></figure></div>
</div><div id="tab-panel-644" aria-labelledby="tab-644" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">request</span></mark><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">Response</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D6DEEB;--1:#403F53">`</span><span style="--0:#ECC48D;--1:#3C63B3">Hello </span><span style="--0:#DD6B68;--1:#B73936">${</span><mark><span style="--0:#D6DEEB;--1:#403F53">request</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#D6DEEB;--1:#403F53">`</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ request }: APIContext) {  return new Response(&#x60;Hello ${request.url}&#x60;);}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>




<aside aria-label="Note" class="starlight-aside starlight-aside--note"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path></svg>Note</p><div class="starlight-aside__content"><p>On prerendered pages, <code dir="auto">request.url</code> does not contain search parameters, like <code dir="auto">?type=new</code>, as it’s not possible to determine them ahead of time during static builds. However, <code dir="auto">request.url</code> does contain search parameters for pages rendered on-demand as they can be determined from a server request.</p></div></aside>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="response"><code dir="auto">response</code></h3><a class="anchor-link" href="#response"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled response</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">ResponseInit &#x26; { readonly headers: Headers }</code></p></p>
<p><code dir="auto">response</code> is a standard <code dir="auto">ResponseInit</code> object. It has the following structure.</p>
<ul>
<li><code dir="auto">status</code>: The numeric status code of the response, e.g., <code dir="auto">200</code>.</li>
<li><code dir="auto">statusText</code>: The status message associated with the status code, e.g., <code dir="auto">'OK'</code>.</li>
<li><code dir="auto">headers</code>: A <a href="https://developer.mozilla.org/en-US/docs/Web/API/Headers"><code dir="auto">Headers</code></a> instance that you can use to set the HTTP headers of the response.</li>
</ul>
<p><code dir="auto">Astro.response</code> is used to set the <code dir="auto">status</code>, <code dir="auto">statusText</code>, and <code dir="auto">headers</code> for a page’s response.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">if</span><span style="--0:#D6DEEB;--1:#403F53"> (condition) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">response</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">status</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">404</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">response</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">statusText</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Not found</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---if (condition) {  Astro.response.status = 404;  Astro.response.statusText = &#x27;Not found&#x27;;}---"><div></div></button></div></figure></div>
<p>Or to set a header:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">response</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">headers</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">set</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">Set-Cookie</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">a=b; Path=/;</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---Astro.response.headers.set(&#x27;Set-Cookie&#x27;, &#x27;a=b; Path=/;&#x27;);---"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="redirect"><code dir="auto">redirect()</code></h3><a class="anchor-link" href="#redirect"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled redirect()</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(path: string, status?: number) =&gt; Response</code></p><span>
	<strong>Added in:</strong>
	<code>astro@1.5.0</code>
	
	
</span></p>
<p><code dir="auto">redirect()</code> returns a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response">Response</a> object that allows you to redirect to another page, and optionally provide an <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages">HTTP response status code</a> as a second parameter.</p>
<p>A page (and not a child component) must <code dir="auto">return</code> the result of <code dir="auto">Astro.redirect()</code> for the redirect to occur.</p>
<p>For statically-generated routes, this will produce a client redirect using a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#http-equiv"><code dir="auto">&#x3C;meta http-equiv="refresh"></code> tag</a> and does not support status codes.</p>
<p>For on-demand rendered routes, setting a custom status code is supported when redirecting. If not specified, redirects will be served with a <code dir="auto">302</code> status code.</p>
<p>The following example redirects a user to a login page:</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-645" id="tab-645" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.redirect()
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-646" id="tab-646" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.redirect()
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-645" aria-labelledby="tab-645" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/account.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> { isLoggedIn } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">../utils</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">cookie</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">request</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">headers</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">get</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">cookie</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// If the user is not logged in, redirect them to the login page</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">if</span><span style="--0:#D6DEEB;--1:#403F53"> (</span><span style="--0:#C792EA;--1:#8D46B4">!</span><span style="--0:#82AAFF;--1:#3C63B3">isLoggedIn</span><span style="--0:#D6DEEB;--1:#403F53">(cookie)) {</span></div></div><div class="ec-line highlight mark"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#773b98">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#d2a7ee;--1:#63317f">.</span><span style="--0:#96b7ff;--1:#2a467e">redirect</span></mark><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#834442">/login</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">User information</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { isLoggedIn } from &#x27;../utils&#x27;;const cookie = Astro.request.headers.get(&#x27;cookie&#x27;);// If the user is not logged in, redirect them to the login pageif (!isLoggedIn(cookie)) {  return Astro.redirect(&#x27;/login&#x27;);}---<p>User information</p>"><div></div></button></div></figure></div>
</div><div id="tab-panel-646" aria-labelledby="tab-646" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">redirect</span></mark><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--1:#403F53"><span style="--0:#D6DEEB"> </span><span style="--0:#D7DBE0">request</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">cookie</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#D6DEEB;--1:#403F53">request</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">headers</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">get</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">cookie</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">if</span><span style="--0:#D6DEEB;--1:#403F53"> (</span><span style="--0:#C792EA;--1:#8D46B4">!</span><span style="--0:#82AAFF;--1:#3C63B3">isLoggedIn</span><span style="--0:#D6DEEB;--1:#403F53">(cookie)) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#82AAFF;--1:#335497">redirect</span></mark><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">/login</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">302</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">} </span><span style="--0:#C792EA;--1:#8D46B4">else</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#809191;--1:#5E6578">// return user information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ redirect, request }: APIContext) {  const cookie = request.headers.get(&#x27;cookie&#x27;);  if (!isLoggedIn(cookie)) {    return redirect(&#x27;/login&#x27;, 302);  } else {    // return user information  }}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>




<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="rewrite"><code dir="auto">rewrite()</code></h3><a class="anchor-link" href="#rewrite"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled rewrite()</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(rewritePayload: string | URL | Request) =&gt; Promise&lt;Response&gt;</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@4.13.0</code>
	
	
</span></p>
<p><code dir="auto">rewrite()</code> allows you to serve content from a different URL or path without redirecting the browser to a new page.</p>
<p>The method accepts either a string, a <code dir="auto">URL</code>, or a <code dir="auto">Request</code> for the location of the path.</p>
<p>Use a string to provide an explicit path:</p>

<script>
(() => {
	class StarlightTabsRestore extends HTMLElement {
		connectedCallback() {
			const starlightTabs = this.closest('starlight-tabs');
			if (!(starlightTabs instanceof HTMLElement) || typeof localStorage === 'undefined') return;
			const syncKey = starlightTabs.dataset.syncKey;
			if (!syncKey) return;
			const label = localStorage.getItem(`starlight-synced-tabs__${syncKey}`);
			if (!label) return;
			const tabs = [...starlightTabs?.querySelectorAll('[role="tab"]')];
			const tabIndexToRestore = tabs.findIndex(
				(tab) => tab instanceof HTMLAnchorElement && tab.textContent?.trim() === label
			);
			const panels = starlightTabs?.querySelectorAll(':scope > [role="tabpanel"]');
			const newTab = tabs[tabIndexToRestore];
			const newPanel = panels[tabIndexToRestore];
			if (tabIndexToRestore < 1 || !newTab || !newPanel) return;
			tabs[0]?.setAttribute('aria-selected', 'false');
			tabs[0]?.setAttribute('tabindex', '-1');
			panels?.[0]?.setAttribute('hidden', 'true');
			newTab.removeAttribute('tabindex');
			newTab.setAttribute('aria-selected', 'true');
			newPanel.removeAttribute('hidden');
		}
	}
	customElements.define('starlight-tabs-restore', StarlightTabsRestore);
})()
</script>

<starlight-tabs data-sync-key="rewrite" class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-647" id="tab-647" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.rewrite()
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-648" id="tab-648" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.rewrite()
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-647" aria-labelledby="tab-647" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#82AAFF;--1:#335497">rewrite</span></mark><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">/login</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---return Astro.rewrite(&#x22;/login&#x22;)---"><div></div></button></div></figure></div>
</div><div id="tab-panel-648" aria-labelledby="tab-648" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">rewrite</span></mark><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><mark><span style="--0:#82AAFF;--1:#335497">rewrite</span></mark><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">/login</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ rewrite }: APIContext) {  return rewrite(&#x27;/login&#x27;);}"><div></div></button></div></figure></div>
</div>
	<starlight-tabs-restore class="astro-i74rryjx"></starlight-tabs-restore>
</starlight-tabs>




<p>Use a <code dir="auto">URL</code> type when you need to construct the URL path for the rewrite. The following example renders a page’s parent path by creating a new URL from the relative  <code dir="auto">"../"</code> path:</p>



<starlight-tabs data-sync-key="rewrite" class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-649" id="tab-649" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.rewrite()
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-650" id="tab-650" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.rewrite()
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-649" aria-labelledby="tab-649" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/blog/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">rewrite</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">../</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#D6DEEB;--1:#403F53">))</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---return Astro.rewrite(new URL(&#x22;../&#x22;, Astro.url))---"><div></div></button></div></figure></div>
</div><div id="tab-panel-650" aria-labelledby="tab-650" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D6DEEB">{ </span><span style="--0:#D7DBE0">rewrite</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">rewrite</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">../</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#D6DEEB;--1:#403F53">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ rewrite }: APIContext) {  return rewrite(new URL(&#x22;../&#x22;, Astro.url));}"><div></div></button></div></figure></div>
</div>
	<starlight-tabs-restore class="astro-i74rryjx"></starlight-tabs-restore>
</starlight-tabs>




<p>Use a <code dir="auto">Request</code> type for complete control of the <code dir="auto">Request</code> sent to the server for the new path. The following example sends a request to render the parent page while also providing headers:</p>



<starlight-tabs data-sync-key="rewrite" class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-651" id="tab-651" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.rewrite()
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-652" id="tab-652" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.rewrite()
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-651" aria-labelledby="tab-651" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/blog/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">rewrite</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">Request</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">../</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">, Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#D6DEEB;--1:#403F53">), {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">headers: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">x-custom-header</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#82AAFF;--1:#3C63B3">JSON</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">stringify</span><span style="--0:#D6DEEB;--1:#403F53">(Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">locals</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">someValue</span><span style="--0:#D6DEEB;--1:#403F53">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}))</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---return Astro.rewrite(new Request(new URL(&#x22;../&#x22;, Astro.url), {  headers: {    &#x22;x-custom-header&#x22;: JSON.stringify(Astro.locals.someValue)  }}))---"><div></div></button></div></figure></div>
</div><div id="tab-panel-652" aria-labelledby="tab-652" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D6DEEB">{ </span><span style="--0:#D7DBE0">rewrite</span><span style="--0:#D6DEEB"> }</span></span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">rewrite</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">Request</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">URL</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">../</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">headers: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">x-custom-header</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#82AAFF;--1:#3C63B3">JSON</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">stringify</span><span style="--0:#D6DEEB;--1:#403F53">(Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">locals</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">someValue</span><span style="--0:#D6DEEB;--1:#403F53">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ rewrite }: APIContext) {  return rewrite(new Request(new URL(&#x22;../&#x22;, Astro.url), {    headers: {      &#x22;x-custom-header&#x22;: JSON.stringify(Astro.locals.someValue)    }  }));}"><div></div></button></div></figure></div>
</div>
	<starlight-tabs-restore class="astro-i74rryjx"></starlight-tabs-restore>
</starlight-tabs>




<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="locals"><code dir="auto">locals</code></h3><a class="anchor-link" href="#locals"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled locals</span></a></div>
<p><span>
	<strong>Added in:</strong>
	<code>astro@2.4.0</code>
	
	
</span></p>
<p><code dir="auto">locals</code> is an object used to store and access arbitrary information during the lifecycle of a request. <code dir="auto">Astro.locals</code> is an object containing any values from the <code dir="auto">context.locals</code> object set by middleware. Use this to access data returned by middleware in your <code dir="auto">.astro</code> files.</p>
<p>Middleware functions can both read and write the values of <code dir="auto">context.locals</code>:</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/middleware.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { MiddlewareHandler } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export const </span><span style="--0:#82AAFF;--1:#3C63B3">onRequest</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#C792EA;--1:#8D46B4"> </span><span style="--0:#FFCB8B;--1:#111111">MiddlewareHandler</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#C792EA;--1:#8D46B4">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">locals</span></mark><span style="--0:#C792EA;--1:#8D46B4"> }, </span><span style="--0:#D7DBE0;--1:#403F53">next</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#C792EA;--1:#8D46B4"> => {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">  </span></span><span style="--0:#C792EA;--1:#8D46B4">if </span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#C792EA;--1:#8D46B4">!</span><mark><span style="--0:#D6DEEB;--1:#403F53">locals</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">title</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#C792EA;--1:#8D46B4"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><mark><span style="--0:#D6DEEB;--1:#403F53">locals</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">title</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">Default Title</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#C792EA;--1:#8D46B4">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">  </span></span><span style="--0:#C792EA;--1:#8D46B4">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">  </span></span><span style="--0:#C792EA;--1:#8D46B4">return </span><span style="--0:#82AAFF;--1:#3C63B3">next</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#C792EA;--1:#8D46B4">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { MiddlewareHandler } from &#x27;astro&#x27;;export const onRequest: MiddlewareHandler = ({ locals }, next) => {  if (!locals.title) {    locals.title = &#x22;Default Title&#x22;;  }  return next();}"><div></div></button></div></figure></div>
<p>Astro components and API endpoints can read values from <code dir="auto">locals</code> when they render:</p>



<starlight-tabs class="astro-i74rryjx">
	<div class="tablist-wrapper not-content astro-i74rryjx">
				<ul role="tablist" class="astro-i74rryjx">
					<li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-653" id="tab-653" aria-selected="true" tabindex="0" class="astro-i74rryjx">
								
								Astro.locals
							</a>
						</li><li role="presentation" class="tab astro-i74rryjx">
							<a role="tab" href="#tab-panel-654" id="tab-654" aria-selected="false" tabindex="-1" class="astro-i74rryjx">
								
								context.locals
							</a>
						</li>
				</ul>
			</div>
	<div id="tab-panel-653" aria-labelledby="tab-653" role="tabpanel">
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/Orders.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">title</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#FAF39F;--1:#111111">locals</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">title</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">title</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h1</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---const title = Astro.locals.title;---<h1>{title}</h1>"><div></div></button></div></figure></div>
</div><div id="tab-panel-654" aria-labelledby="tab-654" role="tabpanel" hidden>
	<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/hello.ts</span></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">type</span><span style="--0:#D6DEEB;--1:#403F53"> { APIContext } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">GET</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D6DEEB;--1:#403F53">{ </span><mark><span style="--0:#D7DBE0;--1:#403F53">locals</span></mark><span style="--0:#D6DEEB;--1:#403F53"> }</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">APIContext</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">Response</span><span style="--0:#D6DEEB;--1:#403F53">(</span><mark><span style="--0:#D6DEEB;--1:#403F53">locals</span></mark><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">title</span><span style="--0:#D6DEEB;--1:#403F53">); </span><span style="--0:#809191;--1:#5E6578">// "Default Title"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import type { APIContext } from &#x27;astro&#x27;;export function GET({ locals }: APIContext) {  return new Response(locals.title); // &#x22;Default Title&#x22;}"><div></div></button></div></figure></div>
</div>
	
</starlight-tabs>




<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="preferredlocale"><code dir="auto">preferredLocale</code></h3><a class="anchor-link" href="#preferredlocale"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled preferredLocale</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string | undefined</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@3.5.0</code>
	
	
</span></p>
<p><code dir="auto">preferredLocale</code> is a computed value to find the best match between your visitor’s browser language preferences and the locales supported by your site.</p>
<p>It is computed by checking the configured locales in your <a href="/en/reference/configuration-reference/#i18nlocales"><code dir="auto">i18n.locales</code></a> array and the locales supported by the user’s browser via the header <code dir="auto">Accept-Language</code>. This value is <code dir="auto">undefined</code> if no such match exists.</p>
<p>This property is only available for routes rendered on demand and cannot be used on prerendered, static pages.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="preferredlocalelist"><code dir="auto">preferredLocaleList</code></h3><a class="anchor-link" href="#preferredlocalelist"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled preferredLocaleList</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string[] | undefined</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@3.5.0</code>
	
	
</span></p>
<p><code dir="auto">preferredLocaleList</code> represents the array of all locales that are both requested by the browser and supported by your website. This produces a list of all compatible languages between your site and your visitor.</p>
<p>If none of the browser’s requested languages are found in your locales array, then the value is <code dir="auto">[]</code>. This occurs when you do not support any of your visitor’s preferred locales.</p>
<p>If the browser does not specify any preferred languages, then this value will be <a href="/en/reference/configuration-reference/#i18nlocales"><code dir="auto">i18n.locales</code></a>: all of your supported locales will be considered equally preferred by a visitor with no preferences.</p>
<p>This property is only available for routes rendered on demand and cannot be used on prerendered, static pages.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="currentlocale"><code dir="auto">currentLocale</code></h3><a class="anchor-link" href="#currentlocale"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled currentLocale</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string | undefined</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@3.5.6</code>
	
	
</span></p>
<p>The locale computed from the current URL, using the syntax specified in your <code dir="auto">locales</code> configuration. If the URL does not contain a <code dir="auto">/[locale]/</code> prefix, then the value will default to <a href="/en/reference/configuration-reference/#i18ndefaultlocale"><code dir="auto">i18n.defaultLocale</code></a>.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="getactionresult"><code dir="auto">getActionResult()</code></h3><a class="anchor-link" href="#getactionresult"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled getActionResult()</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(action: TAction) =&gt; ActionReturnType&lt;TAction&gt; | undefined</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@4.15.0</code>
	
	
</span></p>
<p><code dir="auto">getActionResult()</code> is a function that returns the result of an <a href="/en/guides/actions/">Action</a> submission. This accepts an action function as an argument (e.g. <code dir="auto">actions.logout</code>) and returns a <code dir="auto">data</code> or <code dir="auto">error</code> object when a submission is received. Otherwise, it will return <code dir="auto">undefined</code>.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> { actions } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro:actions</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">result</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#82AAFF;--1:#335497">getActionResult</span></mark><span style="--0:#D6DEEB;--1:#403F53">(actions</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">logout</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">form</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">action</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">actions</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">logout</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#7FDBCA;--1:#8D46B4">></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">button</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">type</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#ECC48D;--1:#9B504E">submit</span><span style="--0:#D9F5DD;--1:#111111">"</span><span style="--0:#7FDBCA;--1:#8D46B4">></span><span style="--0:#D6DEEB;--1:#403F53">Log out</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">button</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">form</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">result</span><span style="--0:#C792EA;--1:#8D46B4">?.</span><span style="--0:#7FDBCA;--1:#097174">error</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">&#x26;&#x26;</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">Failed to log out. Please try again.</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { actions } from &#x27;astro:actions&#x27;;const result = Astro.getActionResult(actions.logout);---<form action={actions.logout}>  <button type=&#x22;submit&#x22;>Log out</button></form>{result?.error &#x26;&#x26; <p>Failed to log out. Please try again.</p>}"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="callaction"><code dir="auto">callAction()</code></h3><a class="anchor-link" href="#callaction"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled callAction()</span></a></div>
<p><span>
	<strong>Added in:</strong>
	<code>astro@4.15.0</code>
	
	
</span></p>
<p><code dir="auto">callAction()</code> is a function used to call an Action handler directly from your Astro component. This function accepts an Action function as the first argument (e.g. <code dir="auto">actions.logout</code>) and any input that action receives as the second argument. It returns the result of the action as a promise.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/pages/index.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">import</span><span style="--0:#D6DEEB;--1:#403F53"> { actions } </span><span style="--0:#C792EA;--1:#8D46B4">from</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">astro:actions</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const { </span><span style="--0:#82AAFF;--1:#3C63B3">data</span><span style="--0:#C792EA;--1:#8D46B4">, </span><span style="--0:#82AAFF;--1:#3C63B3">error</span><span style="--0:#C792EA;--1:#8D46B4"> } = await </span><mark><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#773b98">.</span><span style="--0:#82AAFF;--1:#335497">callAction</span></mark><span style="--0:#D6DEEB;--1:#403F53">(actions</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">logout</span><span style="--0:#C792EA;--1:#8D46B4">, { userId: </span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">123</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#C792EA;--1:#8D46B4"> }</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { actions } from &#x27;astro:actions&#x27;;const { data, error } = await Astro.callAction(actions.logout, { userId: &#x27;123&#x27; });---"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="routepattern"><code dir="auto">routePattern</code></h3><a class="anchor-link" href="#routepattern"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled routePattern</span></a></div>
<p><p><strong>Type</strong>: <code dir="auto">string</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@5.0.0</code>
	<span class="sl-badge default small astro-4zuixnj2">New</span>
	
</span></p>
<p>The route pattern responsible for generating the current page or route. In file-based routing, this resembles the file path in your project used to create the route. When integrations create routes for your project, <code dir="auto">context.routePattern</code> is identical to the value for <code dir="auto">injectRoute.pattern</code>.</p>
<p>The value will start with a leading slash and look similar to the path of a page component relative to your <code dir="auto">src/pages/</code> folder without a file extension.</p>
<p>For example, the file <code dir="auto">src/pages/en/blog/[slug].astro</code> will return <code dir="auto">/en/blog/[slug]</code> for <code dir="auto">routePattern</code>. Every page on your site generated by that file (e.g. <code dir="auto">/en/blog/post-1/</code>, <code dir="auto">/en/blog/post-2/</code>, etc.) shares the same value for <code dir="auto">routePattern</code>. In the case of <code dir="auto">index.*</code> routes, the route pattern will not include the word “index.” For example, <code dir="auto">src/pages/index.astro</code> will return <code dir="auto">/</code>.</p>
<p>You can use this property to understand which route is rendering your component. This allows you to target or analyze similarly-generated page URLs together. For example, you can use it to conditionally render certain information, or collect metrics about which routes are slower.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="cookies"><code dir="auto">cookies</code></h3><a class="anchor-link" href="#cookies"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">AstroCookies</code><br/></p><span>
	<strong>Added in:</strong>
	<code>astro@1.4.0</code>
	
	
</span></p>
<p><code dir="auto">cookies</code> contains utilities for reading and manipulating cookies for <a href="/en/guides/on-demand-rendering/">routes rendered on demand</a>.</p>
<div tabindex="-1" class="heading-wrapper level-h4"><h4 id="cookie-utilities">Cookie utilities</h4><a class="anchor-link" href="#cookie-utilities"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled Cookie utilities</span></a></div>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="cookiesget"><code dir="auto">cookies.get()</code></h5><a class="anchor-link" href="#cookiesget"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies.get()</span></a></div>
<p><p><strong>Type:</strong> <code>(key: string, options?: <a href="#astrocookiegetoptions">AstroCookieGetOptions</a>) =&gt; <a href="#astrocookie-type">AstroCookie</a> | undefined</code></p></p>
<p>Gets the cookie as an <a href="#astrocookie-type"><code dir="auto">AstroCookie</code></a> object, which contains the <code dir="auto">value</code> and utility functions for converting the cookie to non-string types.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="cookieshas"><code dir="auto">cookies.has()</code></h5><a class="anchor-link" href="#cookieshas"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies.has()</span></a></div>
<p><p><strong>Type:</strong> <code>(key: string, options?: <a href="#astrocookiegetoptions">AstroCookieGetOptions</a>) =&gt; boolean</code></p></p>
<p>Whether this cookie exists. If the cookie has been set via <code dir="auto">Astro.cookies.set()</code> this will return true, otherwise, it will check cookies in the <code dir="auto">Astro.request</code>.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="cookiesset"><code dir="auto">cookies.set()</code></h5><a class="anchor-link" href="#cookiesset"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies.set()</span></a></div>
<p><p><strong>Type:</strong> <code>(key: string, value: string | object, options?: <a href="#astrocookiesetoptions">AstroCookieSetOptions</a>) =&gt; void</code></p></p>
<p>Sets the cookie <code dir="auto">key</code> to the given value. This will attempt to convert the cookie value to a string. Options provide ways to set <a href="https://www.npmjs.com/package/cookie#options-1">cookie features</a>, such as the <code dir="auto">maxAge</code> or <code dir="auto">httpOnly</code>.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="cookiesdelete"><code dir="auto">cookies.delete()</code></h5><a class="anchor-link" href="#cookiesdelete"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies.delete()</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(key: string, options?: AstroCookieDeleteOptions) => void</code></p></p>
<p>Invalidates a cookie by setting the expiration date in the past (0 in Unix time).</p>
<p>Once a cookie is “deleted” (expired), <code dir="auto">Astro.cookies.has()</code> will return <code dir="auto">false</code> and <code dir="auto">Astro.cookies.get()</code> will return an <a href="#astrocookie-type"><code dir="auto">AstroCookie</code></a> with a <code dir="auto">value</code> of <code dir="auto">undefined</code>. Options available when deleting a cookie are: <code dir="auto">domain</code>, <code dir="auto">path</code>, <code dir="auto">httpOnly</code>, <code dir="auto">sameSite</code>, and <code dir="auto">secure</code>.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="cookiesmerge"><code dir="auto">cookies.merge()</code></h5><a class="anchor-link" href="#cookiesmerge"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies.merge()</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(cookies: AstroCookies) => void</code></p></p>
<p>Merges a new <code dir="auto">AstroCookies</code> instance into the current instance. Any new cookies will be added to the current instance and any cookies with the same name will overwrite existing values.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="cookiesheaders"><code dir="auto">cookies.headers()</code></h5><a class="anchor-link" href="#cookiesheaders"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled cookies.headers()</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">() => Iterator&#x3C;string></code></p></p>
<p>Gets the header values for <code dir="auto">Set-Cookie</code> that will be sent out with the response.</p>
<div tabindex="-1" class="heading-wrapper level-h4"><h4 id="astrocookie-type"><code dir="auto">AstroCookie</code> Type</h4><a class="anchor-link" href="#astrocookie-type"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled AstroCookie Type</span></a></div>
<p>The type returned from getting a cookie via <code dir="auto">Astro.cookies.get()</code>. It has the following properties:</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="value"><code dir="auto">value</code></h5><a class="anchor-link" href="#value"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled value</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code></p></p>
<p>The raw string value of the cookie.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="json"><code dir="auto">json</code></h5><a class="anchor-link" href="#json"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled json</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">() => Record&#x3C;string, any></code></p></p>
<p>Parses the cookie value via <code dir="auto">JSON.parse()</code>, returning an object. Throws if the cookie value is not valid JSON.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="number"><code dir="auto">number</code></h5><a class="anchor-link" href="#number"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled number</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">() => number</code></p></p>
<p>Parses the cookie value as a Number. Returns NaN if not a valid number.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="boolean"><code dir="auto">boolean</code></h5><a class="anchor-link" href="#boolean"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled boolean</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">() => boolean</code></p></p>
<p>Converts the cookie value to a boolean.</p>
<div tabindex="-1" class="heading-wrapper level-h4"><h4 id="astrocookiegetoptions"><code dir="auto">AstroCookieGetOptions</code></h4><a class="anchor-link" href="#astrocookiegetoptions"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled AstroCookieGetOptions</span></a></div>
<p><span>
	<strong>Added in:</strong>
	<code>astro@4.1.0</code>
	
	
</span></p>
<p>The <code dir="auto">AstroCookieGetOption</code> interface allows you to specify options when you get a cookie.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="decode"><code dir="auto">decode</code></h5><a class="anchor-link" href="#decode"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled decode</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(value: string) => string</code></p></p>
<p>Allows customization of how a cookie is deserialized into a value.</p>
<div tabindex="-1" class="heading-wrapper level-h4"><h4 id="astrocookiesetoptions"><code dir="auto">AstroCookieSetOptions</code></h4><a class="anchor-link" href="#astrocookiesetoptions"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled AstroCookieSetOptions</span></a></div>
<p><span>
	<strong>Added in:</strong>
	<code>astro@4.1.0</code>
	
	
</span></p>
<p><code dir="auto">AstroCookieSetOptions</code> is an object that can be passed to <code dir="auto">Astro.cookies.set()</code> when setting a cookie to customize how the cookie is serialized.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="domain"><code dir="auto">domain</code></h5><a class="anchor-link" href="#domain"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled domain</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code></p></p>
<p>Specifies the domain. If no domain is set, most clients will interpret to apply to the current domain.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="expires"><code dir="auto">expires</code></h5><a class="anchor-link" href="#expires"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled expires</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">Date</code></p></p>
<p>Specifies the date on which the cookie will expire.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="httponly"><code dir="auto">httpOnly</code></h5><a class="anchor-link" href="#httponly"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled httpOnly</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean</code></p></p>
<p>If true, the cookie will not be accessible client-side.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="maxage"><code dir="auto">maxAge</code></h5><a class="anchor-link" href="#maxage"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled maxAge</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">number</code></p></p>
<p>Specifies a number, in seconds, for which the cookie is valid.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="path"><code dir="auto">path</code></h5><a class="anchor-link" href="#path"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled path</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">string</code></p></p>
<p>Specifies a subpath of the domain in which the cookie is applied.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="samesite"><code dir="auto">sameSite</code></h5><a class="anchor-link" href="#samesite"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled sameSite</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean | 'lax' | 'none' | 'strict'</code></p></p>
<p>Specifies the value of the <a href="https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7">SameSite</a> cookie header.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="secure"><code dir="auto">secure</code></h5><a class="anchor-link" href="#secure"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled secure</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">boolean</code></p></p>
<p>If true, the cookie is only set on https sites.</p>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="encode"><code dir="auto">encode</code></h5><a class="anchor-link" href="#encode"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled encode</span></a></div>
<p><p><strong>Type:</strong> <code dir="auto">(value: string) => string</code></p></p>
<p>Allows customizing how the cookie is serialized.</p>
<div tabindex="-1" class="heading-wrapper level-h3"><h3 id="deprecated-object-properties">Deprecated object properties</h3><a class="anchor-link" href="#deprecated-object-properties"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled Deprecated object properties</span></a></div>
<div tabindex="-1" class="heading-wrapper level-h4"><h4 id="astroglob"><code dir="auto">Astro.glob()</code></h4><a class="anchor-link" href="#astroglob"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled Astro.glob()</span></a></div>
<aside aria-label="Deprecated in v5.0" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z"></path></svg>Deprecated in v5.0</p><div class="starlight-aside__content"><p>Use <a href="https://vite.dev/guide/features.html#glob-import">Vite’s <code dir="auto">import.meta.glob</code></a> to query project files.</p><p><code dir="auto">Astro.glob('../pages/post/*.md')</code> can be replaced with:</p><p><code dir="auto">Object.values(await import.meta.glob('../pages/post/*.md', { eager: true }));</code></p><p>See the <a href="/en/guides/imports/#importmetaglob">imports guide</a> for more information and usage.</p></div></aside>
<p><code dir="auto">Astro.glob()</code> is a way to load many local files into your static site setup.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">src/components/my-component.astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">posts</span><span style="--0:#C792EA;--1:#8D46B4"> = await </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">glob</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">../pages/post/*.md</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">); </span><span style="--0:#809191;--1:#5E6578">// returns an array of posts that live at ./src/pages/post/*.md</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">posts</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">slice</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#F78C6C;--1:#AA0982">3</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">map</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">post</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=></span><span style="--0:#D6DEEB;--1:#403F53"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">article</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">post</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">frontmatter</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">title</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">h2</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">post</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">frontmatter</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">description</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">p</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">href</span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">post</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">url</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--0:#7FDBCA;--1:#8D46B4">></span><span style="--0:#D6DEEB;--1:#403F53">Read more</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">a</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">article</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">))</span><span style="--0:#DD6B68;--1:#B73936">}</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">div</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---const posts = await Astro.glob(&#x27;../pages/post/*.md&#x27;); // returns an array of posts that live at ./src/pages/post/*.md---<div>{posts.slice(0, 3).map((post) => (  <article>    <h2>{post.frontmatter.title}</h2>    <p>{post.frontmatter.description}</p>    <a href={post.url}>Read more</a>  </article>))}</div>"><div></div></button></div></figure></div>
<p><code dir="auto">.glob()</code> only takes one parameter: a relative URL glob of which local files you’d like to import. It’s asynchronous and returns an array of the exports from matching files.</p>
<p><code dir="auto">.glob()</code> can’t take variables or strings that interpolate them, as they aren’t statically analyzable. (See <a href="/en/guides/imports/#supported-values">the imports guide</a> for a workaround.) This is because <code dir="auto">Astro.glob()</code> is a wrapper of Vite’s <a href="https://vite.dev/guide/features.html#glob-import"><code dir="auto">import.meta.glob()</code></a>.</p>
<aside aria-label="Note" class="starlight-aside starlight-aside--note"><p class="starlight-aside__title" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="starlight-aside__icon"><path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"></path></svg>Note</p><div class="starlight-aside__content"><p>You can also use <code dir="auto">import.meta.glob()</code> itself in your Astro project. You may want to do this when:</p><ul>
<li>You need this feature in a file that isn’t <code dir="auto">.astro</code>, like an API route. <code dir="auto">Astro.glob()</code> is only available in <code dir="auto">.astro</code> files, while <code dir="auto">import.meta.glob()</code> is available anywhere in the project.</li>
<li>You don’t want to load each file immediately. <code dir="auto">import.meta.glob()</code> can return functions that import the file content, rather than returning the content itself. Note that this import includes all styles and scripts for any imported files. These will be bundled and added to the page whether or not a file is actually used, as this is decided by static analysis, not at runtime.</li>
<li>You want access to each file’s path. <code dir="auto">import.meta.glob()</code> returns a map of a file’s path to its content, while <code dir="auto">Astro.glob()</code> returns a list of content.</li>
<li>You want to pass multiple patterns; for example, you want to add a “negative pattern” that filters out certain files. <code dir="auto">import.meta.glob()</code> can optionally take an array of glob strings, rather than a single string.</li>
</ul><p>Read more in the <a href="https://vite.dev/guide/features.html#glob-import">Vite documentation</a>.</p></div></aside>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="markdown-files">Markdown Files</h5><a class="anchor-link" href="#markdown-files"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled Markdown Files</span></a></div>
<p>Markdown files loaded with <code dir="auto">Astro.glob()</code> return the following <code dir="auto">MarkdownInstance</code> interface:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">interface</span><span style="--0:#D6DEEB;--1:#403F53"> MarkdownInstance&#x3C;</span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">extends</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">Record</span><span style="--0:#D6DEEB;--1:#403F53">&#x3C;</span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">any</span><span style="--0:#D6DEEB;--1:#403F53">>> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* Any data specified in this file's YAML frontmatter */</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">frontmatter</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* The absolute file path of this file */</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">file</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* The rendered path of this file */</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">url</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">|</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">undefined</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* Astro Component that renders the contents of this file */</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">Content</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">AstroComponentFactory</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/** (Markdown only) Raw Markdown file content, excluding layout HTML and YAML frontmatter */</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">rawContent</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/** (Markdown only) Markdown file compiled to HTML, excluding layout HTML */</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">compiledContent</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* Function that returns an array of the h1...h6 elements in this file */</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">getHeadings</span><span style="--0:#D9F5DD;--1:#111111">()</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">Promise</span><span style="--0:#D6DEEB;--1:#403F53">&#x3C;{ depth</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">number</span><span style="--0:#D6DEEB;--1:#403F53">; slug</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">; text</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53"> }[]>;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">default</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">AstroComponentFactory</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export interface MarkdownInstance<T extends Record<string, any>> {  /* Any data specified in this file&#x27;s YAML frontmatter */  frontmatter: T;  /* The absolute file path of this file */  file: string;  /* The rendered path of this file */  url: string | undefined;  /* Astro Component that renders the contents of this file */  Content: AstroComponentFactory;  /** (Markdown only) Raw Markdown file content, excluding layout HTML and YAML frontmatter */  rawContent(): string;  /** (Markdown only) Markdown file compiled to HTML, excluding layout HTML */  compiledContent(): string;  /* Function that returns an array of the h1...h6 elements in this file */  getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;  default: AstroComponentFactory;}"><div></div></button></div></figure></div>
<p>You can optionally provide a type for the <code dir="auto">frontmatter</code> variable using a TypeScript generic.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">interface</span><span style="--0:#D6DEEB;--1:#403F53"> Frontmatter {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">title</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">description</span><span style="--0:#7FDBCA;--1:#097174">?:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">posts</span><span style="--0:#C792EA;--1:#8D46B4"> = await </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">glob</span><span style="--0:#C792EA;--1:#8D46B4">&#x3C;</span><span style="--0:#FFCB8B;--1:#111111">Frontmatter</span><span style="--0:#C792EA;--1:#8D46B4">></span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">../pages/post/*.md</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671">---</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">ul</span><span style="--0:#7FDBCA">></span></span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">posts</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">map</span><span style="--1:#403F53"><span style="--0:#D6DEEB">(</span><span style="--0:#D7DBE0">post</span><span style="--0:#D6DEEB"> </span></span><span style="--0:#C792EA;--1:#8D46B4">=></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;</span><span style="--0:#CAECE6">li</span><span style="--0:#7FDBCA">></span></span><span style="--0:#DD6B68;--1:#B73936">{</span><span style="--0:#D6DEEB;--1:#403F53">post</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">frontmatter</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">title</span><span style="--0:#DD6B68;--1:#B73936">}</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">li</span><span style="--0:#7FDBCA">></span></span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#DD6B68;--1:#B73936">}</span></div></div><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&#x3C;/</span><span style="--0:#CAECE6">ul</span><span style="--0:#7FDBCA">></span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---interface Frontmatter {  title: string;  description?: string;}const posts = await Astro.glob<Frontmatter>(&#x27;../pages/post/*.md&#x27;);---<ul>  {posts.map(post => <li>{post.frontmatter.title}</li>)}</ul>"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="astro-files">Astro Files</h5><a class="anchor-link" href="#astro-files"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled Astro Files</span></a></div>
<p>Astro files have the following interface:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">interface</span><span style="--0:#D6DEEB;--1:#403F53"> AstroInstance {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* The file path of this file */</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">file</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#809191;--1:#616671">/* The URL for this file (if it is in the pages directory) */</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">url</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">|</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C5E478;--1:#3C63B3">undefined</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">default</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">AstroComponentFactory</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export interface AstroInstance {  /* The file path of this file */  file: string;  /* The URL for this file (if it is in the pages directory) */  url: string | undefined;  default: AstroComponentFactory;}"><div></div></button></div></figure></div>
<div tabindex="-1" class="heading-wrapper level-h5"><h5 id="other-files">Other Files</h5><a class="anchor-link" href="#other-files"><span aria-hidden="true" class="anchor-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentcolor" d="m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z"></path></svg></span><span is:raw class="sr-only">Section titled Other Files</span></a></div>
<p>Other files may have various different interfaces, but <code dir="auto">Astro.glob()</code> accepts a TypeScript generic if you know exactly what an unrecognized file type contains.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#097174">--</span><span style="--0:#C792EA;--1:#8D46B4">-</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">interface</span><span style="--0:#D6DEEB;--1:#403F53"> CustomDataFile {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">default</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">Record</span><span style="--0:#D6DEEB;--1:#403F53">&#x3C;</span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">any</span><span style="--0:#D6DEEB;--1:#403F53">>;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const </span><span style="--0:#82AAFF;--1:#3C63B3">data</span><span style="--0:#C792EA;--1:#8D46B4"> = await </span><span style="--0:#D6DEEB;--1:#403F53">Astro</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">glob</span><span style="--0:#C792EA;--1:#8D46B4">&#x3C;</span><span style="--0:#FFCB8B;--1:#111111">CustomDataFile</span><span style="--0:#C792EA;--1:#8D46B4">></span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#ECC48D;--1:#9B504E">../data/**/*.js</span><span style="--0:#D9F5DD;--1:#111111">'</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#097174">--</span><span style="--0:#C792EA;--1:#8D46B4">-</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="---interface CustomDataFile {  default: Record<string, any>;}const data = await Astro.glob<CustomDataFile>(&#x27;../data/**/*.js&#x27;);---"><div></div></button></div></figure></div>
									

	
	
	
	
	
	
	<span id="docsearch-lvl0" hidden class="astro-klj6ju3r">Reference</span>
</div>
									<footer class="sl-flex astro-c3s7ay7p">
	<div class="meta sl-flex astro-c3s7ay7p">
		<div class="sl-flex astro-dvlentyv">
			<a href="https://github.com/withastro/docs/edit/main/src/content/docs/en/reference/api-reference.mdx" class="sl-flex astro-dvlentyv">
				<svg aria-hidden="true" class="astro-dvlentyv astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.2em;"><path d="M22 7.24a1 1 0 0 0-.29-.71l-4.24-4.24a1 1 0 0 0-1.1-.22 1 1 0 0 0-.32.22l-2.83 2.83L2.29 16.05a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .76-.29l10.87-10.93L21.71 8c.1-.1.17-.2.22-.33a1 1 0 0 0 0-.24v-.14l.07-.05ZM6.83 20H4v-2.83l9.93-9.93 2.83 2.83L6.83 20ZM18.17 8.66l-2.83-2.83 1.42-1.41 2.82 2.82-1.41 1.42Z"/></svg>
				Edit page
			</a>
			<a href="https://contribute.docs.astro.build/guides/i18n/" class="sl-flex astro-dvlentyv">
				<svg aria-hidden="true" class="astro-dvlentyv astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.2em;"><path fill-rule="evenodd" d="M8.516 3a.94.94 0 0 0-.941.94v1.15H2.94a.94.94 0 1 0 0 1.882h7.362a7.422 7.422 0 0 1-1.787 3.958 7.42 7.42 0 0 1-1.422-2.425.94.94 0 1 0-1.774.627 9.303 9.303 0 0 0 1.785 3.043 7.422 7.422 0 0 1-4.164 1.278.94.94 0 1 0 0 1.881 9.303 9.303 0 0 0 5.575-1.855 9.303 9.303 0 0 0 4.11 1.74l-.763 1.525a.968.968 0 0 0-.016.034l-1.385 2.77a.94.94 0 1 0 1.683.841l1.133-2.267h5.806l1.134 2.267a.94.94 0 0 0 1.683-.841l-1.385-2.769a.95.95 0 0 0-.018-.036l-3.476-6.951a.94.94 0 0 0-1.682 0l-1.82 3.639a7.423 7.423 0 0 1-3.593-1.256 9.303 9.303 0 0 0 2.27-5.203h1.894a.94.94 0 0 0 0-1.881H9.456V3.94A.94.94 0 0 0 8.516 3Zm6.426 11.794a1.068 1.068 0 0 1-.02.039l-.703 1.407h3.924l-1.962-3.924-1.24 2.478Z" clip-rule="evenodd"/></svg> Translate this page
			</a>
		</div>


		
	</div>
	<div class="pagination-links astro-73uphqff" dir="ltr">
	<a href="/en/reference/routing-reference/" rel="prev" class="astro-73uphqff">
				<svg aria-hidden="true" class="astro-73uphqff astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"/></svg>
				<span class="astro-73uphqff">
					Previous
					<br class="astro-73uphqff">
					<span class="link-title astro-73uphqff">Routing Reference</span>
				</span>
			</a>
	<a href="/en/reference/modules/astro-actions/" rel="next" class="astro-73uphqff">
				<svg aria-hidden="true" class="astro-73uphqff astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"/></svg>
				<span class="astro-73uphqff">
					Next
					<br class="astro-73uphqff">
					<span class="link-title astro-73uphqff">astro:actions</span>
				</span>
			</a>
</div>

	
</footer>
<section class="sl-flex astro-m2zh2vwj">
	<a href="/en/contribute/" class="sl-flex astro-m2zh2vwj">
		<svg aria-hidden="true" class="astro-m2zh2vwj astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.2em;"><path d="M21.17 2.06A13.1 13.1 0 0 0 19 1.87a12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2 13.1 13.1 0 0 0-2.17.19 1 1 0 0 0-.83 1v12a1 1 0 0 0 1.17 1 10.9 10.9 0 0 1 8.25 1.91l.12.07h.11a.91.91 0 0 0 .7 0h.11l.12-.07A10.899 10.899 0 0 1 20.83 16 1 1 0 0 0 22 15V3a1 1 0 0 0-.83-.94ZM11 15.35a12.87 12.87 0 0 0-6-1.48H4v-10c.333-.02.667-.02 1 0a10.86 10.86 0 0 1 6 1.8v9.68Zm9-1.44h-1a12.87 12.87 0 0 0-6 1.48V5.67a10.86 10.86 0 0 1 6-1.8c.333-.02.667-.02 1 0v10.04Zm1.17 4.15a13.098 13.098 0 0 0-2.17-.19 12.94 12.94 0 0 0-7 2.05 12.94 12.94 0 0 0-7-2.05c-.727.003-1.453.066-2.17.19A1 1 0 0 0 2 19.21a1 1 0 0 0 1.17.79 10.9 10.9 0 0 1 8.25 1.91 1 1 0 0 0 1.16 0A10.9 10.9 0 0 1 20.83 20a1 1 0 0 0 1.17-.79 1 1 0 0 0-.83-1.15Z"/></svg>
		Contribute
	</a>

	<feedback-form class="astro-skt2cqnz">
	<button data-open-modal disabled class="astro-skt2cqnz">
		<svg aria-hidden="true" class="astro-skt2cqnz astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.2em;"><path d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.6l3.7 3.7a1 1 0 0 0 .7.3.8.8 0 0 0 .4 0 1 1 0 0 0 .6-1V5a3 3 0 0 0-3-3m1 16.6-2.3-2.3a1 1 0 0 0-.7-.3H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"/></svg>
		Give us feedback
	</button>

	<dialog style="padding:0" aria-label="Feedback form" class="astro-skt2cqnz">
		<div class="dialog-frame astro-skt2cqnz">
			<button data-close-modal class="astro-skt2cqnz">
				<span class="sr-only astro-skt2cqnz">Close feedback form</span>
				<svg aria-hidden="true" class="astro-skt2cqnz astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 2em;"><path d="m13.41 12 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l6.29-6.3 6.29 6.3a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12Z"/></svg>
			</button>
			<div class="select-pane astro-skt2cqnz" tabindex="-1">
				<h1 class="astro-skt2cqnz">What’s on your mind?</h1>
				<div class="select-buttons astro-skt2cqnz">
					<a class="github-button astro-skt2cqnz" href="https://github.com/withastro/docs/issues/new" target="_blank" rel="noopener noreferrer">
						<svg aria-hidden="true" class="astro-skt2cqnz astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 4;"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.08 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z"/></svg>
						<h2 class="astro-skt2cqnz">
							Create GitHub Issue
						</h2>
						<p class="astro-skt2cqnz">
							Quickest way to alert our team of a problem.
						</p>
					</a>
					<button data-select-feedback class="astro-skt2cqnz">
						<svg aria-hidden="true" class="astro-skt2cqnz astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 4;"><path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"/></svg>
						<h2 class="astro-skt2cqnz">
							Send us feedback
						</h2>
						<p class="astro-skt2cqnz">
							Send us a message directly.
						</p>
					</button>
				</div>
			</div>
			<form hidden class="astro-skt2cqnz">
				<button data-back-button class="astro-skt2cqnz">
					<span class="sr-only astro-skt2cqnz">Close feedback form</span>
					<svg aria-hidden="true" class="astro-skt2cqnz astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1em;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"/></svg>
				</button>
				<h1 class="astro-skt2cqnz">Send us feedback</h1>
				<fieldset class="category-options astro-skt2cqnz">
					<legend class="sr-only astro-skt2cqnz">Choose feedback category</legend>
					<span class="category-option astro-skt2cqnz">
								<input class="sr-only astro-skt2cqnz" id="issue3kg6m6v" type="radio" name="category" value="issue" checked>
								<label for="issue3kg6m6v" class="astro-skt2cqnz">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" class="astro-skt2cqnz">
										<path d="M12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.67 1.47-8.05-14a3 3 0 0 0-5.24 0l-8 14A3 3 0 0 0 3.94 22h16.12a3 3 0 0 0 2.61-4.53Zm-1.73 2a1 1 0 0 1-.88.51H3.94a1 1 0 0 1-.88-.51 1 1 0 0 1 0-1l8-14a1 1 0 0 1 1.78 0l8.05 14a1 1 0 0 1 .05 1.02v-.02ZM12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" class="astro-skt2cqnz"></path>
									</svg>
									<span class="astro-skt2cqnz">Issue</span>
								</label>
							</span><span class="category-option astro-skt2cqnz">
								<input class="sr-only astro-skt2cqnz" id="idea3kg6m6v" type="radio" name="category" value="idea">
								<label for="idea3kg6m6v" class="astro-skt2cqnz">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" class="astro-skt2cqnz">
										<path d="M17.09 2.82A8 8 0 0 0 5.86 14.13c.7.8 1.1 1.8 1.14 2.87v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2.81c.03-1.17.46-2.3 1.22-3.19a8 8 0 0 0-1.13-11.2v.02ZM15 20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1h6v1Zm1.67-7.24c-1 1.2-1.6 2.68-1.67 4.24h-2v-3a1 1 0 0 0-2 0v3H9a6.5 6.5 0 0 0-1.6-4.16 6 6 0 1 1 9.27-.08Z" class="astro-skt2cqnz"></path>
									</svg>
									<span class="astro-skt2cqnz">Idea</span>
								</label>
							</span><span class="category-option astro-skt2cqnz">
								<input class="sr-only astro-skt2cqnz" id="other3kg6m6v" type="radio" name="category" value="other">
								<label for="other3kg6m6v" class="astro-skt2cqnz">
									<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" class="astro-skt2cqnz">
										<path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" class="astro-skt2cqnz"></path>
									</svg>
									<span class="astro-skt2cqnz">Other</span>
								</label>
							</span>
				</fieldset>
				<label for="textarea3kg6m6v" class="sr-only astro-skt2cqnz">
					Message
				</label>
				<textarea id="textarea3kg6m6v" name="text" cols="34" rows="3" required placeholder="What do you want us to know?" class="astro-skt2cqnz"></textarea>
				<button type="submit" class="astro-skt2cqnz">Submit feedback</button>
				<a href="https://astro.build/privacy/" style="text-decoration: underline; align-self: start; color: var(--sl-color-text-accent);" target="_blank" rel="noopener" class="astro-skt2cqnz">
					Privacy Policy
				</a>
			</form>
			<div class="success-pane astro-skt2cqnz" hidden tabindex="-1">
				<img src="/_astro/houston-happy.fP8mBnGj.webp" alt="" width="128" height="128" class="astro-skt2cqnz">
				<p class="astro-skt2cqnz">
					Thanks! We received your feedback.
				</p>
			</div>
		</div>
	</dialog>
</feedback-form>

<script type="module">class p extends HTMLElement{constructor(){super();const n=this.querySelector("button[data-open-modal]"),h=this.querySelector("button[data-close-modal]"),b=this.querySelector("button[data-back-button]"),r=this.querySelector('button[type="submit"]'),i=this.querySelector("dialog"),f=this.querySelector(".dialog-frame"),m=this.querySelector("div.select-pane"),t=this.querySelector("form"),a=this.querySelector("div.success-pane"),d=this.querySelector("a.github-button"),y=this.querySelector("button[data-select-feedback]"),o=e=>{m.hidden=e!=="select",t.hidden=e!=="form",a.hidden=e!=="success",a.hidden||a.focus()},l=e=>{f.contains(e.target)||u()},k=e=>{o("select"),i.showModal(),t.querySelector("input:checked")?.focus(),e.stopPropagation(),window.addEventListener("click",l)},u=()=>{i.close(),window.removeEventListener("click",l)};n.addEventListener("click",k),h.addEventListener("click",u),b.addEventListener("click",()=>{o("select")}),d.addEventListener("click",()=>{const e=new URL("https://github.com/withastro/docs/issues/new"),s={issue:"⚠️ Issue",idea:"💡 Idea",other:"🐠 Feedback"};if(t.category.value in s){const c=s[t.category.value];e.searchParams.set("title",c)}t.text.value&&e.searchParams.set("body",t.text.value),d.href=e.href}),y.addEventListener("click",()=>{o("form")}),t.addEventListener("submit",async e=>{e.preventDefault(),r.disabled=!0;try{const s=await fetch("https://api.feedback.fish/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectId:"1b24b5d16c81bd",text:t.text.value,category:t.category.value,metadata:{url:location.pathname.replace(/\/$/,"")}})});if(!s.ok)throw new Error(s.statusText);const c=await s.json();if(c.error)throw new Error(c.error)}catch(s){console.error(`Error submitting feedback form
`,s)}o("success"),r.disabled=!1,t.reset()}),n.disabled=!1}}customElements.define("feedback-form",p);</script>

	<a href="https://community.astro.build" class="sl-flex astro-m2zh2vwj">
		<svg aria-hidden="true" class="astro-m2zh2vwj astro-w7fkij7b" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.2em;"><path d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84m-1.41 7.46-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6 4.27 4.27 0 0 1 6 0 1 1 0 0 0 1.42 0 4.27 4.27 0 0 1 6 0 4.29 4.29 0 0 1 .08 6Z"/></svg>
		Community
	</a>
</section>
								</div>
</div>
							
				</main>
			</div>
</div>
		</div>
</div>
	</body></html>