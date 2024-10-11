//GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1
// AIzaSyA10xIu97oZeAKx9ovBO0vnkKq2hzEMOD4

const GOOGLE_API_KEY = "AIzaSyA10xIu97oZeAKx9ovBO0vnkKq2hzEMOD4";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;
