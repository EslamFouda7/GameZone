export interface Game {
  id: number;
  name: string;
  background_image: string | null;
  rating: number;
  genres: Genre[];
}


export interface gameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string | null;
  screenshots_count: number;
  movies_count: number;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  metacritic: number;
  metacritic_url: string;
  genres: Genre[];
  parent_platforms: ParentPlatform[];
  added: number;
  game_series_count: number;
  website: string;
  released: string;
}




////////////////////////////////////////////////////

export interface screenshots {
  id: number;
  image: string,
  width: number,
  height: number,
}

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;

}

export interface ParentPlatform {
  platform: { id: number; name: string; slug: string };
}


////////////////////////////////



