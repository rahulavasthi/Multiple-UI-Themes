import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userProfileNotification';

  userProfileData:{} = {
    "profileImg":"https://b2bbucket.s3.amazonaws.com/18/img/avatarplaceholder.png",
    "fullName": "Shigenobu Nagamori",
    "designation": "Manager",
    "project":"Apps Dev Programmer Analyst",
    "location":"India",
    "user_id": "ak49554"
  };
  notificationData: object[] = [
    {
    "newFlag": true,
    "profileImg":"https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
    "notifyData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "timestamp" : "13:04 pm"
  },
  {
    "newFlag": true,
    "profileImg":"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    "notifyData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "timestamp" : "11:40 am"
  },
  {
    "newFlag": false,
    "profileImg":"https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    "notifyData": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "timestamp" : "Yesterday, 10:10 pm"
  }
  ];

}
