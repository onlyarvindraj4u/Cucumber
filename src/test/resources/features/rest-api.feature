#Author: Arvind.Kumar@mindtree.com
@restApi
Feature: Search the git hub repository using keyword

 @gitRepoSearch
Scenario Outline: Verify the search functionality in git hub repository using keyword
	Given user search repository by "<keyword>" 
	When user hits the request 
	Then response should be return <responseCode> code 
	
	Examples: 
		| keyword  |responseCode|
		| cucumber | 200	    |
		| Anuglar4 | 200	    |
		|	Java   | 200	    |
