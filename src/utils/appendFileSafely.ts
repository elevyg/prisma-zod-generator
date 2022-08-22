import fs from 'fs';
import { formatFile } from './formatFile';
import path from 'path';

export const appendFileSafely = async (appendLocation: string, content: any) => {
  fs.mkdirSync(path.dirname(appendLocation), {
    recursive: true,
  });
  
  fs.appendFileSync(appendLocation, await formatFile(content));
};
