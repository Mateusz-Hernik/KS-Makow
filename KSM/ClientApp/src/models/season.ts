import { Queue } from "./queue";

export class Season {
  constructor(public id: number,
    public name: string,
    public startDate: number,
    public endDate: number,
    public queues: Queue[]
  ) { }
}
