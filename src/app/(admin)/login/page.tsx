'use client';

import { Form, Formik } from 'formik';

import { Button, Checkbox, CustomLink, InputField } from 'components';

import { Values } from './types';
import { initialValues, validationSchema } from './config';

const Login = () => {
  const onSubmit = (values: Values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className="border-t-2 border-transparent">
      <div className="bg-white dark:bg-darken-bg-theme p-6 mt-[240px] mx-12 min-w-[224px] lg:mx-auto  max-w-full lg:w-[460px] rounded-lg drop-shadow-lighten dark:shadow-darken">
        <h1 className="mb-5">Axesystem</h1>

        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className="flex flex-col gap-5">
                <InputField
                  name="username"
                  label="Имя пользователя"
                  placeholder="Введите имя"
                />

                <InputField
                  label="Пароль"
                  name="password"
                  placeholder="Введите пароль"
                />

                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-3">
                  <CustomLink url="/" text="Забыли пароль?" />

                  <div className="flex flex-col sm:flex-row items-center gap-3 text-th">
                    <Checkbox name="checkbox" label="Запомнить меня" />
                    <Button text="Войти" borderRadius type="submit" />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;

Login.title = 'Login';
