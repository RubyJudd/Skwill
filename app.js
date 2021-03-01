const express = require("express");
const app = express();


app.set("view engine",  "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));


app.get("/", function(req, res){	
		res.render("landing");
});

app.get("/illustrations", function(req, res){	
		res.render("illustrations");
});

app.get("/photography", function(req, res){	
		res.render("photography");
});

app.get("/videography", function(req, res){	
		res.render("videography");
});

app.get("/animations", function(req, res){	
		res.render("animations");
});

app.get("/graphicdesigns", function(req, res){	
		res.render("graphicdesigns");
});

app.get("/websites", function(req, res){	
		res.render("websites");
});

app.get("/shortstories", function(req, res){	
		res.render("shortstories");
});

app.get("/projects", function(req, res){	
		res.render("projects");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started");
});


