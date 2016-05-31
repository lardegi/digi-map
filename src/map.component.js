System.register(['angular2/core', 'esri-mods', './layer'], function(exports_1, context_1) {
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
    var core_1, esri_mods_1, layer_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (esri_mods_1_1) {
                esri_mods_1 = esri_mods_1_1;
            },
            function (layer_1_1) {
                layer_1 = layer_1_1;
            }],
        execute: function() {
            //declare var esri: any;
            MapComponent = (function () {
                function MapComponent(elRef) {
                    this.elRef = elRef;
                }
                MapComponent.prototype.ngOnInit = function () {
                    // create the map
                    var m = new esri_mods_1.Map();
                    var baseLayer;
                    this.layers.forEach(function (layer) {
                        if (layer.type === layer_1.MapLayerType.ArcGisTiledLayer) {
                            baseLayer = new esri_mods_1.TileLayer(layer.url);
                            baseLayer.then(function () { });
                            m.add(baseLayer);
                        }
                        if (layer.type === layer_1.MapLayerType.ArcGISDynamicLayer) {
                            m.add(new esri_mods_1.MapImageLayer(layer.url));
                        }
                        // if (layer.type === MapLayerType.FeatureLayer) {
                        //   m.add(new FeatureLayer(layer.url));
                        // }
                    });
                    var view = new esri_mods_1.MapView({
                        container: 'map',
                        map: m, extent: this.extent
                    }).then(function (result) {
                        console.log('mapview loaded');
                    });
                    //  m.on('load', function(ev) { console.log('map loaded'); });
                    //  m.on('extent-change', function(ev) { console.log('extent changes'); console.log(JSON.stringify(ev.extent)); });
                };
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MapComponent.prototype, "layers", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', esri_mods_1.Extent)
                ], MapComponent.prototype, "extent", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'esri-map',
                        template: '<div id="map"><ng-content></ng-content></div>'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map