import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Portal Resmi Desa Senggreng | Wisata & UMKM Sumberpucung Malang";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0b1e36 0%, #004c8c 50%, #007ee8 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background decorative glowing circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(102, 224, 119, 0.35) 0%, rgba(0, 126, 232, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 126, 232, 0.4) 0%, rgba(102, 224, 119, 0) 70%)",
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 24px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            🏛️ Portal Resmi Pemerintah Desa Senggreng
          </div>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 10,
            maxWidth: "1000px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 16px 0",
              background: "linear-gradient(90deg, #ffffff 0%, #e6f3ff 60%, #98eaa4 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Desa Senggreng
          </h1>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#66e077",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            Kecamatan Sumberpucung &bull; Kabupaten Malang &bull; Jawa Timur
          </div>
          <p
            style={{
              fontSize: "22px",
              color: "#d0e6ff",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "850px",
            }}
          >
            Pusat Informasi Potensi Wisata Alam, Direktori Produk UMKM Unggulan, Kebudayaan Tradisional, dan Pelayanan Desa
          </p>
        </div>

        {/* Bottom Feature Badges & URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "20px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                color: "#e6f3ff",
                fontWeight: 500,
              }}
            >
              🌿 Wisata Alam
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                color: "#e6f3ff",
                fontWeight: 500,
              }}
            >
              🛍️ Produk UMKM
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
                color: "#e6f3ff",
                fontWeight: 500,
              }}
            >
              🎭 Budaya & Galeri
            </div>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#ffffff",
              backgroundColor: "rgba(0, 126, 232, 0.6)",
              padding: "8px 20px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            desa-senggreng.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
