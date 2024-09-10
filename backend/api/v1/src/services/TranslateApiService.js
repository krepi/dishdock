import axios from "axios";
import { v4 as uuidv4 } from 'uuid';  // Ensure UUID is imported for generating client trace IDs
import dotenv from "dotenv";

dotenv.config();

export class TranslateApiService {
    constructor() {
        this.apiKey = process.env.TRANSLATOR_API_KEY;
        this.apiEndpoint = process.env.TRANSLATOR_ENDPOINT;
        this.location = process.env.TRANSLATOR_LOCATION;  // Assumes TRANSLATOR_LOCATION is set in your .env
    }

    async makeRequest(text, fromLanguage, toLanguage) {
        const headers = {
            'Ocp-Apim-Subscription-Key': this.apiKey,
            'Ocp-Apim-Subscription-Region': this.location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        };

        const params = {
            'api-version': '3.0',
            'from': fromLanguage,
            'to': toLanguage
        };

        const data = [{
            'text': text
        }];

        try {
            const response = await axios({
                baseURL: this.apiEndpoint,
                url: '/translate',
                method: 'post',
                headers: headers,
                params: params,
                data: data,
                responseType: 'json'
            });
            console.log(JSON.stringify(response.data, null, 4));
            return response.data;  // Zwraca dane z odpowiedzi, aby można było ich używać poza funkcją
        } catch (error) {
            console.error('Translation API error:', error);
            throw error;  // Rzucanie błędu dalej pozwala na obsługę go na wyższym poziomie (np. w kontrolerze)
        }
    }
}
