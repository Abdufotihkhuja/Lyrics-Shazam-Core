import SongBar from "./SongBar";

const RelatedSongs = ({
    data,
    isPlaying,
    activeSong,
    handlePause,
    handlePlay,
    artistId,
}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl text-white font-bold">Related Songs:</h1>

            <div className="mt-6 w-full flex flex-col">
                {data?.map((song, i) => (
                    <SongBar
                        key={`${song.key}-${artistId}`}
                        song={song}
                        i={i}
                        artistId={artistId}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        handlePauseClick={handlePause}
                        handlePlayClick={handlePlay}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedSongs;
