
var Leaderboard = function() {
    //hash table for storing playerId and score
    //object.values and sorted is from high to low score
    //literate array of scores return the top k players
    //
    this.players = {}
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!(playerId in this.players)) this.players[playerId] = 0
    this.players[playerId] += score
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const scores = Object.values(this.players)
    
    scores.sort((a, b) => ( b - a))
    console.log(scores)
    let total = 0
    let i = 0
    while (K > i) {
        total += scores[i]
        i++
    }
    return total
};

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