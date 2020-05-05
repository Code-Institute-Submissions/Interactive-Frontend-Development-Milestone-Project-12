# Ireland Coffee Experience
### Project: Interactive Frontend Development Milestone
___
This website is a guide to the coffee culture within Ireland, covering the coffee journey from bean to cup, detailing the different varieties of coffee beans and where coffee is grown. An introduction is included for the different brew methods used at home and prepared by your local barista and shows the location of some of the best coffee cafes within Ireland.
___
### UX
####User Stories
This website is aimed at those who are new to the coffee industry or just have a genuine interest in learning more about the product they drink daily. 
####Strategy
The design goal for the website was to make a contemporary spacious page that had a clear clutter free layout to display the information easily to visitors. The website colour scheme of blue and brown hues for the logo, footer, images, etc, links with the natural earthy produce of coffee that is visually appealing to the visitor but clearly displays the info in a clear contextually feel.
#### Scope
The scope was an introduction to the coffee world showing where coffee comes from, the types of coffee and where it can be found. This guide was to equip the visitor with enough information to visit any of the artisan cafe and know exactly what they were ordering and to expand upon their coffee knowledge.
#### Structure
This guide starts with an introduction into the journey taken from the farm to the cup, and how the café culture has grown with Ireland. The site has been divided into a number of clear identifiable pages, with the next page covering the common commercial grown types of coffee bean robusta and arabica. Coffee is generally grown in certain countries around the world known as the coffee belt, an interactive map has been included to show where coffee is grown and how this affects the flavour. 
On the next page as well as the different varieties of coffee there is an increasing number of brew methods that has been covered here with a slide show, which will give the user a greater insight to what coffee drink they are ordering at their next café visit. 
Most importantly for the user location page has been used that contains a location map with map markers to show where they can experience some of the best artisan coffee cafes within Ireland. 
Finally a contact page has been created to allow the user to send a message for help, queries or suggestions they may have. 

