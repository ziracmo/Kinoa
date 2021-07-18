import { Card, ScryfallResponse } from '@/models/magic';

import axios from 'axios';

const baseUrl: string = 'https://api.scryfall.com/';
const assetsBaseUrl: string = 'https://c2.scryfall.com/file/scryfall-symbols/card-symbols/';

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
            try {
                const res = await axios.get(baseUrl + 'cards/search?order=name&q=' + name);
                return res.data;
            } catch (e) {
                console.log(e);
            }
        }
        return {
            data: [],
        };
    },
    async autocompleteCardName(name: string): Promise<string[]> {
        const res = await axios.get(baseUrl + 'cards/autocomplete?q=' + name);
        return res.data;
    },
    getCardSymbol(name: string) {
        return assetsBaseUrl + name + '.svg';
    },
};

export default MagicService;
