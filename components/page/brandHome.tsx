"use client"
import styled, { keyframes, css } from "styled-components";
import TitleBorder from "../ui/titleBorder";

const row1 = [
    "/brands/marca1.png",
    "/brands/marca2.png",
    "/brands/marca3.png",
    "/brands/marca4.png",
    "/brands/marca5.png",
    "/brands/marca6.png",
    "/brands/marca7.png",
    "/brands/marca8.png",
    "/brands/marca9.png",
    "/brands/marca10.png",
];

const AppContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Imagen = styled.img`
  object-fit: contain;
  height: 100%;
  aspect-ratio: 16/9;
  padding: 5px 20px;
`;

const BranHome = () => {
    return (
        <div className="my-6">
            <TitleBorder title={"mARCAS RECONOCIDAS"} />
            <AppContainer>
                <Wrapper>
                    <Marquee>
                        <MarqueeGroup>
                            {row1.map((el, index) => (
                                <ImageGroup key={index}>
                                    <Imagen className="w-[260px]" src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup>
                            {row1.map((el, index) => (
                                <ImageGroup key={index}>
                                    <Imagen src={el} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                </Wrapper>
            </AppContainer>
        </div >
    )
}

export default BranHome;