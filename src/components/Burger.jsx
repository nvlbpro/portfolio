import React, { useState } from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import Menu from "./Menu";

function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BurgerMenu
        isOpen={isMenuOpen}
        width={"50%"}
        pageWrapId="page-wrap"
        outerContainerId="root"
        right
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
      >
        <Menu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </BurgerMenu>
    </>
  );
}

export default Burger;
