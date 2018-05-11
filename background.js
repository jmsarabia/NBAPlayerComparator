
var backgroundsvg = d3.select("body")
                        //.style("background-color", "rgb(0, 255, 233)")
                        .append("svg")
                          .attr("id", "bkgSVG")
                          .attr("width",500)
                          .attr("transform", "translate(0, 0)")
                        .append("g");

backgroundsvg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 500)
    .attr("height", 150)       // set the x corner curve radius
    .attr("ry", 10)
    .style("fill", "tan");



//<img src="logo.png" alt="logo" width="500" height="150"  style= "left:50; right 300">

backgroundsvg.append("image")
    .attr("xlink:href", "logo.png")
    .attr("height", 240)
    .attr("width", 500)
    .attr("x", 8)
    .attr("y", -45);