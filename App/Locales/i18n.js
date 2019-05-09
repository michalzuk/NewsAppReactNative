import i18n from 'i18n-js';

import en from './en.json';
import 'moment/locale/pl';
import pl from './pl.json';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en, pl };

export default i18n;
