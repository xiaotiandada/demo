import React, { useCallback } from 'react'
import {
  useSpringRef,
  useChain,
  useSpring,
  animated,
  Spring,
} from 'react-spring'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import Item1 from '../../assets/svg/item1.svg'
import Item2 from '../../assets/svg/item2.svg'
import Item3 from '../../assets/svg/item3.svg'
import Item4 from '../../assets/svg/item4.svg'
import Header from '../../components/Header/index'

export default function Home() {
  // animated start
  const animatedHead = useSpring({
    from: { backgroundColor: '#fff' },
    to: { backgroundColor: '#f5f5f5' },
    duration: 1000,
  })

  const springRefTitle = useSpringRef()
  const animatedTitle = useSpring({
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ref: springRefTitle,
  })

  const springRefDescription = useSpringRef()
  const animatedDescription = useSpring({
    from: { y: 10, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ref: springRefDescription,
  })

  useChain([springRefTitle, springRefDescription], [0, 0.3])

  const animatedItemLeftConfig = useCallback((state) => {
    return state ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }
  }, [])
  const animatedItemRightConfig = useCallback((state) => {
    return state ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }
  }, [])

  // animated end

  return (
    <>
      <Header></Header>
      <StyledHead style={{ ...animatedHead }}>
        <StyledHeadTitle style={{ ...animatedTitle }}>
          Welcome to <a href="">UCenter!</a>
        </StyledHeadTitle>

        <StyledHeadDescription style={{ ...animatedDescription }}>
          Get started
        </StyledHeadDescription>
      </StyledHead>

      <StyledItem>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(styles) => (
                <StyledItemImg style={styles} src={Item1} alt="illustration" />
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(styles) => (
                <StyledItemCard href="https://nextjs.org/docs" style={styles}>
                  <h2>Documentation &rarr;</h2>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </StyledItemCard>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </StyledItem>

      <StyledItem>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(styles) => (
                <StyledItemCard href="https://nextjs.org/learn" style={styles}>
                  <h2>Learn &rarr;</h2>
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </StyledItemCard>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(styles) => (
                <StyledItemImg src={Item2} alt="illustration" style={styles} />
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </StyledItem>

      <StyledItem>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(styles) => (
                <StyledItemImg style={styles} src={Item3} alt="illustration" />
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(styles) => (
                <StyledItemCard
                  style={styles}
                  href="https://github.com/vercel/next.js/tree/master/examples"
                >
                  <h2>Examples &rarr;</h2>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </StyledItemCard>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </StyledItem>

      <StyledItem>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemLeftConfig(isVisible)}>
              {(styles) => (
                <StyledItemCard
                  style={styles}
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                >
                  <h2>Deploy &rarr;</h2>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </StyledItemCard>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring to={animatedItemRightConfig(isVisible)}>
              {(styles) => (
                <StyledItemImg style={styles} src={Item4} alt="illustration" />
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </StyledItem>
      <StyledFooter>© 2021 Meta Network All Rights Served</StyledFooter>
    </>
  )
}

const StyledHead = styled(animated.section)`
  width: 100%;
  height: 600px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledHeadTitle = styled(animated.h1)`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  a {
    color: #0070f3;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`
const StyledHeadDescription = styled(animated.p)`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`

const StyledItem = styled.section`
  max-width: 1400px;
  padding: 0 20px;
  margin: 200px auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 576px) {
    padding: 0 10px;
  }
`
const StyledItemImg = styled(animated.img)`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`
const StyledItemCard = styled(animated.a)`
  margin: 0;
  padding: 1.5rem 4rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
`

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`
