Project Handover & Deployment Reference
Company: MARSTEC SDN BHD
Website: www.marstecniaga.com
Developer: Manoj Kumar
Date: April 2026
1. Domain Registration
Registrar: Namecheap
Domain Name: marstecniaga.com
Cost: ~$11.18 USD (1 Year)
Key Action: Purchased domain and enabled free WHOIS privacy.
Verification: ICANN email verification completed (essential to prevent suspension).
2. DNS Management
Provider: Cloudflare
Nameservers:
(Changed in Namecheap dashboard from BasicDNS to Custom DNS)
Current Nameservers: Provided by Cloudflare (e.g., betty.ns.cloudflare.com, kevin.ns.cloudflare.com).
Security: SSL/TLS set to "Full" or "Strict" to provide the HTTPS padlock icon.
3. Web Hosting
Platform: Cloudflare Pages (Senior's alternative to AWS S3)
Deployment Method: Connected via GitHub Repository Integration.
Automatic Build: Every time code is pushed to the main branch, the site re-deploys automatically.
Build Settings:
Framework Preset: Vite
Build Command: npm run build
Build Output Directory: dist
Node Version: 20 (set in Environment Variables)
4. Technical Code Adjustments
To move from GitHub Pages (/MarstecSdnBhd/) to a custom root domain (marstecniaga.com), the following files were updated:
vite.config.ts
code
TypeScript
// Changed base path from "/MarstecSdnBhd/" to root "/"
export default defineConfig({
  base: "/", 
  // ...
});
src/App.tsx
code
Tsx
// Removed basename from BrowserRouter
<BrowserRouter>
  <Routes>...</Routes>
</BrowserRouter>
index.html
Updated link rel="canonical" to https://www.marstecniaga.com.
Removed Lovable branding from OpenGraph and Twitter meta tags.
Set images to point to local /src/assets/logo.png.
5. SEO & Search Ranking Strategy
To ensure the site ranks #1 for "Marstec Sdn Bhd":
Google Search Console:
Domain verified via DNS TXT Record in Cloudflare.
sitemap.xml and robots.txt added to the public folder.
Google Business Profile:
Registered MARSTEC SDN BHD with the Klang office address.
Linked the website to the Map listing.
Status: Pending verification (Postcard or Phone).
Keywords:
Targeted: "Marine Engineering Klang," "Floating Pontoon Malaysia," "Jetty Construction."
6. Login Credentials (Private)
Namecheap: [Personal email]
Cloudflare: [Personal email]
GitHub: [Personal github]
Google Console: [Personal email]