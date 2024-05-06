import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
import Search from "@arcgis/core/widgets/Search";
import Print from "@arcgis/core/widgets/Print";

export async function loadWidgets() {
    const widgets = {};

    try {
        const basemapsContainer = document.getElementById("basemaps-container");
        if (basemapsContainer) {
            widgets.basemapGallery = new BasemapGallery({
                container: basemapsContainer
            });
        }
    } catch (error) {
        console.error("Failed to load BasemapGallery widget:", error);
    }

    try {
        const bookmarksContainer = document.getElementById("bookmarks-container");
        if (bookmarksContainer) {
            widgets.bookmarks = new Bookmarks({
                container: bookmarksContainer
            });
        }
    } catch (error) {
        console.error("Failed to load Bookmarks widget:", error);
    }

    try {
        const layersContainer = document.getElementById("layers-container");
        if (layersContainer) {
            widgets.layerList = new LayerList({
                container: layersContainer
            });
        }
    } catch (error) {
        console.error("Failed to load LayerList widget:", error);
    }

    try {
        const legendContainer = document.getElementById("legend-container");
        if (legendContainer) {
            widgets.legend = new Legend({
                container: legendContainer
            });
        }
    } catch (error) {
        console.error("Failed to load Legend widget:", error);
    }

    try {
        const searchContainer = document.getElementById("search-container");
        if (searchContainer) {
            widgets.search = new Search({
                container: searchContainer,
                sources: [] 
            });
        }
    } catch (error) {
        console.error("Failed to load Search widget:", error);
    }

    try {
        const printContainer = document.getElementById("print-container");
        if (printContainer) {
            widgets.print = new Print({
                container: printContainer
            });
        }
    } catch (error) {
        console.error("Failed to load Print widget:", error);
    }

    return widgets;
}


export function setWidgetsView(widgets, activeView) {
    console.log("Setting widget view...", widgets);
    Object.values(widgets).forEach(widget => {
        widget.view = activeView;
    });
}

export function setupActionBar(activeView) {

    let activeWidget;
  
    document.querySelector("calcite-action-bar").addEventListener("click", ({ target }) => {
        if (target.tagName !== "CALCITE-ACTION") return;
  
        if (activeWidget) {
            document.querySelectorAll(`[data-action-id=${activeWidget}]`).forEach(elem => elem.active = false);
            document.querySelectorAll(`[data-panel-id=${activeWidget}]`).forEach(elem => elem.hidden = true);
        }
  
        const nextWidget = target.dataset.actionId;
        if (nextWidget !== activeWidget) {
            document.querySelectorAll(`[data-action-id=${nextWidget}]`).forEach(elem => elem.active = true);
            document.querySelectorAll(`[data-panel-id=${nextWidget}]`).forEach(elem => elem.hidden = false);
            activeWidget = nextWidget;
        } else {
            activeWidget = null;
        }
    });

        document.addEventListener("calciteActionBarToggle", () => {
            console.log("Toggling action bar...", activeView);
            const expanded = activeView.padding.left === 45;
            activeView.padding.left = expanded ? 150 : 45;
    });
}

