export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descripcion: string;
    url: string; 
    photo: string;

  
    constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, url: string, photo: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion = descripcion;
        this.url = url;
        this.photo = photo;
    
    }

    getId(): string {
        return `${this.id}`;
    }
  
    getName(): string {
        return `${this.name}`;
    }

    getChannel(): string {
        return `${this.channel}`;
    }

    getSeasons(): string {
        return `${this.seasons}`;
    }

    getUrl(): string {
        return `${this.url}`;
    }

  }
  