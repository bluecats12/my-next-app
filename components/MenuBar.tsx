import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="menu-selection">
      <Link className="menu-item section1-name chakra-petch-light" href="/">
        หน้าหลัก
      </Link>
      <Link className="menu-item section1-name chakra-petch-light" href="/state">
        เรียนรู้ state
      </Link>
      
    </div>
  );
}
