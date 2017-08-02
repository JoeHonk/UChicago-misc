// Draws reunion graphs

var reunionThermometer = function() {

var drawGraph = function(currentNum, totalNum){
	
	//calculate the percentage size of graph regions
	if (totalNum == 100) {
		var emptyPercent = totalNum - currentNum;
		var filledPercent = currentNum;
		
		} else {
		var filledPercent = (currentNum * 100) / totalNum;
		var emptyPercent = 100 - filledPercent;
		
		};
	
	return "<div class='graph'><div class='graph-reg1' style='height: " + emptyPercent +"%;'></div><div class='graph-reg2' style='height: " + filledPercent +"%;'></div></div>";
		

} // end drawGraph function

$( "div.graph-data" ).each(function() {
		
	var total = $(this).find("span.graphGoal").html();
	var current = $(this).find("span.graphActual").html();
	
	$(this).replaceWith(drawGraph(current, total));
	
});



};