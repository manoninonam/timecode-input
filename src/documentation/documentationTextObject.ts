export const documentationTextObject = {
    framerate: {
      title: "Framerate",
      content: {
        text: "Frame rate is the number of individual video frames that your camera captures, per second. In video production, a video’s frame rate is expressed as frames per second (fps). There are two types of framerates. Drop-frame and non drop-frame.",
        subContent: [{
            title: "Drop frame timecode",
            text: "In the non-drop frame method, the frame rate is specified as a whole number, such as 30fps or 60fps. This means that each second of video is made up of exactly that many frames, and the frames are displayed at a consistent rate.",
        },
           {
            title: "Non-drop frame timecode",
            text: "In the drop frame method, the frame rate is specified as a fraction, such as 29.97fps or 59.94fps. This means that the actual rate at which frames are displayed is slightly lower than the specified rate, and some frames are “dropped” in order to maintain a consistent rate. This method is typically used when the video will be broadcast over television, where the frame rate must be synchronized with the broadcast signal.",
           }]
      },
      isAccordeon: true,
    },
    ltrVsRtl: {
      title: "LTR vs RTL",
      content: {
        text: "To accomodate the different preferences in direction while inserting a timecode, two variants have been made. One supporting left-to-right input, the other supporting right-to-left input",
        subContent: undefined
      },
      isAccordeon: false,
    },
  };