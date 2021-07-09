import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useControls } from "leva";
import styled from 'styled-components'

const StyledCardMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const StyledCard = styled(animated.div)`
  width: 300px;
  height: 340px;
  background: hotpink;
  border-radius: 5px;
  transition: box-shadow 0.5s;
  will-change: transform;
`

const StyledCardContent = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  p {
    word-break: break-word;
  }
`
const StyledCardCAvatar = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const calc = (x: number, y: number, rect: any) => [
  -(y - rect.top - rect.height / 2) / 30,
  (x - rect.left - rect.width / 2) / 30,
  1.05
];
const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card() {
  const ref = useRef<any>(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = useControls({
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    duration: 250,
    easing: (t: any) => t
  } as any);
  const props: any = useSpring({ xys, config } as any);


  const CardWrapper: React.FC = () => {
    return (
    <StyledCardContent>
      <StyledCardCAvatar>
        <img src="https://cf.shopee.tw/file/4c8551cb45858fd3750ac7a1a1074628" alt="avatar" />
      </StyledCardCAvatar>
      <p>
        learn learnlearnlearnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearn
        learnlearnlearnlearnlearnlearnlearnlearnlearnlearn
      </p>
    </StyledCardContent>
  )}

  return (
    <StyledCardMain ref={ref}>
      <StyledCard
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          console.log('rect', rect)
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <CardWrapper></CardWrapper>
      </StyledCard>
    </StyledCardMain>
  );
}
