package com.mindtree.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;

public class Setup {
WebDriver driver;
	
	@Before
	public void setUp() {
		System.getProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/src/test/resources/"+"Drivers/"+"chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get("http://www.google.com");
	}
}
