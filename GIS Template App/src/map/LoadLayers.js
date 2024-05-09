import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";


function createLayer(layerConfig) {
    try {
        switch (layerConfig.type) {
            case "FeatureLayer":
                return new FeatureLayer({
                    url: layerConfig.url,
                    title: layerConfig.title,
                    featureReduction: layerConfig.clusterEnabled ? { type: "cluster" } : null
                });
            case "ImageryLayer":
                return new ImageryLayer({
                    url: layerConfig.url,
                    title: layerConfig.title,
                    opacity: .5,
                    blendMode: "multiply",
                });
            default:
                console.warn("Unsupported layer type:", layerConfig.type);
                return null;
        }
    } catch (error) {
        console.error(`Failed to create layer: ${layerConfig.title}`, error);
        return null;
    }
}

export function loadLayers(activeView, config) {
    if (activeView.map.layers.length > 0) {
        console.log("Layers already loaded.");
        return;
    }

    if (!config || !config.map || !config.map.layers) {
        console.error("Invalid layers configuration provided.");
        return;
    }

    config.map.layers.sort((b, a) => a.viewOrder - b.viewOrder).forEach(layerConfig => {
        try {
            const layer = createLayer(layerConfig);
            if (layer) {
                activeView.map.add(layer);
                console.log(`Added layer: ${layerConfig.title}`);

            } else {
                console.log(`Failed to add layer (layer creation failed): ${layerConfig.title}`);
            }
        } catch (error) {
            console.error(`Error adding layer: ${layerConfig.title}`, error);
        }
    });
}
