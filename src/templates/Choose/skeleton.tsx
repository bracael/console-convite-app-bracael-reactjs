import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

// styles
import * as S from './styles'
import { Div } from 'styles/skeleton'

const SkeletonChoose = () => {
  return (
    <S.Main>
      <S.Head>
        <S.Brand>
          <img src="/img/codecoast_104x60_gray.png" width="84" />
        </S.Brand>
        <Div
          width={289}
          displayFlex
          alignItems="center"
          floatChild="left"
          height={25}
          widthChild="100%"
          heightChild={11}
        >
          <Skeleton height={11} />
        </Div>
      </S.Head>
      <S.Collection>
        {Array.from({ length: 3 }, (_, index) => (
          <S.Li key={index}>
            <Div width={57} widthChild="100%" floatChild="left" minHeight={22}>
              <Skeleton height={42} width={42} borderRadius="50%" />
            </Div>
            <S.Details>
              <Div
                width={56}
                displayFlex
                alignItems="center"
                floatChild="left"
                height={19}
                widthChild="100%"
                heightChild={13}
              >
                <Skeleton height={13} />
              </Div>
              <Div
                width={76}
                displayFlex
                alignItems="center"
                floatChild="left"
                height={18}
                widthChild="100%"
                heightChild={8}
              >
                <Skeleton height={8} />
              </Div>
            </S.Details>
            <S.Triggers>
              <SkeletonTheme highlightColor="#444">
                <Div
                  width={16}
                  displayFlex
                  alignItems="center"
                  justifyContent="center"
                  floatChild="left"
                  height={16}
                  widthChild={8}
                  heightChild={8}
                >
                  <Skeleton width={8} height={8} borderRadius="50%" />
                </Div>
              </SkeletonTheme>
            </S.Triggers>
          </S.Li>
        ))}
      </S.Collection>
    </S.Main>
  )
}

export default SkeletonChoose
