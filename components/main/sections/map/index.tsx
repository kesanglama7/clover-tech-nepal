"use client";

import { useState } from "react";
import { Map, MapMarker, MarkerContent } from "@/components/ui/map";
import { Navigation, MapPin, Plus, Minus } from "lucide-react";

const officeLocation = {
  lng: 85.3493982,
  lat: 27.7186859,
};

const MIN_ZOOM = 10;
const MAX_ZOOM = 20;

export default function OfficeMap() {
  const [zoom, setZoom] = useState(16);

  const handleZoom = (direction: "in" | "out") => {
    setZoom((prev) =>
      direction === "in"
        ? Math.min(prev + 1, MAX_ZOOM)
        : Math.max(prev - 1, MIN_ZOOM)
    );
  };

  return (
    <section className="w-full bg-background pb-20">
      {/* Full-width, no rounding */}
      <div className="h-[300px] md:h-[520px] w-full relative overflow-hidden">

        <Map
          center={[officeLocation.lng, officeLocation.lat]}
          zoom={zoom}
          scrollZoom={false}
        >
          <MapMarker longitude={officeLocation.lng} latitude={officeLocation.lat}>
            <MarkerContent>
              <div className="flex items-center gap-3">

                {/* Pin + 3-wave radar */}
                <div className="relative flex items-center justify-center">
                  {[0, 0.8, 1.6].map((delay, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-primary/20"
                      style={{
                        width: 64,
                        height: 64,
                        animation: `radar 2.4s ease-out infinite ${delay}s`,
                      }}
                    />
                  ))}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-primary border-[3px] border-white shadow-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Directions button */}
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${officeLocation.lat},${officeLocation.lng}`
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-body text-[11px] font-bold uppercase tracking-widest shadow-lg hover:bg-[var(--color-secondary)] transition-colors duration-300 whitespace-nowrap"
                >
                  <Navigation className="w-3 h-3" />
                  <span className="hidden sm:inline">Get Directions</span>
                  <span className="sm:hidden">Go</span>
                </button>

              </div>
            </MarkerContent>
          </MapMarker>
        </Map>

        {/* Custom zoom controls — top left */}
        <div className="absolute top-4 left-4 z-10 flex flex-col overflow-hidden rounded-lg shadow-md border border-foreground/10"
          style={{ background: "var(--color-background)" }}
        >
          <button
            onClick={() => handleZoom("in")}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
            className="w-9 h-9 flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/8 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4" />
          </button>
          <div className="h-px bg-foreground/10" />
          <button
            onClick={() => handleZoom("out")}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
            className="w-9 h-9 flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/8 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

      </div>

      <style>{`
        @keyframes radar {
          0%   { transform: scale(0.5); opacity: 0.6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
    </section>
  );
}