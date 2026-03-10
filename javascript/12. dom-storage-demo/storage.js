/**
 * EXPERIMENT 12: BROWSER STORAGE
 *
 * Concepts:
 * - localStorage
 * - sessionStorage
 * - cookies
 * - IndexedDB
 */

console.log("========== LOCAL STORAGE ==========");

document.getElementById("saveLocal").onclick = () => {
  localStorage.setItem("username", "Ibrahim");
  console.log("Saved to localStorage");
};

document.getElementById("readLocal").onclick = () => {
  const value = localStorage.getItem("username");
  console.log("localStorage value:", value);
};

document.getElementById("clearLocal").onclick = () => {
  localStorage.removeItem("username");
  console.log("localStorage cleared");
};


console.log("\n========== SESSION STORAGE ==========");

document.getElementById("saveSession").onclick = () => {
  sessionStorage.setItem("sessionUser", "TemporaryUser");
  console.log("Saved to sessionStorage");
};

document.getElementById("readSession").onclick = () => {
  console.log("sessionStorage value:",
    sessionStorage.getItem("sessionUser")
  );
};

document.getElementById("clearSession").onclick = () => {
  sessionStorage.removeItem("sessionUser");
  console.log("sessionStorage cleared");
};


console.log("\n========== COOKIES ==========");

document.getElementById("setCookie").onclick = () => {
  document.cookie = "theme=dark; path=/";
  console.log("Cookie set");
};

document.getElementById("readCookie").onclick = () => {
  console.log("Cookies:", document.cookie);
};


console.log("\n========== INDEXED DB ==========");

/*
IndexedDB is asynchronous
and more powerful than localStorage
*/

let db;

const request = indexedDB.open("TestDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = function (event) {
  db = event.target.result;
  console.log("IndexedDB ready");
};


document.getElementById("saveDB").onclick = () => {
  const tx = db.transaction("users", "readwrite");
  const store = tx.objectStore("users");

  store.add({ id: 1, name: "Alice" });

  console.log("Saved to IndexedDB");
};

document.getElementById("readDB").onclick = () => {
  const tx = db.transaction("users", "readonly");
  const store = tx.objectStore("users");

  const request = store.get(1);

  request.onsuccess = () => {
    console.log("IndexedDB result:", request.result);
  };
};

console.log("\n========== END OF EXPERIMENT ==========");