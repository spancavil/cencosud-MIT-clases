import { Character } from "./Character"

export interface Response {
    info: {
        count: number,
        next: string,
        pages: number,
        prev: number
    },
    results: Character[]
}