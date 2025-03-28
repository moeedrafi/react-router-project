import { Outlet } from "react-router";
import useTeamNames from "../hooks/useTeamNames";
import { Sidebar } from "./Sidebar";
import { Loading } from "./Loading";

export const Teams = () => {
  const { loading, response } = useTeamNames();
  const teamNames = response as string[];

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar title="Teams" list={teamNames} />

          <Outlet />
        </>
      )}
    </div>
  );
};
