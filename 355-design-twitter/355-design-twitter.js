
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
    let tweet = {
        userId,
        tweetId,
        time: this.tweets.length
    }
    this.tweets.push(tweet)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const len = this.tweets.length
    let res = []
    for (let i = len - 1; i >= 0; i--) {
        let tweet = this.tweets[i]
        let currTweetUserId = tweet.userId
        if (currTweetUserId === userId || this.follows[userId] && this.follows[userId][currTweetUserId]) {
            res.push(tweet.tweetId)
            if (res.length === 10) break
        }
    }
    return res
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (followerId === followeeId) return 
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