import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);

  if (contacts.length > 0) {
    console.log(`В масиві данних знаходится: ${contacts.length} контактів`);
    return data;
  } else {
    console.log('Ще не має контактів');
  }
};

console.log(await getAllContacts());
