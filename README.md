# p5.js Template

# My thinking process
The code is about using code to redraw Yayoi Kusama's work.
At first I was thinking along the lines of using a square pattern like this to cycle through horizontal and vertical

([![square pattern.png](https://imgpile.com/images/Dh70Sj.png)]

Then after some experimentation and thought I decided that this method required too much code So then I wonder whether it would be simpler to write out a whole row pattern and have it loop vertically

[![whole row.png](https://imgpile.com/images/Dh7vU8.md.png)]

At first I was thinking about how it would be if I put the canvas right in the center, but then I thought about how it would be more of a hassle if the circle didn't start at zero and I still had to need to do the math, so I chose to start at the top left corner without having to transfer the coordinates. And I was just starting to think about what would happen if the circle was based on quantity. But found it still very cumbersome

![sketch about canvas.jpg](https://imgpile.com/images/Dh7ZoF.jpg)

![sketchs about size.jpg](https://imgpile.com/images/DhN5ZE.jpg)

Eventually I came up with and experimented with the method of directly setting the size and distance of the circle and then looping based on the control spacing. Getting inspired by the TIPS, I realized that small circles can indeed be covered by large circles, which makes it a lot easier to do so

After drawing the large circle I can then change the whole position according to translate（）, so this is the easier way to do it. I make the position of the circle more precise by fine tuning the spacing and size

![position sketch.jpg](https://imgpile.com/images/DhNPhj.jpg)











