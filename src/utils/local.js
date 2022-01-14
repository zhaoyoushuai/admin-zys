const storage = sessionStorage;

export function getStorage(key) {
  const result = storage[key];
  return result || "";
}

export function setStorage(key, value) {
  storage.setItem(key, value);
}

export function removeStorage(key) {
  storage.removeItem(key);
}
