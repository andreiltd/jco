import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { testDir } from './base.mjs';

await writeFile(resolve(testDir, 'bar.txt'), `'Twas brillig, and the slithy toves.\n`);
