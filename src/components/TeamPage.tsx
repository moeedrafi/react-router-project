import { useParams } from "react-router";

const TeamPage = () => {
  const { teamId } = useParams();

  return <div>TeamPage for {teamId}</div>;
};

export default TeamPage;
