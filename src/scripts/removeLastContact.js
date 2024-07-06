import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(contacts.slice(0, contacts.length - 1), undefined, 2),
      );
      console.log('Контакт зі списку був видалений');
    } else {
      console.log('Масив даних вже порожній');
    }
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
};

removeLastContact();
