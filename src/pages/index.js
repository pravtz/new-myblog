import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Card from "../components/Card"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ContainerStyled>
        <WrapperCardStyled>
          <Card
            slug="valor"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            description="Donec sed risus enim. Quisque dolor ipsum, mattis at arcu id,
           sollicitudin pulvinar sapien. Vivamus nec nisl sodales, lacinia
           mauris eu, tempor lectus."
            data="18 de Janeiro de 2020"
            category="MKT"
          />
          <Card
            slug="valor"
            title="Proin molestie, diam nec fermentum imperdiet."
            description="Maecenas scelerisque rhoncus nibh sit amet aliquam. Cras convallis vel velit non lacinia. Morbi vel risus vitae mauris tincidunt blandit vitae ut ipsum."
            data="1 de Novembro de 2020"
            category="NE GO CIOS"
          />
          <Card
            slug="valor"
            title=" Nam efficitur ac mi pellentesque hendrerit. Suspendisse potenti. Curabitur venenatis accumsan leo sed iaculis.."
            description="Proin molestie, diam nec fermentum imperdiet, urna risus condimentum urna, id auctor enim sapien eleifend dolor. Vestibulum non mattis erat, vitae pretium enim. Morbi sollicitudin dolor turpis, a bibendum nisl tempus non. Praesent ut ligula tempus, pharetra neque ut, lobortis ex.."
            data="12 de Outubro de 2020"
            category="PRO GRA MA ÇÃO"
          />
        </WrapperCardStyled>
      </ContainerStyled>
    </Layout>
  )
}
const ContainerStyled = styled.div``
const WrapperCardStyled = styled.div``

export default IndexPage
