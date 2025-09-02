# Petit projet d'étude sur le carrousel & configuration Biome

Objectif : Comment mettre en place un carousel via tutoriel -> [Code Complete](www.youtube.com/@Code_Complete)

<hr>

### Démonstration après réalisation du code :

[https://github.com/G-Ludovic/react-image-carousel/issues/1#issue-3375521262](https://github.com/user-attachments/assets/a7c53b89-2d8c-4ba7-b54b-8598fd2baf8e)

# React + Vite

Ce modèle fournit une configuration minimale pour utiliser React dans Vite avec HMR et certaines règles ESLint.

Deux plugins officiels sont actuellement disponibles :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Dans mon cas j'ai effectué une petite configuration avec Biome pour avoir un petit modèle personnalisé en cas de petits projets.

<hr>

# Biome configuration personnalisé :

## 1️⃣ VSCode : configuration automatique à la sauvegarde

- Crée ou mets à jour `.vscode/settings.json`
- Chaque sauvegarde formate le fichier courant avec Biome
- Applique les règles de linting automatiquement
- Ignore Prettier/ESLint pour éviter les conflits

---

## 2️⃣ Scripts npm utiles

Dans le `package.json` :

```json
"scripts": {
  "format": "biome format src --write",
  "check": "biome check src",
  "check:fix": "biome check --write src",
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
```

- `npm run check` → vérifie le code
- `npm run check:fix` → corrige tout le projet
- `npm run format` → formate tous les fichiers source

---

## 3️⃣ Utilisation quotidienne

1. **Code normalement dans VSCode**.
2. **Sauvegarde** → Biome applique le formatage et le lint automatiquement.
3. **Avant commit** :

```bash
npm run check:fix
```

Pour s’assurer que tout est correct.
