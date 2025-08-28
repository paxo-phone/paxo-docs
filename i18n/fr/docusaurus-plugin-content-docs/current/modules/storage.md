# Module Storage

Ce document détaille les modules `storage` et `appFile` utilisés dans le projet Paxos pour l’interaction avec le système de fichiers.  
Ces modules fournissent une interface indépendante de la plateforme pour la manipulation de fichiers et de répertoires, ainsi que pour la lecture et l’écriture.

## 1. Module `storage`

Ce module fournit les fonctionnalités principales du système de fichiers.

### 1.1 Classe `storage::Path`

Représente un chemin de fichier ou de répertoire.

#### 1.1.1 Constructeurs

* `Path()` : Crée un chemin vide.
* `Path(const std::string& raw)` : Crée un chemin à partir d’une chaîne, en l’analysant et en la simplifiant.
* `Path(const Path& other)` : Constructeur par copie.

#### 1.1.2 Méthodes

* `join(const Path& other)` : Ajoute un autre chemin à ce chemin.
* `join(const std::string& other)` : Ajoute une représentation de chemin sous forme de chaîne à ce chemin.
* `operator/(const Path& other) const` : Retourne un nouveau chemin en joignant ce chemin avec un autre.
* `operator/(const std::string& other) const` : Retourne un nouveau chemin en joignant ce chemin avec une représentation de chemin sous forme de chaîne.
* `operator/=(const Path& other)` : Ajoute un autre chemin à ce chemin (en place).
* `operator/=(const std::string& other)` : Ajoute une représentation de chemin sous forme de chaîne à ce chemin (en place).
* `operator=(const Path& other)` : Opérateur d’affectation.
* `operator=(const std::string& other)` : Affecte une représentation de chemin sous forme de chaîne à ce chemin.
* `operator==(const Path& other) const` : Opérateur d’égalité.
* `assign(const Path& other)` : Assigne un autre chemin à ce chemin.
* `assign(const std::string& other)` : Assigne une représentation de chemin sous forme de chaîne à ce chemin.
* `clear()` : Vide le chemin.
* `str() const` : Retourne la représentation du chemin sous forme de chaîne.
* `listdir(bool onlyDirs = false) const` : Retourne un vecteur de noms de fichiers dans le répertoire représenté par ce chemin. Si `onlyDirs` est vrai, seuls les répertoires sont retournés.
* `exists() const` : Vérifie si le chemin existe.
* `isfile() const` : Vérifie si le chemin représente un fichier.
* `isdir() const` : Vérifie si le chemin représente un répertoire.
* `newfile() const` : Crée un nouveau fichier vide au chemin spécifié.
* `newdir() const` : Crée un nouveau répertoire au chemin spécifié.
* `remove() const` : Supprime le fichier ou répertoire au chemin spécifié.
* `rename(const Path& to)` : Renomme le fichier ou répertoire au chemin spécifié.

### 1.2 Classe `storage::FileStream`

Fournit une interface pour lire et écrire dans les fichiers.

#### 1.2.1 Constructeurs

* `FileStream()` : Crée un flux de fichier vide.
* `FileStream(const std::string& path, Mode mode)` : Crée un flux de fichier et ouvre le fichier spécifié avec le mode donné.

#### 1.2.2 Méthodes

* `open(const std::string& path, Mode mode)` : Ouvre le fichier spécifié avec le mode donné.
* `close()` : Ferme le fichier.
* `read()` : Lit tout le contenu du fichier dans une chaîne.
* `readline()` : Lit une seule ligne du fichier.
* `readword()` : Lit un seul mot du fichier.
* `readchar()` : Lit un seul caractère du fichier.
* `write(const std::string& str)` : Écrit une chaîne dans le fichier.
* `write(const char* str, std::size_t len)` : Écrit un tableau de caractères dans le fichier.
* `write(const char c)` : Écrit un seul caractère dans le fichier.
* `isopen() const` : Vérifie si le fichier est ouvert.
* `size()` : Retourne la taille du fichier.

#### 1.2.3 Opérateurs

* `operator<<(FileStream& stream, const std::string& text)` : Écrit une chaîne dans le flux de fichier.
* `operator>>(FileStream& stream, std::string& buff)` : Lit un mot depuis le flux de fichier.

### 1.3 Fonction `storage::init()`

Initialise le module storage (spécifiquement pour la plateforme ESP32).  
Retourne `true` en cas de succès, `false` sinon.

## 2. Module `appFile`

Fournit des opérations de fichiers de plus haut niveau, y compris l’analyse et la sauvegarde de JSON.

### 2.1 Fonctions

* `load(std::string filename)` : Charge le contenu d’un fichier dans une chaîne, en gérant les restrictions de chemin.
* `parse(std::string str)` : Analyse une chaîne JSON dans un objet `nlohmann::json`. Retourne `NULL` en cas d’échec.
* `save(std::string filename, json jsonObj)` : Sauvegarde un objet `nlohmann::json` dans un fichier.


## 3. Notes

* La base de code est conçue pour être indépendante de la plateforme, supportant à la fois les systèmes de bureau (Linux, Windows, macOS) et embarqués (ESP32).
* La macro `PATH_LOCATION` définit le répertoire de base pour les opérations de fichiers.
* La fonction `storage::init()` doit être appelée avant toute autre fonction `storage` sur ESP32.
* La gestion des erreurs est implémentée pour l’analyse JSON et l’initialisation de la carte SD. Les opérations sur fichiers reposent généralement sur la gestion d’erreurs du système sous-jacent.
* Le module `appFile` fournit un moyen pratique de travailler avec des fichiers JSON, basé sur les fonctionnalités du module `storage`.

---

Cette documentation fournit une vue d’ensemble complète des modules `storage` et `appFile`, permettant aux développeurs de comprendre et d’utiliser efficacement leurs fonctionnalités dans le projet Paxos.
