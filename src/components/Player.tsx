import { Link, useParams } from "react-router";
import usePlayer from "../hooks/usePlayer";
import { PlayerType } from "../utils/types";
import { Loading } from "./Loading";

const Player = () => {
  const { playerId } = useParams();
  const { loading, response } = usePlayer(playerId as string);
  const player = response as PlayerType;

  if (loading) {
    return <Loading />;
  }

  if (!player) {
    return null;
  }

  return (
    <div className="panel">
      {loading ? (
        <Loading />
      ) : (
        <>
          <img
            className="avatar"
            src={player.avatar}
            alt={`Avatar for ${player.name}`}
          />

          <h1 className="medium-header">{player.name}</h1>
          <h3 className="header">{player.number}</h3>
          <div className="row">
            <ul className="info-list" style={{ marginRight: 80 }}>
              <li>
                Team
                <div>
                  <Link to={`/${player.teamId}`}>
                    {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
                  </Link>
                </div>
              </li>
              <li>
                Position<div>{player.position}</div>
              </li>
              <li>
                PPG<div>{player.ppg}</div>
              </li>
            </ul>

            <ul className="info-list">
              <li>
                APG<div>{player.apg}</div>
              </li>
              <li>
                SPG<div>{player.spg}</div>
              </li>
              <li>
                RPG<div>{player.rpg}</div>
              </li>
            </ul>
          </div>
        </>
      )}

      <div></div>
    </div>
  );
};

export default Player;
