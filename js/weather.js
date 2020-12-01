function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById('forecast').style.display = 'block'; 

    var key = '422010361b66370429ea0e94836507d4'; 

    //Set default location if one isn't provided
    let location; 

    if (document.querySelector('#location').value == '') {
        location = 'Ann Arbor';
    }
    else {
        location = document.querySelector('#location').value;
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format; 

    if (document.querySelector("#celcius").checked == true) {
        format = document.querySelector('#celcius').getAttribute('value');
    }

    else {
        format = document.querySelector('#farenheit').getAttribute('value');
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.

    if (Number.isInteger(location)) {
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location  + "&appid=" + key + "&units=" + format;
    }
    else {
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + key + "&units=" + format;
    }

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
            let text = json["weather"][0]["description"];
            location.innerHTML = json.name;
            temp.innerHTML = json["main"].temp +' with '+ text;
            let link = "http://openweathermap.org/img/wn/" + json["weather"][0]["icon"] + ".png";
            tempImg.setAttribute("src", link);
            tempImg.setAttribute("alt", text);
            tempImg.setAttribute("title", "Weather Image")
            document.getElementById("forecast").style.display = "block";

    });
}
