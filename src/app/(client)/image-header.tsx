'use client';
import { useRouter } from 'next/navigation';

import { Button } from 'components';

export function ImageHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-screen sm:min-h-[475px] sm:h-[475px] bg-[url('/img/slider.jpg')] bg-no-repeat bg-center bg-cover ">
      <h2 className="text-white text-2xl text-center">
        Добро пожаловать на наш сайт!
      </h2>

      <h1 className="text-[40px] leading-[48px] text-center text-white">
        Здесь Вы найдете все для игровых площадок
      </h1>

      <Button
        text="Перейти в каталог"
        colorType="red"
        onClick={() => router.push('/catalog')}
      />
    </div>
  );
}
