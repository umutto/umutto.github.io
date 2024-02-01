import { Icon, ThemeSwitch } from "@/components";

type NavbarProps = { routes: { name: string; href: string }[] };

export default function Navbar({ routes }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 flex justify-center pb-4 md:py-4">
      <div className="navbar w-full md:rounded-full bg-base-100/90 py-0 shadow-2xl outline backdrop-blur md:max-w-xl lg:max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost md:hidden"
              aria-label="Menu"
            >
              <Icon name="Menu" className="size-5" />
            </div>
            <ul className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
              {routes.map((item, index) => (
                <li key={index}>
                  <a key={item.name} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#top" className="btn btn-ghost rounded-full text-lg font-semibold">
            umu.to
          </a>
        </div>
        <div className="navbar-center ml-10 hidden md:flex">
          {routes.map((item, index) => (
            <nav key={index} className="menu menu-horizontal px-1">
              <a
                key={item.name}
                href={item.href}
                className={"btn btn-ghost rounded-full text-sm font-light"}
              >
                {item.name}
              </a>
            </nav>
          ))}
        </div>

        <div className="navbar-end h-10 scale-75">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
