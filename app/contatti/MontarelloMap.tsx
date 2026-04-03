'use client';

import { useEffect, useRef } from 'react';

const COORDS: [number, number] = [44.835619, 8.212942];

const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 36" width="26" height="36">
  <path d="M13 0C5.82 0 0 5.82 0 13C0 20 6 28 13 36C20 28 26 20 26 13C26 5.82 20.18 0 13 0Z" fill="#EA4335"/>
  <circle cx="13" cy="13" r="5" fill="#C5221F"/>
</svg>`;

const INLINE_STYLES = `
  /* Remove focus outline on map container */
  .leaflet-container:focus,
  .leaflet-container *:focus {
    outline: none !important;
  }
  .leaflet-container {
    -webkit-tap-highlight-color: transparent;
  }

  /* Zoom controls — Google Maps style */
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3) !important;
    border-radius: 4px !important;
    overflow: hidden;
  }
  .leaflet-control-zoom a {
    width: 28px !important;
    height: 28px !important;
    line-height: 28px !important;
    background: #fff !important;
    color: #666 !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    border: none !important;
    border-bottom: 1px solid #e6e6e6 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: background 0.15s;
  }
  .leaflet-control-zoom a:last-child {
    border-bottom: none !important;
  }
  .leaflet-control-zoom a:hover {
    background: #f5f5f5 !important;
    color: #333 !important;
  }
  .leaflet-control-zoom-in,
  .leaflet-control-zoom-out {
    font-family: Arial, sans-serif !important;
  }

  /* Attribution — small and subtle */
  .leaflet-control-attribution {
    font-size: 10px !important;
    background: rgba(255,255,255,0.75) !important;
    padding: 1px 5px !important;
    color: #555 !important;
  }
  .leaflet-control-attribution a {
    color: #555 !important;
  }

  /* Popup — Google Maps info-window style */
  .leaflet-popup-content-wrapper {
    border-radius: 8px !important;
    box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3) !important;
    padding: 0 !important;
    background: #fff !important;
  }
  .leaflet-popup-content {
    margin: 12px 16px !important;
    font-family: Arial, sans-serif !important;
    font-size: 13px !important;
    line-height: 1.5 !important;
    color: #333 !important;
  }
  .leaflet-popup-tip-container {
    display: none !important;
  }
  .leaflet-popup-close-button {
    color: #888 !important;
    font-size: 16px !important;
    padding: 4px 6px !important;
  }
  .leaflet-popup-close-button:hover {
    color: #333 !important;
  }
`;

export default function MontarelloMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || mapInstance.current) return;

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = INLINE_STYLES;
    document.head.appendChild(style);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      const L = (window as any).L;

      const map = L.map(containerRef.current, {
        center: COORDS,
        zoom: 16,
        scrollWheelZoom: true,
        dragging: true,
        zoomControl: false,
        doubleClickZoom: true,
        touchZoom: true,
      });

      // Zoom control in bottom-right (Google Maps position)
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: '© Google Maps',
        maxZoom: 20,
      }).addTo(map);

      const pinIcon = L.divIcon({
        html: `<div style="filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.45));">${PIN_SVG}</div>`,
        className: '',
        iconSize: [26, 36],
        iconAnchor: [13, 36],
        popupAnchor: [0, -38],
      });

      L.marker(COORDS, { icon: pinIcon })
        .addTo(map)
        .bindPopup(
          `<strong style="display:block;margin-bottom:2px;font-size:14px;color:#1a1a1a;">Società Agricola Montarello</strong>` +
          `<span style="color:#555;">Via Braglia 19, 14040 Vigliano d'Asti (AT)</span>`
        );

      mapInstance.current = map;
    };
    document.head.appendChild(script);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[250px] z-0" />;
}
