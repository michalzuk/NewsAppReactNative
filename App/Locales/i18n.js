import i18n from 'i18n-js';

import en from './en.json';
import pl from './pl.json';

i18n.defaultLocale = 'pl';
i18n.locale = 'pl';
i18n.fallbacks = true;
i18n.translations = { en, pl };

export default i18n;
