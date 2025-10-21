
import * as React from 'react';
import MainSlider from '@/components/main/main.slider';
import { sendRequest } from '@/utils/api.wrapper'
export default async function HomePage() {

  const resNEW = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:3000/tracks/top',
    method: 'POST',
    queryParams: {
      limit: 5,
      genre: "NEW"
    }

  })

  const resChill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: 'http://localhost:3000/tracks/top',
    method: 'POST',
    queryParams: {
      limit: 5,
      // genre: ""
    }

  })

  // console.log('Response from API:', resNEW);

  return (
    <>
      <MainSlider
        data={resNEW?.data ?? []}
      />
      <MainSlider
        data={resChill?.data ?? []}
      />
      <MainSlider
        data={resNEW?.data ?? []}
      />


    </>

  );
}
