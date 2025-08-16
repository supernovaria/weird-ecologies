import { QuartzComponentConstructor } from "./types"

export default (() => {
  function MusicPlayer() {
    return (
      <div className="music-player">
        <h3>Background Track</h3>
        <iframe
          width="100%"
          height="150"
          src="https://www.youtube.com/embed/vqGIKlgSl1s?list=PLwWgom5vWEjz4n2bX3_LEOBU2iiY6DCot&autoplay=0&loop=1&controls=1"
          title="Background Music Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        />
      </div>
    )
  }

  MusicPlayer.displayName = "MusicPlayer"
  return MusicPlayer
}) satisfies QuartzComponentConstructor