async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNDUzYzdkYS0wM2I5LTQ2NTYtYjQ0YS00YmNlYzA1ZWU5MjAiLCJpZCI6MzMxMzY4LCJpYXQiOjE3NTUwNDI1ODh9.MKN8zgCvadRLANRddQ8AO7T3eZzxrWMwk39zAIosiGQ';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    try {
        const ds = await Cesium.CzmlDataSource.load('escena.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();