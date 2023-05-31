"use client";
import './page.css'
import React, { useState } from 'react';
import Tabs from '../components/tabs/tabs';
import {useParams} from 'next/navigation';

export default function() {
  const movie = {title: 'John Wick',}
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="page-container">
      <div className="menu-bar">
        <a href='/'>
          <img style={{height: '40px', width: 'auto', display: 'block', margin: '5px', marginLeft:'15px'}} src='https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-pride.png'/>
        </a>
      </div>
      <div className="main-body" style={{backgroundImage: `url("${process.env.imdbPhotoURL}/h8gHn0OzBoaefsYseUByqsmEDMY.jpg")`}}>
        <div className='dark-body'>
          <div className='header-card'>
          <img className='poster-image' src={`${process.env.imdbPhotoURL}/vLuWnBnCRTU8WxihMGkebcbu5f.jpg`}/>
          <div className='info-card'>
            <p className='text-header'>{movie.title}</p>
            <p><b>Released:</b> 06/03/2023</p>
            <p><b>Director:</b> Chad Stahelski</p>
            <button className='trailer-button'>
              <div style={{width: "30px", height:"2em"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white'>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
                <span style={{height:'100%', verticalAlign:'center'}}>Trailer</span>
            </button>
          </div>
          </div>
          <div className='info-section'>
            <div className='info-header'>
              <button
                className={activeTab === 1 ? 'tab-button-active' : ''}
                onClick={() => setActiveTab(1)}
              >
                About
              </button>
              <button
                className={activeTab === 2 ? 'tab-button-active' : ''}
                onClick={() => setActiveTab(2)}
              >
                Cast
              </button>
              <button
                className={activeTab === 3 ? 'tab-button-active' : ''}
                onClick={() => setActiveTab(3)}
              >
                Ratings
              </button>
            </div>
            <hr style={{position:'relative',width:'90%', left:'5%',border:'none',padding:'2px',background:'linear-gradient(to right, #2b5876, #4e4376)'}}></hr>
            <div className='info-box'>
              {activeTab === 1 && <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</div>}
              {activeTab === 2 && <div>Content for Tab 2</div>}
              {activeTab === 3 && <div>Content for Tab 3</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}