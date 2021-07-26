import Button from 'components/atoms/Button'

const Header = ({
  title,
  onCancel
}) => {

  return <div className='header'>
    <div className='title'>{title}</div>
    {
      onCancel ?
        <Button
          variant='secondary'
          onClick={onCancel}>
          取消
        </Button> : null
    }

  </div>
}

export default Header;
