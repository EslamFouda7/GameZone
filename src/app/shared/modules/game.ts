export interface Game {
    id: number;
    name: string;
    background_image: string | null;
    rating: number;
    genres: Genre[];
    platforms: PlatformWrapper[];
}
export interface Genre {
    id: number;
    name: string;
    slug: string;
}
export interface PlatformWrapper {
    platform: Platform;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
