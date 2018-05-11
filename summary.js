

var txtTopOffset = 160,
	txtLeftOffset = 800,
	txtWidth = 450
	nbaTextHeight = 240
	parCoordHeight = 300
	playoffHeight = 300;
//240 because pic height, 300 for scale height
var nbaSumText = "Basketball is one of the few sports whose exact origin is definitely known. "
					+ "In the winter of 1891–1892, Dr. James Naismith, an instructor in the YMCA Training "
					+ "College (now Springfield College) at Springfield, Mass., deliberately invented the game "
					+ "of basketball in order to provide indoor exercise and competition for the students "
					+ "between the closing of the football season and the opening of the baseball season. "
					+ "He affixed peach baskets overhead on the walls at opposite ends of the gymnasium and "
					+ "organized teams to play his new game in which the purpose was to toss an association "
					+ "(soccer) ball into one basket and prevent the opponents from tossing the ball into the "
					+ "other basket. Because Dr. Naismith had eighteen available players when he invented the "
					+ "game, the first rule was: “There shall be nine players on each side.”";

var parallelCoordText = "This parallel coordinates chart shows the stats of each player for every season, where darker lines are more recent seasons."
						+"The PPG stands for the average points scored per game, calculated over the course of the season. "
						+"The APG stands for average number of assists per game, calculated over the course of the season."
						+"An assist is noted for a player if they pass it to a teammate in a way that leads to the teammate scoring."
						+"The RBG stands for the average number of rebounds per game, calculated over the course of the season."
						+"A rebound, or sometimes referred to as a \"board\", is a stat recorded for a player who retrieves the ball after"
						+"a missed shot."
						+"The BPG stands for the average number of blocks per game, calculated over the course of the season."
						+"A block is recorded for a defensive player that deflects a shot made by an offensive player, "
						+"while not making contact with the offensive player. If contact is made, there is a foul and no block is recorded."
						+"The SPG stands for the average number of steals per game, calculated over the course of the season."
						+"A steal is awarded to a defensive player who forces a turnover to take the ball from the opposing team, changing"
						+"possession to their team. A steal can be from intercepting a pass or a dribble from an offensive player."
						+"The +/- stands for the plus-minus value of a player, a metric that compares how a team performs when a player"
						+"is on or off the court. The metric calculates the difference between the point differential of the player's team"
						+"against the opposing team when the player is on the court versus the point differential when the player is off the court.";

var playoffLineText = "This graph shows how far into the play offs each player made, each year they were in the NBA.  "
					+ "Year 1 stands for the player's rookie season, Year 2 stands for their next year, all the way up till "
					+ "the player's last season in the NBA or the 2016-2017 season.";

var summary = d3.select("#summary")
				.style("position","absolute")
				.style("top", txtTopOffset + "px")
				.style("left", txtLeftOffset + "px")
				.style("height", nbaTextHeight + "px")
				.style("width", txtWidth+"px");

var nbaSum = summary.append("svg")
				.style("width", txtWidth + 20)
				.style("height", nbaTextHeight + "px")
				.append("g")
					.style("width", txtWidth)
					.style("x", svg.x)
					.attr("transform", "translate(0,15)")
					.attr("id", "nba")
					.style("width", txtWidth);
nbaSum.append("rect")
    .attr("x", 0)
    .attr("y", -15)
    .attr("width", txtWidth+20)
    .attr("height", nbaTextHeight)
    .attr("ry", 10)       
    .style("fill", "tan");
nbaSum.append("text")
	.style("text-anchor", "left")
    .style("font-size", "15px")
	.text(nbaSumText)
		.style("width", txtWidth-50)
    .call(wrap, txtWidth-50)
    .attr("transform", "translate(10,0)")
    .attr("fill", "black")
    .style("font-family", "Helvetica, Arial, Sans-Serif");


var parCoord = summary.append("svg")
				.style("width", txtWidth+20)
				.style("height", parCoordHeight + "px")
				.attr("transform", "translate(0,90)")
				.append("g")
					.style("width", txtWidth)
					.style("x", svg.x)
					.attr("transform", "translate(0,20)")
					.attr("id", "par")
					.style("width", txtWidth);
parCoord.append("rect")
    .attr("x", 0)
    .attr("y", -15)
    .attr("width", txtWidth+20)
    .attr("height", parCoordHeight-30) 
    .attr("ry", 10)      
    .style("fill", "tan");
parCoord.append("text")
	.style("text-anchor", "left")
    .style("font-size", "15px")
	.text(parallelCoordText)
		.style("width", txtWidth-50)
    .call(wrap, txtWidth-50)
    .attr("transform", "translate(10,0)")
    .attr("fill", "black")
    .style("font-family", "Helvetica, Arial, Sans-Serif");


var playoffLine = summary.append("svg")
				.style("width", txtWidth + 20 )
				.style("height", playoffHeight + 10+ "px")
				.attr("transform", "translate(0,238)")
				.append("g")
					.style("width", txtWidth)
					.style("x", svg.x)
					.attr("transform", "translate(0,20)")
					.attr("id", "par")
					.style("width", txtWidth);
playoffLine.append("rect")
    .attr("x", 0)
    .attr("y", -15)
    .attr("width", txtWidth+20)
    .attr("height", playoffHeight-30) 
    .attr("ry", 10)      
    .style("fill", "tan");
playoffLine.append("text")
	.style("text-anchor", "left")
    .style("font-size", "15px")
	.text(playoffLineText)
		.style("width", txtWidth-55)
    .call(wrap, txtWidth-50)
    .attr("transform", "translate(10,0)")
    //.text(nbaSumText )
    .attr("fill", "black")
    .style("font-family", "Helvetica, Arial, Sans-Serif");


function wrap(atext, width) {
	console.log(typeof atext)
    var words = atext.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = atext.attr("y"),
        tspan = atext.text(null).append("tspan").attr("x", 0).attr("y", y);
    var count = 0;
    while (word = words.pop()) {
      count++;
      line.push(word);
      tspan.text(line.join(" "))
      if (tspan.node().getComputedTextLength() > txtWidth-50) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = atext.append("tspan").attr("x", 0).attr("y", 0).attr("dy", `${++lineNumber * lineHeight + y}em`).text(word);
      }
    }
    return tspan;
  
}