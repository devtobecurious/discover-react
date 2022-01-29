class LocalStorageService {
    save(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

const storageService = new LocalStorageService();

export default storageService;