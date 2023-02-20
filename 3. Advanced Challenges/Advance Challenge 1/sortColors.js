/* A string str contains a list of color names that are seperated by a single space.`

`Colors in `str` are mixed up, but each color has its original position at the end of the color name, positions  are 1-indexed.`


For example, the string "black1 gold2 white3" can be rearranged to "gold2 black1 white3" or "gold2 white3 black1"

``str` contains only up to 9 colors.``

```Given a str with rearranged colors, sort the colors to the original state and return the original str */

let testString1 = "red2 blue5 black4 green1 gold3"
let testString2 = "purple6 pink7 orange9 yellow8 teal3"

const sortColors = (str) => {
    const colors = str.split(' ');
    colors.sort((a, b) => {
      const posA = parseInt(a.match(/(\D+)(\d+)/)[2]);
      const posB = parseInt(b.match(/(\D+)(\d+)/)[2]);
      return posA - posB;
    });
    return colors.map(c => c.match(/(\D+)(\d+)/)[1]).join(' ');
}

/* 

We first split the input string str into an array of color names using str.split(' '). 
Then, we call the Array.sort() method on the colors array with a custom sorting function 
that extracts the position of each color from its name using the regular expression /(\D+)(\d+)/. 
This regular expression matches any non-digit characters \D+ followed by one or more digits \d+ at the end of the string, and captures 
them in two groups: the color name in group 1 and the position in group 2. We use parseInt() to convert the position string to a number and compare them using posA - posB.

Finally, we use Array.map() and another regular expression /(\D+)(\d+)/ to extract the color name from each sorted color and join them back into a string using Array.join().

For example, if we call sortColors("red2 blue5 black4 green1 gold3"), it will return "green red gold black blue" as expected. 
Similarly, if we call sortColors("purple6 pink7 orange9 yellow8 teal3"), it will return "teal purple pink yellow orange".

*/

