import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect } from "react";

import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";
import appCss from "@/index.css?url";

export type RouterAppContext = Record<PropertyKey, never>;

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        title: "East Coach - Pelatihan Tenis Profesional di Makassar",
      },
      {
        name: "description",
        content:
          "East Coach adalah layanan pelatihan tenis profesional di Makassar. Program latihan terstruktur untuk pengembangan teknik, fisik, dan mental pemain dari pemula hingga kompetitif.",
      },
      {
        name: "theme-color",
        content: "#c1ff00",
      },
      {
        name: "msapplication-TileColor",
        content: "#c1ff00",
      },
    ],
    links: [
      // Stylesheet - must be first to prevent FOUC
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Primary favicon for browsers (favicon.ico contains multiple sizes including 48x48)
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://files.eastcoach.club/logo/favicon.ico",
      },
      // Legacy shortcut icon for older browsers
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "https://files.eastcoach.club/logo/favicon.ico",
      },
      // PNG favicons with explicit sizes for modern browsers
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "https://files.eastcoach.club/logo/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "https://files.eastcoach.club/logo/favicon-32x32.png",
      },
      // 192x192 is used by Google for search results (scales to 48x48)
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "https://files.eastcoach.club/logo/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "https://files.eastcoach.club/logo/android-chrome-512x512.png",
      },
      // Apple Touch Icon for iOS devices
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://files.eastcoach.club/logo/apple-touch-icon.png",
      },
      // Precomposed version for older iOS (prevents iOS from adding effects)
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "180x180",
        href: "https://files.eastcoach.club/logo/apple-touch-icon.png",
      },
      // Web App Manifest for PWA and Android
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
    ],
  }),

  component: RootDocument,
});

const ACTIVE_FAVICON = "https://files.eastcoach.club/logo/favicon.ico";
const INACTIVE_FAVICON = "https://files.eastcoach.club/logo/alt/favicon.ico";

function useFaviconVisibility() {
  useEffect(() => {
    const updateFavicon = () => {
      const favicon = document.querySelector(
        'link[rel="icon"][type="image/x-icon"]'
      ) as HTMLLinkElement | null;
      if (favicon) {
        favicon.href = document.hidden ? INACTIVE_FAVICON : ACTIVE_FAVICON;
      }
    };

    document.addEventListener("visibilitychange", updateFavicon);
    return () => {
      document.removeEventListener("visibilitychange", updateFavicon);
    };
  }, []);
}

function RootDocument() {
  useFaviconVisibility();

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* Minimal critical CSS - only CSS variables and body basics */}
        <style>
          {`:root {
            --lime: oklch(0.91 0.22 115);
            --dark: oklch(0.15 0.005 0);
            --background: oklch(1 0 0);
            --foreground: oklch(0.15 0.005 0);
          }
          body {
            background: oklch(1 0 0);
            color: oklch(0.15 0.005 0);
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }`}
        </style>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        <Outlet />
        <WhatsAppButton />
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
