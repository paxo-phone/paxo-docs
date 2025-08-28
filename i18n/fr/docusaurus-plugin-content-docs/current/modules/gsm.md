# Module GSM

Ce document détaille l’implémentation du module GSM dans le système d’exploitation PaxOS.  
Le module gère la communication avec un modem GSM/GPRS, permettant des fonctionnalités comme l’envoi/réception de SMS, la gestion des appels (émission/réception) et des MMS.

## 1. `contacts.cpp` / `contacts.hpp`

Ce module gère les informations de contact.  
Les contacts sont stockés dans un fichier JSON (`/apps/contacts/list.json`) et chargés en mémoire pour un accès rapide.

### Structures de données

* **`Contacts::contact` :** Représente un contact unique avec les champs `name` (std::string) et `phone` (std::string).

### Fonctions

* **`Contacts::load()` :** Charge les contacts depuis le fichier `list.json` dans le vecteur `contactList`. Gère les erreurs d’analyse JSON.
* **`Contacts::save()` :** Sauvegarde la `contactList` dans le fichier `list.json` au format JSON.
* **`Contacts::listContacts()` :** Retourne une copie de la `contactList`.
* **`Contacts::addContact(contact c)` :** Ajoute un nouveau contact à la `contactList`.
* **`Contacts::deleteContact(std::string name)` :** Supprime le contact avec le nom donné de la `contactList`.
* **`Contacts::editContact(std::string name, contact c)` :** Modifie le contact correspondant au nom donné en mettant à jour ses informations avec l’objet `contact` fourni.
* **`Contacts::getContact(std::string name)` :** Retourne l’objet `contact` associé au nom donné. Retourne un contact vide s’il n’est pas trouvé.
* **`Contacts::getByNumber(std::string number)` :** Retourne l’objet `contact` associé au numéro donné. Retourne un contact vide s’il n’est pas trouvé.


## 2. `conversation.cpp` / `conversation.hpp`

Ce module gère les données de conversation, y compris le chargement et la sauvegarde des messages pour chaque conversation.

### Structures de données

* **`Conversations::Message` :** Représente un message unique avec les champs `message` (std::string), `who` (bool indiquant l’expéditeur – false pour soi, true pour l’autre) et `date` (std::string).
* **`Conversations::Conversation` :** Représente une conversation avec un `number` spécifique (std::string) et un vecteur de `messages` (`std::vector<Message>`).

### Fonctions

* **`Conversations::loadConversation(const storage::Path &filePath, Conversation &conv)` :** Charge une conversation depuis le fichier JSON spécifié. Gère les erreurs de fichier et d’analyse JSON.
* **`Conversations::saveConversation(const storage::Path &filePath, const Conversation &conv)` :** Sauvegarde une conversation dans le fichier JSON spécifié. Limite le nombre de messages sauvegardés à `MAX_MESSAGES` (40), en gardant les plus récents. Crée les répertoires nécessaires s’ils n’existent pas.


## 3. `gsm.cpp` / `gsm.hpp`

Ce module fournit les fonctionnalités GSM principales, en interagissant directement avec le modem GSM.  
Il gère les appels, SMS, MMS, l’état du réseau et le niveau de batterie.

### Constantes

* `BAUDRATE` : Débit par défaut pour la communication série (921600).
* `MESSAGES_LOCATION` : Répertoire de stockage des données de messages (`apps/messages/data`).
* `MESSAGES_IMAGES_LOCATION` : Répertoire de stockage des images MMS (`apps/messages/images`).
* `MESSAGES_NOTIF_LOCATION` : Fichier stockant les notifications de messages non lus (`apps/messages/unread.txt`).
* `MAX_MESSAGES` : Nombre maximum de messages stockés par conversation (40).

### Structures de données

* **`GSM::Request` :** Représente une requête à exécuter par le module GSM, avec une `function` (`std::function<void(void)>`) et une `priority` (enum).
* **`GSM::Key` :** Représente une clé à surveiller dans les réponses du modem GSM, avec un `key` (std::string) et une `function` (`std::function<void()>`) à exécuter quand la clé est trouvée.
* **`GSM::State` :** Représente l’état actuel du module GSM (état des appels, échec d’appel, numéro appelant).
* **`GSM::Message` :** Représente un message SMS, avec `number`, `message` et `date`.
* **`GSM::ExternalEvents` :** Espace de noms contenant les callbacks pour les appels entrants, nouveaux messages et erreurs de message.
* **`GSM::Stream::Chunk` :** Utilisé pour le streaming de données MMS ; contient un pointeur de données et une taille. (ESP_PLATFORM uniquement)

### Fonctions

* **`GSM::init()` :** Initialise le modem GSM, y compris la configuration du débit et la gestion de l’allumage du modem (spécifique ESP_PLATFORM).
* **`GSM::reInit()` :** Réinitialise la communication série après des changements de fréquence d’horloge.
* **`GSM::download(uint64_t timeout = 50)` :** Lit les données depuis le port série du modem GSM avec un délai.
* **`GSM::send(const std::string &message, const std::string &answerKey, uint64_t timeout = 200)` :** Envoie une commande au modem GSM et attend une réponse spécifique. Retourne la réponse complète du modem.
* **`GSM::appendRequest(Request request)` :** Ajoute un*
