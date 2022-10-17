//data structure -> hashtable
//new instance -> this.player[id] = 0
var Leaderboard = function() {
    this.players = {} //this.player[id] = 0
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
   //check is that player in the hash table
    if (!(playerId in this.players)) this.players[playerId] = 0
    //if not, add this player to the hash table
    this.players[playerId] += score
    //if so, sum up this player previous socre and current score
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    //create a variable, scores to store all scores from hash table
    //sort scores from high to low
    //increment top k scores and return the total
    let scores = Object.values(this.players)
    let sum = 0
    scores.sort((a, b) => b - a);
    for (let i = 0 ; i < K; i++) {
        sum += scores[i]
    }
    return sum
}
/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.players[playerId]
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */