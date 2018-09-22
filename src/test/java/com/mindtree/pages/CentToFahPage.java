package com.mindtree.pages;

import java.text.DecimalFormat;
import java.text.NumberFormat;

public class CentToFahPage {

	static double centValue;
	static double fahValue;
	String formattedVal;
	
	public void openConvertor(double centValue) {
		CentToFahPage.centValue = centValue;
	}

	public void convertTemperature() {
		fahValue = (CentToFahPage.centValue * 1.8 + 32);

		NumberFormat formatter = new DecimalFormat("#0.0");
		formattedVal = formatter.format(fahValue);
		fahValue = Double.parseDouble(formattedVal);
	}

	public void checkOutput(double fahValue) {
		if(fahValue == CentToFahPage.fahValue) {
			System.err.println("Centigrade to Fahrenheit converted successfully");
		}else {
			System.err.println("Centigrade to Fahrenheit not converted");
		}
	}
}
