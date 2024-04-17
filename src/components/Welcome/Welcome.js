import  { React } from "react";
// import welcomeImg from "../../assets/img/Chef-Mike.png";
import './Welcome.scss';
import InstagramEmbed from 'react-instagram-embed';


export const Welcome = () => {
  return (
    <>
    <h1>Your Private Chef: Mike</h1>
    <InstagramEmbed
  url='https://www.instagram.com/p/CrqybT5Jx3u/'
  clientAccessToken=''
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>


    </>
  )
}