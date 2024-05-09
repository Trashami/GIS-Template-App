//custom imports here
import { createMap, createScene, createMapView, createSceneView } from "./src/map/Setup";
import { initializeViews } from "./src/map/ViewManagement";
import { loadWidgets, setWidgetsView, setupActionBar } from "./src/config/SetupWidgets"
import { setupAuthentication } from "./src/config/ManageAccess";
import { setupDarkModeSwitch } from "./src/config/UIManager";


//setup calcite components
import { setAssetPath } from "@esri/calcite-components/dist/components";

//import calcite components
import "@esri/calcite-components";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-switch";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-notice";

//import css
import "@esri/calcite-components/dist/calcite/calcite.css";
import './style.css';
import { loadLayers } from "./src/map/LoadLayers";

//set asset path (run command to copy assets to public folder `cp -r node_modules/@esri/calcite-components/dist/calcite/assets/* ./public/assets/`)
setAssetPath(location.href);

async function initializeApplication() {
  console.log("Initializing Application...");

  let config
  try {
      const configResponse = await fetch('./appConfig.json');
      if (!configResponse.ok) {
          throw new Error(`Failed to fetch config: ${configResponse.statusText}`);
      }
      config = await configResponse.json();
  } catch (error) {
      console.error("Error fetching configurations:", error);
      return; 
  }

  try {
      setupAuthentication(config);
  } catch (error) {
      console.error("Error loading widgets:", error);
      return;
  }

  let widgets;
  try {
      widgets = await loadWidgets();
      console.log("Widgets loaded successfully.");
  } catch (error) {
      console.error("Error loading widgets:", error);
      return;
  }

  let map, scene, mapView, sceneView;
  try {
      map = createMap(); 
      scene = createScene();
      mapView = createMapView("viewDiv", map, config);
      sceneView = createSceneView("viewDiv", scene, config);
  } catch (error) {
      console.error("Error creating maps and views:", error);
      return;
  }
 
  let viewManagement;

  try {
      viewManagement = await initializeViews(mapView, sceneView, widgets, 'map', config);
      const activeView = viewManagement.getActiveView(); 
      //setWidgetsView(widgets, activeView);
      setupActionBar(activeView);
  } catch (error) {
      console.error("Error initializing views:", error);
      return;
  }

  try { 
        let activeView = viewManagement.getActiveView();
        await loadLayers(activeView, config);
    } catch (error) {
        console.error("Error loading layers:", error);
    } 

  try {
    setupDarkModeSwitch(viewManagement.getActiveView);
      } catch (error) {
          console.error("Error setting dark mode:", error);
  }

  try {
      console.log("Application fully loaded. Happy Mapping! 🌍 - Geo-Jason");
      
  } catch (error) {
      console.error("Error displaying the UI:", error);
  }
  document.querySelector("calcite-shell").removeAttribute("hidden");
}

document.addEventListener("DOMContentLoaded", initializeApplication);


