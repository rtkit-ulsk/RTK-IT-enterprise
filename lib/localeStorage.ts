export const localStorage = {
  guard() {
    if (typeof window === 'undefined') return false;
    return !!window.localStorage;
  },
  getItem<T = string>(key: string) {
    if (!this.guard()) return null;
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    return value as T;
  },
  setItem(key: string, value: string) {
    if (!this.guard()) return false;
    window.localStorage.setItem(key, value);
    return true;
  },
  removeItem(key: string) {
    if (!this.guard()) return false;
    window.localStorage.removeItem(key);
    return true;
  },
};
