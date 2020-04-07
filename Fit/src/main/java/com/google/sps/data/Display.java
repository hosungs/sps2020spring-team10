package com.google.sps.data;
import com.google.sps.data.Fit;
import java.util.List;
import java.util.ArrayList;

public final class Display {

  private final List<Fit> fits;
  private final String uploadUrl;

  public Display(List<Fit> fits, String uploadUrl) {
    this.fits = fits;
    this.uploadUrl = uploadUrl;
  }
}