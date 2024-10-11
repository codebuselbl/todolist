import { NavLink } from "react-router-dom";

const links = [
  { path: "/mis-datos", label: "Mis Datos" },
  { path: "/mis-tareas", label: "Mis Tareas" },
  { path: "/mis-devoluciones", label: "Mis Devoluciones" },
  { path: "/mis-comunicaciones", label: "Mis Comunicaciones" },
  { path: "/mis-mejores-amigos", label: "Mis Mejores Amigos" },
];

export const Sidebar = () => {
  return (
    <div className="border-b-2 shadow-md overflow-x-auto">
      <nav>
        <ul className="flex md:justify-between list-none h-[50px] whitespace-nowrap no-scrollbar">
          {links.map((link) => (
            <li className="flex-shrink-0" key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-center h-full text-[16px] ${
                    isActive
                      ? " border-b-4 border-[#639605] text-[#639605]"
                      : "text-black"
                  } px-4 transition-all duration-300`
                }
                style={{ minWidth: "120px" }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
