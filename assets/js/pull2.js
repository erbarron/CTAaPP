// Pull.js file 
$.getJSON('https://cdn-assets-hall-com.s3.amazonaws.com/production/private/halls/53e242dc3d97d2d21e00000f/user_uploaded_files/busstops.json?AWSAccessKeyId=17VVCSSS3H6YGDY9H3G2&Expires=1440643640&Signature=tcNEiWlcxUVpGqPin3MPCaWb0jM%3D&response-content-type=application%2Fjson', function(lstops){
    $('#busstoplist').empty();
    
    $.each(busstops, function(i, busstop){
        $('#busstoplist').append(generateBusStopLink(busstop));
    });
    
    $('#busstoplist').listview('refresh');
    
});

function generateBusStopLink(busstop){
    
    return '<li><a href="javascript:void(0)'
            + '"onclick="goToStopDetailPage(\''
            + busstop.stop_name
            + '\',\''
            + busstop.station_descriptive_name +'\')">'
            + busstop.stop_name
            + '</a></li>';
}

function goToStopDetailPage(stopName){
    
     //create the page html template
  var stopPage = $("<div data-role='page' data-url=station><div data-role='header'><h1>"
                  + stopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>" 
                  + stopName + "</h4></div></div>");

  //append the new page to the page container
  stopPage.appendTo( $.mobile.pageContainer );

  //go to the newly created page
  $.mobile.changePage( stopPage );
 }  