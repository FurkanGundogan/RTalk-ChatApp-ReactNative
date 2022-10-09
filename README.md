

<h1 align="center">R-Talks</h1>
<p>R-Talks is a chat application developed using React-Native.</p>
<h2>Features</h2>

      🔑 User authentication 

      🗨️ One to one messaging

      😜 Emoji and location sharing

      📸 Image sharing as stories

<h2>Chat</h2>

<p>The user's chats are displayed on the main page. After the user makes his choice from this list, he is directed to chat with the person he chooses.

If the user presses the button with the message icon, the contact list opens. The user selects a contact from this list and is route to the relevant chat. If there has been no communication between the two users before, a new chat starts with the after first message will send by the user. </p>

https://user-images.githubusercontent.com/43653193/194752385-833f8f09-fee5-42f6-9c28-d71127044710.mp4

<h2>Used Techs</h2>

##### [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) | This app created with Expo CLI.
##### [React Navigation](https://reactnavigation.org/docs/stack-navigator/) | Stack Navigator implemented to handle routing.
##### [Redux Toolkit](https://redux-toolkit.js.org/) | I used Redux to state management.
##### [Firebase Authentication](https://firebase.google.com/docs/auth/web/email-link-auth) | This project contains firebase email authentication for sign-in / sign-up.
##### [Firebase Firestore DB](https://firebase.google.com/docs/firestore) | I did store collections in firestore (e.g. users, chats).
##### [Firebase Storage](https://firebase.google.com/docs/storage) | I used firebase storage to manage image sharing.
##### [Async Storage](https://github.com/react-native-async-storage/async-storage) | I implemented the async-storage to provide auto-login.
##### [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) | I used this feature to be able to upload image on app.
##### [Expo Location](https://docs.expo.dev/versions/latest/sdk/map-view/) | I implemented expo-location to provide sharing current location in chat.
##### [React Native Emoji Modal](https://github.com/staltz/react-native-emoji-modal) | This package implemented to display emoji-keyboard in chat.
##### [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/) | RN-vector-icons are used while styling.

<h2>Project Instructions</h2>
<p>R-Talks developed according to these documents:</p>

##### [Document 1](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) 
      
##### [Document 2](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions%202.pdf) 


<h2>Story Sharing</h2>
<p>
Users can go to the stories screen from the top menu on homepage. On this screen, there is a list of contents shared by all users within 24 hours. Users can switch to a screen where they can view the content in full screen by selecting a story from the list.
</p>

https://user-images.githubusercontent.com/43653193/194752769-49fbf651-c282-47fd-8951-eb71a18e702c.mp4

<h2>Profile Settings</h2>

<p>
Users can view their profiles by clicking the button in the upper right corner of the screen. On this screen, they can update their profile photos, first names, last names.
</p>

https://user-images.githubusercontent.com/43653193/194752773-e90aac3c-77d4-49ce-972d-d9f978771810.mp4

<h2>Gallery</h2>

![Screens](https://user-images.githubusercontent.com/43653193/194760969-bb9cb4b0-80b4-418b-b67d-35e522b0b8cf.jpg)

![Screens2](https://user-images.githubusercontent.com/43653193/194761193-c75ef402-6b7e-4600-845a-1950222eb35e.jpg)

<h2>Feature Works</h2>
      
      Dark Theme
      
      Message delivery report
      
      User active status
      
      Photo collection and text on stories
      
      Redirecting google-maps-app after clicking user location on message
      

<h2>Installation</h2>

Clone repo      
```
git clone
```
Install dependencies   
```
npm install
```
Start project
```
expo start
```
Debug
```
Press 'a' to run android or use qrcode on your android device 
```
