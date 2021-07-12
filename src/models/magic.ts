export interface ScryfallResponse {
    data: Card[],
    has_more: true;
    next_page: string;
    object: string;
    total_cards: number;
}

export interface ImageUris {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
}

export interface Legalities {
    standard: string;
    future: string;
    historic: string;
    gladiator: string;
    pioneer: string;
    modern: string;
    legacy: string;
    pauper: string;
    vintage: string;
    penny: string;
    commander: string;
    brawl: string;
    duel: string;
    oldschool: string;
    premodern: string;
}

export interface Prices {
    usd?: any;
    usd_foil?: any;
    eur?: any;
    eur_foil?: any;
    tix: string;
}

export interface RelatedUris {
    gatherer: string;
    tcgplayer_infinite_articles: string;
    tcgplayer_infinite_decks: string;
    edhrec: string;
    mtgtop8: string;
}

export interface PurchaseUris {
    tcgplayer: string;
    cardmarket: string;
    cardhoarder: string;
}

export interface Card {
    object: string;
    id: string;
    oracle_id: string;
    multiverse_ids: number[];
    mtgo_id: number;
    mtgo_foil_id: number;
    name: string;
    lang: string;
    released_at: string;
    uri: string;
    scryfall_uri: string;
    layout: string;
    highres_image: boolean;
    image_status: string;
    image_uris: ImageUris;
    mana_cost: string;
    cmc: number;
    type_line: string;
    oracle_text: string;
    colors: any[];
    color_identity: any[];
    keywords: any[];
    legalities: Legalities;
    games: string[];
    reserved: boolean;
    foil: boolean;
    nonfoil: boolean;
    oversized: boolean;
    promo: boolean;
    reprint: boolean;
    variation: boolean;
    set_id: string;
    set: string;
    set_name: string;
    set_type: string;
    set_uri: string;
    set_search_uri: string;
    scryfall_set_uri: string;
    rulings_uri: string;
    prints_search_uri: string;
    collector_number: string;
    digital: boolean;
    rarity: string;
    card_back_id: string;
    artist: string;
    artist_ids: string[];
    illustration_id: string;
    border_color: string;
    frame: string;
    full_art: boolean;
    textless: boolean;
    booster: boolean;
    story_spotlight: boolean;
    edhrec_rank: number;
    prices: Prices;
    related_uris: RelatedUris;
    purchase_uris: PurchaseUris;
}
