'use client';

import { useEffect, useRef } from 'react';

const COORDS: [number, number] = [44.835619, 8.212942];

export default function MontarelloMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || mapInstance.current) return;

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
        zoom: 14,
        scrollWheelZoom: true,
        dragging: true,
        zoomControl: true,
        doubleClickZoom: true,
        touchZoom: true,
      });

      L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        attribution: '© Google Maps',
        maxZoom: 20,
      }).addTo(map);

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42"><path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24S24 21 24 12C24 5.373 18.627 0 12 0z" fill="#EA4335"/><circle cx="12" cy="12" r="5" fill="#fff"/></svg>`;
      const pinIcon = L.icon({
        iconUrl: `data:image/svg+xml,${encodeURIComponent(svg)}`,
        iconSize: [28, 42],
        iconAnchor: [14, 42],
        popupAnchor: [0, -44],
      });

      L.marker(COORDS, { icon: pinIcon })
        .addTo(map)
        .bindPopup(
          "<strong>Società Agricola Montarello</strong><br/>Via Braglia 19<br/>14040 Vigliano D'Asti (AT)"
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
