$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/centToFahConverter.feature");
formatter.feature({
  "name": "I want to convert the given centigrade temperature value into",
  "description": "Fahrenheit value through a standard java program and an online converter application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TemperatureConverter"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "Given centigrade value as \u003ccentigradeValue\u003e to convert into fahrenheit",
  "keyword": "Given "
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.step({
  "name": "check \u003cFahrenheitValue\u003e in output as expected",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "centigradeValue",
        "FahrenheitValue"
      ]
    },
    {
      "cells": [
        "28.5",
        "83.3"
      ]
    },
    {
      "cells": [
        "30.0",
        "86.0"
      ]
    },
    {
      "cells": [
        "56.0",
        "132.8"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "Given centigrade value as 28.5 to convert into fahrenheit",
  "keyword": "Given "
});
formatter.match({
  "location": "CentToFahStepDefs.givenCentValueToConvertFah(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.match({
  "location": "CentToFahStepDefs.convert_the_centigrade_value_into_fahrenheit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 83.3 in output as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "CentToFahStepDefs.checkConvertedValue(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "Given centigrade value as 30.0 to convert into fahrenheit",
  "keyword": "Given "
});
formatter.match({
  "location": "CentToFahStepDefs.givenCentValueToConvertFah(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.match({
  "location": "CentToFahStepDefs.convert_the_centigrade_value_into_fahrenheit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 86.0 in output as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "CentToFahStepDefs.checkConvertedValue(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through standard java program",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterViaStandardJavaPrgram"
    }
  ]
});
formatter.step({
  "name": "Given centigrade value as 56.0 to convert into fahrenheit",
  "keyword": "Given "
});
formatter.match({
  "location": "CentToFahStepDefs.givenCentValueToConvertFah(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "convert the Centigrade value into Fahrenheit",
  "keyword": "When "
});
formatter.match({
  "location": "CentToFahStepDefs.convert_the_centigrade_value_into_fahrenheit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 132.8 in output as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "CentToFahStepDefs.checkConvertedValue(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.step({
  "name": "lanuch \"\u003cconvertorApplication\u003e\" Application",
  "keyword": "Given "
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.step({
  "name": "provide \u003ccentigradeValue\u003e value",
  "keyword": "When "
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.step({
  "name": "check \u003cFahrenheitValue\u003e in output box as expected",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "convertorApplication",
        "centigradeValue",
        "FahrenheitValue"
      ]
    },
    {
      "cells": [
        "https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html",
        "28.5",
        "83.3"
      ]
    },
    {
      "cells": [
        "https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html",
        "30.0",
        "86.0"
      ]
    },
    {
      "cells": [
        "https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html",
        "56.0",
        "132.8"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lanuch \"https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html\" Application",
  "keyword": "Given "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.lanuch_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.page_should_contains_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide 28.5 value",
  "keyword": "When "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.provide_value(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.click_on_convert_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 83.3 in output box as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.check_in_output_box(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lanuch \"https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html\" Application",
  "keyword": "Given "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.lanuch_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.page_should_contains_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide 30.0 value",
  "keyword": "When "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.provide_value(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.click_on_convert_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 86.0 in output box as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.check_in_output_box(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Centigrade to Fahrenheit Converter through Application",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TemperatureConverter"
    },
    {
      "name": "@ConverterApplication"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "lanuch \"https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html\" Application",
  "keyword": "Given "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.lanuch_Application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should contains title",
  "keyword": "Then ",
  "doc_string": {
    "value": "RapidTables\nCelsius to Fahrenheit conversion"
  }
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.page_should_contains_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "provide 56.0 value",
  "keyword": "When "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.provide_value(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on convert button",
  "keyword": "And "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.click_on_convert_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check 132.8 in output box as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "CentToFahApplicationStepDefs.check_in_output_box(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/rest-api.feature");
formatter.feature({
  "name": "Search the git hub repository using keyword",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@restApi"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify the search functionality in git hub repository using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gitRepoSearch"
    }
  ]
});
formatter.step({
  "name": "user search repository by \"\u003ckeyword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user hits the request",
  "keyword": "When "
});
formatter.step({
  "name": "response should be return \u003cresponseCode\u003e code",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyword",
        "responseCode"
      ]
    },
    {
      "cells": [
        "cucumber",
        "200"
      ]
    },
    {
      "cells": [
        "Anuglar4",
        "200"
      ]
    },
    {
      "cells": [
        "Java",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the search functionality in git hub repository using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@restApi"
    },
    {
      "name": "@gitRepoSearch"
    }
  ]
});
formatter.step({
  "name": "user search repository by \"cucumber\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepDefs.user_search_repository_by(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits the request",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepDefs.hitTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should be return 200 code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepDefs.response_should_contain(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the search functionality in git hub repository using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@restApi"
    },
    {
      "name": "@gitRepoSearch"
    }
  ]
});
formatter.step({
  "name": "user search repository by \"Anuglar4\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepDefs.user_search_repository_by(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits the request",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepDefs.hitTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should be return 200 code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepDefs.response_should_contain(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the search functionality in git hub repository using keyword",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@restApi"
    },
    {
      "name": "@gitRepoSearch"
    }
  ]
});
formatter.step({
  "name": "user search repository by \"Java\"",
  "keyword": "Given "
});
formatter.match({
  "location": "RestApiStepDefs.user_search_repository_by(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits the request",
  "keyword": "When "
});
formatter.match({
  "location": "RestApiStepDefs.hitTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response should be return 200 code",
  "keyword": "Then "
});
formatter.match({
  "location": "RestApiStepDefs.response_should_contain(Integer)"
});
formatter.result({
  "status": "passed"
});
});