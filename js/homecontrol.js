
	var homeController=function homeController($scope){
		$scope.welcometag="Top Sightseeing places in USA";
		$scope.disney="The Walt Disney World Resort is an entertainment complex at Bay Lake and Lake Buena Vista, Florida, near Orlando and Kissimmee, Florida. The resort is the flagship destination of Disney's worldwide corporate enterprise.";
		$scope.grandcanyon="The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section. Vast in scale, the canyon averages 10 miles across and a mile deep along its 277-mile length. Much of the area is a national park, with Colorado River white-water rapids and sweeping vistas.";
		$scope.goldengate="The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean.";
		$scope.empirestate="The Empire State Building is a 102-story skyscraper located on Fifth Avenue between West 33rd and 34th Streets in Midtown, Manhattan, New York City.";
		$scope.whitehouse="The White House is the official residence and principal workplace of the President of the United States, located at 1600 Pennsylvania Avenue NW in Washington, D.C. It has been the residence of every U.S. president since John Adams in 1800.";
		$scope.smokymountains="Great Smoky Mountains National Park straddles the border between North Carolina and Tennessee. The sprawling landscape encompasses lush forests and an abundance of wildflowers that bloom year-round. Streams, rivers and waterfalls appear along hiking routes that include a segment of the Appalachian Trail. An observation tower tops Clingmans Dome, the highest peak, offering scenic views of the mist-covered mountains.";
		$scope.nationalmall="The National Mall is a national park in downtown Washington, D.C., the capital of the United States. The National Park Service administers the National Mall, which is part of its National Mall and Memorial Parks unit.";
		$scope.niagra="Niagara Falls is the collective name for three waterfalls that straddle the international border between Canada and the United States; more specifically, between the province of Ontario and the state of New York.";
		$scope.denail="Denali National Park and Preserve encompasses 6 million acres of Alaska’s interior wilderness. Its centerpiece is 20,310-ft.-high Denali (fka Mount McKinley), North America’s tallest peak. With terrain of tundra, spruce forest and glaciers, the park is home to wildlife including grizzly bears, wolves, moose, caribou and Dall sheep. Popular activities in summer include biking, backpacking, hiking and mountaineering.";
		$scope.florida="The Florida Keys are a string of tropical islands stretching about 120 miles off the southern tip of the U.S. state of Florida, between the Atlantic Ocean and Gulf of Mexico. They’re known as a destination for fishing, boating, snorkeling and scuba diving. The southernmost city of Key West is famous for Duval Street’s many bars, Mallory Square’s nightly Sunset Celebration and the Ernest Hemingway Home and Museum.";
		$scope.kil="Kīlauea is a currently active shield volcano in the Hawaiian Islands, and the most active of the five volcanoes that together form the island of Hawaiʻi";
		$scope.yellowstone="Yellowstone National Park is a nearly 3,500-sq.-mile wilderness recreation area atop a volcanic hot spot. Mostly in Wyoming, the park spreads into parts of Montana and Idaho too. Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.";

	};

	var ddTextCollapse=function ddTextCollapse($compile) {

    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {

            // start collapsed
            scope.collapsed = false;

            // create the function to toggle the collapse
            scope.toggle = function() {
                scope.collapsed = !scope.collapsed;
            };

            // wait for changes on the text
            attrs.$observe('ddTextCollapseText', function(text) {

                // get the length from the attributes
                var maxLength = scope.$eval(attrs.ddTextCollapseMaxLength);

                if (text.length > maxLength) {
                    // split the text in two parts, the first always showing
                    var firstPart = String(text).substring(0, maxLength);
                    var secondPart = String(text).substring(maxLength, text.length);

                    // create some new html elements to hold the separate info
                    var firstSpan = $compile('<span>' + firstPart + '</span>')(scope);
                    var secondSpan = $compile('<span ng-if="collapsed">' + secondPart + '</span>')(scope);
                    var moreIndicatorSpan = $compile('<span ng-if="!collapsed">... </span>')(scope);
                    var lineBreak = $compile('<br ng-if="collapsed">')(scope);
                    var toggleButton = $compile('<span class="collapse-text-toggle" ng-click="toggle()">{{collapsed ? "less" : "more"}}</span>')(scope);

                    // remove the current contents of the element
                    // and add the new ones we created
                    element.empty();
                    element.append(firstSpan);
                    element.append(secondSpan);
                    element.append(moreIndicatorSpan);
                    element.append(lineBreak);
                    element.append(toggleButton);
                }
                else {
                    element.empty();
                    element.append(text);
                }
            });
        }
    };
};

        

	angular
			.module("myApp")
			.controller("homeController",homeController)
			.directive("ddTextCollapse",ddTextCollapse);
