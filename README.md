# NBA Player Comparator
> Visualizes the stats of various NBA players to compare the best of the league

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

The NBA Player Comparator visualizes the stats of basketball players players from the National Basketball Association (NBA) from the past up until the 2016-2017 NBA season. The comparator visualizes two players at a time, comparing their overall career stats, followed by their season-by-season stats. This was built with NBA fans in mind, as well as the general public who may not know too much about basketball but are interested in some of the top players of the NBA history. 

![Final Build](final_build.png)


## Usage example


Users can go to https://mbmcpartland.github.io/NBAPlayerComparator/ to interact with the current build, or they can download the code and create their own versions of the dashboard. Users can choose players to compare from the dropdown in the top right, then interact with the visualizations using the instructions provided by the gray circle-and-question-mark tooltips located throughout the visualization. For example, a user may choose to compare Kobe Bryant to Michael Jordan. They would choose Kobe from the drop down, then they could move over to the “Playoff Results” chart to see the stats of each player for the first time each won their first championship. After hovering on the respective points to see the playoff series, they could click on a point, which updates the other stat charts to show more specific stats for that season.


For more details on the dashboard, please see the Process Book, specifically the end of the section “Design Evolution/Implementation”.



## Built With

* [D3](https://d3js.org/) - Version 4 of the visualization library used (does not need to be downloaded locally, as the index file links directly to the site)


## Local Copy

To make your own copy:
*Download repository to your local machine
*Change the “index.html” file as you would like
*To see the visualization, run a local test server on your local machine using any method. Following is one method (assuming you have python installed): 

*Open terminal/command prompt and navigate into the project repository
```
python -m http.server 8000
```
*Open a browser, then type into the navigation bar “localhost:8000” to see your visualization



## Acknowledgements

* Contributors:  Jared Sarabia and Mitchell McPartland
* Email Addresses: jared.sarabia@gmail.com, mitchmcpartland@gmail.com
* Github Usernames: jmsarabia, mbmcpartland
* Project inspired by the NBA, https://projects.fivethirtyeight.com/ , and http://buckets.peterbeshai.com/
* Design inspired by visualizations from Alark Joshi’s CS 360 Data Visualizations Class at the University of San Francisco
