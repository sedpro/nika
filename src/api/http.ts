import { APISettings } from './http_config';

export default async function getFetch (endpoint: string, params: {[key: string]: string} = {}) {
    const url = new URL(APISettings.baseURL + endpoint);
    for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: APISettings.headers
    });
    if (response.status != 200) {
        throw response.status;
    } else {
        return response.json();
    }
}
