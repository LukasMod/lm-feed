# lm-feed
Simple feed app to view and create posts

EXPO GO URL: exp://exp.host/@lukasmod/lm-feed

Libraries:
- expo
- eslint, prettier, husky, typescript
- react-navigation 6
- mobx (root for multiple stores, local stores instead useState)
- typescript


Features:
- scroll list with posts (json generated and fetched with small delay to mock BE)
- posts are fetched while scrolling (pagination), showing loader while loading
- pull to refresh for post list
- add post (title and description only), as last item to the current end of list (may be somewhere in the middle if not all posts are fetched from JSON)
- press on "Więcej", to navigate to post details
- like and unlike post (small delay to mock BE)
- simple form validation
- error and empty states 
- custom fonts, icon, splash screen
- bottom tab and header created with react-navigation