#### Wireframes
[Landing Page (desktop)]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/landing%20page%20desktop.png)
[Landing Page (mobile)](]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/landing%20page%20mobile.png)
[Landing Page (mobile nav sidepanel)](]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/landing%20page%20nav%20sidepanel.png)
[Landing Page (content)](https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/landing%20page%20content.png)
[Coffee belt (desktop)]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/coffee%20belt%20desktop.png)
[Brew methods (desktop)]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/brew%20method%20desktop.png)
[Locations (desktop)]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/locations%20desktop.png)
[Contact (desktop)]( https://github.com/dalecars/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/contact%20desktop.png)
___
### Technologies
1. HTML
2. CSS
3. Bootstrap (v4.4.1)
4. jquery(v3.4.1)
5. Javascript  
___
### Features
This site uses a fixed top Bootstrap 4 navbar with a brand logo on the left and collapse menu on the right that is responsive to media size. When media size is not a desktop width the navbar toggle will display a sidepanel called via javascript. A back to top button is included on each page that is only displayed when the user scrolls down the page.
On the coffee belt page javascript has been used to change an image from a bowl of beans to show a close-up of a single bean. The page also uses a jquery plugin from jqueryscript.net to add item points with annotations to show an image of the coffee belt and growing regions.
The brew-methods page contains a slide show that uses javascript to display the individual slides with next and prev links and an indicator to show the current slide number displayed.
Google maps API is used on the location page to display Ireland with map markers that have a bounce animation and will show an info window when clicked. The list of café locations are displayed under the map using a bootstrap card grid layout and will navigate to café location on map.
The contact page contains a form to send messages using javascript and jsemail service. When the user sends a message a bootstrap alert will be displayed to indicate if the message was sent successfully or not. 
#### Features to Implement
In the future, I would like to add section that will be a how to guide on home brewing, detailing what equipment is needed and the brew recipe with animations to show the user through the brew method steps. I would also like to add a section on coffee roasters, where the user will be able order coffee directly to home and set up monthly subscriptions.
___
### Testing
The navbar for the site was to be fixed to top of screen but I wanted to minimise its screen space when viewed on mobile and tablet devices. To achieve this a toggle was used to hide the nav menu on these smaller screen sizes. When the user clicks on the navbar toggle a side panel containing the navigation would be displayed from the right side to cover 60% of the screen. This feature was tested and allowed quick and easy access to the nav links. During the testing it was found that the user could scroll the page when the side panel was displayed.  This resulted in the side panel close button also being scrolled out of view, to resolve the window was set to disable scroll when the side panel is open. 
When the user scrolls down the page a ‘back to top’ button will be displayed in the bottom right corner of the screen, this is to allow the user to quickly return to the top of the page and access the navigation bar. This was tested and after some testing it was found that setting the button to be displayed when the user scrolls down 500px was ideal.
On the coffee belt page two key features were tested. The first is the change of the coffee bean image so that the img src would change from one image to another when the user clicks on it with a smoot transition fading out and then in. An overlay image of a magnifying glass in the top right corner of the coffee bean image was also tested to ensure it changed from a zoom out or zoom in image depending on the image displayed. The second feature on this page tested was the coffee belt image that would show animated item points that would pulse. When the user clicks on the item point it was tested that an annotation window would popup to give details on the coffee region flavours.
The brew page contains a list of different brew methods that shows an image with text wrapping around it at larger media screen sizes. At the smaller screen sizes it was tested that this image would become centred with the brew description below the image. This page also contains a slideshow feature for the espresso brew types. It was tested that each espresso type would be displayed when the user clicked on the next/prev button to increment/decrement through the slides with current slide indicator changing accordingly.



It was neccessary to list all the treatments that Kingdom Massage offers. An accordian feature was succesfully used to hide the detail description with an image for each treatment until a user choose to view the treatment. For phone users the treatment image was deemed 
unnecessary and added clutter, this was hidden when viewed at this screen size. This accordion design was tested at each screen size succesfully.

For the about section a grid design was used to display the therapist image in one column and the profile history in another. For desktop and tablet display the two columns were displayed side by side. However for phone users both columns were to be spread to the screen width and below each other. It was then neccessary to ensure that the profile image was centered on the phone display. The profile history content was to be partial hidden to limit screen space and only fully displayed when the user clicked on "read more..." button. All features for this section were succesfully tested to the various screen sizes.

The Contact section included address details for Kingdom Massage and a user form to allow a message to be sent for further details or to arrange an appointment. A nested grid layout was used to display at tablet and desktop screen sizes this information side by side in two columns, but at smaller phone sizes it was best to only display each col at the full screen view. This was tested and clearly displayed the info as intended at the differet screen sizes.

The user form was tested to ensure that all fields were completed and displayed an error message if not. The form was tested to ensure that the user can only enter numbers and symbols for the phone field and must enter a valid email address before the user can submit the input otherwise an error message will be displayed. 

Social media links were included in the footer this was tested to ensure that a new tab was opened and user directed to the correct page. The links also changed background colour when user hoovered over the link this was tested and showed a gradual transition as expected.  

___
### Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

The site has been deployed to this location:
https://dalecars.github.io/User-Centric-Frontend-Development-Milestone-Project/  

___
### Credits

#### Content

All content on the "Massage Therapy", "Treatment" and "About" sections in this site were written by Laura Gemmell.

#### Media
All photos were taken from shutterstock, a stock image library, with the exception of the profile photo of the massage therapists and the logo that was created.

#### Acknowledgements

The navigation brand and navbar collapse feature was implemented using example from bootsrap 4 documentation [found here](https://getbootstrap.com/docs/4.0/components/navbar/).

The full browser background image in the header and contact section was completed using example code taken from [CSS-Tricks site](https://css-tricks.com/perfect-full-page-background-image/).

The accordion design found in the treatment section was created following the example from bootstrap 4 documentaion [linked here](https://getbootstrap.com/docs/4.1/components/collapse/).

The grid system used for the about section and the contact section was created following examples from bootstrap 4 documentation, [linked here](https://getbootstrap.com/docs/4.0/layout/grid/).

Social media icon links found in the footer was created and edited using examples in tutorial from w3schools.com, [found here](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)
