# API Lua

Ce document détaille l'API Lua disponible dans le système d'exploitation Paxos. Cette API permet aux développeurs de créer des applications en Lua, en exploitant les fonctionnalités du système pour le développement d'interfaces graphiques, l'accès aux fichiers, l'interaction matérielle, la gestion des événements, et plus encore.

## Modules

L'API Lua est organisée en plusieurs modules :

* **gui :** Fonctions pour créer et gérer les éléments graphiques.
* **storage :** Accès au système de fichiers de Paxos.
* **hardware :** Interaction limitée avec le matériel.
* **time :** Gestion des opérations liées au temps.
* **events :** Enregistrement des callbacks pour les événements système.
* **gsm :** (Paxos ESP32 uniquement) Accès aux fonctionnalités GSM.
* **json :** Parsing et manipulation JSON.

## Documentation des modules

### 1. Module `gui`

Permet de créer des éléments d'interface graphique.

**Exemple :**

```lua
local win = gui.window()  -- Crée une fenêtre
local box = gui.box(win, 10, 10, 100, 50)  -- Crée un box dans la fenêtre
gui.setWindow(win) -- Définit la fenêtre active
```

**Fonctions principales :**

* `window()` : crée une nouvelle fenêtre.
* `box(parent, x, y, width, height)` : crée un box.
* `canvas(parent, x, y, width, height)` : crée un canvas.
* `image(parent, path, x, y, width, height, background)` : crée un widget image.
* `label(parent, x, y, width, height)` : crée un label texte.
* `input(parent, x, y)` : crée un champ texte.
* `button(parent, x, y, width, height)` : crée un bouton.
* `verticalList(parent, x, y, width, height)` : liste verticale.
* `horizontalList(parent, x, y, width, height)` : liste horizontale.
* `checkbox(parent, x, y)` : case à cocher.
* `switch(parent, x, y)` : interrupteur.
* `radio(parent, x, y)` : bouton radio.
* `del(widget)` : supprime un widget et ses enfants.
* `setWindow(window)` : définit la fenêtre principale.
* `getWindow()` : récupère la fenêtre principale.
* `keyboard(placeholder, defaultText)` : clavier virtuel.
* `showInfoMessage(msg)` : message info.
* `showWarningMessage(msg)` : message avertissement.
* `showErrorMessage(msg)` : message erreur.

**Méthodes communes aux widgets :**

* `setX(x)`, `setY(y)`, `setWidth(width)`, `setHeight(height)` : position et dimensions.
* `getX()`, `getY()`, `getWidth()`, `getHeight()` : récupérer dimensions.
* `setBackgroundColor(color)`, `setBorderColor(color)`, `setBorderSize(size)`, `setRadius(radius)` : propriétés visuelles.
* `enable()`, `disable()` : activer/désactiver l'interaction.
* `isEnabled()` : vérifier si activé.
* `isTouched()` : vérifier contact.
* `onClick(function)` : callback clic.
* `clear()` : supprime tous les enfants.

**Specific Widget Methods:**

* **LuaBox:**  `setRadius(radius)`: Sets the corner radius.
* **LuaCanvas:**
    * `setPixel(x, y, color)`: Sets a pixel's color.
    * `drawRect(x, y, w, h, color)`, `fillRect(...)`: Draws or fills a rectangle.
    * `drawCircle(x, y, radius, color)`, `fillCircle(...)`: Draws or fills a circle.
    * `drawRoundRect(x, y, w, h, radius, color)`, `fillRoundRect(...)`: Draws or fills a rounded rectangle.
    * `drawPolygon(vertices, color)`, `fillPolygon(...)`: Draws or fills a polygon. `vertices` is a Lua table of `{x, y}` coordinate pairs.
    * `drawLine(x1, y1, x2, y2, color)`: Draws a line.
    * `drawText(x, y, text, color)`: Draws text.
    * `drawTextCentered(x, y, text, color, horizontallyCentered, verticallyCentered)`: Draws centered text.
    * `drawTextCenteredInRect(x, y, w, h, text, color, horizontallyCentered, verticallyCentered)`: Draws text centered within a rectangle.
    * `getTouch()`: Returns a table containing the touch coordinates relative to the canvas. `{x, y}`
    * `onTouch(function)`: Sets a callback function executed when the canvas is touched, passing the touch coordinates as a table argument.
* **LuaImage:** `setTransparentColor(color)`: Sets the transparent color for the image.
* **LuaLabel:**
    * `setText(text)`, `getText()`: Sets or gets the label's text.
    * `setFontSize(size)`: Sets the font size.
    * `getTextWidth()`, `getTextHeight()`: Gets the dimensions of the text.
    * `setVerticalAlignment(alignment)`, `setHorizontalAlignment(alignment)`: Sets the text alignment.
    * `setTextColor(color)`: Sets the text color.  Alignment constants are defined below.
* **LuaInput:**
    * `setText(text)`, `getText()`:  Sets or gets the input text.
    * `setPlaceholder(text)`: Sets placeholder text.
    * `setTitle(text)`: Sets the title for the input.
    * `onChange(function)`: sets a callback to be called when the text changes.
