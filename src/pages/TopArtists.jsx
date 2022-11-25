import { useSelector } from "react-redux";

import { ArtistCard , Loader, Error } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top charts" />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white mt-4 mb-10 text-left ">
                Top Artists
            </h2>

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((track, i) => (
                    <ArtistCard 
                        key={track.key}
                        track={track}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopArtists;
