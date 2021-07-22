import Character from 'components/atoms/Character'

const TrailUserCard = ({
  id,
  name,
  mountain = {},
  date,
  burden,
  onClick
}) => {
  return <div className='trail-user-card' onClick={onClick}>
    <div className='user-name'>{name}</div>
    <div className='trail-data'>
      <div className='trail-info'>
        <div className='m-name'>{mountain.name}</div>
        <div className='m-mname'>{mountain.mandarinName}</div>
        <div className='date'>{date}</div>
        <div className='burden'>負重 {burden} kg</div>
      </div>
      <div className='c-wrapper'>
        <Character id={id}/>
      </div>
    </div>
  </div>
}

export default TrailUserCard
