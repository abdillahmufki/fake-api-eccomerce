"use client";

import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";

type Props = {
  code: string;
  language?: string;
  title?: string;
};

export default function CodeBlock({ code, language = "json", title }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0f172a] shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-400 bg-[#020617] border-b border-gray-800">
        <span className="font-mono">
          {title || `Response (${language.toUpperCase()})`}
        </span>

        <button
          onClick={copyToClipboard}
          className="px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 transition text-gray-200"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto text-sm p-4">
        <code ref={ref} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
