import React from 'react'
import './PaperStyles.css'

function Paper() {
  return (
    <div name='paper' className='paper'>
        <div className='container-paper-1'>
        <h1>Pros/Cons of Paper books</h1>
        </div>
        <div className='container-paper-2'>
            <div className='left'>
                <h2>Pros</h2>
                <ul>
                  <li>No Battery Dependency</li>
                  <li>Collectability</li>
                  <li>Ease of Annotation</li>
                  <li>No Digital Distractions</li>
                  <li>Easily Shared and Borrowed</li>
                </ul>
            </div>
            <div className='right'>
              <h2>Cons</h2>
              <ul>
                <li>Physical Space</li>
                <li>Lightweight and Portability</li>
                <li>Environmental Impact</li>
                <li>Durability</li>
                <li>Cost</li>
              </ul>
            </div>
        </div>
        <div className='container-digital-1'>
          <h1>Pros/Cons of Digital Books</h1>
        </div>
        <div className='container-digital-2'>
          <div className='left'>
              <h2>Pros</h2>
              <ul>
                <li>Space Saver</li>
                <li>Accessibility</li>
                <li>Cost</li>
                <li>Search and Navigation</li>
                <li>Portability</li>
              </ul>
          </div>
          <div className='right'>
            <h2>Cons</h2>
            <ul>
              <li>Eye Strain</li>
              <li>Digital Distractions</li>
              <li>Technological Obsolescence</li>
              <li>Ownership</li>
              <li>Battery Dependent</li>
            </ul>
          </div>        
        </div>
        

    </div>
  )
}

export default Paper