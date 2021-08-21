import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
     Authorization:'Bearer 3QHS03gGx8r_2JLtkdvv8dKURB3ZSgeeqX7LMpYTwOzZZ0M8ZyuFWivOxHZh3rU5q5yjdPt9ZKOepHl_G8QB7TPkntwANxcChuRZCsOMXvgaE4uQTFJknuTjKD0eYXYx'
    }
});
