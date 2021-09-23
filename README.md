# julia
Generate Julia fractals on the web

Got Julia set generation code from https://replit.com/talk/learn/Julia-Fractals-in-JavaScript/12806

Pseudocode for Julia sets https://en.wikipedia.org/wiki/Julia_set#Pseudocode_for_normal_Julia_sets

If reimplementing this from scratch, consider:

* Try a multi-Julia set with another degree of freedom, `n` (https://en.wikipedia.org/wiki/Julia_set#Pseudocode_for_multi-Julia_sets)
* Add better panning and zooming functionality
* Use [math.js](https://mathjs.org/docs/datatypes/complex_numbers.html) through npm
* Enable image export
* Let the user type in a real and complex component and generate it for them
* Find a way to get just the coolest Julia sets (most of them are pretty boring, but some of them are spectacular)
* Instead of just black and white, [apply some coloring](http://www.malinc.se/m/JuliaSets.php) -- not sure how they do it, but probably they replace the black => white continuum with a rainbow
* Or [fractalize images](http://www.malinc.se/m/ImageFractals.php)
* Use advanced smoothing algorithms like [renormalizing the Mandelbrot escape](http://linas.org/art-gallery/escape/escape.html) and [smooth shading for Mandelbrot](http://linas.org/art-gallery/escape/smooth.html) -- I think that's still applicable to Julia sets, lol
* Or just expand into Mandelbrot sets!
* Use [orbit traps](http://www.malinc.se/m/OrbitTraps.php) to make really trippy art

# Explanation

[From here](http://www.malinc.se/m/OrbitTraps.php):

> When using an iterative function to generate the Mandelbrot set or a Julia set, each iterated point will be generated along a so-called orbit. A straightforward way to generate the Mandelbrot set or a filled-in Julia set, is to iterate until the distance to the origin is larger than 2, where the point escapes (it is certain that it will diverge if the iteration continues). The number of iterations until a point escapes, or the angle of the point at the escape-time, can be used to choose a color from some palette.
> When using an orbit trap, instead of the escape time, the distance between the trap and the orbit of a point is used to colour the fractal. When iterating a point along its orbit, the distance to the orbit trap from each point on the orbit is calculated, then the minimum distance is used to colour the original point. The iteration continues for a fix number or steps, or until a point on the orbit gets sufficiently close to the trap - in which case the orbit gets trapped.

# Art creation?

To uniquely identify a piece of fractal art, you would specify:

* `Re[c]`, the real part of the `c` parameter, on [-1, 1]
* `Im[c]`, the imaginary part of the `c` parameter, on [-1, 1]
* The zoom level
* The (x, y) where the zoom should be centered
* If doing multi-Julia sets: `n`, the exponent on `z`

If you let the user specify all of these, then they can pan and zoom around on even the most boring-looking Julia fractal to get some really cool art.

# Breeding fractals?

I wonder if you can let one Julia fractal be the parent of another fractal, or if you can mix two fractals to get properties of a third. I guess you could multiply two `c`'s together but chaos theory says that the child would have nothing in common with the parents.

Alternatively, if you have a simple `c`, then people can create an infinite number of descendants by panning and zooming in the resultant image. But that's not nestable.
