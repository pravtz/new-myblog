import styled from "styled-components"
import media from "styled-media-query"

export const container = styled.div`
  max-width: 100%;
  border: 1px solid red;
  margin: auto;

  ${media.greaterThan("large")`
    width: 780px;
  `}
  ${media.greaterThan("huge")`
    width: 100%;
  `}
`

export const PostHeader = styled.header`
  color: #bbb;
  margin: auto;
  max-width: 70rem;
  padding-left: 45px;
  padding-top: 20px;
  ${media.greaterThan("medium")`
  padding: 5rem 5rem 0;
  `};
`

export const PostTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  color: ${props => props.theme.colors.titlePost};

  ${media.greaterThan("medium")`
    font-size: 4rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.6rem;
  font-weight: 200;
  padding: 0 1.4rem;
  color: ${props => props.theme.colors.descriptionPost};
  ${media.greaterThan("medium")`
    font-size: 2rem;
  `}
`

export const PostDate = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  padding: 0 0.5rem;
  color: ${props => props.theme.colors.datePost};
  ${media.greaterThan("medium")`
    font-size: 1.1rem;
    padding: 0 1.4rem;
  `}
`

export const MainContent = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #aaa;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
    ${media.lessThan("small")`
      font-size: 0.9rem;
    `}
  }

  ${media.lessThan("small")`
    max-width: 75vw;
    padding: .5rem 0.1rem .5rem 2rem;
  `}

  p {
    margin: 0 auto 1.6rem;
    color: ${props => props.theme.colors.bodytextPost};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
    color: ${props => props.theme.colors.subtitlesPosts};
    ${media.lessThan("small")`
      margin: 1.2rem auto 0.5rem;
    `}
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
      max-width: 100vw;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    max-width: 100%;
  }
  blockquote {
    color: #aaa;
    border-left: 0.3rem solid #92cdc6;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
    max-width: 100vw;
    background-color: #c7e5e2;
    overflow: scroll;

    ${media.lessThan("small")`
      padding: 0 0.2rem;
    `}

    em {
      width: 100%;
      code {
        background-color: #c7e5e2;
      }
    }
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    ${media.lessThan("small")`
      letter-spacing: auto;
      line-height: .9;
    `}
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan("small")`
      font-size: 2rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan("small")`
      font-size: 1.8rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan("small")`
      font-size: 1.3rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
    ${media.lessThan("small")`
      font-size: 1.2rem;
    `}
  }
  h5 {
    font-size: 1.2rem;
    ${media.lessThan("small")`
      font-size: 1rem;
    `}
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed #1fa1f2;
    color: #1fa1f2;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #aaa;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  /* tables */
  table {
    table-layout: fixed;
    max-width: 90%;
    margin: 10px auto;
    border-collapse: collapse;
    border: 1px solid #334;
  }
  thead th {
    background-color: #224;
    border: 1px solid #111;
  }
  th,
  td {
    padding: 1em;
    :hover {
      background-color: #222;
    }
  }
  td {
    border-bottom: 1px dotted #223;
  }
  td {
    border-left: 1px dotted #223;
  }

  .gatsby-highlight {
    background-color: #c7e5e2;
    border-radius: ${props => props.theme.definitions.borderRadius};
  }
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    .comment {
      color: #777;
    }
  }
`
