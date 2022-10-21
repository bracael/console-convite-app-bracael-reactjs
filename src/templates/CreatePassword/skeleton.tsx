import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

// styles
import * as S from './styles'
import { Div, Input } from 'styles/skeleton'

const SkeletonCreatePassword = () => {
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(120, 180)

  return (
    <Div
      style={{ width: '100%', padding: '4rem 8rem 5rem' }}
      spaceBottomChild="1.6rem"
    >
      <S.Brand>
        <img src="/img/brand/bracael-logo.svg" height="40" />
      </S.Brand>
      <S.Header>
        <Div
          displayFlex
          alignItems="center"
          justifyContent="center"
          heightChild={33}
        >
          <Skeleton width={238} height={22} />
        </Div>
        <Div
          displayFlex
          alignItems="center"
          justifyContent="center"
          heightChild={19}
        >
          <Skeleton width={331} height={9} />
        </Div>
      </S.Header>
      <S.Main>
        <SkeletonTheme highlightColor="#B4B4B4">
          <Input style={{ background: '#efefef' }}>
            <Div
              floatChild="left"
              height={36}
              heightChild={7}
              displayFlex
              alignItems="center"
              marginLeft={12}
            >
              <Skeleton width={rndInt} height={7} />
            </Div>
          </Input>
        </SkeletonTheme>
        <S.Group>
          <S.Flex>
            <Input>
              <Div
                floatChild="left"
                height={43}
                heightChild={7}
                displayFlex
                alignItems="center"
                marginLeft={12}
              >
                <Skeleton width={98} height={7} />
              </Div>
            </Input>
          </S.Flex>
          <div>
            <S.Text>
              <Div
                floatChild="left"
                heightChild={7}
                displayFlex
                alignItems="center"
                style={{ height: '15px' }}
              >
                <Skeleton width={376.8} height={7} />
              </Div>
            </S.Text>
          </div>
        </S.Group>
      </S.Main>
      <S.Footer>
        <Div displayFlex={true} spaceRightChild="1.6rem">
          <SkeletonTheme highlightColor="#B4B4B4">
            <Div displayFlex alignItems="center" justifyContent="center">
              <Skeleton width={18} height={18} />
            </Div>
          </SkeletonTheme>
          <Div
            minWidth={84}
            displayFlex
            alignItems="center"
            justifyContent="center"
            heightChild={8}
          >
            <Skeleton width={84} height={8} />
          </Div>
        </Div>
        <SkeletonTheme baseColor="#ccc" highlightColor="#000">
          <Div floatChild="left">
            <Skeleton width={132} height={36} />
          </Div>
        </SkeletonTheme>
      </S.Footer>
    </Div>
  )
}

export default SkeletonCreatePassword
