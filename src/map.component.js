System.register(['angular2/core', './map.service', 'esri'], function(exports_1, context_1) {
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
    var core_1, map_service_1, esri_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (esri_1_1) {
                esri_1 = esri_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(elRef, _mapService) {
                    this.elRef = elRef;
                    this._mapService = _mapService;
                    this.mapLoaded = new core_1.EventEmitter();
                }
                MapComponent.prototype.ngOnInit = function () {
                    // create the map
                    var m = new esri_1.map('map', {
                        basemap: 'streets',
                        center: [3.701191, 51.063198],
                        zoom: 14
                    });
                    var layer = new esri_1.ArcGISTiledMapServiceLayer("http://extragis.gent.be/ExtraGIS/rest/services/G_Algemeen/stadsplan_wgs84_anno/MapServer?token=apPg8G0HUnqA5JparHNqbpHJ3rctjEX2jraKzkwEVvM.");
                    m.addLayer(layer);
                    // // Create a MapView instance (for 2D viewing)
                    // var view = new MapView({
                    //   map: m,  // References a Map instance
                    //   container: this.elRef.nativeElement.firstChild  // References the ID of a DOM element
                    // });
                    // view.then((response) => {
                    //   // make response available to app
                    //   // and emit map loaded event
                    // this.response = response;
                    //   this.mapLoaded.next(response);
                    // });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MapComponent.prototype, "mapLoaded", void 0);
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'esri-map',
                        template: '<div id="map"><ng-content></ng-content></div>',
                        providers: [map_service_1.MapService],
                        inputs: ['options', 'itemId']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map