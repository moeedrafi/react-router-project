import { useSearchParams } from "react-router";

export const Players = () => {
  const [searchParams] = useSearchParams();
  const teamId = searchParams.get("teamId");

  return <div className="container">Players for {teamId}</div>;
};
