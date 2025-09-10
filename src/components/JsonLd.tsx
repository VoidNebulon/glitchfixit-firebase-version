// src/components/JsonLd.tsx
'use client';

import { useEffect } from 'react';

type JsonLdProps = {
  data: object;
};

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const existingScript = document.getElementById('json-ld-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'json-ld-script';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('json-ld-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
}
