import logo from "../../assets/Image/Group 111.png";
import video from "../../assets/video/Network (1).webm";
const Footer = () => {
  return (
    <video src={video} autoPlay loop muted>
      <footer className="footer bg-slate-400 h-auto ">
        <div className="mt-20 ml-10">
          <div>
            <img src={logo} alt="" />
            <div>
              <h2 className="font-mono font-bold text-2xl mt-5">
                Digital experience reimagined
              </h2>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </video>
  );
};

export default Footer;
