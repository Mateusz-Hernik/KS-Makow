export class Team {
  constructor(public position: number,
    public name: string,
    public image: string,
    public matchCount: number,
    public totalPoints: number,
    public winCount: number,
    public loseCount: number,
    public drawCount: number,
    public positionChange: number) { }
}
