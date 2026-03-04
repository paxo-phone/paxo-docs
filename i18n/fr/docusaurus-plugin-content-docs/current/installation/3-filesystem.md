# Système de fichiers

Instructions pour déployer le système de fichiers sur la carte SD du Paxophone.

## Pré-requis

- Une carte SD
  - De type micro SDHC.
  - Pas de capacité minimum recommandée (le contenu de base est léger).
  - Formatée en FAT32.
- Un PC avec lecteur de carte microSD.
- Un navigateur ayant accès à GitHub (pas de compte requis).

<!-- Bloc Info -->
> ℹ️ **Info**
>
> > La carte fournie lors du lot Kickstarter de 2025 est une carte:
> >
> > - de type `micro SDHC`
> > - de classe de vitesse `C10` et `U1`
> > - d'interface de bus `UHS-1`
> > - d'une capacité de `16Go`

<!-- Bloc Tip -->
> 💡 **Astuce**
>
> > Pour les personnes allergiques aux interfaces graphiques, la procédure est réalisable en totalité en ligne de commandes 😉

## Récupération des fichiers

Avec un navigateur, aller sur [le GitHub officiel du projet PaxOS9.](https://github.com/paxo-phone/PaxOS-9/)  
Cliquer sur le bouton **"Code"** puis sur **"Download ZIP"** pour récupérer l'archive complète du projet.
![Screenshot1](/img/screenshots/Filesystem-3.png)

Dans un gestionnaire de fichiers (Explorateur, Finder, Nautilus, ...), décompresser l'archive.  
Entrer dans le répertoire **"Storage"**, puis sélectionner et copier son <u>contenu</u>.
![Screenshot1](/img/screenshots/Filesystem-5.png)

## Copie des fichiers sur la carte microSD

Se rendre à la racine de la carte microSD pour y coller le <u>contenu</u>.
![Screenshot1](/img/screenshots/Filesystem-6.png)

Libérer/éjecter/démonter la microSD du système puis la sortir physiquement de l'ordinateur.

## Utilisation de la carte microSD

Insérer la carte microSD dans le logement prévu sur le Paxophone (se référer aux [dernières étapes des instructions de montage](/docs/installation/assembly)).  
Redémarrer l'appareil ou appuyer sur le bouton `reset`.
