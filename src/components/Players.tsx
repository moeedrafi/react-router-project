import { Link, useLocation, useSearchParams } from "react-router";
import { Teams } from "../utils/types";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utils";

function CustomLink({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;

  const styles = match ? { fontWeight: 900, color: "white" } : {};

  return (
    <li>
      <Link
        style={{ ...styles }}
        to={{ pathname: to, search: location.search }}
      >
        {children}
      </Link>
    </li>
  );
}

function Sidebar({ title, list }: { title: string; list: string[] }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink to={`${slugify(item)}`} key={item}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

export const Players = () => {
  const [searchParams] = useSearchParams();
  const team = searchParams.get("teamId");
  const { loading, response } = usePlayerNames(team as Teams);
  const names = response as string[];

  if (loading) {
    return <p>LOADING...</p>;
  }

  return (
    <div className="container">
      <Sidebar title="Players" list={names} />
    </div>
  );
};
