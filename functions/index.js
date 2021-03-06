/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 * ...
 */

// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp();

// TODO(DEVELOPER): Write the addWelcomeMessage Function here.
// Adds a message that welcomes new users into the chat.
exports.addWelcomeMessages = functions.auth.user().onCreate(async (user) => {
	console.log('A new user signed in for the first time.');
	const fullName = user.displayName || 'Anonymous';

	// Saves the new welcome message into the database
	// which then displays it in the FriendlyChat clients.
	await admin
		.firestore()
		.collection('messages')
		.add({
			name: 'Firebase Bot',
			profilePicUrl: '/images/firebase-logo.png', // Firebase logo
			text: `${fullName} signed in for the first time! Welcome!`,
			timestamp: admin.firestore.FieldValue.serverTimestamp(),
		});
	console.log('Welcome message written to database.');
});

// TODO(DEVELOPER): Write the blurImages Function here.

// TODO(DEVELOPER): Write the sendNotification Function here.
