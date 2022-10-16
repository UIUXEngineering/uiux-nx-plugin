import { Tree } from '@nrwl/devkit';
import { DomainGeneratorSchema } from './schema';
import { wrapAngularDevkitSchematic } from 'nx/src/adapter/ngcli-adapter';
import {default as domain} from '@angular-architects/ddd/src/generators/domain'
import {default as ui} from '@angular-architects/ddd/src/generators/ui'
import {default as util} from '@angular-architects/ddd/src/generators/util'
import {default as api} from '@angular-architects/ddd/src/generators/api'
import {default as material} from '@angular/material/schematics/ng-add'


export default async function(tree: Tree, options: DomainGeneratorSchema) {

  // https://nx.dev/more-concepts/nx-devkit-angular-devkit
  const appGenerator = wrapAngularDevkitSchematic(
    '@nrwl/angular',
    'application'
  );

  // npx nx generate @nrwl/angular:application --name=foo --directory=my-domain --routing --standalone
  await appGenerator(tree, {
    name: options.appName,
    directory: options.domain,
    routing: true,
    standalone: true,
    style: 'scss',
    tags: `domain:${options.domain}, type:app`
  });

  const chain: Promise<void>[] = [

  ]


  // npx nx generate @angular-architects/ddd:domain --name=ford

  await domain(tree, {
    name: options.domain,
    standalone: false
  })

  await ui(tree, {
    name: options.appName,
    domain: options.domain,
    standalone: true
  })

  await util(tree, {
    name: options.appName,
    domain: options.domain,
    standalone: true
  })

  await api(tree, {
    name: options.appName,
    domain: options.domain,
    standalone: true
  })

  const material = wrapAngularDevkitSchematic(
    '@angular/material',
    'ng-add'
  );

  await material(tree, {
    project: `${options.domain}-${options.appName}`,
    theme: 'custom',
    typography: true,
    animations: 'enabled'
  })

  return () => {
    console.log('done');
  }


}
