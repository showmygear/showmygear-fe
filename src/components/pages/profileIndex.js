import Character from 'components/atoms/Character';
import TrailMountainCard from 'components/molecules/TrailMountainCard';
import GearItem from 'components/molecules/GearItem';
import ImgBackpack from 'images/gear-backpack.svg';
import ImgBrimHat from 'images/gear-brim-hat.svg';


const gearItems = {
  0: { img: ImgBackpack, text: 'Backpack'},
  1: { img: ImgBrimHat, text: 'Brim Hat'},
}

const trails = [
  {
    id: 1,
    title: 'Tongku Saveq',
    subtitle: '布農語：最後的避難所',
    category: '玉山群峰'
  },
  {
    id: 2,
    title: 'Xalut',
    subtitle: '泰雅語：住在深山的人',
    category: '白姑大山'
  },
  {
    id: 3,
    title: 'Tongku Saveq',
    subtitle: '布農語：最後的避難所',
    category: '玉山群峰'
  },
  {
    id: 4,
    title: 'Xalut',
    subtitle: '泰雅語：住在深山的人',
    category: '白姑大山'
  },
  {
    id: 5,
    title: 'Tongku Saveq',
    subtitle: '布農語：最後的避難所',
    category: '玉山群峰'
  },
]

const getItems = () => {
  let items = [];
  const q = Math.floor(Math.random() * 10);
  for (let i = 0; i <= q; i++) {
    const g = Math.floor(Math.random() * 2);
      items.push(
        <div className='item'>
          <GearItem
            imgUrl={gearItems[g].img}
            name={gearItems[g].text} />
        </div>
      )
  }
  items[1] = <div className='item'>
    <Character id={100} />
  </div>
  return items
}

const ProfileIndex = () => {
  return <div className='profile-index'>
    <div className='profile-user-name'>鹿野忠雄</div>
    <div className='profile-gear-list'>
      {getItems()}
    </div>
    <div className='trail-list-title'>裝備檢查表</div>
    <div className='trail-list'>
    {
      trails.map(item=><TrailMountainCard
        key={item.id}
        title={item.title}
        subTitle={item.subtitle}
        category={item.category} />)
    }
    </div>
  </div>
}

export default ProfileIndex;
