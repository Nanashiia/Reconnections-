# Appli "Reconnexion" — Cahier des charges

## Objectif
Application purement personnelle pour me reconnecter à moi-même, mentalement et physiquement. Un seul utilisateur (moi), pas de compte, pas de serveur.

## Contraintes techniques
- Application web installable sur téléphone (PWA), utilisable hors ligne
- Mobile first : écran de téléphone en portrait, utilisable à une main, grandes zones tactiles
- Stack : React + Vite + TypeScript + Tailwind CSS
- Données stockées uniquement sur l'appareil (IndexedDB via Dexie), avec export/import JSON pour sauvegarder
- Interface entièrement en français
- Ambiance : calme, douce, épurée, couleurs naturelles, animations lentes, mode sombre
- Hébergement gratuit (GitHub Pages ou Netlify), à faire en fin de projet

## Fonctionnalités
### Mental
- Journal guidé : une question différente chaque jour, réponse libre
- Gratitude : noter 3 choses chaque soir
- Respiration guidée : cercle animé qui gonfle/dégonfle, plusieurs exercices (cohérence cardiaque 5-5, respiration carrée 4-4-4-4, 4-7-8), durée réglable
- Méditation : minuteur avec son de cloche au début et à la fin, durées prédéfinies
- Vide-tête : zone d'écriture libre et rapide

### Physique
- Sommeil : heure de coucher, heure de réveil, qualité (1 à 5)
- Hydratation : bouton « +1 verre », objectif quotidien réglable
- Bouger : noter les activités (marche, étirements, salle de sport…) et leur durée
- Grease the Groove (GTG) : je choisis 1 ou 2 exercices (pompes, tractions, squats, gainage…) et j'indique mon maximum de répétitions actuel. L'appli me propose des petites séries réparties dans la journée, sur une plage horaire réglable (par défaut une par heure), à environ 50 % de mon max, jamais jusqu'à l'échec. Je valide chaque série d'un bouton. L'appli affiche le total de la journée, propose un test du max à intervalle réglable (par défaut toutes les 2 semaines), puis ajuste les séries selon le nouveau max. Graphique de progression du max dans le temps.

### Lien entre les deux
- Check-in quotidien : humeur, énergie, stress (1 à 5) + un mot pour résumer la journée
- Scan corporel : silhouette où je touche les zones de tension
- Intention du jour le matin, et le soir « l'ai-je tenue ? »
- Habitudes personnalisables à cocher chaque jour
- Graphiques simples pour voir les liens (ex. sommeil vs humeur, activité vs stress)
- Bilan de la semaine généré automatiquement

## Façon de travailler
- Une étape à la fois. À la fin de chaque étape : vérifier que tout compile et fonctionne, puis me résumer simplement ce qui a été fait et comment le tester sur mon téléphone.
- Je ne suis pas développeur : explique en termes simples quand tu as besoin d'une décision de ma part.
- Code propre, organisé par fonctionnalité.

## Notes techniques (pour Claude)
- `npm run dev` : serveur de dev accessible sur le réseau local (`host: true`).
- `npm run build` : vérification TypeScript + build de production (PWA générée par `vite-plugin-pwa`).
- Navigation : `HashRouter` (compatible GitHub Pages sans configuration serveur).
- Base locale : `src/db/db.ts` (Dexie). Toute modification du schéma = nouvelle `version()` Dexie, ne jamais modifier une version existante.
- Dates stockées au format `YYYY-MM-DD` (heure locale) via `src/lib/date.ts`.
- Structure : `src/features/<fonctionnalité>/` pour chaque fonctionnalité, `src/components/` pour les composants partagés.
