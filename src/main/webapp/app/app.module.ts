import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterSampleApplicationGwSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplicationGwAppRoutingModule} from './app-routing.module';
import { JhipsterSampleApplicationGwHomeModule } from './home/home.module';
import { JhipsterSampleApplicationGwAdminModule } from './admin/admin.module';
import { JhipsterSampleApplicationGwAccountModule } from './account/account.module';
import { JhipsterSampleApplicationGwEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleApplicationGwAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplicationGwSharedModule,
        JhipsterSampleApplicationGwHomeModule,
        JhipsterSampleApplicationGwAdminModule,
        JhipsterSampleApplicationGwAccountModule,
        JhipsterSampleApplicationGwEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplicationGwAppModule {}
