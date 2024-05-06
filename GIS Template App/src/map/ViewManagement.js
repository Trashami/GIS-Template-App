import { loadLayers } from "./LoadLayers";
import { setWidgetsView } from '../config/SetupWidgets'; 

export const layerVisibility = {};

export async function initializeViews(mapView, sceneView, widgets, defaultActive = 'map', config, layerVisibility) {
    try {
        if (!mapView || !sceneView) throw new Error("Invalid views provided.");
        if (!config) throw new Error("Invalid configuration provided.");
    } catch (error) {
        console.error("Error initializing views:", error);
        return null;
    }

    let activeView = defaultActive === 'map' ? mapView : sceneView;
    
    const setActiveView = (newActiveView) => {
        try {
            activeView = newActiveView;
            newActiveView.container = "viewDiv";
            (newActiveView === mapView ? sceneView : mapView).container = null;
            setWidgetsView(widgets, newActiveView); 
        } catch (error) {
            console.error("Error setting active view:", error);
        }
    };

    setActiveView(activeView);
    setupViewSwitch(mapView, sceneView, () => activeView, setActiveView, config, widgets, layerVisibility);


    return {
        views: { mapView, sceneView },
        getActiveView: () => activeView,
        setActiveView
    };
}


export function setupViewSwitch(mapView, sceneView, getActiveView, setActiveView, config, widgets) {
    const viewSwitch = document.getElementById("viewSwitch");

    viewSwitch.addEventListener("calciteSwitchChange", () => {
        try {
            const currentActiveView = getActiveView();
            let newView = currentActiveView === mapView ? sceneView : mapView;

            if (newView === sceneView) {
                switchToSceneView(mapView, sceneView, newView, config, widgets);
            } else {
                switchToMapView(mapView, sceneView, newView, config, widgets);  
            }

            setActiveView(newView); 
            console.log(`Switched to ${newView === sceneView ? "SceneView" : "MapView"}`);
        } catch (error) {
            console.error("Error handling view switch:", error);
        }
    });
}


function captureLayerVisibility(activeView) {
    if (!activeView || !activeView.map || !activeView.map.layers) {
        console.error("Invalid active view or layers not available for capturing visibility.");
        return;
    }

    activeView.map.layers.forEach(layer => {
        console.log("Layer visibility logging:", layer);
        layerVisibility[layer.title] = layer.visible;
    });

    console.log("Layer visibility captured:", layerVisibility);
}

function applyLayerVisibility(activeView) {
    if (!activeView || !activeView.map || !activeView.map.layers) {
        console.error("Invalid active view or layers not available for applying visibility.");
        return;
    }

    activeView.map.layers.forEach(layer => {
        if (layerVisibility.hasOwnProperty(layer.title)) {
            layer.visible = layerVisibility[layer.title];
        }
    });

    console.log("Layer visibility applied:", layerVisibility);
}


function switchToSceneView(mapView, sceneView, newView, config, widgets) {
    console.log("Switching to scene view...");
    try {
        captureLayerVisibility(mapView);
        let currentExtent = mapView.extent;

        mapView.container = null;
        sceneView.container = "viewDiv";
        sceneView.map.basemap = "topo-3d";
        sceneView.visible = true;
        sceneView.when(() => {
            loadLayers(newView, config);
            applyLayerVisibility(newView);
            sceneView.goTo(currentExtent).catch(err => console.error("Failed to sync views:", err));
            setWidgetsView(widgets, sceneView); 
        });
    } catch (error) {
        console.error("Error switching to scene view:", error);
    }
}

function switchToMapView(mapView, sceneView, newView, config, widgets) {
    console.log("Switching to map view...");
    try {
        captureLayerVisibility(sceneView);
        let currentExtent = sceneView.extent;

        sceneView.container = null;
        mapView.container = "viewDiv";
        mapView.map.basemap = sceneView.map.basemap;
        mapView.visible = true;
        mapView.when(() => {
            loadLayers(newView, config);
            applyLayerVisibility(newView);
            mapView.goTo(currentExtent).catch(err => console.error("Failed to sync views:", err));
            setWidgetsView(widgets, mapView);
        });
    } catch (error) {
        console.error("Error switching to map view:", error);
    }
}