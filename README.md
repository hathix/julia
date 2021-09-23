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
