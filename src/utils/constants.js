const GOOGLE_API_KEY = "AIzaSyAuHrzl10GQo3X2jXJ2jv90nC3XfLT1MmA";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;
