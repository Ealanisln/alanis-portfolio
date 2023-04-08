import { useSessionStorage } from "usehooks-ts";
import Navbar from "./Navbar";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const DrawerLayout = ({ children }: Props) => {
  const [open, setOpen] = useSessionStorage("drawer", false);

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="drawer">
      <input
        id="app-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={(e) => setOpen(e.target.checked)}
      />

      <div className="drawer-content flex flex-col">
        <Navbar />
        {children}
      </div>

      <div className="drawer-side">
        <label className="drawer-overlay" onClick={handleCloseDrawer}></label>

        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li onClick={handleCloseDrawer}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link href="/projects">Projects</Link>
          </li>
          <li onClick={handleCloseDrawer}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerLayout;
