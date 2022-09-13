import { EnvValue, generatorHandler } from '@prisma/generator-helper';
import { getDMMF, parseEnvValue } from '@prisma/internals';
import { GeneratorOptions } from '@prisma/generator-helper';
import { promises as fs } from 'fs';
import path from 'path';

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output as EnvValue);
  const prismaClientProvider = options.otherGenerators.find(
    () => 'prisma-client-js',
  );

  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider?.previewFeatures,
  });

  const json = JSON.stringify(prismaClientDmmf, null, 2);

  await fs.writeFile(path.join(outputDir, 'dmmf.json'), json);
}

generatorHandler({
  onManifest: () => ({
    defaultOutput: './',
    prettyName: 'Prisma Dmmf Schema Generator',
    requiresGenerators: ['prisma-client-js'],
  }),
  onGenerate: generate,
});
