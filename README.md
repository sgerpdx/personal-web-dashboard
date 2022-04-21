## Client for Browser-Agnostic Internet Manager + Homepage

This app is a work in progress. Most of the basic functionality is present; however the UI is still being built-out in terms of responsiveness to errors, accessibility and final styling.

### Brief User Guide:

- Time and date display should be consistent with the user's local timezone.
- The 'News' tab when expanded displays a very roughly-formatted list of English-language CNN news article summaries.
- The 'Bookmarks' tab automatically loads a list of 3 bookmarks saved to a default demo user.
- The tan-colored form area below News and bookmarks allows for the creation of user accounts:
  1. Enter an email address (does not need to be real at present, as confirmation is turned-off) and password, then click the 'Sign Up' button.
    - If already signed up, click 'login' beneath the button to toggle to Login mode. (Note: email and password will need to be re-entered.)
  2. Once signed up, the user can enter a username. Click the 'Create' button to save it.
  3. Once signed up or logged in, the user can enter and save new bookmarks that will only be viewable by that user.
    - The expanded Bookmarks tab features two icons:
      - Refresh
      - Create New

Server repository [here](https://github.com/sgerpdx/dashboard-server).
