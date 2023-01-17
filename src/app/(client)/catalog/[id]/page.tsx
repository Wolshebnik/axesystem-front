import { Params } from 'types';

async function getData(id: string) {
  try {
    const res = await fetch('http://localhost:5000/api/category/' + id);
    return res.json();
  } catch (e) {
    return [];
  }
}

export default async function CatalogId({ params }: Params) {
  const data = await getData(params.id);
  return (
    <>
      <div>{data.title}</div>
      <div>{data.img_url}</div>
    </>
  );
}
