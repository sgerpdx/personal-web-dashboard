*note: this file is a work in progress*

# Personal Web Dashboard  

A homepage and bookmark-manager app for any web browser.  

## User Stories  

1. Want: As a user I want to be able to save an access my bookmarks anywhere.  
Feature task:  
– Users can save bookmarks by title and url, and access them in any web browser.  

Acceptance tests: Ensure that the app properly renders and functions in all commonplace web browsers. Ensure that bookmark information – title and URL – can be entered and saved, and then appear in a list of archived bookmarks.  

2. Want: As a user I want to browse current news stories when I open my web browser.  

Feature task:  
– An API is used to provide a list of news article summaries with links.  

Acceptance tests: Ensure that on load, the app fetches and displays news article summaries including title, a thumbnail image, author and (link-enabled) source information, a description, and publication date.  

3. Want: As a user I want to have a fun, themed experience when I browse the internet.  

Feature task:
– The user interface of the app the appearance of a dedicated console taking design inspiration from a gauge-based car dashboard display.  

Acceptance tests: Ensure that the UI design retains a visual coherence in geometric terms, and utilizes a consistent, accessible style sheet in its font and color choices. Ensure that the design is responsive to varying screen dimensions and aspect-rations, and that it retains its visual coherence across such variations.  

### Data Flow:  


### UI Wireframe:  

![UI Wireframe](https://qzwigavpavbkysyiccyk.supabase.co/storage/v1/object/sign/dashboard-assets/UI-wireframe_web-dashboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYXNoYm9hcmQtYXNzZXRzL1VJLXdpcmVmcmFtZV93ZWItZGFzaGJvYXJkLnBuZyIsImlhdCI6MTY1MDU3OTk1NCwiZXhwIjoxOTY1OTM5OTU0fQ.-g15BrE9jWFJbBgIgeYoja8wLA19gmHQ9C6c9aFFsrY)

# Software Requirements  

## Vision:  
To create a simple ‘personal homepage’ web app that allows users to customize a limited variety of features utilizing APIs and a dedicated database for saving bookmarks that can be accessed in any browser.  

### Pain Points Addressed:  
Most web browsers offer access to a search function via the address bar, so the use of a search engine’s website as the homepage is redundant. Additionally, the typical choice of homepage site either bombards the user with excessive algorithm-driven content, are aesthetically impersonal, and/or offer limited customization.  

### Why?  
This app will provide a UX that simultaneously offers a simple solution to saving bookmarks across different browsers and/or devices; and offers increased customization of visual theme, local settings for date/time/weather, and access to an optional news feed.  

## Scope  
  🠖 IN: User can...  
  🠔 OUT: The app will...    

### MVP:  
A clock-readout displays the date and time for the user’s region, a simple newsfeed section loads a clickable set of CNN article summaries, and the user can save bookmarks by title and URL, as well as view the list of saved bookmarks. A user account keeps track of user preferences. Display and functionality work in all major browsers – Chrome (desktop/mobile), Safari(desktop/mobile), Firefox, Brave, Vivaldi, Opera, Edge.  

### Stretch Goals: 
Weather information; light/dark visual theme toggle; API picture of the day; editing of bookmarks; editing and saving of personal notes;  

## Non-Functional Requirements:  
Accessibility – App is easy for user to navigate.  
	Visual contrast, aria-labeling, and a mobile-friendly layout that displays effectively on any device’s screen.  

Simplicity – Intuitive operation.  
	Features are easy-to-interpret at a glance, and the app is single-page.  
  
## Data Flow  

