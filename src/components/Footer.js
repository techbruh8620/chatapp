import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer">
          <div>
            <h3>WomaShop</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur
              <br /> adipisicing elit. Maxime mollitia, molestiae quas vel
              <br /> sint commodi repudiandae consequuntur voluptatum laborum
              <br />
              numquam blanditiis harum quisquam <br /> eius sed odit fugiat
              iusto fuga praesentium optio, eaque rerum!
              <br /> Provident similique accusantium nemo autem. Veritatis
            </p>
          </div>

          <div>
            <h3>Company</h3>
            <p> About</p>
            <p> Careers</p>
          </div>
          <div>
            <h3> support</h3>
            <p>hello@Jonnasoke@gmail.com</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
