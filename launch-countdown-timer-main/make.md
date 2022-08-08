# Flipping Countdown timer

TODO

- [] - 2 div with the same number (upper(bottom-border 1) and lower)[.top, .bottom] inside the big div parent[.flip-card]
- [] - .top, .bottom, .flip-card::before, .flip-card::after witll have the same style(boxes with half the size of the .flipcard's height)

## CSS Stuff

### CSS Positioning

- **Static Positioning**

the default positioning value

- **Relative Positioning**

same as static but it will let us use the top, right, bottom, left attributes
also overflows the parent, as if it have greater z-index that the parent. this is
because it is **removed** from the **document flow**

- in general it is not used to use top, bottom, left, and right, as it removes them from the normal document flow.

- The most common usecase of relative positioning is to use it as a parent therefore the childrens can be positioned **absolute**, because otherwise the childrens will be positioned absolutely to the document/body/. but this could also be anything except for static. absolute parent will do it for their absolute childrens as well, but they behaviour of the parent may not be what we wanted.

- **Absolute Positioning**

removes the element from the document flow, and re arrange the elements in the normal document flow to
act as if the element were never before, so they get their new layout.

- **Fixed Positioning**

same as absolute however they stay in the same place as we scroll.
and also unlike absolutes it positions itself to the document/screen/body despite their parent being relative/absolute

- **Sticky Positioning**

is the combination of relative and fixed positions
by default it is relative, but when we scroll enought to make it out of the document/body/screen it becomes fixed and stays with in the document/body/screen.

### Display properties

- **Inline-flex**

[inline-flex](https://haikudocs.com/flexbox/display-flex-flex-vs-inline/) is same as flex, but treats itself as an inline element

### Sccrolling the text with css and some javascript

[Auto-Cool-Scrolling](https://codepen.io/MyXoToD/pen/yLJjZEq)

### CSS SIZING rem and em

when em is used for font-size em would mean the the multiple of the parents font-size.

when em is used for anything other than font-size em would mean the multiple of the current element/itselfs font-size

use em units in places where the influence of nearby parent elements would make sense

rem is just like em but takes the root/html tag's font-size and multiply it.

### Writing Vertically with css

```css
/* cool chinese and japanese characters will do,
 * with the auto scrolling above it will Enter the Matrix
*/
p {
  writing-mode: vertical-rl;
}
```

### Getting the attributes value from directly from css.

`attr()` content: attr(data-tooltip);

### ::after and ::before ( same with :after and :before, this is css2)

- add elements stricktly from css
- we can't have psedo element on elements that don't have contents, like inputs.

```css
/* this will append text with the styles inside and underneath the name input label
 *  remember the before and after are inside the element.
 *  <label id="form-name-input-label">
 *  ::before
 *  put your name here
 *  ::after
 *  </label>
*/
#form-name-input-label::after {
  content: "input your full name, as your passport";
  font-size: 0.6rem;
  color: "blue";
  text-align: "left";
}
```

[Playing with before and after](https://codepen.io/MyXoToD/pen/qBNqbbg)

## INSPIRATION FOR THE VISITBAHIRDAR

[Entire_Website_Idea](https://codepen.io/theseventh/pen/LYVqMYb)
[Sliding_Package](https://codepen.io/dev_loop/pen/MWKbJmO)
[Sliding_Info](https://codepen.io/Akimzzy/pen/JjGKMoX)
