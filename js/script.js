// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the take home pay from a job.
 */
function calculateTakeHomePay () {
  // input
  const hoursWorked = parseFloat(document.getElementById('hours-worked').value)
  const hourlyWage = parseFloat(document.getElementById('hourly-wage').value)
  const TAX_RATE = 0.18

  // process
  const takeHomeSalary = (hourlyWage * hoursWorked) * (1.00 - TAX_RATE)
  const taxes = (hourlyWage * hoursWorked) * TAX_RATE

  // output
  document.getElementById('pay').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
  document.getElementById('taxes').innerHTML = 'The government will take: $' + taxes.toFixed(2)
}
