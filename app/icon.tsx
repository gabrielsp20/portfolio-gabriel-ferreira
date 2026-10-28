import { ImageResponse } from "next/og";
import { brand } from "../lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.green,
        color: brand.monogram,
        fontSize: 36,
        fontWeight: 700,
        letterSpacing: -3,
        lineHeight: 1,
      }}
    >
      GF
    </div>,
    size,
  );
}
