import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = Array.from({ length: number }, () => createFakeContact());

  await fs
    .readFile(PATH_DB)
    .then((data) => [...JSON.parse(data), ...contacts])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.log(error));
};

generateContacts(5);
