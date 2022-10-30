import i18next from 'i18next';
const translate = (key) => {
  return i18next.t(key);
};

const formatTranslate = (object) => {
  const {key, format} = object;
  return i18next.t(key, {...format});
};

const changeLanguage = (key) => {
  i18next.changeLanguage(key);
};

const translateHelper = {
  translate,
  formatTranslate,
  changeLanguage
};

export default translateHelper;
