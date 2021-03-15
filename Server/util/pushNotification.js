const { Expo } = require('expo-server-sdk');

const sendNotification = async (targetToken, senderName, message) => {
    const expo = new Expo();
    const chunks = expo.chunkPushNotifications([
        { to: targetToken, sound: 'default', title: `${senderName} messaged you`, body: message, }
    ]);

    const sendChunks = async () => {
        chunks.forEach(async chunk => {
            try {
                const tickets = await expo.sendPushNotificationsAsync(chunk);
                console.log("Tickets", tickets);
            } catch (error) {
                console.log("Error sending chunk", error);
            }
        });
    };

    await sendChunks();
};

module.exports = sendNotification;