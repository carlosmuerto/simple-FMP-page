import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as HearthstoneInfoRedux from '../../../features/Info/HearthstoneInfoSlice';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {
  const dispatch = useDispatch();
  const info = useSelector((store) => store.hearthstoneInfo.info);
  useEffect(() => {
    dispatch(HearthstoneInfoRedux.fetchInfo());
  }, [dispatch]);
  return (
    <main className="app-Home">
      <h1>HOME PAGE</h1>
      {Object.keys(info).map((key) => (
        <Categories
          key={key}
          category={key}
          info={info[key]}
        /*
        props={{
          info: info[key],
          category: key,
        }}
        */
        />
      ))}
    </main>
  );
};

export default HomePage;
