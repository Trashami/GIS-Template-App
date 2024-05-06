import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";

export function createMap() {
    try {
        const map = new Map({ basemap: "topo" });
        console.log("Map created successfully.");
        return map;
    } catch (error) {
        console.error("Failed to create map:", error);
        return null;
    }
}

export function createMapView(container, map, config) {
    try {
        if (!map) throw new Error("Invalid map object provided.");
        const mapView = new MapView({
            container: container,
            map: map,
            zoom: config.map.zoom,
            center: config.map.center,
            constraints: {
                rotationEnabled: false
            }
        });
        console.log("MapView created successfully.");
        return mapView;
    } catch (error) {
        console.error("Failed to create MapView:", error);
        return null; 
    }
}

export function createScene() {
    try {
        const scene = new WebScene({
            basemap: "topo-3d",
            ground: "world-elevation"
        });
        console.log("WebScene created successfully.");
        return scene;
    } catch (error) {
        console.error("Failed to create WebScene:", error);
        return null; 
    }
}

export function createSceneView(container, scene, config) {
    try {
        if (!scene) throw new Error("Invalid scene object provided.");
        const sceneView = new SceneView({
            container: container,
            map: scene,
            zoom: config.map.zoom,
            center: config.map.center,
            camera: {
                position: {
                    spatialReference: {
                        latestWkid: 3857,
                        wkid: 102100
                    },
                    x: -11262192.883555487,
                    y: 2315246.351026253,
                    z: 18161244.728082635
                },
                heading: 0,
                tilt: 0.49
            }
        });
        console.log("SceneView created successfully.");
        return sceneView;
    } catch (error) {
        console.error("Failed to create SceneView:", error);
        return null;
    }
}
