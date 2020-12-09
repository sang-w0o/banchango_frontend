import MainTitle from '../../Components/Main/MainTitle';
import MainSearch from '../../Components/Main/MainSearch';
import MainCategory from '../../Components/Main/MainCategory';
import Helmet from 'react-helmet';
import MainDescription from '../../Components/Main/MainDescription';
import MainFooter from '../../Components/Main/MainFooter';
import WhiteLabel from '../../Components/Main/WhiteLabel';
import Navbar from '../../Components/Navbar/Navbar';

const MainPresenter = () => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고중개플랫폼</title>
      </Helmet>
      <Navbar />
      <MainTitle />
      <MainSearch />
      <MainCategory />
      <WhiteLabel />
      <MainDescription />
      <WhiteLabel />
      <MainFooter />
    </>
  );
};

export default MainPresenter;
