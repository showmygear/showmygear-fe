import Header from 'components/organisms/Header'
import SuperCuteMenu from 'components/organisms/SuperCuteMenu'

const CheckListTemplate = (props) => {
  return <div className='checklist-template'>
    <Header title={props.title}/>
    {props.children}
    <SuperCuteMenu />
  </div>
}

export default CheckListTemplate;
