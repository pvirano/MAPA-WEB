var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_resul_utm1_1 = new ol.format.GeoJSON();
var features_resul_utm1_1 = format_resul_utm1_1.readFeatures(json_resul_utm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_resul_utm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_resul_utm1_1.addFeatures(features_resul_utm1_1);
var lyr_resul_utm1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_resul_utm1_1, 
                style: style_resul_utm1_1,
                popuplayertitle: 'resul_utm1',
                interactive: true,
                title: '<img src="styles/legend/resul_utm1_1.png" /> resul_utm1'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_resul_utm1_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_resul_utm1_1];
lyr_resul_utm1_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunta': 'T_Pregunta', 'N_Preg_Inc': 'N_Preg_Inc', 'N_Preg_Cor': 'N_Preg_Cor', 'Por_Corr': 'Por_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_incor': 'Preg_incor', 'Nombre': 'Nombre', });
lyr_resul_utm1_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunta': 'Range', 'N_Preg_Inc': 'Range', 'N_Preg_Cor': 'Range', 'Por_Corr': 'Range', 'Porc_Incor': 'Range', 'Porc_Total': 'Range', 'Preg_incor': 'Range', 'Nombre': 'TextEdit', });
lyr_resul_utm1_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'T_Pregunta': 'inline label - always visible', 'N_Preg_Inc': 'inline label - always visible', 'N_Preg_Cor': 'inline label - always visible', 'Por_Corr': 'inline label - always visible', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_resul_utm1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});