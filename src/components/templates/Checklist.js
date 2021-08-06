import Header from 'components/organisms/Header'
import SuperCuteMenu from 'components/organisms/SuperCuteMenu'
import CharacterAvatar from 'components/molecules/CharacterAvatar'

const CheckListTemplate = (props) => {
  return <div className='checklist-template'>
    <Header title={props.title}/>
    <CharacterAvatar
      id='checklist-avatar'
      name='鹿野忠雄'
    />
    {props.children}
    <SuperCuteMenu />
  </div>
}

export default CheckListTemplate;
