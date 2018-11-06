export class News {
  constructor(public id: number,
    public title: string,
    public text: string,
    public author: string,
    public addDate: number,
    public commentsCount: number,
    public imgUrl: string) { }
}
