import * as Yup from 'yup';

export const initialValues = {
  username: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  username: Yup.mixed()
    .oneOf(
      ['admin', 'manager'],
      'Имя пользователя должно быть admin или manager'
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .trim()
    .required('Обязательное поле')
    .min(6, 'Минимум 6 символов')
    .max(30, 'Максимум 30 символов')
    .matches(
      /(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])/,
      'Маленькие и большие латинские и цифры'
    )
    .matches(
      /^[A-Za-z0-9 «!»№;%:?*()_+\-,@#$^&[\]{}’".<>`~₴\\|/=]*[A-Za-z0-9][A-Za-z0-9 «!»№;%:?*()_+\-,@#$^&[\]{}’".<>`~₴\\|/=]*$/,
      'Маленькие и большие латинские и цифры'
    )
    .matches(/^\S+$/, 'Без пробелов'),
});
