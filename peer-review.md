## P3 Peer Review

+ Reviewer's name: David Wilkie
+ Reviwee's name: Jiajia Chen
+ URL to reviewee's Github repo: *<https://github.com/audreychenjj-2019/e28>*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
- When adding to the portfolio after navigating from the item on its individual Research page, the market price and similar info is not shown. It appears after adding it, or when adding from the Portfolio page directly.
- ~~Navigating directly (from the address bar) to a page other than home (e.g. <http://p3.acjj.me/portfolio>) stock's URL (e.g. <http://p3.acjj.me/research/AAPL>) produces a 404.~~
*Edit: this is an accident of server configuration that's been addressed in our class's issues: <https://github.com/susanBuck/e28-fall19/issues/147>*
- It's possible to add negative numbers of shares, or negative prices for them, which would be bad in a real-world scenario, but of course we were not expected to validate form input. Just pointing it out for completion's sake.

### Were there any parts of the interface that you found confusing or unclear?
- Minor layout issue: The interface isn't mobile responsive, which is to say horizontal scrolling is necessary on small (mobile) devices. Otherwise, I appreciate the wide breadth of data on offer and the tidy interface design.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
One of the expressions on lines 40-47 in `App.vue` is confusing and IMO would benefit from being broken into if-then-else form:

```
app.store.symbolsList.sort((a, b) =>
a.symbol.length > b.symbol.length
    ? 1
    : a.symbol.length === b.symbol.length
    ? a.symbol > b.symbol
    ? 1
    : -1
    : -1
```

In my experience in the industry, ternary statements are usually discouraged for readability reasons. This is a particularly difficult one because it is a compound expression. A comment might also help make explicitly clear what we are achieving with this sorting.

----

In a couple spots in `App.vue`, this could be shortened for brevity's sake:

```
<router-link v-if="link != 'research'" exact :to="{ name: link }">
{{
link
}}
</router-link>
```

e.g.:

```
<router-link v-if="link != 'research'" exact :to="{ name: link }">
    {{ link }}
</router-link>
```

or if you prefer:

```
<router-link v-if="link != 'research'" exact :to="{ name: link }"> {{ link }} </router-link>
```

That may be just a style nitpick, but I much prefer a smaller number of lines as long as the lines individually aren't overly long.

----

Some of the variables in `ShowMetrics.vue` were given short names that I found confusing. On lines 87-95, for example, I don't know what `si` stands for: 

```
      var si = [
        { value: 1, char: "" },
        { value: 1e3, char: "K" },
        { value: 1e6, char: "M" },
        { value: 1e9, char: "B" },
        { value: 1e12, char: "T" },
        { value: 1e15, char: "P" },
        { value: 1e18, char: "E" }
      ];
```

The above shows up in a couple spots. Short variable names are fine for things like numbers, throwaway objects, simple variables, etc., or if they can be understood on sight, but this one threw me a little bit. 

----

Conventionally, CSS class names are always lower case, but CSS is really difficult--some I think it's the hardest language of them all!. But there are all manner of recommmended CSS conventions, so if capitalizing some of them works in your own system then I can't really fault you.

----

### Are there any parts of the code that you found interesting or taught you something new?

The autocomplete component is admirably done. I realize you based your solution for a recipe online for it, but that's still great. The code is formatted in an easy to read way, and the implementation worked well for me. 

I also found the use of chart.js to be elegant and seamless in this implementation.

### Are there any best practices discussed in course material that you feel were not addressed in the code?

No, everything seems on par with the course teachings here, and this project goes a little beyond the coursework in its use of external libraries.

### Do you have any additional comments not covered in the above questions?

Altogether this project is very good work! :) 