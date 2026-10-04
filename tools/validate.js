// Validateur de la banque de questions Code Moto (ETM)
const fs = require('fs');
const vm = require('vm');
const ctx = { CM: { themes: [], theme(t) { this.themes.push(t); } } };
vm.createContext(ctx);
for (const f of process.argv.slice(2)) {
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
}
let nq = 0, nr = 0; const errs = []; const ids = new Set();
for (const t of ctx.CM.themes) {
  if (!Number.isInteger(t.id) || !t.nom || !Array.isArray(t.regles)) { errs.push(`thème ${t && t.id}: structure invalide`); continue; }
  let tq = 0;
  for (const r of t.regles) {
    nr++;
    if (!r.id || ids.has(r.id)) errs.push(`règle id absente/dupliquée: ${r.id}`);
    ids.add(r.id);
    if (!r.titre || !r.texte || !r.source) errs.push(`${r.id}: titre/texte/source manquant`);
    if (!Array.isArray(r.questions) || r.questions.length < 3) errs.push(`${r.id}: ${(r.questions || []).length} questions (minimum 3)`);
    for (const [i, q] of (r.questions || []).entries()) {
      nq++; tq++;
      if (!q.q || !Array.isArray(q.choix) || q.choix.length < 2 || q.choix.length > 4) errs.push(`${r.id} q${i}: choix invalides`);
      else if (!Array.isArray(q.bonnes) || q.bonnes.length < 1 || q.bonnes.length >= q.choix.length || q.bonnes.some(b => !Number.isInteger(b) || b < 0 || b >= q.choix.length)) errs.push(`${r.id} q${i}: indices "bonnes" invalides`);
      if (!q.exp) errs.push(`${r.id} q${i}: exp manquante`);
    }
  }
  console.log(`Thème ${t.id} — ${t.nom}: ${t.regles.length} règles, ${tq} questions`);
}
console.log(`TOTAL: ${ctx.CM.themes.length} thèmes, ${nr} règles, ${nq} questions`);
if (errs.length) { console.error('ERREURS:\n' + errs.join('\n')); process.exit(1); }
console.log('OK');
