
export interface User {
    id:       string;
    email:    string;
    fullName: string;
    office:   Office;
    token:    string;
}

export interface Office {
    id:   string;
    name: string;
}

