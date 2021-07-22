import Input from 'components/atoms/Input';
import TrailUserCard from 'components/molecules/TrailUserCard';

const trailItems = [
  {
    id: 1,
    name: '鹿野忠雄',
    mountain: {
      name: 'Tongku Saveq',
      mandarinName: '玉山主峰北峰'
    },
    date: '2021-02',
    burden: '11'
  },
  {
    id: 2,
    name: 'Ruoshin Wang',
    mountain: {
      name: 'Xalut',
      mandarinName: '白姑大山'
    },
    date: '2021-05',
    burden: '20'
  },
  {
    id: 3,
    name: '鹿野忠雄',
    mountain: {
      name: 'Xalut',
      mandarinName: '白姑大山'
    },
    date: '2021-02',
    burden: '11'
  },
  {
    id: 4,
    name: '鹿野忠雄',
    mountain: {
      name: 'Tongku Saveq',
      mandarinName: '玉山主峰北峰'
    },
    date: '2021-02',
    burden: '11'
  },
  {
    id: 5,
    name: '鹿野忠雄',
    mountain: {
      name: 'Tongku Saveq',
      mandarinName: '玉山主峰北峰'
    },
    date: '2021-02',
    burden: '11'
  },
]

const TrailIndex = ({onClick}) => {
  return (
    <div className='trail-index'>
      <h1>曬裝備</h1>
      <Input
        type='text'
        placeholder='搜尋山岳或路線' />
      {
        trailItems.map(item=>(
          <TrailUserCard
            key={item.id}
            id={item.id}
            name={item.name}
            mountain={item.mountain}
            date={item.date}
            burden={item.burden}
            onClick={()=>onClick(1)}
          />
        ))
      }
    </div>
  )
}

export default TrailIndex
