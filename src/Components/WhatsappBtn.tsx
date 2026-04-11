function WhatsappBtn() {
  return (
    <a
      target="_blank"
      href="https://wa.me/18297490064?text=Hola,%20he visto tu portafolio y me gustaria saber mas de ti."
    >
      <div className="whatsAppBtnContainer">
        <div className="whatsappLayout" />
        <img
          className="whatsappImg"
          src="/Portfolio/imgs/WS.webp"
          alt="What'sApp logo"
        />
      </div>
    </a>
  );
}

export default WhatsappBtn;
