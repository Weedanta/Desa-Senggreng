"use client";

import React from "react";
import { useParams } from "next/navigation";
import DetailContainer from "@/shared/detail/container/DetailContainer";
import { useUMKMDetail } from "@/shared/umkm/hooks/useUMKMDetail";

const UMKMDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  const { detailData, loading, error } = useUMKMDetail(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Memuat data UMKM...</p>
        </div>
      </div>
    );
  }

  if (error || !detailData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">UMKM Tidak Ditemukan</h2>
          <p className="text-gray-600">{error || "Data UMKM yang Anda cari tidak tersedia."}</p>
        </div>
      </div>
    );
  }

  return <DetailContainer content={detailData} />;
};

export default UMKMDetailPage;