import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Physiotouch Clinic Gurugram";
export const size = { width: 1200, height: 630 };

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1d4ed8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", fontSize: 64, fontWeight: 900 }}>
          Physiotouch Clinic
        </p>
        <p style={{ color: "#93c5fd", fontSize: 32 }}>
          Expert Physiotherapy · Sector 45, Gurugram
        </p>
        <p style={{ color: "#fde68a", fontSize: 28, marginTop: 20 }}>
          Book Appointment: +91 83072 10468
        </p>
      </div>
    ),
    { ...size }
  );
}