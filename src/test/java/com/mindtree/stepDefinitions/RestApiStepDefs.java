package com.mindtree.stepDefinitions;

import java.io.IOException;

import com.mindtree.pages.RestApiPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


/**
 * Verify the Response code when user search the git repository with given keyword
 * @author Arvind Kumar
 *
 */
public class RestApiStepDefs {
	RestApiPage objRestApiPages = new RestApiPage();

	@Given("user search repository by {string}")
	public void user_search_repository_by(String keyword) {
		objRestApiPages.launchGithub(keyword);
	}

	@When("user hits the request")
	public void hitTheRequest() throws IOException {
		objRestApiPages.searchTheRepository();
	}

	@Then("response should be return {int} code")
	public void response_should_contain(Integer code) {
		objRestApiPages.checkResponseCodeInOutput(code);
	}

}
