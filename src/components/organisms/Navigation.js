import Button from 'components/atoms/Button'
import CharacterAvatar from 'components/molecules/CharacterAvatar'

const Navigation = ({
  userName,
  onClick,
  isOpen
}) => {
  return (
    <div className={`navigation ${isOpen ? 'open' : ''}`}>
      <CharacterAvatar
        id={userName}
        size='small' />
      <div className='navigation-header'>{userName}</div>
      <div className='navigation-body'>
        <Button variant='default' fullWidth onClick={()=>onClick(2)}>新增檢查表</Button>
        <Button variant='default' fullWidth>新增裝備</Button>
      </div>
      <div className='navigation-footer'>
        <Button variant='secondary'>設定</Button>
      </div>
    </div>
  )
}


export default Navigation
