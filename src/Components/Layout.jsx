import React, { useState } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <div>
      <Navbar setNavHeight={setNavHeight} />
      <main style={{ paddingTop: `${navHeight}px` }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
