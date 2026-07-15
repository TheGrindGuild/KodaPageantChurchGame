# Koda Pageant Showdown — drop-in instructions (updated)

## What's included now
- Real Koda art: components/pageant-showdown/kodaPool.ts has ~50 real
  Otherside Koda tokens (contract 0xe012baf811cf9c05c408e879c399960d1f305903)
  with live OpenSea CDN image URLs, pulled directly from the collection.
  Each round picks 2 distinct random ones automatically.
- card.png and banner.png — built from your LOGO_VID.mp4 and
  lastpostinthread1.mp4 branding videos (extracted a clean static frame
  from each, letterboxed the banner to the required 2:1 ratio).
- Full typecheck passes clean (npx tsc --noEmit — verified, zero errors).

## Step-by-step: creating your own repo (this part only you can do)
1. Go to https://github.com/ape-church/ape-church-game-template
2. Click the green "Use this template" button → "Create a new repository"
   (NOT "Fork" — forking links back to the template and causes submission
   issues, per their own docs).
3. Name your new repo whatever you like, then clone it locally:
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
4. Delete the stock components/my-game/ folder.
5. Copy this package's components/pageant-showdown/ folder into your repo's
   components/ folder.
6. Copy this package's metadata.json over your repo's root metadata.json.
7. Copy this package's public/pageant-showdown/ folder into your repo's
   public/ folder.
8. Fill in the remaining TODOs in metadata.json: "team" (your GitHub
   username, kebab-case), "authors" and "revenueShare" name/telegram.
9. Run `npm install && npm run dev`, open localhost:3000, test the flow.

## Still needs real work (can't fabricate this part)
- **On-chain transaction + VRF**: playGame() currently mocks the transaction
  with a console.log and picks the outcome via Math.random() — both marked
  with TODO comments in PageantShowdown.tsx. Wiring this to Ape Church's
  actual game contract needs their real contract interface/ABI, which isn't
  in their public docs. Email ministry@ape.church or ask in their Discord
  for the actual on-chain integration spec before this can go further —
  this is a real dependency on them, not something to guess at.
- **gameAddress** in pageantShowdownConfig.ts is still a placeholder zero
  address — same blocker as above, likely only assigned once you're working
  with their team directly on submission.
- **Optional**: audio (song.mp3, win/lose/flip sfx) — you mentioned adding
  these later via Canva Pro. Paths are already wired in
  (public/pageant-showdown/audio/ and /sfx/), just drop matching files in
  once ready. MP3 or OGG only per SKILL.md — no WAV files allowed.
- **Optional**: the curated 50-Koda pool can be expanded, or swapped for a
  live full-collection fetch later if Ape Church confirms games are allowed
  their own server routes/API keys outside the standard edit zone.
