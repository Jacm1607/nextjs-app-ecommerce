"use client"
import styled, { keyframes, css } from "styled-components";
import TitleBorder from "../ui/titleBorder";
import { useEffect, useState } from "react";
import Img from "../ui/img";

const row1 = [
  "/brands/marca1.png",
  "/brands/marca2.png",
  "/brands/marca3.png",
  "/brands/marca4.png",
  "/brands/marca5.png",
];

const row2 = [
  "/brands/marca6.png",
  "/brands/marca7.png",
  "/brands/marca8.png",
  "/brands/marca9.png",
  "/brands/marca10.png",
];



const BranHome = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setShow((prevShow) => {
        return !prevShow; // Cambia al valor opuesto
      });
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="my-6">
      <TitleBorder title={"mARCAS RECONOCIDAS"} />
      <div className="grid grid-cols-1">
        <div className={`col-span-1 ${show ? 'hidden' : 'block'}`}>
          <div className="grid grid-cols-5 gap-4">
            {
              row1.map((img) => <div className="col-span-1">
                <Img baseUrl={false} url={img} width={"200px"} height={"200px"} objectFit={"contain"} />
              </div>)
            }
          </div>
        </div>
        <div className={`col-span-1 ${show ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-5 gap-4">
            {
              row2.map((img) => <div className="col-span-1">
                <Img baseUrl={false} url={img} width={"200px"} height={"200px"} objectFit={"contain"} />
              </div>)
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default BranHome;