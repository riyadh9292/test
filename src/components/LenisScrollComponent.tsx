"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

const LenisScrollComponent = ({ children }:any) => {
  return (
    <div style={{ overflow: "auto" }}>
      <ReactLenis
        root
        options={{
          easing: (x) => Math.sin((x * Math.PI) / 2),
        }}
      >
        {children}
      </ReactLenis>
    </div>
  );
};

export default LenisScrollComponent;
