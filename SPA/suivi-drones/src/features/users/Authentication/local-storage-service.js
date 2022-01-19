export class LocalStorageService {
    save(user) {
        localStorage.setItem('user', user);
    }

    get() {
        return localStorage.getItem('user');
    }

    eraze() {
        localStorage.removeItem('user');
    }
}