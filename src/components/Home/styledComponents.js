import styled from 'styled-components'

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color: #223a5f;
  }
`

export const TopContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 160px;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 3px solid #ffffff;
    border-radius: 20px;
    background-color: transparent;
  }
`

export const TextContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 70%;
    width: 130px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: space-between;
    margin-left: 30px;
    flex-wrap: wrap;
  }
`

export const Heading = styled.h1`
  @media screen and (min-width: 768px) {
    font-family: ${props => props.family};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
    line-height: 0px;
  }
`

export const ScoreContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 80%;
    width: 175px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0px;
    border-radius: 12px;
    background-color: #ffffff;
    margin-right: 30px;
  }
`

export const RulesButton = styled.button`
  @media screen and (min-width: 768px) {
    height: ${props => props.height};
    width: ${props => props.width};
    font-family: 'Bree serif';
    font-size: 20px;
    font-weight: normal;
    color: #223a5f;
    border: 0px;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    align-self: ${props => props.align};
    background-color: #ffffff;
  }
`

export const PopupContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 660px;
    width: 660px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    background-color: #ffffff;
  }
`

export const CloseButton = styled(RulesButton)`
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0px;
    border-radius: 0px;
    cursor: pointer;
    outline: none;
    align-self: flex-end;
    background-color: #bfbfbf;
  }
`

export const RulesImage = styled.img`
  @media screen and (min-width: 768px) {
    height: 570px;
    width: 90%;
  }
`

export const ResultContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 320px;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const BlockContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: ${props => props.height};
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
  }
`

export const Block1 = styled.div`
  @media screen and (min-width: 768px) {
    height: 190px;
    width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const ImageElement = styled.img`
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

export const ButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    height: 320px;
    width: 340px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-around;
    flex-wrap: wrap;
  }
`
