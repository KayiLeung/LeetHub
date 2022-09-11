class LRUCache

=begin
    :type capacity: Integer
=end
    def initialize(capacity)
        @capacity = capacity
        @cache = {}
    end


=begin
    :type key: Integer
    :rtype: Integer
=end
    def get(key)
        if @cache[key]
            value = @cache.delete(key)
            @cache[key] = value
            return value
        else
            return -1
        end
    end


=begin
    :type key: Integer
    :type value: Integer
    :rtype: Void
=end
    def put(key, value)
        @cache.delete(key)
        @cache[key] = value
        @cache.delete(@cache.first[0]) if @cache.length > @capacity
        
    end


end

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache.new(capacity)
# param_1 = obj.get(key)
# obj.put(key, value)