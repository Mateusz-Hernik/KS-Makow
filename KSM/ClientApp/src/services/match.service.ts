import { Injectable } from '@angular/core';
import { Match } from '../models/match';

@Injectable()
export class MatchService {
  getPreviousMatch(): Match {
    return { id: 2, location: 'Madryt', startTime: Date.now(), team1: 'KS Maków', team2: 'Real Madryt' };
  }

  getNextMatch(): Match {
    return { id: 1, location: 'Maków', startTime: Date.now(), team1: 'KS Maków', team2: 'Real Madryt' };
  }
}
