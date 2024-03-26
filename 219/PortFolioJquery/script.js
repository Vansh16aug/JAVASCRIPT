$(document).ready(function() {
    var customStyles = `
        body{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
            h1 {
                text-align: center;
                margin-top: 20px;
        }
        #about-me {
            background-color: #f4f4f4;
            padding: 20px;
            margin: 20px;
            border-radius: 5px;
        }
        h1{
            text-align: center;
        }
        #about-me h2 {
        }
        #portfolio {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }
        
        #portfolio div {
            background-color: #eaeaea;
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
        }
        
        #portfolio a {
            text-decoration: none;
            color: #333;
            padding: 5px 10px;
            border: 1px solid #333;
            border-radius: 3px;
        }
        
        #portfolio a:hover {
            background-color: #333;
            color: #fff;
        }
        #navbar {
            background-color: #333;
            padding: 10px;
            margin-bottom: 20px;
        }

        #navbar ul {
            list-style-type: none;
            display: flex;
            justify-content: center;
        }

        #navbar li {
            margin: 0 10px;
        }

        #navbar a {
            text-decoration: none;
            color: #fff;
            padding: 5px 10px;
            border-radius: 3px;
        }

        #navbar a:hover {
            background-color: #fff;
            color: #333;
        }
    `;
    
    $('<style></style>').text(customStyles).appendTo('head');
});