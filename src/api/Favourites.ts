export default {
    token: '_nika_favourites',
    favourites: [],
    list(): number[] {
        console.log('list');
        return [12, 23];
    },

    add(key: number): void {
        console.log('add', key);
    },

    isFavourite(key: number): boolean {
        return this.favourites.includes(key);
    },
}