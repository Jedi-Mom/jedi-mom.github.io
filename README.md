# CodeLou_FrontEnd

## Description
```
This is a personal webpage, showcasing my Portfolio of photos, an About me page and a Contact page.  For the Porfolio page, I have created html and css coding to set up lightbox.  With the lightbox, the thumbnails are the before pictures and the lightbox pictures are the edited versions.

I created a contact form on my Contact page that will actually send emails to my designated email address.  **note** if doing this for the first time from a different computer, you may have to re-confirm my email --- Brian/mentor will need me to confirm so they can verify it works.  Once I confirm in my email, they will need to refesh the page to get the Almost there page to click "I am not a robot" and click on the link to go back to the contact page.


I have published this via GitHub pages: https://jedi-mom.github.io/index.html
The source code can be found https://github.com/Jedi-Mom/jedi-mom.github.io
```



## Custom CSS Classes
```
The class(es) I created are:

Main.css
1. Class name: .social-icon
This sets the width, height and margin for the graphics representing Social Media icons

2. Class name: .profile-photo
This sets the display, the max width, margin and border-radius for my photo located on my About me page.  It also sets the float.

3. Class name: .contact-info
This sets the width, height, margin for the contact info contained on the contact page.

4. Class name: a.selected
This sets the color for hyperlinks that are hovered over.

Lb.css
5. Class name: .lb
This class sets the color, padding, font size, alignment, margin for the lightbox markup.

6. Class name: .thumbnail
This class sets the size for the picture thumbnails found on the Portfolio page.

7. Class name: .lightbox
This class hides the picture that will appear when the thumbnail is clicked.  It provides the position and style of the picture.

8. Class name: .lightbox img
This class sets the image size for the hidden picture that will appear when the thumbnail is clicked.

9. Class name: .lightbox:target
This class will unhide the hidden picture.



## Custom JavaScript Functions
```
The javascript functions I created are:

1. $('.photoToggle')  : When the "Light Box Instruction" button is pressed, it will change to text alerting the user "Click on the photo to see the edited version. Click on the edited version to close the window."

2. $('#flashInst')  : This flashes the instructions on the screen for the lightbox.  It fades in at a rate of 3000 milliseconds, stays on the screen for 10,000 milliseconds and then fades back out. 
```
