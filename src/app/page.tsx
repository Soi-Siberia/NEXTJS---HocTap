import * as React from 'react';
import MainSlider from '@/components/main/main.slider';
import { sendRequestJS } from '@/utils/wrapper.api';

export default async function HomePage() {

  const res = await sendRequestJS({
    url: 'http://localhost:3000/tracks/top',
    method: 'POST',
    queryParams: {
      limit: 1,
      genre: "CHILL"
    }
  })

  console.log('Response from API:', res);

  return (
    <>
      <MainSlider />
      <MainSlider />
      <MainSlider />


    </>

  );
}
