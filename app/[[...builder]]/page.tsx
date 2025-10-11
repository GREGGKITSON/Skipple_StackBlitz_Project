"use client";
import { builder, BuilderComponent } from "@builder.io/react";
import { useEffect, useState } from "react";
import CTA_ready2findbin from "../../components/CTA_ready2findbin";

builder.init("a0884434efb34242b695ca795efeffe6"); // hardcode for now

export default function BuilderPage({ params }: { params: { builder?: string[] } }) {
  const [content, setContent] = useState<any>(null);
  const urlPath = "/" + (params.builder?.join("/") ?? "");

  useEffect(() => {
    async function fetchContent() {
      const result = await builder
        .get("page", { userAttributes: { urlPath } })
        .toPromise();
      setContent(result);
    }
    fetchContent();
  }, [urlPath]);

  if (!content) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <BuilderComponent model="page" content={content} />
    
           {/* Show CTA only on homepage */}
          
    </div>
  );
}
