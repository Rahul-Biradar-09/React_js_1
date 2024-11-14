import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import {
  Container,
  TopContainer,
  TextContainer,
  Heading,
  ScoreContainer,
  RulesButton,
  PopupContainer,
  CloseButton,
  RulesImage,
  ResultContainer,
  BlockContainer,
  Block1,
  ImageElement,
  ButtonContainer,
} from './styledComponents'

import GameContainer from '../GameContainer'

class Home extends Component {
  state = {
    score: 0,
    displayGame: true,
    displayResult: false,
    resultText: '',
    userImage: '',
    opponentImage: '',
  }

  selectedImage = id => {
    const {choicesList} = this.props
    const value = Math.ceil(Math.random() * 2)
    const image = choicesList.filter(eachItem => eachItem.id === id)
    if (id === 'PAPER' && choicesList[value].id === 'ROCK') {
      this.setState(prevState => ({
        resultText: 'YOU WON',
        score: prevState.score + 1,
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }
    if (id === 'SCISSORS' && choicesList[value].id === 'PAPER') {
      this.setState(prevState => ({
        resultText: 'YOU WON',
        score: prevState.score + 1,
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }
    if (id === 'ROCK' && choicesList[value].id === 'SCISSORS') {
      this.setState(prevState => ({
        resultText: 'YOU WON',
        score: prevState.score + 1,
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }

    if (id === 'SCISSORS' && choicesList[value].id === 'ROCK') {
      this.setState(prevState => ({
        resultText: 'YOU LOSE',
        score: prevState.score - 1,
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }
    if (id === 'ROCK' && choicesList[value].id === 'PAPER') {
      this.setState(prevState => ({
        resultText: 'YOU LOSE',
        score: prevState.score - 1,
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }
    if (id === 'PAPER' && choicesList[value].id === 'SCISSORS') {
      this.setState(prevState => ({
        resultText: 'YOU LOSE',
        score: prevState.score - 1,
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }
    if (id === choicesList[value].id) {
      this.setState(prevState => ({
        resultText: 'IT IS DRAW',
        displayGame: !prevState.displayGame,
        displayResult: !prevState.displayResult,
        userImage: image[0].imageUrl,
        opponentImage: choicesList[value].imageUrl,
      }))
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      displayGame: !prevState.displayGame,
      displayResult: !prevState.displayResult,
    }))
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      displayGame,
      displayResult,
      resultText,
      userImage,
      opponentImage,
    } = this.state
    return (
      <Container>
        <TopContainer>
          <TextContainer>
            <Heading
              color="#ffffff"
              size="28px"
              family="Bree serif"
              weight="normal"
            >
              ROCK
            </Heading>
            <Heading
              color="#ffffff"
              size="28px"
              family="Bree serif"
              weight="normal"
            >
              PAPER
            </Heading>
            <Heading
              color="#ffffff"
              size="28px"
              family="Bree serif"
              weight="normal"
            >
              SCISSORS
            </Heading>
          </TextContainer>
          <ScoreContainer>
            <Heading
              as="p"
              color="#223a5f"
              size="28px"
              family="Bree serif"
              weight="normal"
            >
              Score
            </Heading>
            <Heading
              as="p"
              color="#223a5f"
              size="40px"
              family="Roboto"
              weight="bold"
            >
              {score}
            </Heading>
          </ScoreContainer>
        </TopContainer>
        {displayGame && (
          <ButtonContainer>
            {choicesList.map(eachItem => (
              <GameContainer
                eachItem={eachItem}
                key={eachItem.id}
                selectedImage={this.selectedImage}
              />
            ))}
          </ButtonContainer>
        )}
        {displayResult && (
          <ResultContainer>
            <BlockContainer
              height="180px"
              direction="row"
              justify="space-between"
            >
              <Block1>
                <Heading
                  color="#ffffff"
                  size="24px"
                  family="Roboto"
                  weight="bold"
                >
                  YOU
                </Heading>
                <ImageElement src={userImage} alt="your choice" />
              </Block1>
              <Block1>
                <Heading
                  color="#ffffff"
                  size="24px"
                  family="Roboto"
                  weight="bold"
                >
                  OPPONENT
                </Heading>
                <ImageElement src={opponentImage} alt="opponent choice" />
              </Block1>
            </BlockContainer>
            <BlockContainer
              height="100px"
              direction="column"
              justify="space-between"
              align="center"
            >
              <Heading as="p" color="#ffffff" size="28px" weight="bold">
                {resultText}
              </Heading>
              <RulesButton
                type="button"
                height="43px"
                width="160px"
                onClick={this.playAgain}
              >
                PLAY AGAIN
              </RulesButton>
            </BlockContainer>
          </ResultContainer>
        )}
        <Popup
          modal
          trigger={
            <RulesButton height="43px" width="90px" align="flex-end">
              Rules
            </RulesButton>
          }
        >
          {close => (
            <PopupContainer>
              <CloseButton onClick={() => close()}>
                <RiCloseLine height={26} width={26} />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </Container>
    )
  }
}

export default Home
