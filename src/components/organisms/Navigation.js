import Button from 'components/atoms/Button'

const Navigation = ({
  userName,

}) => {
  return (
    <div className='navigation'>
      <div className='navigation-header'>{userName}</div>
      <div className='navigation-body'>
        <Button variant='default' fullWidth>新增檢查表</Button>
        <Button variant='default' fullWidth>新增裝備</Button>
      </div>
      <div className='navigation-footer'>
        <Button variant='secondary'>設定</Button>
      </div>
    </div>
  )
}


export default Navigation
