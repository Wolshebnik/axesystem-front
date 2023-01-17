import Image from 'next/image';
import Link from 'next/link';

import { CategoriesProps } from './types';

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="wrapper flex flex-wrap md:justify-center gap-x-6 gap-y-10 px-10 lg:px-0 my-16">
      {categories?.length > 0 &&
        categories.map((category) => (
          <Link
            href={`catalog/${category.id}`}
            key={category.id}
            className="group flex flex-col w-full md:w-[200px] lg:w-[225px] cursor-pointer"
          >
            <div
              className="
                relative
                h-[245px]
                drop-shadow-lighten
                dark:drop-shadow-darken
                before:absolute
                before:box-border
                before:w-0
                before:h-0
                before:border-4
                before:border-transparent
                before:border-b-0
                before:border-r-0
                before:top-0
                before:left-0
                before:z-10
                group-hover:before:w-full
                group-hover:before:h-full
              group-hover:before:border-secondary
                before:transition-w
                before:transition-h
                before:duration-300
                before:ease-linear

                after:absolute
                after:box-border
                after:w-0
                after:h-0
                after:border-4
                after:border-transparent
                after:border-t-0
                after:border-l-0
                after:bottom-0
                after:right-0
                after:z-10
                group-hover:after:w-full
                group-hover:after:h-full
              group-hover:after:border-secondary
                after:transition-w
                after:transition-h
                after:duration-300
                after:ease-linear
                "
            >
              <Image
                src={category.img_url}
                alt={category.title}
                style={{ objectFit: 'fill', objectPosition: 'center center' }}
                className="w-full h-full"
                fill
                // objectFit="cover"
                // objectPosition="center center"
                // layout="fill"
              />
            </div>
            <h2 className="px-3 mt-4 text-center text-[20px] leading-30 font-bold uppercase group-hover:text-primary">
              {category.title}
            </h2>
          </Link>
        ))}
    </div>
  );
};

export { Categories };
