const icons = {
  clipboard: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2z"/>
      <path d="M9 6h6"/>
      <path d="M8.5 13l2.5 2.5 4.5-5"/>
    </svg>
  `,
  briefcase: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 7h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/>
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
      <path d="M2 12h20"/>
    </svg>
  `,
  user: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 12a4 4 0 1 0-0.001-8.001A4 4 0 0 0 12 12z"/>
      <path d="M4 20a8 8 0 0 1 16 0"/>
    </svg>
  `,
  alert: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4v9"/>
      <path d="M12 17h.01"/>
      <path d="M5 20h14l-7-16-7 16z"/>
    </svg>
  `,
  grid: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 4h6v6H4z"/>
      <path d="M14 4h6v6h-6z"/>
      <path d="M4 14h6v6H4z"/>
      <path d="M14 14h6v6h-6z"/>
    </svg>
  `,
  folder: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
    </svg>
  `,
  checkCircle: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8.5 12.5l2.5 2.5 4.5-5"/>
    </svg>
  `,
  calendar: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 3v3M17 3v3"/>
      <rect x="4" y="6" width="16" height="14" rx="2"/>
      <path d="M4 10h16"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.18-3.36-1.18-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .85-.27 2.78 1.02.8-.22 1.66-.33 2.52-.34.86.01 1.72.12 2.52.34 1.93-1.29 2.78-1.02 2.78-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>
    </svg>
  `,
};

export function createIcon(name, className = "") {
  const wrapper = document.createElement("span");
  wrapper.className = `icon ${className}`.trim();
  wrapper.innerHTML = icons[name] || "";
  return wrapper;
}