* **LuaButton:**
    * `setText(text)`, `getText()`: Sets or gets the button text.
    * `setIcon(path)`: Sets an icon for the button.  Path can be relative or absolute.
    * `setTheme(theme)`:  Sets the button theme (true for dark, false for light).
    * `format()`: Refreshes the button's layout.
* **LuaSwitch:**
    * `setState(state)`, `getState()`: Sets or gets the switch state (true/false).
    * `onChange(function)`: callback called when the switch state changes.
* **LuaRadio:** `setState(state)`, `getState()`: Sets or gets the radio button state (true/false).
* **LuaCheckbox:** `setState(state)`, `getState()`: Sets or gets the checkbox state (true/false).
* **LuaVerticalList:**
    * `setIndex(index)`: Sets the currently selected index.
    * `setSpaceLine(line)`: Sets the spacing between list items.
    * `setSelectionFocus(focus)`: Sets the selection focus (UP/CENTER). Selection constants are defined below.
    * `getSelected()`: Returns the index of the selected item.
    * `select(index)`: Selects an item at the given index and triggers the `onSelect` callback.
    * `setSelectionColor(color)`: Sets the selection highlight color.
    * `setAutoSelect(autoSelect)`: Enables/disables automatic selection on touch.
    * `onSelect(function)`: Sets a callback function to be executed when an item is selected.
* **LuaHorizontalList:**
    * `setSpaceLine(line)`: Sets the spacing between list items.



#### GUI Constants

* **Alignment:** `LEFT_ALIGNMENT`, `RIGHT_ALIGNMENT`, `CENTER_ALIGNMENT`, `UP_ALIGNMENT`, `DOWN_ALIGNMENT`
* **Colors:**  `COLOR_DARK`, `COLOR_LIGHT`, `COLOR_SUCCESS`, `COLOR_WARNING`, `COLOR_ERROR`, `COLOR_WHITE`, `COLOR_BLACK`, `COLOR_RED`, `COLOR_GREEN`, `COLOR_BLUE`, `COLOR_YELLOW`, `COLOR_GREY`, `COLOR_MAGENTA`, `COLOR_CYAN`, `COLOR_VIOLET`, `COLOR_ORANGE`, `COLOR_PINK`, `COLOR_LIGHT_ORANGE`, `COLOR_LIGHT_GREEN`, `COLOR_LIGHT_BLUE`, `COLOR_LIGHT_GREY`
* **Selection Focus:** `SELECTION_UP`, `SELECTION_CENTER`

### 2. Module `storage`

Accès au système de fichiers.

**Exemple :**

```lua
local file = storage.file("my_file.txt", storage.WRITE)  -- Open a file for writing
file:open()
file:write("Hello, Paxos!\n")
file:close()

local file = storage.file("my_file.txt", storage.READ) -- open a file for reading
file:open()
local content = file:readAll()
print(content)
file:close()


local list = storage.listDir("./")
for i, item in ipairs(list) do
    if storage.isDir(item) then print(item .. ": directory")
    elseif storage.isFile(item) then print(item .. ": file")
    end
end
```


**Fonctions principales :**

* `file(filename, mode)` : crée un objet `LuaStorageFile`.
* `newDir(path)` : crée un dossier.
* `mvFile(oldpath, newpath)`, `mvDir(...)` : renomme.
* `rmFile(path)`, `rmDir(path)` : supprime.
* `isDir(path)`, `isFile(path)` : vérifie type.
* `listDir(path)` : liste fichiers.

**`LuaStorageFile` Methods:**

* `open()`: Opens the file.
* `close()`: Closes the file.
* `write(text)`: Writes text to the file.
* `readChar()`: Reads a single character.
* `readLine()`: Reads a line.
* `readAll()`: Reads the entire file content.


### 3. Module `hardware`

Interaction matérielle limitée.

**Exemple :**

```lua
hardware.flash(true) -- Active le flash
```

**Fonctions :**

* `flash(state)` : contrôle le flash LED.

### 4. Module `time`

Gestion du temps.

**Exemple:**

```lua
local intervalId = time.setInterval(function() print("Tick!") end, 1000)  -- Print "Tick!" every second

local timeoutId = time.setTimeout(function() print("Timeout!") end, 5000) -- Print "Timeout!" after 5 seconds

time.removeInterval(intervalId)
time.removeTimeout(timeoutId)


local currentTime = time.get("h,mi,s")
print("Current Time")
for k,v in pairs(currentTime) do
    print("Key: ",k , ", Value: ",v)
end

print(time.monotonic())
```

**Fonctions principales :**

* `monotonic()` : retourne le temps en ms depuis le démarrage.
* `get(format)` : retourne l'heure actuelle.
* `setInterval(function, interval)` : répète une fonction.
* `setTimeout(function, timeout)` : exécute une fonction après un délai.
* `removeInterval(id)` : annule intervalle.
* `removeTimeout(id)` : annule timeout.

### 5. Module `events`

Callbacks pour événements système.

**Exemple:**

