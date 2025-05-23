import Link from "next/link";
type MenuBarProps = {
  page: string;
};

export default function MenuBar(props : MenuBarProps) {
  return (
    <div>
      <div className="menu-selection">
      <Link className="menu-item section1-name chakra-petch-light" href="/">
        หน้าหลัก
      </Link>
      <Link className="menu-item section1-name chakra-petch-light" href="/state">
        เรียนรู้ state
      </Link>
      <Link className="menu-item section1-name chakra-petch-light" href="/props">
        เรียนรู้ Props 
      </Link>
      <Link className="menu-item section1-name chakra-petch-light" href="/use-effect">
        เรียนรูั effect
      </Link>
    </div>
 <div className="p-4 bg-emerald-600">

  <p className="text-2xl  chakra-petch-light text-center">ตอนนี้อยู่หน้า {props.page}</p>
 </div>
  </div>
    
    
    
  
);
}
