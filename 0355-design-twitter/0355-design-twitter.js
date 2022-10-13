
var Twitter = function() {
    this.tweets = []
    this.follows = {}
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    const tweet = {userId, tweetId}
    this.tweets.push(tweet)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = []
    let size = this.tweets.length
    for (let i = size - 1; i >= 0; i--) {
        const tweet = this.tweets[i]
        const tweetAuthor = tweet.userId
        
        if (tweetAuthor === userId ||( this.follows[userId] && this.follows[userId][tweetAuthor])) {
            res.push(tweet.tweetId)
        }
        if (res.length === 10) break
    }
    return res
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    // if (followerId === followeeId) return 
    if (!this.follows[followerId]) this.follows[followerId] = {}
    this.follows[followerId][followeeId] = true
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.follows[followerId]) delete this.follows[followerId][followeeId]
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */