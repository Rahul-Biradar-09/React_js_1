import {Button, Image} from './styledComponents'

const GameContainer = props => {
  const {eachItem, selectedImage} = props
  const {id, imageUrl} = eachItem
  const imageItem = () => {
    selectedImage(id)
  }
  return (
    <Button
      type="button"
      onClick={imageItem}
      data-testid={`${id.toLowerCase()}Button`}
    >
      <Image src={imageUrl} />
    </Button>
  )
}

export default GameContainer
