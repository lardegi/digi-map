var digiMapConfig = (function () {       
        return {            
            modules: [
            'esri/map',           
            'esri/layers/layer',
            'esri/layers/ArcGISDynamicMapServiceLayer',
            'esri/layers/ArcGISTiledMapServiceLayer',
            'esri/layers/FeatureLayer',
            'esri/geometry/Extent',
			'esri/SpatialReference'
        ],          
			outModuleName: 'esri-mods'
        };
    })();