government_clearinghouse
========================

A site for querying information about the US Government

This application works as follows:

Current US Senate - Direct REST API calls to the sunlight labs API, locating senators based on state
Current US House - leverage the Geolocation API in the browsers, lacking that search by zip code, both use the sunlight labs API
Past US Congress - my own REST API based on database of values downloaded from sunlight labs
Current State Legislators (TBD) - based on Geolocation API in the browsers, lacking that, lat/long derived from zipcode using a database I created on my server using a csv file from http://www.boutell.com/zipcodes/

Application architecture:

web hosted on ecowebhosting.co.uk

Ubuntu 14 droplet hosted on digital ocean running:
python 2.7
Django 1.6
MySQL 5.5

