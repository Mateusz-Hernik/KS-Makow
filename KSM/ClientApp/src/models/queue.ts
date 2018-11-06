import { Match } from "./match";

export class Queue {
  constructor(public id: number,
    public order: number,
    public seasonId: number,
    public matches: Match[]
  ) { }
}
