export function setupDarkModeSwitch(getActiveView) {
    document.getElementById("darkModeSwitch").addEventListener("calciteSwitchChange", () => {
        const activeView = getActiveView();

        document.body.classList.toggle("calcite-mode-dark");

        const isDarkMode = document.body.classList.contains("calcite-mode-dark");
        const lightThemePath = '/assets/esri-themes/light/main.css';
        const darkThemePath = '/assets/esri-themes/dark/main.css';
        const themeLink = document.querySelector("#arcgis-maps-sdk-theme-link");
        themeLink.href = isDarkMode ? darkThemePath : lightThemePath;

        if (activeView.type === "2d") {
            activeView.map.basemap = isDarkMode ? "streets-night-vector" : "terrain";
        } else if (activeView.type === "3d") {
            activeView.map.basemap = isDarkMode ? "navigation-dark-3d" : "topo-3d";
        }

        console.log(`Dark mode is now ${isDarkMode ? 'enabled' : 'disabled'}. Updated basemap accordingly.`);
    });
}
