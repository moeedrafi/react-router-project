import { Link, useLocation } from "react-router";
import { slugify } from "../utils";

function CustomLink({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  const location = useLocation();
  const split = location.pathname.split("/");
  const match = split[split.length - 1] === to;

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

export const Sidebar = ({ title, list }: { title: string; list: string[] }) => {
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
};
