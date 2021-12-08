// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "container.svelte-id4hsm{--artboardColor:white;position:absolute;width:calc(100vw - 40px);height:calc(100vw - 40px);max-width:calc(100vh - 300px);max-height:calc(100vh - 300px)}svg.svelte-id4hsm{width:100%;height:100%;position:absolute}.grid-item.svelte-id4hsm{background:transparent;height:auto;width:100%;display:flex;justify-content:center;align-items:center}img.svelte-id4hsm{position:relative;width:100%}.svlt-grid-shadow{background:#00D1FF !important;z-index:-1;opacity:.2}.svlt-grid-item{opacity:1 !important\n  }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}