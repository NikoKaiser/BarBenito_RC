import whatsapp from "../../assets/images/wa.svg";
import "./WaBtn.css";

function WsBtn() {
  return (
    <div className="fixed">
      <a href="https://wa.me/5493813395863?text=Hola%20quiero%20hacer%20una%20consulta" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="Whatsapp" className="waImg" />
      </a>
    </div>
  );
}

export default WsBtn;
