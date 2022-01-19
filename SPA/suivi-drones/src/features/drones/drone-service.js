import { config } from "../../shared/config/api";
import authenticateHeader from "../../shared/middlewares/authenticate-header";

export class DroneService {
    constructor() {}

    async getAll() {
        const url = config.apis.drones.url;

        const headers = new Headers(authenticateHeader());

        const response = await fetch(url, { method: 'get', headers: headers });
        const list = await response.json();

        return list;
    }
}