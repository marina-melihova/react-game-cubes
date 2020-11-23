const getGamePhase = state => state.game.phase;
const getCubes = state => state.game.cubes;
const getPoints = state => state.game.points;
const getTime = state => state.game.seconds;

export default { getGamePhase, getCubes, getPoints, getTime };
