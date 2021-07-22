import { useState } from 'react';
import './styles/root.sass';
import Navigation from 'components/organisms/Navigation';
import TrailIndex from 'components/pages/trailIndex';
import ProfileIndex from 'components/pages/profileIndex';
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
        active == 1 ? <ProfileIndex /> : <TrailIndex onClick={setActive} />
      }
    </div>
  );
}

export default ShowMyGear;
