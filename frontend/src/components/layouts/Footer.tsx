"use client";

import { useEffect, useState } from "react";

const APP_VERSION = "v1.0.0";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">MockmartAPI</span>.
          Mockmart data, real practice.
        </div>

        <div className="flex items-center gap-4 font-mono">
          <span>{time}</span>
          <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
            {APP_VERSION}
          </span>
        </div>
      </div>
    </footer>
  );
}
