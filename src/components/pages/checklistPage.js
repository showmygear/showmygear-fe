import Button from 'components/atoms/Button';
import Header from 'components/organisms/Header';

const ChecklistPage = ({ setActive }) => {
  const progress = 20
  return (
    <div className='check-list-page'>
      <Header title='新增檢查表' onCancel={()=>setActive(0)} />
      <div>完成度 {progress}%</div>
      <div className='text'>可以從任一個類別開始填寫</div>
      <div className='columns'>
        <div className='column-item'>
          <div className='emoji'>⛰</div>
          <Button variant='default' fullWidth>山岳路線</Button>
        </div>
        <div className='column-item'>
          <div className='emoji'>🗓</div>
          <Button variant='default' fullWidth>登山日期</Button>
        </div>
      </div>
      <div className='text'>檢查表將以山岳與日期命名</div>
      <div>
        <Button variant='default' fullWidth onClick={()=>setActive(3)}>行走裝備</Button>
        <div className='text'>行走時使用的裝備</div>
      </div>
      <div>
        <Button variant='default' fullWidth>無痕山林</Button>
        <div className='text'>無痕地球更好</div>
      </div>
      <div>
        <Button variant='default' fullWidth>過夜裝備</Button>
        <div className='text'>到營地或山屋使用的裝備</div>
      </div>
      <div>
        <Button variant='default' fullWidth>補給</Button>
        <div className='text'>消耗型的物資，例如水、食物</div>
      </div>
      <div>
        <Button variant='default' fullWidth>其他</Button>
        <div className='text'>沒帶也能完成登山的裝備</div>
      </div>
    </div>
  )
}

export default ChecklistPage
