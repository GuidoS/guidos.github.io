function main() {
    cartodb.createVis('map', 'https://minglmarketing.carto.com/api/v2/viz/d608dbd0-39b6-47ee-8fa6-ec1951b07d21/viz.json', {
            shareable: false,
            title: false,
            description: false,
            search: false,
            tiles_loader: false,
            center_lat: 42.3132883,
            center_lon: -71.1972408,
            zoom: 9
        })
        .done(function(vis, layers) {

            // layer 0 is the base layer, layer 1 is cartodb layer
            layers[1].setInteraction(true);
            layers[1].on('featureClick', function(e, latlng, pos, data) {
                data1 = data.cartodb_id;

                // use SQL API to extract the attribute values from the selected polygons
                var sql = new cartodb.SQL({
                    user: 'minglmarketing'
                });

                // select the attribute to extract from CartoDB table
                sql.execute(
                    "SELECT * " +
                    "FROM zones_0_2_0 " +
                    "WHERE cartodb_id IN (" + data1 + ")"
                ).done(
                    function(data) {
                        for (i = 0; i < data.total_rows; i++) {
                            var url = data.rows[i].url;
                            console.log(url);
                            top.postMessage(
                                url,
                                'http://guidos.github.io');
                            // console.log("mouse clicked : " + JSON.stringify(this));
                            // location = url
                            // window.open(url, '_blank');
                            // parent.document.location.href = url;
                        }
                    }
                );

            });
        })
        .error(function(err) {
            console.log(err);
        });
}

window.onload = main;
