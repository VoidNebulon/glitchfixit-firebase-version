// components/NetlifyAuthProvider.tsx

"use client";
import { useEffect } from "react";

export default function NetlifyAuthProvider() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).netlifyIdentity) {
      const netlifyIdentity = (window as any).netlifyIdentity;

      netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          netlifyIdentity.on("login", () => {
            document.location.href = "/admin";
          });
        }
      });
    }
  }, []);

  return null;
}
