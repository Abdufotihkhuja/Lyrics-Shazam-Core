import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
    isPlaying,
    activeSong,
    song,
    handlePause,
    handlePlay,
}) => {
    if (isPlaying && activeSong?.title === song.title) {
        return (
            <FaPauseCircle
                size={32}
                className={"text-gray-300"}
                onClick={handlePause}
            />
        );
    } else {
        return (
            <FaPlayCircle
                size={32}
                className={"text-gray-300"}
                onClick={handlePlay}
            />
        );
    }
};

export default PlayPause;