import Clock from 'components/Clock';

const HomePage = (): JSX.Element => {
  return <div>{false && <Clock />}</div>;
};

export default HomePage;
