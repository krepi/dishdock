// service to connect with Microsoft Translate Api
// public function makeRequest($body,$toLanguage)
// {
//     $response = Http::withHeaders([
//         'Ocp-Apim-Subscription-Key' => $this->apiKey,
//     'Content-Type' => 'application/json',
//     'Ocp-Apim-Subscription-Region' => 'global',
// ])->post("{$this->endpoint}/translate?api-version=3.0&to={$toLanguage}", $body);
//     return $response;
// }
// }
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export class TranslateApiService {
    constructor() {
        this.apiKey = process.env.TRANSLATOR_API_KEY;
        this.apiEndpoint = process.env.TRANSLATOR_ENDPOINT;
    }

    makeRequest(body, toLanguage) {

    }


}