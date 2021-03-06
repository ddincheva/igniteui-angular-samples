import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { FinancialSampleComponent } from "../../src/app/grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "../../src/app/grid/grid-sample-3/grid-sample-3.component";
import { PinningSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-pinning.component";
import { GridComponent } from "../../src/app/grid/grid.component";
import { FilteringSampleComponent } from "../../src/app/grid/grid-filtering-sample/grid-filtering-sample.component";
import { PagingSampleComponent } from "../../src/app/grid/grid-paging-sample/grid-paging-sample.component";
import { ResizingSampleComponent } from "../../src/app/grid/grid-resizing-sample/grid-resizing-sample.component";
import { SortingSampleComponent } from "../../src/app/grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridSelectionSampleComponent } from "../../src/app/grid/grid-sample-selection/grid-selection.component";
import { HttpClientModule } from "@angular/common/http";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxInputDirective,
    IgxToastModule
} from "igniteui-angular/main";
import { DataService } from "../../src/app/grid/services/data.service";
import { LocalService } from "../../src/app/grid/grid-sample-2/grid-sample-2.component";
import { GridContextmenuComponent } from "../../src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component";
import { GridRemoteVirtualizationSampleComponent } from "../../src/app/grid/grid-sample-4/grid-sample-4.component";

export class GridConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: GridComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridComponent, DataService],
                ngDeclarations: [GridComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRippleModule,
                    IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: FinancialSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-2/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, FinancialSampleComponent, LocalService],
                ngDeclarations: [FinancialSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [LocalService]
            })
        }));

        configs.push(new Config({
            component: GridSample3Component,
            additionalFiles: ["/src/app/grid/grid-sample-3/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxInputGroupModule,
                    IgxRippleModule, IgxSwitchModule, GridSample3Component, LocalService],
                ngDeclarations: [GridSample3Component],
                ngImports: [ IgxButtonModule, IgxGridModule.forRoot(),
                    IgxInputGroupModule, IgxRippleModule, HttpClientModule]
            })
        }));

        configs.push(new Config({
            component: FilteringSampleComponent,
            additionalFiles: ["/src/app/grid/grid-filtering-sample/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ IgxGridModule, IgxRippleModule, FilteringSampleComponent, IgxInputGroupModule],
                ngDeclarations: [FilteringSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxRippleModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: PagingSampleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, PagingSampleComponent, DataService],
                ngDeclarations: [PagingSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: GridSelectionSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-selection/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridSelectionSampleComponent, LocalService],
                ngDeclarations: [GridSelectionSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [LocalService]
            })
        }));

        configs.push(new Config({
            component: ResizingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-resizing-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, ResizingSampleComponent],
                ngDeclarations: [ResizingSampleComponent],
                ngImports: [IgxGridModule.forRoot()],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: SortingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sorting-sample/nwindData.ts",
                              "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.html",
                              "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.ts",
                              "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.scss",
                            ],
            appModuleConfig: new AppModuleConfig({
                imports: [ IgxGridModule, IgxIconModule, IgxRippleModule, SortingSampleComponent, IgxInputGroupModule, GridContextmenuComponent],
                ngDeclarations: [SortingSampleComponent, GridContextmenuComponent],
                ngImports: [IgxGridModule.forRoot(), IgxRippleModule, IgxIconModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridRemoteVirtualizationSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [ GridRemoteVirtualizationSampleComponent, IgxGridModule, IgxToastModule, HttpClientModule],
                ngDeclarations: [GridRemoteVirtualizationSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxToastModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: PinningSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-pinning/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ PinningSampleComponent, IgxGridModule, IgxIconModule],
                ngDeclarations: [PinningSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxIconModule],
                ngProviders: []
            })
        }));

        return configs;
    }
}
