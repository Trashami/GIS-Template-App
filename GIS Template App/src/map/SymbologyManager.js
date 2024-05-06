import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export function applySymbology(layerId, symbolConfig) {
    const layer = new FeatureLayer({
        url: layerId,
        renderer: {
            type: "simple",
            symbol: symbolConfig
        }
    });
    return layer;
}
