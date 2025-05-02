import Footer from "@/components/Footer"
import MenuBar from "@/components/MenuBar"
export default function IndexPsge(){
return(
 <div>
    <MenuBar/>
  {/*section1 */}
  <div className="section1-box">
    <h1 className="section1-name chakra-petch-light"> thayawat</h1>
    <p className="section1-meta-data">im student at Rajamagala University of Technology krugthep <br />
      i am study in the Bacher of businese<br /> </p>
    <img className="section1-profile-picture" src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/412967379_1075201676994831_1383446885828766865_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGDhibjlI8YDcwDroq9ldudL0xMZ5czvyYvTExnlzO_Jg2fNcFYK7zmiaq4mrrJr5pc84Mw_ENgRwQoXvIKwRaW&_nc_ohc=22Ucv4h8encQ7kNvwH7_56_&_nc_oc=AdldAPjJtDNNs53TKziQXKN3PtpL51GhCSQK2pixvKOudBwqHNEYRx0o0u40ESVmeqA&_nc_zt=23&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=Z2NTy4mmqoJ3nrEi02sv_g&oh=00_AfGodUSVKWgcXS-rQ0U2ElOS_neYrTyx1lKvTI_MTJoWyw&oe=6819E3C5" />
    <p className="section1-profile-description">ชอบเที่ยวชอบแมว<br />อยากเมา<br /></p>
  </div>
  {/*section2*/}
  <div className="section2-box">
    <a className="section2-contact-link chakra-petch-light" href="https://www.facebook.com/profile.php?id=100035150262142">Facebook</a>
    <br />
    <a className="section2-contact-link chakra-petch-light" href="https://www.instagram.com/">instagram</a>
    <br />
    <a className="section2-contact-link chakra-petch-light" href="https://github.com/bluecats12">github</a>
    <br />
  </div>
  {/*section3*/}
  <div className="section3-box">
    <div className="section3-box-a">
      <h1 className="section1-name chakra-petch-light">ประวัติการศึกษา
        <br /> ม.ต้น โรงเรียนวัดบางปะกอก
        <br />ปวช-ปวส วิทลัยพณิชการเชตุพน
      </h1></div>
    <div className="section3-box-b">
      <h1 className="section1-name chakra-petch-light">ประสบการณ์ฝึกงาน
        <br />การไฟฟ้านครหลวง
        <br />แผนก IT
      </h1>
    </div>
    
  </div>
  <Footer/>
</div>

)
}