import { useState } from 'react';
import './styles/root.sass';
import Navigation from 'components/organisms/Navigation';
import TrailIndex from 'components/pages/trailIndex';
import ProfileIndex from 'components/pages/profileIndex';
import ChecklistPage from 'components/pages/checklistPage';
import LogoImg from 'images/logo.svg';

const ShowMyGear = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setOpen] = useState(0);

  return (
    <div className='layout'>

      <Navigation
        userName='鹿野忠雄'
        isOpen={isOpen}
        onClick={setActive}/>
      <div className='logo' onClick={()=>setOpen(isOpen=>!isOpen)}>
        <img src={LogoImg} alt='ShowMyGear' />
      </div>
      {
        active == 0 ? <TrailIndex onClick={setActive} /> : null
      }
      {
        active == 1 ? <ProfileIndex /> : null
      }
      {
        active == 2 ? <ChecklistPage /> : null
      }
    </div>
  );
}

export default ShowMyGear;
