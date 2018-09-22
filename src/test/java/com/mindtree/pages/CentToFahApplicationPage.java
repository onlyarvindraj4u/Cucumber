package com.mindtree.pages;

import static org.junit.Assert.assertEquals;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.mindtree.commonUtils.CommonUtils;

import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class CentToFahApplicationPage {

	WebDriver webDriver = null;
	CommonUtils objCommonUtils = null;
	
	// Creating WebElement and getters
	@FindBy(how = How.XPATH, using = "//h1[text()='Celsius to Fahrenheit conversion']")
	private WebElement pageTitle;

	@FindBy(how = How.XPATH, using = "(//a[contains(text(),'RapidTables')])[1]")
	private WebElement rapidTablesLink;

	@FindBy(how = How.CSS, using = "input#x.intext")
	private WebElement celsiusInputBox;

	@FindBy(how = How.CSS, using = "input.outtext")
	private WebElement fahrenheitInputBox;

	@FindBy(how = How.XPATH, using = "//button[@title=\"Convert\"]")
	private WebElement convertBtn;
	
	/**
	 * @return the convertBtn
	 */
	public WebElement getConvertBtn() {
		return convertBtn;
	}
		
	/**
	 * @return the celsiusInputBox
	 */
	public WebElement getCelsiusInputBox() {
		return celsiusInputBox;
	}

	/**
	 * @return the fahrenheitInputBox
	 */
	public WebElement getFahrenheitInputBox() {
		return fahrenheitInputBox;
	}

	/**
	 * @return the rapidTablesLink
	 */
	public WebElement getRapidTablesLink() {
		return rapidTablesLink;
	}

	/**
	 * @return the pageTitle
	 */
	public WebElement getPageTitle() {
		return pageTitle;
	}

	public CentToFahApplicationPage(WebDriver webDriver) {
		this.webDriver = webDriver;
		PageFactory.initElements(webDriver, this);
		objCommonUtils = new CommonUtils(webDriver);
	}

	/**
	 * Launching the Application
	 * @param url
	 * 
	 * @author Arvind Kumar
	 */
	public void lanuch_Application(String url) {
		webDriver.get(url);
	}

	public void page_should_contains_title(String docString) throws IOException {
		String pageContent = getRapidTablesLink().getText() + "\n" + getPageTitle().getText();
		assertEquals(docString, pageContent);
		objCommonUtils.captureScreenShot(webDriver, "DocString");
	}

	public void enterCelsiusValue(double celsiusValue) throws IOException {
		objCommonUtils.enterInput(getCelsiusInputBox(), celsiusValue+"");
		objCommonUtils.captureScreenShot(webDriver, "CelsiusInput");
	}
	
	
	/**
	 * click on convert Button
	 * 
	 * @author Arvind Kumar
	 */
	public void click_on_convert_button() {
		if(getConvertBtn().isEnabled()) {
			getConvertBtn().click();
		}
	}
	
	/**
	 * @author Arvind Kumar
	 * @param fah
	 * @throws IOException 
	 */
	public void check_in_output_box(double expectedFahValue) throws IOException {
		if(getFahrenheitInputBox().isDisplayed()) {
			String getFahValue = getFahrenheitInputBox().getAttribute("value");
			System.err.println(getFahValue);
			double actualFahValue = Double.parseDouble(getFahValue);
			Assert.assertTrue(expectedFahValue == actualFahValue);
			objCommonUtils.captureScreenShot(webDriver, "FahOutput");
		}
	}
}
