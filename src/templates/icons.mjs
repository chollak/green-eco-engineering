// Иконки в едином стиле: stroke, viewBox 24×24. Заливка задаётся через CSS.
const paths = {
  plug: '<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  gauge: '<path d="M3.5 18a10 10 0 1 1 17 0M12 14l4.5-4.5"/><circle cx="12" cy="14" r="1.6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 11.5l2 2 4-4"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  flame: '<path d="M12 22a7 7 0 0 0 7-7c0-5-4-6.5-4-11 0 0-3.5 2.2-3.5 6.2 0 2-2 1.3-2-.7 0 0-4.5 3-4.5 5.5a7 7 0 0 0 7 7z"/>',
  crane: '<path d="M4 21h16M7 21V4M7 4h3l9 4M19 8v3M13 6v4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  cable: '<path d="M4 3v7a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v3M2 3h4M18 21h4"/>',
  battery: '<rect x="2" y="7" width="15" height="10" rx="2"/><path d="M21 11v2M10.5 9.5L8 13h3.5L9 16.5"/>',
  bulb: '<path d="M9.5 18h5M10.5 22h3M12 2a6 6 0 0 0-3.8 10.6c.7.8 1.3 1.5 1.3 2.4h5c0-.9.6-1.6 1.3-2.4A6 6 0 0 0 12 2z"/>',
  tower: '<path d="M7 22L12 2l5 20M8.6 15h6.8M6.9 9h10.2M9.5 22h5"/>',
  camera: '<rect x="2" y="7" width="13" height="10" rx="2"/><path d="M15 10.5l7-3.5v10l-7-3.5z"/>',
  chart: '<path d="M3 21h18M7 21V11M12 21V4M17 21v-6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
  doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  id: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M7 15h4M7 11h6M16 9h3M16 13h3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bolt: '<path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z"/>'
}

export function icon (name, cls) {
  const body = paths[name] || paths.bolt
  return `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`
}
