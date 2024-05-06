import esriConfig from "@arcgis/core/config";


export function setupAuthentication(appConfig) {
    if (!appConfig || !appConfig.developerKeys || !appConfig.developerKeys.prodKey) {
        console.error("API Key is missing in application configuration.");
        return; 
    }
    const apiKey = appConfig.developerKeys.prodKey;
    esriConfig.apiKey = apiKey;
    return esriConfig.apiKey;
}
