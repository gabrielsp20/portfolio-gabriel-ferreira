import { ImageResponse } from "next/og";
import { brand } from "../lib/brand";

export const alt =
  "Gabriel Ferreira — Experiência no suporte. Automação na prática.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: brand.page,
        color: brand.green,
      }}
    >
      <div
        style={{
          display: "flex",
          background: brand.green,
          padding: "28px 64px",
          color: brand.page,
          alignItems: "center",
          gap: 24,
        }}
      >
        <span
          style={{ fontSize: 42, color: brand.monogram, letterSpacing: -3 }}
        >
          GF
        </span>
        <span style={{ fontSize: 24 }}>Gabriel Ferreira</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "58px 64px",
          flex: 1,
        }}
      >
        <span
          style={{ fontSize: 24, color: brand.secondary, marginBottom: 24 }}
        >
          SUPORTE DE TI · SERVICE DESK · AUTOMAÇÃO
        </span>
        <span style={{ fontSize: 62, lineHeight: 1.15 }}>
          Experiência no suporte.
        </span>
        <span style={{ fontSize: 62, lineHeight: 1.15 }}>
          Automação na prática.
        </span>
        <div
          style={{
            display: "flex",
            marginTop: 42,
            borderTop: `2px solid ${brand.border}`,
            paddingTop: 24,
            fontSize: 23,
            color: brand.secondary,
          }}
        >
          gabrielsferreira.com.br
        </div>
      </div>
    </div>,
    size,
  );
}
