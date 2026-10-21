import { copy } from "../texts";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Pause, CheckCircle } from "lucide-react";
import { PageTitle, Progress } from "../components/UI";
import { tutorials } from "../data";
import { useApp } from "../state/AppContext";
export default function VideoDetail() {
  const { id } = useParams();
  const video = tutorials.find((v) => v.id === Number(id)) || tutorials[0];
  const [playing, setPlaying] = useState(false);
  const s = useApp();
  return (
    <>
      <PageTitle eyebrow={video.category.toUpperCase()} title={video.title} />
      <button
        className="sim-player"
        onClick={() => setPlaying(!playing)}
        aria-label={playing ? copy.t198 : copy.t199}
      >
        <div className="pitch-lines" />
        {playing ? <Pause size={46} /> : <Play size={46} />}
        <span>{playing ? copy.t200 : copy.t201}</span>
        <small>
          {video.duration} {copy.t202}
        </small>
      </button>
      <Progress value={playing ? 45 : 0} />
      <div className="card">
        <h2>{copy.t203}</h2>
        <p>{copy.t204}</p>
        <h3>{copy.t205}</h3>
        <p>{copy.t206}</p>
      </div>
      <button
        className="button primary"
        onClick={() => {
          if (!s.watched.includes(video.id))
            s.setWatched([...s.watched, video.id]);
          s.notify(copy.t207);
        }}
      >
        <CheckCircle size={18} />
        {s.watched.includes(video.id) ? copy.t208 : copy.t209}
      </button>
    </>
  );
}
