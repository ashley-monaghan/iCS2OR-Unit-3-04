// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/iCS2OR-Unit-3-04/sw.js", {
    scope: "/iCS2OR-Unit-3-04/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  // process
  const math = (fahrenheit - 32) * 5/9
  // output
  document.getElementById("math").innerHTML = "Celsius: " + math + " C°"
}
