import { ImageResponse } from "next/og";

export const alt = "Gabriel Ferreira — Suporte de TI, Automação e Desenvolvimento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#031429",
          color: "#E5C08D",
          padding: "72px 78px",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: -2 }}>GF</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1 }}>
            Gabriel Ferreira
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontFamily: "Arial, sans-serif",
              fontSize: 29,
              color: "#F0D2A6",
            }}
          >
            Suporte de TI • Automação • Desenvolvimento de soluções
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 2,
            background: "#D5AA70",
          }}
        />
      </div>
    ),
    size,
  );
}
