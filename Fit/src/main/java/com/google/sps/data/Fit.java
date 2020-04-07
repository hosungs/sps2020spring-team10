package com.google.sps.data;

public final class Fit {

  private final long id;
  private final String url;
  private final long timestamp;

  public Fit(long id, String url, long timestamp) {
    this.id = id;
    this.url = url;
    this.timestamp = timestamp;
  }
}