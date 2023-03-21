import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-wc',
  outputTargets: [
    // This is required if we intend to ship Web Components in a CDN
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    {
      // This generates all Web Components separately, so they can be imported
      // without any extras.

      // Works better for importing in React Apps
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    // reactOutputTarget({
    //   componentCorePackage: 'stencil-wc',
    //   customElementsDir: 'dist/components',
    //   proxiesFile: '../stencil-react/lib/components/index.ts',
    //   includeImportCustomElements: true,
    // }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
