import ChecklistTemplate from 'components/templates/Checklist';
import HikerAtanomy from 'images/character/hiker-atanomy.svg';

const SelectGearPage = () => {
  return <ChecklistTemplate title='行走裝備'>
    <img src={HikerAtanomy} alt='hiker atanomy' />
  </ChecklistTemplate>
}

export default SelectGearPage;
