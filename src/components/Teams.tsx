import { Outlet } from "react-router";
import useTeamNames from "../hooks/useTeamNames";
import { Sidebar } from "./Sidebar";

export const Teams = () => {
  const { loading, response } = useTeamNames();
  const teamNames = response as string[];

  if (loading) {
    return <p>LOADING...</p>;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />

      <Outlet />
    </div>
  );
};
