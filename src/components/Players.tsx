import { Outlet, useSearchParams } from "react-router";
import { TeamsType } from "../utils/types";
import usePlayerNames from "../hooks/usePlayerNames";
import { Sidebar } from "./Sidebar";
import { Loading } from "./Loading";

const Players = () => {
  const [searchParams] = useSearchParams();
  const team = searchParams.get("teamId");
  const { loading, response } = usePlayerNames(team as TeamsType);
  const names = response as string[];

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar title="Players" list={names} />

          <Outlet />
        </>
      )}
    </div>
  );
};

export default Players;
