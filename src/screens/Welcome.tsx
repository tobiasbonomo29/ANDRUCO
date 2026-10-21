import { copy } from "../texts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Logo, TwitchLogo, EmptyArt } from "../components/UI";
import { texts } from "../texts";
export default function Welcome() {
  const [slide, setSlide] = useState(0);
  const [touch, setTouch] = useState(0);
  return (
    <div
      className="welcome"
      onTouchStart={(e) => setTouch(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const delta = touch - e.changedTouches[0].clientX;
        if (Math.abs(delta) > 40) setSlide((slide + (delta > 0 ? 1 : 2)) % 3);
      }}
    >
      <Logo />
      <span className="badge">{copy.t233}</span>
      <EmptyArt />
      <h1>
        {copy.t234}
        <br />
        {copy.t235}
        <span className="gold">{copy.t236}</span>
      </h1>
      <p>
        {copy.t237}
        <br />
        {copy.t238}
      </p>
      <div className="slide">
        <button
          className="icon-button"
          onClick={() => setSlide((slide + 2) % 3)}
          aria-label={copy.t239}
        >
          <ChevronLeft size={18} />
        </button>
        <h3>{texts.welcome[slide]}</h3>
        <button
          className="icon-button"
          onClick={() => setSlide((slide + 1) % 3)}
          aria-label={copy.t240}
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="dots">
        {texts.welcome.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={i === slide ? "active" : ""}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="welcome-chips">
        <span>{copy.t241}</span>
        <span>{copy.t242}</span>
        <span>{copy.t243}</span>
      </div>
      <Link to="/verify" className="button twitch">
        <TwitchLogo />
        {texts.ui.twitch}
        <ArrowRight size={17} />
      </Link>
      <small>{copy.t244}</small>
    </div>
  );
}
