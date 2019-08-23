# Nemus

## Description
Nemus is a mobile application made during the [DocuSign Hackathon 2019](https://www.eventbrite.com/e/docusign-hackathon-co-sponsored-by-google-cloud-with-10000-in-prizes-tickets-59621793389?aff=ebdssbdestsearch&internal_ref=login#) in San Francisco.
The goal we decided to pursue was to help park rangers and visitors reserve and pay for their passes on their mobile phone.
The current system is very analog: it requires people to fill a paper envelop and pay cash.
There is no way for people to have alerts in real time about the park nor for rangers to know how many people are in the park at a given moment.
Nemus is a modern solution to those problems.

## Functionalities

### Map
The main menu map allows a user to locate parks near him and click on it to get more information.

<img src="https://user-images.githubusercontent.com/2366731/63604415-833fe800-c580-11e9-8587-0c5fa01df38b.png" width="200">

### Parks
If the user wants to access another park, he can search for it and the application will display a list of related parks.

<img src="https://user-images.githubusercontent.com/2366731/63605466-dadf5300-c582-11e9-9929-c90a813c3fe1.png" width="200">

### Menu
All the options available in the application are displayed in the hamburger menu.

<img src="https://user-images.githubusercontent.com/2366731/63605068-0f064400-c582-11e9-8562-7df4dcb5176d.png" width="200">

### Trip
The user can view the information about its curren trip in this panel

<img src="https://user-images.githubusercontent.com/2366731/63605168-4117a600-c582-11e9-8d9f-f85f2cc6088b.png" width="200">


### Park management
Rangers can use this panel to view how many people are in the park right now.
They can also verify the reservation of an individual if they meet him in the wild.
Finaly, they can change the fire danger level and it will send a notification to all the people currently in the park.

<img src="https://user-images.githubusercontent.com/2366731/63605254-64425580-c582-11e9-9d87-957675132dce.png" width="200">

## Building
Since this is a react-native application, you must first follow the [official getting started guide](https://facebook.github.io/react-native/docs/getting-started.html).
After that, it is a simple [expo](https://expo.io/) application that should work out of the box.
Note that you will have to deploy the [backend](https://github.com/nemusapp/Backend) part of the application and change the endpoint in the code.
