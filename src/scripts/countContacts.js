import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  return (
    fs
      .readFile(PATH_DB)
      .then((data) => JSON.parse(data).length)
      // .then((data) => data.length)
      .catch((error) => console.log(error))
  );
};

console.log(await countContacts());
console.log(`У файлі db.json знаходиться: ${await countContacts()} контактів`);
