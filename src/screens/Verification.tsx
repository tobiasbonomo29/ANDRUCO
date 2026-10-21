import { copy } from "../texts";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TwitchLogo, PageTitle } from "../components/UI";
export default function Verification({
  exclusive = false,
}: {
  exclusive?: boolean;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!exclusive) {
      const timer = setTimeout(() => navigate("/"), 1500);
      return () => clearTimeout(timer);
    }
  }, [exclusive, navigate]);
  return (
    <div className="center-page">
      <div className="twitch-symbol">
        <TwitchLogo />
      </div>
      <PageTitle
        title={exclusive ? copy.t191 : copy.t192}
        description={exclusive ? copy.t193 : copy.t194}
      />
      {exclusive ? (
        <>
          <Link className="button twitch" to="/verify">
            {copy.t195}
          </Link>
          <Link className="button secondary" to="/verify">
            {copy.t196}
          </Link>
          <small>{copy.t197}</small>
        </>
      ) : (
        <div className="loader" />
      )}
    </div>
  );
}
