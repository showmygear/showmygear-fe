import Character from 'components/atoms/Character'

const CharacterAvatar = ({
  id,
  name = '',
  size = ''
}) => {
  const isSmallSize = size === 'small'
  const charaSize = isSmallSize ? 26 : 38

  return <div className={`character-avatar ${isSmallSize ? 'small' : ''}`}>
    <Character id={id} width={charaSize}/>
    {
      isSmallSize ? null : <div className='character-avatar-name'>{name}</div>
    }
  </div>
}


export default CharacterAvatar
