System.register(['angular2/core', './map.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, map_service_1;
    var LegendComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }],
        execute: function() {
            LegendComponent = (function () {
                function LegendComponent(elRef, _mapService) {
                    this.elRef = elRef;
                    this._mapService = _mapService;
                }
                LegendComponent.prototype.init = function (map, layerInfos) {
                    this.legend = this._mapService.createLegend({ map: map, layerInfos: layerInfos }, this.elRef.nativeElement.firstChild);
                    this.legend.startup();
                };
                LegendComponent = __decorate([
                    core_1.Component({
                        selector: 'esri-legend',
                        template: '<div></div>',
                        providers: [map_service_1.MapService]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
                ], LegendComponent);
                return LegendComponent;
            }());
            exports_1("LegendComponent", LegendComponent);
        }
    }
});
//# sourceMappingURL=legend.component.js.map