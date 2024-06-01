import {Logo} from "./logo";
import {Menu} from "./menu";

export function Navbar({menu_items}) {
  return (
    <nav className="bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <Menu idname={"navbar_default"} menuitems={menu_items} />
      </div>
    </nav>
  );
}
