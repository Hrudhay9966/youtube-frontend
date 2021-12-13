import React from 'react'
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
             image="https://pbs.twimg.com/profile_images/1428936441359323142/rdszNzrj_400x400.jpg"
            channel="Intellegent Programmer"
            verified
            subs="780k"
            noofVideos={546}
            description="here you can develope your skills in react programming and find a good mind to use this tips"
           />
           <hr/>
           <VideoRow
           title="Become a react developer with me | 2019/2021"
           views="52.1M views"
           timestamp="9 days ago"
           channelImage="https://pbs.twimg.com/profile_images/1428936441359323142/rdszNzrj_400x400.jpg"
           channel="Kireeti React programmer"
           image="https://cdn.gulte.com/wp-content/uploads/2021/10/Prabhas-1.jpg"
           description="here you can develope your skills in react programming and find a good mind to use this tips"/>
           <VideoRow
           title="Become a react developer with me | 2019/2021"
           views="52.1M views"
           timestamp="9 days ago"
           channelImage="https://pbs.twimg.com/profile_images/1428936441359323142/rdszNzrj_400x400.jpg"
           channel="Kireeti React programmer"
           image="https://cdn.gulte.com/wp-content/uploads/2021/10/Prabhas-1.jpg"
           description="here you can develope your skills in react programming and find a good mind to use this tips"/>
           <VideoRow
           title="Become a react developer with me | 2019/2021"
           views="52.1M views"
           timestamp="9 days ago"
           channelImage="https://pbs.twimg.com/profile_images/1428936441359323142/rdszNzrj_400x400.jpg"
           channel="Kireeti React programmer"
           image="https://cdn.gulte.com/wp-content/uploads/2021/10/Prabhas-1.jpg"
           description="here you can develope your skills in react programming and find a good mind to use this tips"/>
           <VideoRow
           title="Become a react developer with me | 2019/2021"
           views="52.1M views"
           timestamp="9 days ago"
           channelImage="https://pbs.twimg.com/profile_images/1428936441359323142/rdszNzrj_400x400.jpg"
           channel="Kireeti React programmer"
           image="https://cdn.gulte.com/wp-content/uploads/2021/10/Prabhas-1.jpg"
           description="here you can develope your skills in react programming and find a good mind to use this tips"/>
           <VideoRow
           title="Become a react developer with me | 2019/2021"
           views="52.1M views"
           timestamp="9 days ago"
           channelImage="https://pbs.twimg.com/profile_images/1428936441359323142/rdszNzrj_400x400.jpg"
           channel="Kireeti React programmer"
           image="https://cdn.gulte.com/wp-content/uploads/2021/10/Prabhas-1.jpg"
           description="here you can develope your skills in react programming and find a good mind to use this tips"/>
        </div>
       
    );
}

export default SearchPage;
