import wcms from '../configs/travelavinaWcms.json';
import { LOCALE_EN, LOCALE_ID } from './Constants';

interface WcmsData {
  [language: string]: {
    [key: string]: string;
  };
}

const wcmsData: WcmsData = wcms;

export function getWcmsValue(key: string, language: string = LOCALE_ID): string {
  const locale = language === LOCALE_ID ? LOCALE_ID : LOCALE_EN;
  const value = wcmsData[locale][key];
  return !value ? "" : value;
}
