# React + Vite


# NoteApp 📝

This is a simple **Note Taking App** made using **React** (with Vite).
You can **create, see, search, and delete notes**. Everything is stored in your browser’s **localStorage**, so notes stay even if you refresh.

---

## 📂 Project Flow (How it works)

1. **index.html**

   * The main starting file.
   * It loads React code inside the `<div id="root">`.

2. **main.jsx / App.jsx**

   * React starts from here.
   * `App.jsx` shows all the components (like Header, Create Note form, List of Notes).

3. **Redux (pasteSlice.js / store.js)**

   * Keeps track of all notes in one place.
   * Notes are saved in **localStorage** so they don’t disappear after refresh.

4. **Components**

   * `CreateNote` → Form to add new notes.
   * `Pastes` → Shows the list of notes.
   * `SinglePaste` → Shows one note with options (copy / delete).
   * `Search` → Lets you find notes quickly.

5. **Functions**

   * **Add a note** → You type and press save → Redux adds it + stored in localStorage.
   * **See all notes** → Notes are shown in list form.
   * **Search notes** → Filter notes by text.
   * **Delete a note** → Removes from list + localStorage.
   * **Copy note** → Copies note content to clipboard.

---

## 🚀 How to Run

1. Install dependencies

   ```bash
   npm install
   ```

2. Run project

   ```bash
   npm run dev
   ```

3. Open browser at the shown URL (example: `http://localhost:5173/`).

---

## 🌟 Key Points

* Notes are saved in your **browser only** (no server).
* Super lightweight and fast because of **Vite + React**.
* Easy to modify: you can add features like **tags, categories, or colors**.
