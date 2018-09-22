package com.mindtree.stepDefinitions;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.mindtree.pages.CentToFahApplicationPage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CentToFahApplicationStepDefs {

	WebDriver driver;
	CentToFahApplicationPage objCentToFahApplicationPage;
	@Before("@ConverterApplication")
	public void setUp() {
		System.setProperty("webdriver.gecko.driver",
				System.getProperty("user.dir") + "/src/test/resources/" + "Drivers/" + "geckodriver.exe");
		driver = new FirefoxDriver();

		driver.manage().window().maximize();
		objCentToFahApplicationPage = new CentToFahApplicationPage(driver);
		//driver.get("https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html");
	}
	
	@Given("lanuch {string} Application")
	public void lanuch_Application(String url) {
		objCentToFahApplicationPage.lanuch_Application(url);
	}

	@Then("page should contains title")
	public void page_should_contains_title(String docString) throws IOException {
		objCentToFahApplicationPage.page_should_contains_title(docString);
	}

	@When("provide {double} value")
	public void provide_value(Double celsiusValue) throws IOException {
		objCentToFahApplicationPage.enterCelsiusValue(celsiusValue);
	}

	@When("click on convert button")
	public void click_on_convert_button() {
		objCentToFahApplicationPage.click_on_convert_button();
	}

	@Then("check {double} in output box as expected")
	public void check_in_output_box(Double fah) throws IOException {
		objCentToFahApplicationPage.check_in_output_box(fah);
	}

	@After("@ConverterApplication")
	public void tearDown() {
		driver.close();
	}
}
