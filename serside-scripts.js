$("#containerchat").load("https://emarquez19.github.io/chat.html #chat-box");
// $("head").appendChild('<link rel="stylesheet" href="https://emarquez19.github.io/py-chat.css">');
$("head link[rel='stylesheet']").last().after('<link rel="stylesheet" href="https://emarquez19.github.io/py-chat.css">');