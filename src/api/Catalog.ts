import getFetch from "./http";

export type User = {
    id: number;
    name: string;
    albums?: Album[];
    expanded?: boolean; 
};

export type Album = {
    userId: number;
    id: number;
    title: string;
    expanded?: boolean; 
    photos?: Photo[];
};

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export default {
    async users(): Promise<User[]> {
        return getFetch('users');
    },

    async albums(user_id: number): Promise<Album[]> {
        return getFetch('albums', {userId: String(user_id)})
    },

    async photos(album_id: number): Promise<Photo[]> {
        return getFetch('photos', {albumId: String(album_id)})
    },
}
