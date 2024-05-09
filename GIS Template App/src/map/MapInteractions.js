import PopupTemplate from '@arcgis/core/PopupTemplate';

function formatPopupContent(fields) {
    return fields.map(field => {
        if (field.name.toLowerCase().includes("url")) {
            return `<b>${field.alias}</b>: <a href="{${field.name}}" target="_blank">{${field.name}}</a>`; 
        }
        return `<b>${field.alias}</b>: {${field.name}}`;
    }).join("<br>");
}

export function setupPopups(view, layers) {
    layers.forEach(layer => {
        if (!layer.popupTemplate) { 
            layer.popupTemplate = new PopupTemplate({
                title: layer.title || `{name}`,
                content: layer.fields ? formatPopupContent(layer.fields) : "{*}"
            });
        }
    });
}

export function handleMapClick(view) {
    view.on("click", event => {
        //console.log("Map clicked, performing hitTest...");
        view.hitTest(event).then(response => {
            if (response.results.length > 0) {
                const result = response.results.find(r => r.graphic && r.graphic.layer.popupTemplate);
                if (result) {
                    const graphic = result.graphic;
                    //console.log("Displaying popup for:", graphic);
                    view.popup.open({
                        features: [graphic],
                        location: event.mapPoint 
                    });
                } else {
                    console.log("No valid results for popups found.");
                }
            } else {
                console.log("No features found at click location.");
            }
        }).catch(error => console.error("Error during hitTest:", error));
    });
}

export function initializeMapInteractions(view, layers) {
    console.log("Initializing map interactions for layers:", layers.map(l => l.title));
    setupPopups(view, layers);
    handleMapClick(view);
}
