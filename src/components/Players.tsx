import { useLocation, useSearchParams } from "react-router";

export const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const teamId = searchParams.get("teamId");

  return <div className="container">Players for {teamId}</div>;
};
