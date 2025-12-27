// App store URLs
export const APP_STORE_URLS = {
  ios: "https://apps.apple.com/us/app/kahf-kids-for-child-parents/id6605937095",
  android: "https://play.google.com/store/apps/details?id=com.kahf.kids&pcampaignid=web_share",
} as const;

export type OS = "ios" | "android" | "unknown";

// OS Detection Function
export function detectOS(): OS {
  if (typeof window === "undefined") return "unknown";

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // iOS detection (iPhone, iPad, iPod)
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return "ios";
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return "android";
  }

  return "unknown";
}

// Get the appropriate app store URL based on OS
export function getAppStoreURL(os: OS = detectOS()): string {
  // For iOS users, send to App Store
  // For Android and unknown (desktop), send to Play Store
  return os === "ios" ? APP_STORE_URLS.ios : APP_STORE_URLS.android;
}

// Get button text based on OS
export function getAppStoreButtonText(os: OS = detectOS()): string {
  return os === "ios" ? "Download on App Store" : "Get it on Google Play";
}
