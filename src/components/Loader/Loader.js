import React from 'react';
import { Watch } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <>
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#fffacd"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </>
    </Backdrop>
  );
};
