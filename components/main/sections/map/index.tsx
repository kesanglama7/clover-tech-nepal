"use client";

import { Map, MapMarker, MarkerContent, MarkerLabel, MarkerPopup } from "@/components/ui/map";
import { Navigation, MapPin, ExternalLink } from "lucide-react";

const officeLocation = {
  lng: 85.3493982,
  lat: 27.7186859,
};

export default function OfficeMap() {
  return (
    <section className="w-full bg-background pb-20">
      <div className="h-[300px] md:h-[520px] w-full relative overflow-hidden">

        <Map
          center={[officeLocation.lng, officeLocation.lat]}
          zoom={16}
          scrollZoom={false}
        >
          <MapMarker longitude={officeLocation.lng} latitude={officeLocation.lat}>

            <MarkerContent>
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
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary border-[3px] border-white shadow-lg flex items-center justify-center cursor-pointer">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>

              <MarkerLabel position="bottom">
                <span className="bg-white text-[var(--color-deep-forest)] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md border border-black/5 whitespace-nowrap">
                  Clover Tech Nepal
                </span>
              </MarkerLabel>
            </MarkerContent>

            <MarkerPopup className="w-64 p-0 bg-white">
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">
                    Our Office
                  </p>
                  <h3 className="font-semibold text-gray-900 leading-tight">
                    Clover Tech Nepal
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Chabahil, Kathmandu, Nepal
                  </p>
                </div>

                <div className="text-xs text-gray-500">
                  Mon – Fri &nbsp;·&nbsp; 9:00 AM – 6:00 PM (NPT)
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${officeLocation.lat},${officeLocation.lng}`
                      )
                    }
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-white rounded-xl text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                  >
                    <Navigation className="w-3 h-3" />
                    Directions
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps?sca_esv=7f670160f65c8184&rlz=1C1CHBF_enNP1036NP1036&output=search&q=clover+tech+nepal+in+map&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3j2nXl-YQ05KjnWz5SrU93EoculSWPsy9Mwi2OTVV6bgKvdub12BOFcl4_4rY3jzuCIC0zDKiILHp2EDIuD1_i0j6tYNdsldPiSIPdmfkbQiw_djHuibS8lVIZs6MQ9swWMIP3wg_uS3a0dPDpfiURJkpi1e1RR3uxGE8qB8gwO8l7ds6Q&entry=mc&ved=1t:200715&ictx=111`
                      )
                    }
                    className="flex items-center justify-center w-9 h-9 border border-black/10 rounded-xl hover:bg-gray-50 transition-colors"
                    aria-label="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                  </button>
                </div>
              </div>
            </MarkerPopup>

          </MapMarker>
        </Map>
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