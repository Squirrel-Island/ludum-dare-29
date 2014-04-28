var Modules = {};

Modules.content = {
  play: {
    mode: "story",
    content: ["Play"]
  },
  story1: {
    mode: "story",
    content: ["There once was a kiddie.", "Little Willy", "UABHSKR GJBAKRJGBK AJBGKAJBGKJABGKA JBGKJBA."],
    bg: "faces.png",
    bgm: "story"
  },
  battle1: {
    mode: "battle",
    bg: "battle.jpg",
    bgm: "battle",
    content: [
      prompt1 = {
        question: "Should you kill this guy?",
        good: "No, definitely not.",
        bad: "YES, kill him!"
      },
      prompt2 = {
        question: "Should you smack this guy?",
        good: "Nope.",
        bad: "Yep"
      }
    ]
  },
  story2: {
    mode: "story",
    content: ["Wango McDango", "GodDarnBlango"],
    bg: "faces.png",
    bgm: "story"
  }
};
