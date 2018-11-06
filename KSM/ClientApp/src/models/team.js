"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(position, name, image, matchCount, totalPoints, winCount, loseCount, drawCount, positionChange) {
        this.position = position;
        this.name = name;
        this.image = image;
        this.matchCount = matchCount;
        this.totalPoints = totalPoints;
        this.winCount = winCount;
        this.loseCount = loseCount;
        this.drawCount = drawCount;
        this.positionChange = positionChange;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map