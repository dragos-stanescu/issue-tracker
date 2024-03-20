import Link from "next/link";
import { Bug } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const routes = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Issues",
      path: "/issues",
    },
  ];

  return (
    <div className="flex h-16 border-b justify-between items-center px-5">
      <div>
        <Link href="/">
          <Bug />
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <ul className="flex space-x-4 mr-2">
          {routes.map((route) => (
            <Link key={route.path} href={route.path}>
              {route.name}
            </Link>
          ))}
        </ul>

        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
