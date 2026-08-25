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

export const Main = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <AboutPhotoshoot></AboutPhotoshoot>
      <Photos></Photos>
      <ShowInfoContext.Consumer>
        <AboutOrganizer></AboutOrganizer>
      </ShowInfoContext.Consumer>
      <Schedule></Schedule>
      <ShowInfoContext.Consumer>
        <Map></Map>
      </ShowInfoContext.Consumer>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};
