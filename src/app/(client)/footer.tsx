const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="flex items-center px-6 xl:px-0 py-8 bg-lighten-border dark:bg-darken-border">
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center gap-2">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h3 className="mb-1 text-xl font-semibold">Поиск по сайту</h3>

            <p className="text-center">
              Для быстрого поиска по сайту, пожалуйста, воспользуйтесь данной
              формой
            </p>
          </div>

          <div>Search</div>
        </div>
      </div>

      <div className="flex items-center px-6 xl:px-0 py-10">
        <div className="wrapper flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex flex-col justify-center items-center lg:items-start">
              <h6 className="font-bold">Телефоны:</h6>

              <p className="flex flex-col lg:flex-row items-center gap-4">
                <span> +380 (95) 598-55-40 </span>
                <span>+380 (67) 573-89-49</span>
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h6 className="font-bold">Email:</h6>
              <p className="text-center">axesysteminfo@gmail.com</p>
            </div>
          </div>

          <div className="flex gap-1">
            <span>&copy;</span>
            <p>2018 - {currentYear} AxeSystem. Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
