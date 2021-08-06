const ProgressBar = ({
  title = '',
  percentage = 0
}) => {
  return <div className='progress-bar-wrapper'>
    { title ? <div className='title'>{title} {percentage} %</div> : null }
    <div className='progress-bar'>
      <div className='bar' style={{width: `${percentage}%`}}/>
    </div>
  </div>
}

export default ProgressBar
