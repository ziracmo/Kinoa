import { Card, ScryfallResponse } from '@/models/magic';

import axios from 'axios';

const baseUrl: string = 'https://api.scryfall.com/';
const MagicService = {
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
    },
    async getCardById(id: string): Promise<Card> {
        const res = await axios.get(baseUrl + 'cards/' + id);
        return res.data;
    },
    async getCardFromArena() {
        const res = await axios.get(baseUrl + 'cards/search?q=game:arena');
        return res.data;
    },
    async getCardsFromString(name: string): Promise<ScryfallResponse> {
        if (name.length && name.length >= 3) {
            const res = await axios.get(baseUrl + 'cards/search?order=name&q=' + name);
            return res.data;
        }
        return {
            data: [],
        };
    },
    async autocompleteCardName(name: string): Promise<string[]> {
        const res = await axios.get('https://api.scryfall.com/cards/autocomplete?q=' + name);
        return res.data;
    },
};

export default MagicService;