```lua
events.onmessage(function(msg) print("New message:", msg) end)
events.onlowbattery(function() print("Battery low!") end)
events.oncharging(function() print("Charging...") end)
events.oncall(function() print("Incoming call!") end)
events.onmessageerror(function() print("Error delivering message!") end)
```

**Fonctions :**

* `onmessage(function)` : nouveau message.
* `onlowbattery(function)` : batterie faible.
* `oncharging(function)` : chargement.
* `oncall(function)` : appel entrant.
* `onmessageerror(function)` : erreur message.

### 6. Module `gsm` (ESP32 uniquement)

Fonctionnalités GSM.

**Exemple:**

```lua
gsm.newMessage("+33xxxxxxxxxx", "Hello from Lua!")  -- Send an SMS
gsm.newCall("+33xxxxxxxxxx") -- Initiate a call
gsm.endCall()  -- End a call
gsm.acceptCall()  -- Accept an incoming call
gsm.rejectCall() -- Reject an incoming call

local number = gsm.getNumber() -- retrieve current calling number
local call_state = gsm.getCallState() -- retrieve current call state


local messages = gsm.getMessages("+33xxxxxxxxxx")
for i,msg in pairs(messages) do
    print("From " .. msg.who .. " at " .. msg.date .. ":" .. msg.message)
end



-- Contact manipulation example
local contact1 = { name = "John Doe", phone = "+33123456789" }
gsm.addContact(contact1)

local contactList = gsm.listContacts()
for i, contact in ipairs(contactList) do
    print(contact.name, contact.phone)
end

gsm.deleteContact("+33123456789")

gsm.saveContacts()
```

**Fonctions :**

* `newMessage(number, message)` : envoie SMS.
* `newCall(number)` : initie appel.
* `endCall()`, `acceptCall()`, `rejectCall()` : gestion appel.
* `getNumber()` : numéro de l'appel actuel ou passé.
* `getCallState()`: Get the current call state.  See GSM.h for the state integer values.
* `getMessages(number)`: Gets the messages history with a given number.
* `addContact(contact)`: Adds a new contact (`contact` is a Lua table `{name=..., phone=...}`).
* `deleteContact(phone)` : delete the given contact.
* `listContacts()`: Lists all contacts, returns a lua table of `Contact` objects.
* `saveContacts()`: saves contact list.
* `getContact(index)` : retrieve the contact at given index.
* `editContact(contact)`: Edits an existing contact. The `contact` table should contain the phone number to identify the contact to edit.
* `getContactByNumber(phone)`: Retrieves a contact by phone number.


### 7. Module `json`

Parsing et manipulation JSON.

**Example:**

```lua
local jsonData = '{"name": "Paxos", "version": 1.0}'
local json_object = json.new(jsonData)

print(json_object.name)  -- Access fields like regular Lua tables
print(json_object.version)

json_object.version = 1.1
json_object["new_field"] = "new value"

print(json_object:get()) -- retrieve the json string

local noJson = json.new('{"hello')
print(noJson:get()) -- retrieve json string from a malformed string

-- Nested JSON Example
local nestedJsonData = '{ "person": { "name": "Bob", "age": 30 } }'
local nestedJsonObject = json.new(nestedJsonData)

print(nestedJsonObject.person.name)  -- Access nested fields
print(nestedJsonObject.person.age)

nestedJsonObject.person.age = 31  -- Modify nested fields

local newObject = nestedJsonObject.person -- store sub-table and manipulate it as a regular Json object

newObject.name = "alice"
print(nestedJsonObject:get()) -- print the modified json


local array = json.new('[{"a": 1}, {"a": 2}]')
print(array[1].a) -- 1
print(array[2].a) -- 2


```

**Fonctions :**

* `new(data)`: Creates a new JSON object from a JSON string.

**`LuaJson` Methods:**

* `get()`: Returns the JSON string representation.
* `is_null()`: Returns whether the JSON object is null.
* `size()`:  Returns the number of elements (for arrays and objects).
* `has_key(key)`: Checks if a key exists.
* `remove(key)`: Removes a key-value pair.
* `get_int(key)`, `get_double(key)`, `get_bool(key)`, `get_string(key)`: Get values with type checking.
* `set_int(key, value)`, `set_double(key, value)`, `set_bool(key, value)`: Set values with type checking.


## Fonctions spécifiques Lua

* `require(module)` : charge un module Lua.
* `saveTable(filename, table)` : sauvegarde table en JSON.
* `loadTable(filename)` : charge table depuis JSON.
* `launch(appName, args)` : lance une application Paxos.

## Cycle de vie des applications

These functions are defined within your Lua application code and are called by the Paxos system during the app's lifecycle.

* `run(args)` : point d'entrée.
* `background(args)` : en arrière-plan.
* `wakeup(args)` : revient au premier plan.
* `quit(args)` : fermeture de l'application.

## Gestion des erreurs

Les erreurs Lua peuvent être gérées avec `pcall` ou `xpcall`. Les callbacks globaux peuvent être utilisés via `onmessageerror`.

## Permissions

L'accès aux modules est contrôlé par le fichier manifeste JSON. Les permissions sont accordées à l'installation. Toute tentative d'accès non autorisé génère une erreur.
