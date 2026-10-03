const G = CFG.github, loc = {}, $ = id => document.getElementById(id);
const rp = n => 'Rp ' + Number(n).toLocaleString('id-ID');
const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const raw = p => G.owner ? `https://raw.githubusercontent.com/${G.owner}/${G.repo}/${G.branch}/${p}` : p;
const src = p => /^(https?:|data:)/.test(p) ? p : (loc[p] || raw(p));
async function loadJSON(p, fb) {
  for (const u of [raw(p) + '?t=' + Date.now(), p]) { try { const r = await fetch(u); if (r.ok) return await r.json(); } catch (e) {} }
  return fb;
}
function brand(S) {
  const n = S.nama || 'Toko Saya', lg = S.logo ? `<img src="${esc(src(S.logo))}" alt="">` : '<i></i>';
  document.querySelectorAll('.brand').forEach(e => e.innerHTML = lg + esc(n));
  const t = document.body.dataset.t; document.title = (S.judul || n) + (t ? ' | ' + t : '');
  if (S.logo) { let l = document.querySelector('link[rel=icon]'); if (!l) { l = document.createElement('link'); l.rel = 'icon'; document.head.appendChild(l); } l.href = src(S.logo); }
}
