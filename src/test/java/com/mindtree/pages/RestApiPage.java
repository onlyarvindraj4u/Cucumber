package com.mindtree.pages;

import java.io.IOException;

import junit.framework.Assert;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@SuppressWarnings("deprecation")
public class RestApiPage {
	static Request request;
	OkHttpClient client = new OkHttpClient();
	static Response response;

	public void launchGithub(String keyword) {
		request = new Request.Builder().url("https://api.github.com/search/repositories?q=" + "<" + keyword + ">").get()
				.addHeader("cache-control", "no-cache")
				.addHeader("postman-token", "6c2bf264-4a24-09bc-a6e5-baf3d7d00fb0").build();
	}

	public void searchTheRepository() throws IOException {
		response = client.newCall(request).execute();
		System.err.println(response.body().toString());
	}

	public void checkResponseCodeInOutput(Integer code) {
		Assert.assertTrue(response.code() == code);
	}
}
