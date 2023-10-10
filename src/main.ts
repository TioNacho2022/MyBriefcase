import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { MainComponent } from './app/component/main/main.component';
import { InformationComponent } from './app/component/information/information.component';
import { FinmeComponent } from './app/component/finme/finme.component';

import { createCustomElement } from '@angular/elements';

// Resto de tu código


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then((moduleRef) => {
  // Registra los componentes personalizados como elementos personalizados
  const mainComponent = createCustomElement(MainComponent, { injector: moduleRef.injector });
  customElements.define('app-main', mainComponent);

  const informationComponent = createCustomElement(InformationComponent, { injector: moduleRef.injector });
  customElements.define('app-information', informationComponent);

  const finmeComponent = createCustomElement(FinmeComponent, { injector: moduleRef.injector });
  customElements.define('app-finme', finmeComponent);

  // Define otros elementos personalizados aquí si es necesario
})
.catch(err => console.error(err));
