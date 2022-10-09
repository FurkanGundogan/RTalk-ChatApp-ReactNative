

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

##### [Expo CLI](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | This app created with Expo CLI.
##### [React Navigation](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | Stack Navigator implemented to handle routing.
##### [Redux Toolkit](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | I used Redux to state management.
##### [Firebase Authentication](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | This project contains firebase email authentication for sign-in / sign-up.
##### [Firebase Firestore DB](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | I did store collections in firestore (e.g. users, chats).
##### [Firebase Storage](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | I used firebase storage to manage image sharing.
##### [Async Storage](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | I implemented the async-storage to provide auto-login.
##### [Expo Image Picker](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | I used this feature to be able to upload image on app.
##### [Expo Location](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | I implemented expo-location to provide sharing current location in chat.
##### [React Native Emoji Modal](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | This package implemented to display emoji-keyboard in chat.
##### [React Native Vector Icons](https://github.com/FurkanGundogan/RTalk-ChatApp-ReactNative/blob/master/Instructions1.pdf) | RN-vector-icons are used while styling.

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
