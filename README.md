# Features to add

## Sync notes with localStorage

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

localStorage.getItem('key');
localStorage.setItem('key', value);

Note: _value_ must be a string, so if you have a more complex value like an array or object to save, you'll need to use:
JSON.stringify(value);
and to get data from localStorage:
JSON.parse(value);

/\*\*
_ Challenge:
_ 1. Every time the `notes` array changes, save it
_ in localStorage. You'll need to use JSON.stringify()
_ to turn the array into a string to save in localStorage.
_ 2. When the app first loads, initialize the notes state
_ with the notes saved in localStorage. You'll need to
_ use JSON.parse() to turn the stringified array back
_ into a real JS array.
\*/

/\*\*
_ Challenge:
_ Lazily initialize our `notes` state so it doesn't
_ reach into localStorage on every single re-render
_ of the App component
\*/

## Add note summary titles

    /**
     * Challenge: Try to figure out a way to display only the
     * first line of note.body as the note summary in the
     * sidebar.
     *
     * Hint 1: note.body has "invisible" newline characters
     * in the text every time there's a new line shown. E.g.
     * the text in Note 1 is:
     * "# Note summary\n\nBeginning of the note"
     *
     * Hint 2: See if you can split the string into an array
     * using the "\n" newline character as the divider
     */

## Move modifier notes to the top of the list

## Delete notes
