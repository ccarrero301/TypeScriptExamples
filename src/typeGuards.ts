///////////////////////////////////////////////////////////////////////

// “typeof” and Type Guards
class Song {
    constructor(public title: string, public duration: string | number) { }
}

function getSongDuration(item: Song) {
    if (typeof item.duration === 'string') {
        return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;

    return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song('Wodefful wonderful', '5:31'));

const songDurationFromMS = getSongDuration(new Song('Wonderful Wonderful', 330000));

console.log(songDurationFromMS);

///////////////////////////////////////////////////////////////////////

// “instanceof” and Type Guards
class Song1 {
    constructor(public title: string, public duration: number) { }
}

class PlayList1 {
    constructor(public name: string, public songs: Song1[]) { }
}

function getItemName(item: Song1 | PlayList1) {
    if (item instanceof Song1) {
        return item.title;
    }

    return item.name;
}

const songName1 = getItemName(new Song1('Wonderful Wonderful', 300000));
const playListName1 = getItemName(new PlayList1('The best songs', [new Song1('The man', 300000)]));

console.log(songName1);
console.log(playListName1);

///////////////////////////////////////////////////////////////////////

// User Defined Type Guards
class Song2 {
    constructor(public title: string, public duration: number) { }
}

class PlayList2 {
    constructor(public name: string, public songs: Song2[]) { }
}

function IsSong2(item: any): item is Song2 {
    return item instanceof Song2;
}

function getItemName2(item: Song2 | PlayList2) {
    if (IsSong2(item)) {
        return item.title;
    }

    return item.name;
}

const songName2 = getItemName(new Song2('Wonderful Wonderful', 300000));
const playListName2 = getItemName(new PlayList2('The best songs', [new Song2('The man', 300000)]));

console.log(songName2);
console.log(playListName2);

///////////////////////////////////////////////////////////////////////

// Literal Type Guards and “in” Operator
class Song3 {
    constructor(public title: string, public duration: number) { }
}

class PlayList3 {
    constructor(public name: string, public songs: Song3[]) { }
}

function IsSong3(item: any): item is Song3 {
    return 'title' in Song3;
}

function getItemName3(item: Song3 | PlayList3) {
    if (IsSong3(item)) {
        return item.title;
    }

    return item.name;
}

const songName = getItemName(new Song3('Wonderful Wonderful', 300000));
const playListName = getItemName(new PlayList3('The best songs', [new Song3('The man', 300000)]));

console.log(songName);
console.log(playListName);