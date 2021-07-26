import IconHead from 'images/icons/icon-head.svg'
import IconBag from 'images/icons/icon-bag.svg'
import IconClothes from 'images/icons/icon-clothes.svg'
import IconShoes from 'images/icons/icon-shoes.svg'
import IconTrekkingPoles from 'images/icons/icon-trekking-poles.svg'

const items = [
  {
    iconImgUrl: IconHead,
    text: '頭',
    url: 'head'
  },
  {
    iconImgUrl: IconClothes,
    text: '衣著',
    url: 'clothes'
  },
  {
    iconImgUrl: IconBag,
    text: '負重',
    url: 'burden'
  },
  {
    iconImgUrl: IconTrekkingPoles,
    text: '工具',
    url: 'tools'
  },
  {
    iconImgUrl: IconShoes,
    text: '腳',
    url: 'shoes'
  },
]

const SuperCuteItem = ({
  iconImgUrl,
  text,
  isActive,
  hasHint,
  onClick
}) => {
  const className = `${isActive ? 'is-active' : ''}${hasHint ? ' hint' : ''}`
  return <div className={`super-cute-item ${className}`} onClick={onClick}>
    <img src={iconImgUrl} alt='icon head'/>
    <div className='label'>{text}</div>
  </div>
}
const SuperCuteMenu = () => {
  return <div className='super-cute-menu'>
    {
      items.map((item, i)=>(
        <SuperCuteItem
          key={`super-cute-${item.text}`}
          isActive={i === 0}
          hasHint={i >= 2}
          iconImgUrl={item.iconImgUrl}
          text={item.text}
          onClick={()=>{}}
        />
      ))
    }
  </div>
}

export default SuperCuteMenu;
