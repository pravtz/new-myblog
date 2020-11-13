import React from "react"
import PropsTypes from "prop-types"
import * as S from "./style"

function Card({ slug, title, description, data, category }) {
  return (
    <S.Container>
      <S.LinkWrapper to={slug}>
        <S.WrapperCard>
          <S.WrapperBox>
            <S.Box>
              <S.ContentBox>{category}</S.ContentBox>
            </S.Box>
          </S.WrapperBox>
          <S.WrapperContent>
            <section>
              <S.Title>{title}</S.Title>
              <S.SubTitle>{description}</S.SubTitle>
            </section>
            <S.FooterCard>
              <S.DataCard>{data}</S.DataCard>
            </S.FooterCard>
          </S.WrapperContent>
        </S.WrapperCard>
      </S.LinkWrapper>
    </S.Container>
  )
}
Card.propsTypes = {
  slug: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  data: PropsTypes.string.isRequired,
  category: PropsTypes.string.isRequired,
}

export default Card
