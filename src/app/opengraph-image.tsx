import { ImageResponse } from "next/og";
import { SITE_URL } from "@/lib/posts";

export const runtime = "edge";
export const alt = "Harenos — Rénovation IDF certifiée RGE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #1e3a2f 100%)",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.prod.website-files.com/66b4c687d49bec445509f339/66b4ef69340625108f0191a4_logo.png"
            alt="Harenos"
            width={160}
            height={40}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "54px",
            fontWeight: "800",
            color: "white",
            lineHeight: "1.05",
            letterSpacing: "-1px",
            maxWidth: "780px",
            marginBottom: "24px",
          }}
        >
          Rénovation IDF certifiée RGE
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "620px",
            marginBottom: "40px",
          }}
        >
          Entreprise générale tous corps d&apos;état — Devis gratuit — Paris & toute l&apos;Île-de-France
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["RGE", "Qualibat", "Décennale", "Devis gratuit"].map((badge) => (
            <div
              key={badge}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "999px",
                padding: "8px 20px",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
