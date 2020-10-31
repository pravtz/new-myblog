import React from "react"

import links from "./contentSocialIcons"
import Icons from "./iconsSocial"

import * as S from "./style"

const SocialIcons = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          const Icon = Icons[link.label]

          return (
            <S.SocialLinksIten key={i}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksIten>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}
export default SocialIcons
