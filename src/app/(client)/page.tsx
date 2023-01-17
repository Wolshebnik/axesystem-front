import { Categories } from 'components';

import { ImageHeader } from './image-header';

async function getData() {
  try {
    const res = await fetch('http://localhost:5000/api/category');
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <ImageHeader />
      <Categories categories={data} />
    </>
  );
}
