import React, { useState } from 'react';
import {nanoid} from "nanoid"

import './App.css';
import ContentEditor from './components/editor';
const App = () => {
  const [title, setTitle] = useState(`AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings and a customisable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your Apple devices. And they’re ready to use straight out of the case.
  Incredibly light, noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you՚re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts and calls.
  Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you. And Conversation Boost makes it easier to hear people during face-to-face conversations in noisy environments by focusing your AirPods Pro on the person talking directly in front of you.`)
  const [aboutTitle,setAboutTitle] = useState(`Active Noise Cancellation blocks outside noise, so you can immerse yourself in music
  Compatible with iPad (6th, 7th and 8th generation),iPad Air (3rd generation), iPad Pro 12.9-inch (1st and 2nd generation), iPad Pro 10.5-inch, iPad Pro 9.7-inch, iPad mini (5th generation)
  With pixel-perfect precision and tilt and pressure sensitivity, Apple Pencil (2nd generation) transforms into your favourite creative instrument, your paint brush, your charcoal or your pencil. It makes painting, sketching, doodling and even note-taking better than ever
  Adaptive EQ automatically tunes music to the shape of your ear
  Force sensor lets you easily control your entertainment, answer or end calls, and more
  Apple Pencil features the precision, responsiveness and natural fluidity of a traditional writing instrument and the versatility to become so much more.
  It magnetically attaches to iPad Pro and iPad Air, charges wirelessly and lets you change tools with a simple double tap.
  Compatible with iPad (6th, 7th and 8th generation),iPad Air (3rd generation), iPad Pro 12.9-inch (1st and 2nd generation), iPad Pro 10.5-inch, iPad Pro 9.7-inch, iPad mini (5th generation)`)
  
  const generateEditableContentHtml = (passedData, type = "plain") => {
    let clonedData = passedData?.slice()?.trim(); // Slice returns a duplicate
    /**
     * Splitting the string at newline into array of strings
     */
    let placeholder = clonedData?.split(/\r\n|\r|\n/);
    /**
     *  We are returning the array after converting the string type items to HTML type
     */
    const tag = type === "plain" ? "div" : "li";
    const parentTag = type === "plain" ? "div" : "ul";

    const generatedHtml = placeholder?.map((entry) => {
      const key = nanoid();
      return `<${tag} key=${key}>${entry ? entry : `<br />`}</${tag}>`;
    });

    return `<${parentTag}> ${generatedHtml?.join("")} </${parentTag}>`;
  };

  return (
    <div className="App">
      <ContentEditor 
        htmlContent={generateEditableContentHtml(title,"plain")} 
        setContent={setTitle}
      />
    </div>
  )
}
export default App;