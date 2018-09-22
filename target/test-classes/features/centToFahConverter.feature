#Author: Arvind.Kumar@mindtree.com
@TemperatureConverter
Feature: I want to convert the given centigrade temperature value into
Fahrenheit value through a standard java program and an online converter application
		
@ConverterViaStandardJavaPrgram
Scenario Outline: Centigrade to Fahrenheit Converter through standard java program
	Given Given centigrade value as <centigradeValue> to convert into fahrenheit
	When convert the Centigrade value into Fahrenheit
	Then check <FahrenheitValue> in output as expected 
	
	Examples:
	|	centigradeValue	|	FahrenheitValue	|
	|	28.5			|		83.3		|
	|	30.0			|		86.0		|
	|	56.0			|		132.8		|

@ConverterApplication
Scenario Outline: Centigrade to Fahrenheit Converter through Application
	Given lanuch "<convertorApplication>" Application
	Then page should contains title
	"""
	RapidTables
	Celsius to Fahrenheit conversion
	""" 
	When provide <centigradeValue> value
	And click on convert button
	Then check <FahrenheitValue> in output box as expected
	
	Examples:
	|	convertorApplication 														|	centigradeValue	|	FahrenheitValue	|
	|	https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html	|	28.5			|		83.3		|
	|	https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html	|	30.0			|		86.0		|
	|	https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html	|	56.0			|		132.8		|
