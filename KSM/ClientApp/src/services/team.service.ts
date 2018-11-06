import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable()
export class TeamService {
  getTeams(): Team[] {
    return [
      { drawCount: 1, image: 'ob1', loseCount: 1, matchCount: 4, name: 'KS Maków', position: 1, positionChange: 0, totalPoints: 2, winCount: 2 },
      { drawCount: 2, image: 'ob2', loseCount: 0, matchCount: 4, name: 'KS Maków 1', position: 2, positionChange: 1, totalPoints: 6, winCount: 3 },
      { drawCount: 3, image: 'ob3', loseCount: 6, matchCount: 4, name: 'KS Maków 2', position: 3, positionChange: -1, totalPoints: 6, winCount: 2 },
      { drawCount: 1, image: 'ob4', loseCount: 1, matchCount: 4, name: 'KS Maków 3', position: 4, positionChange: 0, totalPoints: 3, winCount: 4 },
      { drawCount: 1, image: 'ob5', loseCount: 3, matchCount: 4, name: 'KS Maków 4', position: 5, positionChange: 0, totalPoints: 16, winCount: 2 },
      { drawCount: 2, image: 'ob6', loseCount: 1, matchCount: 4, name: 'KS Maków 5', position: 6, positionChange: 1, totalPoints: 6, winCount: 5 },
      { drawCount: 1, image: 'ob7', loseCount: 4, matchCount: 4, name: 'KS Maków 6', position: 7, positionChange: 1, totalPoints: 12, winCount: 2 },
      { drawCount: 5, image: 'ob8', loseCount: 2, matchCount: 4, name: 'KS Maków 7', position: 8, positionChange: 0, totalPoints: 7, winCount: 1 },
      { drawCount: 1, image: 'ob9', loseCount: 6, matchCount: 4, name: 'KS Maków 8', position: 9, positionChange: -1, totalPoints: 8, winCount: 3 },
      { drawCount: 2, image: 'ob10', loseCount: 1, matchCount: 4, name: 'KS Maków 9', position: 10, positionChange: 0, totalPoints: 10, winCount: 0 },
      { drawCount: 1, image: 'ob11', loseCount: 2, matchCount: 4, name: 'KS Maków 10', position: 11, positionChange: -1, totalPoints: 6, winCount: 2 }
    ];
  }
} 
