import { Card, ScryfallResponse } from '@/models/magic';

import axios from 'axios';

const baseUrl: string = 'https://api.scryfall.com/';
export default {
    async search(search: string): Promise<ScryfallResponse[]> {
        const res = await axios.get(baseUrl + 'cards/search?q=' + search);
        return res.data;
    },
    async getRandomCard(): Promise<Card> {
        const res = await axios.get(baseUrl + 'cards/random');
        return res.data;
    },
    async getAllFunnyCards(): Promise<ScryfallResponse> {
        const res = await axios.get(baseUrl + 'cards/search?q=is:funny');
        return res.data;
    }
};
