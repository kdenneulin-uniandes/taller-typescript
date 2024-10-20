export class Serie {
    constructor(id, name, channel, seasons, descripcion, url, photo) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion = descripcion;
        this.url = url;
        this.photo = photo;
    }
    getId() {
        return `${this.id}`;
    }
    getName() {
        return `${this.name}`;
    }
    getChannel() {
        return `${this.channel}`;
    }
    getSeasons() {
        return `${this.seasons}`;
    }
    getUrl() {
        return `${this.url}`;
    }
    getPhoto() {
        return `${this.photo}`;
    }
    getDescription() {
        return `${this.descripcion}`;
    }
}
