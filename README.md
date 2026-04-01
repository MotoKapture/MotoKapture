# MotoKapture Website
**Motorcycle Photography — Technique, Not Gear**

A Jekyll static site deployable to GitHub Pages, managed via Cloudflare.

---

## Stack
- **Jekyll 4.3** — static site generator
- **GitHub Pages** — free hosting
- **Cloudflare** — DNS, CDN, SSL (free tier)
- **Namecheap** — domain registrar

---

## Deployment — Step by Step

### 1. Create the GitHub repository

1. Go to [github.com](https://github.com) — create a new repository
2. Name it exactly: `motokapture` (or `motokapture.github.io` for a user site)
3. Set it to **Public** (required for free GitHub Pages)
4. Do NOT initialise with README (you'll push this folder)

### 2. Push this site to GitHub

In your terminal, from inside this folder:

```bash
git init
git add .
git commit -m "Initial MotoKapture site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/motokapture.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save — GitHub will begin building the site

Your site will be live at `https://YOUR_USERNAME.github.io/motokapture` within 2–3 minutes.

### 4. Point your Namecheap domain to Cloudflare

**On Namecheap:**
1. Go to Domain List → Manage your domain
2. Under Nameservers → select "Custom DNS"
3. Enter Cloudflare's nameservers (provided when you add the site to Cloudflare)

**On Cloudflare (free account):**
1. Add site → enter `motokapture.com`
2. Select Free plan
3. Cloudflare will scan existing DNS records

### 5. Configure DNS in Cloudflare

Add these DNS records in Cloudflare:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| A     | @    | 185.199.108.153              |
| A     | @    | 185.199.109.153              |
| A     | @    | 185.199.110.153              |
| A     | @    | 185.199.111.153              |
| CNAME | www  | YOUR_USERNAME.github.io      |

Set all records to **Proxied** (orange cloud) for Cloudflare CDN.

### 6. Add custom domain in GitHub Pages

1. Repo → Settings → Pages → Custom domain
2. Enter: `motokapture.com`
3. Check "Enforce HTTPS" (GitHub handles the cert via Cloudflare)

Create a file called `CNAME` in the root of your repo containing only:
```
motokapture.com
```

### 7. SSL in Cloudflare

1. Cloudflare → SSL/TLS → set mode to **Full (strict)**
2. Edge Certificates → enable "Always Use HTTPS"

---

## Adding Content

### New technique guide

Create a file in `_technique/` with this front matter:

```markdown
---
layout: technique
title: "Your Article Title"
subtitle: "One-sentence description for the hero area."
category: Technique / Flash
gear: Canon R6 II · AD200 · 28-70mm
difficulty: Intermediate
shoot_time: Blue Hour
---

Your article content in Markdown...
```

File name becomes the URL slug: `_technique/blue-hour-fundamentals.md` → `/technique/blue-hour-fundamentals/`

### Adding images

Place images in `/assets/images/` and reference them in Markdown:

```markdown
![Alt text](/assets/images/your-image.jpg)
```

Or use the diagram embed component:

```html
<figure class="diagram-embed">
  <img src="/assets/images/your-diagram.png" alt="Description">
  <figcaption>Caption text</figcaption>
</figure>
```

### Settings callout block

```html
<div class="settings-block">
  <table class="settings-table">
    <tr><td>Setting name</td><td>Value</td></tr>
  </table>
</div>
```

### Amber callout / tip box

```html
<div class="callout">
  <p><strong>Tip title:</strong> Your callout text here.</p>
</div>
```

---

## Monetisation Setup

### Gumroad (presets + RAW files)
1. Create account at gumroad.com
2. Create your first product (preset pack)
3. Replace `https://gumroad.com/motokapture` in `index.html` and `presets/index.html` with your actual Gumroad product URL

### Mailchimp (email list)
1. Create free account at mailchimp.com
2. Create an Audience
3. Go to Audience → Signup Forms → Embedded forms
4. Copy the `action=""` URL from the form code
5. Replace `https://YOUR_MAILCHIMP_URL` in `index.html`, `presets/index.html`, and `workshops/index.html`

### Google Analytics (optional but recommended)
Add to `_layouts/default.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Local Development

To preview locally before pushing:

```bash
# Install Ruby + Bundler first
gem install bundler
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

---

## File Structure

```
motokapture/
├── _config.yml          # Site settings
├── _layouts/
│   ├── default.html     # Base layout
│   └── technique.html   # Technique article layout
├── _includes/
│   ├── nav.html         # Navigation
│   ├── footer.html      # Footer
│   └── ticker.html      # Scrolling ticker
├── _technique/          # Technique articles (add new .md files here)
│   └── rear-curtain-streak-shot.md
├── assets/
│   ├── css/main.css     # All styles
│   ├── js/main.js       # JS (mobile menu etc)
│   └── images/          # Add your photos/diagrams here
├── technique/index.html # Technique listing page
├── presets/index.html   # Presets page
├── workshops/index.html # Workshops page
├── index.html           # Homepage
├── robots.txt
├── CNAME                # Add this after setting up custom domain
└── Gemfile
```

---

## To-Do Before Launch

- [ ] Add streak shot diagram image to `/assets/images/streak-setup-diagram.png`
- [ ] Add your best shot as an OG image to `/assets/images/og-image.jpg` (1200×630px)
- [ ] Replace Mailchimp URL placeholders with real embed URL
- [ ] Replace Gumroad URL with real product URL
- [ ] Create `CNAME` file once domain is configured
- [ ] Update `_config.yml` url to `https://motokapture.com`
- [ ] Add Google Analytics tag (optional)
- [ ] Create Gumroad free preset product
- [ ] Post first technique article + Instagram carousel on same day

---

*MotoKapture — Craft Over Gear*
