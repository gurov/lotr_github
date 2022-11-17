export class Wrapper<T> {
    docs: T[];
}

export class SearchWrapper<T> {
    total_count: number;
    incomplete_results: boolean;
    items: T[];
}

export class Commit {
    sha: string;
    html_url: string;
    commit: {
        message: string;
    };
}

// {
//     "total_count": 67695,
//     "incomplete_results": true,
//     "items": [

export class Character {
    _id: string;
    height: string;
    race: string;
    gender: string;
    birth: string;
    spouse: string;
    death: string;
    realm: string;
    hair: string;
    name: string;
    name_en: string;
    wikiUrl: string;
}

export class GithubUser {
   login: string;
   id: number;
   avatar_url: string;
   name: string;
   company: string;
   blog: string;
   location: string;
}