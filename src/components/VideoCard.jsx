import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return;
  <Card>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url} />
    </Link>
  </Card>;
};

export default VideoCard;
