import  { React } from "react";
// import '../App.css';
import './AboutTheChef.scss';
import welcomeImg from "../../assets/img/Chef-Mike.png";


export const AboutTheChef = () => {
  return (
    <>
    <h1>I am currently the Head Chef at Breakside Brewery Dekum Pub in Portland, Oregon.</h1><br></br>
      <p>I started my culinary career at age 14. I spent my high school career working at Togo's in Beaverton, OR. I worked my way from dishwasher to management. I attended a small college in Sitka, Alaska for Natural Resources Management with an emphasis on Outdoor Recreation Leadership. Landed a great job for 5 years with Pizzicato in Portland.</p><br></br>
      <p>I then went on to open a new location for Rose's Restaurant and Bakery (my first real full service restaurant experience.) Had a hankering to work in a brewpub. Started as a pantry cook at Bridgeport Brewpub in Portland, OR and made my way up to lead line cook.</p>
      <p>I wanted to use my new line experience and converge with my management experience. I then took a job as a sous chef at the very busy Pelican Brewery in Pacific City, OR. After a couple years I wanted to move back to the "big" city. I was offered a job in 2010 opening a brand new, small brewpub in NE Portland called Breakside Brewery. I have been Head Chef at Breakside for 14 years and our pub/beer/food/brand is super successful.</p><br></br> 
      <p>I love the ability to use my talent for gatherings outside of the pub and happily also accept work as a private chef doing catering for small events in the PNW.</p>
    <img src={welcomeImg} alt="Welcome Img of Chef Mike"/>
    </>
  )
}