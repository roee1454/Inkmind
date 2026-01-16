export const ENABLE_CDN_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" || process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? "https://cdn.enable.co.il/licenses/enable-L23490xm54kyboqr-1223-77789/init.js"
    : "https://cdn.enable.co.il/licenses/enable-L23490xm54kyboqr-1223-77791/init.js";
