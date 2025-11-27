import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-30px",
                left: "-30px",
                width: "60px",
                height: "60px",
                borderTop: "3px solid #ffffff",
                borderLeft: "3px solid #ffffff",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "60px",
                height: "60px",
                borderTop: "3px solid #ffffff",
                borderRight: "3px solid #ffffff",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "60px",
                height: "60px",
                borderBottom: "3px solid #ffffff",
                borderLeft: "3px solid #ffffff",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "60px",
                height: "60px",
                borderBottom: "3px solid #ffffff",
                borderRight: "3px solid #ffffff",
                display: "flex",
              }}
            />

            <div
              style={{
                display: "flex",
                fontSize: "220px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                textShadow: "0 0 80px rgba(255, 255, 255, 0.5)",
              }}
            >
              TG
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #ffffff)",
                display: "flex",
              }}
            />
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "#ffffff",
                borderRadius: "50%",
                display: "flex",
              }}
            />
            <div
              style={{
                width: "100px",
                height: "1px",
                background: "linear-gradient(to left, transparent, #ffffff)",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 300,
              color: "#999999",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Engineered By Curiosity
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
