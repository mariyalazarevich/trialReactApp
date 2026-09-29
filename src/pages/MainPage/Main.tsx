import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { AboutOrganizer } from '@sections/aboutOrganizer/AboutOrganizer';
import { AboutPhotoshoot } from '@sections/aboutPhotoshoot/AboutPhotoshoot';
import { Banner } from '@sections/banner/Banner';
import { Map } from '@sections/map/Map';
import { Photos } from '@sections/photos/Photos';
import { Reviews } from '@sections/reviews/Revies';
import { Schedule } from '@sections/schedule/Schedule';
import { ShowInfoContext } from 'src/contexts/showInfoContext';
import { UserContext } from 'src/contexts/userContext';

export const Main = () => {
  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
      <Banner></Banner>
      <AboutPhotoshoot></AboutPhotoshoot>
      <Photos></Photos>
      <ShowInfoContext.Consumer>{value => <AboutOrganizer {...value} />}</ShowInfoContext.Consumer>
      <Schedule></Schedule>
      <ShowInfoContext.Consumer>{value => <Map {...value} />}</ShowInfoContext.Consumer>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};
