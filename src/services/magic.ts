import { Card, ForeignLanguage } from '@/models/magic';

import axios from 'axios';

const url: string = 'https://api.magicthegathering.io/v1/';
export default {
    async getAllCards(): Promise<Card[]> {
        const res = await axios.get(url + 'cards');
        return res.data.cards;
    },
    async getCardById(id: string): Promise<Card> {
        const res = await axios.get(url + 'card/' + id);
        return res.data;
    },
    async getCardByForeignLanguage(name: string, language: ForeignLanguage) {
        const res = await axios.get(url + 'cards');
        return res.data.cards;
    }
};
