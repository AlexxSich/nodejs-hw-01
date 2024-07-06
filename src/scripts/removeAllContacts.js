import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      await fs.writeFile(PATH_DB, JSON.stringify([]));
      console.log('Всі контакти були успішно видалені.');
    } else {
      console.log('Масив даних вже порожній');
    }
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
};

removeAllContacts();
