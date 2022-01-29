import { apis } from "../../../environments/apis";

class UserService {
    async log(email, password) {
        const header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        };

        const response = await fetch(apis.user.authenticate.url, header);
        const result = await response.json();

        return result;
    }
}

const userService = new UserService();

export default userService;
