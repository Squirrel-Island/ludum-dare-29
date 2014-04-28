var Modules = {};

Modules.content = {
  story1: {
    mode: "story",
    content: ["There once was a kiddie.", "Little Willy"],
    bg: "faces.png"
  },
  battle1: {
    mode: "battle",
    bg: "faces.png",
    content: [
      prompt1 = {
        question: ["Should you kill this guy?"],
        good: "No, definitely not.",
        bad: "YES, kill him!"
      },
      prompt2 = {
        question: ["Should you smack this guy?"],
        good: "Nope.",
        bad: "Yep"
      }
    ]
  },
  story2: {
    mode: "story",
    content: ["Wango McDango", "GodDarnBlango"]
  }
};
