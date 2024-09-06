import Plyr from "plyr-react";
import "plyr-react/plyr.css";

interface Props{
    videoUrl:string;
    poster: string;
}

const VideoPlayer = ({videoUrl, poster} : Props) => {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            src: videoUrl,
            type: "video/mp4",
          },
        ],
        poster: poster,
      }}
      options={{
        controls: [
          "play-large", // The large play button in the center
          "play", // Play/pause playback
          "progress", // The progress bar and scrubber
          "current-time", // The current time of playback
          "duration", // The full duration of the media
          "mute", // Toggle mute
          "volume", // Volume control
          "captions", // Toggle captions
          "settings", // Settings menu
          "pip", // Picture-in-picture (for supported browsers)
          "airplay", // Airplay (for Apple devices)
          "fullscreen", // Toggle fullscreen
        ],
        autoplay: false, // Automatically start the video
      }}
    />
  );
};

export default VideoPlayer;
