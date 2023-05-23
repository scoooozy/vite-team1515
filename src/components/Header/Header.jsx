import "./header.css";

function Header(props) {
  return (
    <div>
      <header
        className="header"
        style={{
          backgroundImage: `url(${props.bg})`,
          minHeight: `${props.min}px`,
        }}
      >
        <div className="overlay"></div>
        <div className="header-content">
          <h1 className="header-title animate__animated animate__fadeIn">
            {props.wText}<span style={{ color: "#FF5F00" }} className="">{props.oText}</span>
          </h1>

          {props.children}
        </div>
      </header>
    </div>
  );
}

export default Header;
