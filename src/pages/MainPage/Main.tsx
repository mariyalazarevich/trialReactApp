import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { AboutOrganizer } from '@sections/aboutOrganizer/AboutOrganizer';
import { AboutPhotoshoot } from '@sections/aboutPhotoshoot/AboutPhotoshoot';
import { Banner } from '@sections/banner/Banner';
import { Map } from '@sections/map/Map';
import { Photos } from '@sections/photos/Photos';
import { Reviews } from '@sections/reviews/Revies';
import { Schedule } from '@sections/schedule/Schedule';

export const Main = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <AboutPhotoshoot></AboutPhotoshoot>
      <Photos></Photos>
      <AboutOrganizer></AboutOrganizer>
      <Schedule></Schedule>
      <Map></Map>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};
