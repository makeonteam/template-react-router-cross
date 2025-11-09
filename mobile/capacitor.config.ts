import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.makeon.cross_mobile",
  appName: "Cross",
  webDir: "../out",
  plugins: {
    StatusBar: {
      overlaysWebView: true, // edge to edge under API 35
    },
  },
};

export default config;
