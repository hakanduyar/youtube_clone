import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const VideoDetails = () => {
  const [videos, setVideos] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data)
    );
  }, []);
  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
};

export default VideoDetails;
