$(document).ready(function () {

  firebase.initializeApp({
    apiKey: "AIzaSyAF6srNGOLXtiRjyYwfrFe3BRtN__nBGYs",
    authDomain: "f2e2025.firebaseapp.com",
    projectId: "f2e2025",
    storageBucket: "f2e2025.firebasestorage.app",
    messagingSenderId: "377012260972",
    appId: "1:377012260972:web:2c30d9d0e54731a3930849"
  });

  let chatroomDocRef = firebase.firestore()
    .collection("board")
    .doc("board1");

  let messagesCollectionRef
    = chatroomDocRef.collection("messages");

  let queryMessagesCollectionRef
    = messagesCollectionRef.orderBy("timeStamp", "desc");

  const $messageField = $('#message-field');
  const $nameField = $('#name-field');
  const $messageList = $('#message-list');

  $messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      let senderName = $nameField.val();
      let message = $messageField.val();

      messagesCollectionRef.add({
        senderName: senderName,
        message: message,
        timeStamp: Date.now(),
      });

      $messageField.val('');
    }
  });

  queryMessagesCollectionRef.onSnapshot(function (querySnapshot) {
    $messageList.html("");

    querySnapshot.forEach(function (doc) {
      let senderName = doc.data().senderName || "anonymous";
      let message = doc.data().message;
      let messageItem = `
      <li class="message-item">
        <strong class="chat-username">${senderName}:</strong>
        ${message}
      </li>
      `;
      $messageList.append(messageItem);
    });

    $messageList[0].scrollTop = $messageList[0].scrollHeight;
  });
});
