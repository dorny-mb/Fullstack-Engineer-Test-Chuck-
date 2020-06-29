import React from "react";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <h1 className="icon">
        App<span>Jocker</span>
      </h1>
      <div className="solganContenaire center">
        <h4 className="superbold slogan">
          let's <span>laugh</span> a little
        </h4>
        <p className="sloganParagraph my-1">
          Let's take a break and crack some jokes
        </p>
      </div>
    </header>
  );
};

export default Header;
