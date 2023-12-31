"use client";

import { useEffect, useState } from "react";

import { AuthModal } from "@/components/AuthModal";
import { SubscribeModal } from "@/components/SubscribeModal";
import { UploadModal } from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";

// interface ModalProviderProps {
//   products: ProductWithPrice[];
// }

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
 
      <UploadModal />
    </>
  );
};
