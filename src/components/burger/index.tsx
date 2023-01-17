const Burger = () => {
  return (
    <div className="group lg:hidden w-5 h-5 cursor-pointer">
      <span
        className="
        relative
        flex
        w-5
        h-0.5
        bg-darken-bg-body
        dark:bg-lighten-bg-body
        top-1/2
        mt-[-1px]

        before:absolute
        before:w-5
        before:h-0.5
      before:bg-darken-bg-body
      dark:before:bg-lighten-bg-body
        before:translate-y-[-6px]
        group-hover:before:rotate-[35deg]
        group-hover:before:origin-bottom-left
        group-hover:before:w-[11px]
        group-hover:before:translate-x-[11px]
        before:transition-all
        before:duration-300

        after:absolute
        after:w-5
        after:h-0.5
      after:bg-darken-bg-body
      dark:after:bg-lighten-bg-body
        after:translate-y-[6px]
        group-hover:after:rotate-[-35deg]
        group-hover:after:origin-top-left
        group-hover:after:w-[11px]
        group-hover:after:translate-x-[11px]
        after:transition-all
        after:duration-300
        "
      />
    </div>
  );
};

export { Burger };
