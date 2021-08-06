import { useState } from 'react';
import './styles/root.sass';
import Navigation from 'components/organisms/Navigation';
import TrailIndex from 'components/pages/TrailIndex';
import ProfileIndex from 'components/pages/ProfileIndex';
import ChecklistPage from 'components/pages/ChecklistPage';
import SelectGearPage from 'components/pages/SelectGearPage';
import LogoImg from 'images/logo.svg';

const ShowMyGear = () => {
  // TODO: Refactor router
  const [active, setActive] = useState(0);

  // TODO: Maybe extract isOpen state to reducer?
  const [isOpen, setOpen] = useState(false);

  // TODO: Change background color in sass or layout?
  const bgColor = active >= 2 ? '#e1dcce' : '#fefefe';

  return (
    <div className='layout' style={{ background: bgColor }}>
      {
        active >= 2 ? null :
          <>
            <Navigation
              userName='鹿野忠雄'
              isOpen={isOpen}
              onClick={active=>{
                setActive(active)
                setOpen(false)
              }}/>
            <div className='logo' onClick={()=>setOpen(isOpen=>!isOpen)}>
              <img src={LogoImg} alt='ShowMyGear' />
            </div>
          </>
      }
      {
        active === 0 ? <TrailIndex onClick={setActive} /> : null
      }
      {
        active === 1 ? <ProfileIndex /> : null
      }
      {
        active === 2 ? <ChecklistPage setActive={setActive} /> : null
      }
      {
        active === 3 ? <SelectGearPage /> : null
      }
    </div>
  );
}

export default ShowMyGear;
