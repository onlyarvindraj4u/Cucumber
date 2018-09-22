package com.mindtree.stepDefinitions;

import java.io.IOException;

import com.mindtree.pages.CentToFahPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CentToFahStepDefs {

	CentToFahPage objCentToFahPage = new CentToFahPage();
	
	@Given("Given centigrade value as {double} to convert into fahrenheit")
	public void givenCentValueToConvertFah(double centValue) {
		objCentToFahPage.openConvertor(centValue);
	}

	@When("convert the Centigrade value into Fahrenheit")
	public void convert_the_centigrade_value_into_fahrenheit() throws IOException {
		objCentToFahPage.convertTemperature();
	}

	@Then("check {double} in output as expected")
	public void checkConvertedValue(double fahValue) {
		objCentToFahPage.checkOutput(fahValue);
	}
}
